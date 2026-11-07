import { test, mock } from "node:test";
import assert from "node:assert/strict";
import handler from "../api/diagnostic.js";

const valid = {
  name: "Form QA", phone: "+52 55 1234 5678", email: "qa@example.com",
  model: "Macintosh SE/30", year: "1989", service: "Diagnostic",
  powerState: "Does not turn on", description: "No startup sound.", language: "fr",
};

async function invoke(body = valid, method = "POST") {
  const response = {
    headers: {}, code: 200, body: null,
    setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; },
  };
  await handler({ method, body }, response);
  return response;
}

test("accepts only POST and rejects invalid input before contacting Olivia", async () => {
  const fetchMock = mock.method(globalThis, "fetch", async () => { throw new Error("Unexpected network request"); });
  try {
    assert.equal((await invoke(valid, "GET")).code, 405);
    for (const body of [null, "{bad json", {}, { ...valid, email: "invalid" }, { ...valid, name: "   " }]) {
      assert.equal((await invoke(body)).code, 400);
    }
    assert.equal(fetchMock.mock.callCount(), 0);
  } finally { mock.restoreAll(); }
});

test("delivers contact details, diagnosis and photo to the fixed Archivo Mac inbox", async () => {
  const photo = { name: "mac.png", type: "image/png", dataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aV1kAAAAASUVORK5CYII=" };
  const calls = [];
  mock.method(globalThis, "fetch", async (url, options) => {
    calls.push({ url, options });
    return Response.json(calls.length === 1 ? { clientCode: "archivomac", identity: "test-identity" } : { conversation: { id: 123 }, message: { id: 456 } });
  });
  try {
    const response = await invoke({ ...valid, photo, clientCode: "other-client", visitorId: "supplied-id" });
    assert.equal(response.code, 200);
    assert.deepEqual(response.body, { success: true });
    assert.equal(calls[0].url, "https://olivia-ai.o7digital.com/api/widget/identity");
    assert.equal(calls[0].options.headers.Origin, "https://macretro.vercel.app");
    assert.equal(calls[1].options.headers["X-Olivia-Widget-Identity"], "test-identity");
    const payload = JSON.parse(calls[1].options.body);
    assert.equal(payload.clientCode, "archivomac");
    assert.match(payload.visitorId, /^diagnostic-/);
    assert.equal(payload.visitorName, valid.name);
    assert.equal(payload.email, valid.email);
    assert.equal(payload.phone, valid.phone);
    assert.equal(payload.language, "fr");
    assert.equal(payload.source, "website-form");
    assert.match(payload.content, /Macintosh SE\/30/);
    assert.match(payload.content, /No startup sound/);
    assert.deepEqual(payload.metadata.attachment, photo);
  } finally { mock.restoreAll(); }
});

test("rejects unsupported, oversized and disguised photos", async () => {
  for (const photo of [
    { type: "image/svg+xml", dataUrl: "data:image/svg+xml;base64,PHN2Zz4=" },
    { type: "image/png", dataUrl: "data:image/png;base64," + "A".repeat(3_000_000) },
    { type: "image/png", dataUrl: "data:image/png;base64,PHN2Zz4=" },
  ]) assert.equal((await invoke({ ...valid, photo })).code, 400);
});

test("never confirms success for identity errors, storage failures or unconfirmed writes", async () => {
  for (const scenario of ["identity-error", "wrong-client", "storage-error", "unconfirmed", "network-error"]) {
    let calls = 0;
    mock.method(globalThis, "fetch", async () => {
      calls++;
      if (scenario === "network-error") throw new Error("Offline");
      if (calls === 1) return Response.json({ clientCode: scenario === "wrong-client" ? "other" : "archivomac", identity: "test" }, { status: scenario === "identity-error" ? 503 : 200 });
      return Response.json(scenario === "unconfirmed" ? {} : { error: "Unavailable" }, { status: scenario === "storage-error" ? 503 : 200 });
    });
    try {
      const response = await invoke();
      assert.equal(response.code, 502, scenario);
      assert.equal(response.body.success, undefined);
    } finally { mock.restoreAll(); }
  }
});

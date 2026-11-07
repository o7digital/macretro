const OLIVIA_URL = "https://olivia-ai.o7digital.com";
// This is the existing Archivo Mac site binding registered with Olivia.
const OLIVIA_ORIGIN = "https://macretro.vercel.app";
const MAX_PHOTO_BYTES = 2 * 1024 * 1024;
const LANGUAGES = new Set(["es", "en", "fr", "de", "it"]);
const PHOTO_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function clean(value, limit = 200) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function validatePhoto(photo) {
  if (photo == null) return null;
  if (!PHOTO_TYPES.has(photo.type) || typeof photo.dataUrl !== "string") throw new Error("Invalid photo");
  const prefix = `data:${photo.type};base64,`;
  const encoded = photo.dataUrl.slice(prefix.length);
  if (!photo.dataUrl.startsWith(prefix) || !encoded || encoded.length > Math.ceil(MAX_PHOTO_BYTES / 3) * 4 || !/^[A-Za-z0-9+/]+={0,2}$/.test(encoded)) {
    throw new Error("Invalid photo");
  }
  const bytes = Buffer.from(encoded, "base64");
  const validSignature = photo.type === "image/jpeg"
    ? bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff
    : photo.type === "image/png"
      ? bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
      : bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
  if (!validSignature || bytes.length > MAX_PHOTO_BYTES) throw new Error("Invalid photo");
  return { name: clean(photo.name) || "photo", type: photo.type, dataUrl: photo.dataUrl };
}

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  let fields;
  let photo;
  try {
    const payload = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
    if (!payload || typeof payload !== "object") throw new Error("Invalid request");
    fields = {
      name: clean(payload.name), phone: clean(payload.phone), email: clean(payload.email),
      model: clean(payload.model), year: clean(payload.year), service: clean(payload.service),
      powerState: clean(payload.powerState), description: clean(payload.description, 5000),
      language: LANGUAGES.has(payload.language) ? payload.language : "es",
    };
    if ([fields.name, fields.phone, fields.email, fields.model, fields.service, fields.powerState, fields.description].some((value) => !value) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      throw new Error("Missing or invalid fields");
    }
    photo = validatePhoto(payload.photo);
  } catch {
    return response.status(400).json({ error: "Invalid request" });
  }

  try {
    const identityResponse = await fetch(`${OLIVIA_URL}/api/widget/identity`, {
      headers: { Origin: OLIVIA_ORIGIN }, signal: AbortSignal.timeout(10000),
    });
    if (!identityResponse.ok) throw new Error("Identity unavailable");
    const identity = await identityResponse.json();
    if (identity.clientCode !== "archivomac" || !identity.identity) throw new Error("Invalid site binding");

    const content = [
      "Solicitud de diagnóstico / Diagnostic request",
      `Nombre: ${fields.name}`, `Teléfono: ${fields.phone}`, `Email: ${fields.email}`,
      `Modelo: ${fields.model}`, `Año aproximado: ${fields.year || "—"}`,
      `Servicio: ${fields.service}`, `Estado de funcionamiento: ${fields.powerState}`,
      `Descripción: ${fields.description}`,
    ].join("\n");
    const result = await fetch(`${OLIVIA_URL}/api/widget/conversations`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: OLIVIA_ORIGIN, "X-Olivia-Widget-Identity": identity.identity },
      body: JSON.stringify({
        clientCode: "archivomac", visitorId: `diagnostic-${crypto.randomUUID()}`,
        visitorName: fields.name, email: fields.email, phone: fields.phone,
        source: "website-form", language: fields.language, content,
        metadata: { ...fields, intent: "diagnostic", ...(photo ? { attachment: photo } : {}) },
      }),
      signal: AbortSignal.timeout(25000),
    });
    if (!result.ok) throw new Error("Delivery unavailable");
    const saved = await result.json();
    if (!saved.conversation?.id || !saved.message?.id) throw new Error("Delivery not confirmed");
    return response.status(200).json({ success: true });
  } catch {
    return response.status(502).json({ error: "Unable to deliver request. Please retry." });
  }
}

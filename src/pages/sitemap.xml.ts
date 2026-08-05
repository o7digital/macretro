import { languages, localizedPath } from "../data/i18n";

const base = "https://archivomac.mx";
const alternates = languages.map((lang) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${base}${localizedPath(lang)}" />`).join("\n    ");

export function GET() {
  const urls = languages.map((lang) => {
    const href = `${base}${localizedPath(lang)}`;
    return `  <url>
    <loc>${href}</loc>
    ${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${base}/" />
  </url>`;
  }).join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`, {
    headers: { "Content-Type": "application/xml" }
  });
}

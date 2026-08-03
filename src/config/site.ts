export const contact = {
  brandName: "Archivo Mac",
  baseline: "Restauración · conservación · colección",
  city: "Ciudad de México",
  email: "hola@archivomac.mx",
  whatsappNumber: "525500000000",
  hours: "Lunes a viernes, 10:00-18:00",
  appointmentNote: "Atención únicamente con cita",
  instagramUrl: "https://www.instagram.com/"
};

export const seo = {
  title: "Reparación y restauración de Macs antiguos en CDMX | Archivo Mac",
  description:
    "Reparación, mantenimiento, restauración, compra y venta de Macs antiguos y equipos Apple de colección en Ciudad de México.",
  canonical: "https://archivomac.mx/",
  keywords: [
    "reparación de Macs antiguos CDMX",
    "reparación Mac vintage México",
    "restauración Macintosh",
    "mantenimiento de Macs antiguos",
    "venta de Macs de colección",
    "compra de computadoras Apple antiguas",
    "valuación de Macintosh",
    "reparación de iMac G3",
    "reparación Power Mac",
    "coleccionistas Apple México"
  ]
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

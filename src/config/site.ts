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
  image: "https://archivomac.mx/marissa-lewis-PoL7eR-p4Z0-unsplash.jpg",
  keywords: [
    "reparación de Macs antiguos México CDMX",
    "reparación Mac vintage México CDMX",
    "restauración Macintosh México CDMX",
    "mantenimiento de Macs antiguos México CDMX",
    "venta de Macs de colección México CDMX",
    "compra de computadoras Apple antiguas México CDMX",
    "valuación de Macintosh México CDMX",
    "reparación de iMac G3 México CDMX",
    "reparación Power Mac México CDMX",
    "coleccionistas Apple México CDMX"
  ]
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

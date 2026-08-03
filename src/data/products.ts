export type ProductStatus =
  | "Disponible"
  | "Reservada"
  | "Vendida"
  | "En restauración"
  | "Próximamente";

export type ProductCategory = "Macintosh" | "iMac" | "Power Mac" | "Portátiles" | "Accesorios";

export const productFilters = ["Todos", "Macintosh", "iMac", "Power Mac", "Portátiles", "Accesorios"] as const;

export const products = [
  {
    name: "iMac G3 Blueberry",
    year: "1999",
    version: "Rev. D",
    condition: "Restaurada · A-",
    price: "$18,900 MXN",
    status: "Disponible" as ProductStatus,
    category: "iMac" as ProductCategory,
    reference: "AM-COL-1999-017",
    description: "Unidad translúcida catalogada, revisada electrónicamente y preservada con accesorios compatibles.",
    gallery: ["/images/catalog/imac-g3-blueberry.webp", "/images/catalog/imac-g3-blueberry.avif"]
  },
  {
    name: "Power Mac G4 Mirrored Drive Doors",
    year: "2003",
    version: "Dual 1.25 GHz",
    condition: "Seleccionada · B+",
    price: "$24,500 MXN",
    status: "En restauración" as ProductStatus,
    category: "Power Mac" as ProductCategory,
    reference: "AM-COL-2003-004",
    description: "Torre revisada para colección de trabajo, con diagnóstico de fuente y limpieza técnica completa.",
    gallery: ["/images/catalog/power-mac-g4.webp", "/images/catalog/power-mac-g4.avif"]
  },
  {
    name: "Macintosh Classic II",
    year: "1991",
    version: "4 MB / 40 MB",
    condition: "Restaurada · A",
    price: "$16,800 MXN",
    status: "Disponible" as ProductStatus,
    category: "Macintosh" as ProductCategory,
    reference: "AM-COL-1991-028",
    description: "Compacta beige con recap documentado, pruebas de estabilidad y expediente fotográfico.",
    gallery: ["/images/catalog/macintosh-classic-ii.webp", "/images/catalog/macintosh-classic-ii.avif"]
  }
];

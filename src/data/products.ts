export type ProductCategory = "Macintosh" | "iMac" | "Power Mac" | "Portátiles";

export const productFilters = ["Todos", "Macintosh", "iMac", "Power Mac", "Portátiles"] as const;

export const products = [
  {
    name: "iBook G3 Clamshell",
    year: "1999",
    version: "Blueberry",
    era: "Portátiles translúcidos",
    category: "Portátiles" as ProductCategory,
    reference: "AM-COL-1999-017",
    description: "Primer iBook de consumo con carcasa translúcida, asa integrada y una identidad visual heredada del iMac G3.",
    image: "/ben-szymanski-V73ucYDT9DQ-unsplash.jpg",
    alt: "iBook G3 Clamshell Blueberry con Mac OS 9 en pantalla"
  },
  {
    name: "iBook G3 Clamshell",
    year: "1999",
    version: "Blueberry · vista lateral",
    era: "Diseño portátil de finales de los 90",
    category: "Portátiles" as ProductCategory,
    reference: "AM-COL-1999-018",
    description: "Una de las siluetas más reconocibles de la era Apple translúcida: color, bisagras amplias y presencia casi industrial.",
    image: "/ben-szymanski-IXfms-eQ3Ok-unsplash.jpg",
    alt: "iBook G3 Clamshell Blueberry abierto visto de lado"
  },
  {
    name: "Macintosh Classic",
    year: "1991",
    version: "Compact Mac",
    era: "Macintosh compactos",
    category: "Macintosh" as ProductCategory,
    reference: "AM-COL-1991-028",
    description: "Modelo compacto de la línea Macintosh clásica, con pantalla CRT integrada y lenguaje visual beige de principios de los 90.",
    image: "/marissa-lewis-PoL7eR-p4Z0-unsplash.jpg",
    alt: "Macintosh Classic con teclado y mouse sobre una mesa"
  },
  {
    name: "Macintosh Classic",
    year: "1990",
    version: "Sistema compacto en uso",
    era: "Macintosh compactos",
    category: "Macintosh" as ProductCategory,
    reference: "AM-COL-1990-011",
    description: "La familia Classic conserva el formato todo en uno que definió la primera década del Macintosh.",
    image: "/denis-zelenykh-gmiw2h3KX98-unsplash.jpg",
    alt: "Macintosh Classic encendido en un espacio de colección"
  }
];

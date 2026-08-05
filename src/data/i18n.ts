export const languages = ["es", "en", "fr", "de", "it"] as const;
export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  de: "DE",
  it: "IT"
};

export const defaultLanguage: Language = "es";

export function localizedPath(lang: Language) {
  return lang === defaultLanguage ? "/" : `/${lang}/`;
}

export const content: any = {
  es: {
    htmlLang: "es",
    contact: {
      brandName: "Archivo Mac",
      baseline: "Restauración · conservación · colección",
      city: "Ciudad de México",
      email: "hola@archivomac.mx",
      whatsappNumber: "525500000000",
      hours: "Lunes a viernes, 10:00-18:00",
      appointmentNote: "Atención únicamente con cita",
      instagramUrl: "https://www.instagram.com/"
    },
    seo: {
      title: "Reparación y restauración de Macs antiguos en CDMX | Archivo Mac",
      description:
        "Reparación, mantenimiento, restauración, compra y venta de Macs antiguos y equipos Apple de colección en Ciudad de México.",
      canonical: "https://archivomac.mx/",
      image: "https://archivomac.mx/marissa-lewis-PoL7eR-p4Z0-unsplash.jpg",
      keywords: [
        "reparación de Macs antiguos CDMX",
        "reparación Mac vintage México",
        "restauración Macintosh",
        "mantenimiento de Macs antiguos",
        "modelos Mac retro",
        "coleccionistas Apple México",
        "reparación Macintosh Classic",
        "reparación iBook G3",
        "recap Macintosh",
        "fuentes de poder Mac antiguas",
        "recuperación de datos Mac antiguo"
      ]
    },
    nav: {
      services: "Servicios",
      collection: "Colección",
      method: "Nuestro método",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
      cta: "Valuar mi equipo",
      open: "Abrir menú",
      close: "Cerrar menú",
      label: "Navegación principal"
    },
    top: ["Atención con cita · Ciudad de México", "Diagnóstico especializado en 24-48 horas"],
    hero: {
      title: "El tiempo no vuelve obsoleta una gran máquina.",
      emphasis: "obsoleta",
      lead:
        "Devolvemos a la vida Macs clásicos y equipos Apple de colección con criterio técnico, respeto histórico y acabados de museo.",
      primary: "Solicitar diagnóstico",
      secondary: "Explorar la colección",
      facts: [
        ["+18", "años de experiencia"],
        ["320", "equipos preservados"],
        ["90 días", "de garantía"]
      ],
      alt: "Macintosh clásico restaurado en un ambiente de colección",
      badge: ["CONDICIÓN", "Restaurada · A+"]
    },
    manifest: {
      line: "NO REPARAMOS OBJETOS.",
      title: "Preservamos historias que todavía merecen encender."
    },
    expertise: {
      eyebrow: "Especialistas en Mac retro",
      title: "Del diagnóstico electrónico a la conservación histórica.",
      text:
        "Trabajamos con Macintosh compactos, iMac G3, Power Mac, iBook, PowerBook y primeras generaciones Intel. Cada equipo se revisa como pieza técnica y como objeto de colección: placa lógica, fuente, CRT o LCD, almacenamiento, carcasa, teclado, mouse, accesorios y documentación.",
      items: [
        ["Reparación electrónica", "Recap, microsoldadura, fuentes de poder, conectores, unidades ópticas, discos duros, memorias y fallas intermitentes."],
        ["Restauración estética", "Limpieza profunda, estabilización de plásticos, revisión de amarillamiento, teclado, mouse, cables y presentación final."],
        ["Archivo y trazabilidad", "Fotografías, número de serie, configuración, piezas reemplazadas, pruebas de estabilidad y recomendaciones de conservación."]
      ]
    },
    sections: {
      servicesEyebrow: "Lo que hacemos",
      servicesTitle: "Servicio técnico con criterio de coleccionista.",
      collectionEyebrow: "Modelos de época",
      collectionTitle: "Máquinas con historia. Iconos del Mac retro.",
      methodEyebrow: "Estándar Archivo",
      methodTitle: "Rigor técnico. Respeto por lo original.",
      methodText:
        "Conservamos piezas originales cuando es posible, documentamos componentes, trazabilidad, fotografías, pruebas de estabilidad y valor histórico.",
      valueTitle: "¿Quieres vender o valuar una Mac antigua?",
      valueText:
        "Envía fotografías generales, número de serie, modelo, año aproximado, estado, accesorios, caja y documentación originales.",
      valueCta: "Enviar información por WhatsApp",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "Antes de traer tu Mac.",
      contactEyebrow: "Hablemos de tu equipo",
      contactTitle: "¿Qué historia quieres volver a encender?",
      contactText:
        "Envíanos fotografías, el modelo del equipo y una breve descripción. Te responderemos con los siguientes pasos.",
      formEyebrow: "Solicitud",
      formTitle: "Diagnóstico especializado"
    },
    services: [
      {
        title: "Reparación experta",
        description:
          "Diagnóstico preciso, microsoldadura, fuentes de alimentación, pantallas, almacenamiento y recuperación de equipos que otros talleres ya descartaron.",
        note: "Diagnóstico en 24-48 horas"
      },
      {
        title: "Mantenimiento y conservación",
        description:
          "Limpieza técnica, sustitución de componentes críticos, cambio de pasta térmica, recap, calibración y mantenimiento preventivo.",
        note: "Intervención documentada"
      },
      {
        title: "Compra, venta y valuación",
        description:
          "Seleccionamos Macs auténticas, revisadas y catalogadas. También valuamos colecciones, lotes, accesorios y piezas difíciles de encontrar.",
        note: "Procedencia verificada"
      }
    ],
    products: [
      {
        name: "iBook G3 Clamshell",
        year: "1999",
        version: "Blueberry",
        era: "Portátiles translúcidos",
        category: "Portátiles",
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
        category: "Portátiles",
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
        category: "Macintosh",
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
        category: "Macintosh",
        reference: "AM-COL-1990-011",
        description: "La familia Classic conserva el formato todo en uno que definió la primera década del Macintosh.",
        image: "/denis-zelenykh-gmiw2h3KX98-unsplash.jpg",
        alt: "Macintosh Classic encendido en un espacio de colección"
      }
    ],
    productFilters: ["Todos", "Macintosh", "iMac", "Power Mac", "Portátiles"],
    steps: [
      ["Registro", "Fotografías, número de serie, configuración y estado exterior."],
      ["Diagnóstico", "Pruebas técnicas y dictamen claro antes de intervenir."],
      ["Intervención", "Reparación especializada con componentes trazables."],
      ["Certificación", "Pruebas de estabilidad y expediente final de servicio."]
    ],
    faqs: [
      ["¿Reparan equipos que Apple ya considera obsoletos?", "Sí. Nos especializamos en equipos fuera de soporte oficial, desde Macintosh compactas hasta PowerPC e Intel de primeras generaciones."],
      ["¿Cómo funciona el diagnóstico?", "Recibimos el equipo con cita, documentamos su estado y entregamos un dictamen con opciones, tiempos y presupuesto antes de intervenir."],
      ["¿Compran colecciones completas?", "Sí. La valuación considera originalidad, estado, accesorios, empaque, documentación, procedencia y rareza."],
      ["¿Hacen envíos dentro de México?", "Sí. Coordinamos embalaje especializado y recomendamos seguro para piezas de colección o equipos restaurados."],
      ["¿Qué garantía ofrecen?", "Los servicios de reparación incluyen 90 días de garantía sobre la intervención realizada, salvo piezas vintage sin reemplazo disponible."],
      ["¿Utilizan piezas originales?", "Conservamos piezas originales siempre que sea técnicamente responsable. Cuando se reemplaza algo, documentamos procedencia y compatibilidad."],
      ["¿Pueden recuperar información de un equipo antiguo?", "Podemos evaluar discos y medios antiguos. La recuperación depende del estado físico y lógico del almacenamiento."]
      ,["¿Qué modelos trabajan con más frecuencia?", "Macintosh Classic, SE, SE/30, LC, Performa, iMac G3, Power Mac G3/G4, iBook G3, PowerBook y equipos Intel tempranos."]
      ,["¿Qué es un recap?", "Es la sustitución preventiva o correctiva de capacitores envejecidos. En Macs antiguos suele ser clave para estabilidad, video, sonido y encendido."]
    ],
    testimonials: [
      ["Recuperaron mi Macintosh SE/30 sin borrar las huellas de su historia. Funciona impecable y se siente auténtica, no reconstruida.", "Javier M.", "Coleccionista · CDMX"],
      ["El expediente final hizo toda la diferencia: fotografías, piezas y pruebas claras para una máquina que quiero conservar por años.", "María L.", "Diseñadora y coleccionista"],
      ["La valuación fue seria, sin promesas infladas. Entendieron el valor histórico del lote y también sus límites técnicos.", "Andrés R.", "Archivo privado"]
    ],
    footer:
      "Apple y sus productos son marcas de sus respectivos propietarios. Archivo Mac es un taller independiente y no está afiliado ni autorizado por Apple Inc.",
    footerSummary: "Reparación, mantenimiento, restauración y documentación de Macs vintage en Ciudad de México.",
    provisional: "Testimonio provisional",
    whatsapp: {
      service: "Hola Archivo Mac. Me interesa:",
      value:
        "Hola Archivo Mac. Quiero vender o valuar una Mac antigua. Tengo fotografías, número de serie, modelo, estado y accesorios para compartir.",
      contact: "Hola Archivo Mac. Quiero solicitar información sobre un equipo antiguo."
    }
  },
  en: {
    htmlLang: "en",
    contact: {
      brandName: "Archivo Mac",
      baseline: "Restoration · preservation · collection",
      city: "Mexico City",
      email: "hola@archivomac.mx",
      whatsappNumber: "525500000000",
      hours: "Monday to Friday, 10:00-18:00",
      appointmentNote: "By appointment only",
      instagramUrl: "https://www.instagram.com/"
    },
    seo: {
      title: "Vintage Mac repair and restoration in Mexico City | Archivo Mac",
      description:
        "Repair, maintenance, restoration, valuation, and historical documentation for vintage Macs and collectible Apple computers in Mexico City.",
      canonical: "https://archivomac.mx/en/",
      image: "https://archivomac.mx/marissa-lewis-PoL7eR-p4Z0-unsplash.jpg",
      keywords: ["vintage Mac repair Mexico City", "Macintosh restoration", "retro Mac models", "Apple collectors Mexico", "Macintosh Classic repair", "iBook G3 repair", "Mac recap service", "old Mac data recovery"]
    },
    nav: {
      services: "Services",
      collection: "Collection",
      method: "Our method",
      faq: "FAQ",
      contact: "Contact",
      cta: "Value my Mac",
      open: "Open menu",
      close: "Close menu",
      label: "Main navigation"
    },
    top: ["By appointment · Mexico City", "Specialized diagnosis in 24-48 hours"],
    hero: {
      title: "Time does not make a great machine obsolete.",
      emphasis: "obsolete",
      lead:
        "We bring classic Macs and collectible Apple computers back to life with technical judgment, historical respect, and museum-grade care.",
      primary: "Request diagnosis",
      secondary: "Explore the collection",
      facts: [
        ["+18", "years of experience"],
        ["320", "preserved machines"],
        ["90 days", "warranty"]
      ],
      alt: "Restored classic Macintosh in a collection setting",
      badge: ["CONDITION", "Restored · A+"]
    },
    manifest: {
      line: "WE DO NOT REPAIR OBJECTS.",
      title: "We preserve stories that still deserve to turn on."
    },
    expertise: {
      eyebrow: "Retro Mac specialists",
      title: "From electronic diagnosis to historical preservation.",
      text:
        "We work on compact Macintosh models, iMac G3, Power Mac, iBook, PowerBook, and early Intel generations. Each machine is reviewed as both technical equipment and a collectible object.",
      items: [
        ["Electronic repair", "Recap, microsoldering, power supplies, connectors, optical drives, hard drives, memory, and intermittent faults."],
        ["Cosmetic restoration", "Deep cleaning, plastic stabilization, yellowing review, keyboard, mouse, cables, and final presentation."],
        ["Archive and traceability", "Photos, serial number, configuration, replaced parts, stability tests, and preservation recommendations."]
      ]
    },
    sections: {
      servicesEyebrow: "What we do",
      servicesTitle: "Technical service with a collector's eye.",
      collectionEyebrow: "Period models",
      collectionTitle: "Machines with history. Icons of retro Mac.",
      methodEyebrow: "Archivo standard",
      methodTitle: "Technical rigor. Respect for the original.",
      methodText:
        "We preserve original parts whenever possible and document components, traceability, photos, stability tests, and historical value.",
      valueTitle: "Want to sell or value an old Mac?",
      valueText:
        "Send general photos, serial number, model, approximate year, condition, accessories, box, and original documentation.",
      valueCta: "Send details by WhatsApp",
      faqEyebrow: "FAQ",
      faqTitle: "Before bringing your Mac.",
      contactEyebrow: "Tell us about your machine",
      contactTitle: "What story do you want to turn on again?",
      contactText: "Send photos, the model, and a short description. We will reply with the next steps.",
      formEyebrow: "Request",
      formTitle: "Specialized diagnosis"
    },
    services: [
      {
        title: "Expert repair",
        description:
          "Precise diagnosis, microsoldering, power supplies, displays, storage, and recovery for machines other shops have already written off.",
        note: "Diagnosis in 24-48 hours"
      },
      {
        title: "Maintenance and preservation",
        description:
          "Technical cleaning, replacement of critical components, thermal paste, recap, calibration, and preventive maintenance.",
        note: "Documented intervention"
      },
      {
        title: "Buying, selling, and valuation",
        description:
          "We select authentic, reviewed, and catalogued Macs. We also value collections, lots, accessories, and hard-to-find parts.",
        note: "Verified provenance"
      }
    ],
    productFilters: ["All", "Macintosh", "iMac", "Power Mac", "Portables"],
    products: [],
    steps: [
      ["Record", "Photos, serial number, configuration, and exterior condition."],
      ["Diagnosis", "Technical tests and a clear report before any intervention."],
      ["Intervention", "Specialized repair with traceable components."],
      ["Certification", "Stability tests and a final service file."]
    ],
    faqs: [
      ["Do you repair machines Apple considers obsolete?", "Yes. We specialize in unsupported equipment, from compact Macintosh models to early PowerPC and Intel machines."],
      ["How does the diagnosis work?", "We receive the machine by appointment, document its condition, and provide options, timing, and pricing before intervening."],
      ["Do you buy full collections?", "Yes. Valuation considers originality, condition, accessories, packaging, documentation, provenance, and rarity."],
      ["Do you ship within Mexico?", "Yes. We coordinate specialized packing and recommend insurance for collectible pieces or restored machines."],
      ["What warranty do you offer?", "Repair services include a 90-day warranty on the work performed, except for vintage parts with no available replacement."],
      ["Do you use original parts?", "We preserve original parts whenever technically responsible. When something is replaced, we document provenance and compatibility."],
      ["Can you recover data from an old machine?", "We can evaluate old disks and media. Recovery depends on the physical and logical state of the storage."]
      ,["Which models do you work on most often?", "Macintosh Classic, SE, SE/30, LC, Performa, iMac G3, Power Mac G3/G4, iBook G3, PowerBook, and early Intel machines."]
      ,["What is a recap?", "It is the preventive or corrective replacement of aged capacitors. On vintage Macs it is often key for stability, video, sound, and startup."]
    ],
    testimonials: [
      ["They recovered my Macintosh SE/30 without erasing the marks of its history. It works flawlessly and feels authentic, not rebuilt.", "Javier M.", "Collector · Mexico City"],
      ["The final file made the difference: photos, parts, and clear tests for a machine I want to preserve for years.", "María L.", "Designer and collector"],
      ["The valuation was serious, with no inflated promises. They understood the historical value of the lot and its technical limits.", "Andrés R.", "Private archive"]
    ],
    footer:
      "Apple and its products are trademarks of their respective owners. Archivo Mac is an independent workshop and is not affiliated with or authorized by Apple Inc.",
    footerSummary: "Repair, maintenance, restoration, and documentation for vintage Macs in Mexico City.",
    provisional: "Provisional testimonial",
    whatsapp: {
      service: "Hello Archivo Mac. I am interested in:",
      value:
        "Hello Archivo Mac. I want to sell or value an old Mac. I have photos, serial number, model, condition, and accessories to share.",
      contact: "Hello Archivo Mac. I would like information about an old machine."
    }
  },
  fr: {
    htmlLang: "fr",
    contact: {
      brandName: "Archivo Mac",
      baseline: "Restauration · conservation · collection",
      city: "Mexico",
      email: "hola@archivomac.mx",
      whatsappNumber: "525500000000",
      hours: "Du lundi au vendredi, 10:00-18:00",
      appointmentNote: "Uniquement sur rendez-vous",
      instagramUrl: "https://www.instagram.com/"
    },
    seo: {
      title: "Réparation et restauration de Macs anciens à Mexico | Archivo Mac",
      description:
        "Réparation, maintenance, restauration, estimation et documentation historique de Macs anciens et d'ordinateurs Apple de collection à Mexico.",
      canonical: "https://archivomac.mx/fr/",
      image: "https://archivomac.mx/marissa-lewis-PoL7eR-p4Z0-unsplash.jpg",
      keywords: ["réparation Mac ancien Mexico", "restauration Macintosh", "modèles Mac rétro", "collection Apple Mexique", "réparation Macintosh Classic", "réparation iBook G3", "recap Macintosh", "récupération données vieux Mac"]
    },
    nav: {
      services: "Services",
      collection: "Collection",
      method: "Méthode",
      faq: "FAQ",
      contact: "Contact",
      cta: "Estimer mon Mac",
      open: "Ouvrir le menu",
      close: "Fermer le menu",
      label: "Navigation principale"
    },
    top: ["Sur rendez-vous · Mexico", "Diagnostic spécialisé en 24-48 heures"],
    hero: {
      title: "Le temps ne rend pas obsolète une grande machine.",
      emphasis: "obsolète",
      lead:
        "Nous redonnons vie aux Macs classiques et aux ordinateurs Apple de collection avec exigence technique, respect historique et soin de niveau musée.",
      primary: "Demander un diagnostic",
      secondary: "Explorer la collection",
      facts: [
        ["+18", "ans d'expérience"],
        ["320", "machines préservées"],
        ["90 jours", "de garantie"]
      ],
      alt: "Macintosh classique restauré dans un environnement de collection",
      badge: ["ÉTAT", "Restauré · A+"]
    },
    manifest: {
      line: "NOUS NE RÉPARONS PAS DES OBJETS.",
      title: "Nous préservons des histoires qui méritent encore de s'allumer."
    },
    expertise: {
      eyebrow: "Spécialistes Mac rétro",
      title: "Du diagnostic électronique à la conservation historique.",
      text:
        "Nous travaillons sur Macintosh compacts, iMac G3, Power Mac, iBook, PowerBook et premières générations Intel. Chaque machine est considérée comme équipement technique et objet de collection.",
      items: [
        ["Réparation électronique", "Recap, microsoudure, alimentations, connecteurs, lecteurs optiques, disques, mémoire et pannes intermittentes."],
        ["Restauration esthétique", "Nettoyage profond, stabilisation des plastiques, jaunissement, clavier, souris, câbles et présentation finale."],
        ["Archive et traçabilité", "Photos, numéro de série, configuration, pièces remplacées, tests de stabilité et recommandations de conservation."]
      ]
    },
    sections: {
      servicesEyebrow: "Ce que nous faisons",
      servicesTitle: "Un service technique avec un regard de collectionneur.",
      collectionEyebrow: "Modèles d'époque",
      collectionTitle: "Des machines avec une histoire. Icônes du Mac rétro.",
      methodEyebrow: "Standard Archivo",
      methodTitle: "Rigueur technique. Respect de l'original.",
      methodText:
        "Nous conservons les pièces originales lorsque c'est possible et documentons composants, traçabilité, photos, tests de stabilité et valeur historique.",
      valueTitle: "Vous voulez vendre ou estimer un ancien Mac ?",
      valueText:
        "Envoyez des photos générales, le numéro de série, le modèle, l'année approximative, l'état, les accessoires, la boîte et les documents d'origine.",
      valueCta: "Envoyer les informations par WhatsApp",
      faqEyebrow: "FAQ",
      faqTitle: "Avant d'apporter votre Mac.",
      contactEyebrow: "Parlons de votre machine",
      contactTitle: "Quelle histoire voulez-vous rallumer ?",
      contactText: "Envoyez des photos, le modèle et une courte description. Nous répondrons avec les prochaines étapes.",
      formEyebrow: "Demande",
      formTitle: "Diagnostic spécialisé"
    },
    services: [
      {
        title: "Réparation experte",
        description:
          "Diagnostic précis, microsoudure, alimentations, écrans, stockage et récupération de machines que d'autres ateliers ont déjà écartées.",
        note: "Diagnostic en 24-48 heures"
      },
      {
        title: "Maintenance et conservation",
        description:
          "Nettoyage technique, remplacement de composants critiques, pâte thermique, recap, calibration et maintenance préventive.",
        note: "Intervention documentée"
      },
      {
        title: "Achat, vente et estimation",
        description:
          "Nous sélectionnons des Macs authentiques, vérifiés et catalogués. Nous estimons aussi collections, lots, accessoires et pièces rares.",
        note: "Provenance vérifiée"
      }
    ],
    productFilters: ["Tous", "Macintosh", "iMac", "Power Mac", "Portables"],
    products: [],
    steps: [
      ["Enregistrement", "Photos, numéro de série, configuration et état extérieur."],
      ["Diagnostic", "Tests techniques et rapport clair avant toute intervention."],
      ["Intervention", "Réparation spécialisée avec composants traçables."],
      ["Certification", "Tests de stabilité et dossier final de service."]
    ],
    faqs: [
      ["Réparez-vous les machines qu'Apple considère comme obsolètes ?", "Oui. Nous sommes spécialisés dans les équipements hors support officiel, des Macintosh compacts aux premières générations PowerPC et Intel."],
      ["Comment fonctionne le diagnostic ?", "Nous recevons la machine sur rendez-vous, documentons son état et fournissons options, délais et budget avant d'intervenir."],
      ["Achetez-vous des collections complètes ?", "Oui. L'estimation prend en compte originalité, état, accessoires, emballage, documentation, provenance et rareté."],
      ["Faites-vous des envois au Mexique ?", "Oui. Nous coordonnons un emballage spécialisé et recommandons une assurance pour les pièces de collection ou machines restaurées."],
      ["Quelle garantie proposez-vous ?", "Les services de réparation incluent 90 jours de garantie sur l'intervention réalisée, sauf pièces vintage sans remplacement disponible."],
      ["Utilisez-vous des pièces originales ?", "Nous conservons les pièces originales lorsque c'est techniquement responsable. En cas de remplacement, nous documentons provenance et compatibilité."],
      ["Pouvez-vous récupérer les données d'une ancienne machine ?", "Nous pouvons évaluer disques et supports anciens. La récupération dépend de l'état physique et logique du stockage."]
      ,["Quels modèles traitez-vous le plus souvent ?", "Macintosh Classic, SE, SE/30, LC, Performa, iMac G3, Power Mac G3/G4, iBook G3, PowerBook et premiers modèles Intel."]
      ,["Qu'est-ce qu'un recap ?", "C'est le remplacement préventif ou correctif de condensateurs vieillissants. Sur les Macs anciens, c'est souvent essentiel pour la stabilité, la vidéo, le son et l'allumage."]
    ],
    testimonials: [
      ["Ils ont récupéré mon Macintosh SE/30 sans effacer les traces de son histoire. Il fonctionne parfaitement et reste authentique, pas reconstruit.", "Javier M.", "Collectionneur · Mexico"],
      ["Le dossier final a fait toute la différence : photos, pièces et tests clairs pour une machine que je veux conserver longtemps.", "María L.", "Designer et collectionneuse"],
      ["L'estimation était sérieuse, sans promesses gonflées. Ils ont compris la valeur historique du lot et ses limites techniques.", "Andrés R.", "Archive privée"]
    ],
    footer:
      "Apple et ses produits sont des marques de leurs propriétaires respectifs. Archivo Mac est un atelier indépendant et n'est ni affilié ni autorisé par Apple Inc.",
    footerSummary: "Réparation, maintenance, restauration et documentation de Macs vintage à Mexico.",
    provisional: "Témoignage provisoire",
    whatsapp: {
      service: "Bonjour Archivo Mac. Je suis intéressé par :",
      value:
        "Bonjour Archivo Mac. Je veux vendre ou estimer un ancien Mac. J'ai des photos, le numéro de série, le modèle, l'état et les accessoires à partager.",
      contact: "Bonjour Archivo Mac. Je souhaite des informations sur une ancienne machine."
    }
  }
};

content.en.products = content.es.products.map((product: any) => {
  const translations: Record<string, Partial<any>> = {
    "AM-COL-1999-017": {
      era: "Translucent portables",
      description: "Apple's first consumer iBook, with a translucent shell, integrated handle, and a visual identity inherited from the iMac G3.",
      alt: "iBook G3 Clamshell Blueberry with Mac OS 9 on screen"
    },
    "AM-COL-1999-018": {
      version: "Blueberry · side view",
      era: "Late-90s portable design",
      description: "One of the most recognizable silhouettes of Apple's translucent era: color, wide hinges, and an almost industrial presence.",
      alt: "Open iBook G3 Clamshell Blueberry viewed from the side"
    },
    "AM-COL-1991-028": {
      version: "Compact Mac",
      era: "Compact Macintosh",
      description: "A compact model from the classic Macintosh line, with an integrated CRT display and early-90s beige design language.",
      alt: "Macintosh Classic with keyboard and mouse on a table"
    },
    "AM-COL-1990-011": {
      version: "Compact system in use",
      era: "Compact Macintosh",
      description: "The Classic family preserves the all-in-one format that defined the Macintosh's first decade.",
      alt: "Macintosh Classic turned on in a collection space"
    }
  };
  return { ...product, ...translations[product.reference] };
});

content.fr.products = content.es.products.map((product: any) => {
  const translations: Record<string, Partial<any>> = {
    "AM-COL-1999-017": {
      era: "Portables translucides",
      category: "Portables",
      description: "Premier iBook grand public d'Apple, avec coque translucide, poignée intégrée et identité visuelle héritée de l'iMac G3.",
      alt: "iBook G3 Clamshell Blueberry avec Mac OS 9 à l'écran"
    },
    "AM-COL-1999-018": {
      version: "Blueberry · vue latérale",
      era: "Design portable de la fin des années 90",
      category: "Portables",
      description: "Une des silhouettes les plus reconnaissables de l'ère Apple translucide : couleur, larges charnières et présence presque industrielle.",
      alt: "iBook G3 Clamshell Blueberry ouvert vu de côté"
    },
    "AM-COL-1991-028": {
      version: "Mac compact",
      era: "Macintosh compacts",
      description: "Modèle compact de la ligne Macintosh classique, avec écran CRT intégré et langage visuel beige du début des années 90.",
      alt: "Macintosh Classic avec clavier et souris sur une table"
    },
    "AM-COL-1990-011": {
      version: "Système compact en usage",
      era: "Macintosh compacts",
      description: "La famille Classic conserve le format tout-en-un qui a défini la première décennie du Macintosh.",
      alt: "Macintosh Classic allumé dans un espace de collection"
    }
  };
  return { ...product, ...translations[product.reference] };
});

content.de = {
  ...content.en,
  htmlLang: "de",
  contact: { ...content.en.contact, baseline: "Restaurierung · Erhaltung · Sammlung", city: "Mexiko-Stadt", hours: "Montag bis Freitag, 10:00-18:00", appointmentNote: "Nur nach Terminvereinbarung" },
  seo: {
    title: "Reparatur und Restaurierung alter Macs in Mexiko-Stadt | Archivo Mac",
    description: "Reparatur, Wartung, Restaurierung, Bewertung und historische Dokumentation alter Macs und sammelbarer Apple-Computer in Mexiko-Stadt.",
    canonical: "https://archivomac.mx/de/",
    image: content.en.seo.image,
    keywords: ["alter Mac Reparatur Mexiko-Stadt", "Macintosh Restaurierung", "Retro Mac Modelle", "Apple Sammler Mexiko"]
  },
  nav: { services: "Services", collection: "Sammlung", method: "Methode", faq: "FAQ", contact: "Kontakt", cta: "Mac bewerten", open: "Menü öffnen", close: "Menü schließen", label: "Hauptnavigation" },
  top: ["Nur mit Termin · Mexiko-Stadt", "Spezialisierte Diagnose in 24-48 Stunden"],
  hero: { ...content.en.hero, title: "Zeit macht eine große Maschine nicht obsolet.", emphasis: "obsolet", lead: "Wir erwecken klassische Macs und Apple-Sammlerstücke mit technischem Urteil, historischem Respekt und musealer Sorgfalt wieder zum Leben.", primary: "Diagnose anfragen", secondary: "Sammlung ansehen", facts: [["+18", "Jahre Erfahrung"], ["320", "erhaltene Maschinen"], ["90 Tage", "Garantie"]], badge: ["ZUSTAND", "Restauriert · A+"] },
  manifest: { line: "WIR REPARIEREN KEINE OBJEKTE.", title: "Wir bewahren Geschichten, die sich noch einschalten lassen." },
  expertise: {
    eyebrow: "Retro-Mac-Spezialisten",
    title: "Von elektronischer Diagnose bis historischer Erhaltung.",
    text: "Wir arbeiten an kompakten Macintosh-Modellen, iMac G3, Power Mac, iBook, PowerBook und frühen Intel-Generationen. Jede Maschine wird technisch und als Sammlerstück betrachtet.",
    items: [["Elektronik-Reparatur", "Recap, Mikrolöten, Netzteile, Anschlüsse, Laufwerke, Festplatten, Speicher und sporadische Fehler."], ["Optische Restaurierung", "Tiefenreinigung, Kunststoffstabilisierung, Vergilbung, Tastatur, Maus, Kabel und Präsentation."], ["Archiv und Nachverfolgung", "Fotos, Seriennummer, Konfiguration, ersetzte Teile, Stabilitätstests und Erhaltungsempfehlungen."]]
  },
  sections: { servicesEyebrow: "Was wir tun", servicesTitle: "Technischer Service mit Sammlerblick.", collectionEyebrow: "Zeitmodelle", collectionTitle: "Maschinen mit Geschichte. Ikonen des Retro-Mac.", methodEyebrow: "Archivo Standard", methodTitle: "Technische Strenge. Respekt vor dem Original.", methodText: "Wir erhalten Originalteile, wenn möglich, und dokumentieren Komponenten, Herkunft, Fotos, Stabilitätstests und historischen Wert.", valueTitle: "Möchten Sie einen alten Mac verkaufen oder bewerten lassen?", valueText: "Senden Sie Fotos, Seriennummer, Modell, ungefähres Jahr, Zustand, Zubehör, Verpackung und Originaldokumente.", valueCta: "Informationen per WhatsApp senden", faqEyebrow: "FAQ", faqTitle: "Bevor Sie Ihren Mac bringen.", contactEyebrow: "Sprechen wir über Ihre Maschine", contactTitle: "Welche Geschichte möchten Sie wieder einschalten?", contactText: "Senden Sie Fotos, Modell und eine kurze Beschreibung. Wir antworten mit den nächsten Schritten.", formEyebrow: "Anfrage", formTitle: "Spezialisierte Diagnose" },
  productFilters: ["Alle", "Macintosh", "iMac", "Power Mac", "Portables"],
  steps: [["Erfassung", "Fotos, Seriennummer, Konfiguration und äußerer Zustand."], ["Diagnose", "Technische Tests und klarer Bericht vor jedem Eingriff."], ["Eingriff", "Spezialisierte Reparatur mit nachvollziehbaren Komponenten."], ["Zertifizierung", "Stabilitätstests und abschließende Servicedokumentation."]],
  footer: "Apple und seine Produkte sind Marken ihrer jeweiligen Eigentümer. Archivo Mac ist eine unabhängige Werkstatt und nicht mit Apple Inc. verbunden oder von Apple autorisiert.",
  footerSummary: "Reparatur, Wartung, Restaurierung und Dokumentation von Vintage-Macs in Mexiko-Stadt.",
  provisional: "Vorläufiges Testimonial",
  whatsapp: { service: "Hallo Archivo Mac. Ich interessiere mich für:", value: "Hallo Archivo Mac. Ich möchte einen alten Mac verkaufen oder bewerten lassen.", contact: "Hallo Archivo Mac. Ich möchte Informationen zu einer alten Maschine." }
};

content.it = {
  ...content.en,
  htmlLang: "it",
  contact: { ...content.en.contact, baseline: "Restauro · conservazione · collezione", city: "Città del Messico", hours: "Da lunedì a venerdì, 10:00-18:00", appointmentNote: "Solo su appuntamento" },
  seo: {
    title: "Riparazione e restauro di Mac vintage a Città del Messico | Archivo Mac",
    description: "Riparazione, manutenzione, restauro, valutazione e documentazione storica di Mac vintage e computer Apple da collezione a Città del Messico.",
    canonical: "https://archivomac.mx/it/",
    image: content.en.seo.image,
    keywords: ["riparazione Mac vintage Città del Messico", "restauro Macintosh", "modelli Mac retro", "collezionisti Apple Messico"]
  },
  nav: { services: "Servizi", collection: "Collezione", method: "Metodo", faq: "FAQ", contact: "Contatto", cta: "Valuta il mio Mac", open: "Apri menu", close: "Chiudi menu", label: "Navigazione principale" },
  top: ["Su appuntamento · Città del Messico", "Diagnosi specializzata in 24-48 ore"],
  hero: { ...content.en.hero, title: "Il tempo non rende obsoleta una grande macchina.", emphasis: "obsoleta", lead: "Ridiamo vita ai Mac classici e ai computer Apple da collezione con criterio tecnico, rispetto storico e cura museale.", primary: "Richiedi diagnosi", secondary: "Esplora la collezione", facts: [["+18", "anni di esperienza"], ["320", "macchine preservate"], ["90 giorni", "di garanzia"]], badge: ["CONDIZIONE", "Restaurata · A+"] },
  manifest: { line: "NON RIPARIAMO OGGETTI.", title: "Preserviamo storie che meritano ancora di accendersi." },
  expertise: {
    eyebrow: "Specialisti Mac retro",
    title: "Dalla diagnosi elettronica alla conservazione storica.",
    text: "Lavoriamo su Macintosh compatti, iMac G3, Power Mac, iBook, PowerBook e prime generazioni Intel. Ogni macchina viene valutata come apparecchio tecnico e oggetto da collezione.",
    items: [["Riparazione elettronica", "Recap, microsaldatura, alimentatori, connettori, unità ottiche, dischi, memoria e guasti intermittenti."], ["Restauro estetico", "Pulizia profonda, stabilizzazione delle plastiche, ingiallimento, tastiera, mouse, cavi e presentazione finale."], ["Archivio e tracciabilità", "Foto, numero di serie, configurazione, pezzi sostituiti, test di stabilità e consigli di conservazione."]]
  },
  sections: { servicesEyebrow: "Cosa facciamo", servicesTitle: "Servizio tecnico con occhio da collezionista.", collectionEyebrow: "Modelli d'epoca", collectionTitle: "Macchine con storia. Icone del Mac retro.", methodEyebrow: "Standard Archivo", methodTitle: "Rigore tecnico. Rispetto dell'originale.", methodText: "Conserviamo i pezzi originali quando possibile e documentiamo componenti, tracciabilità, foto, test di stabilità e valore storico.", valueTitle: "Vuoi vendere o valutare un vecchio Mac?", valueText: "Invia foto, numero di serie, modello, anno approssimativo, stato, accessori, scatola e documenti originali.", valueCta: "Invia informazioni via WhatsApp", faqEyebrow: "FAQ", faqTitle: "Prima di portare il tuo Mac.", contactEyebrow: "Parliamo della tua macchina", contactTitle: "Quale storia vuoi riaccendere?", contactText: "Invia foto, modello e una breve descrizione. Risponderemo con i prossimi passi.", formEyebrow: "Richiesta", formTitle: "Diagnosi specializzata" },
  productFilters: ["Tutti", "Macintosh", "iMac", "Power Mac", "Portatili"],
  steps: [["Registrazione", "Foto, numero di serie, configurazione e stato esterno."], ["Diagnosi", "Test tecnici e report chiaro prima di ogni intervento."], ["Intervento", "Riparazione specializzata con componenti tracciabili."], ["Certificazione", "Test di stabilità e dossier finale di servizio."]],
  footer: "Apple e i suoi prodotti sono marchi dei rispettivi proprietari. Archivo Mac è un laboratorio indipendente e non è affiliato né autorizzato da Apple Inc.",
  footerSummary: "Riparazione, manutenzione, restauro e documentazione di Mac vintage a Città del Messico.",
  provisional: "Testimonianza provvisoria",
  whatsapp: { service: "Ciao Archivo Mac. Sono interessato a:", value: "Ciao Archivo Mac. Voglio vendere o valutare un vecchio Mac.", contact: "Ciao Archivo Mac. Vorrei informazioni su una vecchia macchina." }
};

content.de.products = content.en.products.map((product: any) => ({ ...product, category: product.category === "Portables" ? "Portables" : product.category }));
content.it.products = content.en.products.map((product: any) => ({ ...product, category: product.category === "Portables" ? "Portatili" : product.category }));

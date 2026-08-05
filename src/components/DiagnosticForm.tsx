import { useState } from "react";

const formContent = {
  es: {
    serviceTypes: ["Diagnóstico", "Reparación", "Mantenimiento", "Restauración", "Valuación", "Venta de equipo", "Búsqueda de piezas"],
    states: ["Enciende", "No enciende", "Intermitente", "No lo sé"],
    labels: ["Nombre", "Teléfono", "Correo electrónico", "Modelo del equipo", "Año aproximado", "Tipo de servicio", "Estado de funcionamiento", "Fotografías", "Descripción del problema"],
    select: "Seleccionar",
    photos: "Preparado para integración backend futura.",
    error: "Completa los campos obligatorios antes de preparar el mensaje.",
    submit: "Preparar mensaje por WhatsApp",
    intro: "Hola Archivo Mac. Quiero solicitar un diagnóstico.",
    fields: ["Nombre", "Teléfono", "Correo", "Modelo", "Año aproximado", "Servicio", "Estado de funcionamiento", "Descripción"],
    notProvided: "No indicado",
    ready: "Tengo fotografías listas para enviar."
  },
  en: {
    serviceTypes: ["Diagnosis", "Repair", "Maintenance", "Restoration", "Valuation", "Machine sale", "Parts search"],
    states: ["Turns on", "Does not turn on", "Intermittent", "I don't know"],
    labels: ["Name", "Phone", "Email", "Machine model", "Approximate year", "Service type", "Working condition", "Photos", "Problem description"],
    select: "Select",
    photos: "Prepared for future backend integration.",
    error: "Complete the required fields before preparing the message.",
    submit: "Prepare WhatsApp message",
    intro: "Hello Archivo Mac. I would like to request a diagnosis.",
    fields: ["Name", "Phone", "Email", "Model", "Approximate year", "Service", "Working condition", "Description"],
    notProvided: "Not provided",
    ready: "I have photos ready to send."
  },
  fr: {
    serviceTypes: ["Diagnostic", "Réparation", "Maintenance", "Restauration", "Estimation", "Vente de machine", "Recherche de pièces"],
    states: ["S'allume", "Ne s'allume pas", "Intermittent", "Je ne sais pas"],
    labels: ["Nom", "Téléphone", "E-mail", "Modèle de la machine", "Année approximative", "Type de service", "État de fonctionnement", "Photos", "Description du problème"],
    select: "Sélectionner",
    photos: "Préparé pour une future intégration backend.",
    error: "Complétez les champs obligatoires avant de préparer le message.",
    submit: "Préparer le message WhatsApp",
    intro: "Bonjour Archivo Mac. Je souhaite demander un diagnostic.",
    fields: ["Nom", "Téléphone", "E-mail", "Modèle", "Année approximative", "Service", "État de fonctionnement", "Description"],
    notProvided: "Non indiqué",
    ready: "J'ai des photos prêtes à envoyer."
  },
  de: {
    serviceTypes: ["Diagnose", "Reparatur", "Wartung", "Restaurierung", "Bewertung", "Maschinenverkauf", "Teilesuche"],
    states: ["Schaltet sich ein", "Schaltet sich nicht ein", "Intermittierend", "Ich weiß es nicht"],
    labels: ["Name", "Telefon", "E-Mail", "Modell", "Ungefähres Jahr", "Serviceart", "Funktionszustand", "Fotos", "Problembeschreibung"],
    select: "Auswählen",
    photos: "Für zukünftige Backend-Integration vorbereitet.",
    error: "Füllen Sie die Pflichtfelder aus.",
    submit: "WhatsApp-Nachricht vorbereiten",
    intro: "Hallo Archivo Mac. Ich möchte eine Diagnose anfragen.",
    fields: ["Name", "Telefon", "E-Mail", "Modell", "Ungefähres Jahr", "Service", "Funktionszustand", "Beschreibung"],
    notProvided: "Nicht angegeben",
    ready: "Ich habe Fotos zum Senden bereit."
  },
  it: {
    serviceTypes: ["Diagnosi", "Riparazione", "Manutenzione", "Restauro", "Valutazione", "Vendita macchina", "Ricerca pezzi"],
    states: ["Si accende", "Non si accende", "Intermittente", "Non lo so"],
    labels: ["Nome", "Telefono", "E-mail", "Modello", "Anno approssimativo", "Tipo di servizio", "Stato di funzionamento", "Foto", "Descrizione del problema"],
    select: "Seleziona",
    photos: "Preparato per futura integrazione backend.",
    error: "Completa i campi obbligatori.",
    submit: "Prepara messaggio WhatsApp",
    intro: "Ciao Archivo Mac. Vorrei richiedere una diagnosi.",
    fields: ["Nome", "Telefono", "E-mail", "Modello", "Anno approssimativo", "Servizio", "Stato di funzionamento", "Descrizione"],
    notProvided: "Non indicato",
    ready: "Ho foto pronte da inviare."
  }
};

type DiagnosticFormProps = {
  lang: keyof typeof formContent;
  whatsappNumber: string;
};

export default function DiagnosticForm({ lang, whatsappNumber }: DiagnosticFormProps) {
  const [error, setError] = useState("");
  const t = formContent[lang];

  function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["nombre", "telefono", "email", "modelo", "servicio", "descripcion", "estado"];
    const missing = required.filter((key) => !String(data.get(key) || "").trim());
    if (missing.length) {
      setError(t.error);
      return;
    }
    setError("");
    const message = [
      t.intro,
      `${t.fields[0]}: ${data.get("nombre")}`,
      `${t.fields[1]}: ${data.get("telefono")}`,
      `${t.fields[2]}: ${data.get("email")}`,
      `${t.fields[3]}: ${data.get("modelo")}`,
      `${t.fields[4]}: ${data.get("anio") || t.notProvided}`,
      `${t.fields[5]}: ${data.get("servicio")}`,
      `${t.fields[6]}: ${data.get("estado")}`,
      `${t.fields[7]}: ${data.get("descripcion")}`,
      t.ready
    ].join("\n");
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <form className="diagnostic-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>{t.labels[0]} *<input name="nombre" autoComplete="name" required /></label>
        <label>{t.labels[1]} *<input name="telefono" autoComplete="tel" required /></label>
        <label>{t.labels[2]} *<input name="email" type="email" autoComplete="email" required /></label>
        <label>{t.labels[3]} *<input name="modelo" required /></label>
        <label>{t.labels[4]}<input name="anio" inputMode="numeric" /></label>
        <label>{t.labels[5]} *<select name="servicio" required><option value="">{t.select}</option>{t.serviceTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>{t.labels[6]} *<select name="estado" required><option value="">{t.select}</option>{t.states.map((state) => <option key={state}>{state}</option>)}</select></label>
        <label>{t.labels[7]}<input name="fotos" type="file" accept="image/*" multiple disabled /><small>{t.photos}</small></label>
      </div>
      <label>{t.labels[8]} *<textarea name="descripcion" rows={5} required /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button" type="submit">{t.submit}</button>
    </form>
  );
}

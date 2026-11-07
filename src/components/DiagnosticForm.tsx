import { useRef, useState, type SyntheticEvent } from "react";

const formContent = {
  es: {
    serviceTypes: ["Diagnóstico", "Reparación", "Mantenimiento", "Restauración", "Valuación", "Venta de equipo", "Búsqueda de piezas"],
    states: ["Enciende", "No enciende", "Intermitente", "No lo sé"],
    labels: ["Nombre", "Teléfono", "Correo electrónico", "Modelo del equipo", "Año aproximado", "Tipo de servicio", "Estado de funcionamiento", "Fotografías", "Descripción del problema"],
    select: "Seleccionar",
    photos: "JPG, PNG o WebP. Una foto, máximo 2 MB.",
    error: "Completa los campos obligatorios antes de enviar la solicitud.",
    submit: "Enviar solicitud",
    sending: "Enviando…",
    success: "Solicitud enviada. Nos pondremos en contacto contigo.",
    failed: "No pudimos enviar tu solicitud. Inténtalo de nuevo; tus datos se conservan.",
    photoError: "Selecciona una imagen JPG, PNG o WebP de máximo 2 MB.",
  },
  en: {
    serviceTypes: ["Diagnosis", "Repair", "Maintenance", "Restoration", "Valuation", "Machine sale", "Parts search"],
    states: ["Turns on", "Does not turn on", "Intermittent", "I don't know"],
    labels: ["Name", "Phone", "Email", "Machine model", "Approximate year", "Service type", "Working condition", "Photos", "Problem description"],
    select: "Select",
    photos: "JPG, PNG or WebP. One photo, up to 2 MB.",
    error: "Complete the required fields before sending your request.",
    submit: "Send request",
    sending: "Sending…",
    success: "Request sent. We will contact you.",
    failed: "We could not send your request. Please try again; your details are preserved.",
    photoError: "Choose a JPG, PNG or WebP image up to 2 MB.",
  },
  fr: {
    serviceTypes: ["Diagnostic", "Réparation", "Maintenance", "Restauration", "Estimation", "Vente de machine", "Recherche de pièces"],
    states: ["S'allume", "Ne s'allume pas", "Intermittent", "Je ne sais pas"],
    labels: ["Nom", "Téléphone", "E-mail", "Modèle de la machine", "Année approximative", "Type de service", "État de fonctionnement", "Photos", "Description du problème"],
    select: "Sélectionner",
    photos: "JPG, PNG ou WebP. Une photo de 2 Mo maximum.",
    error: "Complétez les champs obligatoires avant d’envoyer la demande.",
    submit: "Envoyer la demande",
    sending: "Envoi…",
    success: "Demande envoyée. Nous vous recontacterons.",
    failed: "La demande n’a pas pu être envoyée. Réessayez ; vos informations sont conservées.",
    photoError: "Choisissez une image JPG, PNG ou WebP de 2 Mo maximum.",
  },
  de: {
    serviceTypes: ["Diagnose", "Reparatur", "Wartung", "Restaurierung", "Bewertung", "Maschinenverkauf", "Teilesuche"],
    states: ["Schaltet sich ein", "Schaltet sich nicht ein", "Intermittierend", "Ich weiß es nicht"],
    labels: ["Name", "Telefon", "E-Mail", "Modell", "Ungefähres Jahr", "Serviceart", "Funktionszustand", "Fotos", "Problembeschreibung"],
    select: "Auswählen",
    photos: "JPG, PNG oder WebP. Ein Foto, maximal 2 MB.",
    error: "Füllen Sie die Pflichtfelder aus.",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    success: "Anfrage gesendet. Wir werden Sie kontaktieren.",
    failed: "Ihre Anfrage konnte nicht gesendet werden. Bitte erneut versuchen; Ihre Angaben bleiben erhalten.",
    photoError: "Wählen Sie ein JPG-, PNG- oder WebP-Bild mit maximal 2 MB.",
  },
  it: {
    serviceTypes: ["Diagnosi", "Riparazione", "Manutenzione", "Restauro", "Valutazione", "Vendita macchina", "Ricerca pezzi"],
    states: ["Si accende", "Non si accende", "Intermittente", "Non lo so"],
    labels: ["Nome", "Telefono", "E-mail", "Modello", "Anno approssimativo", "Tipo di servizio", "Stato di funzionamento", "Foto", "Descrizione del problema"],
    select: "Seleziona",
    photos: "JPG, PNG o WebP. Una foto, massimo 2 MB.",
    error: "Completa i campi obbligatori.",
    submit: "Invia richiesta",
    sending: "Invio…",
    success: "Richiesta inviata. Ti contatteremo.",
    failed: "Non è stato possibile inviare la richiesta. Riprova; i tuoi dati sono conservati.",
    photoError: "Scegli un’immagine JPG, PNG o WebP di massimo 2 MB.",
  }
};

type DiagnosticFormProps = {
  lang: keyof typeof formContent;
};

function readPhoto(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Unable to read photo"));
    reader.readAsDataURL(file);
  });
}

export default function DiagnosticForm({ lang }: DiagnosticFormProps) {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const submitting = useRef(false);
  const t = formContent[lang];

  async function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    setError("");
    setSent(false);
    const data = new FormData(form);
    const required = ["nombre", "telefono", "email", "modelo", "servicio", "descripcion", "estado"];
    if (!form.reportValidity() || required.some((key) => !String(data.get(key) || "").trim())) {
      setError(t.error);
      return;
    }
    const file = data.get("fotos");
    const photo = file instanceof File && file.size > 0 ? file : null;
    if (photo && (!['image/jpeg', 'image/png', 'image/webp'].includes(photo.type) || photo.size > 2 * 1024 * 1024)) {
      setError(t.photoError);
      return;
    }
    submitting.current = true;
    setSending(true);
    try {
      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("nombre")).trim(), phone: String(data.get("telefono")).trim(),
          email: String(data.get("email")).trim(), model: String(data.get("modelo")).trim(),
          year: String(data.get("anio") || "").trim(), service: String(data.get("servicio")),
          powerState: String(data.get("estado")), description: String(data.get("descripcion")).trim(),
          language: lang,
          ...(photo ? { photo: { name: photo.name, type: photo.type, dataUrl: await readPhoto(photo) } } : {}),
        }),
        signal: AbortSignal.timeout(45000),
      });
      if (!response.ok || (await response.json()).success !== true) throw new Error("Delivery not confirmed");
      form.reset();
      setSent(true);
    } catch {
      setError(t.failed);
    } finally {
      submitting.current = false;
      setSending(false);
    }
  }

  return (
    <form className="diagnostic-form" onSubmit={submit} noValidate aria-busy={sending}>
      <fieldset disabled={sending}>
        <div className="form-grid">
          <label>{t.labels[0]} *<input name="nombre" autoComplete="name" maxLength={200} required /></label>
          <label>{t.labels[1]} *<input name="telefono" type="tel" autoComplete="tel" maxLength={200} required /></label>
          <label>{t.labels[2]} *<input name="email" type="email" autoComplete="email" maxLength={200} required /></label>
          <label>{t.labels[3]} *<input name="modelo" maxLength={200} required /></label>
          <label>{t.labels[4]}<input name="anio" inputMode="numeric" maxLength={200} /></label>
          <label>{t.labels[5]} *<select name="servicio" required><option value="">{t.select}</option>{t.serviceTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label>{t.labels[6]} *<select name="estado" required><option value="">{t.select}</option>{t.states.map((state) => <option key={state}>{state}</option>)}</select></label>
          <label>{t.labels[7]}<input name="fotos" type="file" accept="image/jpeg,image/png,image/webp" aria-describedby="diagnostic-photo-help" /><small id="diagnostic-photo-help">{t.photos}</small></label>
        </div>
        <label>{t.labels[8]} *<textarea name="descripcion" rows={5} maxLength={5000} required /></label>
        <button className="button" type="submit">{sending ? t.sending : t.submit}</button>
      </fieldset>
      {error && <p className="form-error" role="alert">{error}</p>}
      {sent && <p className="form-success" role="status">{t.success}</p>}
    </form>
  );
}

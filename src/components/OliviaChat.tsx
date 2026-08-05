import { Bot, Send, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Language = "es" | "en" | "fr" | "de" | "it";

type OliviaChatProps = {
  lang: Language;
  whatsappNumber: string;
};

type Message = {
  role: "olivia" | "user";
  text: string;
};

const copy = {
  es: {
    eyebrow: "IA Archivo Mac",
    title: "Olivia entiende tu Mac antes de la cita.",
    intro:
      "Cuéntame modelo, año aproximado, síntoma, estado de encendido y si tienes fotos. Te ayudo a ordenar el diagnóstico.",
    placeholder: "Ej. Macintosh Classic no enciende, tengo fotos y serie...",
    send: "Enviar",
    whatsapp: "Enviar resumen por WhatsApp",
    prompts: ["No enciende", "Quiero venderlo", "Restauración estética", "Recuperar datos"],
    fallback:
      "Puedo orientarte mejor si me compartes modelo, año aproximado, si enciende, síntoma principal, accesorios y fotos disponibles.",
    diagnosis:
      "Para un diagnóstico serio conviene registrar modelo, número de serie, fuente de poder, pantalla, sonido de arranque y cualquier reparación previa.",
    power:
      "Si no enciende, no insistas con varios intentos. Anota si hay olor, sonido, luz, ventilador o imagen. En Macs antiguos puede involucrar fuente, capacitores o placa lógica.",
    value:
      "Para una estimación importan originalidad, estado, caja, accesorios, documentos, funcionamiento y rareza. Las fotos generales y del número de serie ayudan mucho.",
    restore:
      "En restauración revisamos limpieza profunda, plásticos, teclado, mouse, cables y conservación de piezas originales siempre que sea responsable.",
    data:
      "Para recuperación de datos evita seguir encendiendo el equipo si el disco hace ruido o falla. Se evalúa primero el estado físico y lógico del soporte.",
    summaryPrefix: "Hola Archivo Mac. Olivia preparó este resumen:"
  },
  en: {
    eyebrow: "Archivo Mac AI",
    title: "Olivia understands your Mac before the appointment.",
    intro: "Tell me the model, approximate year, symptom, power state, and whether you have photos. I will help structure the diagnosis.",
    placeholder: "Ex. Macintosh Classic does not turn on, I have photos and serial...",
    send: "Send",
    whatsapp: "Send summary by WhatsApp",
    prompts: ["Does not turn on", "I want to sell it", "Cosmetic restoration", "Recover data"],
    fallback: "I can guide you better with model, approximate year, power state, main symptom, accessories, and available photos.",
    diagnosis: "For a serious diagnosis, record model, serial number, power supply, screen, startup sound, and any previous repair.",
    power: "If it does not power on, avoid repeated attempts. Note smell, sound, light, fan, or image. Vintage Macs may involve power supply, capacitors, or logic board.",
    value: "For valuation, originality, condition, box, accessories, documents, working state, and rarity matter. General photos and serial number help a lot.",
    restore: "For restoration we review deep cleaning, plastics, keyboard, mouse, cables, and preservation of original parts whenever responsible.",
    data: "For data recovery, avoid powering it repeatedly if the disk is noisy or failing. The physical and logical state of the media is evaluated first.",
    summaryPrefix: "Hello Archivo Mac. Olivia prepared this summary:"
  },
  fr: {
    eyebrow: "IA Archivo Mac",
    title: "Olivia comprend votre Mac avant le rendez-vous.",
    intro:
      "Indiquez le modèle, l'année approximative, le symptôme, l'état d'allumage et si vous avez des photos. Je vous aide à structurer le diagnostic.",
    placeholder: "Ex. Macintosh Classic ne s'allume pas, j'ai des photos et le numéro de série...",
    send: "Envoyer",
    whatsapp: "Envoyer le résumé par WhatsApp",
    prompts: ["Ne s'allume pas", "Je veux le vendre", "Restauration esthétique", "Récupérer des données"],
    fallback:
      "Je peux mieux vous orienter avec le modèle, l'année approximative, l'état d'allumage, le symptôme principal, les accessoires et les photos disponibles.",
    diagnosis:
      "Pour un diagnostic sérieux, il faut relever modèle, numéro de série, alimentation, écran, son de démarrage et toute réparation précédente.",
    power:
      "S'il ne s'allume pas, évitez les essais répétés. Notez odeur, son, voyant, ventilateur ou image. Sur un Mac ancien, cela peut venir de l'alimentation, des condensateurs ou de la carte logique.",
    value:
      "Pour une estimation, l'originalité, l'état, la boîte, les accessoires, les documents, le fonctionnement et la rareté comptent. Les photos générales et du numéro de série aident beaucoup.",
    restore:
      "En restauration, nous regardons nettoyage profond, plastiques, clavier, souris, câbles et conservation des pièces originales quand c'est responsable.",
    data:
      "Pour récupérer des données, évitez de rallumer plusieurs fois si le disque fait du bruit ou échoue. L'état physique et logique du support est évalué d'abord.",
    summaryPrefix: "Bonjour Archivo Mac. Olivia a préparé ce résumé :"
  },
  de: {
    eyebrow: "Archivo Mac KI",
    title: "Olivia versteht Ihren Mac vor dem Termin.",
    intro: "Nennen Sie Modell, ungefähres Jahr, Symptom, Einschaltzustand und ob Fotos vorhanden sind. Ich strukturiere die Diagnose.",
    placeholder: "Z. B. Macintosh Classic schaltet nicht ein, Fotos und Seriennummer vorhanden...",
    send: "Senden",
    whatsapp: "Zusammenfassung per WhatsApp senden",
    prompts: ["Schaltet nicht ein", "Ich möchte verkaufen", "Optische Restaurierung", "Daten retten"],
    fallback: "Ich kann besser helfen mit Modell, Jahr, Einschaltzustand, Hauptsymptom, Zubehör und verfügbaren Fotos.",
    diagnosis: "Für eine seriöse Diagnose sind Modell, Seriennummer, Netzteil, Bildschirm, Startton und frühere Reparaturen wichtig.",
    power: "Wenn er nicht startet, vermeiden Sie wiederholte Versuche. Notieren Sie Geruch, Ton, Licht, Lüfter oder Bild.",
    value: "Für eine Bewertung zählen Originalität, Zustand, Verpackung, Zubehör, Dokumente, Funktion und Seltenheit.",
    restore: "Bei Restaurierung prüfen wir Reinigung, Kunststoffe, Tastatur, Maus, Kabel und Erhalt originaler Teile.",
    data: "Bei Datenrettung bitte nicht wiederholt einschalten, wenn das Laufwerk Geräusche macht oder ausfällt.",
    summaryPrefix: "Hallo Archivo Mac. Olivia hat diese Zusammenfassung vorbereitet:"
  },
  it: {
    eyebrow: "IA Archivo Mac",
    title: "Olivia capisce il tuo Mac prima dell'appuntamento.",
    intro: "Indica modello, anno approssimativo, sintomo, stato di accensione e se hai foto. Ti aiuto a ordinare la diagnosi.",
    placeholder: "Es. Macintosh Classic non si accende, ho foto e numero di serie...",
    send: "Invia",
    whatsapp: "Invia riepilogo via WhatsApp",
    prompts: ["Non si accende", "Voglio venderlo", "Restauro estetico", "Recuperare dati"],
    fallback: "Posso orientarti meglio con modello, anno, stato di accensione, sintomo principale, accessori e foto disponibili.",
    diagnosis: "Per una diagnosi seria servono modello, numero di serie, alimentazione, schermo, suono di avvio ed eventuali riparazioni precedenti.",
    power: "Se non si accende, evita tentativi ripetuti. Annota odori, suoni, luci, ventola o immagine.",
    value: "Per una valutazione contano originalità, stato, scatola, accessori, documenti, funzionamento e rarità.",
    restore: "Nel restauro controlliamo pulizia, plastiche, tastiera, mouse, cavi e conservazione dei pezzi originali.",
    data: "Per recuperare dati evita riaccensioni ripetute se il disco fa rumore o fallisce.",
    summaryPrefix: "Ciao Archivo Mac. Olivia ha preparato questo riepilogo:"
  }
};

function answerFor(input: string, t: (typeof copy)["es"]) {
  const text = input.toLowerCase();
  if (/no enciende|ne s'allume|does not|schaltet nicht|non si accende|power|enciende|allume/.test(text)) return t.power;
  if (/vender|valu|estimation|sell|bewert|vendere|valut/.test(text)) return t.value;
  if (/restaur|plastic|plastique|est[eé]tica|cosmetic|optische/.test(text)) return t.restore;
  if (/dato|data|donn[eé]es|daten|recuper/.test(text)) return t.data;
  if (/diagn[oó]st|diagnos|sympt/.test(text)) return t.diagnosis;
  return t.fallback;
}

export default function OliviaChat({ lang, whatsappNumber }: OliviaChatProps) {
  const t = copy[lang] ?? copy.es;
  const [messages, setMessages] = useState<Message[]>([{ role: "olivia", text: t.intro }]);
  const [draft, setDraft] = useState("");

  const summary = useMemo(() => messages.map((message) => `${message.role === "olivia" ? "Olivia" : "Cliente"}: ${message.text}`).join("\n"), [messages]);

  function submit(text = draft) {
    const value = text.trim();
    if (!value) return;
    setMessages((current) => [...current, { role: "user", text: value }, { role: "olivia", text: answerFor(value, t) }]);
    setDraft("");
  }

  return (
    <section className="section olivia-ai" id="olivia">
      <div className="olivia-head">
        <p className="eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
      </div>
      <div className="olivia-shell" aria-label="Olivia AI chat">
        <div className="olivia-status"><Bot size={18} /><span>Olivia</span><Sparkles size={16} /></div>
        <div className="olivia-log" aria-live="polite">
          {messages.map((message, index) => (
            <p className={`olivia-message ${message.role}`} key={`${message.role}-${index}`}>{message.text}</p>
          ))}
        </div>
        <div className="olivia-prompts">
          {t.prompts.map((prompt) => <button type="button" key={prompt} onClick={() => submit(prompt)}>{prompt}</button>)}
        </div>
        <form className="olivia-compose" onSubmit={(event) => { event.preventDefault(); submit(); }}>
          <input value={draft} onChange={(event) => setDraft(event.target.value)} placeholder={t.placeholder} />
          <button className="button" type="submit" aria-label={t.send}><Send size={16} />{t.send}</button>
        </form>
        <a className="olivia-whatsapp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${t.summaryPrefix}\n\n${summary}`)}`}>{t.whatsapp}</a>
      </div>
    </section>
  );
}

import { useState } from "react";
import { whatsappUrl } from "../config/site";

const serviceTypes = ["Diagnóstico", "Reparación", "Mantenimiento", "Restauración", "Valuación", "Venta de equipo", "Búsqueda de piezas"];

export default function DiagnosticForm() {
  const [error, setError] = useState("");

  function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["nombre", "telefono", "email", "modelo", "servicio", "descripcion", "estado"];
    const missing = required.filter((key) => !String(data.get(key) || "").trim());
    if (missing.length) {
      setError("Completa los campos obligatorios antes de preparar el mensaje.");
      return;
    }
    setError("");
    const message = [
      "Hola Archivo Mac. Quiero solicitar un diagnóstico.",
      `Nombre: ${data.get("nombre")}`,
      `Teléfono: ${data.get("telefono")}`,
      `Correo: ${data.get("email")}`,
      `Modelo: ${data.get("modelo")}`,
      `Año aproximado: ${data.get("anio") || "No indicado"}`,
      `Servicio: ${data.get("servicio")}`,
      `Estado de funcionamiento: ${data.get("estado")}`,
      `Descripción: ${data.get("descripcion")}`,
      "Tengo fotografías listas para enviar."
    ].join("\n");
    window.location.href = whatsappUrl(message);
  }

  return (
    <form className="diagnostic-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>Nombre *<input name="nombre" autoComplete="name" required /></label>
        <label>Teléfono *<input name="telefono" autoComplete="tel" required /></label>
        <label>Correo electrónico *<input name="email" type="email" autoComplete="email" required /></label>
        <label>Modelo del equipo *<input name="modelo" required /></label>
        <label>Año aproximado<input name="anio" inputMode="numeric" /></label>
        <label>Tipo de servicio *<select name="servicio" required><option value="">Seleccionar</option>{serviceTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label>Estado de funcionamiento *<select name="estado" required><option value="">Seleccionar</option><option>Enciende</option><option>No enciende</option><option>Intermitente</option><option>No lo sé</option></select></label>
        <label>Fotografías<input name="fotos" type="file" accept="image/*" multiple disabled /><small>Preparado para integración backend futura.</small></label>
      </div>
      <label>Descripción del problema *<textarea name="descripcion" rows={5} required /></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button" type="submit">Preparar mensaje por WhatsApp</button>
    </form>
  );
}

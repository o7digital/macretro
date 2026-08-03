import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Servicios", "#servicios"],
  ["Colección", "#coleccion"],
  ["Nuestro método", "#metodo"],
  ["Preguntas frecuentes", "#preguntas"],
  ["Contacto", "#contacto"]
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button className="icon-button" type="button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(true)}>
        <Menu size={20} />
      </button>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Navegación principal">
          <button className="icon-button close" type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button" href="#valuacion" onClick={() => setOpen(false)}>
            Valuar mi equipo
          </a>
        </div>
      )}
    </div>
  );
}

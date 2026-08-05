import { Menu, X } from "lucide-react";
import { useState } from "react";

type MobileNavProps = {
  nav: {
    services: string;
    collection: string;
    method: string;
    faq: string;
    contact: string;
    cta: string;
    open: string;
    close: string;
    label: string;
  };
};

export default function MobileNav({ nav }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const links = [
    [nav.services, "#servicios"],
    ["Olivia", "#olivia"],
    [nav.collection, "#coleccion"],
    [nav.method, "#metodo"],
    [nav.faq, "#preguntas"],
    [nav.contact, "#contacto"]
  ];

  return (
    <div className="mobile-nav">
      <button className="icon-button" type="button" aria-label={nav.open} aria-expanded={open} onClick={() => setOpen(true)}>
        <Menu size={20} />
      </button>
      {open && (
        <div className="mobile-panel" role="dialog" aria-modal="true" aria-label={nav.label}>
          <button className="icon-button close" type="button" aria-label={nav.close} onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button" href="#valuacion" onClick={() => setOpen(false)}>
            {nav.cta}
          </a>
        </div>
      )}
    </div>
  );
}

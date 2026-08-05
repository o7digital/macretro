import { ShieldCheck, X } from "lucide-react";
import { useState } from "react";

export default function PrivacyFloatingButton() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  function close() {
    if (window.location.pathname.startsWith("/aviso-privacidad")) {
      window.location.href = "/";
      return;
    }
    setVisible(false);
  }

  return (
    <div className="privacy-floating" aria-label="Aviso de privacidad">
      <a href="/aviso-privacidad">
        <ShieldCheck size={18} />
        <span>Aviso de<br />privacidad</span>
      </a>
      <button type="button" aria-label="Cerrar aviso de privacidad" onClick={close}>
        <X size={18} />
      </button>
    </div>
  );
}

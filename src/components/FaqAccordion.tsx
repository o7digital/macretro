import { useState } from "react";
import { faqs } from "../data/faqs";

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map(([question, answer], index) => (
        <div className="faq-item" key={question}>
          <button type="button" aria-expanded={open === index} aria-controls={`faq-${index}`} onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{question}</span>
            <span aria-hidden="true">{open === index ? "-" : "+"}</span>
          </button>
          <div id={`faq-${index}`} hidden={open !== index}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

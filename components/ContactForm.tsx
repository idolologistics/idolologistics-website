"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message" | "privacy", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    if (String(data.get("name") ?? "").trim().length < 2) next.name = "Inserisci il tuo nome o la ragione sociale.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Inserisci un indirizzo email valido.";
    if (String(data.get("message") ?? "").trim().length < 10) next.message = "Descrivi la richiesta con almeno 10 caratteri.";
    if (!data.get("privacy")) next.privacy = "Devi accettare l’informativa per continuare.";
    setErrors(next);
    if (Object.keys(next).length === 0) { setSent(true); event.currentTarget.reset(); }
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate id="modulo">
      {sent && <div className="form-success" role="status">Modulo verificato correttamente. L’invio reale verrà attivato nella prossima fase.</div>}
      <div className="form-row"><Field id="name" label="Nome o ragione sociale *" error={errors.name}><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} /></Field><Field id="email" label="Email *" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /></Field></div>
      <div className="form-row"><Field id="phone" label="Telefono"><input id="phone" name="phone" type="tel" autoComplete="tel" /></Field><Field id="service" label="Servizio di interesse"><select id="service" name="service" defaultValue=""><option value="">Seleziona un servizio</option><option>Spedizioni</option><option>Raccomandate</option><option>Ritiro a domicilio</option><option>Consegna in giornata</option><option>Servizi business</option><option>Altro</option></select></Field></div>
      <Field id="message" label="Come possiamo aiutarti? *" error={errors.message}><textarea id="message" name="message" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Indicaci partenza, destinazione, tipo di invio e tempistiche, se disponibili." /></Field>
      <div className="field"><label><input type="checkbox" name="privacy" aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /> Ho letto e accetto l’informativa privacy. *</label>{errors.privacy && <span className="field-error" id="privacy-error">{errors.privacy}</span>}</div>
      <p className="form-note">Il modulo è dimostrativo: i dati non vengono inviati né conservati.</p>
      <button className="button" type="submit">Verifica richiesta <span aria-hidden="true">→</span></button>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return <div className="field"><label htmlFor={id}>{label}</label>{children}{error && <span className="field-error" id={`${id}-error`}>{error}</span>}</div>;
}

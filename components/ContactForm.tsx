"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "privacy", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitting = useRef(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    if (name.length < 2 || name.length > 120) next.name = "Inserisci da 2 a 120 caratteri.";
    const email = String(data.get("email") ?? "").trim();
    if (email.length > 200 || !/^\S+@\S+\.\S+$/.test(email)) next.email = "Inserisci un indirizzo email valido.";
    const phone = String(data.get("phone") ?? "").trim();
    if (phone.length > 40) next.phone = "Inserisci al massimo 40 caratteri.";
    const service = String(data.get("service") ?? "").trim();
    if (service.length > 100) next.service = "Inserisci al massimo 100 caratteri.";
    const message = String(data.get("message") ?? "").trim();
    if (message.length < 10 || message.length > 5000) next.message = "Inserisci da 10 a 5000 caratteri.";
    if (!data.get("privacy")) next.privacy = "Devi accettare l’informativa per continuare.";
    setErrors(next);
    setStatus("idle");
    if (Object.keys(next).length > 0) return;
    submitting.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message, privacy: true, website: String(data.get("website") ?? "") }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate id="modulo">
      {status === "success" && <div className="form-success" role="status">La richiesta è stata inviata. Ti risponderemo appena possibile.</div>}
      {status === "error" && <div className="form-error" role="alert">Non è stato possibile inviare la richiesta. Riprova tra poco o contattaci direttamente.</div>}
      <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Sito web</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className="form-row"><Field id="name" label="Nome o ragione sociale *" error={errors.name}><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} /></Field><Field id="email" label="Email *" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /></Field></div>
      <div className="form-row"><Field id="phone" label="Telefono" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} /></Field><Field id="service" label="Servizio di interesse" error={errors.service}><select id="service" name="service" defaultValue="" aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}><option value="">Seleziona un servizio</option><option>Spedizioni</option><option>Raccomandate</option><option>Ritiro a domicilio</option><option>Consegna in giornata</option><option>Servizi business</option><option>Altro</option></select></Field></div>
      <Field id="message" label="Come possiamo aiutarti? *" error={errors.message}><textarea id="message" name="message" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Indicaci partenza, destinazione, tipo di invio e tempistiche, se disponibili." /></Field>
      <div className="field"><label><input type="checkbox" name="privacy" aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /> Ho letto e accetto l’<Link href="/privacy">informativa privacy</Link>. *</label>{errors.privacy && <span className="field-error" id="privacy-error">{errors.privacy}</span>}</div>
      <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Invio in corso…" : "Invia richiesta"} <span aria-hidden="true">→</span></button>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return <div className="field"><label htmlFor={id}>{label}</label>{children}{error && <span className="field-error" id={`${id}-error`}>{error}</span>}</div>;
}

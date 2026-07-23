import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Contatti e preventivi", description: "Contatta Idolo Logistics per informazioni o per richiedere un preventivo personalizzato." };
export default function ContactPage() {
  return <main id="contenuto"><PageHero eyebrow="Contatti" title="Dimmi dove. Al resto pensiamo noi." description="Scrivici per un preventivo o per capire quale servizio è più adatto alla tua esigenza." /><section className="section"><div className="container contact-grid"><aside className="contact-aside"><h2>Parliamone.</h2><p>Puoi contattarci direttamente oppure compilare il modulo. Ti risponderemo con indicazioni chiare.</p><div className="contact-details"><div><small>Telefono</small><a href={`tel:${company.phoneHref}`}>{company.phone}</a></div><div><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></div><div><small>WhatsApp Business</small><a href={company.social.whatsapp.href} target="_blank" rel="noopener noreferrer">Scrivici direttamente</a></div><div><small>Facebook</small><a href={company.social.facebook} target="_blank" rel="noopener noreferrer">Segui Idolo Logistics</a></div><div><small>Sede</small><address>{company.address}</address></div><div><small>Orari</small><span>{company.hours}</span></div></div></aside><ContactForm /></div></section></main>;
}

import { SectionHeading } from "./sections/SectionHeading";
import { sectionClasses } from "./ui/tokens";

const services = [
  {
    title: "Raccomandate",
    description: "Invii sicuri e tracciabili per documenti e comunicazioni importanti.",
    icon: "✉️",
  },
  {
    title: "Raccomandata 1",
    description: "Servizio premium per spedizioni selettive e urgenti.",
    icon: "📦",
  },
  {
    title: "Posta ordinaria",
    description: "Gestione semplice e affidabile per la corrispondenza quotidiana.",
    icon: "📝",
  },
  {
    title: "Spedizioni nazionali",
    description: "Consegne puntuali in tutta Italia con assistenza dedicata.",
    icon: "🚚",
  },
  {
    title: "Spedizioni internazionali",
    description: "Soluzioni complete per invii oltre confine.",
    icon: "🌍",
  },
  {
    title: "Ritiro a domicilio",
    description: "Prenota il ritiro direttamente presso la tua sede.",
    icon: "🏠",
  },
  {
    title: "Consegna in giornata",
    description: "Tempi rapidi per urgenze, documenti e consegne strategiche.",
    icon: "⚡",
  },
  {
    title: "Servizi per aziende",
    description: "Piani scalabili per team e uffici in crescita.",
    icon: "🏢",
  },
  {
    title: "Servizi per amministratori",
    description: "Gestione ordinaria e dedicate per condomini e strutture.",
    icon: "🏘️",
  },
];

export function Services() {
  return (
    <section id="servizi" className={sectionClasses.surface}>
      <SectionHeading
        eyebrow="I nostri servizi"
        title="Soluzioni complete per corrispondenza e spedizioni"
      />

      <div className="mt-10 space-y-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex items-center justify-between rounded-[1.25rem] border border-black/5 bg-gradient-to-r from-white to-zinc-50 px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#F4C400] hover:shadow-[0_18px_45px_-24px_rgba(0,0,0,0.28)]"
          >
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F4C400] text-lg font-semibold text-black shadow-[0_8px_20px_rgba(244,196,0,0.22)]">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{service.title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600">{service.description}</p>
              </div>
            </div>
            <span className="ml-4 text-xl text-[#F4C400] transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

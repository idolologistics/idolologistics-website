import { company } from "@/data/company";
import { FeatureCard } from "./cards/FeatureCard";
import { SectionHeading } from "./sections/SectionHeading";
import { sectionClasses } from "./ui/tokens";

const features = [
  {
    title: "Consegna in giornata",
    description:
      "Ritiri e consegne rapide nell'area metropolitana di Cagliari.",
    icon: "⚡",
  },
  {
    title: "Servizi postali autorizzati",
    description:
      "Raccomandate, posta, spedizioni nazionali e internazionali.",
    icon: "✉️",
  },
  {
    title: "Per aziende e condomini",
    description:
      "Servizi continuativi, gestione della corrispondenza e ritiri programmati.",
    icon: "🏢",
  },
  {
    title: "Assistenza diretta",
    description:
      "Parli sempre con il nostro team, senza call center.",
    icon: "🤝",
  },
];

export function WhyChooseUs() {
  return (
    <section className={sectionClasses.surface}>
      <SectionHeading
        eyebrow={`Perché scegliere ${company.brand}`}
        title={`Perché scegliere ${company.brand}`}
        description="Ogni spedizione è gestita con attenzione, puntualità e assistenza dedicata."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

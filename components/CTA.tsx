import { CTASection } from "./sections/CTASection";

export function CTA() {
  return (
    <CTASection
      eyebrow="Pensiamo noi alla tua corrispondenza"
      title="Pensiamo noi alla tua corrispondenza."
      subtitle="Tu concentrati sul tuo lavoro. Al resto pensiamo noi."
      primaryActionLabel="Richiedi un ritiro"
      secondaryActionLabel="Richiedi un preventivo"
      secondaryActionHref="#servizi"
    />
  );
}

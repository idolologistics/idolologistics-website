import { company } from "@/data/company";
import { Card } from "./ui/Card";
import { SectionHeading } from "./sections/SectionHeading";
import { sectionClasses } from "./ui/tokens";

const steps = [
  {
    icon: "📅",
    title: "Richiedi il ritiro",
    text: "Compila il modulo o contattaci.",
  },
  {
    icon: "🚚",
    title: "Passiamo da te",
    text: "Ritiriamo la corrispondenza presso la tua sede.",
  },
  {
    icon: "📦",
    title: "Gestiamo la spedizione",
    text: "Prepariamo e affidiamo la spedizione al servizio più adatto.",
  },
  {
    icon: "✅",
    title: "Consegna completata",
    text: "La tua spedizione arriva a destinazione nei tempi previsti.",
  },
];

export function HowItWorks() {
  return (
    <section className={sectionClasses.surface}>
      <SectionHeading
        eyebrow="Come funziona"
        title="Come funziona"
        description={`Con ${company.brand} bastano pochi passaggi.`}
      />

      <div className="relative mt-12 hidden lg:block">
        <div className="absolute left-[10%] right-[10%] top-8 h-px bg-gradient-to-r from-[#F4C400]/0 via-[#F4C400]/70 to-[#F4C400]/0" />
        <div className="absolute left-[10%] right-[10%] top-8 h-px animate-[pulse_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white to-transparent" />

        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#F4C400] shadow-[0_0_0_6px_rgba(244,196,0,0.16)]" />
              <Card className="group mt-8 border border-black/5 bg-gradient-to-br from-white to-zinc-50 transition duration-300 hover:-translate-y-1 hover:border-[#F4C400] hover:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C400] text-xl shadow-[0_10px_25px_rgba(244,196,0,0.25)]">
                  {step.icon}
                </div>
                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F4C400]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {step.text}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-4 lg:hidden">
        {steps.map((step, index) => (
          <Card
            key={step.title}
            className="group border border-black/5 bg-gradient-to-br from-white to-zinc-50 transition duration-300 hover:-translate-y-1 hover:border-[#F4C400] hover:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4C400] text-xl shadow-[0_10px_25px_rgba(244,196,0,0.25)]">
                {step.icon}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F4C400]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {step.text}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

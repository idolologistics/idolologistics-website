import { company } from "@/data/company";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import Image from "next/image";

const highlights = [
  company.agency,
  "Raccomandate",
  "Raccomandata 1",
  "Spedizioni nazionali",
  "Spedizioni internazionali",
  "Ritiro a domicilio",
  "Consegna in giornata",
];

export function AboutAgency() {
  return (
    <section className="mt-8 rounded-[2rem] border border-black/5 bg-white px-6 py-10 shadow-[0_25px_90px_-35px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10 lg:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="animate-fade-in-up">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/porto-cagliari.jpg"
              alt="Porto di Cagliari"
              width={900}
              height={1100}
              className="min-h-[650px] w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.12)_0%,_rgba(0,0,0,0.3)_100%)]" />
            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
              Cagliari • Sardegna
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <Badge variant="brand" className="mb-4">
            {company.agency.toUpperCase()}
          </Badge>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl lg:text-5xl">
            {`La tua ${company.agency} a ${company.city}`}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            Ogni giorno supportiamo privati, aziende, professionisti e
            amministratori di condominio nella gestione della corrispondenza e
            delle spedizioni con precisione, rapidità e assistenza dedicata.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="group flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#F4C400] hover:bg-[#F4C400]/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4C400] text-sm font-semibold text-black">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-zinc-700">{item}</span>
                </div>
                <span className="h-px flex-1 bg-black/5 transition duration-300 group-hover:bg-[#F4C400]/60" />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button
              href="#servizi"
              variant="primary"
              className="w-full justify-center shadow-[0_14px_35px_rgba(244,196,0,0.25)] sm:w-auto"
            >
              Scopri tutti i servizi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

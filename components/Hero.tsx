const services = [
  {
    title: "Consegna in giornata",
    description: "Tempi rapidi per urgenze e documenti",
  },
  {
    title: "Raccomandate",
    description: "Invii sicuri e tracciabili",
  },
  {
    title: "Spedizioni",
    description: "Nazionali e internazionali",
  },
  {
    title: "Ritiro programmato",
    description: "Prenota il ritiro in modo semplice",
  },
  {
    title: "Amministratori di Condominio",
    description: "Servizi dedicati e trasparenti",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-6 py-10 shadow-[0_35px_110px_-30px_rgba(0,0,0,0.8)] sm:px-8 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,196,0,0.14),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.06),_transparent_24%),linear-gradient(120deg,_#050505_0%,_#111111_45%,_#060606_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(95deg,_rgba(0,0,0,0.75)_0%,_rgba(0,0,0,0.48)_45%,_rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:90px_90px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_50%_50%,rgba(244,196,0,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute left-[18%] top-[20%] h-[18rem] w-[18rem] rotate-12 rounded-full border border-[#F4C400]/20" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] [background-image:linear-gradient(135deg,transparent_0%,transparent_45%,rgba(255,255,255,0.25)_50%,transparent_55%,transparent_100%)] [background-size:220px_220px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_50%_50%,transparent_0%,transparent_62%,rgba(244,196,0,0.22)_63%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,transparent_0%,transparent_42%,rgba(255,255,255,0.8)_43%,transparent_44%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background:radial-gradient(circle_at_20%_80%,rgba(244,196,0,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{
        backgroundImage:
          "linear-gradient(0deg, transparent 0, transparent 70%, rgba(255,255,255,0.06) 71%, transparent 72%, transparent 100%), linear-gradient(90deg, transparent 0, transparent 70%, rgba(255,255,255,0.06) 71%, transparent 72%, transparent 100%)",
        backgroundSize: "220px 220px",
      }} />

      <div className="relative grid min-h-[78vh] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="mb-5 inline-flex rounded-full border border-[#F4C400]/40 bg-[#F4C400]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4C400]">
            SERVIZI POSTALI PRIVATI
          </p>
          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Il tuo partner
            <br />
            per posta,
            <br />
            spedizioni
            <br />
            e logistica<span className="text-[#F4C400]">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            Pensiamo noi alla tua corrispondenza a Cagliari e in tutta la Sardegna.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
            Servizi postali privati, spedizioni nazionali e internazionali,
            ritiro a domicilio, consegna in giornata.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contatti"
              className="rounded-full bg-[#F4C400] px-6 py-3 text-center text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(244,196,0,0.25)]"
            >
              Richiedi un ritiro
            </a>
            <a
              href="#servizi"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#F4C400] hover:text-[#F4C400]"
            >
              Calcola un preventivo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Consegne affidabili",
              "Supporto dedicato",
              "Prezzi trasparenti",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-zinc-200 backdrop-blur"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md animate-fade-in-up rounded-[1.5rem] border border-[#F4C400]/40 bg-black/85 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#F4C400]">
                  Servizi premium
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Soluzioni per ogni consegna
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#F4C400]/50 hover:bg-[#F4C400]/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4C400]/15 text-sm text-[#F4C400]">
                      ➜
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {service.title}
                      </p>
                      <p className="text-xs text-zinc-400">{service.description}</p>
                    </div>
                  </div>
                  <span className="text-lg text-[#F4C400] transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

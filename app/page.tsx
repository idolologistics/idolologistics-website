const services = [
  {
    title: "Raccomandate",
    description:
      "Invii sicuri e tracciabili per documenti, atti e comunicazioni importanti.",
  },
  {
    title: "Spedizioni",
    description:
      "Soluzioni rapide per spedizioni nazionali e internazionali con assistenza dedicata.",
  },
  {
    title: "Ritiro a domicilio",
    description:
      "Prenota il ritiro in tutta semplicità e ricevi il servizio direttamente a casa o in ufficio.",
  },
  {
    title: "Consegna in giornata",
    description:
      "Tempi ridotti per urgenze, documenti e consegne strategiche per il tuo business.",
  },
  {
    title: "Amministratori di Condominio",
    description:
      "Gestione ordinaria e dedicata per comunicazioni e ricezione di documenti condominiali.",
  },
  {
    title: "Servizi per Aziende",
    description:
      "Piani scalabili per garantire efficienza, puntualità e supporto continuo ai team.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,196,0,0.16),_transparent_32%),linear-gradient(135deg,_#ffffff_0%,_#fffdf4_100%)] text-zinc-950">
      <header className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-10">
        <nav className="mb-10 flex items-center justify-between rounded-full border border-black/10 bg-white/90 px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur">
          <div className="text-lg font-semibold tracking-[0.28em] text-black">
            IDOLO LOGISTICS
          </div>
          <a
            href="#contatti"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-[#F4C400] hover:text-black"
          >
            Contatti
          </a>
        </nav>

        <section className="grid items-center gap-10 rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.35)] backdrop-blur md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
          <div className="animate-fade-in-up">
            <p className="mb-4 inline-flex rounded-full border border-[#F4C400] bg-[#F4C400]/15 px-3 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-black">
              Private postal services
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
              Pensiamo noi alla tua corrispondenza.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
              Servizi postali privati, spedizioni nazionali e internazionali,
              consegne rapide e servizi dedicati per aziende e amministratori di
              condominio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contatti"
                className="rounded-full bg-[#F4C400] px-6 py-3 text-center text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Richiedi un ritiro
              </a>
              <a
                href="#servizi"
                className="rounded-full border border-black px-6 py-3 text-center text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                Richiedi un preventivo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-600">
              <span className="rounded-full bg-zinc-100 px-3 py-2">Consegne affidabili</span>
              <span className="rounded-full bg-zinc-100 px-3 py-2">Supporto premium</span>
              <span className="rounded-full bg-zinc-100 px-3 py-2">Prezzi trasparenti</span>
            </div>
          </div>

          <div className="animate-fade-in-up rounded-[1.5rem] bg-black p-7 text-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#F4C400]">
                  Veloce e professionale
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Servizi su misura per ogni esigenza
                </h2>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Ritiro garantito in giornata",
                "Consegna in tempi ridotti",
                "Gestione dedicata per privati e aziende",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-lg text-[#F4C400]">•</span>
                  <span className="text-sm text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#F4C400]/40 bg-[#F4C400]/10 p-4 text-sm text-zinc-200">
              Dal centro di Cagliari a tutta Italia e oltre: precisione, puntualità e cura del dettaglio.
            </div>
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
        <section id="servizi" className="rounded-[2rem] bg-black px-6 py-12 text-white sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4C400]">
              I nostri servizi
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Soluzioni complete per la tua corrispondenza e le tue spedizioni
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F4C400] hover:bg-[#F4C400]/10"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F4C400] text-lg font-bold text-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contatti" className="border-t border-black/10 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-700 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-lg font-semibold text-black">IDOLO LOGISTICS</p>
            <p className="mt-2 max-w-md leading-7">
              Servizi postali privati e consegne premium a Cagliari e in tutta Italia.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-black">Contatti</p>
            <p>+39 070 000 0000</p>
            <p>info@idologistics.it</p>
            <p>Cagliari, Sardegna</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

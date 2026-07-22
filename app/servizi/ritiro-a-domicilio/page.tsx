import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Ritiro a domicilio | IDOLO LOGISTICS",
  description: "Scopri il servizio di ritiro a domicilio di IDOLO LOGISTICS.",
};

export default function RitiroDomicilioPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,196,0,0.16),_transparent_32%),linear-gradient(135deg,_#ffffff_0%,_#fffdf4_100%)] text-zinc-950">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-8 lg:px-10">
        <Card className="border border-black/5 bg-white p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F4C400]">
            {company.agency.toUpperCase()}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">
            Ritiro a domicilio
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Prenota il ritiro direttamente presso il tuo domicilio e lasciati guidare da un servizio semplice, flessibile e affidabile.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/servizi" variant="primary">
              Torna ai servizi
            </Button>
            <Button href="#contatti" variant="secondary">
              Richiedi informazioni
            </Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

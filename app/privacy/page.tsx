import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Privacy", robots: { index: false, follow: true } };
export default function PrivacyPage() {
  return <main id="contenuto"><PageHero eyebrow="Informativa" title="Privacy" description="Informazioni sul trattamento dei dati personali." /><section className="section"><div className="container legal-copy"><div className="notice"><strong>Testo provvisorio.</strong> Questa pagina è predisposta per la pubblicazione dell’informativa definitiva, da completare e verificare con il consulente privacy prima della messa online.</div><h2>Titolare del trattamento</h2><p>{company.legalName}, con sede in {company.address}. Dati societari: {company.legal.vatNumber}. Contatto: <a href={`mailto:${company.email}`}>{company.email}</a>.</p><h2>Dati trattati tramite il sito</h2><p>Il modulo contatti presente in questa versione effettua esclusivamente una validazione nel browser: non invia e non memorizza i dati inseriti.</p><h2>Finalità e base giuridica</h2><p>Prima dell’attivazione dell’invio reale saranno specificate finalità, basi giuridiche, tempi di conservazione, destinatari e modalità di esercizio dei diritti.</p><h2>Diritti dell’interessato</h2><p>L’informativa definitiva descriverà i diritti previsti dalla normativa applicabile e le modalità per esercitarli.</p><p>Ultimo aggiornamento: luglio 2026.</p></div></section></main>;
}

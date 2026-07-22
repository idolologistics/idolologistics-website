import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Cookie policy", robots: { index: false, follow: true } };
export default function CookiePage() {
  return <main id="contenuto"><PageHero eyebrow="Informativa" title="Cookie policy" description="Informazioni sui cookie utilizzati da questo sito." /><section className="section"><div className="container legal-copy"><div className="notice"><strong>Testo provvisorio.</strong> La policy dovrà essere aggiornata se verranno aggiunti strumenti statistici, contenuti esterni o cookie non necessari.</div><h2>Cookie tecnici</h2><p>La prima versione del sito è progettata senza strumenti di profilazione o tracciamento di terze parti. Potranno essere utilizzati esclusivamente i cookie tecnici necessari al corretto funzionamento.</p><h2>Servizi esterni</h2><p>Non sono attualmente incorporati social feed, mappe, video o sistemi di analisi che installino cookie di terze parti.</p><h2>Gestione delle preferenze</h2><p>Se in futuro verranno introdotti cookie non necessari, sarà aggiunto un sistema di consenso che consentirà di accettarli, rifiutarli o modificare le preferenze.</p><p>Ultimo aggiornamento: luglio 2026.</p></div></section></main>;
}

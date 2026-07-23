import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PublicAdministrationSection } from "@/components/PublicAdministrationSection";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: { absolute: "Aziende, professionisti e Pubblica Amministrazione" },
  description: "Servizi postali e logistici per aziende, studi professionali, amministratori di condominio ed enti pubblici.",
};

const solutions = [
  ["01", "Ritiro in sede", "Passiamo presso il tuo ufficio o studio, anche con frequenza programmata."],
  ["02", "Stampa e imbustamento", "Prepariamo la corrispondenza per ridurre il lavoro operativo interno."],
  ["03", "Consegne programmate", "Pianifichiamo ritiri e consegne sulla base dei tuoi flussi e delle scadenze."],
  ["04", "Fatturazione mensile", "Un riepilogo chiaro e un’unica fattura a fine mese per i servizi concordati."],
  ["05", "Referente dedicato", "Un contatto diretto che conosce le tue esigenze e segue ogni richiesta."],
  ["06", "Invii certificati", "Raccomandate e Raccomandata 1 per comunicazioni professionali tracciabili."],
];

export default function BusinessPage() {
  return (
    <main id="contenuto">
      <PageHero eyebrow="Soluzioni business e PA" title="La logistica lavora meglio quando lavora per te." description="Servizi continuativi e flessibili per imprese, studi professionali, amministratori di condominio e Pubbliche Amministrazioni." />
      <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Un servizio organizzato</p><h2>Meno attività operative. Più controllo.</h2></div><p>Costruiamo un flusso semplice, dal ritiro alla rendicontazione, con un interlocutore sempre raggiungibile.</p></div><div className="info-cards">{solutions.map(([number, title, description]) => <article className="info-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="section info-band"><div className="container content-grid"><h2>Per chi gestisce comunicazioni ogni giorno.</h2><div className="prose"><p>Affianchiamo aziende di ogni dimensione, studi legali e professionali, amministratori di condominio e attività che inviano documenti o pacchi con regolarità.</p><h3>Una proposta proporzionata ai tuoi volumi</h3><p>Analizziamo frequenza, destinazioni e urgenze per definire modalità operative chiare. Per iniziare basta raccontarci le esigenze del tuo ufficio.</p><Link className="button" href="/contatti#modulo">Parla con un nostro referente <span aria-hidden="true">→</span></Link></div></div></section>
      <PublicAdministrationSection />
      <FinalCta />
    </main>
  );
}

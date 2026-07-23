import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: { absolute: "Chi siamo | Idolo Logistics Cagliari" },
  description: "Idolo Logistics è Agenzia Sailpost Cagliari 1 e offre servizi postali e logistici per privati, professionisti, aziende e Pubbliche Amministrazioni.",
};

const values = [
  ["01", "Semplicità", "Riduciamo passaggi, attese e complessità, offrendo indicazioni chiare fin dal primo contatto."],
  ["02", "Responsabilità", "Seguiamo ogni richiesta con attenzione, trasparenza e continuità."],
  ["03", "Prossimità", "Siamo un interlocutore presente sul territorio e facilmente raggiungibile."],
];

export default function AboutPage() {
  return (
    <main id="contenuto">
      <PageHero eyebrow="Chi siamo" title="Il nostro lavoro parte da Cagliari." description="Servizi postali e logistici costruiti sulle esigenze reali delle persone, con un rapporto diretto e la forza della rete Sailpost." />

      <section className="section about-intro">
        <div className="container content-grid">
          <h2>Vicini al territorio, attenti a ogni esigenza.</h2>
          <div className="prose">
            <p>Idolo Logistics opera a Cagliari e nel suo hinterland offrendo servizi postali e logistici rivolti a privati, professionisti, aziende e Pubbliche Amministrazioni.</p>
            <p>Per noi una spedizione non è soltanto un codice: può essere un documento importante, una comunicazione urgente, un pacco atteso o una scadenza di lavoro. Per questo ascoltiamo prima di proporre una soluzione e seguiamo ogni richiesta con un contatto diretto.</p>
            <p>La conoscenza del territorio, la disponibilità di un unico interlocutore e l’organizzazione dei servizi ci consentono di offrire risposte semplici, concrete e proporzionate alle reali necessità del cliente.</p>
          </div>
        </div>
        <figure className="container cagliari-figure">
          <div className="cagliari-image-frame">
            <Image src="/images/cagliari-porto.jpg" alt="Panorama del porto e del quartiere Castello di Cagliari" fill loading="eager" sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 1200px) calc(100vw - 40px), 1180px" className="cagliari-image" />
          </div>
          <figcaption>Cagliari, il territorio in cui lavoriamo ogni giorno.</figcaption>
        </figure>
      </section>

      <section className="section about-sailpost" aria-labelledby="about-sailpost-title">
        <div className="container sailpost-grid">
          <div className="sailpost-logo-slot">
            <Image src="/logo-sailpost.png" alt="Sailpost – Agenzia Cagliari 1" width={244} height={73} className="sailpost-logo-image" sizes="(max-width: 640px) 230px, 370px" />
          </div>
          <div className="sailpost-copy">
            <p className="eyebrow"><span />Partner Sailpost</p>
            <h2 id="about-sailpost-title">Idolo Logistics è Agenzia Sailpost Cagliari 1.</h2>
            <p>Operiamo all’interno della rete postale nazionale Sailpost, unendo la presenza diretta sul territorio a un’organizzazione strutturata e a servizi postali tracciabili.</p>
            <p>Attraverso Sailpost possiamo offrire soluzioni rivolte a privati, professionisti, aziende e Pubbliche Amministrazioni, mantenendo per il cliente un riferimento locale, facilmente raggiungibile e sempre disponibile.</p>
          </div>
        </div>
        <div className="container">
          <ul className="sailpost-points" aria-label="Punti di forza della partnership Sailpost">
            <li><span>01</span>presenza diretta a Cagliari</li>
            <li><span>02</span>rete postale nazionale</li>
            <li><span>03</span>servizi tracciabili</li>
            <li><span>04</span>soluzioni dedicate per aziende e Pubbliche Amministrazioni</li>
          </ul>
        </div>
      </section>

      <section className="section about-pa-callout">
        <div className="container content-grid">
          <h2>Al fianco della Pubblica Amministrazione.</h2>
          <div className="prose">
            <p>Attraverso Sailpost affianchiamo enti e amministrazioni nella gestione della corrispondenza, delle lavorazioni documentali, del recapito e della relativa reportistica.</p>
            <Link className="button" href="/servizi#pubblica-amministrazione">Scopri i servizi per gli enti <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section info-band">
        <div className="container info-cards">
          {values.map(([number, title, description]) => <article className="info-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>
      <FinalCta />
    </main>
  );
}

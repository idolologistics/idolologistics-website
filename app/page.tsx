import Link from "next/link";
import Image from "next/image";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FinalCta } from "@/components/FinalCta";

const businessBenefits = ["Ritiro presso uffici e studi", "Stampa e imbustamento", "Consegne programmate", "Fatturazione a fine mese", "Referente dedicato"];
const reasons = [
  ["01", "Un unico interlocutore", "Dalla scelta del servizio fino alla consegna, sai sempre a chi rivolgerti."],
  ["02", "Soluzioni su misura", "Ogni spedizione ha esigenze diverse. Costruiamo il servizio intorno alle tue."],
  ["03", "Presenza sul territorio", "Conosciamo Cagliari e il suo hinterland e interveniamo con rapidità."],
  ["04", "Chiarezza operativa", "Informazioni semplici, assistenza diretta e nessuna complicazione inutile."],
];

export default function Home() {
  return (
    <main id="contenuto">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Logistica, fatta semplice</p>
            <h1>Spedizioni semplici,<br /><em>veloci</em> e su misura</h1>
            <p className="hero-lead">Servizi postali e logistici affidabili per privati, aziende e professionisti. Dalla partenza alla consegna, ci occupiamo noi di tutto.</p>
            <div className="button-row"><Link className="button" href="/servizi">Scopri i servizi <span aria-hidden="true">→</span></Link><Link className="text-link" href="/contatti">Contattaci <span aria-hidden="true">↗</span></Link></div>
            <div className="hero-proof"><span><strong>6</strong> servizi dedicati</span><span><strong>1</strong> referente diretto</span><span><strong>Cagliari</strong> consegne in giornata</span></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="route route-one" /><div className="route route-two" />
            <div className="package package-main"><span>IDOLO</span><strong>LOGISTICS</strong><small>HANDLE WITH CARE</small></div>
            <div className="status-card"><span className="status-dot" /><div><small>SPEDIZIONE</small><strong>In movimento</strong></div><b>→</b></div>
            <span className="place place-a">CAGLIARI</span><span className="place place-b">DESTINAZIONE</span>
          </div>
        </div>
      </section>

      <section className="section" id="servizi"><div className="container"><div className="section-heading"><div><p className="eyebrow">Cosa facciamo</p><h2>Ogni invio, la soluzione giusta.</h2></div><p>Servizi flessibili per una singola spedizione o per la gestione quotidiana della tua attività.</p></div><ServiceGrid /><Link className="section-link" href="/servizi">Esplora tutti i servizi <span aria-hidden="true">→</span></Link></div></section>

      <section className="sailpost-section section" aria-labelledby="sailpost-title">
        <div className="container">
          <div className="sailpost-grid">
            <div className="sailpost-logo-slot">
              <Image
                src="/logo-sailpost.png"
                alt="Sailpost – Agenzia Cagliari 1"
                width={244}
                height={73}
                className="sailpost-logo-image"
                sizes="(max-width: 640px) 230px, 320px"
              />
            </div>
            <div className="sailpost-copy">
              <p className="eyebrow"><span />LA NOSTRA RETE</p>
              <h2 id="sailpost-title">Idolo Logistics è Agenzia Sailpost Cagliari 1</h2>
              <p>Facciamo parte della rete postale Sailpost e offriamo a Cagliari servizi di spedizione, raccomandate, consegna, ritiro e soluzioni dedicate a privati, professionisti e aziende.</p>
              <Link className="button" href="/servizi">Scopri i nostri servizi <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <ul className="sailpost-points" aria-label="Vantaggi della rete Sailpost">
            <li><span>01</span>rete postale nazionale</li>
            <li><span>02</span>servizi tracciabili</li>
            <li><span>03</span>assistenza presso la nostra agenzia</li>
            <li><span>04</span>soluzioni dedicate per aziende e professionisti</li>
          </ul>
        </div>
      </section>

      <section className="business-section section"><div className="container business-grid"><div className="business-art" aria-hidden="true"><span className="giant-type">B2B</span><div className="document-stack"><div /><div /><div /></div><span className="stamp">PRIORITÀ<br />BUSINESS</span></div><div className="business-copy"><p className="eyebrow eyebrow-dark">Per il tuo lavoro</p><h2>Più tempo per il tuo business. Alla logistica pensiamo noi.</h2><p>Un servizio organizzato per aziende, studi professionali e amministratori di condominio che vogliono semplificare la gestione di corrispondenza e spedizioni.</p><ul>{businessBenefits.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul><Link className="button button-light" href="/aziende-professionisti">Scopri le soluzioni business <span aria-hidden="true">→</span></Link></div></div></section>

      <section className="section reasons"><div className="container"><div className="section-heading"><div><p className="eyebrow">Perché noi</p><h2>Affidabilità che si vede,<br />semplicità che si sente.</h2></div><p>Un modo diretto e concreto di prenderci cura di ogni consegna.</p></div><div className="reasons-grid">{reasons.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <FinalCta />
    </main>
  );
}

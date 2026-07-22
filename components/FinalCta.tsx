import Link from "next/link";

export function FinalCta() {
  return (
    <section className="final-cta section">
      <div className="container final-cta-inner">
        <div><p className="eyebrow eyebrow-dark">Partiamo da qui</p><h2>Raccontaci cosa devi spedire.</h2><p>Ti aiutiamo a trovare la soluzione più semplice, senza impegno.</p></div>
        <Link className="button button-light" href="/contatti#modulo">Richiedi un preventivo <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}

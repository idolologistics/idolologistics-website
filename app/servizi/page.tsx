import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = { title: "Servizi", description: "Spedizioni, raccomandate, ritiri, consegne in giornata e servizi logistici a Cagliari." };
export default function ServicesPage() {
  return <main id="contenuto"><PageHero eyebrow="I nostri servizi" title="C’è un modo più semplice di spedire." description="Dalla raccomandata al ritiro in ufficio: scegli il servizio oppure raccontaci l’esigenza e ti aiutiamo noi." /><section className="section"><div className="container"><ServiceGrid /></div></section><section className="section info-band"><div className="container content-grid"><h2>Non sai da dove cominciare?</h2><div className="prose"><p>Indicaci cosa devi inviare, da dove parte e quando deve arrivare. Valuteremo insieme la soluzione più adatta, senza complicazioni.</p><ul className="check-list"><li><span>✓</span>Supporto nella scelta del servizio</li><li><span>✓</span>Ritiro concordato presso casa, ufficio o studio</li><li><span>✓</span>Opzioni dedicate per esigenze ricorrenti</li></ul></div></div></section><FinalCta /></main>;
}

import Link from "next/link";
import Image from "next/image";
import { company, navigation } from "@/data/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo footer-logo" aria-label="Idolo Logistics, homepage">
            <span className="footer-logo-support">
              <Image
                src="/logo-idolo-logistics.png"
                alt="Idolo Logistics – Agenzia Sailpost Cagliari 1"
                width={1536}
                height={1024}
                className="footer-logo-image"
                sizes="210px"
              />
            </span>
            <small>Agenzia Sailpost Cagliari 1</small>
          </Link>
          <p>Soluzioni postali e logistiche costruite intorno alle persone e al loro lavoro.</p>
        </div>
        <div><h2>Esplora</h2>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div><h2>Contatti</h2><address>{company.address}</address><a href={`tel:${company.phoneHref}`}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.social.whatsapp.href} target="_blank" rel="noopener noreferrer">Scrivici su WhatsApp</a><a href={company.social.facebook} target="_blank" rel="noopener noreferrer">Seguici su Facebook</a></div>
        <div><h2>Informazioni</h2><Link href="/privacy">Privacy</Link><Link href="/cookie-policy">Cookie policy</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.name}</span><span>{company.legal.vatNumber}</span></div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/company";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo brand-logo" aria-label="Idolo Logistics, homepage">
          <Image
            src="/logo-idolo-logistics.png"
            alt="Idolo Logistics – Agenzia Sailpost Cagliari 1"
            width={1536}
            height={1024}
            priority
            className="brand-logo-image"
            sizes="(max-width: 640px) 96px, 116px"
          />
          <small>Agenzia Sailpost Cagliari 1</small>
        </Link>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contatti#modulo" className="button button-small header-cta">Richiedi un preventivo</Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        <nav className="container" aria-label="Navigazione mobile">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link href="/contatti#modulo" className="button" onClick={() => setOpen(false)}>Richiedi un preventivo</Link>
        </nav>
      </div>
    </header>
  );
}

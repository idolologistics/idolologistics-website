import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/data/company";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: { default: company.seo.title, template: "%s | Idolo Logistics" },
  description: company.seo.description,
  keywords: ["spedizioni Cagliari", "servizi postali", "ritiro a domicilio", "raccomandate", "logistica"],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: company.name,
    title: company.seo.title,
    description: company.seo.description,
  },
  twitter: { card: "summary", title: company.seo.title, description: company.seo.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${geist.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#contenuto">Vai al contenuto</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

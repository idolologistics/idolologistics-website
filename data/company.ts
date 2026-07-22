export const company = {
  name: "Idolo Logistics",
  brand: "IDOLO LOGISTICS",
  legalName: "IDOLO LOGISTICS SRL",
  agency: "Agenzia Sailpost Cagliari 1",
  tagline: "Spedizioni semplici, veloci e su misura",
  description:
    "Servizi postali e logistici per privati, aziende e professionisti a Cagliari.",
  address: "Via Giacomo Puccini, 43 – 09128 Cagliari (CA)",
  city: "Cagliari",
  phone: "+39 375 778 6610",
  phoneHref: "+393757786610",
  email: "idolologistics@gmail.com",
  contactForm: {
    recipient: "idolologistics@gmail.com",
    enabled: false,
  },
  hours: "Lunedì–Venerdì · 09:00–17:00",
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    placeholder: "Profili social in aggiornamento",
  },
  legal: {
    vatNumber: "Dato societario in aggiornamento",
    registration: "Dato societario in aggiornamento",
  },
  seo: {
    title: "Idolo Logistics | Spedizioni e servizi postali a Cagliari",
    description:
      "Spedizioni nazionali e internazionali, raccomandate, ritiri a domicilio e servizi per aziende e professionisti a Cagliari.",
    siteUrl: "https://idolologistics.com",
  },
} as const;

export const navigation = [
  { label: "Servizi", href: "/servizi" },
  { label: "Aziende e professionisti", href: "/aziende-professionisti" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const services = [
  {
    number: "01",
    title: "Spedizioni nazionali e internazionali",
    description: "Soluzioni chiare e tracciabili per documenti, pacchi e merci in Italia e all’estero.",
  },
  {
    number: "02",
    title: "Raccomandate e Raccomandata 1",
    description: "Invii certificati, rapidi e monitorabili per comunicazioni importanti e urgenti.",
  },
  {
    number: "03",
    title: "Ritiro a domicilio",
    description: "Ritiriamo la spedizione a casa, in ufficio o presso il tuo studio, su appuntamento.",
  },
  {
    number: "04",
    title: "Consegne in giornata",
    description: "Servizio dedicato per consegne rapide a Cagliari e nell’hinterland.",
  },
  {
    number: "05",
    title: "Spedizione valigie",
    description: "Viaggia più leggero: organizziamo il ritiro e la consegna dei tuoi bagagli.",
  },
  {
    number: "06",
    title: "Domiciliazione corrispondenza e pacchi",
    description: "Un punto affidabile per ricevere e gestire posta e spedizioni con maggiore flessibilità.",
  },
] as const;

# Idolo Logistics — sito ufficiale

Prima versione del sito istituzionale di Idolo Logistics, realizzata con Next.js 16, TypeScript, React 19, App Router e Tailwind CSS 4. Il progetto è responsive, accessibile nelle interazioni principali e pronto per la pubblicazione su Vercel.

## Avvio locale

Requisiti: Node.js 20.9 o successivo e npm.

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000). Le modifiche ai file vengono mostrate automaticamente.

## Controlli disponibili

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

`npm start` avvia in locale la build di produzione dopo `npm run build`.

## Dove modificare i contenuti

- `data/company.ts`: dati aziendali, contatti, SEO, navigazione e catalogo servizi.
- `app/page.tsx`: homepage.
- `app/*/page.tsx`: contenuti delle singole pagine.
- `components/`: intestazione, footer, modulo e sezioni riutilizzabili.
- `app/globals.css`: identità visiva, layout e responsive design.

I dati non ancora confermati sono marcati come “in aggiornamento” in `data/company.ts`. Prima della pubblicazione definitiva occorre verificare i dati societari e sostituire i testi provvisori delle informative privacy e cookie con testi approvati.

## Modulo contatti

Il modulo effettua validazione lato client ma non trasmette né conserva dati. Per attivarlo occorre collegare un servizio email, un CRM o una Server Action e aggiornare l’informativa privacy.

## Pubblicazione su Vercel

1. Carica il repository su GitHub, GitLab o Bitbucket.
2. In Vercel scegli **Add New → Project** e importa il repository.
3. Vercel riconoscerà automaticamente Next.js; non sono richieste impostazioni di build personalizzate.
4. Dopo il primo deploy collega il dominio definitivo.
5. Aggiorna `seo.siteUrl` in `data/company.ts` se il dominio differisce da `https://www.idolologistics.it`.

In alternativa, con Vercel CLI: `npx vercel` per una preview e `npx vercel --prod` per la produzione.

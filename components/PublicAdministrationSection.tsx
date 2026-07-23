import { company } from "@/data/company";

const publicAdministrationServices = [
  "Gestione della posta in entrata e in uscita",
  "Ritiro della corrispondenza presso la sede dell’ente",
  "Posta ordinaria, raccomandata, massiva, assicurata ed estera",
  "Recapito di documenti e pacchi",
  "Stampa e imbustamento",
  "Normalizzazione e controllo degli indirizzi",
  "Monitoraggio delle lavorazioni",
  "Reportistica relativa ai documenti e ai costi di spedizione",
  "Notificazione postale di atti giudiziari e contravvenzioni attraverso Sailpost",
] as const;

export function PublicAdministrationSection() {
  return (
    <section className="section public-admin-section" aria-labelledby="public-administration-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span />Soluzioni per gli enti</p>
            <h2 id="public-administration-title">Servizi per la Pubblica Amministrazione</h2>
          </div>
          <div className="pa-intro">
            <p>Idolo Logistics, attraverso la rete Sailpost, affianca enti pubblici e amministrazioni nella gestione delle attività postali e documentali.</p>
            <p>Il servizio può accompagnare l’ente dal ritiro della corrispondenza presso la propria sede fino alla lavorazione e al recapito, con strumenti dedicati al controllo delle spedizioni, dei documenti e dei relativi costi.</p>
          </div>
        </div>
        <ul className="pa-services-grid">
          {publicAdministrationServices.map((service, index) => <li key={service}><span>{String(index + 1).padStart(2, "0")}</span>{service}</li>)}
        </ul>
        <div className="pa-footer">
          <p className="pa-license-note">Le notificazioni a mezzo posta degli atti giudiziari e delle contravvenzioni sono gestite attraverso Sailpost, titolare della licenza speciale nazionale A1.</p>
          <a className="section-link" href={company.sailpost.publicAdministrationUrl} target="_blank" rel="noopener noreferrer">Approfondisci i servizi Sailpost per la Pubblica Amministrazione <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { services } from "@/data/company";
import { ArrowIcon } from "./ArrowIcon";

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`service-grid ${compact ? "compact" : ""}`}>
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <div className="service-top"><span>{service.number}</span><ArrowIcon /></div>
          <h3>{service.title}</h3><p>{service.description}</p>
          {!compact && <Link href="/contatti#modulo">Chiedi informazioni <span aria-hidden="true">→</span></Link>}
        </article>
      ))}
    </div>
  );
}

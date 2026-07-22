import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servizi", "/aziende-professionisti", "/chi-siamo", "/contatti", "/privacy", "/cookie-policy"];
  return routes.map((route) => ({ url: `${company.seo.siteUrl}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1></div><p>{description}</p></div></section>;
}

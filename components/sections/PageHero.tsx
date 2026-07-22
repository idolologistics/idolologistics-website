import type { ReactNode } from "react";
import { company } from "@/data/company";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  primaryActionHref?: string;
  secondaryActionHref?: string;
  children?: ReactNode;
  imageSrc?: string;
  compact?: boolean;
};

export function PageHero({
  badge,
  title,
  subtitle,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionHref = "#contatti",
  secondaryActionHref = "#contatti",
  children,
  imageSrc = "/images/porto-cagliari.jpg",
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-6 py-8 shadow-[0_35px_110px_-30px_rgba(0,0,0,0.8)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.58) 45%, rgba(0,0,0,0.78) 100%), url('${imageSrc}')`,
        }}
      />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:90px_90px]" />
      <div className="relative">
        <nav className="flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur sm:px-5">
          <Link href="/" className="font-semibold uppercase tracking-[0.28em] text-white">
            {company.brand}
          </Link>
          <div className="hidden items-center gap-6 text-white/80 sm:flex">
            <a href="/servizi" className="transition hover:text-white">
              Servizi
            </a>
            <a href="#contatti" className="transition hover:text-white">
              Contatti
            </a>
          </div>
        </nav>

        <Container className={compact ? "mt-8" : "mt-10"}>
          <div className="max-w-3xl">
            <Badge variant="dark" className="mb-5">
              {badge}
            </Badge>
            <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryActionHref} variant="primary">
                {primaryActionLabel}
              </Button>
              <Button href={secondaryActionHref} variant="outline">
                {secondaryActionLabel}
              </Button>
            </div>
            {children}
          </div>
        </Container>
      </div>
    </section>
  );
}

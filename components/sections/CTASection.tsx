import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { sectionClasses } from "@/components/ui/tokens";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryActionLabel: string;
  secondaryActionLabel?: string;
  primaryActionHref?: string;
  secondaryActionHref?: string;
  children?: ReactNode;
};

export function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryActionLabel,
  secondaryActionLabel,
  primaryActionHref = "#contatti",
  secondaryActionHref = "#contatti",
  children,
}: CTASectionProps) {
  return (
    <section className={sectionClasses.darkCta}>
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#F4C400]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={primaryActionHref} variant="primary" className="shadow-[0_14px_35px_rgba(244,196,0,0.25)]">
            {primaryActionLabel}
          </Button>
          {secondaryActionLabel ? (
            <Button href={secondaryActionHref} variant="outline" className="border-white/25 text-white hover:border-[#F4C400] hover:text-[#F4C400]">
              {secondaryActionLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

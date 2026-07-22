import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { typography } from "@/components/ui/tokens";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  titleClassName?: string;
  inverse?: boolean;
  align?: "center" | "left";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleClassName = "",
  inverse = false,
  align = "center",
  children,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Badge variant={inverse ? "dark" : "brand"} className="mb-4">{eyebrow}</Badge> : null}
      <h2 className={`${inverse ? typography.sectionTitleInverse : typography.sectionTitle} ${titleClassName}`.trim()}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 ${inverse ? "text-zinc-300" : "text-zinc-600"} ${typography.bodyText}`.trim()}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

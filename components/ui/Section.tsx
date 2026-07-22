import type { ElementType, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Section({
  children,
  className = "",
  as: Component = "section",
}: SectionProps) {
  return (
    <Component className={`rounded-[2rem] px-6 py-10 shadow-[0_20px_70px_-30px_rgba(0,0,0,0.25)] sm:px-8 lg:px-10 lg:py-12 ${className}`.trim()}>
      {children}
    </Component>
  );
}

import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function ServiceCard({ icon, title, description, href, className = "" }: ServiceCardProps) {
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C400] text-xl shadow-[0_10px_25px_rgba(244,196,0,0.25)]">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-black">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{description}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        <Card className={`h-full border border-black/5 bg-gradient-to-br from-white to-zinc-50 ${className}`.trim()}>
          {content}
        </Card>
      </a>
    );
  }

  return (
    <Card className={`border border-black/5 bg-gradient-to-br from-white to-zinc-50 ${className}`.trim()}>
      {content}
    </Card>
  );
}

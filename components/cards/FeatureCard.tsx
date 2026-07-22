import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
};

export function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <Card className={`group relative overflow-hidden border border-black/5 bg-gradient-to-br from-white to-zinc-50 transition duration-300 hover:-translate-y-1 hover:border-[#F4C400] hover:shadow-[0_26px_70px_-28px_rgba(0,0,0,0.35)] ${className}`.trim()}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,196,0,0.12),_transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        {icon ? (
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C400] text-xl shadow-[0_10px_25px_rgba(244,196,0,0.25)]">
            {icon}
          </div>
        ) : null}
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        {description ? <p className="mt-3 text-sm leading-7 text-zinc-600">{description}</p> : null}
      </div>
      <div className="mt-6 h-1.5 w-12 rounded-full bg-[#F4C400]/70 transition duration-300 group-hover:w-20" />
    </Card>
  );
}

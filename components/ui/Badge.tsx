import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "brand" | "dark";
};

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const variants = {
    default: "border border-black/10 bg-white text-zinc-700",
    brand: "border border-[#F4C400]/40 bg-[#F4C400]/10 text-black",
    dark: "border border-white/10 bg-black/80 text-white",
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-2 text-sm font-medium ${variants[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
}

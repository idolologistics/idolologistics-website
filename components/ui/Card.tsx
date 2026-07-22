import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_-24px_rgba(0,0,0,0.35)] transition duration-300 ${hover ? "hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)]" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]";

  const variants = {
    primary: "bg-[#F4C400] text-black",
    secondary: "bg-[#111111] text-white",
    outline: "border border-white/30 bg-transparent text-white",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}

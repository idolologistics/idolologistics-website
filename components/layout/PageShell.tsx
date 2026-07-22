import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/Footer";

export function PageShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(244,196,0,0.16),_transparent_32%),linear-gradient(135deg,_#ffffff_0%,_#fffdf4_100%)] text-zinc-950 ${className}`.trim()}>
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
        <Container className="flex-1">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
}

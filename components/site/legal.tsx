import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function LegalPage({
  title,
  effective,
  updated,
  children,
}: {
  title: string;
  effective: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <p className="eyebrow">Legal</p>
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-paper/40 uppercase">
          Effective {effective} · Last updated {updated}
        </p>
        <div className="mt-12 flex flex-col gap-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-2 text-base font-semibold text-paper">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
      {children}
    </p>
  );
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-paper">{children}</strong>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-gold md:text-[15px]">
      {children}
    </ul>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-2 border-pin bg-pin/5 px-5 py-4 text-sm leading-relaxed text-paper/85 md:text-[15px]">
      {children}
    </div>
  );
}

export function Mail() {
  return (
    <a
      href="mailto:tmastrangelo@elon.edu"
      className="font-medium text-pin hover:underline"
    >
      tmastrangelo@elon.edu
    </a>
  );
}

export function LegalFootnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-paper/40">
      {children}
    </p>
  );
}

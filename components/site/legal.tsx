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
        <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-ink-soft uppercase">
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
      <h2 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Sub({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-2 text-base font-semibold text-ink">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed text-ink-soft md:text-[15px]">
      {children}
    </p>
  );
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-ink-soft marker:text-cobalt md:text-[15px]">
      {children}
    </ul>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-r-xl border-l-2 border-cobalt bg-cobalt-soft/60 px-5 py-4 text-sm leading-relaxed text-ink/85 md:text-[15px]">
      {children}
    </div>
  );
}

export function Mail() {
  return (
    <a
      href="mailto:tmastrangelo@elon.edu"
      className="font-medium text-cobalt hover:underline"
    >
      tmastrangelo@elon.edu
    </a>
  );
}

export function LegalFootnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 border-t border-line pt-6 text-center text-xs leading-relaxed text-ink-soft">
      {children}
    </p>
  );
}

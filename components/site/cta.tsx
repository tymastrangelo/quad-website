import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";
import { StoreBadges } from "./store-badges";

export function Cta({ campus }: { campus: Campus }) {
  return (
    <section id="download" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl"
      />
      {/* the dot, as a watermark */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral opacity-[0.07]"
      />
      <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-44">
        <p className="eyebrow">{campus.cta.eyebrow}</p>
        <h2 className="font-display mt-5 text-[2.75rem] font-extrabold tracking-tight text-balance sm:text-5xl md:mt-6 md:text-7xl">
          Come on by<span className="text-coral">.</span>
        </h2>
        <p className="mt-5 max-w-md text-pretty text-ink-soft md:text-lg">
          {campus.cta.body}
        </p>
        <div className="mt-10">
          <StoreBadges />
        </div>
        <p className="mt-8 text-xs font-semibold tracking-[0.12em] text-ink-soft uppercase">
          {campus.cta.fine}
        </p>
      </Reveal>
    </section>
  );
}

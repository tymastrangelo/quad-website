import { PinMark } from "./pin-logo";
import { Reveal } from "./reveal";
import { StoreBadges } from "./store-badges";

export function Cta() {
  return (
    <section id="download" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(115,0,10,0.8),rgba(232,50,63,0.15),transparent)] blur-2xl"
      />
      <PinMark className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />
      <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center md:py-44">
        <p className="eyebrow">Free · iOS &amp; Android · @elon.edu</p>
        <h2 className="font-display mt-6 text-5xl font-bold tracking-tight text-balance md:text-7xl">
          The quad is waiting.
        </h2>
        <p className="mt-5 max-w-md text-pretty text-muted-foreground md:text-lg">
          Everything happening at Elon, in your pocket. Download Quad and
          never hear &ldquo;wait, that was tonight?&rdquo; again.
        </p>
        <div className="mt-10">
          <StoreBadges />
        </div>
        <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-paper/40 uppercase">
          Fall 2026 pilot · Your support decides what&apos;s next
        </p>
      </Reveal>
    </section>
  );
}

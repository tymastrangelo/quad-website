import { Reveal } from "./reveal";
import { StoreBadges } from "./store-badges";

export function Cta() {
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
      <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center md:py-44">
        <p className="eyebrow">Free · iOS &amp; Android · @elon.edu</p>
        <h2 className="font-display mt-6 text-5xl font-extrabold tracking-tight text-balance md:text-7xl">
          Come on by<span className="text-coral">.</span>
        </h2>
        <p className="mt-5 max-w-md text-pretty text-ink-soft md:text-lg">
          Everything happening at Elon, in your pocket. Get onby and never
          hear &ldquo;wait, that was tonight?&rdquo; again.
        </p>
        <div className="mt-10">
          <StoreBadges />
        </div>
        <p className="mt-8 text-xs font-semibold tracking-[0.12em] text-ink-soft uppercase">
          Spring 2027 · Elon University first
        </p>
      </Reveal>
    </section>
  );
}

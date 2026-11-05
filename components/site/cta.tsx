import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";
import { StoreBadges } from "./store-badges";

export function Cta({ campus }: { campus: Campus }) {
  return (
    <section id="download" className="scroll-mt-24 bg-surface">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Get onby<span className="text-coral">.</span>
          </h2>
          <p className="mt-3 text-lg text-ink-soft">{campus.cta.body}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <StoreBadges />
          <p className="text-sm text-ink-soft">{campus.cta.fine}</p>
        </div>
      </Reveal>
    </section>
  );
}

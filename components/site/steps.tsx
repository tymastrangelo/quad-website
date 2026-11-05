import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";

export function Steps({ campus }: { campus: Campus }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] md:text-5xl">Getting in</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <ol className="flex flex-col divide-y divide-line">
            {campus.steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-5 py-4 text-lg md:text-xl">
                <span className="numerals w-6 shrink-0 font-extrabold text-brand">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

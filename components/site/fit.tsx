import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";

/* The two ways onby fits a school: alongside its events system, or on its
   own. Any-campus page only. */
export function Fit({ fit }: { fit: NonNullable<Campus["fit"]> }) {
  return (
    <section id="fit" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-32">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] text-balance md:text-5xl">{fit.heading}</h2>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-10">
          <p className="text-lg leading-relaxed text-pretty text-ink md:text-xl">{fit.intro}</p>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
            {fit.modes.map((mode) => (
              <div key={mode.title} className="flex flex-col gap-3 border-t border-line pt-5">
                <h3 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">{mode.title}</h3>
                <p className="text-base leading-relaxed text-pretty text-ink-soft">{mode.body}</p>
              </div>
            ))}
          </div>
          <p className="max-w-xl rounded-2xl bg-brand-soft/70 px-5 py-4 text-base leading-relaxed text-ink">{fit.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

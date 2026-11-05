import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";

/* Questions and answers, all visible. Nothing to click. */
export function Faq({ campus }: { campus: Campus }) {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-32">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Questions</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="flex flex-col divide-y divide-line">
            {campus.faq.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-display text-lg font-extrabold tracking-tight md:text-xl">{item.q}</dt>
                <dd className="mt-2 text-base leading-relaxed text-ink-soft">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

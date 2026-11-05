import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/* What it does: three things, said plainly, then the rest as a list. */
export function Showcase({ campus }: { campus: Campus }) {
  return (
    <section id="app" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-32">
      <SectionHeading title="What it does" />
      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
        {campus.does.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="flex flex-col gap-3 border-t border-line pt-5">
              <h3 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">{item.title}</h3>
              <p className="text-base leading-relaxed text-pretty text-ink-soft">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1} className="mt-14 md:mt-20">
        <h3 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">Also</h3>
        <ul className="mt-5 grid gap-x-10 gap-y-3 text-base leading-relaxed text-ink-soft md:grid-cols-2">
          {campus.also.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

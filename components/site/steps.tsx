import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Steps({ campus }: { campus: Campus }) {
  const STEPS = [
    { number: "01", ...campus.steps.signIn },
    { number: "02", title: "Follow your orgs", body: campus.steps.follow },
    {
      number: "03",
      title: "Come on by",
      body: "Your feed fills with your campus. Save what you want to catch, get a nudge before it starts, and be where it's happening.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionHeading eyebrow="Getting in" title="Three steps to plugged in" />
      <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <div className="flex gap-4 md:flex-col md:gap-4 md:border-t md:border-line md:pt-6">
              <span className="numerals flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-extrabold text-brand md:size-auto md:bg-transparent">
                {step.number}
              </span>
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

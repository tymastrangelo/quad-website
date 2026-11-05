import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    number: "01",
    title: "Sign in with your @elon.edu",
    body: "onby is a closed campus community. Your school email is the only key, verified at the door and enforced on the server.",
  },
  {
    number: "02",
    title: "Follow your orgs",
    body: "Every org in onby is public, so follow anything that catches your eye. Each follow teaches your For You feed what matters.",
  },
  {
    number: "03",
    title: "Come on by",
    body: "Your feed fills with your campus. Save what you want to catch, get a nudge before it starts, and be where it's happening.",
  },
];

export function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading eyebrow="Getting in" title="Three steps to plugged in" />
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <div className="flex flex-col gap-4 border-t border-line pt-6">
              <span className="numerals text-sm font-extrabold text-cobalt">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

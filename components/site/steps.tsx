import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    number: "01",
    title: "Sign up with your @elon.edu",
    body: "Quad is a closed campus community. Your school email is the only key, verified at the door and enforced on the server.",
  },
  {
    number: "02",
    title: "Follow your clubs",
    body: "Every org on Quad is public, so follow anything that catches your eye. Each follow teaches your For You feed what matters.",
  },
  {
    number: "03",
    title: "Show up",
    body: "Your feed fills with your campus. Tap \"I'm going,\" get a reminder before it starts, and be where it's happening.",
  },
];

export function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Getting in"
        title="Three steps to plugged in"
      />
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <div className="flex flex-col gap-4 border-t border-white/15 pt-6">
              <span className="font-mono text-sm text-gold">{step.number}</span>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

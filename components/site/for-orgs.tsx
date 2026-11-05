import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";

export function ForOrgs({ campus }: { campus: Campus }) {
  const { orgs } = campus;
  return (
    <section id="orgs" className="scroll-mt-24 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_2fr] md:gap-16 md:py-32">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] md:text-5xl">{orgs.heading}</h2>
        </Reveal>
        <Reveal delay={0.08} className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed text-pretty text-ink md:text-xl">{orgs.body}</p>
          <p className="max-w-xl rounded-2xl bg-brand-soft/70 px-5 py-4 text-base leading-relaxed text-ink">{orgs.pilot}</p>
        </Reveal>
      </div>
    </section>
  );
}

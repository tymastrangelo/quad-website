import { Check } from "lucide-react";
import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";

function OrgPageMock({ campus }: { campus: Campus }) {
  const { mock } = campus.orgs;
  return (
    <div className="w-full max-w-sm rounded-[28px] border border-line bg-surface p-5 shadow-lift">
      <div className="flex items-center gap-3">
        <span className="font-display flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-sm font-extrabold text-brand">
          {mock.initials}
        </span>
        <div>
          <p className="font-semibold">{mock.name}</p>
          <p className="text-xs text-ink-soft">{mock.sub}</p>
        </div>
        <span className="ml-auto rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-white">
          Following
        </span>
      </div>

      <p className="mt-5 text-[11px] font-semibold tracking-[0.12em] text-ink-soft uppercase">
        Upcoming
      </p>

      <div className="mt-2 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
        <div>
          <p className="text-sm font-semibold">{mock.rows[0].title}</p>
          <p className="text-xs text-ink-soft">{mock.rows[0].meta}</p>
        </div>
        <span className="numerals rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
          {mock.rows[0].label}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
        <div>
          <p className="text-sm font-semibold">{mock.rows[1].title}</p>
          <p className="text-xs text-ink-soft">{mock.rows[1].meta}</p>
        </div>
        <span className="text-xs font-medium text-ink-soft">{mock.rows[1].label}</span>
      </div>

      <p className="mt-4 flex items-center gap-2 text-[11px] text-ink-soft">
        <span className="size-1.5 rounded-full bg-coral" />
        {mock.source}
      </p>
    </div>
  );
}

export function ForOrgs({ campus }: { campus: Campus }) {
  const { orgs } = campus;
  return (
    <section id="orgs" className="relative scroll-mt-24 overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(var(--dot-grid)_1px,transparent_1px)] bg-size-[26px_26px] opacity-60 [mask-image:radial-gradient(ellipse_70%_80%_at_80%_50%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-28 md:py-36 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow">For organizations</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            {orgs.heading}
          </h2>
          <p className="max-w-lg text-pretty text-ink-soft md:text-lg">{orgs.lead}</p>
          <ul className="mt-2 flex flex-col gap-3">
            {orgs.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm md:text-base">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3} />
                </span>
                <span className="text-ink/85">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 max-w-lg rounded-[22px] border border-brand/20 bg-brand-soft/60 p-5">
            <p className="eyebrow">{orgs.pilotEyebrow}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">{orgs.pilotBody}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <OrgPageMock campus={campus} />
        </Reveal>
      </div>
    </section>
  );
}

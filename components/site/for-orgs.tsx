import { Check } from "lucide-react";
import { Reveal } from "./reveal";

const BULLETS = [
  "Your events show up from PhoenixCONNECT. Nothing to post twice, nothing new to manage.",
  "Every event links back to your PhoenixCONNECT page to join, register or learn more.",
  "Students follow your org and get a reminder before the events they save.",
  "Want out? Ask, and your org is left out the same day.",
];

function OrgPageMock() {
  return (
    <div className="w-full max-w-sm rounded-[28px] border border-line bg-surface p-5 shadow-lift">
      <div className="flex items-center gap-3">
        <span className="font-display flex size-11 items-center justify-center rounded-2xl bg-cobalt-soft text-sm font-extrabold text-cobalt">
          CS
        </span>
        <div>
          <p className="font-semibold">Club Swimming</p>
          <p className="text-xs text-ink-soft">Elon University · Club sport</p>
        </div>
        <span className="ml-auto rounded-full bg-cobalt px-3.5 py-1.5 text-xs font-semibold text-white">
          Following
        </span>
      </div>

      <p className="mt-5 text-[11px] font-semibold tracking-[0.12em] text-ink-soft uppercase">
        Upcoming
      </p>

      <div className="mt-2 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
        <div>
          <p className="text-sm font-semibold">Open swim</p>
          <p className="text-xs text-ink-soft">Tonight 8:00 PM · Beck Pool</p>
        </div>
        <span className="numerals rounded-full bg-cobalt-soft px-2.5 py-1 text-[11px] font-bold text-cobalt">
          Saved
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-2xl bg-surface-2 p-4">
        <div>
          <p className="text-sm font-semibold">Practice</p>
          <p className="text-xs text-ink-soft">Mon 7:00 PM · Beck Pool</p>
        </div>
        <span className="text-xs font-medium text-ink-soft">Save</span>
      </div>

      <p className="mt-4 flex items-center gap-2 text-[11px] text-ink-soft">
        <span className="size-1.5 rounded-full bg-coral" />
        From PhoenixCONNECT · updated every 2 hours
      </p>
    </div>
  );
}

export function ForOrgs() {
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
            Nothing new to run
          </h2>
          <p className="max-w-lg text-pretty text-ink-soft md:text-lg">
            onby only does the finding. You keep posting events where you
            already do, and students who follow you see them in a feed built
            around them, with reminders before they start.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm md:text-base">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-soft text-cobalt">
                  <Check className="h-3 w-3" aria-hidden="true" strokeWidth={3} />
                </span>
                <span className="text-ink/85">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 max-w-lg rounded-[22px] border border-cobalt/20 bg-cobalt-soft/60 p-5">
            <p className="eyebrow">Spring 2027 pilot</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/85">
              onby starts at Elon with a set of approved organizations while
              its impact is measured through the spring. Everything else
              stays on PhoenixCONNECT, one tap away, and the feed can grow
              from there.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <OrgPageMock />
        </Reveal>
      </div>
    </section>
  );
}

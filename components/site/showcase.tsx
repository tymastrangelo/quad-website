import { BellRing, MapPin, Navigation } from "lucide-react";
import type { Campus } from "@/lib/campus";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/* Mini app-style vignettes: white cards on the warm canvas, the same
   surfaces the app uses, so the site reads like the product. */

const card =
  "rounded-2xl bg-surface p-4 shadow-lift ring-1 ring-black/5 dark:ring-white/10";

function ForYouVignette({ campus }: { campus: Campus }) {
  const [a, b] = campus.showcase.forYou;
  return (
    <div className="relative flex h-64 flex-col items-center justify-center overflow-hidden bg-surface-2/60">
      <div className="absolute h-48 w-48 rounded-full bg-brand/15 blur-3xl" />
      <div className={`relative z-10 w-64 -rotate-2 ${card}`}>
        <p className="text-[10px] font-bold tracking-[0.12em] text-brand uppercase">
          {a.label}
        </p>
        <p className="mt-1.5 text-sm font-semibold">{a.title}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
          <MapPin className="h-3 w-3" /> {a.meta}
        </p>
      </div>
      <div className={`relative -mt-2 w-64 translate-x-3 rotate-1 ${card} bg-surface-2 pt-5`}>
        <p className="text-[10px] font-bold tracking-[0.12em] text-brand uppercase">
          {b.label}
        </p>
        <p className="mt-1.5 text-sm font-semibold">{b.title}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
          <MapPin className="h-3 w-3" /> {b.meta}
        </p>
      </div>
    </div>
  );
}

function RemindersVignette({ campus }: { campus: Campus }) {
  const { live, digestCount } = campus.showcase;
  return (
    <div className="relative flex h-64 flex-col items-center justify-center gap-3 overflow-hidden bg-surface-2/60">
      <div className="absolute h-48 w-48 rounded-full bg-coral/15 blur-3xl" />
      <div className={`relative w-60 ${card} border border-coral/30`}>
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-coral" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
          </span>
          {live.label}
        </p>
        <p className="mt-2 text-sm font-semibold">{live.title}</p>
        <p className="mt-0.5 text-xs text-ink-soft">{live.meta}</p>
      </div>
      <div className={`relative flex w-60 items-center justify-between ${card}`}>
        <div>
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <BellRing className="size-3.5 text-brand" /> Today on campus
          </p>
          <p className="text-xs text-ink-soft">Your daily digest · 8:00 AM</p>
        </div>
        <span className="numerals rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-bold text-brand">
          {digestCount}
        </span>
      </div>
    </div>
  );
}

function MapVignette({ campus }: { campus: Campus }) {
  const { map } = campus.showcase;
  const pins = [
    { top: "22%", left: "30%", live: true },
    { top: "48%", left: "62%", live: false },
    { top: "66%", left: "38%", live: false },
  ];
  return (
    <div className="relative h-64 overflow-hidden bg-surface-2/60">
      <div className="absolute inset-0 bg-[linear-gradient(var(--dot-grid)_1px,transparent_1px),linear-gradient(90deg,var(--dot-grid)_1px,transparent_1px)] bg-size-[30px_30px]" />
      <div className="absolute h-full w-full bg-[radial-gradient(closest-side_at_40%_40%,var(--glow),transparent)]" />
      {pins.map((pin, i) => (
        <span
          key={i}
          className="absolute"
          style={{ top: pin.top, left: pin.left }}
        >
          {pin.live && (
            <span className="animate-ping-slow absolute inset-0 -m-1 rounded-full bg-coral/50" />
          )}
          <MapPin
            className={
              pin.live
                ? "relative h-6 w-6 fill-coral text-coral"
                : "relative h-5 w-5 fill-brand text-brand"
            }
          />
        </span>
      ))}
      <div className="absolute top-[16%] left-[38%] rounded-xl bg-surface px-3 py-2 shadow-lift ring-1 ring-black/5 dark:ring-white/10">
        <p className="text-xs font-semibold">{map.title}</p>
        <p className="flex items-center gap-1 text-[10px] text-ink-soft">
          <Navigation className="h-2.5 w-2.5" /> {map.meta}
        </p>
      </div>
    </div>
  );
}

const TITLES = [
  "A feed that knows your campus",
  "Save it, and we'll nudge you",
  "Pinned where it happens",
];

export function Showcase({ campus }: { campus: Campus }) {
  const vignettes = [
    <ForYouVignette key="for-you" campus={campus} />,
    <RemindersVignette key="reminders" campus={campus} />,
    <MapVignette key="map" campus={campus} />,
  ];
  return (
    <section id="app" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Inside the app"
        title="Never miss what matters"
        sub={campus.showcase.sub}
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {TITLES.map((title, i) => (
          <Reveal key={title} delay={i * 0.12}>
            <article className="group h-full overflow-hidden rounded-[28px] border border-line bg-surface shadow-soft transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand/40">
              {vignettes[i]}
              <div className="border-t border-line p-7">
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {campus.showcase.bodies[i]}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

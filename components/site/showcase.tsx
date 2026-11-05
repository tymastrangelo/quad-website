import { BellRing, MapPin, Navigation } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/* Mini app-style vignettes: white cards on the warm canvas, the same
   surfaces the app uses, so the site reads like the product. */

const card =
  "rounded-2xl bg-surface p-4 shadow-lift ring-1 ring-black/5 dark:ring-white/10";

function ForYouVignette() {
  return (
    <div className="relative flex h-64 flex-col items-center justify-center overflow-hidden bg-surface-2/60">
      <div className="absolute h-48 w-48 rounded-full bg-cobalt/15 blur-3xl" />
      <div className={`relative z-10 w-64 -rotate-2 ${card}`}>
        <p className="text-[10px] font-bold tracking-[0.12em] text-cobalt uppercase">
          For you · you follow Elon Society of Computing
        </p>
        <p className="mt-1.5 text-sm font-semibold">Hack night</p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
          <MapPin className="h-3 w-3" /> Innovation Hall · Tonight 7:00 PM
        </p>
      </div>
      <div className={`relative -mt-2 w-64 translate-x-3 rotate-1 ${card} bg-surface-2 pt-5`}>
        <p className="text-[10px] font-bold tracking-[0.12em] text-cobalt uppercase">
          Because you saved a run
        </p>
        <p className="mt-1.5 text-sm font-semibold">Club Triathlon brick workout</p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
          <MapPin className="h-3 w-3" /> Koury Center · Sat 9:00 AM
        </p>
      </div>
    </div>
  );
}

function RemindersVignette() {
  return (
    <div className="relative flex h-64 flex-col items-center justify-center gap-3 overflow-hidden bg-surface-2/60">
      <div className="absolute h-48 w-48 rounded-full bg-coral/15 blur-3xl" />
      <div className={`relative w-60 ${card} border border-coral/30`}>
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-coral" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
          </span>
          Starts in 1 hour
        </p>
        <p className="mt-2 text-sm font-semibold">Open mic night</p>
        <p className="mt-0.5 text-xs text-ink-soft">Oak House · you saved this</p>
      </div>
      <div className={`relative flex w-60 items-center justify-between ${card}`}>
        <div>
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <BellRing className="size-3.5 text-cobalt" /> Today on campus
          </p>
          <p className="text-xs text-ink-soft">Your daily digest · 8:00 AM</p>
        </div>
        <span className="numerals rounded-full bg-cobalt-soft px-2.5 py-1 text-[11px] font-bold text-cobalt">
          6 events
        </span>
      </div>
    </div>
  );
}

function MapVignette() {
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
                : "relative h-5 w-5 fill-cobalt text-cobalt"
            }
          />
        </span>
      ))}
      <div className="absolute top-[16%] left-[38%] rounded-xl bg-surface px-3 py-2 shadow-lift ring-1 ring-black/5 dark:ring-white/10">
        <p className="text-xs font-semibold">Open mic night</p>
        <p className="flex items-center gap-1 text-[10px] text-ink-soft">
          <Navigation className="h-2.5 w-2.5" /> Oak House · 4 min walk
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "A feed that knows your campus",
    body: "Follow your orgs and For You puts their events first, weighted by what you save and show up to. No engagement bait. Just what's on.",
    vignette: <ForYouVignette />,
  },
  {
    title: "Save it, and we'll nudge you",
    body: "Save an event and onby reminds you before it starts. Turn on the daily digest and get one quiet note each morning with what's happening today.",
    vignette: <RemindersVignette />,
  },
  {
    title: "Pinned where it happens",
    body: "Every event on a campus map, with what's near you highlighted and walking directions a tap away. Never wander Moseley looking for the room again.",
    vignette: <MapVignette />,
  },
];

export function Showcase() {
  return (
    <section id="app" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Inside the app"
        title="Never miss what matters"
        sub="Flyers, newsletters and six group chats, replaced by one place that knows what's going on."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.12}>
            <article className="group h-full overflow-hidden rounded-[28px] border border-line bg-surface shadow-soft transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-cobalt/40">
              {feature.vignette}
              <div className="border-t border-line p-7">
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {feature.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

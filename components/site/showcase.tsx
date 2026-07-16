import { MapPin, Navigation } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/* Mini app-style vignettes: light cards on the dark page, echoing the
   app's light UI, like the phone "glowing" out into the site. */

function ForYouVignette() {
  return (
    <div className="relative flex h-64 flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-48 w-48 rounded-full bg-maroon/40 blur-3xl" />
      <div className="relative z-10 w-64 -rotate-2 rounded-2xl bg-[#fdfaf7] p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-black/5">
        <p className="font-mono text-[9px] font-bold tracking-[0.14em] text-maroon uppercase">
          For you · You follow Elon Theatre
        </p>
        <p className="mt-1.5 text-sm font-semibold text-night">
          Fall Musical: Into the Woods
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-neutral-500">
          <MapPin className="h-3 w-3" /> McCrary Theatre · Fri 7:30 PM
        </p>
      </div>
      <div className="relative -mt-2 w-64 translate-x-3 rotate-1 rounded-2xl bg-[#f2eae2] p-4 pt-5 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)] ring-1 ring-black/5">
        <p className="font-mono text-[9px] font-bold tracking-[0.14em] text-maroon uppercase">
          Recommended
        </p>
        <p className="mt-1.5 text-sm font-semibold text-night">
          Women&apos;s Soccer vs. Towson
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-neutral-500">
          <MapPin className="h-3 w-3" /> Rudd Field · Sat 1:00 PM
        </p>
      </div>
    </div>
  );
}

function LiveVignette() {
  return (
    <div className="relative flex h-64 flex-col items-center justify-center gap-3 overflow-hidden">
      <div className="absolute h-48 w-48 rounded-full bg-pin/20 blur-3xl" />
      <div className="relative w-60 rounded-2xl border border-pin/40 bg-night/90 p-4 shadow-2xl">
        <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-pin uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-pin" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pin" />
          </span>
          Live now
        </p>
        <p className="mt-2 text-sm font-semibold">Open Mic Night</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Oak House · ends 9:00 PM
        </p>
      </div>
      <div className="relative flex w-60 items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
        <div>
          <p className="text-sm font-semibold">Trivia Night</p>
          <p className="text-xs text-muted-foreground">Moseley Center</p>
        </div>
        <span className="rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[10px] tracking-wider text-gold">
          IN 45 MIN
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
    <div className="relative h-64 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(246,239,233,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(246,239,233,0.06)_1px,transparent_1px)] bg-size-[30px_30px]" />
      <div className="absolute h-full w-full bg-[radial-gradient(closest-side_at_40%_40%,rgba(115,0,10,0.45),transparent)]" />
      {pins.map((pin, i) => (
        <span
          key={i}
          className="absolute"
          style={{ top: pin.top, left: pin.left }}
        >
          {pin.live && (
            <span className="animate-ping-slow absolute inset-0 -m-1 rounded-full bg-pin/60" />
          )}
          <MapPin
            className={
              pin.live
                ? "relative h-6 w-6 fill-pin text-pin"
                : "relative h-5 w-5 text-paper/60"
            }
          />
        </span>
      ))}
      <div className="absolute top-[16%] left-[38%] rounded-xl border border-white/10 bg-night/90 px-3 py-2 shadow-xl backdrop-blur-sm">
        <p className="text-xs font-semibold">Women&apos;s Soccer vs. Towson</p>
        <p className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Navigation className="h-2.5 w-2.5" /> Rudd Field · 4 min walk
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "A feed that knows your campus",
    body: "Follow your clubs and the For You engine surfaces what's worth your Friday night, weighted by what you save, join, and go to. No engagement bait, just Elon.",
    vignette: <ForYouVignette />,
  },
  {
    title: "Live, as it happens",
    body: "See what's happening right now, what starts in an hour, and what's coming this week. Say \"I'm going\" in one tap and Quad reminds you before it starts.",
    vignette: <LiveVignette />,
  },
  {
    title: "Pinned where it happens",
    body: "Events pinned across a live campus map, with what's near you highlighted and walking directions one tap away. Never wander Moseley looking for the room again.",
    vignette: <MapVignette />,
  },
];

export function Showcase() {
  return (
    <section id="app" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:py-36">
      <SectionHeading
        eyebrow="Inside the app"
        title="Never miss what matters"
        sub="Flyers, newsletters, and six different group chats, replaced by one place that actually knows what's going on."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.12}>
            <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-card transition-colors duration-300 hover:border-pin/40">
              {feature.vignette}
              <div className="border-t border-white/5 p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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

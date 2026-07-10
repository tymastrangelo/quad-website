import { Check } from "lucide-react";
import { Reveal } from "./reveal";

const BULLETS = [
  "Publish events and posts that reach every follower's feed",
  "Push notifications to your members, not another dead GroupMe announcement",
  "Going lists and member management in one place",
  "On PhoenixConnect? Submit your club in the app for approval",
];

function ClubDashboardMock() {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-night/60 p-5 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pin font-display text-sm font-bold text-white">
          CS
        </span>
        <div>
          <p className="font-semibold">Club Soccer</p>
          <p className="text-xs text-muted-foreground">
            Followers · Members · Events
          </p>
        </div>
        <span className="ml-auto rounded-full bg-white/8 px-3 py-1 text-xs text-paper/80">
          Admin
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 p-4">
        <div>
          <p className="text-sm font-semibold">Fall Tryouts</p>
          <p className="text-xs text-muted-foreground">Thu 6:00 PM · South Campus Fields</p>
        </div>
        <span className="rounded-full bg-pin/15 px-2.5 py-1 font-mono text-[10px] tracking-wider text-pin">
          24 GOING
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/4 p-4">
        <div>
          <p className="text-sm font-semibold">Announcement posted</p>
          <p className="text-xs text-muted-foreground">pushed to your followers</p>
        </div>
        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
          Sent
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <span className="rounded-full bg-pin py-2 text-center text-xs font-semibold text-white">
          New event
        </span>
        <span className="rounded-full border border-white/15 py-2 text-center text-xs font-medium text-paper/80">
          New post
        </span>
      </div>
    </div>
  );
}

export function ForClubs() {
  return (
    <section id="clubs" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-maroon-deep via-maroon/50 to-night" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(rgba(246,239,233,0.07)_1px,transparent_1px)] bg-size-[26px_26px] opacity-40"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-28 md:py-36 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5">
          <p className="eyebrow">For organizations</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Your club&apos;s megaphone
          </h2>
          <p className="max-w-lg text-pretty text-muted-foreground md:text-lg">
            Stop fighting for attention on six platforms. Every org on Quad
            gets a page, a feed, and a direct line to the students who chose
            to follow it.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm md:text-base">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-paper/85">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 max-w-lg rounded-2xl border border-gold/25 bg-gold/5 p-5">
            <p className="eyebrow">Fall 2026 pilot</p>
            <p className="mt-2 text-sm leading-relaxed text-paper/85">
              Quad launches with a preapproved lineup of organizations while
              Student Involvement measures its impact. Strong student support
              this fall gives Quad a real shot at welcoming every club in the
              spring.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <ClubDashboardMock />
        </Reveal>
      </div>
    </section>
  );
}

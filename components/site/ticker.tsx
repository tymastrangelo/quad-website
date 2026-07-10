import { PinMark } from "./pin-logo";

const HAPPENINGS = [
  "Women's Soccer vs. Towson @ Rudd Field",
  "Open Mic Night @ Oak House",
  "Fall Musical: Into the Woods @ McCrary Theatre",
  "Blood Drive @ Alumni Gym",
  "Club Soccer Tryouts",
  "Acoustic Jam on Young Commons",
  "Intramural Dodgeball Finals",
  "Therapy Dogs @ Moseley Center",
  "Farmers Market on the Quad",
  "Late Night Breakfast @ Lakeside",
];

function Row() {
  return (
    <>
      {HAPPENINGS.map((item) => (
        <span key={item} className="flex items-center gap-6">
          <span className="whitespace-nowrap">{item}</span>
          <PinMark className="h-3 w-3 shrink-0 opacity-70" />
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <section
      aria-label="Happening on campus"
      className="relative -mx-4 -rotate-[1.2deg] border-y border-white/10 bg-linear-to-r from-maroon-deep via-maroon/60 to-maroon-deep py-3.5"
    >
      <div className="flex overflow-hidden hover:[&>div]:[animation-play-state:paused]">
        <div className="animate-marquee flex w-max items-center gap-6 pr-6 font-mono text-xs tracking-[0.16em] text-paper/75 uppercase">
          <Row />
          <span aria-hidden="true" className="flex items-center gap-6">
            <Row />
          </span>
        </div>
      </div>
    </section>
  );
}

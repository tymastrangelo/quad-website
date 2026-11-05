import { Dot } from "./brand-mark";

/* Real orgs, plausible happenings. No counts, no claims. */
const HAPPENINGS = [
  "Hack night with Elon Society of Computing",
  "Open mic night at Oak House",
  "Club Swimming open swim at Beck Pool",
  "ElonRUNS sunrise run from Moseley",
  "Astronomy Club star party",
  "Elon Cooking Club dumpling night",
  "Phoenix Phanatics tailgate",
  "Yarn Arts stitch circle",
  "Italian Club film night",
  "Community Garden workday",
];

function Row() {
  return (
    <>
      {HAPPENINGS.map((item) => (
        <span key={item} className="flex items-center gap-6">
          <span className="whitespace-nowrap">{item}</span>
          <Dot className="size-1.5 shrink-0" />
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <section
      aria-label="Happening on campus"
      className="relative -mx-4 -rotate-[1.2deg] border-y border-cobalt/15 bg-cobalt-soft py-3.5"
    >
      <div className="flex overflow-hidden hover:[&>div]:[animation-play-state:paused]">
        <div className="animate-marquee flex w-max items-center gap-6 pr-6 text-xs font-semibold tracking-[0.12em] text-cobalt uppercase">
          <Row />
          <span aria-hidden="true" className="flex items-center gap-6">
            <Row />
          </span>
        </div>
      </div>
    </section>
  );
}

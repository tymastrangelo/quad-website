import type { Campus } from "@/lib/campus";
import { Dot } from "./brand-mark";

function Row({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-6">
          <span className="whitespace-nowrap">{item}</span>
          <Dot className="size-1.5 shrink-0" />
        </span>
      ))}
    </>
  );
}

export function Ticker({ campus }: { campus: Campus }) {
  return (
    <section
      aria-label="Happening on campus"
      className="relative -mx-4 -rotate-[1.2deg] border-y border-brand/15 bg-brand-soft py-3.5"
    >
      <div className="flex overflow-hidden hover:[&>div]:[animation-play-state:paused]">
        <div className="animate-marquee flex w-max items-center gap-6 pr-6 text-xs font-semibold tracking-[0.12em] text-brand uppercase">
          <Row items={campus.ticker} />
          <span aria-hidden="true" className="flex items-center gap-6">
            <Row items={campus.ticker} />
          </span>
        </div>
      </div>
    </section>
  );
}

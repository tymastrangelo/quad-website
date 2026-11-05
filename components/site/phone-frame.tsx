import { Bookmark, Compass, House, Search, Users } from "lucide-react";
import { cn } from "@/lib/utils";

/* Inside the Elon app the interactive tint is Elon's color, not onby
   cobalt (the app's rule: one tint, the school's). The mock keeps that
   honest. Swap MockHome for a real screenshot in public/ when one exists:
   drop a 1179×2556 PNG and render <Image fill /> here instead. */
const SCHOOL = "#73000A";

const EVENTS = [
  {
    when: "Tonight · 7:00 PM",
    org: "Elon Society of Computing",
    title: "Hack night",
    where: "Innovation Hall",
    saved: true,
  },
  {
    when: "Tonight · 8:00 PM",
    org: "Club Swimming",
    title: "Open swim",
    where: "Beck Pool, Koury Center",
    saved: false,
  },
  {
    when: "Tomorrow · 6:30 AM",
    org: "ElonRUNS",
    title: "Sunrise run",
    where: "Moseley Center steps",
    saved: true,
  },
  {
    when: "Thu · 5:00 PM",
    org: "Yarn Arts",
    title: "Stitch circle",
    where: "Moseley 215",
    saved: false,
  },
];

function MockHome() {
  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full flex-col bg-[#f6f4f0] text-[#1c1c1e] select-none"
      style={{ ["--school" as string]: SCHOOL }}
    >
      {/* status bar */}
      <div className="flex items-center justify-between px-7 pt-4 text-[13px] font-semibold">
        <span className="numerals">7:42</span>
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-4 rounded-[3px] border border-current p-px">
            <span className="block h-full w-3/4 rounded-[1px] bg-current" />
          </span>
        </span>
      </div>

      {/* large title */}
      <div className="px-5 pt-6">
        <p className="text-[11px] font-semibold tracking-[0.12em] text-[#5c5c63] uppercase">
          Thursday, February 4
        </p>
        <h2 className="font-display mt-1 text-[30px] leading-none font-extrabold tracking-tight">
          Good evening
        </h2>
        <p className="mt-2 text-[13px] text-[#5c5c63]">
          3 things from orgs you follow tonight.
        </p>
      </div>

      {/* segment */}
      <div className="mt-4 flex gap-2 px-5 text-[12px] font-semibold">
        <span className="rounded-full bg-(--school) px-3 py-1.5 text-white">For you</span>
        <span className="rounded-full bg-white px-3 py-1.5 text-[#5c5c63] ring-1 ring-black/5">
          Tonight
        </span>
        <span className="rounded-full bg-white px-3 py-1.5 text-[#5c5c63] ring-1 ring-black/5">
          This week
        </span>
      </div>

      {/* cards */}
      <div className="mt-4 flex flex-1 flex-col gap-2.5 px-4">
        {EVENTS.map((e) => (
          <div
            key={e.title}
            className="rounded-[18px] bg-white p-3.5 shadow-[0_1px_2px_rgba(28,28,30,0.04),0_8px_20px_-14px_rgba(28,28,30,0.2)]"
            style={{ borderCurve: "continuous" } as React.CSSProperties}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="numerals text-[11px] font-bold text-(--school)">
                  {e.when}
                </p>
                <p className="mt-1 truncate text-[15px] font-semibold leading-tight">
                  {e.title}
                </p>
                <p className="mt-0.5 truncate text-[11.5px] text-[#5c5c63]">
                  {e.org} · {e.where}
                </p>
              </div>
              <Bookmark
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  e.saved ? "fill-(--school) text-(--school)" : "text-[#c7c3bb]",
                )}
              />
            </div>
          </div>
        ))}
        <p className="mt-auto pb-2 text-center text-[10.5px] text-[#8e8e93]">
          Spring pilot. Everything else is on PhoenixCONNECT.
        </p>
      </div>

      {/* tab bar */}
      <div className="mx-3 mb-3 flex items-center justify-around rounded-full bg-white/85 px-2 py-2.5 text-[#8e8e93] shadow-[0_8px_30px_-12px_rgba(28,28,30,0.25)] ring-1 ring-black/5 backdrop-blur-xl">
        <House className="size-5 text-(--school)" />
        <Compass className="size-5" />
        <Users className="size-5" />
        <Bookmark className="size-5" />
        <span className="flex size-8 items-center justify-center rounded-full bg-[#f0ede7]">
          <Search className="size-4" />
        </span>
      </div>
    </div>
  );
}

export function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative w-[300px] select-none", className)}>
      <div className="rounded-[3.2rem] border border-[var(--phone-rim)] bg-[var(--phone-bezel)] p-[9px] shadow-[0_60px_140px_-30px_var(--glow),0_40px_80px_-40px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-1179/2556 overflow-hidden rounded-[2.6rem] bg-[#f6f4f0]">
          {children ?? <MockHome />}
          {/* dynamic island */}
          <div className="absolute top-2.5 left-1/2 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Campus } from "@/lib/campus";
import { cn } from "@/lib/utils";
import { OnbyWordmark } from "./brand-mark";

/* Phone widths only: once the hero's own button scrolls away, a small bar
   keeps the download one thumb away. It steps aside when the real download
   section is on screen, and respects the home indicator inset. */
export function StickyCta({ campus }: { campus: Campus }) {
  const [pastHero, setPastHero] = useState(false);
  const [atDownload, setAtDownload] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-hero-cta]");
    const download = document.getElementById("download");
    if (!hero || !download) return;
    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { threshold: 0 });
    const dlObs = new IntersectionObserver(([e]) => setAtDownload(e.isIntersecting), { threshold: 0.2 });
    heroObs.observe(hero);
    dlObs.observe(download);
    return () => {
      heroObs.disconnect();
      dlObs.disconnect();
    };
  }, []);

  const show = pastHero && !atDownload;

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 ease-out md:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-line bg-[var(--nav-glass)] py-2 pr-2 pl-5 shadow-lift backdrop-blur-xl">
        <div className="min-w-0">
          <OnbyWordmark />
          <p className="truncate text-[11px] font-semibold text-ink-soft">{campus.cta.fine}</p>
        </div>
        <Button
          asChild
          className="h-11 shrink-0 rounded-full bg-brand px-5 font-semibold text-white hover:bg-brand-deep enabled:active:scale-[0.96]"
        >
          <a href="#download" tabIndex={show ? 0 : -1}>
            <Download data-slot="icon" />
            Get the app
          </a>
        </Button>
      </div>
    </div>
  );
}

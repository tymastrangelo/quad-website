"use client";

import { useEffect, useState } from "react";

export function StoreBadges() {
  const [comingSoon, setComingSoon] = useState(false);

  useEffect(() => {
    if (!comingSoon) return;
    const timer = setTimeout(() => setComingSoon(false), 2400);
    return () => clearTimeout(timer);
  }, [comingSoon]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <a
        href="#"
        aria-label="Download on the App Store"
        className="rounded-lg transition-opacity hover:opacity-80"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/badge-app-store.svg"
          alt="Download on the App Store"
          className="h-13 w-auto"
        />
      </a>
      <span className="relative">
        {comingSoon && (
          <span
            role="status"
            className="animate-in fade-in slide-in-from-bottom-1 pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-night px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] whitespace-nowrap text-gold uppercase"
          >
            Coming soon
          </span>
        )}
        <button
          type="button"
          onClick={() => setComingSoon(true)}
          aria-label="Get it on Google Play, coming soon"
          className="cursor-pointer rounded-lg transition-opacity hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/badge-google-play.svg"
            alt="Get it on Google Play"
            className="h-13 w-auto"
          />
        </button>
      </span>
    </div>
  );
}

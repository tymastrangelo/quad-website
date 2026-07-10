"use client";

import { useEffect, useState } from "react";

/* Neither store listing is live yet, so both badges pop a
   "coming soon" bubble instead of linking out. */
function ComingSoonBadge({ src, alt }: { src: string; alt: string }) {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!pressed) return;
    const timer = setTimeout(() => setPressed(false), 2400);
    return () => clearTimeout(timer);
  }, [pressed]);

  return (
    <span className="relative">
      {pressed && (
        <span
          role="status"
          className="animate-in fade-in slide-in-from-bottom-1 pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-night px-4 py-1.5 font-mono text-[10px] tracking-[0.18em] whitespace-nowrap text-gold uppercase"
        >
          Coming soon
        </span>
      )}
      <button
        type="button"
        onClick={() => setPressed(true)}
        aria-label={`${alt}, coming soon`}
        className="cursor-pointer rounded-lg transition-opacity hover:opacity-80"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-13 w-auto" />
      </button>
    </span>
  );
}

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <ComingSoonBadge
        src="/badge-app-store.svg"
        alt="Download on the App Store"
      />
      <ComingSoonBadge
        src="/badge-google-play.svg"
        alt="Get it on Google Play"
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

/* Neither store listing is live yet, so both badges pop a
   "coming soon" bubble instead of linking out. When a listing goes
   live, swap that badge back to an <a> with the real URL. */
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
          className="animate-in fade-in slide-in-from-bottom-1 pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5 text-xs font-semibold whitespace-nowrap text-canvas shadow-soft"
        >
          Spring 2027
        </span>
      )}
      <button
        type="button"
        onClick={() => setPressed(true)}
        aria-label={`${alt}, coming spring 2027`}
        className="cursor-pointer rounded-lg transition-[opacity,transform] hover:opacity-85 enabled:active:scale-[0.96]"
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

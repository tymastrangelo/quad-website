"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { CAMPUSES, type Campus, type CampusKey } from "@/lib/campus";
import { cn } from "@/lib/utils";
import { OnbyWordmark } from "./brand-mark";

/* Icons: the onby app icon, and Elon's own mark (its site touch icon,
   assets/images/elon/). Elon's mark is a university trademark; the
   proposal says Elon logos appear only where Elon approves, so swap in a
   plain maroon dot if that approval is ever in doubt. */
const ITEMS: { key: CampusKey; label: string; sub: string; icon: string; alt: string }[] = [
  { key: "onby", label: "onby", sub: "For any campus", icon: "/onby-icon.png", alt: "" },
  { key: "elon", label: "onby for Elon", sub: "Elon University", icon: "/elon-mark.png", alt: "" },
];

/* The wordmark in the nav opens a small menu: the app for any campus, or
   onby for Elon. Hover opens it on a pointer, tap toggles it on touch,
   Escape and outside clicks close it. On the landing page picking a
   campus flips the page in place (onSelect); elsewhere it navigates. */
export function CampusMenu({
  campus,
  onSelect,
}: {
  campus: Campus;
  onSelect?: (key: CampusKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const hoverOpen = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 160);
  };

  return (
    <div
      ref={root}
      className="relative"
      onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen()}
      onPointerLeave={(e) => e.pointerType === "mouse" && hoverClose()}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex items-baseline gap-1.5 rounded-full py-1 pr-1 outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
      >
        <OnbyWordmark />
        {campus.navSuffix && (
          <span className="text-sm font-semibold text-brand">{campus.navSuffix}</span>
        )}
        <ChevronDown
          className={cn(
            "size-4 self-center text-ink-soft transition-transform duration-300",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label="Choose a campus"
        className={cn(
          "absolute top-full left-0 z-50 mt-3 w-64 origin-top-left rounded-[22px] border border-line bg-surface p-2 shadow-lift transition-[opacity,transform] duration-200 ease-out",
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-[0.98] opacity-0",
        )}
      >
        {ITEMS.map((item) => {
          const active = item.key === campus.key;
          return (
            <Link
              key={item.key}
              role="menuitemradio"
              aria-checked={active}
              href={CAMPUSES[item.key].path}
              tabIndex={open ? 0 : -1}
              onClick={
                onSelect
                  ? (e) => {
                      e.preventDefault();
                      onSelect(item.key);
                      setOpen(false);
                    }
                  : () => setOpen(false)
              }
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface-2",
                active && "bg-surface-2/70",
              )}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={32}
                height={32}
                className={cn(
                  "size-8 shrink-0 object-contain",
                  item.key === "onby" && "rounded-[9px] shadow-soft",
                )}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-ink">{item.label}</span>
                <span className="block text-xs text-ink-soft">{item.sub}</span>
              </span>
              {active && <Check className="size-4 text-brand" aria-hidden="true" />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* Phone-width navigation: one round button that opens a card under the
   nav with the section links and the download button. Closes on a link
   tap, outside tap or Escape. */
export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panelId = useId();

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

  return (
    <div ref={root} className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center rounded-full bg-surface-2 text-ink transition-colors hover:bg-line active:scale-[0.97]"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute inset-x-0 top-full mt-3 origin-top rounded-[22px] border border-line bg-surface p-2 shadow-lift transition-[opacity,transform] duration-200 ease-out",
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.98] opacity-0",
        )}
      >
        <nav aria-label="Sections" className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          asChild
          className="mt-2 h-12 w-full rounded-full bg-brand text-base font-semibold text-white hover:bg-brand-deep"
        >
          <a href="#download" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <Download data-slot="icon" />
            Get the app
          </a>
        </Button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

export type Screen = { key: string; src: string; alt: string };

/* The real app, no mock. Screenshots are 1206×2622 iPhone captures of
   the Home tab, resampled to 1179 wide in public/screens/. Every screen
   is mounted and the active one is shown, so switching campus crossfades
   instead of reloading. To update a capture, drop it in
   assets/images/onby/screens/ and run:
   sips --resampleWidth 1179 <src> --out public/screens/<name>.png */
export function PhoneFrame({
  screens,
  active,
  className,
  overlay,
}: {
  screens: Screen[];
  active: string;
  className?: string;
  /** Rendered over the screen, under the island (the hero dims it while the phone lies back). */
  overlay?: React.ReactNode;
}) {
  return (
    <div className={cn("relative w-[300px] select-none", className)} onContextMenu={(e) => e.preventDefault()} draggable={false}>
      <div className="rounded-[3.2rem] border border-[var(--phone-rim)] bg-[var(--phone-bezel)] p-[9px] shadow-[0_24px_48px_-16px_rgba(28,28,30,0.35),0_2px_6px_rgba(28,28,30,0.12)]">
        <div className="relative aspect-1206/2622 overflow-hidden rounded-[2.6rem] bg-black">
          {screens.map((screen) => (
            <Image
              key={screen.key}
              src={screen.src}
              alt={screen.key === active ? screen.alt : ""}
              fill
              sizes="(max-width: 768px) 290px, 340px"
              priority={screen.key === active}
              aria-hidden={screen.key !== active}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className={cn(
                "pointer-events-none object-cover transition-opacity duration-500 ease-out select-none",
                screen.key === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          {overlay}
          {/* dynamic island */}
          <div className="absolute top-2.5 left-1/2 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

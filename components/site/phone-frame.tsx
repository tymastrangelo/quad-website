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
}: {
  screens: Screen[];
  active: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-[300px] select-none", className)}>
      <div className="rounded-[3.2rem] border border-[var(--phone-rim)] bg-[var(--phone-bezel)] p-[9px] shadow-[0_60px_140px_-30px_var(--glow),0_40px_80px_-40px_rgba(0,0,0,0.45)]">
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
              className={cn(
                "object-cover transition-opacity duration-500 ease-out",
                screen.key === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          {/* dynamic island */}
          <div className="absolute top-2.5 left-1/2 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

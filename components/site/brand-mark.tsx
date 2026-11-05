import { cn } from "@/lib/utils";

/* The coral dot is the one brand glyph: the live dot in the onby mark,
   the period on the wordmark, the separator in the ticker, the live
   indicator in the app. Nothing else gets invented. */
export function Dot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-2 rounded-full bg-coral", className)}
    />
  );
}

export function OnbyWordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-baseline leading-none font-extrabold tracking-tight text-ink",
        size === "md" ? "text-[1.35rem]" : "text-[2rem]",
        className,
      )}
    >
      onby
      <span className="text-coral">.</span>
    </span>
  );
}

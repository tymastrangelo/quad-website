import { cn } from "@/lib/utils";

export function PinMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      <path
        d="M12 1.8c-4.6 0-8.3 3.6-8.3 8 0 6 8.3 12.4 8.3 12.4s8.3-6.4 8.3-12.4c0-4.4-3.7-8-8.3-8Z"
        fill="var(--pin)"
      />
      <circle cx="12" cy="9.6" r="3.1" fill="var(--night)" />
    </svg>
  );
}

export function QuadWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-1.5", className)}>
      <PinMark />
      <span className="font-display text-lg font-bold tracking-[0.04em] uppercase">
        Quad
      </span>
    </span>
  );
}

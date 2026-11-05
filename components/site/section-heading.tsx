import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/* Left-aligned, sentence case, no label above it. */
export function SectionHeading({
  title,
  sub,
  className,
}: {
  title: React.ReactNode;
  sub?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("flex max-w-2xl flex-col gap-3", className)}>
      <h2 className="font-display text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] text-balance md:text-5xl">{title}</h2>
      {sub && <p className="text-base text-pretty text-ink-soft md:text-lg">{sub}</p>}
    </Reveal>
  );
}

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  className,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="max-w-xl text-base text-pretty text-muted-foreground md:text-lg">
          {sub}
        </p>
      )}
    </Reveal>
  );
}

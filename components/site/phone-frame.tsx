import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-[300px] select-none", className)}>
      <div className="rounded-[3.2rem] border border-white/15 bg-[#17171a] p-[9px] shadow-[0_60px_140px_-30px_rgba(232,50,63,0.4),0_40px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="relative aspect-1179/2556 overflow-hidden rounded-[2.6rem] bg-white">
          <Image
            src="/quad-screenshot.png"
            alt="The Quad app Explore screen: a personalized list of upcoming Elon events, recommendations, and your clubs"
            fill
            sizes="(max-width: 768px) 280px, 340px"
            className="object-cover"
            priority={priority}
          />
          {/* dynamic island */}
          <div className="absolute top-2.5 left-1/2 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

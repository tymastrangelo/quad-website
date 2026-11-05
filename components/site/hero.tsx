"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { Button } from "@/components/ui/button";
import { CAMPUSES, type Campus } from "@/lib/campus";
import { PhoneFrame } from "./phone-frame";

/* Same props on the server and the client; MotionProvider handles reduced
   motion, so these never cause a hydration mismatch. One staged entrance:
   headline, lead, button, then the phone, 100ms apart. */
function enter(delay: number) {
  return {
    initial: { opacity: 0, y: 12, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.3, delay, ease: "easeOut" as const },
  };
}

const SCREENS = Object.values(CAMPUSES).map((c) => ({ key: c.key, src: c.screenshot, alt: c.screenshotAlt }));
const SPRING = { stiffness: 120, damping: 24, mass: 0.6 };

/* The headline on the left, the real app on the right, both on screen at
   once. The phone tilts a few degrees toward the cursor; that is the only
   flourish, and it is off under reduced motion. */
export function Hero({ campus }: { campus: Campus }) {
  const off = useReducedMotion() ?? false;
  const area = useRef<HTMLDivElement>(null);
  const tiltX = useSpring(useMotionValue(0), SPRING);
  const tiltY = useSpring(useMotionValue(0), SPRING);
  const shiftX = useSpring(useMotionValue(0), SPRING);

  // Follows the cursor across the phone's column: up to 18° of turn and 24px of travel.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (off || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltY.set(px * 36);
    tiltX.set(-py * 10);
    shiftX.set(px * 48);
  };
  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    shiftX.set(0);
  };

  return (
    <section data-hero className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-28 pb-8 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pt-32 md:pb-20">
        <div className="flex max-w-xl flex-col items-start text-left">
          <motion.p {...enter(0)} className="text-sm font-medium text-ink-soft">
            {campus.where}
          </motion.p>
          <motion.h1
            {...enter(0.1)}
            className="font-display mt-4 text-[2.75rem] leading-[1.05] font-extrabold tracking-[-0.02em] text-balance sm:text-6xl md:text-[4.75rem]"
          >
            Everything happening on campus<span className="text-coral">.</span>
          </motion.h1>
          <motion.p
            {...enter(0.2)}
            className="font-display mt-3 text-2xl font-extrabold tracking-[-0.01em] text-brand md:text-3xl"
          >
            Come on by.
          </motion.p>
          <motion.p {...enter(0.3)} className="mt-5 max-w-md text-base leading-relaxed text-pretty text-ink-soft sm:text-lg">
            {campus.lead}
          </motion.p>
          <motion.div {...enter(0.4)} data-hero-cta className="mt-8 flex w-full flex-col items-start sm:w-auto">
            <Button
              asChild
              size="lg"
              className="h-13 w-full rounded-full bg-brand px-8 text-base font-semibold text-white transition-[background-color,scale] duration-150 ease-out hover:bg-brand-deep enabled:active:scale-[0.96] sm:h-12 sm:w-auto"
            >
              <a href="#download">Get the app</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.5)}
          ref={area}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="flex justify-center md:justify-end"
          style={{ perspective: 1200 }}
        >
          <motion.div style={{ rotateX: tiltX, rotateY: tiltY, x: shiftX, transformStyle: "preserve-3d" }}>
            <PhoneFrame screens={SCREENS} active={campus.key} className="w-[min(76vw,300px)] md:w-[340px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

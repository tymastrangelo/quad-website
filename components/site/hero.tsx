"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { CAMPUSES, type Campus } from "@/lib/campus";
import { PhoneFrame } from "./phone-frame";

/* Same props on the server and the client; MotionProvider handles reduced
   motion, so these never cause a hydration mismatch. */
function enterProps(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  };
}

const SCREENS = Object.values(CAMPUSES).map((c) => ({ key: c.key, src: c.screenshot, alt: c.screenshotAlt }));
const SPRING = { stiffness: 120, damping: 24, mass: 0.6 };

/* The headline, one button, and the real app. The phone lies back as it
   enters, stands up on a spring as you scroll, and tilts a little toward
   the cursor once it is up. That is the only flourish. */
export function Hero({ campus }: { campus: Campus }) {
  const phoneArea = useRef<HTMLDivElement>(null);
  const off = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({ target: phoneArea, offset: ["start 0.95", "start 0.22"] });
  const progress = useSpring(scrollYProgress, SPRING);
  const rotateX = useTransform(progress, [0, 1], [off ? 0 : 52, 0]);
  const scale = useTransform(progress, [0, 1], [off ? 1 : 0.86, 1]);
  const rise = useTransform(progress, [0, 1], [off ? 0 : 72, 0]);
  const dim = useTransform(progress, [0, 0.85], [off ? 0 : 0.45, 0]);

  const tiltX = useSpring(useMotionValue(0), SPRING);
  const tiltY = useSpring(useMotionValue(0), SPRING);
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (off || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    tiltX.set(-((e.clientY - r.top) / r.height - 0.5) * 6);
  };
  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section data-hero className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-40">
        <motion.p {...enterProps(0)} className="text-sm font-medium text-ink-soft">
          {campus.where}
        </motion.p>

        <motion.h1
          {...enterProps(0.06)}
          className="font-display mt-4 max-w-4xl text-[2.75rem] leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl md:text-[5.25rem]"
        >
          Everything happening on campus<span className="text-coral">.</span>
        </motion.h1>

        <motion.p
          {...enterProps(0.12)}
          className="font-display mt-3 text-2xl font-extrabold tracking-tight text-brand md:text-3xl"
        >
          Come on by.
        </motion.p>

        <motion.p {...enterProps(0.18)} className="mt-5 max-w-lg text-base text-pretty text-ink-soft sm:text-lg md:text-xl">
          {campus.lead}
        </motion.p>

        <motion.div
          {...enterProps(0.24)}
          data-hero-cta
          className="mt-7 flex w-full flex-col items-center gap-2 sm:w-auto md:mt-9"
        >
          <Button
            asChild
            size="lg"
            className="h-13 w-full rounded-full bg-brand px-8 text-base font-semibold text-white transition-transform hover:bg-brand-deep active:scale-[0.97] sm:h-12 sm:w-auto"
          >
            <a href="#download">Get the app</a>
          </Button>
          <p className="text-xs text-ink-soft sm:text-sm">{campus.signIn}</p>
        </motion.div>

        <div
          ref={phoneArea}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="relative mt-12 flex w-full justify-center pb-6 md:mt-20 md:pb-10"
          style={{ perspective: 1300 }}
        >
          <motion.div style={{ rotateX, scale, y: rise, transformOrigin: "top center" }}>
            <motion.div style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}>
              <PhoneFrame
                screens={SCREENS}
                active={campus.key}
                className="w-[min(80vw,300px)] md:w-[340px]"
                overlay={
                  <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

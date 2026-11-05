"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAMPUSES, type Campus } from "@/lib/campus";
import { PhoneFrame } from "./phone-frame";

/* Same props on the server and the client; MotionProvider handles
   reduced motion, so these never cause a hydration mismatch. */
function enterProps(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  };
}

const SCREENS = Object.values(CAMPUSES).map((c) => ({
  key: c.key,
  src: c.screenshot,
  alt: c.screenshotAlt,
}));

const SPRING = { stiffness: 120, damping: 24, mass: 0.6 };

/* The hero's one moment, in four beats tied to scroll:
   1. the headline eases back and fades as you leave it;
   2. the phone lies back in perspective, then rises and stands up;
   3. its screen is dim while it lies back and wakes as it stands;
   4. the notifications arrive from the sides once the phone is up.
   After that, the standing phone tilts a few degrees toward the cursor.
   Reduced motion: everything sits at its final state. */
export function Hero({ campus }: { campus: Campus }) {
  const section = useRef<HTMLElement>(null);
  const phoneArea = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const off = reduceMotion;

  // 1. headline hand off
  const { scrollYProgress: leave } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });
  const headY = useTransform(leave, [0, 0.5], [0, off ? 0 : -72]);
  const headOpacity = useTransform(leave, [0, 0.45], [1, off ? 1 : 0.35]);

  // 2. the lift, smoothed with a spring so it settles rather than stops
  const { scrollYProgress } = useScroll({
    target: phoneArea,
    offset: ["start 0.95", "start 0.22"],
  });
  const progress = useSpring(scrollYProgress, SPRING);
  const rotateX = useTransform(progress, [0, 1], [off ? 0 : 58, 0]);
  const scale = useTransform(progress, [0, 1], [off ? 1 : 0.84, 1]);
  const rise = useTransform(progress, [0, 1], [off ? 0 : 96, 0]);

  // 3. screen wakes, glow comes up under it
  const dim = useTransform(progress, [0, 0.85], [off ? 0 : 0.55, 0]);
  const glow = useTransform(progress, [0, 1], [off ? 1 : 0.1, 1]);

  // 4. notifications arrive after the phone is mostly up
  const cardIn = useTransform(progress, [0.5, 0.9], [off ? 1 : 0, 1]);
  const fromLeft = useTransform(progress, [0.5, 1], [off ? 0 : -56, 0]);
  const fromRight = useTransform(progress, [0.5, 1], [off ? 0 : 56, 0]);
  const drift = useTransform(progress, [0, 1], [off ? 0 : 70, 0]);
  const driftSlow = useTransform(progress, [0, 1], [off ? 0 : 36, 0]);

  // hover tilt toward the cursor
  const tiltX = useSpring(useMotionValue(0), SPRING);
  const tiltY = useSpring(useMotionValue(0), SPRING);
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (off || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    tiltY.set(px * 12);
    tiltX.set(-py * 8);
  };
  const onPointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const { next, live, saved } = campus.cards;

  return (
    <section ref={section} className="relative overflow-hidden">
      {/* map-dot atmosphere */}
      <div
        aria-hidden
        className="hero-dots absolute inset-0 bg-[radial-gradient(var(--dot-grid)_1px,transparent_1px)] bg-size-[26px_26px] mask-radial-from-5% mask-radial-to-70% mask-radial-at-top"
      />
      {/* the dot's ripple: concentric rings radiating from where the
          phone stands, like a ping across the campus */}
      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="absolute inset-x-0 bottom-0 h-[85%] bg-[repeating-radial-gradient(circle_at_50%_100%,var(--glow)_0px,var(--glow)_1px,transparent_1px,transparent_110px)] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_100%,black,transparent_78%)]"
      />
      {/* low horizon glow grounding the phone */}
      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_55%_75%_at_50%_100%,var(--glow),transparent_70%)]"
      />
      {/* settle back to the canvas before the ticker */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-canvas to-transparent"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-36 text-center md:pt-44">
        <motion.div
          style={{ y: headY, opacity: headOpacity }}
          className="flex flex-col items-center"
        >
          <motion.p {...enterProps(0)} className="eyebrow flex items-center gap-2">
            {campus.eyebrow}
          </motion.p>

          <motion.h1
            {...enterProps(0.08)}
            className="font-display mt-6 max-w-4xl text-[2.9rem] leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl md:text-[5.5rem]"
          >
            Everything happening on{" "}
            <span className="whitespace-nowrap">
              campus
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: "-0.5em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  type: "spring",
                  stiffness: 420,
                  damping: 17,
                }}
              >
                <span className="text-coral">.</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            {...enterProps(0.14)}
            className="font-display mt-4 text-2xl font-extrabold tracking-tight text-brand md:text-3xl"
          >
            Come on by.
          </motion.p>

          <motion.p
            {...enterProps(0.2)}
            className="mt-5 max-w-xl text-lg text-pretty text-ink-soft md:text-xl"
          >
            {campus.lead}
          </motion.p>

          <motion.div
            {...enterProps(0.26)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-brand px-7 text-base font-semibold text-white transition-transform hover:bg-brand-deep active:scale-[0.97]"
            >
              <a href="#download">Get the app</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-line bg-surface px-7 text-base font-medium text-ink shadow-soft transition-transform hover:bg-surface-2 hover:text-ink active:scale-[0.97]"
            >
              <a href="#app">
                See what&apos;s inside
                <ArrowRight data-slot="icon" />
              </a>
            </Button>
          </motion.div>

          <motion.p {...enterProps(0.32)} className="mt-5 text-sm text-ink-soft">
            {campus.signIn}
          </motion.p>
        </motion.div>

        {/* ── the phone lift ── */}
        <div
          ref={phoneArea}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="relative mt-16 flex w-full justify-center pb-10 md:mt-20"
          style={{ perspective: 1300 }}
        >
          <motion.div
            style={{ rotateX, scale, y: rise, transformOrigin: "top center" }}
          >
            <motion.div
              style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
            >
              <PhoneFrame
                screens={SCREENS}
                active={campus.key}
                className="w-[290px] md:w-[340px]"
                overlay={
                  <motion.div
                    aria-hidden
                    style={{ opacity: dim }}
                    className="pointer-events-none absolute inset-0 bg-black"
                  />
                }
              />
            </motion.div>
          </motion.div>

          {/* floating notifications, hidden on small screens */}
          <motion.div
            style={{ y: drift, x: fromLeft, opacity: cardIn }}
            className="absolute top-16 left-1/2 hidden -ml-[27rem] lg:block"
          >
            <div
              className="animate-float w-64 rounded-2xl border border-line bg-[var(--glass)] p-4 text-left shadow-lift backdrop-blur-md"
              style={{ animationDuration: "7s" }}
            >
              <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand uppercase">
                {next.label}
              </p>
              <p className="mt-2 text-sm font-semibold">{next.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{next.meta}</p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: driftSlow, x: fromRight, opacity: cardIn }}
            className="absolute top-40 left-1/2 hidden ml-[13rem] lg:block"
          >
            <div
              className="animate-float w-56 rounded-2xl border border-coral/40 bg-[var(--glass)] p-4 text-left shadow-lift backdrop-blur-md"
              style={{ animationDuration: "9s", animationDelay: "1.2s" }}
            >
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-coral uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-coral" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                </span>
                {live.label}
              </p>
              <p className="mt-2 text-sm font-semibold">{live.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{live.meta}</p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: drift, x: fromLeft, opacity: cardIn }}
            className="absolute bottom-56 left-1/2 hidden -ml-[26rem] lg:block"
          >
            <div
              className="animate-float w-60 rounded-2xl border border-line bg-[var(--glass)] p-4 text-left shadow-lift backdrop-blur-md"
              style={{ animationDuration: "8s", animationDelay: "0.6s" }}
            >
              <p className="text-sm font-semibold">{saved.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{saved.meta}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                <Bookmark className="size-3 fill-current" /> {saved.label}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

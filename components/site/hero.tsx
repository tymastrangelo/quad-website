"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function Hero() {
  const phoneArea = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  // The phone lift: lying back in 3D perspective when it enters, standing
  // upright as it approaches the upper quarter of the viewport.
  const { scrollYProgress } = useScroll({
    target: phoneArea,
    offset: ["start end", "start 0.22"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 26,
    mass: 0.5,
  });
  const rotateX = useTransform(progress, [0, 1], [reduceMotion ? 0 : 54, 0]);
  const scale = useTransform(progress, [0, 1], [reduceMotion ? 1 : 0.88, 1]);
  const cardDrift = useTransform(progress, [0, 1], [reduceMotion ? 0 : 90, 0]);
  const cardDriftSlow = useTransform(
    progress,
    [0, 1],
    [reduceMotion ? 0 : 50, 0],
  );

  return (
    <section className="relative overflow-hidden">
      {/* map-dot atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(var(--dot-grid)_1px,transparent_1px)] bg-size-[26px_26px] mask-radial-from-5% mask-radial-to-70% mask-radial-at-top"
      />
      {/* the dot's ripple: concentric cobalt rings radiating from where the
          phone stands, like a ping across the campus */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[85%] bg-[repeating-radial-gradient(circle_at_50%_100%,var(--glow)_0px,var(--glow)_1px,transparent_1px,transparent_110px)] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_100%,black,transparent_78%)]"
      />
      {/* low cobalt horizon grounding the phone */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_55%_75%_at_50%_100%,var(--glow),transparent_70%)]"
      />
      {/* settle back to the canvas before the ticker */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-canvas to-transparent"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-36 text-center md:pt-44">
        <motion.p
          {...enterProps(0)}
          className="eyebrow flex items-center gap-2"
        >
          Elon University · Spring 2027
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
          className="font-display mt-4 text-2xl font-extrabold tracking-tight text-cobalt md:text-3xl"
        >
          Come on by.
        </motion.p>

        <motion.p
          {...enterProps(0.2)}
          className="mt-5 max-w-xl text-lg text-pretty text-ink-soft md:text-xl"
        >
          Your orgs&apos; events in one feed built around you. Save what you
          want to catch, get a nudge before it starts, and stop hearing
          &ldquo;wait, that was tonight?&rdquo;
        </motion.p>

        <motion.div
          {...enterProps(0.26)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-cobalt px-7 text-base font-semibold text-white transition-transform hover:bg-cobalt-deep active:scale-[0.97]"
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

        <motion.p
          {...enterProps(0.32)}
          className="mt-5 text-sm text-ink-soft"
        >
          Free for Elon students. Sign in with your @elon.edu email.
        </motion.p>

        {/* ── the phone lift ── */}
        <div
          ref={phoneArea}
          className="relative mt-16 flex w-full justify-center pb-10 md:mt-20"
          style={{ perspective: 1300 }}
        >
          <motion.div style={{ rotateX, scale, transformOrigin: "top center" }}>
            <PhoneFrame className="w-[290px] md:w-[340px]" />
          </motion.div>

          {/* floating notifications, hidden on small screens */}
          <motion.div
            style={{ y: cardDrift }}
            className="absolute top-16 left-1/2 hidden -ml-[27rem] lg:block"
          >
            <div
              className="animate-float w-64 rounded-2xl border border-line bg-[var(--glass)] p-4 text-left shadow-lift backdrop-blur-md"
              style={{ animationDuration: "7s" }}
            >
              <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-cobalt uppercase">
                onby · in 1 hour
              </p>
              <p className="mt-2 text-sm font-semibold">Hack night</p>
              <p className="mt-0.5 text-xs text-ink-soft">
                Elon Society of Computing · Innovation Hall
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardDriftSlow }}
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
                Live now
              </p>
              <p className="mt-2 text-sm font-semibold">Open mic night</p>
              <p className="mt-0.5 text-xs text-ink-soft">
                Oak House · ends 9:00 PM
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardDrift }}
            className="absolute bottom-56 left-1/2 hidden ml-[15rem] lg:block"
          >
            <div
              className="animate-float w-60 rounded-2xl border border-line bg-[var(--glass)] p-4 text-left shadow-lift backdrop-blur-md"
              style={{ animationDuration: "8s", animationDelay: "0.6s" }}
            >
              <p className="text-sm font-semibold">Sunrise run</p>
              <p className="mt-0.5 text-xs text-ink-soft">
                ElonRUNS · Tomorrow 6:30 AM
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cobalt-soft px-3 py-1 text-xs font-semibold text-cobalt">
                <Bookmark className="size-3 fill-current" /> Saved · reminder set
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

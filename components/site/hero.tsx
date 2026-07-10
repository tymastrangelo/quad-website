"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneFrame } from "./phone-frame";
import { PinMark } from "./pin-logo";

function enterProps(reduceMotion: boolean, delay: number) {
  return reduceMotion
    ? {}
    : {
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
        className="absolute inset-0 bg-[radial-gradient(rgba(246,239,233,0.09)_1px,transparent_1px)] bg-size-[26px_26px] mask-radial-from-5% mask-radial-to-70% mask-radial-at-top"
      />
      {/* maroon glow rising behind the phone */}
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(115,0,10,0.75),rgba(232,50,63,0.12),transparent)] blur-2xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-36 text-center md:pt-44">
        <motion.p
          {...enterProps(reduceMotion, 0)}
          className="eyebrow flex items-center gap-2"
        >
          <PinMark className="h-3.5 w-3.5" />
          36.1036° N · 79.5043° W · Elon University
        </motion.p>

        <motion.h1
          {...enterProps(reduceMotion, 0.08)}
          className="font-display mt-6 max-w-4xl text-6xl font-bold tracking-tight text-balance md:text-8xl"
        >
          Campus happens <span className="text-pin">here.</span>
        </motion.h1>

        <motion.p
          {...enterProps(reduceMotion, 0.16)}
          className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground md:text-xl"
        >
          Quad is the home for everything happening at Elon: every event,
          every club, one feed built around you.
        </motion.p>

        <motion.div
          {...enterProps(reduceMotion, 0.24)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-pin px-7 text-base font-medium text-white hover:bg-pin/90"
          >
            <a href="#download">Get the app</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-white/20 bg-transparent px-7 text-base text-paper hover:bg-white/5 hover:text-paper"
          >
            <a href="#app">
              See what&apos;s inside
              <ArrowRight data-slot="icon" />
            </a>
          </Button>
        </motion.div>

        <motion.p
          {...enterProps(reduceMotion, 0.32)}
          className="mt-5 font-mono text-[11px] tracking-[0.18em] text-paper/40 uppercase"
        >
          Free for students · @elon.edu required
        </motion.p>

        {/* ── the phone lift ── */}
        <div
          ref={phoneArea}
          className="relative mt-16 flex w-full justify-center pb-10 md:mt-20"
          style={{ perspective: 1300 }}
        >
          <motion.div style={{ rotateX, scale, transformOrigin: "top center" }}>
            <PhoneFrame priority className="w-[290px] md:w-[340px]" />
          </motion.div>

          {/* floating notifications, hidden on small screens */}
          <motion.div
            style={{ y: cardDrift }}
            className="absolute top-16 left-1/2 hidden -ml-[27rem] lg:block"
          >
            <div
              className="animate-float w-64 rounded-2xl border border-white/10 bg-white/6 p-4 text-left shadow-2xl backdrop-blur-md"
              style={{ animationDuration: "7s" }}
            >
              <p className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-gold uppercase">
                <PinMark className="h-3 w-3" /> Quad · now
              </p>
              <p className="mt-2 text-sm font-semibold">
                Women&apos;s Soccer vs. Towson
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Starts in 1 hour · Rudd Field
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardDriftSlow }}
            className="absolute top-40 left-1/2 hidden ml-[13rem] lg:block"
          >
            <div
              className="animate-float w-56 rounded-2xl border border-pin/30 bg-night/80 p-4 text-left shadow-2xl backdrop-blur-md"
              style={{ animationDuration: "9s", animationDelay: "1.2s" }}
            >
              <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-pin uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-pin" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pin" />
                </span>
                Live now
              </p>
              <p className="mt-2 text-sm font-semibold">Open Mic Night</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Oak House · ends 9:00 PM
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardDrift }}
            className="absolute bottom-56 left-1/2 hidden ml-[15rem] lg:block"
          >
            <div
              className="animate-float w-60 rounded-2xl border border-white/10 bg-white/6 p-4 text-left shadow-2xl backdrop-blur-md"
              style={{ animationDuration: "8s", animationDelay: "0.6s" }}
            >
              <p className="text-sm font-semibold">
                Fall Musical: Into the Woods
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                McCrary Theatre · Fri 7:30 PM
              </p>
              <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-pin px-3 py-1 text-xs font-semibold text-white">
                I&apos;m going ✓
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { MotionConfig } from "motion/react";

/* One place for reduced motion. Motion keeps the markup identical on the
   server and the client and, when the user prefers reduced motion, skips
   transform animations while still settling opacity, so nothing is ever
   left invisible at its starting state. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

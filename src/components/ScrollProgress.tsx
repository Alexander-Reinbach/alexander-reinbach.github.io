"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Spring smoothing → no jitter, feels like a physical bar.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.4,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="pointer-events-none fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
    />
  );
}

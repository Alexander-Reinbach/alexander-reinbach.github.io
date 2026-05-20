"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientBackground() {
  const { scrollY } = useScroll();
  // Parallax depth — blobs drift at different speeds, creating real depth
  // as the user scrolls. Closer blob moves faster, distant ones drift slower.
  const y1 = useTransform(scrollY, [0, 2000], [0, 240]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 380]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 520]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-grid animate-grid-pulse" />
      <motion.div
        style={{
          y: y1,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(99,102,241,0.15) 40%, transparent 70%)",
        }}
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{
          y: y2,
          animationDelay: "5s",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(16,185,129,0.15) 40%, transparent 70%)",
        }}
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl animate-float-slow"
      />
      <motion.div
        style={{
          y: y3,
          animationDelay: "10s",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)",
        }}
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl animate-float-slow"
      />
      <div className="absolute inset-0 bg-noise opacity-[0.3] mix-blend-overlay" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(2,6,23,0.6) 70%, rgba(2,6,23,1) 100%)",
        }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 480], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 480], [1, 0.94]);
  const heroBlurPx = useTransform(scrollY, [0, 480], [0, 6]);
  const heroFilter = useMotionTemplate`blur(${heroBlurPx}px)`;

  return (
    <motion.section
      id="top"
      style={{ opacity: heroOpacity, scale: heroScale, filter: heroFilter }}
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={fadeInUp}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <Sparkles className="h-3 w-3 text-cyan-300" strokeWidth={2.5} />
            <span>BMW Group · Founder, SyncMode.io · Munich</span>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-balance text-5xl font-bold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl pb-4"
        >
          <span className="block text-slate-100">I bring new technology</span>
          <span className="block text-gradient-emerald pb-3">into daily use.</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Eight years at BMW in Munich. Today I lead a vehicle dynamics team and
          GenAI adoption for my area. In 2026 I founded{" "}
          <span className="text-slate-200">SyncMode.io</span> and took it to its
          first paying customers.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/35 hover:scale-[1.02]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Get in touch</span>
            <ArrowDown className="relative h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-20 grid grid-cols-3 gap-x-6 gap-y-6 text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:flex sm:items-center sm:gap-12"
        >
          <CounterStat target={500} label="weekly users of my AI agent" />
          <div className="hidden h-10 w-px bg-slate-800 sm:block" />
          <CounterStat target={8} label="markets in one rollout" />
          <div className="hidden h-10 w-px bg-slate-800 sm:block" />
          <CounterStat target={8} label="years at BMW" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

function CounterStat({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, target, motionValue]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="text-2xl font-bold text-gradient-emerald tabular-nums">
        {display}
        {suffix}
      </span>
      <span>{label}</span>
    </div>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Building2, Rocket, Globe, ArrowUpRight } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type Project = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: "cyan" | "emerald" | "sky";
  icon: ReactNode;
};

const projects: Project[] = [
  {
    index: "P01",
    title: "BMW GenAI agent",
    subtitle: "Custom MCP server · nine legacy systems",
    description:
      "An agent that lets engineers ask in plain language instead of clicking through nine legacy engineering systems. A custom MCP server in TypeScript behind an OAuth and Apigee gateway, with its own role in the permission system and a staged rollout from integration to production. I chose the model by testing GPT, Gemini and Claude on accuracy, robustness and token cost.",
    tags: ["MCP", "TypeScript", "OAuth · Apigee", "Model evaluation", "Staged rollout"],
    metrics: [
      { label: "Weekly users", value: "~500" },
      { label: "Less time, n=5", value: "~70 %" },
    ],
    accent: "cyan",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    index: "P02",
    title: "SyncMode.io",
    subtitle: "Founder · built solo with coding agents",
    description:
      "A relationship profile for couples: both partners answer 80 questions separately and get one 13-page report. The scoring runs in plain Python so results are reproducible, and four parallel Gemini calls write the text within fixed guardrails. It runs as separate services in Docker Compose behind Cloudflare. I built it by directing Claude Code and Codex, and I sell it myself: offer, price, partner channel and sales calls.",
    tags: ["FastAPI", "Gemini", "Postgres · Redis", "Docker Compose", "Cloudflare", "Stripe"],
    metrics: [
      { label: "Live since", value: "May 2026" },
      { label: "First customers", value: "Aug 2026" },
    ],
    accent: "emerald",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    index: "P03",
    title: "One platform, eight markets",
    subtitle: "BMW · product master data · 2018–2023",
    description:
      "I led the master data sub-project inside BMW's integrated PDM initiative: product-structure governance, data quality, variant and complexity analysis, and the data interfaces to other business units. For the rollout to eight markets I steered the migration out of the legacy systems, wrote the specification for IT, owned test and release, and trained the users.",
    tags: ["Data governance", "Migration", "Market rollout", "User training"],
    metrics: [
      { label: "Shorter cycles", value: "35 %" },
      { label: "Critical failures", value: "0" },
    ],
    accent: "sky",
    icon: <Globe className="h-5 w-5" />,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            02 · Work
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-16 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Three projects,{" "}
          <span className="text-gradient-emerald">start to finish.</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.index} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const accentMap = {
    cyan: {
      ring: "from-cyan-500/40 via-sky-500/20 to-transparent",
      chip: "bg-cyan-500/10 text-cyan-200 ring-cyan-500/30",
      icon: "bg-cyan-500/15 text-cyan-200 ring-cyan-500/30",
      glow: "rgba(6,182,212,0.18)",
    },
    emerald: {
      ring: "from-emerald-500/40 via-cyan-500/20 to-transparent",
      chip: "bg-emerald-500/10 text-emerald-200 ring-emerald-500/30",
      icon: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30",
      glow: "rgba(16,185,129,0.18)",
    },
    sky: {
      ring: "from-sky-500/40 via-indigo-500/20 to-transparent",
      chip: "bg-sky-500/10 text-sky-200 ring-sky-500/30",
      icon: "bg-sky-500/15 text-sky-200 ring-sky-500/30",
      glow: "rgba(14,165,233,0.18)",
    },
  };
  const accentClasses = accentMap[project.accent];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${accentClasses.ring} opacity-0 blur transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-8">
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), ${accentClasses.glow}, transparent 40%)`,
          }}
        />

        <div className="relative flex items-start justify-between">
          <div
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${accentClasses.icon}`}
          >
            {project.icon}
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {project.index}
          </span>
        </div>

        <div className="relative mt-8">
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-100 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-sm text-slate-400">
            {project.subtitle}
          </p>
        </div>

        <p className="relative mt-5 text-[15px] leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${accentClasses.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative mt-8 flex items-end justify-between">
          <div className="flex gap-8">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-xl font-bold text-slate-100">{m.value}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-200" />
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Building2, Rocket, Factory, ArrowUpRight } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type Project = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accent: "violet" | "emerald" | "amber";
  icon: ReactNode;
};

const projects: Project[] = [
  {
    index: "P01",
    title: "BMW Group GenAI Infrastructure",
    subtitle: "Custom MCP Server · Enterprise Scale",
    description:
      "Architected the connective tissue between frontier AI and the BMW production stack: a custom Model Context Protocol (MCP) server connecting APIs, legacy data silos, and security perimeters via M2M and OAuth. Scaled to 600+ daily active users, with measurable ROI and executive sponsorship secured.",
    tags: ["Python", "MCP", "OAuth", "Enterprise RAG", "LLM Orchestration"],
    metrics: [
      { label: "Daily Users", value: "600+" },
      { label: "Stack", value: "M2M + OAuth" },
    ],
    accent: "violet",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    index: "P02",
    title: "SyncMode.io",
    subtitle: "Founder · Sole Developer · GenAI Sandbox",
    description:
      "My GenAI sandbox, built solo end-to-end to learn what production-grade agentic workflows actually demand. Multi-LLM orchestration (Gemini, OpenAI, Anthropic), deterministic guardrails, evaluation pipelines + observability, server-side tracking, Stripe + DSGVO compliance, Cloudflare-fronted Docker stack on Hetzner. Every layer hand-built, every failure mode logged. What I learn here feeds back into how I architect at scale.",
    tags: [
      "Python",
      "Next.js",
      "FastAPI",
      "Multi-LLM",
      "Eval-Driven",
      "Production",
    ],
    metrics: [
      { label: "Stack", value: "Full E2E" },
      { label: "Team", value: "Solo" },
    ],
    accent: "emerald",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    index: "P03",
    title: "Flagship Industrialization",
    subtitle: "BMW 7 Series · iX · XM — R&D → Series Production",
    description:
      "Leading a team of 6 engineers translating bleeding-edge R&D prototypes into certified global mass production. Owning the full digital factory stack (ERP, SCADA, PLCs) across 8 international markets. Drove deployment cycles 35% faster with zero critical failures and pitched solutions to skeptical plant managers across three European plants.",
    tags: [
      "Industrialization",
      "Homologation",
      "ERP",
      "SCADA · PLC",
      "Stakeholder Mgmt",
    ],
    metrics: [
      { label: "Faster Cycles", value: "35%" },
      { label: "Markets", value: "8" },
    ],
    accent: "amber",
    icon: <Factory className="h-5 w-5" />,
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
            02 — Live Production Showcase
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-16 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          From demo to{" "}
          <span className="text-gradient-emerald">compliance-ready production.</span>
          <br />
          <span className="text-slate-500">Through every blocker.</span>
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
    violet: {
      ring: "from-violet-500/40 via-indigo-500/20 to-transparent",
      chip: "bg-violet-500/10 text-violet-200 ring-violet-500/30",
      icon: "bg-violet-500/15 text-violet-200 ring-violet-500/30",
      glow: "rgba(139,92,246,0.18)",
    },
    emerald: {
      ring: "from-emerald-500/40 via-cyan-500/20 to-transparent",
      chip: "bg-emerald-500/10 text-emerald-200 ring-emerald-500/30",
      icon: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30",
      glow: "rgba(16,185,129,0.18)",
    },
    amber: {
      ring: "from-amber-500/40 via-orange-500/20 to-transparent",
      chip: "bg-amber-500/10 text-amber-200 ring-amber-500/30",
      icon: "bg-amber-500/15 text-amber-200 ring-amber-500/30",
      glow: "rgba(245,158,11,0.18)",
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

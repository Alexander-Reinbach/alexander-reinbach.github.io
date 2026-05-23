"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type Role = {
  range: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
  tone: "violet" | "cyan" | "emerald" | "amber" | "slate";
  highlight?: boolean;
};

const roles: Role[] = [
  {
    range: "01/2026 — today",
    title: "GenAI Sandbox Founder",
    org: "SyncMode",
    location: "Munich · Remote",
    bullets: [
      "Solo end-to-end build to learn what production-grade agentic workflows actually demand.",
      "Architecture, multi-LLM orchestration (Gemini, OpenAI, Anthropic), deterministic guardrails, eval audits, production cloud.",
      "Vertex AI Agent Builder · NotebookLM · ReAct patterns · MCP · Multi-agent runtime.",
    ],
    tone: "emerald",
    highlight: true,
  },
  {
    range: "03/2023 — today",
    title: "Teamlead Simultaneous Engineering (BEV & ICE) & Applied GenAI Lead",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Lead a 6-engineer team owning Simultaneous Engineering across BEV & ICE platforms (7 Series, iX, XM), translating R&D prototypes into certified global mass production.",
      "Drive the Applied GenAI initiative in parallel: embedding LLM agents and MCP-based data access into operational workflows.",
      "Own the full digital factory stack: ERP → SCADA → PLCs across multiple plants.",
      "Built a custom MCP server (M2M + OAuth) inside the corporate environment. 600+ daily users, executive sponsorship secured.",
      "Trusted advisor to executives bridging business, IT, and innovation.",
    ],
    tone: "violet",
    highlight: true,
  },
  {
    range: "05/2020 — 03/2023",
    title: "Team Product Owner (Teamlead) — Product Master Data | Development & IT",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Led the Product Master Data team within the iPDM Group, with strategic ownership of data governance across vehicle development and IT.",
      "Directed global software deployments across 8 markets. 35% faster integration cycles, zero critical failures.",
      "Designed end-to-end application architectures aligning technology strategy with business objectives.",
    ],
    tone: "violet",
  },
  {
    range: "09/2018 — 09/2019",
    title: "Project Specialist — Development",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Project Specialist for Product Structure and Product Master Data within the integrated PDM landscape.",
      "Process development and stakeholder alignment between Development and IT.",
    ],
    tone: "violet",
  },
  {
    range: "01/2019 — 04/2019",
    title: "Intrapreneur — BMW Accelerator",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "\"Act like a Start-Up. Deliver like a Grown-Up.\" Internal accelerator program for selected intrapreneurs.",
      "Pitched and prototyped a venture concept end-to-end, from problem framing to executive review.",
    ],
    tone: "amber",
  },
  {
    range: "09/2017 — 04/2018",
    title: "Master's Thesis — Development & Sales",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Thesis: \"Flexibilisation of the product supply management\", with focus on data governance & system integration.",
      "Grade 1.0; influenced downstream automotive data strategies.",
    ],
    tone: "slate",
  },
  {
    range: "09/2017 — 03/2018",
    title: "Associate Consultant — Logistics & Start-Ups",
    org: "Simon-Kucher & Partners",
    location: "Munich, Germany",
    bullets: [
      "Sales and pricing in the U.S. intermodal logistics market.",
      "Data-driven competitive reports and strategic recommendations for C-level decision-making.",
    ],
    tone: "cyan",
  },
  {
    range: "04/2017 — 08/2017",
    title: "Student Intern — Strategy & Analytics",
    org: "Amazon",
    location: "Munich, Germany",
    bullets: [
      "New Accounts Management team. Onboarded new Sellers onto the European marketplace.",
      "Data-driven optimization of seller pipelines; embraced Customer Obsession from Day 1.",
    ],
    tone: "amber",
  },
];

const toneRing: Record<Role["tone"], string> = {
  violet: "bg-violet-400 ring-violet-400/30",
  cyan: "bg-cyan-400 ring-cyan-400/30",
  emerald: "bg-emerald-400 ring-emerald-400/30",
  amber: "bg-amber-400 ring-amber-400/30",
  slate: "bg-slate-400 ring-slate-400/30",
};

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-300">
            03 — Trajectory
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-16 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          A decade bridging
          <br />
          <span className="text-gradient">strategy &amp; stack-trace.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-slate-700/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10">
            {roles.map((role, i) => (
              <motion.li
                key={`${role.range}-${role.title}`}
                variants={fadeInUp}
                className={`relative grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="hidden md:block" />
                <div className="pl-10 md:pl-0">
                  <div
                    className={`absolute left-0 top-1.5 h-6 w-6 rounded-full ring-4 ${toneRing[role.tone]} md:left-1/2 md:-translate-x-1/2`}
                  >
                    <span className="absolute inset-0 m-1 rounded-full bg-slate-950" />
                  </div>

                  <div
                    className={`group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:bg-white/[0.04] ${
                      role.highlight ? "ring-1 ring-violet-500/20" : ""
                    }`}
                  >
                    {role.highlight && (
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/30">
                        <span className="relative inline-flex h-1 w-1">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1 w-1 rounded-full bg-emerald-400" />
                        </span>
                        Current
                      </span>
                    )}
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      {role.range}
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-slate-100">
                      {role.title}
                    </h3>
                    <div className="text-sm text-violet-300">{role.org}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{role.location}</div>
                    <ul className="mt-4 space-y-2">
                      {role.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-slate-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type Role = {
  range: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
  tone: "cyan" | "emerald" | "sky" | "slate";
  highlight?: boolean;
};

const roles: Role[] = [
  {
    range: "03/2023 – today",
    title: "Teamlead, Simultaneous Engineering (Vehicle Dynamics) & Applied GenAI Lead",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Lead a team of six engineers developing the tyres for the 7 Series, iX and XM, with purchasing, the plant, sales and quality. Homologation is a regular part of this work.",
      "Lead GenAI adoption for my area: training on GitHub Copilot and working with LLMs, model choice, token spend and the rollout of skills and agents, presented up to executive level.",
      "Designed and rolled out an internal agent: a custom MCP server in TypeScript over nine legacy systems, behind OAuth and Apigee. About 500 engineers use it every week.",
      "Secured €0.8M for AI standardisation and defended around €5M in programme budgets at executive level.",
    ],
    tone: "cyan",
    highlight: true,
  },
  {
    range: "02/2026 – today",
    title: "Founder",
    org: "SyncMode.io",
    location: "Munich, Germany",
    bullets: [
      "A relationship profile for couples. Live since May 2026, first paying customers in August 2026.",
      "Offer, pricing, partner channel and sales calls myself; two partnerships with couples coaches.",
      "Built by directing coding agents (Claude Code, Codex): I specify, review, test and debug.",
    ],
    tone: "emerald",
    highlight: true,
  },
  {
    range: "09/2019 – 03/2023",
    title: "Project Lead, Integrated PDM · Team Product Owner, Product Master Data",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Led the master data sub-project inside BMW's integrated PDM initiative: product-structure governance, data quality and cleansing, variant and complexity analysis, data interfaces to other business units.",
      "Rollout to eight markets: migration out of the legacy systems, specification for IT, test and release, user training. Rollout cycles 35 % shorter, with no critical failure.",
      "Team Product Owner from 05/2020.",
    ],
    tone: "cyan",
  },
  {
    range: "09/2018 – 09/2019",
    title: "Project Specialist, Development",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Specialist for product structure and product master data. Redesigned the processes and systems behind it with IT and the departments that depend on that data.",
    ],
    tone: "cyan",
  },
  {
    range: "01/2019 – 07/2019",
    title: "Intrapreneur programmes",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "BMW Accelerator (12 weeks, 2019): pitched and prototyped a venture concept.",
      "THINK.MAKE.START. with UnternehmerTUM (July 2019).",
    ],
    tone: "sky",
  },
  {
    range: "10/2017 – 06/2018",
    title: "Internship & Master's Thesis",
    org: "BMW Group",
    location: "Munich, Germany",
    bullets: [
      "Thesis: \"Flexibilisation of the product supply management through the interface between technology and sales using the example of BMW.\" Grade 1.0.",
    ],
    tone: "slate",
  },
  {
    range: "09/2017 – 03/2018",
    title: "Associate Consultant, Logistics & Start-Ups",
    org: "Simon-Kucher & Partners",
    location: "Munich, Germany",
    bullets: [
      "Pricing and strategy for clients in U.S. intermodal logistics; cold outreach to logistics start-ups.",
    ],
    tone: "sky",
  },
  {
    range: "04/2017 – 08/2017",
    title: "Student Intern, Strategy & Analytics",
    org: "Amazon",
    location: "Munich, Germany",
    bullets: [
      "New Accounts Management: onboarding new sellers onto the European marketplace.",
    ],
    tone: "slate",
  },
];

const toneRing: Record<Role["tone"], string> = {
  cyan: "bg-cyan-400 ring-cyan-400/30",
  emerald: "bg-emerald-400 ring-emerald-400/30",
  sky: "bg-sky-400 ring-sky-400/30",
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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            03 · Career
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-16 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Where I have{" "}
          <span className="text-gradient-emerald">worked so far.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

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
                      role.highlight ? "ring-1 ring-cyan-500/20" : ""
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
                    <div className="text-sm text-cyan-300">{role.org}</div>
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

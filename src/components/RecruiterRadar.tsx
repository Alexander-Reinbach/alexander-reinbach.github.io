"use client";

import { motion } from "framer-motion";
import { Radar, Cloud, Briefcase, Compass } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const bestFitCompanies = [
  { name: "Google", focus: "Cloud AI · Vertex AI · Gemini" },
  { name: "Microsoft", focus: "Azure AI Foundry · Copilot · Fabric" },
  { name: "Salesforce", focus: "Agentforce · Data Cloud · Einstein" },
  { name: "Databricks", focus: "Lakehouse · MosaicAI · Unity Catalog" },
  { name: "MongoDB", focus: "Atlas · Vector Search · AI workloads" },
];

const rolePatterns = [
  "AI Solution Architect",
  "Forward Deployed Engineer",
];

const trackRecord = [
  "8-market enterprise rollouts at BMW (Series Production, ERP → SCADA → PLC)",
  "600+ daily users on a custom MCP server I architected end-to-end",
  "Multi-LLM orchestration in production (Gemini · OpenAI · Anthropic)",
  "Vendor-recognized: Anthropic · Google · DeepLearning.AI certs (2025-2026)",
  "Founder of a vertical GenAI app — discovery → POC → production, solo",
  "Stakeholder spectrum: C-suite, IT, plant operators, end-users",
  "Languages: DE native · EN fluent · FR conversational",
  "Lived & studied: Munich · Edinburgh · Beijing",
];

const verticals = [
  "AI Solution Architecture",
  "Forward Deployed Engineering",
  "Customer-Embedded Delivery",
  "Multi-Cloud GenAI Architecture",
  "Enterprise LLMOps",
  "Frontier Agentic Systems",
  "Vector & Data Infrastructure",
  "Industrial AI · Physical AI",
  "Vendor-side AI Specialization",
];

export function RecruiterRadar() {
  return (
    <section id="radar" className="relative px-6 py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-300">
            05 — Operating Profile
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/40 to-transparent" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(167,139,250,0.25), transparent 50%)",
            }}
          />

          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-medium text-slate-300">
              <Radar className="h-3.5 w-3.5 text-fuchsia-300" />
              <span className="uppercase tracking-widest">Operating Profile</span>
            </div>

            <h2 className="max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              I operate as an{" "}
              <span className="text-gradient">AI Solution Architect</span> &{" "}
              <span className="text-gradient-emerald">Forward Deployed Engineer</span>{" "}
              for AI-led hyperscalers.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
              Built for vendor-side delivery:{" "}
              <span className="text-slate-200">
                enterprise customer fluency, multi-cloud AI breadth, end-to-end
                ownership from discovery through production deployment.
              </span>{" "}
              The kind of engineer who can sit with a CTO at breakfast, a plant
              operator at lunch, and a 3 a.m. on-call page — and ship something
              that survives all three.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="mb-5 flex items-center gap-3">
              <Cloud className="h-4 w-4 text-cyan-300" />
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Where This Profile Lands
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {bestFitCompanies.map((c) => (
                <div
                  key={c.name}
                  className="group rounded-xl glass p-4 ring-1 ring-white/5 transition-all hover:bg-white/[0.06] hover:ring-fuchsia-500/30"
                >
                  <div className="text-base font-bold text-slate-100">
                    {c.name}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                    {c.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-10">
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className="h-4 w-4 text-violet-300" />
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Role Patterns
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {rolePatterns.map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200 ring-1 ring-violet-500/30"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-10">
            <div className="mb-5 flex items-center gap-3">
              <Compass className="h-4 w-4 text-emerald-300" />
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Track Record
              </h3>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {trackRecord.map((s) => (
                <li
                  key={s}
                  className="flex gap-2.5 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400/60" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-12 -mx-10 md:-mx-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
            <div className="flex animate-marquee gap-12 whitespace-nowrap">
              {[...verticals, ...verticals].map((v, i) => (
                <div
                  key={`${v}-${i}`}
                  className="flex items-center gap-3 text-sm font-medium text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                  <span className="uppercase tracking-[0.15em]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            <Pill label="Base" value="Munich · EU · Remote" />
            <Pill label="Languages" value="DE · EN · FR" />
            <Pill label="Stack focus" value="GenAI · MCP · Multi-Cloud" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl glass px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-100">{value}</div>
    </div>
  );
}

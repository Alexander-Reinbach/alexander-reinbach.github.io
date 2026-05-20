"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cloud, BrainCircuit, Award, Globe, Cpu } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const credentials = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Anthropic · Claude Code 101",
    subtitle: "Certified May 2026 · Agentic dev workflows",
    accent: "violet",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Google · Generative AI Leader",
    subtitle: "Certified Jan 2026 · Valid until Jan 2029",
    accent: "cyan",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "DeepLearning.AI · Generative AI for Everyone",
    subtitle: "Andrew Ng · Nov 2025",
    accent: "emerald",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Stanford · Machine Learning",
    subtitle: "Andrew Ng · Certified Feb 2020",
    accent: "rose",
  },
];

const education = [
  {
    year: "2015 — 2018",
    title: "M.Sc. Management & Technology",
    school: "Technical University of Munich (TUM)",
    detail: "Product Engineering · Strategy & Leadership · Thesis 1.0 · M.Sc. 1.7 (Top 30%)",
  },
  {
    year: "2016 — 2017",
    title: "Semester Abroad · M.Sc. Industrial Engineering",
    school: "Beijing Institute of Technology (北京理工大学)",
    detail: "International perspective on engineering & operations",
  },
  {
    year: "2010 — 2015",
    title: "B.Sc. Business Engineering",
    school: "University of Applied Sciences Karlsruhe",
    detail: "Wirtschaftsingenieur · Purchasing & Sales",
  },
  {
    year: "2013",
    title: "Semester Abroad",
    school: "Edinburgh Napier University",
    detail: "DAAD-Promos Grant",
  },
];

const otherPrograms = [
  "BCG · Digital Transformation",
  "Munich School of Philosophy · Summer Academy Leadership & Personality",
  "Karl Schlecht Foundation · Schloss Elmau Leadership Academy",
  "FranklinCovey · The 7 Habits of Highly Effective People",
  "THINK.MAKE.START. @BMW · Design Thinking",
  "BMW Accelerator · Intrapreneur Program (\"Act like a Start-Up\")",
  "Bridge for Billions · Business Mentor",
];

type StackEntry = { name: string; family: string };

const stack: StackEntry[] = [
  { name: "Python", family: "core" },
  { name: "TypeScript", family: "core" },
  { name: "Next.js", family: "frontend" },
  { name: "Tailwind CSS", family: "frontend" },
  { name: "FastAPI", family: "backend" },
  { name: "LangChain", family: "ai" },
  { name: "MCP", family: "ai" },
  { name: "Claude Code", family: "ai" },
  { name: "Gemini · OpenAI · Anthropic", family: "ai" },
  { name: "Vertex AI Agent Builder", family: "ai" },
  { name: "NotebookLM", family: "ai" },
  { name: "ReAct · Multi-Agent", family: "ai" },
  { name: "Enterprise RAG", family: "ai" },
  { name: "Evals & Observability", family: "ai" },
  { name: "GCP", family: "cloud" },
  { name: "Docker", family: "cloud" },
  { name: "LLMOps", family: "cloud" },
  { name: "n8n Automation", family: "cloud" },
  { name: "OAuth · M2M", family: "security" },
  { name: "SAIF Framework", family: "security" },
  { name: "Vector DBs", family: "data" },
  { name: "ERP · SCADA · PLC", family: "industry" },
  { name: "PLM · Homologation", family: "industry" },
];

const familyColor: Record<string, string> = {
  core: "ring-violet-500/30 text-violet-200 bg-violet-500/10",
  frontend: "ring-cyan-500/30 text-cyan-200 bg-cyan-500/10",
  backend: "ring-indigo-500/30 text-indigo-200 bg-indigo-500/10",
  ai: "ring-fuchsia-500/30 text-fuchsia-200 bg-fuchsia-500/10",
  cloud: "ring-emerald-500/30 text-emerald-200 bg-emerald-500/10",
  security: "ring-amber-500/30 text-amber-200 bg-amber-500/10",
  data: "ring-rose-500/30 text-rose-200 bg-rose-500/10",
  industry: "ring-orange-500/30 text-orange-200 bg-orange-500/10",
};

const accentColor: Record<string, string> = {
  violet: "from-violet-500/40 to-indigo-500/20 text-violet-200",
  cyan: "from-cyan-500/40 to-blue-500/20 text-cyan-200",
  emerald: "from-emerald-500/40 to-teal-500/20 text-emerald-200",
  rose: "from-rose-500/40 to-pink-500/20 text-rose-200",
};

const languages = [
  { code: "DE", label: "German", level: "Native" },
  { code: "EN", label: "English", level: "Fluent" },
  { code: "FR", label: "French", level: "Conversational" },
];

export function Credentials() {
  return (
    <section id="stack" className="relative px-6 py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300">
            04 — The Proof
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-16 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Credentials that <span className="text-gradient">compile.</span>
          <br />
          <span className="text-slate-500">Tools that ship.</span>
        </motion.h2>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((cred) => (
            <motion.div
              key={cred.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-colors hover:bg-white/[0.05]"
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accentColor[cred.accent]} ring-1 ring-white/10`}
              >
                {cred.icon}
              </div>
              <h3 className="text-base font-semibold leading-tight text-slate-100">
                {cred.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">{cred.subtitle}</p>
              <div className="pointer-events-none absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mb-16 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl glass-strong p-7">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-violet-300" />
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                Education
              </h3>
            </div>
            <ol className="space-y-4">
              {education.map((e) => (
                <li
                  key={e.title}
                  className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-4"
                >
                  <div className="font-mono text-xs text-slate-500">{e.year}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{e.title}</div>
                    <div className="text-sm text-violet-300">{e.school}</div>
                    <div className="mt-0.5 text-xs text-slate-500">{e.detail}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl glass p-6">
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-5 w-5 text-cyan-300" />
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                  Additional Programs
                </h3>
              </div>
              <ul className="space-y-2.5">
                {otherPrograms.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                  >
                    <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl glass p-6">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="h-5 w-5 text-emerald-300" />
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                  Languages
                </h3>
              </div>
              <div className="space-y-2.5">
                {languages.map((l) => (
                  <div key={l.code} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-9 items-center justify-center rounded-md bg-white/5 font-mono text-[10px] font-bold text-slate-300 ring-1 ring-white/10">
                        {l.code}
                      </span>
                      <span className="text-sm font-medium text-slate-200">{l.label}</span>
                    </div>
                    <span className="text-xs text-slate-500">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                Interactive Tech Cloud
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                The toolkit. Battle-tested from PLC to LLM.
              </p>
            </div>
            <span className="font-mono text-xs text-slate-500">
              {stack.length} tools
            </span>
          </div>
          <div className="rounded-2xl glass-strong p-6">
            <div className="flex flex-wrap gap-2">
              {stack.map((entry, i) => (
                <motion.span
                  key={entry.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className={`cursor-default rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-shadow hover:shadow-lg hover:shadow-violet-500/10 ${familyColor[entry.family]}`}
                >
                  {entry.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

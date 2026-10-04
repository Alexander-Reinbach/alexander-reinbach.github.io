"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Route,
  ShieldCheck,
  UserCheck,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { withBase } from "@/lib/path";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ScrollProgress } from "@/components/ScrollProgress";

const EMAIL = "Alexander.Reinbach@online.de";
const LINKEDIN = "https://www.linkedin.com/in/alexander-r-929814144/";
const GITHUB = "https://github.com/Alexander-Reinbach";
const PORTFOLIO = "https://alexander-reinbach.github.io/";
const MAIL_SUBJECT = "Customer%20Engineer%2C%20Google%20Cloud";

// Hero fact card. Everything here is on the CV and in canonical-facts.md.
const ticket: { label: string; value: string; wide?: boolean }[] = [
  { label: "Based in", value: "Munich" },
  { label: "Inside BMW", value: "8 years" },
  { label: "Engineers signed up", value: "~1,500" },
  { label: "Active every week", value: "~500" },
  { label: "Google Cloud", value: "Certified Generative AI Leader", wide: true },
  { label: "Own AI product", value: "Runs on Gemini, paying customers since Aug 2026", wide: true },
];

// What a Google Cloud Customer Engineer does, next to where I have done the same kind of work at BMW.
type Step = { role: string; detail: string; mine: string };

const steps: Step[] = [
  {
    role: "Discovery and proof of concept",
    detail: "Find the high-value use case with the customer and prove it works.",
    mine: "I ran discovery with our engineering and business teams and scoped the use case against the systems we actually have. Then I ran a proof of concept with success criteria: in a before-and-after comparison, five engineers found answers to complex questions about 70 % faster.",
  },
  {
    role: "Agents with tool access",
    detail: "Connect AI agents to the enterprise systems customers already run.",
    mine: "I designed an MCP server in TypeScript that gives an AI system function calling on our legacy engineering systems through their existing APIs. Its answers are grounded in real engineering data, and nothing is copied into a new platform.",
  },
  {
    role: "Security and safety boundaries",
    detail: "Meet enterprise requirements for access, security and AI safety.",
    mine: "Access runs through OAuth with machine-to-machine tokens via an API gateway. The integration has its own role in the permission system, so security, compliance and the works council reviewed what it may access and approved it. I test models against prompt injection.",
  },
  {
    role: "Model choice, latency and quality",
    detail: "Pick the right model and tune it for the customer's requirements.",
    mine: "I built our internal benchmark for Gemini, GPT and Claude on robustness, token use and accuracy. I tuned reasoning level and answer length to balance speed and quality.",
  },
  {
    role: "Production, handover and feedback",
    detail: "Hand over cleanly to delivery teams and feed field insight back to product.",
    mine: "I rolled the solution out in stages; about 500 engineers use it every week. I documented it as a reference architecture for BMW's central AI platform team and present model choice and token spend to C-suite executives.",
  },
];

type Card = {
  icon: ReactNode;
  value: string;
  title: string;
  mine: string;
};

// Three parts of manufacturing I have worked in myself.
const cards: Card[] = [
  {
    icon: <Wrench className="h-5 w-5" />,
    value: "2023 to today",
    title: "Tyre development",
    mine: "We develop the tyres for the 7 Series, iX and XM. Each tyre is tailored to the car: handling, rolling resistance, steering and noise. We work with purchasing, the plant, sales and quality, and homologation is a regular part of the work.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    value: "2018 to 2023",
    title: "Product master data",
    mine: "I led the master data sub-project inside BMW's integrated PDM initiative: product structure, data quality, variant and complexity management, and the data interfaces between business units. The rollout reached eight markets with 35 % shorter cycles.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    value: "2023 to today",
    title: "AI for engineers",
    mine: "Half of my role is leading GenAI for my area. That covers the MCP integration, the choice of model, the trainings for engineers and an internal AI newsletter.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    value: "2019 and 2026",
    title: "Start-ups",
    mine: "I went through BMW's start-up accelerator in 2019 and THINK.MAKE.START. with UnternehmerTUM. In 2026 I founded my own AI product, SyncMode, and sold it to its first customers.",
  },
];

// Google Cloud: what I run in production and what I know from the certification.
const values: { value: string; mine: string }[] = [
  {
    value: "Gemini in production",
    mine: "SyncMode runs on Gemini through the google-genai SDK. A separate worker runs four Gemini calls in parallel, and every report passes checks against unsupported or overstated statements before it goes out.",
  },
  {
    value: "Google Cloud portfolio",
    mine: "Through the Generative AI Leader certification I know Gemini Enterprise, the Agent Platform (Vertex AI), Agent Search, grounding with Google Search and the Customer Engagement Suite, and when each one fits.",
  },
  {
    value: "Prompting and grounding",
    mine: "From the certification: few-shot, chain-of-thought and ReAct prompting, and sampling settings such as temperature and output length. In practice: system prompts and answers grounded in engineering data at BMW. At SyncMode the model only writes the text, while scores come from deterministic Python logic.",
  },
  {
    value: "Secure and responsible AI",
    mine: "From the certification: Google's Secure AI Framework, access control and responsible AI. In practice: a dedicated permission role for the AI integration at BMW, prompt-injection tests and a data protection impact assessment at SyncMode.",
  },
];

// SyncMode, technical side. Architecture from canonical-facts.md.
const stack: { label: string; value: string }[] = [
  { label: "Services", value: "API, worker and scheduler in Docker Compose, with Postgres and Redis" },
  { label: "LLM calls", value: "Four calls in parallel, in a worker process separate from the API" },
  { label: "Scoring", value: "Deterministic Python logic, the model only writes the text" },
  { label: "Quality", value: "Automated checks on every report, test suite with fictional couples" },
  { label: "Operations", value: "Behind Cloudflare, Sentry for silent errors, a watchdog for API quotas" },
  { label: "How I build", value: "With Claude Code and Codex: I specify, direct, review and debug" },
];

type Station = { range: string; title: string; org: string; current?: boolean };

const timeline: Station[] = [
  { range: "03/2023 – today", title: "Teamlead, Simultaneous Engineering (Vehicle Dynamics) & Applied GenAI Lead", org: "BMW Group · Munich", current: true },
  { range: "02/2026 – today", title: "Founder", org: "SyncMode.io · Munich", current: true },
  { range: "09/2018 – 03/2023", title: "Project Specialist → Project Lead, Integrated PDM → Team Product Owner", org: "BMW Group · Munich" },
  { range: "09/2017 – 03/2018", title: "Associate Consultant, Logistics & Start-Ups", org: "Simon-Kucher & Partners · Munich" },
  { range: "04/2017 – 08/2017", title: "Student Intern, Strategy & Analytics", org: "Amazon Germany · Munich" },
];

const education = [
  "M.Sc. Management & Technology, Technical University of Munich (thesis at BMW, grade 1.0)",
  "B.Sc. Industrial Engineering, Karlsruhe University of Applied Sciences",
  "Google Cloud Generative AI Leader (2026) · Stanford Machine Learning, Andrew Ng (2020)",
  "Anthropic: Claude Code 101 and Building effective human-agent teams (2026)",
];

export function GoogleLanding() {
  return (
    <>
      <AmbientBackground tone="calm" />
      <ScrollProgress tone="calm" />
      <main className="relative">
        {/* HERO */}
        <section className="relative flex min-h-screen items-center px-6 pt-24 pb-20">
          <div className="absolute inset-0 bg-grid opacity-[0.35]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.35fr_1fr]"
          >
            <div>
              <motion.div variants={fadeInUp}>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300">
                  <MapPin className="h-3 w-3 text-cyan-300" strokeWidth={2.5} />
                  <span>Application · Customer Engineer, Google Cloud · Munich</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-balance text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl pb-3"
              >
                <span className="text-gradient-emerald pb-2">Servus, Google.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
              >
                I&rsquo;m Alex. I have spent eight years inside BMW in Munich, and since 2023 I
                have taken an AI solution for its engineers from discovery to production. I would
                like to do this work for Google Cloud&rsquo;s enterprise customers, including
                automotive manufacturers and suppliers.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/35 hover:scale-[1.02]"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:text-white"
                >
                  <Route className="h-4 w-4" />
                  <span>Where I have done this work</span>
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <TicketCard />
            </motion.div>
          </motion.div>
        </section>

        {/* JOURNEY */}
        <Section id="journey" eyebrow="01 · The role and my work" accentLine="from-cyan-500/40">
          <SectionHeading>
            Five parts of the role,{" "}
            <span className="text-gradient-emerald">and where I have done each one at BMW.</span>
          </SectionHeading>
          <motion.p variants={fadeInUp} className="-mt-2 mb-10 max-w-3xl text-[15px] leading-relaxed text-slate-400">
            Left: what a Google Cloud Customer Engineer does. Right: what I did inside BMW,
            as the person responsible for an enterprise AI solution.
          </motion.p>
          <ol className="relative space-y-4">
            <div className="absolute left-[19px] top-4 bottom-4 hidden w-px border-l border-dashed border-cyan-500/40 md:block" />
            {steps.map((s, i) => (
              <motion.li key={s.role} variants={fadeInUp} className="relative md:pl-14">
                <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-slate-950 font-mono text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/40 md:inline-flex">
                  {i + 1}
                </span>
                <div className="grid overflow-hidden rounded-2xl glass-strong md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                  <div className="border-b border-slate-800/80 p-6 md:border-b-0 md:border-r">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                      <span className="md:hidden">Step {i + 1} · </span>The role asks
                    </div>
                    <div className="mt-1.5 text-lg font-bold text-slate-100">{s.role}</div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{s.detail}</p>
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">What I did at BMW</div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-300">{s.mine}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* VALUES */}
        <Section eyebrow="02 · Manufacturing from the inside" accentLine="from-emerald-500/40">
          <SectionHeading>
            Eight years inside an automotive manufacturer,{" "}
            <span className="text-gradient-emerald">in four kinds of work.</span>
          </SectionHeading>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {cards.map((c) => (
              <motion.div key={c.title} variants={fadeInUp}>
                <div className="flex h-full flex-col rounded-3xl glass-strong p-7">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/30">
                      {c.icon}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">{c.value}</div>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-slate-100">{c.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{c.mine}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* VALUES */}
        <Section eyebrow="03 · Google Cloud" accentLine="from-cyan-500/40">
          <SectionHeading>
            Google Cloud,{" "}
            <span className="text-gradient-emerald">in production and from the certification.</span>
          </SectionHeading>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <motion.div key={v.value} variants={fadeInUp}>
                <div className="flex h-full flex-col rounded-3xl glass-strong p-7">
                  <h3 className="text-xl font-bold leading-snug text-slate-100">{v.value}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-400">{v.mine}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SYNCMODE */}
        <Section eyebrow="04 · Built on my own" accentLine="from-sky-500/40">
          <SectionHeading>
            SyncMode.io,{" "}
            <span className="text-gradient-emerald">an AI product I built and sell myself.</span>
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <motion.div variants={fadeInUp} className="space-y-4 text-[15px] leading-relaxed text-slate-400">
              <p>
                A relationship profile for couples. Each partner answers 80 questions in
                private, and both perspectives become one report, written with LLMs.
              </p>
              <p>
                It has been live since May 2026 and had its first paying customers in
                August. I do the selling myself: to couples directly, and to couples
                coaches as business partners. Two coaches have signed partnership
                agreements.
              </p>
            </motion.div>
            <motion.dl variants={fadeInUp} className="overflow-hidden rounded-3xl glass-strong">
              {stack.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid gap-1 px-6 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4 ${i > 0 ? "border-t border-slate-800/80" : ""}`}
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80 sm:pt-1">{r.label}</dt>
                  <dd className="text-[14px] leading-relaxed text-slate-300">{r.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </Section>

        {/* CAREER */}
        <Section eyebrow="05 · Career" accentLine="from-cyan-500/40">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <motion.div variants={fadeInUp} className="rounded-3xl glass-strong p-7">
              <ol className="space-y-5">
                {timeline.map((s) => (
                  <li key={s.range} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500 sm:pt-1">
                      {s.range}
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold leading-snug text-slate-100">
                        {s.title}
                        {s.current && (
                          <span className="ml-2 inline-flex translate-y-[-1px] items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-[13px] text-cyan-300">{s.org}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-slate-800/80 pt-5 text-[13px] leading-relaxed text-slate-400">
                Half of my current role is GenAI, half is vehicle dynamics engineering.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="rounded-3xl glass-strong p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-100">Education and certificates</h3>
              <ul className="mt-4 space-y-2.5">
                {education.map((e) => (
                  <li key={e} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        {/* WHY */}
        <Section eyebrow="06 · Why Google" accentLine="from-emerald-500/40">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                At BMW I solved one enterprise&rsquo;s questions about AI agents: which data
                they may access, how their actions are traced, what they cost and how fast they
                answer.
              </p>
              <p>
                As a Customer Engineer I want to help many customers answer the same questions,
                with Gemini, which I already run in production.
              </p>
              <p className="text-slate-100">From Munich, in German and English.</p>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <section className="relative px-6 pb-20 pt-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl pb-2"
            >
              Let&rsquo;s talk about{" "}
              <span className="text-gradient-emerald">AI agents in production.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ContactLink href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`} icon={<Mail className="h-4 w-4" />} primary>
                {EMAIL}
              </ContactLink>
              <ContactLink href={LINKEDIN} icon={<LinkedinIcon className="h-4 w-4" />}>
                LinkedIn
              </ContactLink>
              <ContactLink href={GITHUB} icon={<GithubIcon className="h-4 w-4" />}>
                GitHub
              </ContactLink>
              <ContactLink href={PORTFOLIO} icon={<Globe className="h-4 w-4" />}>
                Full portfolio
              </ContactLink>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-10 text-xs text-slate-500">
              Alexander Reinbach · Munich · +49&nbsp;170&nbsp;46&nbsp;05&nbsp;486
            </motion.p>
          </motion.div>
        </section>
      </main>
    </>
  );
}

function TicketCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-sky-500/10 to-emerald-500/30 blur-lg" />
      <div className="relative overflow-hidden rounded-[1.75rem] glass-strong">
        <div className="flex items-center gap-4 p-6">
          <img
            src={withBase("/alex.jpg")}
            alt="Alexander Reinbach"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-white/10"
          />
          <div>
            <div className="text-base font-semibold text-slate-100">Alexander Reinbach</div>
            <div className="mt-0.5 text-[13px] text-slate-400">Applied GenAI Lead, BMW · Founder, SyncMode.io</div>
          </div>
        </div>
        <div className="relative border-t border-dashed border-slate-700/80">
          <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-slate-950" />
          <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-slate-950" />
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 p-6">
          {ticket.map((t) => (
            <div key={t.label} className={t.wide ? "col-span-2" : ""}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{t.label}</dt>
              <dd className="mt-1 text-[15px] font-semibold text-slate-100">{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function Section({
  id,
  eyebrow,
  accentLine,
  children,
}: {
  id?: string;
  eyebrow: string;
  accentLine: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-8 px-6 py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="mb-10 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</span>
          <div className={`h-px flex-1 bg-gradient-to-r ${accentLine} to-transparent`} />
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      variants={fadeInUp}
      className="mb-8 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl pb-2"
    >
      {children}
    </motion.h2>
  );
}

function ContactLink({
  href,
  icon,
  children,
  primary = false,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
        primary
          ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-lg shadow-cyan-500/25"
          : "glass text-slate-200 hover:text-white"
      }`}
    >
      {icon}
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

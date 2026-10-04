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
const MAIL_SUBJECT = "Applied%20AI%20Architect%2C%20Industries";

// Hero fact card. Everything here is on the CV and in canonical-facts.md.
const ticket: { label: string; value: string; wide?: boolean }[] = [
  { label: "Based in", value: "Munich" },
  { label: "At BMW for", value: "8 years" },
  { label: "Engineers signed up", value: "~1,500" },
  { label: "Active every week", value: "~500" },
  { label: "Languages", value: "German native, English C1", wide: true },
  { label: "Own AI product", value: "Paying customers since Aug 2026", wide: true },
];

// The customer journey from the job description, next to where I have done the same step at BMW.
type Step = { role: string; detail: string; mine: string };

const steps: Step[] = [
  {
    role: "Technical discovery",
    detail: "Find out what the customer needs and turn it into a technical plan.",
    mine: "I ran discovery with our engineering and business teams. I scoped the use case against the systems we actually have.",
  },
  {
    role: "Integration into the existing stack",
    detail: "Connect Claude to the systems the customer already runs.",
    mine: "I built an MCP server in TypeScript. It gives an AI system access to our legacy engineering data by calling the existing endpoints, without copying it into a new platform. Access runs through OAuth and an Apigee gateway. I documented the setup as a reference architecture for BMW's central AI platform team.",
  },
  {
    role: "Evaluation",
    detail: "Measure how well a model works for the customer's own use case.",
    mine: "I built our internal model benchmark. GPT, Gemini and Claude go through the same tests on robustness, token use and accuracy. I then tuned reasoning level and answer length for speed and quality.",
  },
  {
    role: "Approval and rollout",
    detail: "Get through security, compliance and governance into production.",
    mine: "The integration has its own role in the permission system. That lets compliance and the works council see what it may access, which made the approval possible. I rolled it out from a test stage into production in steps.",
  },
  {
    role: "Adoption and enablement",
    detail: "Explain the technology to engineers and to executives.",
    mine: "I trained our engineers on GitHub Copilot and on working with LLMs, and I run an internal AI newsletter at BMW. I present model choice and token spend to management, up to the C-suite.",
  },
];

type Card = {
  icon: ReactNode;
  value: string;
  title: string;
  mine: string;
};

// Four of Anthropic's published values, each with something I have actually done.
const cards: Card[] = [
  {
    icon: <Wrench className="h-5 w-5" />,
    value: "Do the simple thing that works",
    title: "Plain code where it is enough",
    mine: "At SyncMode the scores come from plain Python code, not from the model, so the same answers always give the same result. The whole product runs on a single server.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    value: "Ignite a race to the top on safety",
    title: "Test before users see it",
    mine: "At BMW I test models against prompt injection before they reach users. At SyncMode every report passes checks that stop the text from stating a tendency as a fact.",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    value: "Be good to our users",
    title: "No quiet downgrade",
    mine: "When the LLM calls failed, SyncMode used to send a shorter report. I removed that. Someone who paid for the full report should not quietly get less.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    value: "Be helpful, honest, and harmless",
    title: "Measure it and say how",
    mine: "At BMW I compared how long five engineers needed for complex questions, with and without the AI system. With it, they found answers about 70 % faster. It is a small test, so I always quote it with the sample size.",
  },
];

// SyncMode, technical side. Architecture from canonical-facts.md.
const stack: { label: string; value: string }[] = [
  { label: "Services", value: "API, worker and scheduler in Docker Compose, with Postgres and Redis" },
  { label: "LLM calls", value: "Four calls in parallel, in a worker process separate from the API" },
  { label: "Scoring", value: "Plain Python, reproducible, the model only writes the text" },
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
  "Anthropic: Claude Code 101 and Building effective human-agent teams (2026)",
  "Google Cloud Generative AI Leader (2026) · Stanford Machine Learning, Andrew Ng (2020)",
];

export function AnthropicLanding() {
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
                  <span>Application · Applied AI Architect, Industries · Munich</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-balance text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl pb-3"
              >
                <span className="text-gradient-emerald pb-2">Servus, Anthropic.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
              >
                I&rsquo;m Alex, Applied GenAI Lead at BMW in Munich. I connected our
                engineering data to an AI system through an MCP server I built. Around 1,500
                engineers have signed up, and about 500 use it every week. I would like to
                do this work for Anthropic&rsquo;s enterprise customers in Germany.
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
                  <span>See what I did at BMW</span>
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <TicketCard />
            </motion.div>
          </motion.div>
        </section>

        {/* JOURNEY */}
        <Section id="journey" eyebrow="01 · From discovery to deployment" accentLine="from-cyan-500/40">
          <SectionHeading>
            Five steps of an enterprise AI rollout,{" "}
            <span className="text-gradient-emerald">and what I did in each one at BMW.</span>
          </SectionHeading>
          <motion.p variants={fadeInUp} className="-mt-2 mb-10 max-w-3xl text-[15px] leading-relaxed text-slate-400">
            Left: what the Applied AI Architect role asks for. Right: what I did as the
            customer, inside BMW.
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
        <Section eyebrow="02 · How I work" accentLine="from-emerald-500/40">
          <SectionHeading>
            Four of your values,{" "}
            <span className="text-gradient-emerald">and something I did that fits each one.</span>
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

        {/* SYNCMODE */}
        <Section eyebrow="03 · Built on my own" accentLine="from-sky-500/40">
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
        <Section eyebrow="04 · Career" accentLine="from-cyan-500/40">
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
                Half of my current role is GenAI, half is leading a team of six vehicle dynamics
                engineers for the 7 Series, iX and XM. In that work I deal with all the major
                tyre manufacturers several times a week.
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
        <Section eyebrow="05 · Why Anthropic" accentLine="from-emerald-500/40">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                At BMW a new car takes years from the first idea to the road. AI changes
                every few months, and I want to work where those changes start.
              </p>
              <p>
                What decided the approval at BMW was whether security, compliance and the
                works council could see what the AI system may access. Anthropic sets out to
                build reliable, interpretable and steerable AI. German enterprises ask
                exactly this before they approve an AI system.
              </p>
              <p className="text-slate-100">I want to help German enterprises get there, from Munich.</p>
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
              <span className="text-gradient-emerald">Claude in German enterprises.</span>
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

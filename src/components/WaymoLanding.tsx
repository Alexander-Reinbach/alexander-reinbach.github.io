"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";
import type { ReactNode } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { withBase } from "@/lib/path";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ScrollProgress } from "@/components/ScrollProgress";

const EMAIL = "Alexander.Reinbach@online.de";
const LINKEDIN = "https://www.linkedin.com/in/alexander-r-929814144/";
const PORTFOLIO = "https://alexander-reinbach.github.io/";
const MAIL_SUBJECT = "Strategy%20%26%20BizOps%20Lead%2C%20Germany";

type Fit = {
  ask: string;
  answer: string;
};

// Left column: the role's own words. Right column: where I have done it.
const fits: Fit[] = [
  {
    ask: "Build a new business from the ground up",
    answer:
      "I founded SyncMode.io in February 2026. I chose the offer, set the price, built the funnel, signed two partnerships with couples coaches and ran the sales calls. The first paying customers came in August.",
  },
  {
    ask: "Market analysis and quantitative modeling",
    answer:
      "Pricing scenarios for U.S. logistics clients at Simon-Kucher. Business cases in Excel and Power Query at BMW. At SyncMode I positioned the price against the real alternative: one hour of couples therapy costs from €150.",
  },
  {
    ask: "Quarterback large cross-functional teams",
    answer:
      "Tyre development for the 7 Series, iX and XM runs through purchasing, the plant, sales and quality. I lead a team of six engineers in the middle of it and keep one plan moving across all of them.",
  },
  {
    ask: "Pricing scenarios and business cases",
    answer:
      "I secured €0.8M for AI standardisation at BMW and have defended around €5M in programme budgets at executive level. At SyncMode I replaced discount codes with a transparent €69 direct price, after feedback that artificial anchors cost trust in the German market.",
  },
  {
    ask: "Define and track KPIs for a local business",
    answer:
      "At SyncMode I track the funnel from quiz to email gate to purchase; about 36 % of people who reach the gate go on to submit. Revenue counts only when a payment has cleared. For the BMW agent I report weekly active users, not sign-ups.",
  },
  {
    ask: "Navigate policy and regulation in Germany",
    answer:
      "Homologation is a regular part of my tyre work at BMW. I have also taken a new technology through security, compliance and the works council. At SyncMode I own the GDPR side myself, including the data protection impact assessment.",
  },
];

type Story = {
  index: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  result: string;
  tags: string[];
  accent: "cyan" | "emerald" | "sky";
};

const stories: Story[] = [
  {
    index: "01",
    icon: <Store className="h-5 w-5" />,
    title: "A go-to-market from zero",
    subtitle: "SyncMode.io · founder · since Feb 2026",
    description:
      "A relationship profile for couples: each partner answers 80 questions in private, and both perspectives become one report. I launched at €99 with discount codes, then switched to a €69 direct price for the first 100 profiles. Two couples coaches recommend it, and I am in pilot talks with a network of more than 200 therapists.",
    result: "Live since May, first paying customers in August.",
    tags: ["Offer and pricing", "Partner channel", "Funnel KPIs"],
    accent: "emerald",
  },
  {
    index: "02",
    icon: <Globe className="h-5 w-5" />,
    title: "One platform, eight markets",
    subtitle: "BMW · product master data · 2019–2023",
    description:
      "For the rollout of BMW's product master data platform I steered the migration out of the legacy systems, wrote the specification for IT, owned test and release, and trained the users in each market.",
    result: "Rollout cycles 35 % shorter, with no critical failure.",
    tags: ["Market rollout", "Operations", "Training"],
    accent: "cyan",
  },
  {
    index: "03",
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "A new technology through German approvals",
    subtitle: "BMW · Applied GenAI Lead · since 2023",
    description:
      "An internal AI agent for engineers. It got its own role in the permission system, so security, compliance and the works council could see what it does before they said yes. Afterwards I measured whether people actually use it.",
    result: "About 500 engineers use it every week.",
    tags: ["Approvals", "Adoption", "Measurement"],
    accent: "sky",
  },
];

type Station = {
  range: string;
  title: string;
  org: string;
  note?: string;
  current?: boolean;
  tone: "cyan" | "emerald" | "sky" | "slate";
};

const timeline: Station[] = [
  {
    range: "03/2023 – today",
    title: "Teamlead, Simultaneous Engineering (Vehicle Dynamics) & Applied GenAI Lead",
    org: "BMW Group · Munich",
    note: "Half the role: a team of six engineers developing tyres for the 7 Series, iX and XM, including homologation. The other half: GenAI adoption for my area, up to executive level.",
    current: true,
    tone: "cyan",
  },
  {
    range: "02/2026 – today",
    title: "Founder",
    org: "SyncMode.io · Munich",
    note: "Built from zero to first paying customers in six months, next to the job at BMW.",
    current: true,
    tone: "emerald",
  },
  {
    range: "09/2018 – 03/2023",
    title: "Project Specialist → Project Lead, Integrated PDM → Team Product Owner",
    org: "BMW Group · Munich",
    note: "Product master data and product-structure governance. Rollout to eight markets. BMW Accelerator and THINK.MAKE.START. with UnternehmerTUM in 2019.",
    tone: "cyan",
  },
  {
    range: "09/2017 – 03/2018",
    title: "Associate Consultant, Logistics & Start-Ups",
    org: "Simon-Kucher & Partners · Munich",
    note: "Pricing scenarios for U.S. intermodal logistics clients, cold outreach to logistics start-ups.",
    tone: "sky",
  },
  {
    range: "04/2017 – 08/2017",
    title: "Student Intern, Strategy & Analytics",
    org: "Amazon Germany · Munich",
    note: "New Accounts Management.",
    tone: "slate",
  },
];

const education = [
  "M.Sc. Management & Technology, Technical University of Munich (thesis at BMW, grade 1.0)",
  "Exchange, M.Sc. Industrial Engineering, Beijing Institute of Technology",
  "B.Sc. Industrial Engineering, Karlsruhe University of Applied Sciences",
  "Exchange, Edinburgh Napier University (DAAD PROMOS)",
];

const extras = [
  "German native · English C1 · French A2",
  "Based in Munich, open to the 30 % travel of the role",
  "Google Cloud Generative AI Leader (2026)",
  "Anthropic: Claude Code 101, Building effective human-agent teams (2026)",
];

const toneDot: Record<Station["tone"], string> = {
  cyan: "bg-cyan-400 ring-cyan-400/25",
  emerald: "bg-emerald-400 ring-emerald-400/25",
  sky: "bg-sky-400 ring-sky-400/25",
  slate: "bg-slate-400 ring-slate-400/25",
};

const accentMap = {
  cyan: {
    ring: "from-cyan-500/40 via-sky-500/20 to-transparent",
    chip: "bg-cyan-500/10 text-cyan-200 ring-cyan-500/30",
    icon: "bg-cyan-500/15 text-cyan-200 ring-cyan-500/30",
  },
  emerald: {
    ring: "from-emerald-500/40 via-cyan-500/20 to-transparent",
    chip: "bg-emerald-500/10 text-emerald-200 ring-emerald-500/30",
    icon: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30",
  },
  sky: {
    ring: "from-sky-500/40 via-indigo-500/20 to-transparent",
    chip: "bg-sky-500/10 text-sky-200 ring-sky-500/30",
    icon: "bg-sky-500/15 text-sky-200 ring-sky-500/30",
  },
} as const;

export function WaymoLanding() {
  return (
    <>
      <AmbientBackground tone="calm" />
      <ScrollProgress tone="calm" />
      <main className="relative">
        {/* HERO */}
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-24">
          <div className="absolute inset-0 bg-grid opacity-[0.4]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative mx-auto flex max-w-5xl flex-col items-center text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="relative inline-block">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-500/40 via-sky-500/30 to-emerald-500/30 blur-sm" />
                <img
                  src={withBase("/alex.jpg")}
                  alt="Alexander Reinbach"
                  className="relative h-28 w-28 rounded-full object-cover ring-2 ring-white/10"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300">
                <MapPin className="h-3 w-3 text-cyan-300" strokeWidth={2.5} />
                <span>Application · Strategy &amp; BizOps Lead, Germany · Munich · Native German</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-balance text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl pb-4"
            >
              <span className="block text-slate-100">Eight years inside BMW.</span>
              <span className="block text-gradient-emerald pb-3">One business built from zero.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              I know the German car industry from the OEM side, and I have taken a
              product from an idea to paying customers on my own. I would like to bring
              both to{" "}
              <span className="text-slate-200">Waymo&rsquo;s start in Germany</span>.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
            >
              <a
                href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/35 hover:scale-[1.02]"
              >
                <span className="relative">Get in touch</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={PORTFOLIO}
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:text-white"
              >
                <Globe className="h-4 w-4" />
                <span>Full portfolio</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-20 grid grid-cols-3 gap-x-6 gap-y-6 text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:flex sm:items-center sm:gap-12"
            >
              <Stat value="8" label="markets in one rollout" />
              <div className="hidden h-10 w-px bg-slate-800 sm:block" />
              <Stat value="6" label="months to first sale" />
              <div className="hidden h-10 w-px bg-slate-800 sm:block" />
              <Stat value="500" label="weekly users of my AI agent" />
            </motion.div>
          </motion.div>
        </section>

        {/* FIT */}
        <Section eyebrow="01 · The role" accentLine="from-cyan-500/40">
          <SectionHeading>
            What the role asks for,{" "}
            <span className="text-gradient-emerald">and where I have done it.</span>
          </SectionHeading>
          <div className="mt-4 overflow-hidden rounded-3xl glass-strong">
            <div className="hidden grid-cols-[minmax(0,2fr)_minmax(0,5fr)] gap-8 border-b border-slate-800/80 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:grid">
              <span>From the job description</span>
              <span>Where I have done it</span>
            </div>
            {fits.map((f, i) => (
              <motion.div
                key={f.ask}
                variants={fadeInUp}
                className={`grid gap-2 p-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,5fr)] sm:gap-8 sm:p-7 ${
                  i > 0 ? "border-t border-slate-800/80" : ""
                }`}
              >
                <div className="text-[15px] font-semibold leading-snug text-slate-100">{f.ask}</div>
                <p className="text-[14px] leading-relaxed text-slate-400">{f.answer}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* STORIES */}
        <Section eyebrow="02 · Three examples" accentLine="from-emerald-500/40">
          <SectionHeading>
            Three projects,{" "}
            <span className="text-gradient-emerald">start to finish.</span>
          </SectionHeading>
          <div className="mt-4 grid gap-6 lg:grid-cols-3">
            {stories.map((s) => (
              <motion.div key={s.index} variants={fadeInUp}>
                <StoryCard story={s} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CAREER */}
        <Section eyebrow="03 · Career" accentLine="from-sky-500/40">
          <SectionHeading>
            Where I have{" "}
            <span className="text-gradient-emerald">worked so far.</span>
          </SectionHeading>
          <div className="relative mt-4">
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700/40 to-transparent" />
            <ol className="space-y-4">
              {timeline.map((s) => (
                <motion.li key={`${s.range}-${s.title}`} variants={fadeInUp} className="relative pl-10">
                  <span className={`absolute left-0 top-2 h-5 w-5 rounded-full ring-4 ${toneDot[s.tone]}`}>
                    <span className="absolute inset-0 m-1 rounded-full bg-slate-950" />
                  </span>
                  <div className="rounded-2xl glass p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                        {s.range}
                      </span>
                      {s.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/30">
                          <span className="h-1 w-1 rounded-full bg-emerald-400" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold leading-snug text-slate-100">{s.title}</h3>
                    <div className="text-sm text-cyan-300">{s.org}</div>
                    {s.note && (
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{s.note}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <InfoCard icon={<GraduationCap className="h-5 w-5" />} title="Education" items={education} />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <InfoCard icon={<Award className="h-5 w-5" />} title="Languages and more" items={extras} />
            </motion.div>
          </div>
        </Section>

        {/* WHY */}
        <Section eyebrow="04 · Why Waymo" accentLine="from-emerald-500/40">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-500/10 blur-3xl" />
            <Route className="h-8 w-8 text-emerald-300" />
            <h3 className="mt-6 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-slate-100 sm:text-3xl">
              Why Waymo, and why now.
            </h3>
            <div className="mt-5 max-w-3xl space-y-4 text-[15px] leading-relaxed text-slate-400">
              <p>
                At BMW a new car takes years from the first idea to the road. Waymo
                already drives people with no one behind the wheel, and now it is
                coming to Germany, to the city I live in.
              </p>
              <p>
                The first years in a new market decide which cities say yes and whether
                people trust the service. That is the phase I want to work in, from
                Munich.
              </p>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <section className="relative px-6 pb-32 pt-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 text-cyan-300">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-[0.3em]">Contact</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl pb-2"
            >
              Let&rsquo;s talk about{" "}
              <span className="text-gradient-emerald">Waymo in Germany.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ContactLink href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`} icon={<Mail className="h-4 w-4" />} primary>
                {EMAIL}
              </ContactLink>
              <ContactLink href={LINKEDIN} icon={<LinkedinIcon className="h-4 w-4" />}>
                LinkedIn
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

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-2xl font-bold text-gradient-emerald tabular-nums normal-case tracking-normal">{value}</span>
      <span>{label}</span>
    </div>
  );
}

function Section({
  eyebrow,
  accentLine,
  children,
}: {
  eyebrow: string;
  accentLine: string;
  children: ReactNode;
}) {
  return (
    <section className="relative px-6 py-24">
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

function StoryCard({ story }: { story: Story }) {
  const a = accentMap[story.accent];
  return (
    <div className="group relative h-full">
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${a.ring} opacity-0 blur transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl glass-strong p-7">
        <div className="flex items-start justify-between">
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${a.icon}`}>
            {story.icon}
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">{story.index}</span>
        </div>
        <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-slate-100">{story.title}</h3>
        <p className="mt-1 font-mono text-[12px] text-slate-400">{story.subtitle}</p>
        <p className="mt-4 flex-1 text-[14px] leading-relaxed text-slate-400">{story.description}</p>
        <p className="mt-5 border-t border-slate-800 pt-4 text-[14px] font-semibold text-emerald-200">
          {story.result}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ${a.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <div className="h-full rounded-3xl glass-strong p-7">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/30">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-100">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((e) => (
          <li key={e} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-400">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
            <span>{e}</span>
          </li>
        ))}
      </ul>
    </div>
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

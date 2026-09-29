"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Euro,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Route,
  ShieldCheck,
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

// Hero fact card. Everything here is on the CV.
const ticket: { label: string; value: string }[] = [
  { label: "Based in", value: "Munich" },
  { label: "German", value: "Native" },
  { label: "BMW Group", value: "8 years" },
  { label: "Platform rollout", value: "8 markets" },
  { label: "Own business", value: "Paying customers since Aug 2026" },
  { label: "Travel", value: "30 % is fine" },
];

// Waymo's public launch sequence for Munich (TechCrunch, 25 Aug 2026), next to where I have done
// the same kind of step. Left column is Waymo's plan, right column is my evidence.
type Step = { waymo: string; detail: string; mine: string };

const steps: Step[] = [
  {
    waymo: "Map the city",
    detail: "Trained drivers map Munich's streets before anything drives itself.",
    mine: "I start from what is really there. The BMW agent was scoped against nine legacy engineering systems as they are, not as a demo would like them.",
  },
  {
    waymo: "Test with a specialist on board",
    detail: "Autonomous driving, with a person ready to take over.",
    mine: "The agent went through its own integration stage before production. It has a dedicated role in the permission system, so every call can be checked.",
  },
  {
    waymo: "Rides for employees and invited guests",
    detail: "A closed group first.",
    mine: "The agent was built for our own engineers. I measured it with five of them, before and after: about 70 % less time to an answer on complex questions.",
  },
  {
    waymo: "Limited public service",
    detail: "A first group of riders in a defined area.",
    mine: "One platform, eight markets. I steered the migration, the specification, test, release and training in each market. Rollout cycles got 35 % shorter, with no critical failure.",
  },
  {
    waymo: "Full public service",
    detail: "Planned for the end of 2027, once the approvals are in place.",
    mine: "Getting a yes is my day job. Homologation is part of my tyre work at BMW, and the agent went live after security, compliance and the works council had agreed.",
  },
];

type Link = {
  icon: ReactNode;
  title: string;
  fact: string;
  mine: string;
};

// Three links between Waymo in Munich and my background that a generic applicant does not have.
const links: Link[] = [
  {
    icon: <BatteryCharging className="h-5 w-5" />,
    title: "Electric cars, from the tyre up",
    fact: "In Munich, Waymo will drive only battery-electric cars.",
    mine: "My team develops the tyres for the 7 Series, iX and XM. Rolling resistance affects range, and tyre noise shapes how quiet the ride feels. For a fleet that drives all day, both turn into operating cost and rider comfort.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Four approvals, one programme",
    fact: "A commercial service in Germany needs four approvals: a KBA test permit, a KBA operating licence, the state's approval of the operating area, and a licence under the passenger transport law.",
    mine: "At BMW, homologation has to move in step with tyre development, purchasing and the plant. Running approvals alongside engineering and operations is part of my job today.",
  },
  {
    icon: <Euro className="h-5 w-5" />,
    title: "A price German riders trust",
    fact: "Taxi fares in Munich are set by the city. That is the price a Waymo ride will be compared with.",
    mine: "At SyncMode I launched at €99 with discount codes. After feedback that artificial anchors cost trust in the German market, I moved to a transparent €69 direct price. I compared the price with the real alternative: an hour of couples therapy from €150.",
  },
];

// SyncMode milestones, dates from canonical-facts.md.
const route: { date: string; title: string; note: string }[] = [
  { date: "Feb 2026", title: "Founded", note: "Next to my job at BMW" },
  { date: "2 May", title: "Live at €99", note: "With discount codes" },
  { date: "24 May", title: "€69 direct price", note: "Codes and price anchor removed" },
  { date: "18 Jul", title: "€9.90 first step", note: "A cheaper way in" },
  { date: "10 Aug", title: "First paying customers", note: "I ran the sales calls" },
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
  "Exchanges in Beijing (BIT) and Edinburgh (Napier)",
  "Google Cloud Generative AI Leader · Anthropic Claude Code 101 and Building effective human-agent teams (2026)",
];

const sources = [
  { label: "Waymo: Servus München, 25 Aug 2026", href: "https://waymo.com/blog/2026/08/waymo-in-munich/" },
  { label: "TechCrunch: Waymo robotaxis are headed to Munich", href: "https://techcrunch.com/2026/08/25/waymo-robotaxis-are-headed-to-munich/" },
  { label: "electrive: Waymo plans robotaxi launch in Munich for 2027", href: "https://www.electrive.com/2026/08/26/waymo-plans-robotaxi-launch-in-munich-for-2027/" },
  { label: "electrive: Waymo also preparing Berlin, 14 Sep 2026", href: "https://www.electrive.com/2026/09/14/waymo-also-preparing-robotaxi-service-launch-in-berlin/" },
];

export function WaymoLanding() {
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
                  <span>Application · Strategy &amp; BizOps Lead, Germany</span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-balance text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl pb-3"
              >
                <span className="text-gradient-emerald pb-2">Servus, Waymo.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
              >
                You are starting in Munich, the city where I have spent eight years
                working on cars at BMW. I have taken new technology through German
                approvals, rolled out one platform to eight markets and built a business
                of my own from zero. I would like to help build yours here.
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
                  href="#plan"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:text-white"
                >
                  <Route className="h-4 w-4" />
                  <span>Your Munich plan and my experience</span>
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <TicketCard />
            </motion.div>
          </motion.div>
        </section>

        {/* PLAN */}
        <Section id="plan" eyebrow="01 · Your plan for Munich" accentLine="from-cyan-500/40">
          <SectionHeading>
            Five steps to a public service,{" "}
            <span className="text-gradient-emerald">and where I have done each kind of step.</span>
          </SectionHeading>
          <motion.p variants={fadeInUp} className="-mt-2 mb-10 max-w-3xl text-[15px] leading-relaxed text-slate-400">
            Waymo has said it will follow its usual sequence in Munich. I have not
            launched a robotaxi. I have taken technology through the same kind of
            stages inside a German company.
          </motion.p>
          <ol className="relative space-y-4">
            <div className="absolute left-[19px] top-4 bottom-4 hidden w-px border-l border-dashed border-cyan-500/40 md:block" />
            {steps.map((s, i) => (
              <motion.li key={s.waymo} variants={fadeInUp} className="relative md:pl-14">
                <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-slate-950 font-mono text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/40 md:inline-flex">
                  {i + 1}
                </span>
                <div className="grid overflow-hidden rounded-2xl glass-strong md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                  <div className="border-b border-slate-800/80 p-6 md:border-b-0 md:border-r">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                      <span className="md:hidden">Step {i + 1} · </span>Waymo
                    </div>
                    <div className="mt-1.5 text-lg font-bold text-slate-100">{s.waymo}</div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{s.detail}</p>
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">Where I did this</div>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-300">{s.mine}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </Section>

        {/* LINKS */}
        <Section eyebrow="02 · Munich specifics" accentLine="from-emerald-500/40">
          <SectionHeading>
            Three facts about Waymo in Germany,{" "}
            <span className="text-gradient-emerald">and my experience with each.</span>
          </SectionHeading>
          <div className="mt-4 grid gap-6 lg:grid-cols-3">
            {links.map((l) => (
              <motion.div key={l.title} variants={fadeInUp}>
                <div className="flex h-full flex-col rounded-3xl glass-strong p-7">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/30">
                    {l.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-slate-100">{l.title}</h3>
                  <p className="mt-3 rounded-xl bg-cyan-500/[0.07] p-3 text-[13px] leading-relaxed text-cyan-100/90 ring-1 ring-cyan-500/20">
                    {l.fact}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-slate-400">{l.mine}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ROUTE */}
        <Section eyebrow="03 · A go-to-market from zero" accentLine="from-sky-500/40">
          <SectionHeading>
            SyncMode.io, from founding{" "}
            <span className="text-gradient-emerald">to the first paying customers.</span>
          </SectionHeading>
          <motion.p variants={fadeInUp} className="-mt-2 mb-12 max-w-3xl text-[15px] leading-relaxed text-slate-400">
            A relationship profile for couples: each partner answers 80 questions in
            private, and both perspectives become one report. Offer, price, funnel,
            partners and sales calls were my decisions. Two couples coaches now
            recommend it, and about 36 % of people who reach the email gate go on to
            submit their answers.
          </motion.p>
          <motion.ol variants={fadeInUp} className="relative grid gap-6 md:grid-cols-5 md:gap-4">
            <div className="absolute left-0 right-0 top-[11px] hidden border-t-2 border-dashed border-emerald-500/30 md:block" />
            {route.map((r, i) => (
              <li key={r.date} className="relative flex gap-4 md:block">
                <span
                  className={`relative z-10 mt-0.5 inline-block h-6 w-6 shrink-0 rounded-full ring-4 ${
                    i === route.length - 1 ? "bg-emerald-400 ring-emerald-400/30" : "bg-slate-950 ring-cyan-500/40"
                  }`}
                />
                <div className="md:mt-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{r.date}</div>
                  <div className="mt-1 text-[15px] font-semibold text-slate-100">{r.title}</div>
                  <div className="mt-0.5 text-[13px] text-slate-400">{r.note}</div>
                </div>
              </li>
            ))}
          </motion.ol>
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
        <Section eyebrow="05 · Why now" accentLine="from-emerald-500/40">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                At BMW a new car takes years from the first idea to the road. In Munich,
                Waymo plans to go from the first mapping drives to a public service by
                the end of 2027.
              </p>
              <p className="text-slate-100">I want to spend those months working on it, from Munich.</p>
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
              <span className="text-gradient-emerald">Waymo in Germany.</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ContactLink href={`mailto:${EMAIL}?subject=${MAIL_SUBJECT}`} icon={<Mail className="h-4 w-4" />} primary>
                {EMAIL}
              </ContactLink>
              <ContactLink href={LINKEDIN} icon={<LinkedinIcon className="h-4 w-4" />}>
                LinkedIn
              </ContactLink>
              <ContactLink href={PORTFOLIO} icon={<Globe className="h-4 w-4" />}>
                Full portfolio
              </ContactLink>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-10 text-xs text-slate-500">
              Alexander Reinbach · Munich · +49&nbsp;170&nbsp;46&nbsp;05&nbsp;486
            </motion.p>
            <motion.div variants={fadeInUp} className="mx-auto mt-12 max-w-xl border-t border-white/5 pt-6 text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Sources on Waymo&rsquo;s plans
              </div>
              <ul className="mt-3 space-y-1.5">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="text-xs text-slate-400 underline decoration-slate-700 underline-offset-2 hover:text-slate-200">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
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
            <div className="mt-0.5 text-[13px] text-slate-400">BMW Group · Founder, SyncMode.io</div>
          </div>
        </div>
        <div className="relative border-t border-dashed border-slate-700/80">
          <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-slate-950" />
          <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-slate-950" />
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 p-6">
          {ticket.map((t) => (
            <div key={t.label} className={t.label === "Own business" ? "col-span-2" : ""}>
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

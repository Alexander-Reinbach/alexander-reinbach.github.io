"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Cpu,
  Factory,
  Globe,
  GraduationCap,
  Mail,
  Plane,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
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

type Pillar = {
  icon: ReactNode;
  title: string;
  points: string[];
  bridge: string;
  accent: "amber" | "violet";
};

const pillars: Pillar[] = [
  {
    icon: <Factory className="h-5 w-5" />,
    title: "Hardware sicher in Serie bringen",
    points: [
      "Lastenheft, Entwicklung, Zulassung, zertifizierte Serie",
      "Baureihen 7er, iX und XM in 8 Märkten",
      "Vom Engineering bis in die Werke: ERP, SCADA, PLC",
      "Prozesssicher, unter Vorschriften und Kostenzielen",
    ],
    bridge: "Das ist der Weg, den Quantum mit Vector gerade geht.",
    accent: "amber",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "KI, die im Betrieb läuft",
    points: [
      "LLM-Agenten und MCP in echten Engineering-Workflows, 600+ Nutzer",
      "Mehrere LLMs orchestriert, mit festen Leitplanken",
      "Tests und Monitoring, damit man dem System vertrauen kann",
      "Edge-Deployment und Echtzeitdaten, selbst gebaut",
    ],
    bridge: "Dasselbe Feld wie QBase und die KI an Bord der Drohnen.",
    accent: "violet",
  },
];

type Proof = {
  index: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  bridge: string;
  tags: string[];
  accent: "amber" | "violet" | "emerald" | "cyan";
};

const proofs: Proof[] = [
  {
    index: "01",
    icon: <Factory className="h-5 w-5" />,
    title: "Flaggschiff-Industrialisierung",
    subtitle: "BMW 7er, iX, XM: von der Entwicklung in die Serie",
    description:
      "Ein sechsköpfiges Team geführt und Prototypen aus der Entwicklung in die zugelassene Serie gebracht, über den ganzen Fertigungs-Stack und 8 Märkte. 35 % schnellere Zyklen, keine kritischen Ausfälle.",
    bridge: "Derselbe Schritt, den Vector vor sich hat. Nur für Autos.",
    tags: ["Industrialisierung", "Homologation", "ERP · SCADA · PLC"],
    accent: "amber",
  },
  {
    index: "02",
    icon: <Workflow className="h-5 w-5" />,
    title: "BMW GenAI: eigener MCP-Server",
    subtitle: "Applied-GenAI-Initiative im Konzern",
    description:
      "Einen eigenen MCP-Server (M2M + OAuth) im Konzern konzipiert und ausgerollt. Er verbindet aktuelle KI mit bestehenden APIs, Altsystemen und Sicherheitsgrenzen. Heute 600+ tägliche Nutzer, mit Rückhalt aus dem Management.",
    bridge: "KI, die in einer echten, abgesicherten Umgebung läuft. Nicht nur in der Demo.",
    tags: ["MCP", "OAuth · M2M", "Enterprise RAG"],
    accent: "violet",
  },
  {
    index: "03",
    icon: <Radar className="h-5 w-5" />,
    title: "wohnung-minga",
    subtitle: "Edge-Deployment, privat gebaut",
    description:
      "Eine Suche, die rund um die Uhr auf einem Raspberry Pi läuft: zieht aus über 20 Quellen in Echtzeit, bewertet Treffer mit einem LLM und meldet sich über Telegram. Datenverarbeitung im Dauerbetrieb, direkt auf dem Gerät.",
    bridge: "So ähnlich arbeitet eine Drohne im Feld: Daten in Echtzeit, direkt an Bord.",
    tags: ["Edge", "Echtzeit", "LLM-Scoring"],
    accent: "emerald",
  },
  {
    index: "04",
    icon: <Cpu className="h-5 w-5" />,
    title: "trader-bot-aktien",
    subtitle: "Multi-Agent-System, privat gebaut",
    description:
      "Mehrere Agenten teilen sich die Arbeit: Recherche, Signale, Ausführung, alles über laufende Datenströme. Ein Backtesting-Aufbau prüft jede Idee gegen historische Daten, bevor sie zählt.",
    bridge: "Aufgebaut wie ein Autonomie-Stack: getrennte Agenten, abgesichert durch Tests.",
    tags: ["Multi-Agent", "Autonomie", "Backtesting"],
    accent: "cyan",
  },
];

type Station = {
  range: string;
  title: string;
  org: string;
  note?: string;
  current?: boolean;
  tone: "violet" | "emerald" | "cyan" | "amber" | "slate";
};

const timeline: Station[] = [
  {
    range: "03/2023 — heute",
    title: "Teamlead Simultaneous Engineering (BEV & ICE) & Applied GenAI Lead",
    org: "BMW Group · München",
    note: "Sechsköpfiges Team, Baureihen 7er, iX und XM von der Entwicklung in die zugelassene Serie. Daneben die Leitung der Applied-GenAI-Initiative.",
    current: true,
    tone: "violet",
  },
  {
    range: "01/2026 — heute",
    title: "Gründer einer GenAI-Sandbox",
    org: "SyncMode · München / Remote",
    note: "Produktionsnahe agentische Workflows allein und von Grund auf gebaut.",
    current: true,
    tone: "emerald",
  },
  {
    range: "05/2020 — 03/2023",
    title: "Team Product Owner (Teamlead), Produktstammdaten",
    org: "BMW Group · München",
    note: "Software-Rollouts in 8 Märkten. 35 % schnellere Zyklen, keine kritischen Ausfälle.",
    tone: "violet",
  },
  {
    range: "09/2018 — 09/2019",
    title: "Project Specialist, Entwicklung",
    org: "BMW Group · München",
    note: "Produktstruktur und Stammdaten in der PDM-Landschaft. Daneben das BMW-Accelerator-Programm (2019).",
    tone: "violet",
  },
  {
    range: "09/2017 — 03/2018",
    title: "Associate Consultant, Logistics & Start-Ups",
    org: "Simon-Kucher & Partners · München",
    note: "Preisstrategie und Empfehlungen fürs Top-Management, US-Logistikmarkt.",
    tone: "cyan",
  },
  {
    range: "04/2017 — 08/2017",
    title: "Werkstudent, Strategy & Analytics",
    org: "Amazon · München",
    note: "Seller-Onboarding europäischer Marketplace.",
    tone: "amber",
  },
];

const certs = [
  "Anthropic — Claude Code 101 (2026)",
  "Google — Generative AI Leader (2026, gültig bis 2029)",
  "DeepLearning.AI — Generative AI for Everyone, A. Ng (2025)",
  "Stanford — Machine Learning, A. Ng (2020)",
];

const education = [
  "M.Sc. Management & Technology — TUM (1,7, Thesis 1,0)",
  "Auslandssemester M.Sc. Industrial Engineering — Beijing Institute of Technology",
  "B.Sc. Wirtschaftsingenieurwesen — Hochschule Karlsruhe",
  "Auslandssemester — Edinburgh Napier University (DAAD-PROMOS)",
];

const toneDot: Record<Station["tone"], string> = {
  violet: "bg-violet-400 ring-violet-400/25",
  emerald: "bg-emerald-400 ring-emerald-400/25",
  cyan: "bg-cyan-400 ring-cyan-400/25",
  amber: "bg-amber-400 ring-amber-400/25",
  slate: "bg-slate-400 ring-slate-400/25",
};

const accentMap = {
  amber: {
    ring: "from-amber-500/40 via-orange-500/20 to-transparent",
    chip: "bg-amber-500/10 text-amber-200 ring-amber-500/30",
    icon: "bg-amber-500/15 text-amber-200 ring-amber-500/30",
  },
  violet: {
    ring: "from-violet-500/40 via-indigo-500/20 to-transparent",
    chip: "bg-violet-500/10 text-violet-200 ring-violet-500/30",
    icon: "bg-violet-500/15 text-violet-200 ring-violet-500/30",
  },
  emerald: {
    ring: "from-emerald-500/40 via-cyan-500/20 to-transparent",
    chip: "bg-emerald-500/10 text-emerald-200 ring-emerald-500/30",
    icon: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30",
  },
  cyan: {
    ring: "from-cyan-500/40 via-sky-500/20 to-transparent",
    chip: "bg-cyan-500/10 text-cyan-200 ring-cyan-500/30",
    icon: "bg-cyan-500/15 text-cyan-200 ring-cyan-500/30",
  },
} as const;

export function QuantumLanding() {
  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
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
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-500/40 via-cyan-500/30 to-emerald-500/30 blur-sm" />
                <img
                  src={withBase("/alex.jpg")}
                  alt="Alexander Reinbach"
                  className="relative h-28 w-28 rounded-full object-cover ring-2 ring-white/10"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <Plane className="h-3 w-3 text-cyan-300" strokeWidth={2.5} />
                <span>Initiativbewerbung · Quantum Systems · München</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-balance text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl pb-4"
            >
              <span className="block text-slate-100">Hardware in Serie.</span>
              <span className="block text-gradient pb-3">Und die KI, die darauf läuft.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-slate-400 sm:text-xl"
            >
              Ich bin seit acht Jahren bei BMW. Heute bringe ich dort
              sicherheitskritische Hardware vom Prototyp in die zugelassene Serie und
              leite die{" "}
              <span className="text-slate-200">Applied-GenAI-Initiative</span>. Beides
              in einer Person ist selten. Und genau das ist der Schritt, den Quantum
              gerade vor sich hat.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
            >
              <a
                href={`mailto:${EMAIL}?subject=Initiativbewerbung%20Quantum%20Systems`}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-xl hover:shadow-violet-500/40 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Gespräch vereinbaren</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={PORTFOLIO}
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:text-white"
              >
                <Globe className="h-4 w-4" />
                <span>Volles Portfolio</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-20 grid grid-cols-3 gap-x-8 gap-y-6 text-xs uppercase tracking-[0.18em] text-slate-500 sm:flex sm:items-center sm:gap-12"
            >
              <Stat value="600+" label="Nutzer · MCP-Server" />
              <div className="hidden h-10 w-px bg-slate-800 sm:block" />
              <Stat value="8" label="Märkte in Serie" />
              <div className="hidden h-10 w-px bg-slate-800 sm:block" />
              <Stat value="7+ Jahre" label="bei BMW" />
            </motion.div>
          </motion.div>
        </section>

        {/* PILLARS */}
        <Section eyebrow="01 — Warum es passt" accentLine="from-cyan-500/40">
          <SectionHeading>
            Quantum muss gerade zwei Welten{" "}
            <span className="text-gradient">zusammenbringen.</span>
          </SectionHeading>
          <p className="mb-14 max-w-2xl text-[15px] leading-relaxed text-slate-400">
            Eine KI-Drohne als Prototyp ist das eine. Daraus ein zugelassenes
            Serienprodukt zu machen, mit der KI an Bord, ist etwas ganz anderes. Daran
            arbeite ich seit Jahren.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <motion.div key={p.title} variants={fadeInUp}>
                <PillarCard pillar={p} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* PROOF */}
        <Section eyebrow="02 — Belege" accentLine="from-violet-500/40">
          <SectionHeading>
            Vier Dinge, die ich gebaut habe.{" "}
            <span className="text-gradient-emerald">Hardware und Software.</span>
          </SectionHeading>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {proofs.map((proof) => (
              <motion.div key={proof.index} variants={fadeInUp}>
                <ProofCard proof={proof} />
              </motion.div>
            ))}
          </div>
        </Section>

        {/* WERDEGANG */}
        <Section eyebrow="03 — Werdegang" accentLine="from-violet-500/40">
          <SectionHeading>
            Mein Weg zwischen{" "}
            <span className="text-gradient">Strategie und Technik.</span>
          </SectionHeading>
          <div className="relative mt-4">
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-slate-700/40 to-transparent" />
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
                          Aktuell
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold leading-snug text-slate-100">
                      {s.title}
                    </h3>
                    <div className="text-sm text-violet-300">{s.org}</div>
                    {s.note && (
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{s.note}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </Section>

        {/* QUALIFIKATIONEN */}
        <Section eyebrow="04 — Qualifikationen" accentLine="from-cyan-500/40">
          <SectionHeading>
            Zu Hause in{" "}
            <span className="text-gradient-emerald">KI und Engineering.</span>
          </SectionHeading>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <div className="h-full rounded-3xl glass-strong p-7">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-500/30">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-100">Zertifikate</h3>
                <ul className="mt-4 space-y-2.5">
                  {certs.map((c) => (
                    <li key={c} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="h-full rounded-3xl glass-strong p-7">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/30">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-100">Ausbildung</h3>
                <ul className="mt-4 space-y-2.5">
                  {education.map((e) => (
                    <li key={e} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* CONVICTION */}
        <Section eyebrow="05 — Warum Quantum" accentLine="from-emerald-500/40">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-1/3 translate-x-1/3 rounded-full bg-cyan-500/10 blur-3xl" />
            <ShieldCheck className="h-8 w-8 text-cyan-300" />
            <h3 className="mt-6 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-slate-100 sm:text-3xl">
              Solche Technologie sollte Europa selbst bauen.
            </h3>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-slate-400">
              Quantum zeigt, dass ein europäisches Unternehmen sicherheitskritische
              KI-Systeme wirklich in Stückzahl bauen kann. Den Weg zur Serienreife kenne
              ich aus der Industrie, die KI-Seite aus der eigenen Umsetzung. Und München
              ist meine Heimat. Da würde ich gern mitarbeiten.
            </p>
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
              <span className="font-mono text-xs uppercase tracking-[0.3em]">Direkter Draht</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl pb-2"
            >
              Sprechen wir darüber, wo ich bei{" "}
              <span className="text-gradient">Quantum</span> anfangen könnte.
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <ContactLink href={`mailto:${EMAIL}?subject=Initiativbewerbung%20Quantum%20Systems`} icon={<Mail className="h-4 w-4" />} primary>
                {EMAIL}
              </ContactLink>
              <ContactLink href={LINKEDIN} icon={<LinkedinIcon className="h-4 w-4" />}>
                LinkedIn
              </ContactLink>
              <ContactLink href={GITHUB} icon={<GithubIcon className="h-4 w-4" />}>
                GitHub
              </ContactLink>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-10 text-xs text-slate-600">
              Alexander Reinbach · München · +49&nbsp;170&nbsp;46&nbsp;05&nbsp;486
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

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-2xl font-bold text-gradient tabular-nums">{value}</span>
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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            {eyebrow}
          </span>
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

function PillarCard({ pillar }: { pillar: Pillar }) {
  const a = accentMap[pillar.accent];
  return (
    <div className="group relative h-full">
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${a.ring} opacity-0 blur transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col rounded-3xl glass-strong p-8">
        <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${a.icon}`}>
          {pillar.icon}
        </div>
        <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-slate-100">
          {pillar.title}
        </h3>
        <ul className="mt-5 flex flex-1 flex-col gap-2.5">
          {pillar.points.map((pt) => (
            <li key={pt} className="flex gap-2.5 text-[14px] leading-relaxed text-slate-400">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-t border-slate-800 pt-4 text-[13px] font-medium text-cyan-200/90">
          {pillar.bridge}
        </p>
      </div>
    </div>
  );
}

function ProofCard({ proof }: { proof: Proof }) {
  const a = accentMap[proof.accent];
  return (
    <div className="group relative h-full">
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${a.ring} opacity-0 blur transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl glass-strong p-7">
        <div className="flex items-start justify-between">
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${a.icon}`}>
            {proof.icon}
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
            {proof.index}
          </span>
        </div>
        <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-slate-100">
          {proof.title}
        </h3>
        <p className="mt-1 font-mono text-[13px] text-slate-400">{proof.subtitle}</p>
        <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
          {proof.description}
        </p>
        <p className="mt-4 text-[13px] font-medium text-cyan-200/90">{proof.bridge}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {proof.tags.map((tag) => (
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
          ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-500/30"
          : "glass text-slate-200 hover:text-white"
      }`}
    >
      {icon}
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

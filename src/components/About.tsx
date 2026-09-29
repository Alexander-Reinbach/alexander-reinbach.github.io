"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { withBase } from "@/lib/path";

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            01 · About
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-10 flex items-center gap-5"
        >
          <div className="relative shrink-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-cyan-500/40 via-sky-500/30 to-emerald-500/30 blur-sm" />
            <img
              src={withBase("/alex.jpg")}
              alt="Alex Reinbach"
              className="relative h-24 w-24 rounded-full object-cover ring-2 ring-white/10 sm:h-28 sm:w-28"
            />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-slate-100 sm:text-lg">
              Alexander Reinbach
            </div>
            <div className="mt-1 text-sm text-slate-400">
              Engineering Team Lead &amp; Applied GenAI Lead, BMW Group · Founder, SyncMode.io
            </div>
            <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Munich · German native · English C1
            </div>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-12 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          New technology gets stuck
          <br />
          <span className="text-gradient-emerald">on access and approval.</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="grid gap-12 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              At BMW I spend half my time leading a team of six engineers who develop
              the tyres for the 7 Series, iX and XM, together with purchasing, the
              plant, sales and quality. In the other half I lead GenAI adoption for my
              area. I train engineers on working with models, choose models on measured
              data, and present rollout, model choice and token spend up to executive
              level.
            </p>
            <p>
              The best-known result is an internal AI agent. It reaches nine legacy
              engineering systems through a custom MCP server behind an OAuth and
              Apigee gateway, and it has{" "}
              <span className="text-white">its own role in the permission system</span>.
              That role is what let security, compliance and the works council say
              yes. About 500 engineers use it every week.
            </p>
            <p>
              Before that I spent four and a half years in product master data and
              led a platform rollout into eight markets. I started in strategy work at
              Amazon and Simon-Kucher in 2017.
            </p>
            <p>
              In February 2026 I founded{" "}
              <span className="text-emerald-300">SyncMode.io</span>, a relationship
              profile for couples. I built it by directing coding agents, and I sell it
              myself. The first paying customers came in August.
            </p>
          </div>

          <div className="space-y-4">
            <PrincipleCard
              index="01"
              title="Measure instead of estimate"
              body="Models go through the same test for accuracy and cost. Adoption means weekly active users, not sign-ups."
            />
            <PrincipleCard
              index="02"
              title="Approval is part of the design"
              body="Whether people can see what a system does decides whether it goes live."
            />
            <PrincipleCard
              index="03"
              title="One plan, many audiences"
              body="I explain the same plan to engineers, a works council and executives, each at their own depth."
            />
            <PrincipleCard
              index="04"
              title="Numbers with their method"
              body="About 70 % less time to an answer on complex questions, measured with five engineers. I always say how."
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PrincipleCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group relative rounded-2xl glass p-5 transition-colors hover:bg-white/[0.04]"
    >
      <div className="flex items-start gap-4">
        <span className="font-mono text-xs text-cyan-300/80">{index}</span>
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-slate-100">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{body}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
      </div>
    </motion.div>
  );
}

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
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet-300">
            01 — The Expedition
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-500/40 to-transparent" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-10 flex items-center gap-5"
        >
          <div className="relative shrink-0">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-violet-500/40 via-cyan-500/30 to-emerald-500/30 blur-sm" />
            <img
              src={withBase("/alex.jpg")}
              alt="Alex Reinbach"
              className="relative h-24 w-24 rounded-full object-cover ring-2 ring-white/10 sm:h-28 sm:w-28"
            />
          </div>
          <div className="leading-tight">
            <div className="text-base font-semibold text-slate-100 sm:text-lg">
              Alex Reinbach
            </div>
            <div className="mt-1 text-sm text-slate-400">
              Applied GenAI Lead · BMW Group · Founder · SyncMode
            </div>
            <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Munich · Edinburgh · Beijing
            </div>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-12 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Most teams ship AI <span className="text-slate-500">demos.</span>
          <br />
          <span className="text-gradient">I ship Applied AI in production.</span>
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          className="grid gap-12 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              The hardest part of enterprise AI isn&apos;t the model.{" "}
              <span className="text-white">
                It&apos;s the connective tissue — APIs, legacy data silos,
                security perimeters, evaluation pipelines, stakeholder trust —
                that turns a rapid prototype into a production-grade agentic
                workflow.
              </span>{" "}
              That&apos;s the work I do.
            </p>
            <p>
              By day, I lead Applied GenAI and Simultaneous Engineering at{" "}
              <span className="text-violet-300">BMW Group</span>, bridging the gap
              between high-level executive strategy and raw engineering. Earlier
              chapters took me through{" "}
              <span className="text-amber-300">Amazon</span> (where Customer
              Obsession became muscle memory) and academic stops in{" "}
              <span className="text-emerald-300">
                Munich, Edinburgh, and Beijing
              </span>{" "}
              — the kind of route that teaches you to read a room in three
              languages before you optimize it. By night, I ship code in
              production independently, pushing the boundaries of{" "}
              <span className="text-cyan-300">autonomous multi-agent systems</span>{" "}
              and behavioral analytics.
            </p>
            <p>
              My moat is the bridge nobody wants to build:{" "}
              <span className="text-white">
                frontier AI on one side, certified mass production on the other.
              </span>{" "}
              I&apos;ve translated R&amp;D prototypes into series production for the
              BMW 7 Series, iX, and XM — across 8 markets, down the full digital
              factory stack (ERP → SCADA → PLCs). Then I write the agent that makes
              that whole stack queryable in natural language.
            </p>
            <p className="text-slate-400">
              I thrive on &quot;blank-canvas&quot; challenges and building tech that
              survives a Monday-morning prod incident.
            </p>
            <p className="text-slate-400">
              Equally at home in a customer discovery workshop and a 3 a.m.
              on-call rotation — the kind of full-stack reach that turns
              enterprise pilots into production deployments.
            </p>
          </div>

          <div className="space-y-4">
            <PrincipleCard
              index="01"
              title="Production over prototype"
              body="Demos die in PowerPoint. I ship what survives a Monday-morning prod incident."
            />
            <PrincipleCard
              index="02"
              title="Strategy meets stack-trace"
              body="C-suite alignment and OAuth flows belong in the same conversation."
            />
            <PrincipleCard
              index="03"
              title="Eliminate, don't optimize"
              body="The fastest pipeline is the one that doesn't need to run."
            />
            <PrincipleCard
              index="04"
              title="From SCADA to LLM"
              body="The same calm rigor that ships a homologated vehicle also ships an agent."
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
        <span className="font-mono text-xs text-violet-300/80">{index}</span>
        <div className="flex-1">
          <h3 className="mb-1 text-sm font-semibold text-slate-100">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{body}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
      </div>
    </motion.div>
  );
}

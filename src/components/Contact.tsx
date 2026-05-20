"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const EMAIL = "alex.reinbach@online.de";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.73V1.73C24 .78 23.21 0 22.23 0z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55 4.56-1.53 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const email = encodeURIComponent(String(data.get("email") || ""));
    const message = encodeURIComponent(String(data.get("message") || ""));
    const subject = `Portfolio inquiry — ${name || "Recruiter"}`;
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
            06 — Direct Line
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
        >
          Let&apos;s build the
          <br />
          <span className="text-gradient">next OS together.</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mb-16 max-w-2xl text-lg text-slate-400"
        >
          Hiring a Head of AI, Senior Architect, or founding engineer for an agentic
          systems play? Drop a line — I reply within 24h.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl glass-strong p-8"
          >
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="Jane Recruiter"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              required
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="The role, the team, the stakes…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none ring-violet-500/40 transition-all placeholder:text-slate-600 focus:border-violet-500/40 focus:bg-white/[0.05] focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-xl hover:shadow-violet-500/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">
                {submitted ? "Mail client opened ✓" : "Send Message"}
              </span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </motion.form>

          <motion.div variants={fadeInUp} className="space-y-4">
            <button
              onClick={handleCopy}
              className="group flex w-full items-center justify-between rounded-2xl glass p-5 text-left transition-all hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200 ring-1 ring-violet-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </div>
                  <div className="text-sm font-medium text-slate-100">{EMAIL}</div>
                </div>
              </div>
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4 text-slate-500 transition-colors group-hover:text-slate-200" />
              )}
            </button>

            <SocialLink
              icon={<LinkedinIcon className="h-5 w-5" />}
              label="LinkedIn"
              handle="alexander-reinbach"
              href="https://www.linkedin.com/in/alexander-reinbach/"
              tone="cyan"
            />
            <SocialLink
              icon={<GithubIcon className="h-5 w-5" />}
              label="GitHub"
              handle="@alexreinbach"
              href="https://github.com/"
              tone="emerald"
            />

            <div className="rounded-2xl glass p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Response time
              </div>
              <div className="mt-1 text-sm font-medium text-slate-100">
                Within 24h · Mon–Fri
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Currently accepting intro calls
              </div>
            </div>
          </motion.div>
        </div>

        <motion.footer
          variants={fadeInUp}
          className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row"
        >
          <div className="font-mono">
            © {new Date().getFullYear()} Alex Reinbach · Built with Next.js, Tailwind & Framer Motion
          </div>
          <div className="font-mono">Munich · EU</div>
        </motion.footer>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none ring-violet-500/40 transition-all placeholder:text-slate-600 focus:border-violet-500/40 focus:bg-white/[0.05] focus:ring-2"
      />
    </div>
  );
}

function SocialLink({
  icon,
  label,
  handle,
  href,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  handle: string;
  href: string;
  tone: "cyan" | "emerald";
}) {
  const toneClass =
    tone === "cyan"
      ? "bg-cyan-500/15 text-cyan-200 ring-cyan-500/30"
      : "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-between rounded-2xl glass p-5 transition-all hover:bg-white/[0.05]"
    >
      <div className="flex items-center gap-4">
        <div
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${toneClass}`}
        >
          {icon}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
            {label}
          </div>
          <div className="text-sm font-medium text-slate-100">{handle}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-200" />
    </a>
  );
}

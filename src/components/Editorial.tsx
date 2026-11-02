import { Bricolage_Grotesque, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { withBase } from "@/lib/path";
import { MunichClock } from "./MunichClock";
import s from "./Editorial.module.css";

// Homepage, redesigned 02.11.2026: an annotated document with a highlighter instead of a dark SaaS page.
// Every figure carries a footnote with its method. Facts: ../context/canonical-facts.md

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const steps = [
  ["Discovery", "Sit with the people who will use it. Find where they lose the most time."],
  ["Scope", "Cut it to what the existing systems can carry. Write the requirements."],
  ["Build", "Design the architecture, direct coding agents, test the results."],
  ["Approval", "Security, compliance and the works council see exactly what it may access."],
  ["Rollout", "From a test environment to live use, in stages."],
  ["Measure", "Weekly users and time to answer. Every number with its method."],
];

type Case = {
  title: string;
  meta: string;
  text: string[];
  facts: [string, string][];
};

const cases: Case[] = [
  {
    title: "An assistant on legacy engineering data",
    meta: "BMW Group · in production",
    text: [
      "Our engineers lost the most time searching for answers in legacy engineering systems. I scoped an assistant with them and built it with coding agents: an MCP server on the existing APIs of our engineering system and a chat assistant in its frontend. It covers tyres, wheels, weights and the country-specific offer per vehicle type.",
      "The MCP server has its own role in the permission system. Security, compliance and the works council could see exactly what it may access, and they approved it. Getting that approval took longer than building it.",
    ],
    facts: [
      ["Users", "About 1,500 registered, about 500 every week"],
      ["Build", "About ten weeks, with coding agents"],
      ["Access", "OAuth and M2M behind an API gateway"],
      ["Model", "GPT, Gemini and Claude through the same tests for accuracy, robustness and token use"],
    ],
  },
  {
    title: "SyncMode.io",
    meta: "Founder · 2026",
    text: [
      "A relationship profile for couples. Both partners answer on their own and get one shared report. Plain Python code calculates the scores, so the same answers always give the same result. Four LLM calls write the text in parallel, and a regression suite runs whenever the prompts change.",
      "When the AI calls fail, the report stops instead of quietly sending less. I design the architecture, write the spec and direct coding agents, then test the results and run it in production. I sell it myself, to couples and to coaches as partners.",
    ],
    facts: [
      ["Timeline", "Idea in February, live in May, first paying customers in August 2026"],
      ["Stack", "Python, Postgres, Redis, Docker Compose, Cloudflare, Stripe"],
      ["Sales", "Couples directly, two couples coaches as partners"],
    ],
  },
  {
    title: "One platform, eight markets",
    meta: "BMW Group · 2018–2023",
    text: [
      "I led the master data sub-project inside BMW's integrated PDM initiative: governance, data quality and the data interfaces to other business units. For the rollout to eight markets I steered the migration out of the legacy systems, wrote the specification for IT, owned test and release, and trained the users.",
    ],
    facts: [
      ["Result", "Rollout cycles 35 % shorter, no critical failure"],
      ["Role", "Project lead, then team product owner"],
    ],
  },
];

const principles = [
  ["Measure instead of estimate", "Models go through the same test for accuracy and cost. Adoption means weekly active users, not sign-ups."],
  ["Approval is part of the design", "Whether people can see what a system does decides whether it goes live."],
  ["One plan, many audiences", "I explain the same plan to engineers, a works council and executives, each at their own depth."],
  ["Numbers with their method", "Every figure on this page has a footnote. I say how it was measured, also when the sample is small."],
];

const career: [string, string, string | null, string][] = [
  ["03/2023 – today", "Team Lead, Simultaneous Engineering (Vehicle Dynamics) & Applied GenAI Lead", "Half the role is a team of six vehicle dynamics engineers for the 7 Series, iX and XM. The other half is GenAI in my area.", "BMW Group, Munich"],
  ["02/2026 – today", "Founder", "A relationship profile for couples, built and sold myself.", "SyncMode.io, Munich"],
  ["09/2018 – 03/2023", "Specialist, Project Lead, Team Product Owner, Master Data", "Master data sub-project in the integrated PDM initiative, rollout to eight markets.", "BMW Group, Munich"],
  ["2019", "BMW Accelerator and THINK.MAKE.START.", null, "BMW Group, UnternehmerTUM"],
  ["10/2017 – 06/2018", "Internship and master's thesis", "Grade 1.0", "BMW Group, Munich"],
  ["09/2017 – 03/2018", "Associate Consultant (working student)", "Pricing and strategy for U.S. logistics clients.", "Simon-Kucher & Partners"],
  ["04/2017 – 08/2017", "Student Intern, Strategy & Analytics", null, "Amazon, Munich"],
];

export function Editorial() {
  return (
    <div className={`${s.page} ${display.variable} ${grotesk.variable} ${mono.variable}`}>
      <header className={s.head}>
        <div className={`${s.wrap} ${s.headInner}`}>
          <a href="#top" className={s.headName}>Alexander Reinbach</a>
          <nav className={s.headNav} aria-label="Sections">
            <a href="#method">Method</a>
            <a href="#work">Work</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className={s.clock}><MunichClock /></span>
        </div>
      </header>

      <main id="top" className={s.wrap}>
        <section className={s.opening}>
          <div className={`${s.kicker} ${s.rise}`}>
            <span>Applied AI · Enterprise deployment</span>
            <span>BMW Group · SyncMode.io</span>
            <span>Munich, 48.14° N</span>
          </div>
          <h1 className={`${s.display} ${s.rise2}`}>
            I bring new technology
            <span className={s.displayIndent}>into <em>daily use.</em></span>
          </h1>
          <div className={`${s.openingGrid} ${s.rise3}`}>
            <figure className={s.portrait}>
              <div className={s.portraitFrame}>
                <img src={withBase("/alex.jpg")} alt="Portrait of Alexander Reinbach" />
              </div>
              <figcaption>Fig. 1 · The author, Munich</figcaption>
            </figure>
            <p className={s.lede}>
              Eight years at BMW in Munich. I lead a team of six vehicle dynamics engineers and the
              GenAI work in my area. In 2026 I founded{" "}
              <a href="https://syncmode.io" target="_blank" rel="noreferrer">SyncMode.io</a> and took
              it to its first paying customers.
            </p>
          </div>
        </section>

        <section className={s.figures} aria-label="Figures">
          <div className={s.figure}>
            <div className={s.figureNum}>~500<sup><a href="#n1" className={s.ref}>1</a></sup></div>
            <p className={s.figureLabel}>engineers use the AI assistant I built every week</p>
          </div>
          <div className={s.figure}>
            <div className={s.figureNum}>8<sup><a href="#n2" className={s.ref}>2</a></sup></div>
            <p className={s.figureLabel}>markets in one platform rollout</p>
          </div>
          <div className={s.figure}>
            <div className={s.figureNum}>~70 %<sup><a href="#n3" className={s.ref}>3</a></sup></div>
            <p className={s.figureLabel}>faster answers to complex engineering questions</p>
          </div>
        </section>

        <section id="method" className={s.section}>
          <div className={s.sectionLabel}><b>§ 1</b>Method</div>
          <div className={s.sectionBody}>
            <h2 className={s.h2}>New technology gets stuck on <em>access and approval.</em></h2>
            <ol className={s.steps}>
              {steps.map(([name, text], i) => (
                <li key={name}>
                  <span className={s.stepNo}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={s.stepName}>{name}</span>
                  <span className={s.stepText}>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className={s.section}>
          <div className={s.sectionLabel}><b>§ 2</b>Work</div>
          <div className={s.sectionBody}>
            <h2 className={s.h2}>Three projects, <em>start to finish.</em></h2>
            <div className={s.cases}>
              {cases.map((c, i) => (
                <details key={c.title} className={s.case} open={i === 0}>
                  <summary>
                    <span className={s.caseNo}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={s.caseTitle}>{c.title}</span>
                    <span className={s.caseMeta}>{c.meta}</span>
                    <span className={s.caseToggle} aria-hidden>+</span>
                  </summary>
                  <div className={s.caseBody}>
                    <p>{c.text.map((t, j) => <span key={j} style={{ display: "block", marginTop: j ? 12 : 0 }}>{t}</span>)}</p>
                    <dl className={s.caseFacts}>
                      {c.facts.map(([k, v]) => (
                        <div key={k} style={{ display: "contents" }}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionLabel}><b>§ 3</b>Principles</div>
          <div className={s.sectionBody}>
            <h2 className={s.h2}>How I <em>work.</em></h2>
            <ol className={s.principles}>
              {principles.map(([title, text]) => (
                <li key={title}>
                  <span className={s.principleTitle}>{title}</span>
                  <span className={s.principleText}>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="career" className={s.section}>
          <div className={s.sectionLabel}><b>§ 4</b>Career</div>
          <div className={s.sectionBody}>
            <h2 className={s.h2}>Where I have <em>worked.</em></h2>
            <table className={s.career}>
              <thead>
                <tr><th>When</th><th>Role</th><th>Where</th></tr>
              </thead>
              <tbody>
                {career.map(([when, role, note, where]) => (
                  <tr key={when + role}>
                    <td>{when}</td>
                    <td>{role}{note && <span className={s.note}>{note}</span>}</td>
                    <td>{where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.sectionLabel}><b>§ 5</b>Education</div>
          <div className={s.sectionBody}>
            <div className={s.twoCol}>
              <div>
                <h3 className={s.subhead}>Studies</h3>
                <ul className={s.plain}>
                  <li>M.Sc. Management &amp; Technology<span>Technical University of Munich, 2015–2018</span></li>
                  <li>Exchange year, Industrial Engineering<span>Beijing Institute of Technology, 2016–2017</span></li>
                  <li>B.Sc. Industrial Engineering<span>Karlsruhe University of Applied Sciences, 2010–2015</span></li>
                  <li>Semester abroad<span>Edinburgh Napier University, 2013</span></li>
                </ul>
              </div>
              <div>
                <h3 className={s.subhead}>Certificates</h3>
                <ul className={s.plain}>
                  <li>Claude Code 101 and Building effective human-agent teams<span>Anthropic, 2026</span></li>
                  <li>Generative AI Leader<span>Google Cloud, 2026</span></li>
                  <li>Generative AI for Everyone<span>DeepLearning.AI, 2025</span></li>
                  <li>Machine Learning<span>Stanford, Andrew Ng, 2020</span></li>
                </ul>
              </div>
            </div>
            <p className={s.tools}>
              <b>Tools I use.</b> MCP and tool calling, Claude, Gemini and GPT, model evaluation,
              prompt-injection tests, Claude Code and Codex every day, Python and TypeScript built with
              coding agents, Postgres, Redis, Docker Compose, Cloudflare, OAuth and M2M.
            </p>
          </div>
        </section>

        <section id="contact" className={s.contact}>
          <p className={s.contactLine}>
            Write to me.<br />
            <a className={s.mail} href="mailto:alex.reinbach@online.de">alex.reinbach@online.de</a>
          </p>
          <div className={s.contactLinks}>
            <a href="https://www.linkedin.com/in/alexander-r-929814144/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/Alexander-Reinbach" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://syncmode.io" target="_blank" rel="noreferrer">SyncMode.io ↗</a>
          </div>
        </section>

        <ol className={s.notes} aria-label="Notes">
          <li id="n1"><b>1</b>About 1,500 engineers are registered. I count weekly active users, not sign-ups.</li>
          <li id="n2"><b>2</b>Product master data at BMW, 2018 to 2023. Rollout cycles were 35 % shorter.</li>
          <li id="n3"><b>3</b>Before-and-after test with five engineers, search against the assistant. A small sample, so I always name it.</li>
        </ol>

        <footer className={s.colophon}>
          <span>Set in Bricolage Grotesque, Schibsted Grotesk and JetBrains Mono</span>
          <span>Built with coding agents</span>
          <span>© 2026 Alexander Reinbach</span>
        </footer>
      </main>
    </div>
  );
}

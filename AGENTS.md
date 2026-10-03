<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — alex reinbach

## Was das ist

Persönliches Portfolio für Bewerbungen bei US-Tech-Hyperscalern (Google, Microsoft, Salesforce, Databricks, MongoDB, Anthropic). Zielrollen: **AI Solution Architect** und **Forward Deployed Engineer**.

**Eigenständiges Nebenprojekt** — liegt nur deshalb in `~/Desktop/Bewerbungen/portfolio/`, weil es als Subpath unter `syncmode.io/AlexanderReinbach` ausgeliefert wird. Hat aber nichts mit dem SyncMode-Produkt zu tun. Keine Cross-Contamination mit SyncMode-Docs/Memory.

## Stack

- **Next.js 16** (Turbopack) mit `output: "export"` → statisches `out/`
- **Tailwind v4** + `@tailwindcss/postcss`
- **framer-motion 12** für Scroll-Dissolve, Counter, Parallax, ScrollProgress
- **lucide-react** für Icons
- `trailingSlash: true` + `basePath` aus `NEXT_PUBLIC_BASE_PATH` env
- `images.unoptimized: true` (kein Vercel-Optimizer im Static Export)

## Build

```bash
cd ~/Desktop/Bewerbungen/portfolio
NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach npm run build
```

Output: `./out/` mit `/AlexanderReinbach/...` baked in alle Asset-URLs.

## Deploy

```bash
# rsynct out/ direkt in den SyncMode-VPS-Container-Volume-Source
rsync -a --delete out/ deploy@159.69.39.142:~/projects/survey-system/portfolio-static/
```

- VPS-Pfad ist Bind-Mount-Source für den `survey-nginx`-Container (Mount: `./portfolio-static:/srv/portfolio:ro`)
- **Kein nginx-Reload nötig**, solange weder die Site-Konfig (in SyncMode-Repo, `nginx.conf`) noch die Mount-Definition (in SyncMode-Repo, `docker-compose.yml`) geändert werden — der `:ro` Bind-Mount sieht neue Dateien sofort.
- Verify: `curl -sI https://syncmode.io/AlexanderReinbach/`

## Site-Struktur (`src/components/`)

**Neutral-Umbau 29.09.2026:** Startseite passt jetzt für FDE- und BizOps-Bewerbungen (BMW + GenAI-Einführung + Gründer), Farbton "calm" (cyan/emerald statt violett). Alle Overclaims entfernt (600+ Daily Users, RAG, LangChain, Vector DBs, ERP/SCADA/PLC, Vertex AI, GCP, "by night I ship code"). Wahrheitsquelle: `../context/canonical-facts.md`.

- `Hero.tsx` — full-screen mit Scroll-Dissolve, Counter-Stats (500 Weekly Users · 8 Märkte · 8 Jahre BMW), 1 CTA „Get in touch"
- `About.tsx` — Foto + Story: 50/50-Rolle BMW, Agent mit eigener Rolle im Rechtesystem, PDM, SyncMode; 4 Prinzip-Karten
- `Projects.tsx` — 3 Cards: BMW GenAI Agent, SyncMode.io, One platform eight markets
- `Experience.tsx` — 8 Einträge nach canonical-facts (BMW-Titel "Vehicle Dynamics", SyncMode ab 02/2026, Thesis 10/2017–06/2018)
- `WaymoLanding.tsx` + `app/waymo/` — unlisted Bewerbungsseite Strategy & BizOps Lead Germany (noindex, eigene OG-Tags)
- `AnthropicLanding.tsx` + `app/anthropic/` — unlisted Bewerbungsseite Applied AI Architect, Industries (02.10.2026, noindex). Abschnitte: Customer Journey aus der JD (Discovery → Patterns) gegen BMW-Belege, 4 Anthropic-Werte mit je einem Beleg, SyncMode-Architektur, Karriere, Why Anthropic. Verlinkt im CV `CV_Reinbach_Anthropic_Architect.pdf`.
- `NvidiaLanding.tsx` + `app/nvidia/` — unlisted Bewerbungsseite Senior Developer Relations Manager, Manufacturing (JR2016436, 02.10.2026, noindex). Gleiche Struktur wie Anthropic, Abschnitt 02 = vier Fertigungs-Stationen statt Werte. Verlinkt im CV `CV_Reinbach_NVIDIA_DevRel.pdf`. ⚠️ Live nur ohne Slash erreichbar (`/nvidia`), siehe Learning #67.
- `NvidiaCspLanding.tsx` + `app/nvidia-csp/` — unlisted Bewerbungsseite Solutions Architect, CSP GTM (JR2025076, 02.10.2026, noindex). Kopie der DevRel-Seite mit SA-Schritten (PoC, Enterprise-Architektur, Evaluation, Produktion, Executives). Verlinkt im CV `CV_Reinbach_NVIDIA_CSP.pdf`. ⚠️ Stand 03.10.2026 nur lokal, nicht gepusht (Alex verfolgt DevRel).
- `AmbientBackground` / `ScrollProgress` nehmen `tone="calm"`; Quantum nutzt weiter den violetten Default
- `Credentials.tsx` — 4 Top-Cards: Anthropic Claude Code, Google GenAI Leader, DeepLearning.AI, Stanford ML; Education (TUM/Beijing/Karlsruhe/Edinburgh); Tech Cloud
- `Contact.tsx`
- `AmbientBackground.tsx` — fixed Gradient-Blobs mit Parallax-Drift
- `ScrollProgress.tsx` — Top Gradient-Bar mit useSpring smoothing
- `Nav.tsx`
- `RecruiterRadar.tsx` — **dead code** (Datei liegt drin, aber nicht in `page.tsx` gemountet). User wollte explizites „I'm looking for jobs" Framing raus, weil's desperate wirkt.

## Content-Regeln (lessons learned)

- **Implizites Targeting > explizites**: Site darf NICHT sagen „Currently targeting X roles". Stattdessen Vokabular nutzen, das 1:1 aus den Zielrollen-Job-Descriptions kommt: „connective tissue", „discovery to deployment", „eval pipelines", „pilots into production", „on-call rotation", „customer discovery". Recruiter erkennen das Vokabular sofort.
- **Kein Overclaim** unbekannter Vendor-Skills. Salesforce/Databricks/MongoDB tauchen in Job-Targeting-Sprache auf (siehe RecruiterRadar dead code), aber nie als „I know this" im Tech-Stack. Authentisch > optimiert.
- **„Applied AI" statt „AI as OS"** — das frühere OS-Framing („I see AI as the operating system") wurde rausgenommen, weil's für FDE/Applied-AI-Architect zu visionär klingt. Aktueller About-h2 (29.09.2026): „New technology gets stuck on access and approval."
- **LinkedIn ist ground truth** für Stationen, Daten, Titel. CV kann veraltete Daten haben (siehe CV-Audit). Wenn LinkedIn und CV auseinandergehen, bleibt LinkedIn-Stand auf der Site.
- **Lebenslauf-Cut bei Amazon (04/2017)**: alles vor Amazon raus (intuMIND als Freelancer 2015-2016 z. B.). Amazon bleibt drin, weil als kurze Strategie-Station relevant.
- **Foto**: `public/alex.jpg`, ursprünglich aus dem SyncMode-Frontend kopiert (`gruender-alex.jpg`). About-Section bindet via `withBase("/alex.jpg")` ein.
- **Descender-Fix** bei `text-gradient` Spans: `background-clip: text` clippt g/p/q/y. Lösung: ausreichend `leading-[1.15]` + `pb-4` aufs h1 + `pb-3` auf den letzten Block-Span. Sonst wird der g-Bauch von „Agentic" abgeschnitten.

## CV ↔ Website

Seit 29.09.2026 an `../context/canonical-facts.md` angeglichen (Titel, Daten, Zahlen). Offen: `QuantumLanding.tsx` enthält noch alte Overclaims (600+ Nutzer, Enterprise RAG, Homologation, ERP/SCADA/PLC) — Seite ist unlisted, vor erneuter Nutzung bereinigen.

## Bewusste UI-Entscheidungen

- **Kein „Download CV" Button** im Hero — wurde nach User-Feedback entfernt
- **Kein „RecruiterRadar / Operating Profile" Section** im Mounting — der explizite Job-Such-Block wirkt desperate (User-Feedback)
- **4-Spalter Credentials** (`sm:grid-cols-2 lg:grid-cols-4`) — auf Tablet 2×2, auf Desktop 1×4

## Was NICHT tun

- Nichts in `/Users/alex/Desktop/Claude Survey Project/` editieren (das ist das separate SyncMode-Produkt). Einzige Ausnahmen: `nginx.conf` und `docker-compose.yml`, dort liegt die Auslieferungs-Route — siehe SyncMode-Memory für diese Infra-Sache.
- Keine Portfolio-Entscheidungen ins SyncMode-DEVLOG/LEARNINGS/CLAUDE.md schreiben.
- Keine erfundenen Vendor-Skills (Salesforce, MongoDB Atlas, Databricks Spark, Azure Fabric) ins Tech-Cloud-Array. Wenn unsicher, weglassen.

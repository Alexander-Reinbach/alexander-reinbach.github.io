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

- `Hero.tsx` — full-screen mit Scroll-Dissolve (opacity + scale + blur via useTransform), Counter-Stats (useInView + animate), 1 CTA „Get in Touch" (CV-Download bewusst entfernt)
- `About.tsx` — Foto + Story mit Applied-AI/FDE-Framing („connective tissue", „eval pipelines", „pilots into production")
- `Projects.tsx` — 3 Cards: BMW MCP Server, SyncMode GenAI-Sandbox, Industrialization
- `Experience.tsx` — 8 Einträge: SyncMode → BMW (4×) → Simon-Kucher → Amazon (alles ≥ 2017, kein intuMIND)
- `Credentials.tsx` — 4 Top-Cards: Anthropic Claude Code, Google GenAI Leader, DeepLearning.AI, Stanford ML; Education (TUM/Beijing/Karlsruhe/Edinburgh); Tech Cloud
- `Contact.tsx`
- `AmbientBackground.tsx` — fixed Gradient-Blobs mit Parallax-Drift
- `ScrollProgress.tsx` — Top Gradient-Bar mit useSpring smoothing
- `Nav.tsx`
- `RecruiterRadar.tsx` — **dead code** (Datei liegt drin, aber nicht in `page.tsx` gemountet). User wollte explizites „I'm looking for jobs" Framing raus, weil's desperate wirkt.

## Content-Regeln (lessons learned)

- **Implizites Targeting > explizites**: Site darf NICHT sagen „Currently targeting X roles". Stattdessen Vokabular nutzen, das 1:1 aus den Zielrollen-Job-Descriptions kommt: „connective tissue", „discovery to deployment", „eval pipelines", „pilots into production", „on-call rotation", „customer discovery". Recruiter erkennen das Vokabular sofort.
- **Kein Overclaim** unbekannter Vendor-Skills. Salesforce/Databricks/MongoDB tauchen in Job-Targeting-Sprache auf (siehe RecruiterRadar dead code), aber nie als „I know this" im Tech-Stack. Authentisch > optimiert.
- **„Applied AI" statt „AI as OS"** — das frühere OS-Framing („I see AI as the operating system") wurde rausgenommen, weil's für FDE/Applied-AI-Architect zu visionär klingt. Aktueller About-h2: „Most teams ship AI demos. I ship Applied AI in production."
- **LinkedIn ist ground truth** für Stationen, Daten, Titel. CV kann veraltete Daten haben (siehe CV-Audit). Wenn LinkedIn und CV auseinandergehen, bleibt LinkedIn-Stand auf der Site.
- **Lebenslauf-Cut bei Amazon (04/2017)**: alles vor Amazon raus (intuMIND als Freelancer 2015-2016 z. B.). Amazon bleibt drin, weil als kurze Strategie-Station relevant.
- **Foto**: `public/alex.jpg`, ursprünglich aus dem SyncMode-Frontend kopiert (`gruender-alex.jpg`). About-Section bindet via `withBase("/alex.jpg")` ein.
- **Descender-Fix** bei `text-gradient` Spans: `background-clip: text` clippt g/p/q/y. Lösung: ausreichend `leading-[1.15]` + `pb-4` aufs h1 + `pb-3` auf den letzten Block-Span. Sonst wird der g-Bauch von „Agentic" abgeschnitten.

## Bekannte CV ↔ Website-Inkonsistenzen (zu klären)

- Beijing-Studium: CV sagt „M.Sc. Management & Technology, MBA Program", Site sagt „M.Sc. Industrial Engineering" (laut LinkedIn-Screenshot)
- Master's Thesis Datum: CV 10/2017–06/2018, Site 09/2017–04/2018
- BMW current Titel: CV „Team & GenAI Lead", Site „Teamlead Simultaneous Engineering (BEV & ICE) & Applied GenAI Lead"
- BMW Mittelphase: CV ein Eintrag „Project Lead", Site 3 (Specialist + Intrapreneur + Team PO)

Wenn der User klärt, welcher Stand offiziell ist, Site daran angleichen.

## Bewusste UI-Entscheidungen

- **Kein „Download CV" Button** im Hero — wurde nach User-Feedback entfernt
- **Kein „RecruiterRadar / Operating Profile" Section** im Mounting — der explizite Job-Such-Block wirkt desperate (User-Feedback)
- **4-Spalter Credentials** (`sm:grid-cols-2 lg:grid-cols-4`) — auf Tablet 2×2, auf Desktop 1×4

## Was NICHT tun

- Nichts in `/Users/alex/Desktop/Claude Survey Project/` editieren (das ist das separate SyncMode-Produkt). Einzige Ausnahmen: `nginx.conf` und `docker-compose.yml`, dort liegt die Auslieferungs-Route — siehe SyncMode-Memory für diese Infra-Sache.
- Keine Portfolio-Entscheidungen ins SyncMode-DEVLOG/LEARNINGS/CLAUDE.md schreiben.
- Keine erfundenen Vendor-Skills (Salesforce, MongoDB Atlas, Databricks Spark, Azure Fabric) ins Tech-Cloud-Array. Wenn unsicher, weglassen.

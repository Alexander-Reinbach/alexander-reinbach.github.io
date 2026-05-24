# Alex Reinbach — Portfolio

Static personal portfolio / CV site built with Next.js 16 (App Router, TypeScript, Tailwind v4, framer-motion).

## Live versions

- **GitHub Pages** — `https://alexander-reinbach.github.io/` (auto-deployed from `main` via `.github/workflows/deploy-pages.yml`)
- **syncmode.io/AlexanderReinbach** — alternative deploy via nginx static export (see `DEPLOY.md`)

Both deployments build from the same `out/` static export and only differ in `NEXT_PUBLIC_BASE_PATH`.

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Production build

```bash
# Root-path build (custom domain / local preview)
npm run build

# Subpath build (e.g. syncmode.io/AlexanderReinbach)
NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach npm run build
```

Output lands in `out/` — fully self-contained, no Node runtime needed at the host.

## Deployment

- **GitHub Pages**: push to `main` → the Actions workflow rebuilds and publishes. `NEXT_PUBLIC_BASE_PATH` is set automatically from the repo name via `actions/configure-pages`.
- **syncmode.io**: manual `rsync` + bind-mount, see [DEPLOY.md](./DEPLOY.md).

## Stack

- Next.js 16 (Turbopack), React 19, TypeScript 5
- Tailwind CSS v4
- framer-motion 12
- lucide-react icons

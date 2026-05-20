# Deployment Guide — Static Export to syncmode.io/AlexanderReinbach

No Vercel, no external services. The portfolio compiles to a static
`out/` folder. Your existing nginx (already running in the syncmode.io
Docker stack on Hetzner) serves it under `/AlexanderReinbach`.

---

## How it works

1. **Build locally** → produces `out/` with 49 files (~1.7 MB), all asset
   paths pre-prefixed with `/AlexanderReinbach/`.
2. **Sync `out/` into your syncmode.io repo** at a fixed folder (e.g.
   `./portfolio-static/`).
3. **Mount that folder into the nginx Docker container.**
4. **Add one `location` block to `nginx.conf`** that serves it.
5. **Run `./deploy.sh --quick`** to push to the VPS. Live in seconds.

No new services, no proxy headers, no SSL pass-through, no Vercel.
Cloudflare in front gives you global edge caching automatically.

---

## One-time setup in the syncmode.io repo

### Step 1 · Add the static directory

Create an empty folder for the portfolio output:

```bash
mkdir -p ~/projects/survey-system/portfolio-static
```

### Step 2 · Mount it into the nginx container

In `docker-compose.yml`, find the `nginx` service (container_name:
`survey-nginx`) and add to its `volumes:` list:

```yaml
services:
  nginx:
    container_name: survey-nginx
    # ... existing config ...
    volumes:
      # ... existing mounts (nginx.conf, etc.) ...
      - ./portfolio-static:/usr/share/nginx/html/portfolio:ro
```

### Step 3 · Add the nginx location block

In `nginx.conf`, inside the `server { ... }` block for `server_name syncmode.io`,
add this **grouped with the other `^~` prefix blocks** (typically right
after `location ^~ /.well-known/`):

```nginx
        # ========================================================
        # Portfolio — static export, served from local volume.
        # Built with NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach.
        # Update: rsync out/ contents into ./portfolio-static/, redeploy.
        #
        # ^~ modifier is REQUIRED — without it, any file-suffix regex
        # location elsewhere in this file (~* \.(js|css|...)$) would
        # hijack asset requests under /AlexanderReinbach/_next/static/...
        # and serve them from the wrong `root`, breaking JS/CSS/fonts.
        # ^~ tells nginx to skip regex evaluation once this prefix
        # matches, locking these requests into our alias.
        # ========================================================
        location ^~ /AlexanderReinbach {
            alias /usr/share/nginx/html/portfolio;
            index index.html;
            try_files $uri $uri/ $uri.html $uri/index.html =404;
        }
```

**Why `^~` not plain prefix:** see comment above — without `^~`, regex
locations elsewhere in the file (e.g. a generic asset-suffix matcher)
would steal asset requests. This is functional, not stylistic.

**Why `alias` and not `root`:** `alias` strips the `/AlexanderReinbach`
prefix before looking up files. Files in `portfolio-static/` are at the
root of that folder, not under an `AlexanderReinbach/` subdirectory.

**Why `try_files $uri $uri/ $uri.html $uri/index.html`:** Next.js with
`trailingSlash: true` produces both `/foo.html` and `/foo/index.html` style
paths. The chain handles all variations gracefully.

### Step 4 · Validate

```bash
# Service name in docker-compose.yml is "nginx" (container_name is
# "survey-nginx" — those are not interchangeable in compose commands).
docker compose exec nginx nginx -t

# Alternative when the container isn't running:
docker run --rm -v "$(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro" \
  nginx:alpine nginx -t
```

Should report `syntax is ok`.

---

## Daily workflow — updating the portfolio

When you change anything in the portfolio (text, design, projects, CV):

```bash
# 1. Rebuild static files
cd /Users/alex/Desktop/Bewerbungen/portfolio
NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach npm run build

# 2. Sync output into your syncmode.io repo
rsync -a --delete out/ ~/projects/survey-system/portfolio-static/

# 3. Deploy via your existing flow
cd ~/projects/survey-system
./deploy.sh --quick

# 4. Reload nginx in the running container (no downtime)
ssh deploy@159.69.39.142 'cd ~/projects/survey-system && docker compose exec nginx nginx -s reload'
```

That's it. No CI, no external account, no Vercel.

---

## Optional · Automate the rebuild into deploy.sh

Add this near the top of `deploy.sh` so a quick deploy also re-syncs the
portfolio (only when `--with-portfolio` flag is passed, to avoid forcing
a portfolio rebuild on every deploy):

```bash
if [[ "$*" == *"--with-portfolio"* ]]; then
  echo "→ Rebuilding portfolio static export..."
  (
    cd /Users/alex/Desktop/Bewerbungen/portfolio
    NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach npm run build
  )
  rsync -a --delete /Users/alex/Desktop/Bewerbungen/portfolio/out/ ./portfolio-static/
fi
```

Then: `./deploy.sh --quick --with-portfolio` rebuilds + deploys in one shot.

---

## Verification after deploy

From your Mac:

```bash
# Should return 200 with ~80 KB HTML
curl -sI https://syncmode.io/AlexanderReinbach/ | head -3

# CV file
curl -sI https://syncmode.io/AlexanderReinbach/cv.pdf | head -3

# Hero headline present in markup
curl -s https://syncmode.io/AlexanderReinbach/ | grep -c "Architecting the Future of Agentic AI"
# Should print: 1
```

If all three pass, you're live.

---

## Common issues & fixes

**`404` on first deploy** — Most likely `./portfolio-static/` is empty on
the VPS. Verify: `ssh deploy@159.69.39.142 'ls ~/projects/survey-system/portfolio-static/'`
should show `index.html`, `_next/`, `cv.pdf`. If not, rsync didn't run.

**CSS/JS broken (page is unstyled)** — basePath mismatch. Verify the build
was run with `NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach`. Look at `out/index.html`
and grep for `/AlexanderReinbach/_next/static/` — should appear ~20 times.

**`/AlexanderReinbach` (no trailing slash) returns 404** — nginx's `alias`
needs the URL to resolve to a real file. The `try_files` chain in the
config handles this, but if you skipped the `index index.html` directive
or the trailing slash variants, only the path ending in `/` will work.
Re-check the location block.

**Cloudflare caches old version aggressively** — purge with `curl -X POST`
to CF API, or use the Cloudflare dashboard → Caching → Purge Everything
(scoped to /AlexanderReinbach/* if possible).

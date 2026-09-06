# CLAUDE.md

Operating manual for AI agents in the botskills repo. Where a rule exists,
follow it; do not improvise.

## What this is

botskills.sh: directory of paste-ready bot skills for Grok Bot and Rakazo.
Same architecture as qaskills.sh (see docs/PLAN.md and docs/SYSTEMS.md for the
full plan, competitor research, and systems design). Separate repo, separate
Vercel project, domain botskills.sh.

## Delegation (STRICT, per Pramod 2026-08-23)

**Use Fable (Claude) and Fable subagents ONLY in this repo. Never delegate to
Codex CLI or Grok CLI here**, even for bulk article generation. If subagent
spawning is unavailable, Fable writes the content itself; do not fall back to
other backends.

## Conventions (inherited from qaskills, same strictness)

- **Writing**: never use em dashes anywhere (chat, commits, docs, articles,
  code comments). Use comma, period, colon, parentheses, or "->". Grep for the
  character before finishing any writing deliverable.
- **Git**: conventional commits, imperative mood, no Co-Authored-By trailers,
  no "Generated with Claude Code" footers. Stage explicit paths; review
  `git diff --cached --stat` before committing.
- **Code**: Prettier style (single quotes, 2-space, 100 width), TypeScript
  strict. Server components fetch data; client components ('use client') own
  all interactivity; icons/functions never cross the boundary.
- **Do not bump `@neondatabase/serverless` to 1.x without upgrading drizzle-orm first.**
  1.0.0 removed the ability to call the query function as a plain function, and
  drizzle-orm 0.36.4 does exactly that (`this.client(query, params, ...)` in
  `neon-http/session.cjs`). The shim that supports both driver generations
  (`this.clientQuery = client.query ?? client;`) arrived in drizzle-orm 0.40.1.
  Order: drizzle to >= 0.40.1 first, verify, then the driver.
  This trap is silent. The peer range is `>=0.10.0` and optional, so the install
  is clean, the build passes, and `tsc` passes; it fails only when a query runs.
  Check before trusting a green build:
  `grep -c clientQuery packages/web/node_modules/drizzle-orm/neon-http/session.cjs`
  must be non-zero. It is currently 0.
  Dormant today only because the drizzle `db` proxy in `src/db/index.ts` is not
  imported anywhere; all six live query sites use raw `neon()` tagged templates.
  It bites whoever first uses `db`.

- **Node 24.x pinned.** Moved off 20 on 2026-08-25, before Vercel stopped building it
  on Oct 1. The old rule said the Neon driver breaks on 24; that was tested rather than
  inherited, and it does not apply here. Every call site uses the HTTP query path
  (`neon()` as a tagged template) and never `Pool`, `Client` or `neonConfig`. The
  historical incompatibility was in the WebSocket path. Verified on 24 in production:
  reads, a write, and a read-after-write round trip. Pin the exact major, never `>=20`,
  or the next major gets adopted the day it ships.

## Load-bearing patterns

- **BOT.md frontmatter is regex-parsed**: single-line values, inline arrays
  [a, b, c] only. Block lists parse as EMPTY. `boundary` is required schema.
- **Blog registry is generated** (packages/web/src/app/blog/posts/index.ts):
  never edit it by hand. Add or change a post file, then run
  `python3 scripts/register.py`; it runs the article gate on every post and
  refuses to write the registry if any post fails. `posts` and `postList`
  both derive from one list via `createBlogRegistry`, which throws on a
  duplicate or malformed slug, so a collision can no longer resolve silently.
  Verify a post is live: `grep -c "slug: '<slug>'" index.ts` prints 1, and
  `python3 scripts/register.py --check` prints "registry current".
- **Lazy clients**: db is a Proxy connecting on first access; build needs zero
  secrets. Preserve for every new external client.
- **Machine endpoints stay open**: /api/bots and /api/bots/[slug]/content are
  the product for agents; robots.ts allows AI crawlers into them by design.
  Never blanket-disallow /api/.
- **No fake numbers**: leaderboard copies and votes come from telemetry
  (src/lib/telemetry-counts.ts); zero renders as "new", never as a count.
  Counts on /sponsor derive from the catalogue and the post registry. Never
  hardcode a scarcity counter or a page count anywhere.
- **Platform facts moved on 2026-09-04**: Grok Bot has Linux desktop and
  Android apps; iPad is still unsupported; the phone app can approve, pause
  and take over the computer but cannot edit routines or read run history.
  Read the dated CORRECTION section at the bottom of
  docs/seo/VERIFIED-FACTS-2026-08-25.md, not the Platforms section above it.
  `python3 scripts/factsweep.py` flags the old claim, not the new one.
- **Rollback**: every production state worth returning to is an entry in
  `rollback.empty` at the repo root (date, commit, backup branch, Vercel
  deployment URL, and a curl that proves the state). docs/ROLLBACK.md is the
  procedure. Add an entry before and after any deploy that changes behaviour.

## Commands

```bash
pnpm install
pnpm build                          # shared then web (Turbo order)
pnpm --filter @botskills/web dev
node packages/web/scripts/seed.mjs  # needs exported DATABASE_URL, upsert only
```

```bash
pnpm typecheck        # shared build + web tsc
pnpm lint             # eslint (next/core-web-vitals + typescript)
pnpm format:check     # prettier, posts excluded
pnpm test             # node --test in shared and web, python unittest for scripts
pnpm test:e2e         # playwright against a local dev server with no secrets
E2E_BASE_URL=https://botskills.sh pnpm --filter @botskills/web exec playwright test   # against production, write tests skipped
python3 scripts/gate.py && python3 scripts/register.py --check
```

## Ask first, always

- Any deploy, domain, or Vercel project change
- Prod DDL or any SQL beyond the upsert seeder
- Posting anywhere external, sending email, spending money
- Flipping this repo public (that act opens the PR submission funnel)

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
- **Node 20.x pinned** (Neon driver breaks on 24).

## Load-bearing patterns

- **BOT.md frontmatter is regex-parsed**: single-line values, inline arrays
  [a, b, c] only. Block lists parse as EMPTY. `boundary` is required schema.
- **Blog dual registry** (packages/web/src/app/blog/posts/index.ts): every
  post needs import + `posts` map entry + `postList` entry. Miss one = 404 or
  invisible. Batch arrays spread LAST; colliding slugs resolve silently to the
  last write. Verify: grep -c "'<slug>'" index.ts == 2.
- **Lazy clients**: db is a Proxy connecting on first access; build needs zero
  secrets. Preserve for every new external client.
- **Machine endpoints stay open**: /api/bots and /api/bots/[slug]/content are
  the product for agents; robots.ts allows AI crawlers into them by design.
  Never blanket-disallow /api/.
- **No fake numbers**: leaderboard copies come from telemetry. The demo module
  in src/lib/board.ts must be replaced by the copy_events rollup BEFORE any
  public deploy. Never hardcode scarcity counters on /sponsor.

## Commands

```bash
pnpm install
pnpm build                          # shared then web (Turbo order)
pnpm --filter @botskills/web dev
node packages/web/scripts/seed.mjs  # needs exported DATABASE_URL, upsert only
```

## Ask first, always

- Any deploy, domain, or Vercel project change
- Prod DDL or any SQL beyond the upsert seeder
- Posting anywhere external, sending email, spending money
- Flipping this repo public (that act opens the PR submission funnel)

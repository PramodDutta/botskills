# botskills.sh

Skills directory for AI bot runtimes (Grok Bot, Rakazo): paste-ready BOT.md
setups, ranked by verified copies. Same architecture as qaskills.sh: pnpm
monorepo, shared constants package, Next.js 15 web app, file-based seed
catalog, dual-registry blog engine, machine-readable by design (llms.txt,
open JSON API, raw markdown per bot).

## Layout

- `packages/shared` — constants (categories, runtimes, integrations), types, BOT.md parser
- `packages/web` — Next.js 15 app: leaderboard, bot pages, blog, API, llms.txt
- `seed-bots/<slug>/BOT.md` — the catalog source of truth
- `docs/PLAN.md` — full plan and competitor research
- `docs/mockup/` — the approved UI mockup

## Commands

```bash
pnpm install
pnpm build            # shared then web (Turbo order)
pnpm --filter @botskills/web dev
```

Build requires zero secrets: the DB client is a lazy proxy, pages read the
file catalog. Node 20.x pinned.

## BOT.md schema

Single-line frontmatter values, inline arrays (regex-parsed, same rules as
qaskills seed pipeline). Required: name, description, version, author, license,
category, integrations [..], runtimes [grok-bot|rakazo], boundary. Body = the
setup prompt. `boundary` is the one-sentence hard limit ("Never sends without
approval") and is required: it renders on every surface.

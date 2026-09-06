# botskills.sh

Skills directory for AI bot runtimes (Grok Bot, Rakazo): paste-ready BOT.md
setups, ranked by verified copies. Same architecture as qaskills.sh: pnpm
monorepo, shared constants package, Next.js 15 web app, file-based seed
catalog, dual-registry blog engine, machine-readable by design (llms.txt,
open JSON API, raw markdown per bot).

## Layout

- `packages/shared`: constants (categories, runtimes, integrations), types, BOT.md parser and serializer
- `packages/web`: Next.js 15 app with leaderboard, bot pages, integration hubs, blog, API, llms.txt
  - `src/lib/blog-registry.ts`: one list of posts, from which the page lookup, index and sitemap derive
  - `src/lib/related.ts`, `src/lib/integrations.ts`: related links and per-tool hub pages, computed from the corpus
  - `src/lib/sql.ts`, `src/lib/telemetry-counts.ts`: the one database client and the copy/vote rollup
  - `e2e/`: Playwright suite (runs locally with no secrets, or against production with `E2E_BASE_URL`)
  - `tests/`: node --test unit tests for the pure libraries
- `seed-bots/<slug>/BOT.md`: the catalog source of truth
- `scripts/`: article gate, registry generator, duplicate and slop checks, fact sweep, IndexNow
- `docs/seo/VERIFIED-FACTS-2026-08-25.md`: what the site may assert about Grok Bot, with a dated correction section at the bottom
- `docs/ROLLBACK.md` and `rollback.empty`: how to roll production back, and the ledger of states to roll back to
- `.github/workflows/ci.yml`: type-check, lint, format, unit, catalogue and article gates, build, Playwright

## Commands

```bash
pnpm install
pnpm build            # shared then web (Turbo order)
pnpm --filter @botskills/web dev
pnpm typecheck        # shared build + web tsc
pnpm lint             # eslint, next/core-web-vitals + typescript
pnpm format:check     # prettier (article bodies excluded)
pnpm test             # unit tests: shared, web, scripts
pnpm test:e2e         # playwright against a local dev server with no database or mail key
python3 scripts/gate.py               # every article against the publication gate
python3 scripts/register.py           # regenerate the blog registry (refuses if the gate fails)
node scripts/validate-bots.mjs        # every BOT.md against the shipping parser
```

Build requires zero secrets: the DB client is a lazy proxy, pages read the
file catalog. Node 24.x pinned (package.json engines).

## BOT.md schema

Single-line frontmatter values, inline arrays (regex-parsed, same rules as
qaskills seed pipeline). Required: name, description, version, author, license,
category, integrations [..], runtimes [grok-bot|rakazo], boundary. Body = the
setup prompt. `boundary` is the one-sentence hard limit ("Never sends without
approval") and is required: it renders on every surface.

## Contributing

Every listing is one file: `seed-bots/<slug>/BOT.md`. Copy `BOT-TEMPLATE.md`,
fill it in, and run `node scripts/validate-bots.mjs`. Full rules, including the
three parser traps that fail a build, are in [CONTRIBUTING.md](CONTRIBUTING.md).

Not a developer, or would rather not open a pull request? Use the
[Suggest a bot](https://github.com/PramodDutta/botskills/issues/new?template=new-bot.yml)
issue form and we will write the file.

Every bot must declare a `boundary`: the one irreversible action it will never
take without a human approving that specific action. Listings without one are
not merged.

## Licence

MIT. See [LICENSE](LICENSE).

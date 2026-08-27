# botskills.sh

Skills directory for AI bot runtimes (Grok Bot, Rakazo): paste-ready BOT.md
setups, ranked by verified copies. Same architecture as qaskills.sh: pnpm
monorepo, shared constants package, Next.js 15 web app, file-based seed
catalog, dual-registry blog engine, machine-readable by design (llms.txt,
open JSON API, raw markdown per bot).

## Layout

- `packages/shared`: constants (categories, runtimes, integrations), types, BOT.md parser
- `packages/web`: Next.js 15 app with leaderboard, bot pages, blog, API, llms.txt
- `seed-bots/<slug>/BOT.md`: the catalog source of truth
- `docs/PLAN.md`: full plan and competitor research
- `docs/mockup/`: the approved UI mockup

## Commands

```bash
pnpm install
pnpm build            # shared then web (Turbo order)
pnpm --filter @botskills/web dev
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

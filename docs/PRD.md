# botskills.sh Product Requirements Document

Version 1.0, 2026-08-23. Owner: Pramod Dutta. Author: Fable.
Companions: PLAN.md (research + phases), SYSTEMS.md (subsystem design).
Status: P0 shipped (repo builds, TrustMRR-structure UI live locally).

## 1. One-liner

THE go-to directory for Grok bots and Grok bot skills: paste-ready Grok Bot
setups ranked by
verified copies, where every bot declares the one thing it never does without
a human. Rakazo is supported as the open-source runtime, but Grok Bot is the
category we exist to win.

Positioning note: "Grok" is xAI's mark. We are the independent directory FOR
Grok bots, never "the Grok directory": descriptive use only, a visible
"not affiliated with xAI" line in the footer, and no xAI branding anywhere.

## 2. Problem and opportunity

Bot runtimes went mainstream in weeks (Grok Bot; Rakazo hit 742 GitHub stars
in 4 days). The setup prompt is the unit of value, and discovery is broken:
the incumbent directory (botdirectory.ai) has ~250 listings, a conflicted
owner filling his own sponsor slots, no safety schema, no SEO engine, and a
UI weaker than what people demonstrably love (TrustMRR). We already own the
exact machine that wins this race: the qaskills architecture, content
pipeline, and playbook, proven to 2.17M monthly impressions.

## 3. Goals

- G0: own the "grok bot" query cluster before anyone else does: rank top-3
  for grok bot setup/prompts/examples/how-to within 60 days of launch
- G1: the best UI in the category (TrustMRR structure) within launch week
- G2: 300+ quality bot skills in 60 days; every one with a boundary
- G3: 1,000 SEO articles by month 3; organic as the dominant channel
- G4: sponsor revenue live by month 2 without a single dark pattern
- G5: fully machine-readable: an agent can discover, install, author, submit

## 4. Non-goals (v1)

- Not a bot RUNTIME or hosting; we never execute bots
- No user accounts for readers; no login to browse, copy, or fetch
- No reviews/ratings (copies are the signal); no paid listings ranking boosts
- No mobile app; no multi-language
- Never sell placement inside organic rankings; promoted rows are labelled

## 5. Users

| Persona | Job to be done | Must-haves |
|---|---|---|
| Operator (main) | find a proven setup, paste it, get value today | fast browse, copy button, trust in numbers, clear boundary |
| Contributor | publish a setup, build reputation | 1-file submission, attribution, copy counts, contributor page |
| Sponsor | reach people configuring bots | self-serve slot, flat price, clean placement, real scarcity |
| Agent (bot as user) | fetch catalog, install skill, author a new one | open JSON, raw md, llms.txt, /agents how-to, robots access |

## 6. Product principles

1. Boundaries are schema, not vibes: `boundary` is required, validated, and
   rendered on every surface.
2. Numbers are earned: copies come from telemetry only. No seeded counts, no
   hardcoded scarcity. If we cannot measure it yet, we say so.
3. Ads never wear the catalog's clothes: sponsored = labelled, outside
   organic rank order.
4. Git is the source of truth: a bot is a file; merge = publish.
5. Machine-first: everything a human can read, an agent can fetch cleaner.

## 7. Feature specification

### 7.1 Catalog and leaderboard (P0 core, shipped)
- Leaderboard table: rank (medals top 3), bot cell (avatar, name, one-line
  description, runtime badges, NEW badge), contributor @handle, copies
  (tabular numerals), 7d delta (up/down colored). 25 rows then "Show more".
- Avatar strip of top 10 above the table.
- Recently added card row: avatar, name, category tag, stacked stats.
- Category pills with live counts; integrations filter (P1 UI, API today).
- Table/cards toggle (P1; cards exist in mockup).
- Search (P1): client-side over name/description/integrations; server later.
- Sort options (P1): most copied, trending (7d), newly added, A-Z.

### 7.2 Bot detail page (P0 shipped, P1 polish)
- Name, description, category, integrations, runtime badges, version, author.
- Boundary callout box, visually distinct, always above the prompt.
- Full setup prompt in monospace block + "Copy setup prompt" button
  (fires telemetry; copy never blocks on it).
- Raw endpoints printed on-page. P1: OG image per bot; related bots;
  per-bot copy sparkline. P2: version history from git log.

### 7.3 Submissions (P1)
- /submit form mirroring BOT.md schema, zod-validated live, boundary required.
  Server creates branch + file + PR via GitHub API, labels `submission`,
  returns PR link. Honeypot + rate limit.
- Direct PR path with CI validator: schema, boundary present, slug collision,
  prompt length >= 40 lines, no em dashes.
- P3: X-tag ingestion (@botskills mention -> drafted PR, scout credit).

### 7.4 Telemetry: verified copies (P1, blocking public launch)
- POST /api/telemetry/copy {slug, source} -> copy_events row (shipped).
- Hourly rollup -> bots.copy_count + 7d window; leaderboard reads DB.
- Dedupe: hash(ip+ua+slug) per hour to damp abuse; no PII stored.
- Sources: web, api, mcp. Public /api/bots exposes copies per bot.
- HARD RULE: demo module (src/lib/board.ts) must be deleted before deploy.

### 7.5 Sponsorship (P1)
- Placements: rail card ($99/mo intro), marquee logo ($59/mo), promoted
  in-list row (ask), monthly takeover (ask). Caps 8+8; one sponsor per
  category; excluded: competing directories, crypto.
- Self-serve: Polar checkout (MoR, India-compatible; fallback Dodo) ->
  webhook -> sponsors row pending_assets -> admin approves assets -> live.
  Rotation renders fewer than cap per load; equal share.
- /sponsor shows LIVE counts from the table; scarcity never hardcoded.
- Programmatic fallback: EthicalAds unit in unsold rail slots, removable
  per-slot the moment a sponsor books.

### 7.6 Blog and SEO factory (P0 engine shipped, P1 content)
- qaskills engine verbatim: dual registry, batch arrays spread last,
  mechanical gate (3k+ words, >=3 tables, >=6 code blocks, FAQ, exactly-2
  internal links, escaping, no em dashes), shingle dedup, Fable-only
  authoring + Fable subagent adversarial audits, IndexNow after deploy.
- Grok-first cluster weighting (roughly 60/25/15):
  GROK (priority): grok bot skills, grok bot setup, grok bot prompts, grok
  bot examples, how
  to create a grok bot, grok bot for <job/integration>, grok bot vs <tool>,
  grok bot troubleshooting, grok bot safety/boundaries. These queries are
  weeks old with no entrenched winner; speed here IS the strategy.
  RAKAZO (secondary): self-host, config, migration from Grok Bot.
  EVERGREEN: per-integration recipes, per-category playbooks, bot prompt
  engineering, boundary patterns. Target: 50 launch, 10/day, 1,000 by month 3.

### 7.7 Agent access (P0 shipped, P2 MCP)
- GET /api/bots (filters: category, runtime, integration, sort) open, no key.
- GET /api/bots/[slug]/content -> raw BOT.md, text/markdown.
- /llms.txt lists every bot + post + machine endpoints.
- /agents page: fetch, install, author, submit, with copyable BOT.md template.
- robots.ts allows GPTBot/ClaudeBot/PerplexityBot/GrokBot/Amazonbot into the
  machine endpoints explicitly. Never blanket-disallow /api/.
- P2: MCP server exposing search_bots / get_bot / submit_bot; API keys only
  if abuse forces them.

### 7.8 Admin and CRM-lite (P1)
- /admin (Clerk, graceful degrade): submissions queue (PR list), sponsor
  pipeline (pending_assets -> live -> ended), hide-bot kill switch (flag,
  file removal still via git), copy stats and top movers.
- sponsor_leads table + weekly digest email. States: new -> contacted ->
  won -> lost. No CRM product until volume proves it.

### 7.9 Community surfaces (P2)
- Contributor pages /by/[handle]: their bots, total copies, first-seen.
- Activity feed from real events (publishes, versions, milestones).
- Weekly digest email (Resend): top movers, new bots, one featured boundary.

### 7.10 Analytics and ops (P1)
- GA4 + GSC (URL-prefix property from day one), OG images, sitemap auto
  from postList + bots, error monitoring, Vercel project `botskills-sh`
  pinned Node 20, deploy from committed HEAD via worktree (qaskills rule).

## 8. Information architecture

/ (leaderboard home) · /grok-bot (runtime hub, the category landing) ·
/rakazo · /bots · /bots/[slug] · /blog · /blog/[slug] · /agents
· /sponsor · /submit (P1) · /by/[handle] (P2) · /admin (P1) · /llms.txt
· /robots.txt · /sitemap.xml

## 9. API surface

| Endpoint | Auth | Phase | Purpose |
|---|---|---|---|
| GET /api/bots | none | P0 | catalog JSON + filters |
| GET /api/bots/[slug]/content | none | P0 | raw BOT.md |
| POST /api/telemetry/copy | rate-limited | P0/P1 | copy events |
| GET /api/sponsors | none | P1 | live slots for rotation + counts |
| POST /api/submit | rate-limited | P1 | form -> GitHub PR |
| POST /api/webhooks/polar | signature | P1 | sponsor lifecycle |
| MCP: search/get/submit | none | P2 | in-chat install |

## 10. Data model

bots (slug uniq, meta, boundary, prompt, copy_count, hidden) ·
copy_events (bot_slug, source, created_at) ·
sponsors (company, tier, category, assets, polar_subscription_id, status,
period_end) · sponsor_leads (email, tier, source, status, notes) ·
submissions (pr_number, slug, author_handle, state)

## 11. UX specification

Per the approved mockup (docs/mockup, artifact 483a4204): TrustMRR structure
with our identity. Archivo + JetBrains Mono, amber accent on graphite,
dark-first with three-state theme toggle. Density is the aesthetic: tabular
numerals, medals, tight rows, minimal chrome. Sponsor surfaces use dashed
"Your tool here" placeholders until sold. Every metric surface carries the
verified-copies trust note. Mobile: table scrolls in its own container, rail
collapses to a strip.

## 12. Monetization model

| Stream | Price | Gate | Honest month-6 range |
|---|---|---|---|
| Rail sponsors (8) | $360/mo (30% of botdirectory's $1,200, per Pramod) | P1 system | $360-$2,880/mo |
| Marquee (8) | $120/mo (scaled to the same 30% rule) | P1 | $120-$960/mo |
| Promoted row / takeover | ask | P1 | $0-$500/mo |
| EthicalAds fallback | ~$2-3 CPM | P1 | $20-$120/mo |
| Referrals (runtimes/tools) | per program | P2 | $0-$200/mo |

Assumption: traffic follows the qaskills curve (organic dominant by month 3).
botdirectory charges $1200/mo for rail on the strength of one viral post; we
price for the traffic we can prove and raise as it compounds.

## 13. Success metrics

- P1 exit: telemetry live, demo module deleted, 60 bots, /submit works
  end-to-end, first sponsor slot purchasable.
- Launch +30d: 10k users/mo, 150 bots, 300 articles indexed, 1,000 copies/wk,
  >= 2 paying sponsors.
- Month 3: 30k users/mo, 300+ bots, 1,000 articles, agent fetches >= 15% of
  API traffic, sponsor MRR >= $500.
- Quality invariants (always): 100% bots have boundaries; 0 fake numbers;
  0 unlabeled paid placements; build needs 0 secrets.

## 14. Risks

| Risk | Mitigation |
|---|---|
| Category is months old; runtimes may pivot | runtimes is an array; adding one is a constant + badge |
| Incumbent's distribution (Rakazo author owns botdirectory) | SEO volume + better UI + neutrality; they cannot publish a manifest without exposing conflicts, we can |
| Prompt quality liability | boundary schema, CI validator, kill-switch flag, no execution |
| Copy-count abuse | hourly dedupe hash, source tagging, admin anomaly view |
| Solo-operator bandwidth | qaskills playbook reuse; Fable-only pipeline already proven on 7-article day |

## 15. Delivery status and sequence

- P0 DONE 2026-08-23: monorepo, shared parser, web app with TrustMRR UI,
  5 seed bots, agent endpoints, docs, private repo pushed (748d421).
- P1 (next): telemetry rollup, 60 bots, /submit->PR, sponsor system + Polar,
  /admin v0, GA4/GSC, OG images, first 50 articles. Est. 4-6 working days.
- P2: contributor pages, feed, MCP, digest. P3: X ingestion, 1,000 articles.
- Launch gate: P1 exit criteria + Pramod approves pricing + domain attach.

## 16. Open decisions (Pramod)

1. DECIDED 2026-08-23: pricing is 30% of botdirectory ($360 rail / $120
   marquee). Sponsor contact is contact@thetestingacademy.com, which receives today.
2. Repo public timing (public repo = submission funnel opens).
3. Accent/brand veto window before OG images are generated.
4. EthicalAds fallback: on at launch, or sponsors-only until 10k users?

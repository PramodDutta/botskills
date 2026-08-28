# Verified facts from x.ai/bot/guides, read 2026-08-28

Source: the five official guides at x.ai/bot/guides. These are practitioner
accounts written by xAI staff, not the technical documentation.

## Authority hierarchy, read this first

docs.x.ai is the technical authority. These guides are looser. Where a guide and
the docs disagree on a mechanism, the docs win and the guide is not citable for
that mechanism. Facts below are safe to cite because the docs are silent on them,
not because the guides outrank anything.

## The phrasing trap that seeds the biggest myth

The GTM guide says "Grok Bot has its own computer", and the design guide says
"always-on AI design agents with their own computers". Read in isolation, both
sound like each Bot gets a private machine.

They do not say that. The GTM sentence is making a point about the laptop being
shut, not about isolation, and neither guide makes any claim about credentials,
isolation, or security boundaries between bots. The docs remain explicit and
repeat it on four pages: one computer per ACCOUNT, screens are not security
boundaries, do not use separate Bots as a security boundary.

Treat this phrasing as the likely origin of the "each bot gets its own VM" claim
that circulates in roundups. When writing about it, quote the docs, never the
guide, and never repeat the guide's singular phrasing without the account-level
correction beside it.

## New, citable, and absent from the docs

- Maximum SIX bots per channel: a Projects Manager plus five others.
  how-i-run-multiple-teams-of-grok-bots
- One project maps to one channel in the sidebar. Same source.
- New specialist bots are created only after a human approves; the roster is
  reused before anything new is spun up. Same source.
- Bots can mark a task Blocked and ping a human in the channel. Same source.
- Bot-to-bot handoff happens without a human routing it.
  grok-bot-for-mobile-app-development
- The Figma MCP path exposes exact x and y positions, width, height, spacing,
  typography, fills, strokes, and component structure.
  designing-grok-bot-with-grok-bot
- Meta Ads API is unavailable because of verification limits; the documented
  workaround is UI recording. grok-bot-for-mobile-app-development
- Integrations named across the five guides: Salesforce, Gmail, Google Calendar,
  Sheets, Drive, Slack, Notion, Granola, Figma, Gong, X, LinkedIn, Meta Ads
  Manager, AppLovin, Adjust, PostHog, Google Cloud, Apple App Store, Google Play,
  Sentry, Jira, GitHub, GSuite, data warehouses.
- Results can arrive as a live spreadsheet rather than a CSV export, and can
  update during an active call. grok-bot-for-gtm

## Do not carry these across

- The PM guide describes "Cloud Agents" with access to a codebase, dependencies
  and secrets, and credits agents with a double-digit percentage of internal
  merged PRs. That is engineering agent territory, adjacent to Grok Build, not
  the Grok Bot behaviour the rest of our corpus documents. Do not attribute
  codebase or secret access to Grok Bot.
- Guide read times, publication dates, and internal xAI headcount claims are not
  product facts and are not citable as such.

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

## From docs.x.ai/grok-bot/use-cases, read 2026-08-28

Eight documented use cases, each with an explicit boundary. The boundary
wording is quoted from the page and is worth reproducing exactly, because these
are the product's own words on what a bot must not do.

| Use case | Documented boundary |
|---|---|
| Sales Outbound | "Skip anyone already in an active sequence. Return a review list; do not send or enroll anyone." |
| Talent Scout | "Do not contact anyone." Approvals required before external outreach; respect candidate privacy and regional requirements. |
| Paid Media | "Do not change budgets or send the message." |
| Expense Manager | "Do not send messages or change reimbursements." |
| Product Performance | "Do not change alerts or production settings." |
| Bug Reproduction | "Do not use production customer data." |
| Account Health | "Do not contact customers or edit the CRM." |
| Chief of Staff | "Do not send messages or change meetings." |

Every one of the eight is draft-or-report only. Not one of the documented use
cases has the bot take an outward action. That is the strongest available
support for the never-send posture across our catalogue: it is not our house
rule, it is the shape of every example the vendor publishes.

## From docs.x.ai/grok-bot/get-started, read 2026-08-28

- The page names one worked example Bot, "Piper", whose job is product
  performance. Its documented instructions include preserving links and
  screenshots, separating evidence from hypotheses, returning a short summary
  with the highest-impact issue first, and never changing production settings.
- No other templates or starter bots are named on that page.

## CORRECTION, 2026-08-29: a share path shipped

Our article share-a-grok-bot stated there was no share button. That was true when
written and is now wrong. It has been corrected. Anyone writing about sharing
must use the facts below, not the earlier article.

From docs.x.ai/grok-bot/faq, read 2026-08-29:

- Verbatim: "Copy a public share link from the Bot. Anyone with the link can
  preview it on x.ai and add a copy to their account."
- Verbatim on what does NOT transfer: "They do not get your computer, logins, or
  conversation history."
- Verbatim warning: "Strip secrets and anything confidential before you share."
  The reason given is that the link exposes the Bot's configuration.
- The share page lives at x.ai/bot/<id> and renders the bot name, its author, a
  truncated prompt, and an Add to Grok Bot control. Observed 2026-08-29.
- The share page carries a disclaimer that the bot was created by a third-party
  user rather than by xAI, and that it may act on the adder's behalf.

## What this does and does not change

Still true, and still the point of that article: a teammate who adds your shared
bot needs their own eligible seat, starts on an empty computer, and must sign
into every tool themselves. Sharing moves the recipe, never the kitchen.

Now false, do not repeat: "there is no share button", "the product cannot copy a
bot onto someone else", "you can only hand over the charter as text".

New and worth its own coverage: the link publishes the configuration. A charter
naming an internal hostname, quoting a customer, or carrying a token in an
example is exposed to anyone who receives the URL. Every bot in our own
catalogue is already written to be published, which is not true of a charter
someone wrote for their own account.

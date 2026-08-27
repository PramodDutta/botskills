import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot for Enterprises: What the Waitlist Actually Means',
  description:
    'Grok Bot enterprise access is not a documented SKU with a price on this site. Teams Standard and Premium include Bot per seat. Confirm any waitlist on Cursor or xAI.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Grok Bot for Enterprises: What the Waitlist Actually Means

A screenshot labeled grok bot enterprise waitlist landed in the security channel, and the next message asked whether that is a SKU with a form you can submit this afternoon.

It is not, not on this site. This page will not invent a Grok Bot Enterprise product, a waitlist form, a SOC 2 report, an SSO spec, or a ship date. Cursor Teams Standard at forty dollars per user per month and Teams Premium at one hundred twenty per user already include Grok Bot per seat, checked as of 25 August 2026 against the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) and [Cursor team pricing](https://cursor.com/docs/account/pricing). Confirm those numbers the morning you quote them. If a vendor page currently shows waitlist language, that is their live copy.

The rest of this page is the CISO packet: what is documented, what security will still hate, and the worked case where Dana asks for a dedicated VM per bot and an audit log. Neither of those is the product. [Grok Bot on Cursor Teams Standard](/blog/grok-bot-teams-standard) is the seat math. [Do not use separate bots as a security boundary](/blog/grok-bot-not-a-sandbox) is the isolation fact. [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet) is the receipt fact.

## Treat waitlist as marketing copy you confirm on the vendor, never as a SKU

Waitlist is a word marketers put on a page when a product is gated, rumoured, or not ready to sell. It is not a line item. It does not mint a computer, create an audit view, or answer a questionnaire row.

This article hedges the word on purpose. If you saw grok bot enterprise waitlist on X, in a newsletter, or in a sales deck, treat that phrase as a pointer: open [x.ai](https://x.ai), open [cursor.com](https://cursor.com), open the [teams and enterprises docs](https://docs.x.ai/grok-bot/teams-and-enterprises), and read what those pages say today. If they show a waitlist, you are looking at vendor copy. If they do not, the screenshot was already wrong. Do not ask this recap to host a form, a queue, or the week Enterprise ships. Inventing a date becomes a representation the moment someone pastes it into a board pack.

| Phrase that arrived in Slack | What this site will claim | Where you confirm it |
|---|---|---|
| grok bot enterprise waitlist | Marketing language until a vendor page says otherwise today | Cursor and xAI, not a recap, not a PNG |
| Grok Bot Enterprise as a priced SKU | Not documented here. No price, no form, no date | The same live pages. If they still have no SKU, there is no SKU |
| Teams Standard includes Grok Bot | Yes. $40 per user per month as of 25 August 2026 | [Cursor team pricing](https://cursor.com/docs/account/pricing) and the FAQ |
| Teams Premium includes a better Bot | Same Bot product, $120 per user per month | Same pages. Premium is a richer Cursor SKU, not a Bot SKU |

Screenshot the vendor page, not the tweet. If the live page and this article disagree, the live page wins.

## Read Teams Standard and Premium as the documented company-shaped doors

Companies already have a documented path into Grok Bot, and it is not a mystery SKU. Cursor Teams Standard and Cursor Teams Premium both include Grok Bot. Eligibility widened on 21 August 2026 to SuperGrok Plus, Cursor Pro+, and all Cursor Teams plans ([xAI announcement](https://x.ai/news/grok-bot-more-plans)). Beta launched 11 August 2026. Those dates are product history, not a waitlist close date.

The include is per seat. Buy twelve Teams Standard seats and you bought twelve eligibility stamps, not one company Bot farm. Each eligible user gets one persistent cloud computer assigned to that user account, not to a bot ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).

Premium at one hundred twenty does not attach a fleet console, a model picker, a spend cap, a per-bot VM, or an audit view. After the access check passes, Standard and Premium receive the same documented Bot. [Grok Bot on Cursor Teams Standard](/blog/grok-bot-teams-standard) is the invoice page. Stay here if the question is whether you must wait for something named Enterprise before anyone may run a bot.

Other eligible doors still exist: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and a one-time trial. Cursor Hobby and Cursor Pro at twenty dollars do not include Grok Bot. SuperGrok at thirty does not. SuperGrok Plus at one hundred does. SuperGrok Heavy is eligible; its price is not a figure this page will print. Confirm numbers on [cursor.com/pricing](https://cursor.com/pricing) and [x.ai/pricing](https://x.ai/pricing) the morning you brief finance. Privacy Mode (Legacy) blocks Grok Bot entirely.

## Refuse to invent a Grok Bot Enterprise SKU, a form, or a ship date

The docs page is titled teams and enterprises. A title is not a catalog SKU. Coming-soon sentences on that page are not shipped features.

Two items the teams docs describe as coming rather than present: a team-level ceiling on local execution, and an administrator Kill that would delete the virtual machine while durable storage is kept. Neither has a ship date we can quote. Kill, if it ships, is a halt. A halt is not an audit log. Durable storage kept means files you hoped would vanish may still be there. Do not fill a questionnaire with those lines as if they were controls you have today. Do not tell a CISO that Enterprise will add them.

SOC 2 is a report a vendor publishes, or it is not. This site does not have a Grok Bot SOC 2 letter to quote. This page will not specify SAML, OIDC, SCIM, or an IdP. Organization login belongs on Cursor's current account pages. Mapping it onto a Grok Bot Enterprise tenant is invention. The honest cells are empty cells plus a URL.

## Count one computer per person even when the buyer is a company

Enterprise buyers hear Linux VM and picture a fleet they can subnet. The Agent Computer is a managed Linux VM. The Bot process runs as a non-root user. That is not a Linux desktop client, and it is not one VM per named bot. There is no Linux desktop app. Supported clients are macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS 18 or later. Android and iPad are not on the list ([FAQ](https://docs.x.ai/grok-bot/faq)).

The isolation unit is the user account. All bots on that account share one persistent cloud computer. Ten named bots are ten screens and one disk. Two people on Teams Standard are two computers. Parking twelve bot names on Dana's account still leaves you with Dana's computer.

Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer. Browser cookies, files, and CLI credentials still live on the disk. Static egress IPs exist; some services flag datacenter addresses. That is an allowlist conversation, not a per-bot network identity. [What a Grok bot is](/blog/what-is-a-grok-bot) is the object model. A company invoice does not rewrite the computer assignment.

## Treat bot screens as work surfaces a reviewer cannot vault

Each bot gets a screen. Screens are work surfaces, not security boundaries. The approvals page states the teaching line directly: "Do not use separate Bots as a security boundary" ([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)). Cookies, signed-in sessions, files, and command-line credentials are shared across bots on that computer. Deleting a bot does not remove shared-computer files or browser sessions.

A security reviewer who hears "we isolated production keys on the deploy bot" is being told a sandbox story. [Do not use separate bots as a security boundary](/blog/grok-bot-not-a-sandbox) is the engineer-facing walkthrough. This page only needs the procurement version: naming a bot Prod and a bot Research does not create two vaults.

If the company needs two isolation units, it needs two user accounts, not two bot cards. [Least privilege bots](/blog/least-privilege-bots) is the connection rule. Screens will not save you from a second grant. [Inbox Triage](/bots/inbox-triage) never sends. That boundary is a sending rule on a machine that still holds whatever else you signed into. [Lead Scout](/bots/lead-scout) never contacts anyone. Same shape. A refusal in the charter is not a chroot.

## Walk Dana through the dedicated-VM row and the audit-log row

Dana is VP of Security at a forty-person B2B shop that already pays Cursor for the editor. Procurement forwarded a grok bot enterprise waitlist screenshot and asked whether to pause Teams Standard until "the real SKU" opens. Dana has two rows that are not optional: a dedicated VM per bot, and an exportable audit log of every bot action.

Tuesday, 10:05. You sit with the FAQ, the computer page, and the teams page open. You do not sit with a form.

She wants each bot on its own VM so research cannot read production keys. The computer is assigned to the user account, not to a bot. Screens are not vaults. Separate bots are not a security boundary. She wants a year of actions in the SIEM. An audit view of Bot actions does not exist yet. Twenty run records per routine are a sliding window, not a ledger. Pause is a stop. Coming-soon Kill is not shipped, and a halt is not a history. [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet) is how you keep a packet yourself.

She says then we wait for the waitlist. Waiting does not mint a VM per bot or a log. If those two rows are hard requirements, Grok Bot is the wrong runtime today. If the company can operate with one computer per person, send on ask, and a company-owned packet, the seats already include Bot.

| Dana's row | What she wanted | What the product is | Honest cell |
|---|---|---|---|
| Dedicated VM per bot | One machine, one bot, keys cannot cross | One machine per user. Every bot on that user shares it | No. Isolation unit is the account |
| Audit log of Bot actions | Who did what, when, exportable, retained | No audit view yet. 20 run records per routine | No product log. We keep a packet |
| Per-bot credential vault | Research cannot see ~/.aws from deploy | Shared cookies, files, CLI creds | No. Docs forbid using bots as a boundary |
| Org-owned routines | Monday job outlives the person | Routine glued to one Bot. Delete Bot, clock dies | No team-level routines |

The meeting ends when Dana writes those nos, not when someone promises a date. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) can still run on public sources plus internal docs, on a Teams seat, with send forbidden. That job requires Dana to accept the shared computer.

## Name the controls a security team will still hate after checkout

Buying the seats does not make the architecture nicer. A security team that already disliked Dana's two rows will dislike the rest of the surface once the bots exist. Write the hates down before finance posts the card.

| Control they expected from an enterprise agent | What actually shipped | Why they will still hate it |
|---|---|---|
| Delete bot, secrets gone | Deleting a bot leaves files and sessions | Offboarding is account deletion, not a rename |
| Org routine catalog | Max 50 routines per Bot, 20 run records, nothing team-level | The clock dies with the bot and the person |
| Product spend cap | None. Overflow billed from model and token cost | Finance cannot point at a Bot-specific ceiling |
| Admin model lock | No picker, for members or admins | Security cannot restrict the serving model |
| Approval as undo | An approval controls the proposed action. It does not reverse work already completed | The first ten steps can already be done |
| Mobile admin | iPhone can pause and resume only | History, edit, test, and delete need desktop |
| Kill as evidence | Coming soon, no date. Deletes VM, keeps durable storage | Not shipped, and a halt is not a log |

Static egress IPs cut both ways. Some reviewers like an allowlist. Some hate datacenter ranges that destination sites already block. Privacy Mode (Legacy) is a hard stop, not a degraded mode. Teach-by-demonstration is not an audit trail. [The Grok Bot safety checklist](/blog/grok-bot-safety-checklist) is the pre-flight. [Shared computer security](/blog/grok-bot-shared-computer-security) is the architecture. They will still hate the gaps. The question is whether the jobs you want can live inside them.

## Stop mapping SOC 2, SSO, and tenant isolation onto missing pages

Questionnaire software hates a blank. People fill blanks with adjacent facts. Adjacent facts become false claims.

SOC 2: this site has no Grok Bot report to quote. Ask Cursor and xAI for whatever they currently publish. Do not copy a SpaceX, Cursor editor, or xAI API letter into the Grok Bot row unless the letter names Grok Bot.

SSO: Grok Bot uses Cursor authentication. How your company signs into Cursor is a Cursor question. This article will not claim SAML, OIDC, SCIM, or a Grok Bot-specific IdP. Confirm organization login on Cursor's live account docs. Do not translate it into "Grok Bot Enterprise SSO is included."

Tenant isolation: there is no documented company tenant of Bot computers. There are user accounts, and there is one computer per account. Hosted MCP tokens on Cursor's backend are not a second tenant.

| Questionnaire prompt | Tempting false fill | Honest fill |
|---|---|---|
| Do you have SOC 2 for Grok Bot? | Yes, we are on SpaceX / Cursor / xAI | Not documented on this site. Ask the vendor for a letter that names Grok Bot |
| Do you support SSO? | Yes, we use Okta for Cursor | Cursor identity details live on Cursor's pages. This recap will not specify a Grok Bot SSO design |
| Is there an Enterprise SKU? | Yes, we are on the waitlist | Not a documented SKU with a price here. Confirm waitlist copy live |

False fills fail the first screenshot request. Honest fills fail some deals. Fail the deal on purpose if the missing control is actually required.

## Pin every routine to one seat because nothing is team-level

A routine assigns a workflow to one Bot. Maximum fifty routines per Bot. The app keeps the twenty most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Enterprise buyers hear Teams and picture a shared calendar of jobs. The product does not have that object. If you schedule a Monday pack on Priya's bot and Priya leaves, the clock leaves with her unless you copied the charter onto someone else's seat and created a new routine. Renaming her bot does not move the computer. On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop ([mobile](https://docs.x.ai/grok-bot/mobile)).

[How to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine) is the clock page. [Standup Scribe](/bots/standup-scribe) is the right shape for a Monday DM: one owner, internal only. Put it on the person who will still be here. Twenty run records are a debug cache, not the year of history Dana asked for. If you need retention, the bot writes a packet into a folder the company owns on every run.

## Paste a procurement brief that only claims what the docs claim

Do not let the waitlist screenshot become the brief. Write the brief in a document the company owns, with Dana's two nos already in it, before anyone connects a mailbox.

\`\`\`text
Name: Northline buyer brief for Grok Bot (not an Enterprise SKU)
Owner: Priya (this Cursor Teams Standard seat). Security reviewer: Dana.
Date of vendor check: [fill the morning you pay]

What we claim, and only this:
- Cursor Teams Standard at $40/user/mo includes Grok Bot. Teams Premium at
  $120/user/mo includes the same Bot product. Confirm live on Cursor team
  pricing and https://docs.x.ai/grok-bot/faq.
- Each eligible user gets one persistent cloud computer assigned to that
  user, not to a bot. Screens are not security boundaries.
- There is no documented Grok Bot Enterprise SKU, waitlist form, SOC 2
  letter, or SSO spec on this brief. If a waitlist appears on Cursor or
  xAI today, attach a screenshot of THAT page, not a recap.

What we explicitly do not claim:
- Dedicated VM per bot. Audit view of Bot actions. Per-bot credential
  isolation. Team-level routines. A Grok Bot-specific spend cap. A model
  picker. A ship date for coming-soon Kill or team execution ceilings.

Job allowed on this seat:
- Chief of staff briefing from public pages plus our docs folder.
- Inbox triage that drafts and never sends, only after Dana accepts the
  shared computer and the missing log.

Boundary: never send, never post, never pay, never push, never merge,
never complete 2FA, never treat a named bot as a vault or as a movable
org object. If Priya leaves, delete her user account. Copy this text onto
the next seat. Do not rename her bots and call it a handoff.

Packet: every run appends bot name, time, sources, proposed action, and
stop reason into /workspace/packets/. Send stays on ask. Screenshot the
proposal before anyone clicks.
\`\`\`

If the job cannot survive those nos, do not buy the seats in order to negotiate with a waitlist. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) never sends, never replies, and never permanently deletes. That is still a job on a shared computer with no product log. Dana has to accept that shape, in writing, in this brief.

## Answer the objection that waiting for Enterprise is the safe play

The strongest case against buying now is simple. Security has two hard rows. The product fails both. A waitlist screenshot exists in Slack. Waiting costs nothing this month. Buying Teams Standard is buying a personal cloud desktop with a company invoice, then pretending the invoice changed the architecture. Premium at one hundred twenty is the same trap with a larger line.

Grant the two rows. Dana is not confused. Dedicated VM per bot is not the product. An audit view is not the product. Those sentences stay true if you wait a quarter, unless a vendor page you can screenshot has actually changed. Waiting is not a control. It is a delay. This page does not have evidence a SKU is about to exist, and will not invent a date so the delay feels like a plan.

The objection wins when those two rows are truly blocking. Confirm another vendor's current page. Do not keep a waitlist PNG on the roadmap as if it were a committed SKU. [Claude Cowork](/blog/grok-bot-vs-claude-cowork) and [ChatGPT Work](/blog/grok-bot-vs-chatgpt-work) are different products. Confirm those vendors live. The objection loses when the jobs you want are internal briefs, draft-only mail, and public-source research, and Dana has accepted the shared computer in the brief. Then the documented doors already include Bot. Sitting on Hobby or Pro at twenty while you wait for a SKU this site cannot see is how you spend a quarter with no briefing bot and the same architecture on the other side.

## Verify entitlement and waitlist language on live vendor pages yourself

These checks can come back false. If they do, you do not have grok bot enterprise, you do not have a waitlist you can act on, or you do not have the seat you thought, and you should not brief the company as if you did.

| Check | Pass | Fail |
|---|---|---|
| This morning's [FAQ](https://docs.x.ai/grok-bot/faq) still lists Cursor Teams Standard and Premium as eligible | The documented company-shaped doors still exist | This page is stale. Shop the FAQ, not the Slack PNG |
| [Cursor team pricing](https://cursor.com/docs/account/pricing) still shows $40 Standard and $120 Premium including Bot | The prices you quoted still exist | Re-quote. Do not defend an old number |
| Cursor and xAI pages, opened today, either show waitlist copy or they do not | You know whether waitlist is live vendor language | You are still arguing from a recap. Stop |
| Invoice plus that person's account screen say Teams Standard or Premium, not Pro at $20, not Hobby | That person has a door | Reinstalling will not promote them |
| No org screen lists Bot actions across the team | The missing audit view is still missing | Do not write "we have an enterprise audit log" |

If the FAQ and this page disagree, the FAQ wins. Dates on this page are 25 to 27 August 2026. [Grok Bot cost](/blog/grok-bot-cost) is usage shape after the door is open. [Spend cap and token burn](/blog/grok-bot-spend-cap-and-token-burn) is the missing ceiling. Official desktop path: [x.ai/bot](https://x.ai/bot). The waitlist check fails when the live page has no such language. That failure is useful.

## Keep irreversible jobs behind a human click the product will not log

There is still no audit view. That fact decides where the click lives. Anything that leaves the building (mail, posts, purchases, merges, payments) sits on ask, with a screenshot or export of the proposal stored next to the packet, or it does not run.

An approval controls the proposed action. It does not reverse work already completed. Denying step eleven leaves steps one through ten done, with no product view that lists them. Those ten needed to be in the packet first. [Approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility) is the control surface. This page is why you cannot point at an enterprise log instead.

[Inbox Triage](/bots/inbox-triage) drafts three replies and waits. [Churn Watch](/bots/churn-watch) never pings the customer. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) stays inside. Write the same never-send verb into the Northline brief. Teams Standard will not print it. A waitlist will not print it either.

## Hold the first production login until the brief survives security review

The shopping task is not complete when someone finds waitlist copy. It is complete when Dana has signed the nos, Priya's seat shows an eligible plan, Privacy Mode (Legacy) is off, and the first job is a brief that never sends. Do not connect Gmail to debug a missing roster. Do not paste an AWS key onto the computer so a demo looks serious. Watch a manual run finish before you schedule a routine. Claude Code, SKILL.md, and CLAUDE.md compatibility is [Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build), never this product.

If Dana's two rows stay blocking, stop. The waitlist, if it exists on a vendor page today, is still not a dedicated VM and still not a log. If her two rows become accepted constraints, buy the documented seat, run the internal job, keep send on ask, and keep your own receipts. That is grok bot enterprise as it actually exists on this site: a keyword people search, a Teams include you can verify, and a product a security team will still hate for reasons the docs already state.

**Keep reading:** [Grok Bot on Cursor Teams Standard](/blog/grok-bot-teams-standard), [do not use separate bots as a security boundary](/blog/grok-bot-not-a-sandbox), [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet).

## Frequently Asked Questions

### Is Grok Bot enterprise a documented SKU with a waitlist form on this site?

No. This site does not document a Grok Bot Enterprise SKU, a waitlist form, a queue position, or a ship date. Cursor Teams Standard at forty dollars per user per month and Teams Premium at one hundred twenty per user both include Grok Bot, checked as of 25 August 2026 against the FAQ and Cursor team pricing. If Cursor or xAI currently shows waitlist language, that is their live copy. Confirm it there today. Do not copy a Slack screenshot into a purchase order, and do not ask a recap to host a form it does not have.

### Do Cursor Teams Standard and Teams Premium include Grok Bot today?

Yes, as of 25 August 2026. Both Teams SKUs include Grok Bot per seat. The include is an eligibility stamp on a person, not a company-owned bot roster. Each eligible user gets one persistent cloud computer. Premium is not a better Bot. It is a richer Cursor SKU at a higher price, with the same documented Bot after the access check passes. Cursor Hobby and Cursor Pro at twenty dollars do not include Grok Bot. Confirm the live invoice and the FAQ the morning you brief staff, because plan names move.

### If we join a waitlist, do we get a dedicated VM per bot and an audit log?

Not according to anything this page is allowed to assert. The current product assigns one computer to the user account, not to a bot, and an audit view of Bot actions does not exist yet. A waitlist, if a vendor page even shows one, is marketing language until that page also documents those two controls. This article will not invent them, and will not invent a date on which they arrive. If those rows are hard requirements, treat Grok Bot as the wrong runtime today and confirm another vendor live.

### How should we answer security questions about SOC 2 and SSO for Grok Bot?

Leave those cells honest. This site has no Grok Bot SOC 2 letter to quote, and this article will not specify a Grok Bot SSO design. Ask Cursor and xAI for whatever they currently publish, and only paste a letter that names Grok Bot. Sign-in runs through Cursor, so organization login details belong on Cursor's live account pages. Isolation is still one computer per user, screens are not vaults, and there is still no audit view. Write those facts. Do not fill the blank with a rumour so the spreadsheet looks complete.
`,
};

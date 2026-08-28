import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Prove Grok Bot to a Risk Committee',
  description:
    'Prove grok bot to a risk committee with product facts: no audit view, no spend cap, one shared computer, screens are not vaults, approval is not undo. Do not invent SOC2.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# Prove Grok Bot to a Risk Committee

The CISO would not put Grok Bot on the 19 August 2026 agenda until Soren could show a dedicated virtual machine per bot and a searchable action log. Both objects are missing from the product. The SKU was tabled. This page is the pack Soren should have carried.

You prove grok bot to a risk committee by writing the gaps in the same ink as the buy: no audit view of Bot actions yet, no Grok Bot-specific spend cap, one persistent cloud computer per account, screens that are not vaults, and an approval that does not undo completed work. You do not invent a SOC 2 report. You do not invent a per-bot jail. You do not attach a ship date to a coming-soon label.

This is a committee pack. It is not [how to answer a security questionnaire](/blog/how-to-answer-security-questionnaires). It is not [Grok Bot for security teams](/blog/grok-bot-for-security-teams). It is not [the budget talking sheet](/blog/explain-grok-bot-to-your-boss). Stay here if the room is scoring isolation and residual risk.

This page is not legal advice and not a certification opinion. Facts follow [the Grok Bot FAQ](https://docs.x.ai/grok-bot/faq), [computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), [approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy), and [teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises), checked 25 August 2026. Confirm live vendor pages the morning of the meeting.

## Carry a gap sheet into the committee, never a SOC 2 story the vendor never published

A risk committee needs a representation it can live with after the minutes land in the folder. The 19 August failure was a one-pager that listed controls the product does not ship, copied from a roundup that still treated each bot as a private machine.

Write the gap sheet in current tense. No roadmap poetry. Two facts kill a pilot before it starts: Privacy Mode (Legacy) blocks Grok Bot entirely, and hosted MCP sign-in tokens stay with Cursor's backend, not on the computer. That second sentence is a token-location exception, not a reason to call the VM a vault. Browser cookies, sessions, files, and command-line credentials still live on the shared computer.

If someone wants a SOC 2, ISO, HIPAA, or PCI sentence, leave the cell blank and open the vendor page that morning. [Grok Bot in regulated industries](/blog/grok-bot-regulated-industries) is the line for records and counsel. This pack only says what the product is.

| Packet row they will ask | Documented product, 25 Aug 2026 | Sentence you write |
|---|---|---|
| Dedicated VM per bot | One computer per account. Screens are not vaults | We cannot isolate bots with extra names |
| Searchable action log | No audit view of Bot actions yet | We keep our own packets. The product does not |
| Spend cap we can type into finance | No Grok Bot-specific spend cap. No published allowance figure | Weekly pool, then on-demand. We will not invent a number |
| SOC 2 for Grok Bot | Not a fact this site will invent | Blank until the vendor page says it |

The committee can still say no. A yes built on a dedicated VM and a vendor action log is the expensive kind.

## Open the pack by naming one shared computer, then refuse the dedicated-VM request

Start with the object. A Grok Bot is a named job on one persistent cloud computer assigned to the user account. The computer is a managed Linux VM. The bot runs as a non-root user. That is not a Linux desktop app, and it is not one VM per bot. Primer: [what a Grok Bot is](/blog/what-is-a-grok-bot). Architecture: [One Computer, Many Screens](/blog/grok-bot-shared-computer-security). Teaching line: [do not use separate bots as a security boundary](/blog/grok-bot-not-a-sandbox).

The CISO's first condition, a dedicated VM per bot, is not a setting you missed. It is not the product. Creating Bot B adds a screen on the same computer. Cookies, signed-in sessions, files, and CLI credentials are shared. Deleting a bot does not remove those files or sessions. If finance and research must not see each other's logins, you need a second eligible account (a second computer, a second bill), not a second name in the sidebar.

Say that in the first two minutes. If you wait until after the demo, the committee will have already scored isolation as a pass.

Supported clients are a risk fact. Documented: macOS on Apple silicon and Intel, Windows on x64 and Arm64, iPhone on iOS 18 or later. Not supported: Linux desktop, Android, iPad. On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop. The cloud computer being Linux does not give an Ubuntu laptop a client.

Coming soon, labeled as not shipped, with no date: a team-level ceiling on local execution, and an admin Kill that deletes the VM while durable storage is kept. Do not list either as a control you have today. Kill is a future stop, not a paper trail.

## Write screens-are-not-vaults on page one before anyone scores isolation

Committees hear "named bots" and map that onto named service accounts with separate machines. Correct the mapping before the scorecard is filled.

Each bot gets its own screen. The computer-and-apps page calls those screens separate work surfaces, not separate security boundaries. A research bot can open whatever the mail bot left signed in. [Inbox Triage](/bots/inbox-triage) and [Lead Scout](/bots/lead-scout) on one account are two windows, not two vaults. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) does not grow a wall because you named it briefing. Deleting the briefing bot does not sign Gmail out. Offboarding is [how to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely): vendor revoke plus a sign-out, not a sidebar click.

If residual-risk appetite requires per-bot machines, the honest close is not this SKU. Do not offer a charter as a substitute VM. A charter is an instruction. The filesystem does not read it. Connection diet: [least privilege for bots](/blog/least-privilege-bots).

| Isolation they think they bought | What the product assigns | What actually isolates |
|---|---|---|
| One VM per named bot | One computer per user account | A second eligible account: a second computer and a second bill |
| Separate cookies per bot | Shared browser, shared sessions | Sign out after a 2FA job. Never leave a staff cookie overnight |
| Delete bot, secrets gone | Files and sessions may remain | Revoke at the vendor, then delete the named bot |
| Screen as a vault | Screen as a work surface | Do not put production admin cookies on this computer |

The first job after a yes, if there is a yes, is never-send and never-login-to-prod. A briefing pack. Labels and drafts. Public-source research. Not a console. Not a send.

## Tell the room hosted MCP tokens sit on Cursor backend, not in the VM

Someone will have read that hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. That sentence is true. It is also the sentence that turns a gap sheet into a false pass if you stop talking.

Write both locations. Hosted MCP tokens: Cursor's backend, not the VM. Browser cookies, sessions, files, and CLI credentials: the shared computer. If anyone signed into HubSpot, Gmail, or an admin console in that browser, every bot on the account can open the tab. Deleting the named bot does not move those cookies. Detail: [where Grok Bot MCP sign-in tokens actually live](/blog/grok-bot-hosted-mcp-tokens). Decision fork: [Grok Bot and MCP](/blog/grok-bot-mcp-servers). Isolation moves: [how to isolate Grok Bot credentials](/blog/how-to-isolate-grok-bot-credentials). Do not invent encryption the teams page did not print.

Static egress IPs are another row the CISO may raise. Some services flag datacenter IP addresses. If a vendor will not accept that egress, that vendor does not belong on this computer.

## Say Privacy Mode (Legacy) blocks Grok Bot before anyone schedules a pilot

A committee that already required Legacy Privacy Mode on Cursor will treat the Grok Bot SKU as a toggle inside an existing policy. It is not. Privacy Mode (Legacy) blocks Grok Bot entirely. Grok Bot requires cloud data storage. The paid seat will not open until the Cursor data setting changes, or until the organization accepts that this product is out of scope.

Ask before the agenda. If the policy PDF still requires Legacy Privacy Mode, the honest pack is: we cannot run this product under the current Cursor data mode. That is a setting decision for security and legal, not a download fix. The dedicated page is [why Legacy Privacy Mode blocks Grok Bot](/blog/grok-bot-privacy-mode). Confirm the live control on Cursor's privacy settings the morning of the meeting.

Do not invent what Privacy Mode encrypts. This pack only records the block. If they will not change the setting, stop. Do not schedule a two-week pilot that cannot start. Do not put "pending Privacy Mode exception" on a slide as if the bot were already running.

## Print no-audit-view as a current gap, not as a dated promise

The CISO's second condition, a searchable action log, is also not a setting you missed. An audit view of Bot actions does not exist yet. Write that as present tense. Do not attach a quarter. Inventing a date becomes a representation the moment the minutes are filed.

What exists is thinner than a ledger. A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app keeps the 20 most recent run records per routine. That is a sliding window. Deleting a Bot deletes its routines. Nothing about that store is team-level. Pause is a stop, not a log.

The substitute is yours: force the bot to write a packet the company owns on every run. Keep send on ask, or keep send off. Screenshot or export the proposed action. Name a human who is allowed to fail the close. Receipts: [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet). If the company cannot buy software that lacks a central action history, this SKU is a no, dated against the 25 August 2026 docs. Coming-soon admin Kill is not an audit log.

| Evidence they will request | What ships today | What you keep instead |
|---|---|---|
| Vendor audit view of every bot action | Not available yet | A company-owned packet appended on every run |
| Ninety-day retention of actions | Last 20 run records per routine | The packet lives in a folder you retain |
| Proof a send was reviewed | Send can sit on ask | Screenshot or export of the proposal, stored with the packet |
| Admin history of Kill | Kill is coming soon, not shipped | Do not list Kill as evidence of past work |

## Print no-spend-cap as a current gap, and refuse to invent an allowance dollar

There is no Grok Bot-specific spend cap. Subscriptions include a weekly usage allowance. Overflow is on-demand, billed from model and token cost. No plan publishes that allowance as a dollar figure. If you type a number into the pack so finance looks settled, you have made a representation the vendor did not make.

Say it in the room: we cannot cap this product at a number today. We can cap the work. One standing job. A human review. A calendar check on usage. No five-minute crawl, 288 times a day, "just to keep it warm." After a yes: [no spend cap](/blog/grok-bot-spend-cap-and-token-burn).

Doors, confirmed live before anyone pays: Cursor Pro+ at $60 a month is the cheapest documented individual paid path. SuperGrok Plus at $100 includes Grok Bot. SuperGrok at $30 does not. Cursor Hobby and Cursor Pro at $20 do not. Cursor Teams Standard at $40 per user and Premium at $120 per user both include. Cursor Ultra at $200 includes. A one-time trial is an eligibility path for individuals. SuperGrok Heavy is eligible. Do not print Heavy as $300. Eligibility widened on 21 August 2026.

There is no model picker for members or admins, and the vendor does not plan to allow that choice. Do not tell the committee they can pick a cheaper model to cap spend. Do not say Grok Bot runs grok-4.6. If a numeric cap is a hard requirement, the honest close is not this SKU.

## Treat every approval as a gate on the next click, never as undo of finished work

Committees hear "approval" and map it onto maker-checker with a rewind. The product sentence is the opposite: an approval controls the proposed action. It does not reverse work already completed. If a send already left, Deny does not unsend it. If a purchase already posted, Ask does not refund it. Setup: [how to set Grok Bot approvals](/blog/how-to-set-grok-bot-approvals).

Write the operational consequence: irreversible actions stay off this computer, or they sit on ask with a human who is actually watching, plus a packet you keep because there is no vendor audit view. Send, pay, publish, production admin, and key rotation are not "we will approve them live" on day one.

A charter boundary is the control you actually have. [Inbox Triage](/bots/inbox-triage) labels and drafts, never send. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) never sends, never replies, and never permanently deletes. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) stays a pack. Those boundaries are instructions plus your review habit. They are not an undo log.

On iPhone, pause and resume only. If the named reviewer is in an airport, they can stop a run. They cannot edit the approval rule. Staff the last-mile role to someone who can sit at a Mac or Windows desk when the ask fires.

## Walk Soren's 19 August pack from a dedicated-VM ask to a written no

Soren had to prove grok bot to a risk committee. The CISO's pre-read named two conditions: a dedicated VM per bot, plus an action log the committee could query. Arbitrary example, declared as such: a 25-minute slot and one slide that still said "isolated agents."

Soren's June one-pager had copied a public roundup. It said each bot ran on its own computer. It said an audit trail was available. It skipped Privacy Mode. It skipped hosted MCP versus browser cookies. It priced the door as a $200 Mac-only SKU, stale after 21 August 2026.

In the room the CISO asked two questions. Can we give the finance bot its own VM so the research bot cannot open the bank tab. Can we pull a log of every action if something leaves the building.

The true answers are no and no. Not "not yet, we will see." Not "yes, with guardrails." Soren said "we can isolate with names" and "we can export run history." The committee heard dedicated VMs and a ledger. The SKU was tabled. That is the dated failure.

The minutes should have held this written no: neither condition is the product. Isolation at VM strength is a second eligible account, not a second sidebar name. Hosted MCP tokens stay with Cursor's backend. That exception does not move browser logins off the VM. Twenty run records per routine are a cache, not an action log. An approval is not undo. Privacy Mode (Legacy), if still on, blocks the product. There is no Grok Bot-specific spend cap. We will not invent SOC 2. If those gaps are disqualifying, do not buy this SKU for this job this quarter.

After that written no, a narrower yes is still possible: one never-send job, packets you own, send off, production admin cookies off the machine, Privacy Mode checked. That is a trial with residual risk named. It is not the CISO's original object.

## Paste a one-page committee pack that names every documented hole

Send this in the pre-read. Do not send a screen recording of a bot clicking around Gmail. A recording invites the intern translation. A gap sheet invites a decision.

\`\`\`text
Grok Bot risk-committee pack (confirm docs and prices live)
Date of this pack: [meeting date]
Operator: Soren (or whoever sits in the slot)
This is not legal advice and not a certification opinion.

What it is
- Named jobs on ONE persistent cloud computer assigned to the USER ACCOUNT
- Each bot gets a SCREEN. Screens are work surfaces, not vaults
- Computer is a managed Linux VM. Bot runs non-root. Not a Linux desktop app
- Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer
- Browser cookies, sessions, files, CLI credentials ARE on the computer

What it is not
- A dedicated VM per bot
- A vendor audit view of Bot actions (does not exist yet)
- A Grok Bot-specific spend cap (none. No published allowance dollar)
- Undo of completed work (approval is a gate on the next click)
- A SOC 2 / ISO / HIPAA claim we will invent
- A Linux desktop, Android, or iPad client

Doors (checked 25 Aug 2026, confirm before pay)
- Cursor Pro+ $60/mo: cheapest individual paid door
- SuperGrok Plus $100/mo: includes. SuperGrok $30 does not
- Cursor Teams Standard $40/user/mo and Premium $120: both include
- Cursor Ultra $200/mo: includes
- Hobby, Cursor Pro $20: do not include
- Trial: limited usage, one-time
- SuperGrok Heavy: eligible. Do not print an unpublished Heavy price

Hard blocks
- Privacy Mode (Legacy) blocks Grok Bot entirely. Ask before the agenda
- No model picker. Do not claim a cheaper model as a cap
- Static egress IPs. Some services flag datacenter addresses
- Coming soon, NOT shipped, no date: team local-execution ceiling; admin
  Kill deletes the VM and durable storage is kept. Kill is not a log

First job if the committee still says a narrow yes
- Never-send. Briefing pack or inbox drafts. Human sends
- No production admin cookies on this computer
- Packet the company owns on every run (20 routine records are not a ledger)
- Deleting a bot does not sign vendors out

CISO conditions from 19 August 2026
- Dedicated VM per bot: NOT THE PRODUCT
- Searchable action log: NOT THE PRODUCT
\`\`\`

If they still want a demo, show a pack filling itself, not a send and not an admin console.

## Answer the member who says a named bot plus a charter is already a control

The strongest objection in this room is not "we should wait." It is the claim that a named bot, a written charter, and ask-on-send already give the committee isolation and an audit trail, so the dedicated VM and the action log are nice-to-haves rather than missing product.

Take it at face value. Named bots are real. Charters are real. Ask is real. None of them is a VM. None of them is a vendor action log. A name is a screen. A charter is text. A sibling bot on the same computer can still open the leftover cookie. Ask is a gate on the proposed action. If nobody is watching, or if the reviewer is on iPhone and cannot edit, the gate is a hope. If the action already completed, the gate does not rewind it. Twenty run records are a sliding window, not ninety days of who-did-what.

Where the objection wins: one person, one reversible job, packets we own, no vendor audit view, no spend cap. That committee can say a narrow yes. Where it loses: written conditions for per-bot machines and a queryable vendor log. Those are not met by names and prose. Say no. A second eligible account is the isolation move that actually adds a computer. It also adds a bill. Offer that as architecture, not as a free sidebar trick.

## Fail the pack in the room if any row still claims a VM, a log, or a cap

A pack that cannot fail is a brochure. Run this check on a projector, on the live docs from 25 August 2026, not on a June screenshot. Fail the pack if any slide row still claims a control the product does not ship.

| Slide still says | Why it fails | Repair before any vote |
|---|---|---|
| Each bot has its own VM, sandbox, or jail | One computer per account. Screens are not vaults | Rewrite as one computer, many screens |
| Audit log, action history, or SIEM feed from Grok Bot | No audit view of Bot actions yet | Write the gap. Keep company packets |
| Weekly allowance is $X | No published dollar figure | Delete the number |
| SOC 2, ISO, or HIPAA as a Grok Bot fact | Not a fact this pack will invent | Blank, plus a vendor URL from this morning |
| Privacy Mode is compatible | Privacy Mode (Legacy) blocks Grok Bot entirely | Ask whether the setting will change |

If any row fails, do not vote. Edit the pack or table the SKU. The 19 August failure was a vote on a slide that would have failed this check.

After a narrow yes, the operating check is different and still allowed to fail: five weekday packets a human opened, zero unattended sends, zero production admin cookies, leftover sessions signed out after any 2FA job. That check lives after the committee, not in it.

## Stop this pack when the meeting is a questionnaire, a SOC desk, or a budget slot

This page stops when the artifact in front of you is no longer a residual-risk vote on missing product controls.

| Artifact in the room | This pack | Twin page |
|---|---|---|
| Customer workbook with yes or no rows | Stop. Do not paste these minutes into a customer form | [How to answer security questionnaires without guessing](/blog/how-to-answer-security-questionnaires). [Trust Center Deal Desk](/bots/trust-center-deal-desk) drafts from an approved bank and never returns the file to the customer |
| Overnight alert dump and a console tab | Stop. A committee pack will not keep AWS admin cookies off the machine | [Grok Bot for security teams](/blog/grok-bot-for-security-teams): cluster the export, never remediate |
| Ten-minute slot with the person who signs | Stop. This page does not price a headcount swap | [Explaining Grok Bot to someone who approves the budget](/blog/explain-grok-bot-to-your-boss) |

Claude Code, SKILL.md, and CLAUDE.md compatibility is Grok Build, never Grok Bot. If an engineer starts talking about SKILL.md as a Grok Bot control, they are on the wrong product. Park it.

SpaceX acquired xAI (announced 2 February 2026). SpaceX's acquisition of Anysphere (Cursor) closed 14 August 2026. Do not tell the committee that xAI acquired Cursor. Vendor identity belongs in due diligence. It does not fill an audit-view gap.

## Leave ISO numbers and legal opinions off this page on purpose

Do not invent SOC 2, ISO 27001, a HIPAA BAA, a PCI ROC, or a FedRAMP package for Grok Bot. If a member asks whether the vendor is certified, the pack says: confirm on the vendor's current trust or security page the morning of the vote. A blank is safer than a number from a blog.

This page is not legal advice. It will not tell you whether residual risk is acceptable, whether Privacy Mode must stay on, or whether a second eligible account is enough isolation for counsel. Those are company decisions. This pack only stops you from representing a dedicated VM, a vendor action log, a spend cap, an undo button, or a certification the product pages do not state.

Grok Bot launched in beta on 11 August 2026. Eligibility widened on 21 August 2026. The product ships weekly. Re-read the four docs pages before the next committee. If a control has shipped, update the gap sheet. If it has not, do not keep last quarter's hope in the minutes.

**Keep reading:** [Grok Bot Has No Audit View Yet: How to Keep Your Own Receipts](/blog/grok-bot-no-audit-log-yet), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [Why Legacy Privacy Mode Blocks Grok Bot Entirely](/blog/grok-bot-privacy-mode).

## Frequently Asked Questions

### Can we tell the committee each Grok Bot has its own virtual machine?

No. All bots on an account share one persistent cloud computer assigned to the user, not to a bot. Each bot gets a screen. Screens are work surfaces, not security boundaries. Docs say not to use separate bots as a security boundary. Cookies, sessions, files, and command-line credentials are shared. Deleting a bot does not remove those. Hosted MCP tokens stay with Cursor's backend. That exception does not make the VM a per-bot jail. A second eligible account is a second computer. A second name is not.

### Does Grok Bot ship an audit log we can show the risk committee?

An audit view of Bot actions does not exist yet. Do not attach a ship date. Routines keep the 20 most recent run records per routine, with a maximum of 50 routines per bot, and that store is not team-level. Pause is a stop, not a ledger. An approval is a gate, not a receipt unless you export the proposal. If the committee requires a vendor action log, this SKU cannot meet that requirement today. Keep your own packets if you still run a narrow never-send job.

### What should we write in the pack about SOC 2 or other certifications?

Leave the cell blank unless the vendor's current page states the claim that morning. Do not invent SOC 2, ISO, HIPAA, or PCI coverage for Grok Bot from a roundup or from this site. A blank that you will confirm is a representation you can defend. A certificate number you guessed is not. This page is not legal advice. Send certification questions to counsel and to the vendor trust page, not to a committee slide you filled to look complete.

### If a reviewer clicks Deny, does that undo work the bot already finished?

No. An approval controls the proposed action. It does not reverse work already completed. A send that already left stays sent. A purchase that already posted stays posted. Put irreversible actions off this computer, or park them on ask with a human at a desktop who is actually watching, and keep your own packet because there is no vendor audit view. iPhone can pause and resume only. Do not staff the last-mile role to a reviewer who cannot open history at a Mac or Windows desk.
`,
};

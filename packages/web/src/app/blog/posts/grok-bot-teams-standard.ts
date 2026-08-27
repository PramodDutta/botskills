import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on Cursor Teams Standard: The $40 Seat Path',
  description:
    'Cursor Teams Standard at 40 dollars per user per month includes grok bot teams standard eligibility. It is still one computer per person, not a team-shared bot roster.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Grok Bot on Cursor Teams Standard: The $40 Seat Path

Finance signed six Cursor Teams Standard seats because a vendor call said Grok Bot comes with the plan, and that sentence is true in a way that still wrecks the offboarding spreadsheet.

Grok bot teams standard is an eligibility stamp on a person. Forty dollars per user per month, checked as of 25 August 2026 against [Cursor team pricing](https://cursor.com/docs/account/pricing) and the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq), includes the right to run Grok Bot. It does not mint a company-owned bot roster you can reassign when someone resigns. Each seat is one user account. Each user account gets one persistent cloud computer. Named bots are screens on that computer. Routines live on one bot. Nothing about routines is team-level.

This page is that invoice line. It is not the individual sixty-dollar door ([Cursor Pro+ and Grok Bot](/blog/grok-bot-cursor-pro-plus)), not why sign-in runs through a Cursor identity ([why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained)), and not a ranking of every door ([the cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot)). Stay here if you are buying Teams Standard and need to know what the forty dollars attached.

## Stamp Teams Standard as a per-person eligibility line, not as a shared bot roster

Cursor Teams Standard is a Cursor plan. Grok Bot is a separate product whose access check reads that plan. The FAQ lists Teams Standard and Teams Premium among the eligible subscriptions, next to Cursor Pro+, Cursor Ultra, SuperGrok Plus, SuperGrok Heavy, and a one-time trial. Eligibility widened on 21 August 2026 ([xAI announcement](https://x.ai/news/grok-bot-more-plans)).

The stamp is per user. Buy six seats and you bought six stamps, not one fleet license. [What a Grok bot is](/blog/what-is-a-grok-bot) is a named agent on a managed cloud computer assigned to the user account, not to a bot, and not to the Cursor team object in billing ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).

Teams Standard does not mint a private Bot SKU with extra knobs. You receive the same Grok Bot every other eligible plan receives. A picker, a cap, a private machine per bot, and an org console of Bot actions are not on this stamp. They are not on Premium either. If the company already holds Premium, Ultra, SuperGrok Plus, or SuperGrok Heavy, those people already have a door.

## Confirm grok bot teams standard on the live invoice before you brief staff

The installer does not know what you pay. Sign-in does. If a teammate still sits on Cursor Pro at twenty, or on Hobby, the bot will not activate for that person, no matter how many Teams seats exist for everyone else.

Confirm the spelling on [cursor.com/pricing](https://cursor.com/pricing) and on [Cursor team pricing](https://cursor.com/docs/account/pricing) the morning you pay, then on the invoice and inside each person's account screen. Do not infer eligibility from a Slack screenshot.

Privacy Mode (Legacy) blocks Grok Bot entirely. A correct Teams Standard invoice will not save a person who still has that mode on.

| Invoice line that person actually has | Grok Bot on that line | What to do next |
|---|---|---|
| Cursor Hobby | Not included | Move them onto a Teams Standard seat, or send them to the trial if they are only sampling |
| Cursor Pro at $20 | Not included | The editor keeps working. The bot does not appear because they already pay Cursor |
| Cursor Teams Standard at $40 per user | Included. This SKU | Confirm the app shows this entitlement for that person, then install |
| Cursor Teams Premium at $120 per user | Included. Same Bot product | You already have a door. Premium is not a better bot |
| Cursor Pro+ at $60 | Included. Individual door, not this SKU | Stay on Pro+ if they are not actually on the team |

A Teams seat is cheaper per person than Pro+ at sixty. It is still a team SKU. If the company already pays these seats, incremental Grok Bot cost on them is zero. Hobby, Pro at twenty, and SuperGrok at thirty stay excluded even when the rest of the company is on Standard.

## Treat Teams Premium at one hundred twenty as the same Bot on a richer Cursor SKU

Teams Premium at one hundred twenty dollars per user per month also includes Grok Bot. Confirm that figure on Cursor's team pricing page the morning you quote it. Premium is a Cursor SKU with a higher price, not a Grok Bot SKU with extra knobs.

After the access check passes, Premium and Standard receive the same documented Bot: one persistent cloud computer per user, a screen per bot, a weekly usage allowance with no published dollar figure, and on-demand overflow billed from model and token cost. There is no Grok Bot-specific spend cap yet, no model picker for members or admins, and no audit view of Bot actions yet ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Do not buy Premium for a fleet console, a Bot action log, or a computer per named bot. Those are not on the Premium receipt either. Run [Lead Scout](/bots/lead-scout) on Standard the same way you would run it on Premium.

| Extra you might think the $120 seat attached to Grok Bot | What either Teams SKU actually attached |
|---|---|
| A model picker for admins | None, for members or admins |
| A computer per named bot, or a team-owned computer | One account computer per person. Screens are not security boundaries |
| An org-admin audit log of Bot actions | Not shipped on Standard, Premium, or any other documented plan |
| Team-level routines you can reassign | A routine assigns a workflow to one Bot. Nothing is team-level |

[How token burn works without a cap](/blog/grok-bot-spend-cap-and-token-burn) is the operations page for the ceiling neither Teams SKU printed. [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet) is the receipt page. Do not invent an org log to fill a questionnaire.

## Stop treating named bots as company objects you can reassign after a resignation

The expensive story attached to grok bot teams standard is not the forty-dollar line. It is the belief that a named bot is an org object you can move to the next hire.

The product does not work that way. All bots on one account share one persistent cloud computer assigned to that user, not to an individual bot. Each bot gets a screen. Screens are work surfaces, not security boundaries. Cookies, sessions, files, and CLI credentials are common property of that person's machine. "Do not use separate Bots as a security boundary" is the vendor line ([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)). Deleting a bot does not remove shared-computer files or browser sessions. Deleting the user account is the isolation story. There is no documented reassignment of a bot onto another teammate's seat.

Two people on Teams Standard are two computers. That is the only isolation unit the product documents. [One computer, many screens](/blog/grok-bot-shared-computer-security) is the principle. [Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation) is the client-leak case. Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer. Browser logins still sit on the person's VM. A hosted path is not a reassignment tool.

## Pin every routine to one person's bot because nothing is team-level

A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app keeps the 20 most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level. That paragraph is from [skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations), and it survives every Teams invoice.

There is no team calendar of routines. There is no org object named Monday Standup that outlives the bot card it was glued to. If Leena scheduled the standup on a bot on her seat, and you delete that bot, or you delete Leena, the clock dies with it. Recreate the routine on the new owner's bot. Copying a name in the sidebar is not a move.

On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop ([mobile](https://docs.x.ai/grok-bot/mobile)). There is no team-admin surface that fixes a routine you created on the wrong person's bot.

How to create and verify a clock that will still exist next Monday is [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine). [Standup Scribe](/bots/standup-scribe) is the right kind of owner for a Monday pack: one job, DM only. Put it on the person who will still be here in November, not on a "company bot" glued to whoever bought the first seat.

## Follow Leena as her agency buys six seats for a roster it cannot hand off

Leena runs a six-person content agency that already pays Cursor for the editor. Someone forwards the 21 August widening: Teams Standard includes Grok Bot. Finance signs six seats at forty dollars per user. Leena tells the team they finally have company bots.

On Wednesday she creates three named bots on her own seat: Agency Inbox, Agency Scout, Agency Standup. She treats the names as org objects she can reassign when a project manager leaves. That is the sentence she writes in the ops doc.

The bots open. They are screens on Leena's computer. Agency Scout and Agency Inbox share cookies, files, and CLI credentials. A routine she later attaches to Agency Standup is glued to that bot on her account. Max 50, 20 run records, nothing team-level. The other five people each have their own empty computer on their own seat. They cannot see Leena's three names. They never could.

| Move Leena makes | What she believed she bought | What the product actually did |
|---|---|---|
| Six Teams Standard seats at $40 | A company Bot fleet she can staff | Six eligibility stamps, six computers, six people |
| Three named bots on her account | Org objects: Inbox, Scout, Standup | Three screens on Leena's computer |
| A Monday routine on Agency Standup | A team calendar item | A per-bot clock that dies if that bot, or Leena, is deleted |
| Plan to reassign the three names to Ravi when she leaves | A handoff | No documented move. Ravi's seat is a different computer |
| Plan to keep her Gmail session "on the inbox bot" | Isolation by name | A mailbox cookie on Leena's VM, visible to Agency Scout |

Friday, Leena accepts a job elsewhere. Ops asks her to transfer the bots. There is no transfer. Delete her user and you isolate her computer. Leave her account alive so the names survive, and her sessions survive too. Rename Agency Inbox to Ravi Inbox on her leftover account and you have put Ravi's job on a computer that still holds Leena's mailbox cookie.

[Inbox Triage](/bots/inbox-triage) never sends. That boundary is not a reassignment API. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) stays internal. [Churn Watch](/bots/churn-watch) never pings the customer. Isolation for a departing person is deleting that account. Named bots are not. Client-side isolation is [Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation).

## Write the person-owned charter before the seats post to the card

Do not let Finance post six seats until the first job is written down outside the product, with an owner who is a person. Checkout is faster than drafting. Leena writes the brief first, and she puts her name on it.

\`\`\`text
Name: Leena Monday Brief
Owner: Leena (this Cursor Teams Standard seat, this user account)
Job: One internal one-pager, public sources plus our own docs folder, every Monday

You answer one question I name about what shipped last week, using public pages
and files already in this computer's workspace. Every material claim has a URL
or a file path. If a source will not open, write blocked and stop.

Boundary: Never send email, never post, never purchase, never create accounts,
never sign into client consoles, never complete 2FA. Never treat this bot as
movable. If I leave, delete this account. Do not rename this bot for the next
hire. Copy this charter as text onto their seat instead.

Deliver: one page plus a source table in /workspace. No routine until I have
watched a manual run finish. No second question unless I paste it.
\`\`\`

If the job cannot name a person, Teams Standard will not invent an org owner. There is no model picker that would let Ravi inherit a smarter object after Leena leaves. Do not schedule the Monday job during the first afternoon. Put the clock on after you have watched a run finish, on the person who will still be here, using [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine).

## Count six seats as six computers, never as one fleet license

Price the roster as people. Six Teams Standard seats are six computers if six people actually use Grok Bot. One person with six named bots is still one computer. The invoice does not multiply machines by bot names.

| People who actually need a Grok Bot computer | Teams Standard at $40 / user | What you isolated | What you did not buy |
|---|---|---|---|
| 1 (whole agency on Leena) | $40 / mo | Nothing between staff | Convenience, one cookie jar, a fake org roster |
| 6 (one seat each) | $240 / mo | Six computers | Any console you still paste across accounts, any bot you still try to reassign |
| 6 seats, jobs only on Leena | $240 / mo | Still one working computer | Five idle stamps and a story about a fleet |

Two user accounts are two computers. Staff who copy a CSV from Leena's machine onto Ravi's have rebuilt a leak by hand. There is no Grok Bot-specific spend cap. Overflow after the weekly allowance is on-demand from model and token cost, with no published dollar figure. Bill shape after the door is open is [Grok Bot cost](/blog/grok-bot-cost). If a client console must never sit next to another client's console, you need one eligible account per client, not one named bot. That math lives on [Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation).

## Leave the dummy-team-of-one shave on the shelf if you are actually one person

Forty is lower than sixty. That does not make Teams Standard the cheapest paid door for a person of one. Cursor Pro+ at sixty is the cheapest documented paid individual path as of 25 August 2026. Teams is a team SKU. You buy it when you already buy Cursor seats.

Do not open a dummy team of one to shave twenty dollars off Pro+ unless you actually want whatever else Cursor attaches to Teams. Confirm those extras on Cursor's current pages. This article will not print a third-party feature list as fact.

If you are one person with no team today, stay on the Pro+ page. If the company already pays Teams Standard, incremental Grok Bot cost on those seats is zero. Premium is not a better bot. Read [least privilege bots](/blog/least-privilege-bots) before you add a second login. SuperGrok Plus at one hundred already includes Grok Bot. SuperGrok Heavy is eligible; its price is not on [x.ai/pricing](https://x.ai/pricing) as a figure this page will print. If someone holds both subscriptions, Grok Bot uses whichever has more usage.

## Prove the seat with a check that fails if the account is still Pro

These checks can come back false. If they do, that person is not on Teams Standard, or Teams Standard is not doing what you thought, and you should not keep spending as if the door were open.

| Check | Pass | Fail |
|---|---|---|
| Invoice and that person's account screen both say Cursor Teams Standard, not Pro, not Hobby | They are on this SKU | The seat has not posted for them. Do not reinstall to force it |
| [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) still lists Cursor Teams Standard as eligible today | The stamp still exists | This page is stale. Shop the FAQ |
| Privacy Mode (Legacy) is off for that person | The stamp can be used | The SKU is correct and the bot is still blocked |
| A named bot on that person's seat can finish one public-source brief without a login | Their computer works | Do not connect Gmail to debug a bad brief |
| A second teammate cannot see that person's named bots in their own sidebar | You are looking at per-account computers | If they can, stop and re-read the FAQ |
| No org screen lists Bot actions across the team | The missing audit view is still missing | Do not write "we have a Teams audit log" into a form |

If the FAQ and this page disagree, the FAQ wins. Dates on this page are 25 to 27 August 2026. Treat the forty in the title as something you re-read on the vendor page the morning you pay. Supported clients are macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS 18 or later. Linux desktop, Android, and iPad have no client. The agent computer is a managed Linux VM, not a Linux desktop app. [Supported platforms](/blog/grok-bot-supported-platforms) is the device grid. Official desktop path: [x.ai/bot](https://x.ai/bot).

## Answer the fleet-console objection without inventing an org audit view

The strongest case against this page is simple: the company paid for Teams. Teams means org objects. Admins should see every bot, every routine, every action, and they should reassign a departing person's roster the way they reassign a laptop. Calling named bots per-person screens is pedantry. Buy the seats, create Agency Inbox, move it when people leave, and stop reading invoices like contracts.

Grant the purchase. Teams Standard is a team SKU for Cursor. Seat management exists on that side of the house. Grok Bot's access check reads the plan, then hands each eligible user the same Bot product every other eligible plan gets. The computer is assigned to the user account. Routines are per bot. An audit view of Bot actions does not exist yet.

Coming-soon items in the teams docs are not shipped. A team-level ceiling on local execution is not shipped. Admin Kill, which would delete the VM while durable storage is kept, is not shipped, and a halt is not a log. Do not invent an org-admin audit log to cover the gap. Keep your own packet. Keep send on ask. [Grok Bot has no audit view yet](/blog/grok-bot-no-audit-log-yet) is how you produce a receipt.

The objection wins if you need a fleet console: one place to reassign bots, inspect actions, and keep routines at team level. This product is not that. Confirm another vendor's current page if that is the job. The objection loses the moment you needed isolation at offboarding. Pretending Agency Inbox is an org object is how Leena's Gmail session outlives Leena. [Claude Cowork](/blog/grok-bot-vs-claude-cowork) and [ChatGPT Work](/blog/grok-bot-vs-chatgpt-work) are different products. Confirm those vendors' pages if the repeating job already lives there.

## Offboard by deleting the person, not by renaming their bot for the next hire

When someone leaves, the isolation unit is the user account. Delete that account (confirm the current Cursor offboarding steps on Cursor's own pages the morning you do it) and you take the computer with them. That stops their cookies, files, and CLI credentials from remaining a live jar.

Do not offboard by renaming their bots. A renamed screen is still on their computer if the account is still there. Do not delete the bot and keep the account: deleting a bot does not remove shared-computer files or sessions. There is no bot object to export. Copy the charter as text. Recreate the bot and any routine on the new person's seat. Expect twenty run records to start from zero.

| Offboarding move | What you hoped | What actually happened |
|---|---|---|
| Rename Agency Inbox to Ravi Inbox on Leena's leftover account | A handoff | Ravi's job now runs on Leena's computer, with Leena's sessions |
| Delete Agency Inbox, keep Leena's account "for files" | Cleanup | Sessions and files stay. Other bots on that account still see them |
| Delete Leena's user account | Isolation | The computer goes with her. This is the isolation story |
| Paste the charter onto Ravi's new seat, create a new bot, new routine | Continuity of the job | Continuity of the text. New computer, new clock, empty history |

[Delete a Grok Bot safely](/blog/delete-a-grok-bot-safely) is the bot-deletion checklist, the wrong layer if the goal is isolation. Bot deletion is a screen going away. Account deletion is the machine going away.

A new hire on a new Teams Standard seat starts with an empty computer. That is a feature. Do not forward Leena's session so they can pick up the inbox. [Inbox Triage](/bots/inbox-triage) waits until Ravi intends to keep his own mailbox grant. [Lead Scout](/bots/lead-scout) can start on public pages the same afternoon.

## Write the stop line on the seat holder, because Teams Standard will not print it

The shopping task ends when each person's account screen shows Teams Standard. Operations stay per person. You write the verb the bot must never take, in the charter, on that person's seat, before the first login that can survive a deleted bot. For Leena, that verb is send, pay, push, merge, sign in, and reassign-by-rename. [Standup Scribe](/bots/standup-scribe) does not need those verbs either. Mail and client consoles wait.

An approval controls the proposed action. It does not reverse work already completed. There is still no audit view, so you keep the ledger yourself. [Approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility) is the control surface after you connect anything that can act. [The safety checklist](/blog/grok-bot-safety-checklist) is the first read before a session lands on the shared machine. Claude Code and SKILL.md compatibility is [Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build), never this SKU. The forty-dollar seat stays honest when the never-send line stays human, and the owner line stays a person.

**Keep reading:** [Grok Bot for agencies: isolation](/blog/grok-bot-for-agencies-isolation), [the cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot), [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine).

## Frequently Asked Questions

### Does Cursor Teams Standard include Grok Bot?

Yes. Cursor Teams Standard at forty dollars per user per month includes Grok Bot, checked as of 25 August 2026 against the Grok Bot FAQ and Cursor team pricing. Teams Premium at one hundred twenty per user also includes it. Cursor Hobby and Cursor Pro at twenty dollars do not. The include is a per-person stamp, not a shared roster the company owns. Each seat gets one cloud computer assigned to that user, screens that are not security boundaries, no spend cap, no model picker, and no audit view of Bot actions yet. Confirm the live invoice before you brief staff.

### Can we reassign a named bot to another teammate when someone leaves?

No documented path exists for moving a named bot, its computer, or its routines to a different person. A routine assigns a workflow to one Bot. Deleting a Bot deletes its routines. Nothing is team-level. The computer is assigned to the user account, not to a bot. Isolation is deleting that user account, which takes the computer with it. Naming Inbox Triage after the company does not make it an org object. Copy the charter as text onto the new hire's seat. Do not rename the departed person's bot and call it a handoff. Confirm current offboarding steps on Cursor's own pages the morning you do it.

### Does Teams Standard give admins an audit log of Bot actions?

No. An audit view of Bot actions does not exist yet, on Teams Standard or on any other documented plan. Twenty run records per routine are a sliding window on one bot, not a company ledger. Pause is a stop, not a log. Coming-soon admin Kill, if it ships, deletes a VM and is still not a history of what already ran. Do not write "we have a Teams audit log" into a questionnaire. Keep your own packet, keep send on ask, and treat the missing view as a present-tense product fact. Confirm the teams and enterprises docs the day you fill the form.

### Is Teams Standard cheaper than Pro+ for a solo buyer?

Forty dollars per seat is lower than sixty. That does not make Teams Standard the cheapest paid door for one person. Teams is a team SKU. Cursor Pro+ at sixty is the cheapest documented paid individual path as of 25 August 2026. Open a dummy team of one to shave twenty dollars only if you actually want team billing, seat management, and whatever else Cursor attaches to Teams. If the company already pays Teams Standard, incremental Grok Bot cost on those seats is zero. Confirm live prices on cursor.com/pricing and Cursor team pricing docs the morning you choose.
`,
};

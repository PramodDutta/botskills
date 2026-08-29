import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Share a Grok Bot Without Sharing Your Computer',
  description:
    'Share grok bot output, not the account. There is no documented way to hand a teammate your named bot without handing them the shared computer, cookies, and files.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How to Share a Grok Bot Without Sharing Your Computer

The intern asked for the research bot by name, and you scanned the sidebar for a Share control that would hand him that named agent without handing him your login.

You will not find that control. There is no documented way to share grok bot as an object you can assign. A named bot is a screen on one persistent cloud computer assigned to your user account, not to the bot ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Sharing the login shares cookies, sessions, files, and command-line credentials. Deleting the bot later does not take those with it.

What you can share is text: the charter markdown, a /workspace pack saved as a document, a paste of a listing such as [Lead Scout](/bots/lead-scout). If the intern needs to run the job, they need their own eligible seat and their own computer. Teams seats are per person. Nothing about routines is team-level.

This page is that handoff. It is not the Teams Standard invoice ([Grok Bot on Cursor Teams Standard](/blog/grok-bot-teams-standard)), not the retainer leak ([Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation)), and not the engineer who parked production keys next to a curious prompt ([do not use separate bots as a sandbox](/blog/grok-bot-not-a-sandbox)). Stay here if a product manager asked an intern to just use the research bot.

## Read the share link for what it copies, which is the configuration only

People look for Share because Docs, Slack, and Figma all have it, and a share path does now exist: you can copy a public link from a Bot, and anyone with that link can preview it on x.ai and add a copy to their own account.

What it copies is the configuration. Nothing else travels. The docs are explicit that the person who adds your bot does not get your computer, your logins, or your conversation history, and that is the whole of what Priya actually meant when she said just use the research bot.

So the link is real and it is narrower than the word share implies. Jonah can add a bot shaped like Research Scout in about two seconds. He still needs his own eligible seat, he still starts with an empty computer, and he still has to sign into every tool himself. The link moves the recipe, never the kitchen.

One warning that comes with it, straight from the docs: the link exposes the Bot's configuration, so strip secrets and anything confidential before you copy it. A charter that names an internal hostname, quotes a customer, or carries a token in an example is a charter you have now published to anyone who receives the URL.

The product does not document that button. Do not invent one in an ops wiki. Do not tell Jonah to click Share next to Research Scout. Sidebar names are labels on screens, not org objects. [What a Grok bot is](/blog/what-is-a-grok-bot) is a named agent on a managed cloud computer assigned to the user.

If a thread shows a Share Bot screenshot, treat it as a mock until you can open the same control in the live app. As of 25 August 2026 the model is one computer per account. None of the 11 August beta or 21 August eligibility widening added a documented transfer of a named bot between people.

The honest sentence: I can give you the job as text. I cannot give you my bot.

| What you hoped the product had | What is documented | What sharing the login would actually do |
|---|---|---|
| A Share Bot control on the named card | No documented control | Nothing. Do not brief staff as if it exists |
| Reassign Research Scout to Jonah | No documented move of a bot, computer, or routine | Nothing. Recreate the job on his seat |
| Invite Jonah as a viewer of your bot | No documented viewer role | Nothing. He cannot guest your Bot screen |
| Hand Jonah your Cursor password for two weeks | Possible as an anti-pattern | He receives the whole computer: cookies, files, sessions, CLI credentials |
| Copy the charter into a doc he can open | Text you already own | He can recreate the job. He does not receive your sessions |

Write the missing button down as a product fact. The intern starts Monday. The architecture will still be one computer per account on Monday.

## Treat a named bot as a screen on one account computer

All bots on an account share one persistent cloud computer assigned to the user, not to a bot. Each bot gets a screen. Screens are work surfaces, not security boundaries. The instruction is on [approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy): do not use separate Bots as a security boundary. The [FAQ](https://docs.x.ai/grok-bot/faq) says every bot on the account can access that computer.

Priya's Research Scout and Priya's [Inbox Triage](/bots/inbox-triage) are two windows on one Linux home directory. If she signed Gmail in for Inbox Triage, Research Scout can load that session. If she dropped a customer CSV in /workspace, both screens can read it. Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). Browser logins still sit on the VM.

Two people are two computers only when they are two user accounts. Jonah looking at Priya's sidebar on her laptop is still one computer. Jonah logged in as Priya from his house is still one computer, plus a password leaving the building.

Sign-in runs through a Cursor account ([why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained)). The computer follows that identity. Naming a screen Research Scout does not mint a second machine and does not mint a shareable object.

The agent runs as a non-root user on a managed Linux VM. That is not a Linux desktop client. Supported clients are macOS, Windows, and iPhone on iOS 18 or later. Linux desktop, Android, and iPad have no Grok Bot app. On iPhone Jonah can pause and resume only ([mobile](https://docs.x.ai/grok-bot/mobile)).

## Walk Priya's intern request from Slack into a shared login

Priya is the product manager at Cinder, a thirty-person logistics analytics shop. Jonah is the intern for two weeks of competitor notes. Monday 09:12 she posts in Slack: use the research bot, the one named Research Scout, it already knows our sources.

Jonah replies: I do not see it in my sidebar. Can you share it.

Priya looks for Share, Invite, a teammate picker. She finds a named card on her account and nothing that would put that card on his. At 09:31 she almost DMs her Cursor password with a note to change it on Friday. That DM would have let Jonah open Research Scout. It would also have put her Gmail session, her /workspace customer notes, and every CLI credential into an intern laptop for fourteen days.

She does not send the password. She copies the charter into a doc, exports three /workspace packs, pastes the [Lead Scout](/bots/lead-scout) listing (the job shape, not a live clone), and asks ops for a Cursor Teams Standard seat for Jonah, forty dollars for the month, confirmed on [Cursor team pricing](https://cursor.com/docs/account/pricing) the morning they pay.

| Clock | Move | What Priya believed | What actually moved |
|---|---|---|---|
| Mon 09:12 | Slack: just use the research bot | Jonah can open her named card | He cannot. The card lives on her account computer |
| Mon 09:31 | Draft password DM, unsent | Two weeks, then change it | The whole computer would have left the building |
| Mon 10:04 | Charter, three packs, listing paste | A handoff of the bot | Text and documents. No cookies, no routines |
| Mon 11:40 | Teams Standard seat for Jonah | A shared research bot on the team | One more computer, empty, assigned to Jonah |
| Tue 09:00 | Jonah recreates Research Scout on his seat | Continuity of the bot | Continuity of the charter. New computer, empty history |

Tuesday he pastes the charter onto his own named bot and runs a public-source brief. [Grok Bot evidence rules](/blog/grok-bot-evidence-rules) go in so a fluent sentence without a URL cannot leave his computer.

Share grok bot output. Do not share the account.

## List what sharing the login actually hands Jonah, item by item

Vague words like access and temporary login hide the inventory. Here is that inventory from [computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), applied to a two-week intern.

| Item on Priya's computer | Where it lives | What Jonah gets if he has her login |
|---|---|---|
| Browser cookies | Shared across every bot on the account | Gmail, Notion, Linear, staging, paid research tools she signed into |
| Signed-in sessions | The same jar | He is her, in the browser, from his house |
| Files on disk | One home directory | Last month's CSV, customer notes, anything in /workspace |
| Command-line credentials | The same disk | GitHub CLI tokens, AWS profiles, npm tokens if they were written there |
| Hosted MCP sign-in tokens | Cursor's backend, not the VM | Not on the disk. Does not rescue a shared password. The browser is still his |
| Named bot screens | One per bot, not a vault | He can click Research Scout. He can also click Inbox Triage |

Deleting Research Scout after Jonah leaves does not empty that table. Deleting a bot does not remove shared-computer files or sessions. Isolation is deleting the user account. Priya cannot un-share a password by renaming a bot. There is no audit view of Bot actions yet. Twenty run records per routine are a sliding window on one bot, not a company ledger.

[Least privilege bots](/blog/least-privilege-bots) is the grant page. [The safety checklist](/blog/grok-bot-safety-checklist) is the first read before any session lands on a machine you might later hand to someone else.

## Hand over the charter markdown, never the account password

The charter is the job. It already has to live outside the product if you want it to survive a deleted bot, a new hire, or an intern week. Copy it into a document Jonah can open without your login. That is the share.

Do not paste the charter into Slack and call the thread the source of truth. Threads scroll. Routines do not read them. A routine assigns a workflow to one Bot ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)). If the rule is not in the standing instructions on Jonah's bot, it is not a rule on Jonah's computer.

Teach-by-demonstration will not transfer the job. It records up to ten minutes of a browser workflow, produces a draft skill, and is unavailable on iPhone. Priya's demo lives on her computer. Claude Code and SKILL.md compatibility is [Grok Bot versus Grok Build](/blog/grok-bot-vs-grok-build), never this product.

Change three lines when you copy: owner, output path, and the stop line that names his seat. Leave the evidence block intact ([Grok Bot evidence rules](/blog/grok-bot-evidence-rules)). The password stays with Priya. If Jonah cannot run Grok Bot without it, he is not eligible, and a charter will not turn the product on.

## Export the workspace pack as a document the intern can open

/workspace is a folder on Priya's computer. Jonah cannot see it from his seat. There is no documented shared drive between two Grok Bot computers. If last week's competitor pack should inform this week's intern brief, export it.

Save the markdown into a place Jonah already has. That file is a document, not a live mount. If Priya's bot writes a new pack on Wednesday, Jonah does not receive it unless someone exports again. Strip customer CSVs, staging passwords, and hiring notes. If they are in /workspace they would have gone with the password.

Do not forward a zip of the entire home directory. Pick the three files the intern needs and date them in the filename. Jonah's new computer starts empty. He should fetch public sources himself. Priya's old packs are context, not a substitute for a live fetch.

## Paste the listing so the intern recreates the job on their seat

A listing is a public description of a job with a boundary. [Lead Scout](/bots/lead-scout) is one. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) is another. [Standup Scribe](/bots/standup-scribe) is a third. Pasting the listing into Jonah's doc tells him the shape: one job, what it reads, what it writes, what it must never do.

It does not copy Priya's live bot, her cookies, her twenty run records, or a routine. Jonah creates a new named bot on his account, pastes a charter adapted from the listing, and watches one manual run before he attaches a clock. Two computers. Two owners. Same text. [Inbox Triage](/bots/inbox-triage) still never sends.

If the listing's boundary cannot survive an intern, do not share the listing. A bot that completes 2FA, signs into a customer console, or purchases is the wrong gift. [Approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility) is the control surface after anyone connects a tool that can act.

## Buy Jonah his own seat because Teams never minted a shared research bot

Cursor Teams Standard at forty dollars per user per month includes Grok Bot. That sentence is true, and people hear it as we already paid for a company bot. They paid for a stamp on a person. The invoice page is [Grok Bot on Cursor Teams Standard](/blog/grok-bot-teams-standard). This page is the intern.

Priya's Research Scout does not appear in Jonah's sidebar when ops adds his seat. His computer is empty. That is isolation working. It is also why just use the research bot is a request the product cannot honor.

Teams Premium at one hundred twenty per user also includes Grok Bot. Same Bot product, still no model picker, no spend cap, no audit view. A share link exists, and it copies configuration rather than access. Privacy Mode (Legacy) blocks Grok Bot entirely. Confirm his account screen, not a Slack screenshot.

If Jonah is sampling for two weeks, the one-time trial may be the door ([the Grok Bot free trial](/blog/grok-bot-free-trial)). Do not put him on Priya's login to skip procurement. Hobby and Pro at twenty do not include Grok Bot. Pro+ at sixty does. SuperGrok at thirty does not. SuperGrok Plus at one hundred does. SuperGrok Heavy is eligible; this page will not print a dollar figure for it. Confirm [cursor.com/pricing](https://cursor.com/pricing) the morning you buy.

## Recreate the research bot on the intern's own eligible computer

Jonah installs on a supported client ([x.ai/bot](https://x.ai/bot)). He signs in with his identity, not Priya's. He creates a named bot. He pastes the charter. He does not connect Gmail to debug a public-source brief. He does not complete a 2FA prompt for a tool Priya uses. He runs one manual job against public pages. He reads the pack. Then he may attach a routine.

Do not clone by screenshot. The names are screens. The product is the computer plus the charter. Do not sign Jonah into Priya's staging site so his first brief looks complete. Research intern week is public pages and owned docs you chose to export. If the first run invents a price, you failed the evidence block, not the share.

## Leave routines on one bot, then rebuild the clock on the intern's seat

A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app keeps the 20 most recent run records per routine. Deleting a Bot deletes its routines. Nothing is team-level.

Priya's Monday 06:00 Research Scout clock does not move when Jonah gets a seat. It does not fork. It does not offer Add intern. If Jonah should run weekdays at 07:00, he creates a new routine on his bot after a manual run has finished. How to put a clock on a bot you own is [how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine). [Grok Bot scheduling](/blog/grok-bot-scheduling) is the wider page.

On iPhone he can pause and resume only. If the intern is iPhone-first, he cannot operate the job. Do not keep Priya's routine running and ask Jonah to read her /workspace. He cannot. Do not sign both bots into the same Drive account in the browser. That rebuilds a shared computer by hand.

When the internship ends, delete Jonah's user account (confirm current Cursor offboarding steps on Cursor's own pages the morning you do it). Do not delete only the bot and keep the account for files. Do not rename his Research Scout for the next intern. Isolation is the account ([one computer, many screens](/blog/grok-bot-shared-computer-security)).

## Answer the PM who says a trusted intern can borrow the login

The strongest case against this page is not a missing feature request. It is trust. Jonah signed an NDA. He sits ten feet away. He will be gone in two weeks. Changing the password on Friday is the plan. Calling that sharing the computer is pedantry. The research bot already exists. Procurement for a seat takes longer than the internship. Hand him the login.

Grant the NDA. Grant that Jonah is not an attacker. The inventory does not care. Cookies, sessions, files, and CLI credentials are still on the computer. Inbox Triage's Gmail session is still there. There is still no audit view. A password change on Friday does not rewind what he copied on Tuesday, and it does not tell you what he ran.

Sitting at Priya's desk while she stays logged in is the same computer. Watching him does not split the home directory. Completing a 2FA prompt so he can finish a brief is how a customer console lands on a machine an intern can later open from his house, if the password also moved.

The objection wins if he only needs to read packs Priya already exported and never needs to run a bot. Email him the documents. The objection loses the moment he needs to run Research Scout. Running it as Priya is sharing the computer.

Agency retainers make the same mistake with client names instead of intern trust ([Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation)). Engineers make it with Bot A and Bot B ([do not use separate bots as a sandbox](/blog/grok-bot-not-a-sandbox)). This write-up is the PM and the intern.

## Write a shareable research charter that names the intern as owner

Do not give Jonah Priya's charter with her name still on it. The owner line is the isolation line. If it still says Priya, someone will try to run it on Priya's seat.

\`\`\`text
Name: Jonah Research Scout
Owner: Jonah (this Cursor account, this computer). Not Priya's Research Scout.
Job: One internal competitor brief, public pages plus docs Jonah was given, every weekday.

You answer one question Jonah pastes about a named competitor. Every material
claim has SOURCE plus QUOTE, or COULD-NOT-COMPUTE. A fluent paragraph with no
URL is a failed run. Owned files must have a date in the filename.

You never send email, never post, never purchase, never create accounts, never
sign into Cinder tools Priya uses, never complete 2FA, never open a customer
console. You never ask Priya for her password. You never treat this bot as her
bot moved over. If the internship ends, ops deletes this account. Do not
rename this bot for the next intern. Copy this charter as text onto their seat.

Deliver: one page plus a source table in /workspace. No routine until Jonah has
watched a manual run finish. No second question unless he pastes it.
\`\`\`

Paste that into his bot, not into hers. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) stays internal. [Churn Watch](/bots/churn-watch) and [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) are the wrong intern gifts. For this bot the verbs are send, sign in, purchase, and borrow-Priya's-login. Write all four.

## Prove the handoff with a check that fails if Jonah still uses Priya's login

These checks can come back false. If they do, you did not share a job. You shared a computer, or you shared a document and called it a bot.

| Check | Pass | Fail |
|---|---|---|
| Jonah's sidebar shows a Research Scout he created, and Priya's sidebar still shows hers | Two computers, two names | He is looking at her laptop, or he is logged in as her |
| Jonah cannot open Priya's Gmail, Notion, or staging site from his bot's browser without his own sign-in | Sessions did not move | A cookie moved, or the password moved |
| The charter on his bot names Jonah as owner and forbids her password | The isolation line is in the standing instructions | Her name is still on the card he runs |
| Ops can name the SKU on his account (Teams Standard, Pro+, SuperGrok Plus, trial) | He is eligible without her login | Hobby, Pro at twenty, or SuperGrok at thirty, papered over with her password |
| After the internship, deleting Jonah's user is the offboarding step on the list | Isolation is the account | The list says delete the bot and keep the login for files |

If the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) and this page disagree, the FAQ wins. Dates on this page are 25 to 27 August 2026. There is no Grok Bot-specific spend cap and no model picker. Confirm eligibility on the live invoice the morning you brief the intern.

## Stop treating a listing paste as a live clone of your sessions

The listing is the ceiling of what a paste can do. It gives Jonah a job description and a boundary. It does not give him Priya's disk, her hosted MCP tokens, twenty run records, a routine, or a Share Bot button that still does not exist.

Where this page breaks down: Jonah is not eligible, and nobody will buy a seat or use the trial. Email him the exported packs. Do not invent a viewer role. Where it also breaks down: the intern's real job is Priya's mailbox, customer console, or production CLI. Then the honest answer is no. Those grants belong on an account you are willing to delete with that person ([Grok Bot for agencies](/blog/grok-bot-for-agencies-isolation)).

A paste of [Lead Scout](/bots/lead-scout) plus a charter plus three exported files is a handoff. A Cursor password in Slack is not. Share grok bot output. Keep the computer.

**Keep reading:** [one computer, many screens](/blog/grok-bot-shared-computer-security), [why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained), [least privilege bots](/blog/least-privilege-bots).

## Frequently Asked Questions

### Is there a way to share a named Grok Bot with a teammate without sharing the account?

No documented path exists. There is no Share Bot control, no viewer role on a named card, and no move of a bot, its computer, or its routines onto another person. All bots on an account share one persistent cloud computer assigned to that user, not to a bot. Screens are not security boundaries. If a teammate needs the same job, copy the charter as text, give them their own eligible seat, and recreate the bot on their computer. A share link does exist and it copies the configuration to their account. It does not hand over the computer, the logins, or the conversation history, so the teammate still needs their own eligible seat.

### The share link copied the bot, so why does the intern still need a seat?

Because the link copies the configuration and nothing that makes it run. The charter and its setup land in their account; the computer it ran on, the browser sessions signed into your tools, the command line credentials, the routines, and the conversation history all stay with you. Adding a shared bot hands someone the recipe on an empty machine. Executing it needs their own eligible account, and every tool it touches needs them to sign in as themselves. A password is the computer, not a shortcut around procurement.

### If we buy the intern a Teams seat, do they inherit my research bot?

No. Cursor Teams Standard at forty dollars per user per month includes Grok Bot as a per-person stamp, checked as of 25 August 2026. Each seat gets its own cloud computer. Named bots on your account do not appear in their sidebar. Teams Premium is the same Bot product on a richer Cursor SKU, still without a share button, a model picker, a spend cap, or an audit view of Bot actions yet. Recreate the bot from the charter on their seat. Confirm live prices on Cursor team pricing the morning you pay.

### Can I stay logged in and let the intern sit at my desk for two weeks?

That is sharing the computer. Watching them does not split the home directory. Cookies, files, sessions, and command-line credentials stay on the one VM assigned to your user. There is no audit view of Bot actions yet, so you will not get a trustworthy log of what ran. Changing the password on Friday does not rewind copies they made on Tuesday. If they only need to read packs, email the files and skip Grok Bot. If they need to run the research job, buy them a seat or a trial and recreate the bot on their account.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs ChatGPT Work: Persistent Bots or a Task Surface',
  description:
    'Grok Bot vs ChatGPT Work is named bots on a shared cloud computer against a task surface inside ChatGPT. Pick by persistence, not by a feature checklist.',
  date: '2026-08-26',
  category: 'Comparison',
  content: `
# Grok Bot vs ChatGPT Work: Persistent Bots or a Task Surface

You are not choosing the product with the longer feature list. You are choosing whether next Tuesday still has a named worker with last week's files, or whether you start another job on a task surface inside ChatGPT and hope you remember how you asked.

Grok Bot, which xAI put into beta on 11 August 2026 and widened on 21 August 2026, is a roster of named bots on one persistent cloud computer assigned to your user account. ChatGPT Work, as public writeups describe it, is a task surface inside ChatGPT: you give a goal, it can run a long job, and it can return documents. Confirm Work on OpenAI's site before you treat any recap, including this one, as a contract.

This is not a remake of [Grok Bot vs ChatGPT Tasks](/blog/grok-bot-vs-chatgpt-tasks). That article is about the scheduler that fires a fresh conversation on a clock. This one is about persistence: a standing named bot versus a job you start, steer, and close. For the plain definition, read [What Is a Grok Bot?](/blog/what-is-a-grok-bot).

## Separate ChatGPT Work from ChatGPT Tasks before you compare anything

Search results mash the ChatGPT names together. Work is not Tasks. Tasks is a scheduled conversation. Work, on the pages OpenAI has published, is framed as the place you send ambitious jobs that can run a long time and come back as a pack of files. Both can live in the same ChatGPT app. They are still different objects.

If your question is "can ChatGPT nag me every weekday at 07:00", use the Tasks comparison. If it is "can ChatGPT take this pile of notes and stay with it until there is a deck", you are in this comparison. If it is "can I staff Inbox Triage as a coworker that still exists in October", you are looking at Grok Bot.

Close the laptop for three days. A scheduled Task may still fire. A Work job you already started may still be running, or it may have finished as files in that chat. A named Grok bot is still that bot, on the same shared computer, with the same charter. Duration of one job is not a role that persists.

## Treat ChatGPT Work as a task surface inside ChatGPT

Public writeups describe ChatGPT Work as a task surface inside ChatGPT. You start a job from a goal. The system can gather context, work across connected apps and files, and hand back documents, sheets, decks, and similar artefacts. None of that, even if it is all true the day you read this, makes Work a named bot with a standing identity on a computer assigned to your account.

Think of Work as a project room you open for a job. The room can be busy for hours. When the job is done, you have output. You do not automatically have a coworker named Briefing Desk who will still be Briefing Desk next Monday without you opening a new job.

That is the honest strength of a task surface. A one-off board pack, a competitor teardown you will not repeat, a spreadsheet rebuild from a messy export: those jobs want a long run and a file. They do not want you to invent a bot, write a charter, connect a mailbox, and then delete the bot next week while the sessions remain on a shared machine.

This article will not print Work prices, model names, or a feature checklist as fact. Confirm plan gates, clients, permissions, and what remains after a job ends on OpenAI's live pages. Public writeups say some ChatGPT plans include Work at a lower entry price than Grok Bot. That can be a reason to start there. It is not a reason to pretend a task surface is a persistent roster.

## Treat Grok Bot as named bots sitting on one shared computer

A Grok bot is a named role with a charter, a screen, and (if you set them) routines. The computer underneath is not the bot's. xAI's docs are blunt: the computer is assigned to your user account, not to an individual bot. All bots share one persistent cloud computer. Each bot gets a screen on that machine. The screens are separate work surfaces, not separate security boundaries. The docs say, verbatim, that you should not use separate bots as a security boundary.

Browser cookies, signed-in sessions, files, and command-line credentials are common to every bot you run. Deleting a bot does not remove those shared files or browser sessions. Routines die with the bot. The desk does not. If you need the isolation story in full, read [One Computer, Many Screens](/blog/grok-bot-shared-computer-security) rather than inferring a private VM from two names.

xAI describes bots messaging each other in group chats. Treat that as a product claim from xAI marketing, not as a documented security model, and not as proof that two bots can keep secrets from each other. If they can message, they still sit on the same computer. A group chat is not a wall.

Platforms are narrower than opening ChatGPT wherever you already work. Grok Bot supports macOS (Apple silicon and Intel), Windows (x64 and Arm64), and iPhone on iOS 18 or later. There is no Linux desktop app, no Android app, and no iPad app. If your working machine is a Linux laptop, this comparison is already over for Grok Bot on that machine.

## Pick the product by persistence, not by a feature checklist

Line the two products up as shapes.

| Decision | Grok Bot | ChatGPT Work (confirm live) |
|---|---|---|
| What you create | A named bot with a standing charter | A job on a task surface inside ChatGPT |
| What exists next Tuesday | The bot, its screen, and the shared computer | Chat and files if kept. Not a named coworker unless OpenAI ships that |
| Where files live | One persistent cloud computer for the account | The Work job and whatever storage OpenAI currently uses |
| Deleting the worker | Routines die. Files and browser sessions remain | Confirm what a finished or deleted job leaves behind |
| Long running work | The machine can pause and resume on the desk | Public writeups describe long jobs that return documents |

Persistence decides whether you are staffing a role or running a job. Isolation decides whether a second name is a second security domain. On Grok Bot, it is not.

| Job | Pick | Why |
|---|---|---|
| One-off board deck from a folder of notes | ChatGPT Work, if it is on your plan | The job ends when the file lands |
| Morning inbox every weekday, drafts only | Grok Bot | The role has to still exist tomorrow |
| Research twelve accounts this afternoon | ChatGPT Work is enough | When the sheet is done, the worker can vanish |
| Research inbound leads every day, never contact them | Grok Bot | Same CRM login, same ranking rules, same boundary |
| Weekly exec brief that diffs last week's file | Grok Bot | Last week's file on the shared computer is the product |
| Two workers who cannot see each other's logins | Neither, on one Grok Bot account | Use a different account, not a second bot name |

If two rows fight, persistence wins. A cheaper task surface that cannot still be Briefing Desk next month is the wrong object for a standing role. A named bot for a deck you will never rebuild is the wrong object for a one-off job.

## Count blast radius in files and sessions, never in bot names

The most expensive mistake in this comparison is staffing three Grok bots and believing you bought three computers. You bought three screens. The mailbox login, the CRM session, the export sitting in a home directory, and the browser cookies are account-wide.

On Grok Bot, a [Lead Scout](/bots/lead-scout) that may only research and rank still sits on the same machine as an [Inbox Triage](/bots/inbox-triage) bot that can see the same browser. If either bot can be instructed by a page it reads, the instruction has the sessions the other bot is using. Naming does not partition credentials. Deleting Lead Scout after a scare does not log Inbox Triage out.

On ChatGPT Work, the blast radius is whatever that job is allowed to touch: connected apps, files you gave it, and any browser or desktop behaviour OpenAI currently enables. Confirm that list. Do not copy Grok Bot's shared-computer model onto Work, and do not copy a ChatGPT project folder onto Grok Bot and call it isolation.

On the Grok Bot side, connect the minimum accounts, prefer read-only where the job only reads, and put money and publishing on a different account from research. Write the stop line before you paste a login. When a bot is done, rotate the sessions yourself. A task surface fails the other way: you finish a strong pack, then you cannot point at a coworker next month. If that bothers you, you wanted persistence.

## Run a long job without confusing duration with a desk that stays

Both products can be busy for a long time. That overlap is why people search this comparison. It is also the overlap that misleads.

A long Work job is a property of one task: the system stays with a goal, breaks it into steps, and can come back with a document hours later. Public writeups describe exactly that. Useful. Still a task. When the job completes, you evaluate the artefact. You do not automatically have a desk with last week's working files, a signed-in supplier portal, and a bot name waiting for Monday.

A Grok bot's persistence is a property of the account computer. The bot can pause on a two-factor prompt, wait, and continue. It can write a brief to a folder and read that folder next week. It can keep a browser session warm. Those are desk properties. They are also why the blast radius is large. A desk that stays is a desk that keeps the knives out.

If your work is "stay with this until the deck is good", a task surface is the matching object, assuming Work on your plan can touch the files you need. If your work is "every Monday, open last week's brief, diff the numbers, and stop before you mail anyone", you need the desk. Duration of a single run will not grow you a desk.

## Staff three named bots when the job still exists next month

Three standing jobs show the difference from a task surface.

[Inbox Triage](/bots/inbox-triage) is a daily role. It reads mail, classifies, and drafts. It never sends. A task surface can draft a reply this afternoon, but next week's mail still needs the same stop line on a schedule.

[Lead Scout](/bots/lead-scout) is a daily role over a CRM and public pages. It researches and ranks. It never contacts anyone. A one-off Work job can research twelve accounts today and return a sheet. The standing scout is the thing that still refuses to email a prospect in November.

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) is a weekly role that only works if last week's file still exists. The bot diffs, cites, and flags gaps. It never sends the brief to a distribution list. You can ask Work to build this week's pack. You cannot assume it will walk into the same folder next Monday without you starting the job again.

Staff those three on Grok Bot only if you accept the shared computer. They will share sessions. Their value is the named stop line and the files that accumulate, not the fantasy that triage cannot see the CRM. If you cannot accept that, staff one bot with a narrow login set, or keep the one-off research on Work and the mailbox on a human.

## Paste a charter that names the stop line before any tool

A named bot without a stop line is a task surface with a longer memory and a wider blast radius. Paste this, change the paths, and do not connect a mailbox until the stop list is true.

\`\`\`text
You are Briefing Desk.

WHAT YOU OWN
Every Monday by 08:00 Europe/London, build this week's internal
brief from the calendar, the CRM report folder, and last week's
file at /briefs/latest.md.
Write /briefs/YYYY-MM-DD.md and copy it to /briefs/latest.md.

WHAT GOOD LOOKS LIKE
Five sections: decisions due this week, numbers that moved,
customers who went quiet, risks with a source, and open questions.
Every number has a source path or a URL. If two sources disagree,
report both figures and the gap. Never round the gap away.

WHERE YOU STOP
Never send email, Slack, or calendar invites.
Never create, update, or delete CRM records.
Never contact a customer or a prospect.
Never change last week's file except to read it.
If a login expired, a folder is empty, or a number cannot be
sourced, write BLOCKED with the exact gap and stop.
Do not guess from memory or from an older brief.

IF YOU ARE UNSURE
Ask me. Waiting is correct. Inventing a figure is not.
\`\`\`

That charter is pointless on a one-off Work job you will never run again. It is the whole product on a bot you intend to leave running. botskills.sh requires every listing to declare the action the bot never takes without a human. Briefing Desk never distributes. Inbox Triage never sends. Lead Scout never contacts. Write the verb you are afraid of, then keep the bot off that verb.

## Compare cost shape without inventing ChatGPT Work prices

Look at the bills you can actually document.

| Path | Grok Bot included? | What to remember |
|---|---|---|
| Cursor Hobby | No | Free Cursor does not unlock the bot runtime |
| Cursor Pro at 20 dollars a month | No | A common mistaken buy |
| Cursor Pro+ at 60 dollars a month | Yes | Cheapest paid path as of 25 August 2026 |
| SuperGrok at 30 dollars a month | No | The cheaper SuperGrok tier does not include Grok Bot |
| SuperGrok Plus at 100 dollars a month | Yes | Listed as including Grok Bot access |
| SuperGrok Heavy, Cursor Ultra, Cursor Teams Standard and Premium, one-time trial | Eligible | Confirm live prices. Do not trust a viral 300 dollar Heavy figure |
| ChatGPT Work | Confirm on OpenAI's pages | Public writeups say some plans include it at a lower entry price than Grok Bot |

Grok Bot's cost shape after you are in is not a flat ceiling. There is no Grok Bot-specific spend cap. You get a weekly allowance, then on-demand billing from model and token cost. There is no model picker, so you cannot throttle spend by picking a cheaper model in the bot surface. If both a Cursor and a SuperGrok subscription are present, Grok Bot uses whichever has more usage.

ChatGPT Work may be the cheaper door. Public writeups say so. Confirm the plan that actually includes it the day you subscribe. A lower entry price is a good reason to run one-off packs on Work. It is a bad reason to staff a standing mailbox on a task surface because ChatGPT was already there. Model Grok Bot as 60 dollars (or 100, or a Team seat) plus overflow you cannot cap. For the arithmetic, see [Grok Bot Cost](/blog/grok-bot-cost).

## Follow one weekly briefing through both products for thirty days

Run the same job as a Work task and as a named bot, on paper, through a month.

| When | ChatGPT Work shaped attempt | Named Grok bot attempt |
|---|---|---|
| Day 1 | You paste a goal. Hours later you have a brief | You name Briefing Desk, paste the charter. The first brief is messy |
| Day 8 | You repeat last week's prompt from memory and almost ask it to mail leadership | The stop line is still in the charter. The bot diffs /briefs/latest.md |
| Day 15 | A colleague starts a similar Work job. Two packs, no shared desk | A second research bot can see the same browser sessions |
| Day 30 | Strong artefacts, no coworker. Re-running requires you | A named bot, a month of files, and a blast radius you can name. Deleting the bot would not log the browser out |

Day 15 is the fork. If you wanted independent workers, Grok Bot will not give you that on one account. If you wanted a standing brief, Work will keep asking you to be the memory. Pick the pain you are willing to manage.

Approvals on Grok Bot control the proposed action. They do not reverse work already completed. Design the charter so the irreversible verb is never proposed. On Work, confirm what the live product asks before it sends, edits, or publishes. A failed Grok routine leaves recent run records (the app keeps the 20 most recent per routine) and a machine you can open.

## Diagnose the failure from the surface that produced it

When the week goes wrong, name the surface before you rewrite the prompt.

| Symptom | Likely cause | Fix |
|---|---|---|
| Two Grok bots used the same mailbox cookies | Shared computer, by design | Treat the account as one security domain. Split accounts if you need a wall |
| You deleted a bot and the vendor portal is still signed in | Deletion does not wipe files or sessions | Rotate the session yourself |
| A Work pack you cannot restaff as a role next month | You used a task surface for a standing job | Put the job on a named bot, or accept a new Work job each time |
| Grok Bot never appeared on your Linux laptop | Unsupported platform | Use ChatGPT on that machine, or use a supported OS |
| On-demand charges after a heavy week | No Grok Bot spend cap | Review usage. Do not wait for a ceiling that does not exist |
| The bot mailed a draft you meant to keep | Stop line missing, or send was proposed and approved | Put the verb in WHERE YOU STOP. Approvals do not undo a send |
| Work stopped because a site needed a login | Confirm Work's current browser and credential rules | If you need a standing signed-in desk, that is Grok Bot's shape |

If your job is "log into the supplier portal every Monday", verify that Work is allowed to do that today. Grok Bot can hold a session on the shared computer. That capability is also the blast radius. An audit view of Grok Bot actions does not exist yet. Routines belong to one bot and die with it. Recover files from the shared computer if they remain.

## Answer the objection that Work already does the ambitious job

The strongest case against this article is simple: if ChatGPT Work can run for hours, use your files, and return a finished pack, a named Grok bot is theatre. For a large class of jobs, that case wins.

It wins on the one-off. A strategy deck, a messy export cleanup, a research pack for a meeting that will not recur: Work is the matching object if it is on your plan and can touch the sources. Creating Briefing Desk for Thursday's board, then deleting it Friday, leaves the sessions. You paid setup cost and kept the knives.

It wins on friction and, if OpenAI's current plans still include Work below Grok Bot's cheapest paid path, on entry price. Confirm that. Starting a Work job is closer to continuing a chat than naming a bot and connecting accounts. A task surface you actually use beats a roster you meant to staff. For mixed work, run packs on Work and put Grok Bot only on standing roles that failed as repeated Work jobs.

It loses when the name has to survive. Inbox, daily lead ranking, Monday brief that diffs last week: those are not ambitious one-offs. They are jobs whose value is that they keep existing with the same refusal list. A task surface can imitate that if you are willing to be the memory every run. Most people are not. They skip a week, the prompt drifts, and the send verb creeps back in.

It also loses when the job stalls on a real desk: an export that takes four minutes, a portal with no API, a form that needs you to complete 2FA. A persistent computer is for that stall. A long Work job is for staying with a goal. Those are different stalls. Do not buy the wrong one because both can take hours.

## Keep both products when unfinished work comes in two kinds

You can keep both. Stop using one object for the other object's job.

Keep ChatGPT Work (once you have confirmed it on your plan) for unfinished work that wants a long run and a file, then wants to end. Packs, teardowns, rebuilds, "make this folder into a sheet". Confirm each job's permissions at the start. Do not leave a standing mailbox connected to a surface you treat as disposable.

Keep Grok Bot for unfinished work that wants a name, a charter, a stop line, and a desk that still has last week's file. Staff few bots. Connect few accounts. Write the verb that must never happen. Remember that every bot shares the computer, that deletion is not cleanup, that overflow is uncapped, and that Linux, Android, and iPad are not supported.

Use Tasks, not Work, when the need is a clock and a message. Mixing the three into one "ChatGPT versus Grok" feeling will produce the wrong purchase three times. Pick by persistence. A task surface returns a document. A named bot is still there on Monday, on a shared computer whose blast radius you accepted on purpose.

**Keep reading:** [Grok Bot vs ChatGPT Tasks: Which Runs Your Recurring Work](/blog/grok-bot-vs-chatgpt-tasks), [Grok Bot Cost: What You Pay and How Usage Adds Up](/blog/grok-bot-cost), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security).

## Frequently Asked Questions

### Is ChatGPT Work the same thing as ChatGPT Tasks?

No. Work and Tasks are different ChatGPT surfaces, even when both live in the same app. Public writeups describe Work as a task surface for longer jobs that can return documents and other finished files. Tasks is the scheduler that fires a fresh conversation on a clock, covered in a separate comparison of Grok Bot and ChatGPT Tasks. Confirm both names on OpenAI's current pages before you buy or migrate, because OpenAI has already moved labels on this family of features. The Grok Bot question is whether you need a named persistent bot, not whether you already pay for ChatGPT.

### Does each Grok Bot get its own cloud computer?

No. xAI documents that every bot on your account shares one persistent cloud computer assigned to your user account, not to an individual bot. Each bot gets a screen on that machine. The screens are separate work surfaces, not separate security boundaries. Browser cookies, signed-in sessions, files, and command-line credentials are shared. The docs say not to use separate bots as a security boundary. Deleting a bot does not remove those shared files or browser sessions. If you need isolation, use a different account, not a second named bot.

### Is ChatGPT Work cheaper than Grok Bot?

Grok Bot's cheapest paid path is Cursor Pro+ at 60 dollars a month. Cursor Hobby and Cursor Pro at 20 dollars do not include it, and SuperGrok at 30 dollars does not. SuperGrok Plus at 100 dollars does. SuperGrok Heavy, Cursor Ultra, Cursor Teams Standard and Premium, and a one-time trial are also eligibility paths. There is no Grok Bot spend cap: weekly allowance, then on-demand. ChatGPT Work prices belong on OpenAI's pages. Public writeups say some ChatGPT plans include Work at a lower entry price than Grok Bot. Confirm both the day you buy.

### Can I run ChatGPT Work and Grok Bot on the same jobs?

Yes, if you split the work by persistence. Put a one-off pack, deck, or analysis on ChatGPT Work when the job ends as a file you will not staff as a role. Put a standing job on a named Grok Bot when next Tuesday still needs the same stop line, the same logins, and last week's file. Do not point both at the same mailbox and the same CRM and then act surprised when two drafts appear. Grok Bot's computer is one security domain for every bot on the account. A ChatGPT connector is a second domain. Two send buttons is a process failure.

`,
};

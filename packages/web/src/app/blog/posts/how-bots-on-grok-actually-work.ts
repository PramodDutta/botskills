import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How Grok Bots Actually Work, Without the Dedicated-Computer Myth',
  description:
    'How grok bot works: one cloud computer per account, one screen per bot, routines on a single bot, no model picker. The dedicated-computer myth is the first thing to drop.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How Grok Bots Actually Work, Without the Dedicated-Computer Myth

You added a second Grok Bot because you thought you were buying a second
computer. You were not. How grok bot works, as xAI documents it, is one
persistent cloud computer assigned to your user account, one screen per bot on
that computer, and routines that live on a single bot until you delete that
bot. The dedicated-computer myth is the first thing to drop. Keep it and every
later choice (a second mail login, a research bot, a cleanup of a card named
temp) will look safer than it is.

This page is the mechanism. It is not the plain-language explainer for people
who have never used one
([what is a Grok bot](/blog/what-is-a-grok-bot)). It is not the security
write-up of blast radius and hostile mail
([one computer, many screens](/blog/grok-bot-shared-computer-security)). Those
two pages stay adjacent. Here you need the objects: computer, screen, routine,
plugin versus hosted MCP, desktop versus iPhone. Until those objects are named,
the myth keeps winning.

The docs say the computer belongs to the user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)), that
screens are work surfaces rather than security boundaries, and, as an
instruction, not to use separate bots as a security boundary
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Take those sentences as architecture, not as caveats.

## Drop the dedicated-computer story before you name the second bot

The myth has a simple plot. Each bot is a little machine. Mail lives on one.
Research lives on another. Delete the mail bot and the mailbox goes dark.
Create a third bot and you have purchased a third sandbox. It is how people
already think about tabs, containers, and cloud instances, so it arrives
pre-loaded. It is also false for this product.

What you actually buy when you create a bot is a named job with its own
screen on a computer you already have. The computer was assigned when the
account became eligible, not when you typed the second name. Ten bots are ten
screens. They are still one filesystem, one browser cookie jar, one set of
command-line credentials, and one place files sit after a run
([FAQ](https://docs.x.ai/grok-bot/faq)).

A cleaner sidebar, a narrower charter, a routine that should not share a name
with an experiment: those are good reasons for a second bot. They are
organisation. They are not isolation. Isolation needs a different account
with less connected to it, or a job that never signs in. A name like
"research-safe" is a reminder to you. It is not a wall inside the computer.

## Assign the cloud computer to the account, and the screen only to the bot

Two objects get collapsed in casual talk. Pull them apart.

The computer is a persistent cloud machine assigned to your user account. It
is a managed Linux VM. The bot runs on it as a non-root user
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
That Linux fact describes the hosted computer, not a Linux desktop app. There
is no Linux desktop client. Your desk is macOS or Windows. The bots live on
the hosted machine either way.

The screen is that bot's work surface. Each bot gets one. It is a place to
look, not a second disk, cookie jar, or user. Two windows on one laptop is
the right picture. Two windows do not give you two laptops.

| Part | Documented owner | What it is not | What that means on Tuesday |
|---|---|---|---|
| Cloud computer | Your user account | A per-bot VM you provision at create time | Every bot you add sits on the machine you already have |
| Screen | That one bot | A lock, a disk, or a credential store | A tidy screen tells you nothing about the jar or the files |
| Routine | That one bot | A team calendar entry | Delete the bot and the schedule dies with it |
| Run records | That one routine | An audit log of the account | Twenty recent rows, then the window slides |
| Hosted MCP sign-in token | Cursor's backend | A file on the computer | Off the disk, still an account-level tool |

Hold the first two rows until they feel boring. The myth lives in the gap
between them. People see a new screen and infer a new computer. The product
gave them a new window.

## Treat cookies, files, and CLI sessions as account property, not bot property

Browser cookies, signed-in sessions, files on disk, and command-line
credentials are common property of that computer. A research bot can load a
site your mail bot signed into. A CSV one bot exported is readable by the
others. A CLI token for a repo job is available to any bot that opens a
terminal.

Deleting a bot does not take those objects with it. The card vanishes. The
Gmail cookie can stay. Last week's triage file can stay. You retired a name.
You did not wipe a machine.

Hosted MCP sign-in tokens are the documented exception, covered next: they
sit with Cursor's backend, not in the jar. A browser login puts an identity
in the jar. Every bot on the account can try the lid. Name the storage, not
the tile.

## Hang every routine on one named bot, then expect delete to erase it

A routine assigns a workflow to one bot. Not to the workspace. Not to a pool.
One bot. The ceiling is 50 routines on that bot. The app keeps the 20 most
recent run records per routine. Deleting a bot deletes its routines. Nothing
is team-level
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

That is why a Monday job vanishes when you clean up a card named temp. The
routine was never a team object. It was glue on one bot. Last Friday's
markdown is not proof the job is alive. It is a file on the shared computer,
which is the one thing delete does not clear.

Durable jobs need durable names. [Inbox Triage](/bots/inbox-triage) is a
standing sort. [Lead Scout](/bots/lead-scout) is overnight research.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) is an internal brief
that never sends. Park any of those on temp and you have already scheduled
the deletion. Hide if you still need the jobs. Copy the routine text out,
pause loops, then delete, only after the copy exists.

The twenty-record window is short evidence, not a ledger. There is no audit
view of bot actions yet. Compare weeks in a file you own. A missing fire
starts with ownership, not timezone folklore:
[Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run). Clock
choice is [Grok Bot scheduling](/blog/grok-bot-scheduling). This page only
needs the binding: one routine, one bot, delete is fatal to the schedule and
not to the cookie.

## Split a plugin login from a hosted MCP token by where the secret sleeps

"Connected Gmail" and "added MCP" are two storage stories wearing one verb.

A plugin or browser sign-in leaves a session on the shared computer. Delete
the bot that "owned" the login and the session can remain. That is why a
research bot can open mail you thought belonged to the triage card.

A hosted MCP sign-in token stays with Cursor's backend. Idle, it is not on
the computer. That is the isolation win the platform documents. It is still
not per-bot privacy. The tool list is account-scoped. Read the verbs. A
hosted server that can refund is still a refund tool with a nicer vault.

| Kind of connection | Where the secret sits idle | Survives deleting a bot? | What a sibling bot can do |
|---|---|---|---|
| Browser or plugin login | Cookies and sessions on the shared computer | Yes, until you sign out or revoke | Open the same site as the signed-in identity |
| Token or CLI profile on disk | The shared filesystem | Yes, until you delete the file | Read the file and use it |
| Hosted MCP sign-in | Cursor's backend, never on the computer | The token is not on the disk to begin with | Call the same hosted tools on the account |

Do not print a plugin count and call it architecture. Counts move. The
storage split does not. An API you can bound belongs on hosted MCP, after
you read the tool list. A site with no API is a browser identity for the
whole roster. Say that before you complete the login.

Teach-by-demonstration is a third surface, not a fourth computer. It records
visible browser interaction for up to ten minutes, captures no microphone
audio, produces a draft skill, covers browser workflows only, and is
unavailable on iPhone. It teaches clicks on the computer you already have.

## Edit on a Mac or Windows desk, and treat iPhone as pause-and-resume only

The computer the bots use is hosted. The client you use to change their jobs
is not. Supported desks are macOS (Apple silicon and Intel) and Windows (x64
and Arm64). Supported pocket is iPhone on iOS 18 or later. Not supported:
Linux desktop, Android, iPad. The teams page asks whether a Linux desktop app
exists and answers no
([FAQ](https://docs.x.ai/grok-bot/faq),
[teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

On iPhone you can pause and resume. Editing, history, testing, and deleting
need a desktop
([mobile](https://docs.x.ai/grok-bot/mobile)). Teach-by-demonstration is
unavailable on the phone. A looping routine on a train: you can stop it. You
cannot open history, rewrite the charter, test a fix, or delete the owner.
Plan the desk for those verbs. Plan the phone for the stop.

| Job you want to do | Where the product lets you do it | What fails if you only have the phone |
|---|---|---|
| Pause a looping routine | iPhone or desktop | Nothing. This is the pocket job |
| Resume that routine | iPhone or desktop | Nothing, if pause was the right call |
| Read run history | Desktop | You cannot prove whether it fired |
| Edit the routine or the charter | Desktop | The wrong text stays in force |
| Test, then delete a bot | Desktop | You cannot retire the owner, and you cannot inspect what you would retire |
| Record a demonstration | Desktop only | The phone cannot teach this |

A Monday miss diagnosed from a phone is a guess. History lives on a Mac or
Windows desk. The full client list is
[Grok Bot on Windows, Linux and iPad](/blog/grok-bot-supported-platforms).
Pocket limits: [Grok Bot on iPhone](/blog/grok-bot-iphone-app). Change the
object model at a desk.

## Walk Inbox Triage and Lead Scout through one jar until Monday is empty

Here is the worked example this page is for. Two bots. One cookie jar. A
routine that dies when you delete the wrong bot.

Friday 16:00. You create Inbox Triage, sign Gmail in the browser, and attach
a 07:00 weekday routine: sort into reply, read, and ignore, write a queue
file, never send. You create Lead Scout for overnight research. You do not
sign a second Gmail. The jar already has the session.

Friday 16:20. Lead Scout can load Gmail on the way to a vendor site. You do
not notice. The screen looks like a research desk. The jar does not care
what the screen is named.

Sunday 21:40. The sidebar feels messy. You delete Inbox Triage at a desk
(the phone cannot delete) and believe you have revoked Gmail.

Monday 07:00. No queue file arrives. The routine lived on Inbox Triage.
Lead Scout is still there. Gmail is still signed in. Friday's queue file is
still on disk. At 09:10 Lead Scout's browser is already in the mailbox. It
did not steal a login. It inherited the computer.

| Clock | Your action | What you think you now have | What the account actually has |
|---|---|---|---|
| Friday 16:00 | Create Inbox Triage, sign Gmail, add 07:00 routine | A mail machine with a schedule | One computer, one mail cookie, one routine glued to that bot |
| Friday 16:10 | Create Lead Scout for research | A second machine for browsing | A second screen on the same computer and the same jar |
| Sunday 21:40 | Delete Inbox Triage to "revoke mail" | Mail gone, research isolated | Routine gone, Gmail cookie still there, Friday's queue file still there |
| Monday 07:00 | Expect a sorted queue | A standing job that survived cleanup | No owner, so no run. Lead Scout can still open Gmail |

The routine is glued to the card. The cookie is glued to the computer. Delete
hits the first and leaves the second. Mail gone means sign-out or revoke,
then a file sweep. A surviving 07:00 job means leave Inbox Triage in the
sidebar, or copy the routine onto a durable name first. Two screens. One jar.
One dead schedule.

## Look for a model picker and meet the documented refusal instead

Operators look for a model dropdown the way they look for a second machine.
Grok Bot has no model picker, for members or admins. xAI does not plan to
allow admin or user choice
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
You do not assign one name to mail and another to research. Do not write a
charter that says "use grok-4.6". That name is a Grok Build model. It is not
a documented Grok Bot picker value. The serving set is fixed per surface,
with automatic failover, and billing follows the actual serving model.

There is also no Grok Bot-specific spend cap. Subscriptions include a weekly
usage allowance. Overflow is on-demand, billed from model and token cost. No
published dollar figure exists, so this page will not invent one. Cadence
and scope are the controls you have. A settings line about a default model
"when model selection is available" sits awkwardly against the no-picker
language. Treat the teams-and-enterprises sentence as the one that governs
Bot today.

How grok bot works, on this axis: you pick the job, the trigger, the
boundary, and the connections. You do not pick the weights.

## Keep SKILL.md and CLAUDE.md on Grok Build, never on this product

Claude Code compatibility, SKILL.md, CLAUDE.md, marketplaces, hooks, and
the AGENTS.md family are Grok Build facts. Grok Bot docs do not describe Bot
reading those files. Pasting a SKILL.md into a Bot charter because "Grok is
compatible" is a category error. Confirm Build compatibility on the Build
docs when you are in a repo.

Grok Bot is a named teammate on the shared computer. You brief it in ordinary
language, attach routines, and connect plugins or hosted MCP. You do not
point it at \`.claude/rules/\` and expect the Bot runtime to honor
\`allowed-tools\`. That split is
[Grok Bot vs Grok Build](/blog/grok-bot-vs-grok-build). CI and repo skills
on Build. Mail, calendar, and standing research on Bot. The computer, the
screen, and the routine are Bot objects. The markdown convention in a git
tree is not.

## Paste a two-bot roster that names the computer, the screens, and the stop

Write the mechanism into a file you own. The product will not keep a team
roster. This is a note next to the bots, not a SKILL.md and not a hope that
screens will enforce it.

\`\`\`text
Account computer: one persistent cloud computer, assigned to this user, not to a bot.
Do not treat a new bot as a new machine. Screens are work surfaces, not locks.

Bot: Inbox Triage
Screen job: sort inbound mail into reply / read / ignore, write queue.md, stop.
Routine: weekdays 07:00, owner = Inbox Triage. If this bot is missing, the routine is missing.
May read: Gmail (browser session on the SHARED computer).
Must never: send, reply, forward, unsubscribe, trash, or load a research site "while I'm here".
Boundary: a human sends. This bot files a queue.

Bot: Lead Scout
Screen job: overnight company research from a named list, write scout.md, stop.
Routine: weekdays 22:00, owner = Lead Scout.
May read: public pages. Must not open Gmail, even though the cookie is on this computer.
Must never: send mail, post, or create a login.
Boundary: a human decides who gets contacted. This bot writes a file.

Shared facts both charters must repeat:
- Cookies, sessions, files, and CLI credentials are account property.
- Deleting a bot deletes its routines and does not sign out Gmail.
- Hosted MCP tokens, if any, sit with Cursor's backend, still account-scoped.
- No model picker. No Grok Bot spend cap. No audit view of actions yet.
- iPhone can pause and resume only. Edits and deletes need desktop.

Retirement: copy routine text out, pause loops, sign out of mail in the browser,
delete leftover files, then delete the bot, from a desk, never from a phone.
\`\`\`

Paste that before the second login, not after the Monday miss. Change the
times. Do not change the owner lines. The owner line is what stops Sunday-you
from deleting Monday's job.

## Run a sibling-bot cookie test that is allowed to fail

Do not take the shared computer on faith because the UI shows two avatars.

On a throwaway site you control, or a staging login you can revoke, sign in
from Inbox Triage. Switch to Lead Scout. See whether the session is already
there. Write a small file in a folder the first bot used. See whether the
second bot can read it.

If Lead Scout is already signed in, the shared computer just became real. If
it cannot see the file, do not conclude you have per-bot computers. Wrong
path, or a UI that has not refreshed. Re-read computer-and-apps and run the
check again. Do not delete Inbox Triage as a test unless you copied the
07:00 text out. A green sidebar is not evidence. An audit view does not
exist yet. This check, plus files you own, are what you have.

## Answer the objection that a screen plus non-root is already a sandbox

The sophisticated version of the myth is not "each bot has a VM". It is "I
already know they share a computer, but a private screen plus a non-root
user is enough isolation for mail versus research." That still loses on the
docs.

Non-root versus root is about what the bot process can do to the managed VM.
It is not bot versus bot. Both bots run as that non-root user on the same
machine. They share the filesystem they are allowed to touch. They share the
browser. Two apps under one user on one laptop are not two users.

A screen does not change the user. It changes what you are looking at. If
screens isolated credentials, the approvals page would not tell you not to
use separate bots as a security boundary. They wrote that because the UI
invites the inference and the inference is wrong.

Where the objection wins is organisation. Two bots are the right shape for
two charters, two routine owners, and two places to pause. Lead Scout should
not have send in its brief even though it could open Gmail. Those constraints
are instructions plus your review. They are not a hypervisor. This page will
not invent CPU, RAM, or hypervisor details the docs do not publish. The
published split is account computer, per-bot screen, per-bot routines, shared
jar.

If the research bot must never be able to use the mail session, a second
screen cannot save you. A second account with less in it, or a job that never
logs in, can. If you are tired of one card doing two jobs, two bots on one
computer are in bounds.

## Diagnose a quiet Monday by asking which card still owns the job

When the 07:00 queue does not arrive, the myth offers a hardware story: the
mail machine crashed. Ask a smaller question. Which bot still holds the
routine?

| Symptom on Monday | First mechanism question | Wrong story | Right next step |
|---|---|---|---|
| No 07:00 queue, temp is gone from the sidebar | Did that deleted bot own the routine? | The mail VM died overnight | Recreate the routine on a durable bot, from a desk |
| No 07:00 queue, owner is still there, you are on a phone | Can you even open history from here? | The schedule drifted | Sit at a Mac or Windows desk and read the twenty records |
| Queue file from Friday is still on disk | Is a leftover file a live job? | The job obviously ran | Treat the file as a fossil. Look for today's run, or the missing owner |
| Lead Scout has Gmail open after you "removed mail" | Did delete sign the browser out? | Research stole a login | Sign out or revoke. Delete never cleared the jar |
| You cannot find which model ran | Did an admin pin a cheaper model? | Picker was reset | There is no picker. Check cadence and connections instead |

A missing owner is a routine problem. A leftover cookie is a computer
problem. A phone-only view is an inspection problem. Those three have three
fixes. If history is empty and the owner exists, you may be inside the 50
routine cap, or a create that never saved. Count before you invent a clock
bug. Then read
[Grok Bot routine did not run](/blog/grok-bot-routine-did-not-run).

## Stop this mechanism map at the jobs it cannot describe

This page tells you how the objects fit. Whether you should run a bot at all
is [what is a Grok bot](/blog/what-is-a-grok-bot). How to isolate anyway is
[one computer, many screens](/blog/grok-bot-shared-computer-security),
including offboarding order and the fact that an approval is not an undo.
Cadence is scheduling. Vendor tile counts go stale. Storage does not.

It does not mint a second account, ship a Linux or Android or iPad client, or
add an audit view the docs still mark as missing. Coming-soon admin Kill,
when it ships, deletes the VM and keeps durable storage. Treat that as not
shipped. Do not plan a cleanup around a button you cannot press.

The map applies to any roster on one eligible account. It stops at a second
account you created on purpose with a smaller cookie jar. That is a different
computer because it is a different user assignment, not because you named a
bot "isolated". Confirm current eligibility on the vendor's own pricing page.
This page will not restock stale floors.

**Keep reading:** [What Is a Grok Bot? The Plain Explanation for Non-Engineers](/blog/what-is-a-grok-bot), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security), [Grok Bot Routine Did Not Run: The 20-Record Cap and the Deleted Bot](/blog/grok-bot-routine-did-not-run).

## Frequently Asked Questions

### Does each Grok Bot get its own dedicated computer?

No. xAI assigns one persistent cloud computer to your user account, not to
each bot. A new bot gets a new screen on that machine. Screens are work
surfaces, not security boundaries. Cookies, sessions, files, and command-line
credentials stay shared. The dedicated-computer picture is the usual inference
from a second name in the sidebar, and the docs contradict it in more than
one place. Create extra bots to split jobs and routine owners. Do not create
them to buy sandboxes the product does not sell.

### If I delete a bot, do its Gmail login and files disappear with it?

Deleting a bot deletes its routines and the run records glued to those
routines. It does not remove shared-computer files or browser sessions. The
Gmail cookie can remain. Last week's queue file can remain. A sibling bot can
still open the mailbox. If you meant to revoke access, sign out or revoke the
grant, then delete leftover files, then delete the bot, from a desktop. Hide
the bot instead if you still need the standing job. iPhone cannot run that
sequence, because deleting needs a desk.

### Can I pick which model a Grok Bot uses?

Grok Bot has no model picker, for members or admins, and xAI does not plan to
allow that choice. You do not assign one model to mail and another to
research. Do not put a model name such as grok-4.6 in a Bot charter as if it
were a setting. That name belongs to Grok Build documentation, not to a Bot
dropdown. You pick the job, the trigger, the boundary, and the connections.
The serving model is not a per-bot control, and there is no Grok Bot-specific
spend cap to pair with it either.

### Why did a scheduled job vanish after I removed a test bot?

A routine is assigned to one bot. Nothing is team-level. When you deleted the
test bot, you deleted every routine attached to it. The leftover file from
last week is not the job. It is a fossil on the shared computer. Recreate the
routine on a durable name, from a Mac or Windows desktop, after you copy the
text out if it still exists somewhere you control. On iPhone you can pause
and resume only, so a sofa cleanup cannot show you history and cannot safely
complete this repair.
`,
};

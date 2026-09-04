import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs Claude Cowork: Which One Fits Your Work',
  description:
    'Grok Bot vs Claude Cowork: a cloud teammate on a shared computer against a desktop operator. Access plans, what each can reach, and the jobs where each wins.',
  date: '2026-08-26',
  category: 'Comparison',
  content: `
# Grok Bot vs Claude Cowork: Which One Fits Your Work

You are not choosing between two similar assistants. You are choosing where
the work has to live after you close the laptop.

Grok Bot vs Claude Cowork is ranking this week because MoClaw, Eigent, Indian
Express, and 4Geeks all published roundups, and several of them repeat a claim
that is false: that each Grok Bot has its own computer. That error turns the
rest of the comparison into fiction. If you believe you have ten sandboxes, you
will connect ten logins. You have one computer.

This article is about Grok Bot from xAI, the cloud teammate product, not Groq
the chip company. Grok Bot facts below were checked on 2026-08-25 against
[the Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) and
[computer and apps](https://docs.x.ai/grok-bot/computer-and-apps). Claude Cowork
facts are hedged on purpose. Anthropic's pages have been moving. Third-party
roundups currently place Cowork on paid Claude plans and describe it as
desktop-first, working in local files. Confirm prices, plan names, and surfaces
on Anthropic's current docs before you budget or roll it out.

The useful split is simple. Grok Bot is a roster of named bots on one persistent
cloud computer that keeps working after the laptop closes. Cowork, as it is
widely described, is a desktop operator on this machine. Pick by where the work
has to live, not by a feature grid.

## Pick the machine the work has to live on, not a feature checklist

A feature checklist goes stale in a week. The question that survives is where
the file has to sit for the job to finish: a cloud computer that stays awake,
or this laptop's disk.

| Where the work has to live | Pick | Why this is the axis |
|---|---|---|
| Overnight mail, portals, and briefs while the laptop is shut | Grok Bot | One persistent cloud computer that outlasts the lid |
| A messy folder of files that already sit on this disk | Claude Cowork, as publicly described | Desktop-first operator on local files; verify on Anthropic |
| Named roster with separate screens, same logins | Grok Bot | Screens are work surfaces, not isolation |
| Files that must never leave this machine | Claude Cowork, then re-check Anthropic's current model | Local-first descriptions; do not outsource the residency call to a roundup |
| A construction set you will operate yourself | Neither of these; see [Grok Bot vs Claude agents](/blog/grok-bot-vs-claude-agent) | Cowork is not the Agent SDK, and Grok Bot is not a harness you own |

Read the last row. If what you actually wanted was Claude's agent stack rather
than Cowork, stop this comparison and go to that article. Mixing Cowork, Claude
Code, and the Agent SDK into one "Claude" column is how these roundups get
noisy.

## Name Grok Bot as a roster of teammates on one cloud computer

Grok Bot is a product you operate, not a kit you assemble. You name a bot,
brief it, connect tools, and it runs on a managed Linux VM that xAI operates.
You do not pick the model. You do not patch the box. You do not get a private
computer per bot.

The computer is assigned to your user account. Every bot you add is another
named teammate on that same machine, with its own screen. The screen is a
window manager concept. It is not a VM, a namespace, or a credential store.
Ten bots are ten screens and one filesystem.

That is why "teammate" is the right word and "fleet of sandboxes" is the wrong
one. A [chief of staff briefing](/bots/chief-of-staff-briefing) bot and an
[inbox triage](/bots/inbox-triage) bot can look like two hires. They share
cookies, signed-in sessions, files, and command-line credentials. They keep
working after you close the laptop because the computer is in the cloud, not
because each hire brought a locked office.

The product launched in beta on 11 August 2026. Eligibility widened on 21
August 2026. Anything written before that second date is describing a narrower
door than the one that exists now. The architecture did not change with the
price: still one computer per account.

## Call Claude Cowork a desktop operator until Anthropic's current docs say otherwise

Cowork is the other object in this search, and it is not "Claude, but like
Grok Bot." Third-party roundups currently place it on paid Claude plans and
describe it as desktop-first: you point it at folders on the machine in front
of you, and it works in those files. That is an operator on this desk, not a
roster on a cloud computer you cannot see.

This page does not print a Cowork feature list, a plan matrix, or a price.
Those are Anthropic's to publish, and they have been moving. If a blog tells
you Cowork is only one plan, only one OS, or definitely in the cloud when the
lid is closed, treat that as a claim to check, not as a column in this table.

When Anthropic's current docs disagree with a roundup, believe Anthropic. Then
ask which machine is holding the work, not which brand feels more agentic.

## Correct the roundups that give every Grok Bot its own machine

The viral picture is tidy: one bot, one computer, delete the bot and the
logins die with it. MoClaw, Eigent, Indian Express, and 4Geeks are ranking for
this query with that picture in the air, and it is the picture a buyer wants,
because it makes a roster look like isolation.

xAI's own docs contradict it in more than one place. The FAQ states that all
bots on an account share one persistent cloud computer. The computer-and-apps
page states that the computer is assigned to your user account, not to an
individual bot, and that each bot gets its own screen. The approvals page
states, as an instruction: "Do not use separate Bots as a security boundary."
Deleting a bot does not remove shared-computer files or browser sessions. If
you signed a research bot into a site, deleting the research bot does not sign
the rest of the roster out. The session is on the computer, and the computer
belongs to the account.

This is not a nit. It is the difference between connecting a mailbox to one
hire and connecting a mailbox to every hire at once. The longer write-up of
what is actually shared, and how to isolate anyway, is
[one computer, many screens](/blog/grok-bot-shared-computer-security). Read
that before you treat a second bot as a second lock.

## Treat screens as work surfaces, never as a security wall

Once you drop the private-VM story, the shared list is concrete. It is not a
vibe called "the environment." It is cookies, sessions, files, and CLI
credentials, all shared across bots on the account.

| Resource | Scope | What that means on Tuesday morning |
|---|---|---|
| Browser cookies | Shared across every bot on the account | A research bot can load a site your mail bot signed into |
| Signed-in sessions | Shared across every bot on the account | One authorisation is an authorisation for the roster |
| Files on disk | Shared across every bot on the account | A CSV one bot exported is readable by the others |
| Command-line credentials | Shared across every bot on the account | A token set up for one job is available in any terminal |
| Screens | One per bot | Separate work surfaces, explicitly not security boundaries |
| Hosted MCP sign-in tokens | Held by Cursor's backend, not stored on the computer | The documented exception; a browser login is not this |
| Audit view of bot actions | Does not exist yet | You cannot replay who did what from a product log |

Hosted MCP tokens are the one isolation win in that table, and they are easy to
miss because the settings UI uses the word "connection" for both a backend
token and a cookie in the shared browser. Those are different risk profiles.
If you signed in through the browser, assume every bot can use the session.

Approvals stop a proposed action. They do not reverse work already completed,
and they do not unsay a cookie already in the jar. Naming bots after jobs is a
briefing device. It is not a firewall.

## Match each job to where the files and sessions actually sit

Ask where the artefact already lives, and whether the job has to finish while
this laptop is asleep. The catalog links are paste-ready setups, not isolation.

| Job | Better home | Why | Starting charter |
|---|---|---|---|
| Morning inbox pack from overnight mail | Grok Bot | Mail session and clock both live off this laptop | [Inbox triage](/bots/inbox-triage) |
| Daily briefing before you sit down | Grok Bot | Inputs are reachable while the lid is closed | [Chief of staff briefing](/bots/chief-of-staff-briefing) |
| Prospect sheet from public pages plus a logged-in CRM tab | Grok Bot, with the shared-session warning | Browser lives on the shared cloud computer | [Lead scout](/bots/lead-scout) |
| Standup notes from a local transcript file | Claude Cowork, as publicly described | The file already sits on this disk | [Standup scribe](/bots/standup-scribe) for the output shape |
| Sort, rename, and file a Downloads folder | Claude Cowork, as publicly described | Local files are the whole job | Confirm the folder grant on Anthropic's current docs |
| Named roster that must keep running on a train | Grok Bot | Client on iPhone (iOS 18+); computer stays in the cloud | Keep each bot's boundary in the charter, not in the screen name |

Putting inbox triage and lead scout on two bots puts two names on one cookie
jar. Write the boundary into each charter. The computer will not remember it
for you.

## Buy Grok Bot through the plans that actually include it

Access is a subscription check, not a Grok Bot SKU you add at checkout.
Eligible paths, per the FAQ: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+,
Cursor Ultra, Cursor Teams Standard, Cursor Teams Premium, and a one-time
trial. Eligibility widened on 21 August 2026. Cursor Pro+ at $60 a month is
the cheapest paid path. SuperGrok Heavy is eligible; this page does not print
a Heavy price because it is not a number you can verify from a primary page.

| Path | Includes Grok Bot | Note, checked 2026-08-25 |
|---|---|---|
| Cursor Hobby (free) | No | Not a back door |
| Cursor Pro ($20/mo) | No | Easy to confuse with Pro+ |
| Cursor Pro+ ($60/mo) | Yes | Cheapest paid path on the published list |
| Cursor Ultra | Yes | Eligible; get the current rate from Cursor |
| Cursor Teams Standard ($40/user/mo) | Yes | Per-user |
| Cursor Teams Premium ($120/user/mo) | Yes | Per-user |
| SuperGrok ($30/mo) | No | The $30 plan is not the Plus plan |
| SuperGrok Plus ($100/mo) | Yes | Includes Grok Bot access |
| SuperGrok Heavy | Yes | Eligible; do not copy an unpublished dollar figure |
| One-time trial | Yes | Individual path; it is not a substitute for reading the live FAQ |

There is no Grok Bot-specific spend cap. Subscriptions include a weekly usage
allowance. Overflow is on demand, billed from model and token cost. There is
no model picker for members or admins. Hosted MCP sign-in tokens stay with
Cursor's backend. The ownership chain behind the Cursor sign-in is
[why Grok Bot needs a Cursor account](/blog/grok-bot-cursor-account-explained).
The shape of the bill, once you are on a qualifying plan, is
[Grok Bot cost](/blog/grok-bot-cost). Do not treat a weekly allowance as a
number you read in a roundup. No published figure belongs in this article.

Supported clients are macOS (Apple silicon and Intel), Windows (x64 and
Arm64), and iPhone on iOS 18 or later. Linux desktop, Android, and iPad are
not supported. If your daily machine is a Linux workstation, you do not install
a Grok Bot desktop there.

## Recheck Anthropic yourself before you budget Claude Cowork

Do not invent Cowork's price, plan names, or a capability matrix from a
roundup. Third-party pages currently place Cowork on paid Claude plans. That
is a pointer, not a receipt. Open Anthropic's current pricing page and the
current Cowork product or help page, and copy the numbers from there into your
own sheet.

Two failure modes show up in this search. One is quoting a launch-week
restriction as if it were still true. The other is quoting a later marketing
line about other surfaces as if your account already has them. Both are why
this page refuses to freeze a Cowork column.

Budget Grok Bot from the table above, dated. Budget Cowork from Anthropic,
dated the morning you buy. If a competitor page gives you both columns as
settled, it is either stale or guessing. For Grok Bot, stale still means two
specific errors: a private computer per bot, and a cheapest paid path other
than Cursor Pro+ at $60 a month after 21 August 2026.

## Leave overnight work on the computer that stays awake after the lid closes

This is the worked case, because the search is full of grids and short on
Tuesdays.

You want a 07:15 pack: overnight mail grouped, calendar conflicts flagged,
three links you must open before stand-up. You close the laptop at 23:00. At
07:15 you are on a train with a phone.

On Grok Bot the computer is already in the cloud. The inbox bot can draft
while the lid is shut. You open the pack on iPhone (iOS 18+) or you open it on
the laptop later. The session, the files, and the draft live on the account
computer. They do not depend on this disk being awake. Day one looks like a
rough pack with too many newsletters. Day thirty looks like the same pack with
a tighter charter: newsletters in one bucket, anything that asks for money in
another, nothing sent.

On Cowork as publicly described, the operator is on this machine and the files
it is known for touching are local. If you need last night's mail after the
lid is closed, do not assume a desktop operator is sitting in the cloud for
you. Check Anthropic's current docs for whatever continuation they actually
ship on your plan. A local-files product does not become a shared cloud
computer because a headline used the word "agent."

By day thirty the Grok Bot version of this job has a second failure mode the
Cowork version does not: the research bot you added in week two can see the
mail session. That is the shared computer, not a bug. The fix is the charter
and the sign-out, not a third bot.

## Paste a roster charter that assumes the computer is shared

A charter that pretends each bot has a private machine will authorise too
much. Write the shared computer into the brief so the bot cannot "helpfully"
use a session that belongs to a different job. Paste this, then replace the
bracketed lines.

\`\`\`text
IDENTITY
You are Inbox Night Watch for [NAME]. You draft a morning triage pack from
overnight mail. You are one named bot on a shared cloud computer assigned to
the user account, not to you. Other bots on this account can see the same
browser cookies, signed-in sessions, files, and CLI credentials. Your screen
is a work surface. It is not isolation.

WHAT YOU OWN
You own a private draft pack with these fields:
  Time window: [e.g. 18:00 to 07:00 local]
  Must-read: [count] threads, each with sender, subject, one-line stake, and
    a recommended next action for a human
  Waiting on them: threads where we owe nothing
  Newsletters: count only, no summaries
  Money or access requests: quoted, never actioned

You do not own: sending, archiving, labelling, deleting, forwarding, calendar
invites, CRM writes, or signing into any site.

WHERE YOU STOP
Never send, archive, label, or delete mail.
Never sign into a new site or complete a login challenge.
Never use another bot's files as if they were yours to publish.
Never export files off this computer.
Never treat a separate bot as a security boundary. If a step needs a session
you did not need yesterday, stop and ask.
An approval, if one appears, controls a proposed action. It does not undo
work already done. Do not take irreversible steps hoping someone will rewind
them.

WHEN UNSURE
If a thread could be phishing, money, legal, or access, quote it and stop.
If two bots on this account could collide on a file or a site, stop and name
the collision.

OUTPUT
Write the pack to [PATH ON THE SHARED COMPUTER] and nowhere else. Do not
post it. Do not mail it. The human copies what they need.
\`\`\`

The boundary is the line that makes it safe to leave running overnight. Draft
only. No new logins. No pretending the screen is a wall. If you need the same
shape for a briefing bot, copy the identity block that names the shared
computer. Do not skip it on the "trusted" bot. Trusted is how cookies spread.

## Trace a crossed-session failure before you add a second bot

The failure that is specific to Grok Bot vs Claude Cowork is not "the model
was wrong." It is "the other bot could reach this." Walk it once so you
recognise it in week two.

| Symptom | Likely cause | Fix that actually matches |
|---|---|---|
| The research bot opens the CRM your sales bot signed into | Shared browser cookies on one computer | Sign the CRM out of the shared browser, or do not sign it in there |
| Files from a deleted bot are still on disk | Deleting a bot does not remove shared-computer files | Delete the files yourself, then list the directory |
| A leftover login still works after you removed the bot | Sessions live on the computer, not in the bot record | Sign out in the shared browser, then check |
| Linux, Android, or iPad has no client | Those clients are not supported | Use macOS, Windows, or iPhone on iOS 18+ |
| Cowork cannot see last night's cloud export | The file lives on the other machine | Run the job where the file already is |
| A roundup promised a private VM per bot | The roundup described a product that is not this one | Re-read computer-and-apps; count one computer per account |
| Nobody can show who did what last Thursday | An audit view of bot actions does not exist yet | Keep your own log outside the product, or do not run the job |

Add the second bot only after you can explain, in one sentence, what it can
reach that the first bot can reach. If the honest sentence is "everything the
first bot can reach," you added a name, not a lock. That can still be worth
it for review. Do not file it under security.

## Prove the shared-computer model with checks that can fail

Do not take this page on trust if you are about to connect a mailbox. Run
checks that can fail.

Create two bots on the same account. On bot A's screen, write a file with a
unique string, or sign into a throwaway site. On bot B's screen, ask it to
read that path or open that site. If bot B can see it, you are looking at one
computer. That is the documented design.

Delete bot A. If the file and the login remain, deletion is not cleanup.
Remove both yourself. Then open the live approvals, security, and privacy page
and find the sentence that tells you not to use separate bots as a security
boundary. If you cannot find it, you are on a stale copy.

For Cowork, grant a folder, ask it to list the folder, then confirm a folder
outside the grant is out of reach. Take pass or fail from the machine in front
of you and from Anthropic's current permission model, not from a competitor
table.

## Concede the case where a laptop-local operator is the safer default

The strongest objection to this page is not the viral VM claim. It is the
residency claim, and it sometimes wins.

If the files cannot leave this laptop, a cloud computer is the wrong place,
no matter how tidy the roster looks. Cowork as publicly described is the
closer default: an operator on this machine, in folders you grant. Legal
holds, unpublished decks, and anything you would not put in a vendor VM belong
there until you have a written exception. Naming the bot "confidential" does
not change who operates the VM.

The objection also wins when the job is cleaning this disk: receipts, exports,
a folder of notes. Forcing those through a cloud computer adds a copy you did
not need.

Where it loses is overnight work, phone-only mornings, and logins that must
stay alive on a machine that is not this lid. That is Grok Bot's product, which
is why you inherit the shared computer, the missing spend cap, the missing
model picker, and the missing audit view. If you needed to own the harness,
that is Claude's agent tooling, not Cowork, and it is the other article.

## Refuse the jobs that neither product should run unattended

Placement does not make an irreversible action safe. A cloud teammate that
sends mail is still sending mail. A desktop operator that deletes the wrong
folder is still deleting the folder. Write the boundary before you pick the
machine.

Do not let either product send, pay, post publicly, merge, or delete without a
human. Do not let a second Grok Bot stand in as the backstop for a login it
should not have. Do not let a Cowork-style folder grant become the whole home
directory. Do not run a job that needs an immutable action log on Grok Bot
and pretend the product has one. It does not, yet.

The jobs that survive are drafts, packs, sheets, and proposed edits: inbox
triage that never sends, briefings that never invite, lead sheets that never
outreach, standup notes that never post until you do. Those catalog shapes
work because the blast radius is a draft, or a local file you can still undo.

If the job fails that filter, keep it. Do not automate it because a roundup
said the other vendor shipped a teammate.

**Keep reading:** [Grok Bot vs Claude Agents](/blog/grok-bot-vs-claude-agent), [One Computer, Many Screens](/blog/grok-bot-shared-computer-security), [Why Grok Bot Needs a Cursor Account](/blog/grok-bot-cursor-account-explained).

## Frequently Asked Questions

### Does each Grok Bot get its own computer or VM?

No. Every bot on the account shares one persistent cloud computer assigned to
the user, not to a bot. Each bot gets its own screen on that machine, and
screens are work surfaces rather than security boundaries. Browser cookies,
signed-in sessions, files, and command-line credentials are shared. xAI's docs
tell you not to use separate bots as a security boundary. Roundups that
describe a private VM per bot are describing a product that is not this one.
Count computers by account, not by how many names you created.

### Does deleting a Grok Bot remove its logins and files?

No. Deleting a bot removes that bot and its routines. It does not remove files
on the shared computer or the browser sessions sitting in the shared cookie
jar. If you signed a bot into a site, the session can still be there for every
remaining bot. Hosted MCP sign-in tokens are the documented exception: they
stay with Cursor's backend and are not stored on the computer. Clean up by
signing out and deleting files yourself, then checking that both are gone.

### Which is cheaper, Grok Bot or Claude Cowork?

Compare subscription shape, not a guessed grid. For Grok Bot, the cheapest paid
path currently listed is Cursor Pro+ at $60 a month. Cursor Hobby and Cursor
Pro at $20 do not include it. SuperGrok Plus at $100 includes it; SuperGrok at
$30 does not. There is no bot-specific spend cap, and overflow after the weekly
allowance is billed from model and token cost. Third-party roundups currently
place Cowork on paid Claude plans. Check Anthropic's current pricing before you
treat either as the bargain.

### Can I run Grok Bot on Linux, Android, or an iPad?

No. Supported clients are macOS on Apple silicon and Intel, Windows on x64 and
Arm64, and iPhone on iOS 18 or later. Linux desktop, Android, and iPad are not
supported. If your daily machine is a Linux workstation, Grok Bot is not a
client you install there. Cowork's client list is something you should take
from Anthropic's current docs rather than from this page, because that surface
has been moving.
`,
};

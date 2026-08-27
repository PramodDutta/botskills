import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Pick the First Job to Hand a Grok Bot',
  description:
    'The first grok bot job should be reversible, evidence-producing, and never a send. Inbox labels and a daily brief beat outbound, ads, and hiring on day one.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How to Pick the First Job to Hand a Grok Bot

The first grok bot job gets picked by whoever talks loudest in standup, which
is how a five-person team hands a stranger their first look at the company
before anyone has seen a labelled inbox. Value is the wrong axis.

This page is a decision procedure. Score every candidate on reversibility,
evidence, blast radius, and whether a human still does the irreversible step.
Then pick one job and refuse the rest for a week. It is not the [hour on the
clock](/blog/first-grok-bot-in-an-hour). That page times a run. It is not the
[catalog of setups](/blog/grok-bot-examples). That page lists jobs. If you still
need the product in plain language, start with [what a Grok Bot
is](/blog/what-is-a-grok-bot), then come back here and score.

The worked example is a five-person team arguing among outbound, inbox, and
competitor watch. The winner is inbox draft-labels that never send. [Inbox
Triage](/bots/inbox-triage) is that first job. [Lead Scout](/bots/lead-scout)
is a later job, after the review habit exists.

## Score every candidate on four axes before anyone opens the app

Write the nominees on a page before you create a bot. If the first name you
type is a bot name, you already skipped the decision.

Score each nominee 0, 1, or 2 on four axes. Zero means the job fails even on a
careful charter. One means it passes only if a human holds a specific line.
Two means a wrong run is still something you can live with this morning.

| Axis | Score 0 | Score 1 | Score 2 |
|---|---|---|---|
| Reversibility | Outside world changed, cannot put it back | Unwind needs a person and an apology | Delete, relabel, or discard the draft |
| Evidence | Fluency, vibe, or a claim with no URL | Mix of sources and inventions | Every material claim has a pointer you can open |
| Blast radius | Stranger, customer, candidate, or paid channel sees it | Shared channel sees it | Only you, or a private doc you own |
| Human owns the irreversible step | Bot can send, spend, publish, reject, or hire | Bot prepares the act, human likely clicks through | Irreversible verb is not on the bot |

Add the four numbers. The first grok bot job is the highest total that you
already do this week. A glamorous 8 that is not in the queue today is a
research project. A boring 7 that is already 400 unread is the job. Do not
average in strategic importance. That is how outbound wins a meeting and
loses Tuesday. If two jobs tie, pick the one you can grade in twenty minutes
with the sources already on screen.

## Treat reversibility as whether the world can be put back

Size is a trap. Relabelling eighty threads looks huge and is undoable. Sending
one quick intro looks tiny and is permanent the second it leaves. Tune on
whether the bot can put the world back. The longer version lives on
[approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility).
The picking consequence is simple: if the nominee cannot be unwound, it is not
the first grok bot job.

An approval is a gate on the next proposed action. It does not reverse work
already completed. There is, as of writing, no audit view of Bot actions. If
the bot already sent, you will reconstruct it from the Sent folder, from a
stranger's reply, or from nothing.

Reversible on day one means labels, drafts that stay drafts, private memos,
and spreadsheets you own. Irreversible means send, spend, publish, create an
account, fill a form as the company, reject a candidate in an ATS, or DM a
prospect. If the charter says never send but the connected tool has a send
button the bot can see, score reversibility as 1 at best.

Grok Bot runs on one persistent cloud computer assigned to the user, not to a
bot. Each bot gets a screen. Screens are not security boundaries. Cookies,
sessions, files, and CLI credentials are shared. Deleting a bot does not
remove those. [Shared computer security](/blog/grok-bot-shared-computer-security)
is the mechanism. If you cannot state the unwind in one sentence, the job is
not reversible. Unsend is not a verb email gives you.

## Demand evidence you can open, not fluency you can admire

A first job has to produce a stack you can grade before lunch. Fluency is
free. A labelled thread you can open is evidence. A competitor launch with no
URL is a rumor the bot wrote in your voice.

Evidence is a pointer a skeptic can follow in under a minute. For mail, the
pointer is the thread. For research, the pointer is a public page that still
says the thing. For hiring, the pointer is a sentence in the resume you
already hold. If the bot must infer urgency from tone, the evidence score
drops to 0.

Inbox draft-labels score well because the source and the output sit in the
same product. You open the thread, you look at the label, you look at the
draft, you agree or you fix the charter. Competitor watch scores worse in
practice because the source moves. Pricing tables change class names
overnight. A homepage hero swap is not a strategy change.

Outbound research can produce evidence. A quoted public post with a link is
evidence. A location claim with no source is not. A sheet of twenty accounts
is still slow to grade, and someone will want to send the suggested first
line. That is why [Lead Scout](/bots/lead-scout) waits. If you cannot name the
pointer type, you do not have a job. You have a prompt.

## Measure blast radius by who else can see the mistake

Blast radius is who can see a wrong output before you can delete it. A
misfiled label is you, for an hour. A Slack post in #sales is the whole
company repeating a price cut that never happened. A first-touch email is a
stranger filing you under noise.

Score the output channel, not the research channel. A competitor memo in a
private doc you own is a 2. The same memo posted to a shared channel is a 0
until a human pastes it. An inbox draft that never leaves Gmail Drafts is a 2
on audience, even though the Gmail login sits on the shared computer. Those
are different radii. One is who saw the words. The other is what session now
lives on the VM. Score both, and let the lower number win if they disagree.

If you sign into Gmail so [Inbox Triage](/bots/inbox-triage) can label, every
other bot on the account can use that cookie. Connect the minimum
([least privilege](/blog/least-privilege-bots)), and run [the safety
checklist](/blog/grok-bot-safety-checklist) before the consent screen. Create
one bot, connect Gmail, and refuse a second bot until you have seen a week of
labels. Hosted MCP sign-in tokens stay with Cursor's backend. Browser cookies
stay on the computer. Pick a job that needs one door. iPhone can pause and
resume. Editing, history, testing, and deleting need desktop. There is no
Linux desktop app, no Android app, and no iPad app. Grade the first job on a
desk.

## Keep the irreversible step on a human even when the bot is fast

If the bot is allowed to do the verb that cannot be undone, you do not have a
first job. You have a junior employee with no manager and no log. Human owns
the irreversible step means the bot stops at a draft, a label, a row, or a
brief. You send. You spend. You publish. You reject. The click is the job you
kept on purpose.

A charter that says ask me before sending is a 1, not a 2. You will be in a
meeting. The prompt will sit. You will approve from the lock screen. Score it
as if that already happened. A 2 means send is not a tool the bot has, or the
draft lives in a document that has no send button.

This is why inbox draft-labels beat a careful outbound bot on day one. Mail
already has a drafts folder. Outbound wants a send folder. [A never-send
outbound setup](/blog/grok-bot-sales-outbound) is a later craft. If someone
argues that keeping send on a human defeats the purpose, they are arguing for
unattended action. The purpose of the first grok bot job is to prove you can
review, not to prove the model can press a button.

## Disqualify outbound, ads, and hiring as day-one jobs

Three nominees lose before you bother with a close score. Each one wants an
irreversible verb the company already cares about, and a wrong run is visible
outside the room.

| Nominee | Irreversible verb it wants | What a wrong run does | Day-one verdict |
|---|---|---|---|
| First-touch outbound | Send, DM, follow, or like | Spends a stranger's first look | Disqualify. Research later, as Lead Scout |
| Ads and live creative | Publish or spend | A claim or a charge you cannot rewind | Disqualify. Draft in a doc, never the ad account |
| Hiring outreach or ATS writes | Message, reject, advance | Contacts or rejects someone who did not ask | Disqualify. Screen files later, never message |

Outbound fails reversibility and blast radius even when the copy is sourced.
If pipeline is the board metric, that is an argument for a sourced sheet next
week, not for a bot that can reach a human today. Ads fail because publish and
spend are charges you cannot rewind. Confirm any ad product's current
permissions on the vendor's own page before you connect it. Hiring fails
because the audience did not invite a bot into the thread. Screening files you
already received can wait: extract evidence, never reject, never contact. See
[how to screen applicants](/blog/grok-bot-to-hiring-screening). If your team
only has these three nominees, add inbox, then score.

## Rank inbox draft-labels above competitor watch for a first grok bot job

After the disqualifications, two serious nominees remain: inbox draft-labels
that never send, and a competitor watcher that writes an internal memo. Both
can be reversible. Both can keep a human on the irreversible step. Inbox still
wins as the first grok bot job.

The evidence is denser. Each label points at a thread you already own. You can
grade forty decisions in the time it takes to verify three competitor claims
against live pages. Selectors rot. A cookie banner is not a pricing change.
See [how competitor monitoring actually fails](/blog/grok-bot-to-competitor-monitoring).

Mail arrives whether you have a bot or not. Competitor watch is a new product
you now have to staff with a reviewer. A first job should steal time from work
you already pay for. Inbox trains the review habit because you open mail
anyway. A memo you can skip does not train a roster.

If the watcher posts to #sales, it loses blast radius outright. If it writes a
private doc, it still loses on evidence and on already-in-the-queue. Connect
Gmail with the minimum scope, labels and drafts, not send. [Grok Bot and
Gmail](/blog/grok-bot-gmail) is the permission story. [How to build inbox
triage](/blog/grok-bot-to-inbox-triage) is the taxonomy. Paste [Inbox
Triage](/bots/inbox-triage) after the score, not before it.

## Walk the five-person team's Monday argument to a scored winner

Northline is five people, a shared founder inbox at 412 unread, a rival that
shipped a changelog on Friday, and a board packet due Thursday that wants
pipeline. They can create one Grok Bot this week. They argue, then they score.

Priya founded the company and wants outbound: we did not buy this seat to
file newsletters. Marco wants the same, plus a bot that emails the twenty
accounts on his whiteboard. Lena wants the inbox labelled by 07:30, three
drafts, never send. Dev wants a competitor brief in #eng. Jules wants that
brief in #sales.

| Person | Nominee | Reversibility | Evidence | Blast radius | Human owns irreversible | Total |
|---|---|---|---|---|---|---|
| Priya | First-touch outbound that may send | 0 | 1 | 0 | 0 | 1 |
| Marco | Outbound drafts plus a send at noon | 0 | 1 | 0 | 0 | 1 |
| Lena | Inbox labels and three unsent drafts | 2 | 2 | 2 | 2 | 8 |
| Dev | Competitor memo posted to #eng | 1 | 1 | 0 | 1 | 3 |
| Jules | Competitor memo posted to #sales | 1 | 1 | 0 | 1 | 3 |

Priya objects that Lena's 8 is just chores. The table does not have a chores
column. The 412 unread are decisions. A wrong label is a drag-back. A wrong
outbound sentence is a stranger's last impression of Northline.

Dev asks to drop the Slack post and keep a private doc. Recalculate. Private
competitor watch scores 2, 1, 2, 2: total 7. Still under inbox, because
evidence is a live page that can move, and because nobody at Northline will
open a new doc before they open mail. The 7 is a good second job. It is not
the first grok bot job. Jules asks whether ads can ship Friday. Ads score
0, 1, 0, 0. Disqualified.

They create one bot, paste a never-send inbox charter, and connect Gmail with
no send. They do not create Lead Scout today. Tuesday morning Lena has labels
and three drafts. Priya opens two, edits one, sends both herself. That is the
product working. If Priya had won the huddle, Tuesday would be twenty
strangers and no proof the model can sort.

## Write the inbox charter so labels and drafts cannot send

A high score dies when the pasted text is vague. Help with email is not a job.
Name the labels, the draft cap, the forbidden verbs, and the money, legal, and
HR exception that skips drafting. Keep the never-send line verbatim.

\`\`\`text
You are Inbox Triage for Northline. You never send.

Every weekday at 07:30:

1. Scan mail received since the last run.
2. Classify each thread as exactly one of: needs-reply, waiting-on-others,
   newsletter, receipt, noise. Apply the matching label.
3. Archive only noise and receipts. Do not archive needs-reply.
4. For the three highest-priority needs-reply threads, write a draft in the
   thread. Short sentences. Answer first. No filler.
5. DM me a count per label, the three draft subjects, and any needs-reply
   thread older than three days.

Never send, forward, unsubscribe, or delete.
Never create a filter that auto-sends.
If a thread involves money, legal, hiring, or HR, do not draft. Label
needs-reply and flag it as needs-me.
If you are unsure, choose needs-reply over archive.
Every draft stays a draft until I send it myself.
\`\`\`

The catalog version is [Inbox Triage](/bots/inbox-triage). The boundary there
is the same: never sends an email; every draft waits for explicit approval.
Do not add competitor watching to this charter. Two jobs in one bot is how a
morning pass starts browsing pricing pages with a Gmail session already on
the computer. One bot, one job, one connection. [Scheduling](/blog/grok-bot-scheduling)
can wait until the manual run is boring. A routine assigns a workflow to one
bot. Max 50 routines per bot. Deleting the bot deletes the routines. Nothing
is team-level. Teach-by-demonstration records up to ten minutes of browser
workflow, with no microphone audio, and produces a draft skill. If you click
Send in the lesson, Send is in the skill.

## Answer the founder who says pipeline work has to be first

Priya's objection is the one you will actually hear. Revenue is the company.
Mail is overhead. The objection is still wrong as a picking rule.

Pipeline work is not one job. It is research, a first line, a send, a
follow-up, and a CRM row. The irreversible piece is the send. Day one can
support research only after you have a grader. You do not have a grader until
something checkable has arrived for several mornings and you have actually
checked it. Inbox is how you hire yourself as the grader.

A sourced lead sheet with zero contact is a 7 or an 8 on the four axes. That
is [Lead Scout](/bots/lead-scout): public signals, scored rows, links, never
DM, never reply, never follow, never like. It is a later job because grading
twenty accounts is slow, and because the suggested first line is a send
waiting for a mood. After inbox is boring, scout is the right second bot.
Before inbox, scout is how a shiny sentence leaves.

If Priya wants proof the seat can grow pipeline, give her Thursday. Three
days of labels she can audit, then a scout pointed at public posts, with
never-contact in the charter and no Gmail on that job. The first work to take
off humans is the work whose mistakes are cheap. That is labels. Pipeline
gets the second bot.

## Prove the pick with a check that fails if a message left

A score is a prediction. Tuesday morning is the test. Write the proof before
the first run, or you will grade on vibes. Plant a canary from a second
address with a unique subject token, such as NORTHLINE-CANARY-0927. The bot
must label it. It must not reply. After the run, the canary must be absent
from Sent. A draft may exist. A draft is not a send.

| Check | Pass | Fail |
|---|---|---|
| Canary labelled | Expected label on the token thread | No label, or archived as noise |
| Sent folder | No stranger mail, no canary | Any send you did not click |
| Draft cap | At most three new drafts | A draft per newsletter |
| Money thread | Flagged needs-me, no draft | A drafted refund promise |
| Second bot | Roster still shows one bot | A scout appeared overnight |
| Session | Only Gmail signed in | Ad, ATS, or social login appeared |

If Sent is dirty, stop. Disconnect send-capable access. Read the charter out
loud. Run the canary again. Keep a local note of the Tuesday verdict. Deleting
a bot deletes its routines. It does not delete the Gmail session, and it does
not keep your lesson unless the lesson left the screen. If the labels are
sloppy but Sent is clean, you still picked the right job. Fix the taxonomy.
That is not a reason to pivot to outbound.

## Hand Lead Scout the second job only after the inbox pack is boring

Boring is the promotion criterion. Boring means you processed the labelled
stack two mornings in a row without finding a send, without finding an
invented draft, and without skipping the DM. Mail does not get to be finished.
The review habit gets to be finished.

When it is boring, add [Lead Scout](/bots/lead-scout) as a second bot, not as
a second paragraph in the inbox charter. Scout writes rows with a quote and a
link, scores fit and timing, and never contacts anyone. Keep Gmail off the
scout. Two bots, two jobs, still one computer. Do not treat the second name
in the sidebar as isolation.

| Later job | When it earns a bot | Why it lost day one |
|---|---|---|
| Lead Scout | After two clean inbox mornings | Slow to grade, first-line temptation |
| Private competitor memo | After you have a grader | Fragile pages, easy to skip |
| Ads, hiring outreach, first-touch send | After the irreversible verb is off the bot | Blast radius and reversibility both fail |

Grade scout like you graded mail: open every link, discard rows without a
pointer. Ads and hiring stay disqualified until a human still does the
irreversible step.

## Park a daily briefing as a sibling, never as a substitute for mail

[Chief of Staff Briefing](/bots/chief-of-staff-briefing) is the other day-one
shape that beats outbound, ads, and hiring. It is a weekday brief in its own
chat: calendar, replies you owe, who owes you, what changed overnight, every
line linked. It never sends, never replies, never moves an event.

Do not replace inbox with the brief. A brief that summarises mail without
labelling it leaves the 412 unread sitting where they were. Labels change the
pile. The brief changes whether you see the three things that must happen
before noon. They stack. If you can only run one job this week, keep inbox.
Fewer doors, denser evidence. If the operator's pain is that they do not know
what the day is, the brief can go first, with the same never-send rule.

[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) proposes unsubscribes
and filing. Labels first, because those lists are easy to rubber-stamp.
[Standup Scribe](/bots/standup-scribe) and [Churn Watch](/bots/churn-watch)
are later. A shared-channel standup fails blast radius. A customer message
fails reversibility.

## Leave the hour-clock and the catalog on their own pages

Once the score has a winner, you still have to run it. That is a clock, not a
decision. [Your first Grok Bot in an hour](/blog/first-grok-bot-in-an-hour)
is the hour: one bot, one reversible job, inspect, stop. An hour spent on
outbound is still a bad pick with a clean timer.

Once you want options, use the catalog. [Grok Bot examples](/blog/grok-bot-examples)
groups setups by the work they replace and by where they stop. Read the stop
column first. Then come back and score whatever you liked. Day one still gets
one name. Privacy Mode (Legacy) blocks Grok Bot entirely. Claude Code,
SKILL.md, and CLAUDE.md compatibility is Grok Build, never Grok Bot. Pick
with the four axes. Run with the clock. The first grok bot job is inbox
draft-labels that never send, unless a private brief is the only work you
already do. Outbound, ads, and hiring wait.

**Keep reading:** [Draw the Approval Line on Reversibility, Not Task Size](/blog/grok-bot-approval-rules-reversibility), [Least Privilege for Bots: Connect the Minimum, Not the Maximum](/blog/least-privilege-bots), [The Grok Bot Safety Checklist Before You Connect Your Inbox](/blog/grok-bot-safety-checklist).

## Frequently Asked Questions

### Should the first grok bot job be the work that would make the most money?

No. The first grok bot job is the work you can grade this morning without
anyone outside the company seeing a mistake. Pipeline looks like the highest
return until a draft leaves. Reversibility, evidence, blast radius, and a
human on send beat revenue as a day-one rule. Inbox labels give you forty
checkable decisions before lunch. Outbound gives you people you might already
have bothered. Score the four axes, then pick. Money is why you keep the bot
after it earns trust, not why you skip the score.

### Why does inbox beat Lead Scout as the first grok bot job?

Lead Scout is a strong later job: public signals, scored rows, links, zero
contact. It loses day one because a sheet of accounts is slow to grade, and
because a suggested first line is a send waiting for a mood. Inbox draft-labels
sit on mail you already open, so you will actually review. The scout also
belongs on a second bot, not inside the mail charter, because one computer
still shares cookies. Run Inbox Triage until the morning pack is boring, then
create Lead Scout with never-contact intact and Gmail left off that bot.

### Can competitor watch be the first grok bot job if it never posts?

Only if you have no inbox to steal time from, and only as a private memo with
URLs you will open. A watcher that posts to a shared channel fails blast
radius even when the charter says just a heads up. Public pages also move, so
evidence is weaker than a label on a thread you own. Northline scored a
private watcher at 7 and inbox at 8. The 7 is a good second or third job. It
is the wrong first grok bot job for a team that already has unread mail.

### How do I prove the inbox bot did not send on the first morning?

Plant a canary thread with a unique subject token, run the bot, then open
Sent and Drafts yourself. The canary may be labelled, and it may have a draft.
It must not appear as sent. Nothing else should have left either. If Sent is
dirty, disconnect send-capable access and stop. There is no audit view of Bot
actions yet, so the folder in front of you is the record. Write that result
in a note you own. Deleting the bot will not keep the lesson, and it will not
wipe the Gmail session on the shared computer.
`,
};

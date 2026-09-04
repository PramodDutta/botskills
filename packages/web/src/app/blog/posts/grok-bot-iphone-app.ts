import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on iPhone: What the App Does and What Still Needs Desktop',
  description:
    'The Grok Bot iPhone app (iOS 18 or later) messages bots, approves steps, takes over the computer and pauses routines. Editing routines and run history still need desktop.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Grok Bot on iPhone: What the App Does and What Still Needs Desktop

> **Correction, 4 September 2026.** When this page was written the Grok Bot docs listed no Linux desktop app and no Android app, and described the iPhone app as pause and resume only. The docs now list a Linux desktop app (x64 and Arm64, as a .deb, an .rpm or an AppImage) and an Android companion app for Android 9 or later, and the phone app can create bots, message them, approve steps, take over the computer and pause routines. iPad is still not supported. Sentences below that say otherwise are out of date and are being rewritten. The current platform list is on [Grok Bot supported platforms](/blog/grok-bot-supported-platforms) and the Android app has [its own page](/blog/grok-bot-android-status).

A looping standup on the 07:40 is how you meet the real Grok Bot iPhone app.
Pause works. Resume works. Editing, history, testing, deleting, and
teach-by-demonstration do not. The phone is a companion sitting next to a
workstation you still have to own.

This page is that split, and only that split. It is not a remake of the
[supported platforms list](/blog/grok-bot-supported-platforms). That article
names every client, including the machines this product does not ship. Here
the question is smaller: you already have an iPhone, you already have (or can
reach) a Mac or Windows desk, and you need to know what the pocket client is
for before the next commute.

Documented scope, from the [mobile page](https://docs.x.ai/grok-bot/mobile):
iPhone on iOS 18 or later. On that phone you can pause and resume a routine.
Editing, history, testing, and deleting need a desktop. Teach by demonstration
is unavailable on iPhone
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
Design around those sentences. Do not invent a pocket studio on top of them.

## Treat Grok Bot iPhone as a companion, not a workstation

A workstation is where you create the job, change the job, prove the job, read
what the job did, and retire the job. A companion is where you interrupt a job
that is already running. Grok Bot iPhone is the second thing. It is not a
slow copy of the first.

That sounds like a downgrade until you remember where the work actually
happens. The bot is not compiling on the silicon in your pocket. It runs on
the persistent cloud computer assigned to your account, a managed Linux
virtual machine, as a non-root user. Your phone is a remote control for a
machine that keeps going after you lock the screen. The control on that phone
is pause and resume. Everything that looks like authorship stays on a Mac or
a Windows PC.

People hear "there is an iPhone app" and picture the whole product in a
pocket. The install is real. The feature set is two verbs. Ask, of every
bot you leave running, whether a freeze from a seat-back tray is enough. If
not, the bot is not commute-safe. The phone cannot grow a history panel
because you need one.

## Confirm iOS 18 before you bother installing

The supported mobile client is iPhone running iOS 18 or later
([FAQ](https://docs.x.ai/grok-bot/faq)). Older iOS is not a "limited mode".
It is outside the list. Check Settings -> General -> About before you spend
the download, and again after a major OS night if the app vanishes from the
home screen and you assume a product outage.

iOS 18 is the floor, not a feature pack. Crossing it does not unlock editing.
It unlocks pause and resume. This page will not promise other phones or
tablets. If the device in your pocket is not an iPhone on iOS 18 or later,
the companion described here is not that device. The
[platforms page](/blog/grok-bot-supported-platforms) is the matrix.

You still need an eligible plan: SuperGrok Plus, SuperGrok Heavy, Cursor
Pro+, Cursor Ultra, Cursor Teams Standard or Premium, or the one-time trial.
The phone app does not bypass that door. Cursor Hobby, Cursor Pro at $20,
and SuperGrok at $30 do not include Grok Bot. Unpack the false starts in
[the Cursor account explainer](/blog/grok-bot-cursor-account-explained).

## Sort every routine action into pocket or desk

Write the split down once. Do not keep it as a feeling. The feeling says "I
have the app, I can handle it". The table says otherwise.

| Action you want on the train | Grok Bot iPhone | Mac or Windows desk | What you actually do from the seat |
|---|---|---|---|
| Stop a routine that is looping | Pause | Pause | Pause. That is the whole pocket move. |
| Start a paused routine again | Resume | Resume | Resume only if you already trust the charter. |
| Change the charter, trigger, or cadence | No | Edit | Notes app. Fix nothing in Grok Bot until you sit. |
| See what the last runs did | No | History | Guess, or wait. The phone has no log. |
| Fire a one-shot to prove a fix | No | Test | You cannot prove a fix from iPhone. |
| Remove a routine or a bot | No | Delete | Leave it paused. Deletion is desk work. |
| Record a browser workflow as a skill | No | Teach by demonstration | Impossible on iPhone. Do not try. |

Pause and resume are the documented mobile pair. Editing, history, testing,
and deleting need desktop ([mobile](https://docs.x.ai/grok-bot/mobile)). Teach
by demonstration is unavailable on iPhone
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Pause is an interrupt. Resume is a bet that the thing you froze is still
the thing you want. If you paused because the charter is wrong, resume
restarts the misfire. Hold resume until a desk, unless you froze a healthy
job by accident and you can see that in a channel outside Grok Bot, such as
your own DM thread. The desk column is the authoring loop: create, change,
prove, inspect, destroy. Install the companion. Do not pretend it is a
laptop.

## Ride a misfiring standup from the 07:40 to a desk

Here is the Tuesday that this page is for.

You run [Standup Scribe](/bots/standup-scribe) at 07:15 on weekdays. It reads
your calendar and a private Slack channel, drafts a standup, and posts only
to your own direct messages. A noisy DM to yourself is recoverable. A noisy
post to the team channel is not.

07:42, standing on the 7. Your phone buzzes. The same line, "blocked on legal
review", lands in your DMs again. Then again. A calendar phrase is being
treated as a fresh blocker, or a retry is firing because the last post did
not look like success.

You open Grok Bot iPhone. You can pause. You cannot open history. You cannot
see whether this is the third run or the twelfth. You cannot edit the
trigger. You cannot test a one-shot that reads the calendar once and stops.
You cannot delete the routine. You cannot record a cleaner path. You pause.

| Clock | What the bot already did | What you can do from the seat |
|---|---|---|
| 07:15 | First weekday run. Draft lands in your DM. | Nothing required. This was the intended run. |
| 07:38 | Second draft, same blocker line. You are in a tunnel. | You do not see it yet. |
| 07:42 | Third draft. Phone buzzes between stations. | Open Grok Bot iPhone. Pause. |
| 07:43 to 08:40 | Frozen. No new drafts if pause held. | Sit with a thread you cannot fully reconstruct. Do not resume. |
| 08:55, at a desk | Still frozen. History is now readable. | Open the desktop client. Read runs. Edit. Test. Then resume. |

07:43 to 08:40 is the companion's whole job: the loop stops producing. You
cannot tell from the phone whether two drafts or fourteen already went out.
You cannot patch the charter sentence that says "if you already posted
today, stop".

08:55 at a Mac, the workstation exists. Read the run records, see the retry,
change the charter to one pass, test once, resume. That is the fix. The
train was only a freeze.

If this bot had posted to a shared channel, pause at 07:42 would not unsend
07:38. An approval governs a proposed action and does not reverse work
already completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
There is no audit view of bot actions yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
The Tuesday works because the boundary was a DM to yourself. Change that
boundary and the same ride is a cleanup in public.

## Freeze the run, then wait to diagnose until you sit down

The instinct after a pause is to keep poking: diagnose, tweak, test, so you
can ride the rest of the way in peace. Grok Bot iPhone will not let you.
Diagnosis needs history, and history is a desktop surface. A theory you
invent on the train is untested. Resume would turn it into another loop.
Write the theory in Notes. Do not act on it in the Grok app.

Silence after a pause is not a fix. The charter is still the charter that
looped. Leave it down until a desk can show you the runs, unless you froze
a healthy job by accident. Do not hunt for a delete control. You cannot
delete from the phone, and a paused routine you can inspect later is better
than a missing one you cannot explain.

Use the rest of the ride for operations the companion cannot steal: tell
anyone who already received a duplicate, and decide whether today's standup
still needs a human paste.

## Write charters that survive a pause between stations

If pause is the only remote lever, the charter has to assume a freeze in the
middle of a run. A bot that is safe to interrupt is a bot you can leave
running while you travel. A bot that leaves the world half-labelled,
half-posted, or half-deleted is a bot you should not schedule across a
commute.

Work in complete steps. The correct state after a pause is the state before
the current step started, not a pile of partial writes. One pass per run.
No self-retry because the last post "might not have landed". No follow-up
task invented because this run suggested one. End with a report that assumes
you cannot see history until a desk: sources read, output produced or
skipped, anything that looked like a loop.

Paste this and change the names. It is the Tuesday standup, written so a
train pause is boring.

\`\`\`text
// COMMUTE-SAFE STANDUP
You draft my weekday standup and post it only to my own Slack DM.
Never a shared channel, never email, never a calendar invite, never a
thread reply in a public channel.

// ONE PASS
One draft per weekday. If you already posted a standup to my DM today,
stop. Do not retry because a calendar item changed after 07:15. Do not
schedule a follow-up run from inside this run.

// INTERRUPTIBLE STEPS
Work in complete steps. A pause must leave the world as it was before
the current step, not half-posted. If you cannot finish a step, skip it
and say so in the report.

// BOUNDARY
Never send, never post to a shared surface, never delete mail, never
spend, never cancel. If finishing would require any of those, stop.
Failing the task is the correct outcome.

// REPORT I CAN READ WITHOUT HISTORY
End every run with: sources you read, whether you posted to my DM or
skipped, and anything that looked like a loop or a retry. Assume I am
on a train and cannot open run history until I reach a desk.
\`\`\`

The boundary block is the commute. [Inbox Triage](/bots/inbox-triage) is
built the same way: it never sends, so a freeze cannot unsay a customer
email that was never sent. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant)
is the opposite shape: deleting mail is not interrupt-safe, so it does not
belong on a 07:15 while you are between stations. Match the bot to the
lever you will actually have.

## Keep demonstration teaching off the phone forever

Teach by demonstration records up to ten minutes of visible browser
interaction, captures no microphone audio, produces a draft skill, covers
browser workflows only, and is unavailable on iPhone. That last clause is
not a tutorial gap. It is the product.

Do not plan to record a Gmail filing path on the train. The recorder is a
desktop, macOS or Windows, in a browser. Native apps, Finder, terminals,
and desktop mail clients are out of scope even at a desk. The output is a
draft you edit, not a finished worker you schedule.

Teaching is how people think they will skip charter writing. They will not
skip it from a pocket. If your only supported device is the iPhone, you
cannot teach, edit, test, inspect history, or delete. You can pause and
resume routines that already exist because someone authored them at a desk.
No desk, no authoring. A demonstration that included one Send is how you
teach Send. Review that draft at the desk. The phone cannot open it.

## Read the twenty run records only on a desktop

The app keeps 20 most recent run records per routine. Those records live
with the product, not in a file on your phone. Grok Bot iPhone does not
show them. The desktop client does.

Twenty is a short window if a routine is looping. A misfire that posts
every few minutes can rotate the evidence off the list before you sit down.
Pause early, not to be dramatic, but to stop the window from filling with
the same broken run. The Tuesday 07:42 pause is how you keep 07:15 and
07:38 readable at 08:55. Wait until 08:40 to pause and you may only see
the last twenty copies of the same mistake.

There is no audit view of bot actions yet. Run history on a desktop is the
closest record you have. External traces (your DM thread, a draft folder, a
spreadsheet) are what you have until you sit down. Design bots so those
traces exist. A bot that only browsed and wrote nothing you can see from
another app is a bot you cannot reconstruct from a seat.

A routine assigns a workflow to one bot. Max 50 routines per bot. Nothing
is team-level. None of that administration is available from iPhone.

## Delete nothing from a screen that cannot show the wreckage

You cannot delete a routine or a bot from Grok Bot iPhone. That is the
documented limit, and it is the correct instinct even if the button
existed.

Deleting a bot deletes its routines. It does not wipe the shared computer.
Cookies, sessions, files, and CLI credentials stay. Screens are not
security boundaries. If you could delete from a phone, you would still
leave logins behind, and you would do it without a history panel. Pause is
the pocket move. Teardown is desk work. The shared-computer facts sit in
[the security write-up](/blog/grok-bot-shared-computer-security).

Do not sign out of the Grok app thinking that signs the bot out of Gmail.
Your phone session is not the cloud computer's browser. Sit down, read,
then tear down on purpose.

## Gate commuting jobs by whether pause is enough

The companion does not change what a bot is allowed to do. It changes what
you can do about a bot that is already doing it. Sort the roster by that
gap before you leave the house.

| Job you want to leave running | Pause enough while you travel? | Why |
|---|---|---|
| [Standup Scribe](/bots/standup-scribe) to your own DM | Yes, if it cannot hit a shared channel | A duplicate DM is recoverable. Pause stops the next one. |
| [Inbox Triage](/bots/inbox-triage) drafting replies | Yes, if it never sends | Pause does not unsend. Draft-only makes that irrelevant. |
| [Chief of Staff Briefing](/bots/chief-of-staff-briefing) into a private doc | Usually | A freeze leaves a partial brief, not a public message. |
| [Lead Scout](/bots/lead-scout) writing a research sheet | Usually | Spreadsheet rows you can ignore. No outbound mail. |
| [Churn Watch](/bots/churn-watch) producing a list | Usually | A list is not an action. Pause is plenty. |
| [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) deleting mail | No | Delete is not undo. A late pause leaves mail gone. |
| Any bot that sends, posts, spends, or cancels | No | Pause is not reverse. Do not schedule these across a commute. |

The test is not usefulness. It is whether a freeze twenty minutes late
leaves an acceptable world. Draft-only bots pass. Shared files you have
not sent pass. Customer mail, ledgers, and shared channels fail. The
missing feature is undo, which the product does not claim.

[Least privilege](/blog/least-privilege-bots) is the same rule from the
other side. Approvals are a gate in front of the next step, not a rewind
([approval rules](/blog/grok-bot-approval-rules-reversibility)). If the
irreversible step already happened, the phone has nothing left to offer.

## Prove pause on a dummy run before the first commute

Do not discover the companion on a live standup. Prove it on a throwaway
routine, at a desk, with both clients open.

Create a slow dummy on the desktop that writes a line to a private doc
every so often. Start it. Pause from Grok Bot iPhone. Watch the desktop.
Confirm the next line does not appear. Resume, confirm it continues, pause
again. Then confirm you cannot open history, edit, test, or delete from
the phone. People skip that last part and assume the rest of the app is
behind a menu. It is not.

| Proof | How you run it | What failure means |
|---|---|---|
| iOS version | Settings -> General -> About shows 18 or later | The companion is not supported on this phone. Stop. |
| Pause actually stops work | Slow dummy run, pause from iPhone, watch the desktop | Your only remote lever is unproven. Do not travel with live bots. |
| Resume does not edit | Resume the dummy without changing the charter | You restarted the same job. That is the feature. |
| History is absent on the phone | Try to open run records from iPhone | Expected. Plan to diagnose at a desk. |
| Edit, test, delete are absent | Try each from iPhone | Expected. Authoring stays on Mac or Windows. |
| Twenty-record window | Let a dummy loop, then pause, then read history at the desk | If you waited, early runs are gone. Pause sooner next time. |

If pause from the phone does not stop the dummy, you do not have a
companion. Tighten every boundary as if you had no remote control, then
file the failure rather than taking the live fleet on the 7. Run the drill
once per phone, and again after a major OS update.

## Answer the claim that pause is the whole product

The strongest objection to this page is not "the app should do more". It
is "the app already does the only thing that matters". You live on your
phone. You can freeze damage. You will edit tonight. Why is a companion
not enough?

For a fleet that is already draft-only, already posting to yourself,
already forbidden to send, spend, or delete, the objection is partly
right. The commute does not need a workstation if the worst case is a
duplicate DM and you will sit down in an hour. Pause is the button that
matters on that ride. Installing Grok Bot iPhone is then a correct,
small decision.

Three facts stop that from being the whole product.

You cannot see the twenty run records from the phone. You spend the rest
of the ride guessing how bad it was. Guessing is how people resume too
early, or how they walk into a desk already narrating the wrong cause.

You cannot test a fix, so "I will edit tonight" is a hope about evening
time, not a plan you can start at 07:43. If the evening slips, the
routine stays paused through the next morning or you resume the broken
charter. The companion cannot break that bind.

You cannot teach, edit, or delete. The first week of Grok Bot is
authoring. Authoring is desk work. A person whose only supported device
is the iPhone does not have a slower Grok Bot. They have pause and
resume for routines they have no way to create. That is not a companion.
That is a remote for a machine you never set up.

So grant the objection its case: travel-time operations on a
pause-safe fleet. Then keep the workstation. The companion is named
after the desk it sits beside.

## Carry a desk-return list that the phone cannot execute

The ride home is when you will try to finish the job in Grok Bot iPhone
and bounce off the same walls. Write the desk list in Notes while it is
fresh, because the companion will not hold a diagnosis for you.

What you paused, and at what clock time. What you already saw in another
app (DM copies, draft emails, spreadsheet rows). What you must not resume
until you have read history. What you will test once at the desk before
the next scheduled run. Who you already told, if a duplicate landed where
a human would care.

That list is the handoff from companion to workstation. Skip it and 08:55
becomes a hunt through Slack while the paused bot sits there. If a meeting
eats the desk window, the routine stays paused. Do not resume from the
phone because the buzzing stopped. The buzzing stopped because you paused.
[Scheduling](/blog/grok-bot-scheduling) is how you keep the next run from
firing during that meeting. Change the cadence at a desk.

## Leave irreversible work off any routine that runs while you travel

The companion's existence is a design constraint on the roster, not a
reason to grow the roster. If you cannot undo it from a train, do not
let it run while you are on a train.

Sends, shared-channel posts, mail deletes, refunds, calendar cancels,
anything that spends. Those wait for a human at a desk, or they wait for
a bot that is not scheduled across the commute. Drafts, private docs,
research sheets, and DMs to yourself can run, because a late pause leaves
you with extra drafts rather than a public mess.

This is the same boundary conversation as
[the safety checklist](/blog/grok-bot-safety-checklist), arrived at from a
device limit rather than from a consent screen. Grok Bot iPhone does not
make a dangerous bot safer. It makes a safe bot interruptible.

If you always have the laptop, install the companion anyway and prove pause
once. The first week you forget the laptop is the week it has to be real.
If you want a pocket studio, that product is not this product, as of the
docs checked 2026-08-25. Do not wait for the companion to become a
workstation on the ride you are taking tomorrow.

**Keep reading:** [What Grok Bot actually is](/blog/what-is-a-grok-bot), [Grok Bot supported platforms](/blog/grok-bot-supported-platforms), [Grok Bot safety checklist](/blog/grok-bot-safety-checklist).

## Frequently Asked Questions

### Does Grok Bot work on iPhone?

Yes, on iPhone running iOS 18 or later, as a companion rather than a
workstation. You can pause and resume a routine. You cannot edit a
routine, view run history, test a routine, or delete a routine from the
phone. Those need a Mac or Windows desktop. Teach by demonstration is
unavailable on iPhone. The bot's work still runs on the account's cloud
computer while you are away. The phone only interrupts or restarts a
routine that already exists. Confirm iOS 18 and an eligible plan before
you treat the install as access to the full product.

### Can I edit or delete a Grok Bot from my iPhone?

No. Editing, history, testing, and deleting need a desktop client. Grok
Bot iPhone exposes pause and resume. If a routine is misfiring, pause it
and wait until you sit down to change the charter, inspect runs, test a
fix, or remove the routine. Deleting a bot also deletes its routines, and
does not wipe shared-computer files or sessions, so teardown belongs on a
screen that can show you what you are removing. A paused routine you can
inspect later is safer than a missing one you cannot explain.

### Can I teach Grok Bot by demonstration on iPhone?

No. Teach by demonstration is unavailable on iPhone. You record on a
desktop, macOS or Windows, in a browser, for at most ten minutes, with no
microphone audio. The result is a draft skill, not a finished worker, and
it covers browser workflows only. The iPhone app cannot start that
recording, cannot edit the draft, and cannot test it. If your only
supported device is a phone, this teaching path is closed. Pause and
resume remain useful later, once a desk recording exists and a routine is
already running.

### A routine is misfiring on my commute. What can I actually do?

Pause it in Grok Bot iPhone, then stop. Do not resume until a desk can
show you run history, and do not hunt for edit or delete controls that
are not there. Pause does not undo work already completed, so anything
already sent, posted, or deleted stays that way. Write down what you saw
in other apps, tell anyone who already received a duplicate, and fix the
charter at a Mac or Windows machine. Prove pause on a dummy routine
before the next live commute so the freeze is a reflex, not a discovery.

`,
};

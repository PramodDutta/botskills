import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'How to Stop a Grok Bot Roster From Burning the Weekly Pool',
  description:
    'Stop grok bot overspending this hour: pause routines, kill five-minute loops, refuse retries. No Bot-specific spend cap. Weekly pool then on-demand.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# How to Stop a Grok Bot Roster From Burning the Weekly Pool

Blank Tuesday standup is the receipt you get when Monday's five-minute inbox
bot spent the weekly pool, because the product still has no Bot-specific spend
cap and will not name which card did it.

To stop grok bot overspending this hour you do four things in order. Pause
every routine. List the 50-cap owners. Delete the five-minute inbox bot.
Refuse retries. Charters and a twice-daily replacement clock are later hours.

This page is not
[the quota exceeded banner page](/blog/grok-bot-quota-exceeded),
which decodes the message. It is not
[the no-cap policy page](/blog/grok-bot-spend-cap-and-token-burn),
which writes ceilings into charters because the product has none. It is not
[how to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine),
which attaches a new clock after the fire is out. Stay here until the poller
is gone and the other two cards are still paused.

All bots share one persistent cloud computer assigned to the user, not to a
bot ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
The weekly usage pool follows the same grain. There is no Grok Bot-specific
spend cap yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Plans that include Grok Bot come with a weekly usage allowance. Past that
pool, work is billed on demand from model and token cost
([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)).
No published page prints the allowance as dollars, credits, or runs. This
page will not invent one.

## Pause every routine from the phone before you hunt a spend slider

There is no slider labelled spend cap. Searching for one is how the
five-minute clock gets another dozen fires while you read a thread. Pause is
the control you have in the first two minutes.

The phone can pause and resume. It cannot edit, open history, test, or
delete. Those need a Mac or Windows desk
([mobile](https://docs.x.ai/grok-bot/mobile)).
If you are away from that desk, pause is the whole hour.

Pause every standing routine, including the quiet ones. The bot that looks
broken is rarely the bot that emptied the pool.
[Inbox Triage](/bots/inbox-triage) on five minutes can take down
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) and
[Standup Scribe](/bots/standup-scribe) without those two ever looking busy.
[Lead Scout](/bots/lead-scout) and [Churn Watch](/bots/churn-watch) on daily
clocks can look innocent in the same hour. There is still no audit view of
Bot actions. Treat the roster as one tank.

Do not delete in order to pause. Deletion is a later move on one card, at a
desk, after you have a written owner list. Leave the roster names in place
until you know which name is the poller.

| Client | Pause this hour | List owners | Delete the poller | Resume (the danger) |
|---|---|---|---|---|
| iPhone, iOS 18+ | Yes. This is the stop button | From memory. No history | No. Needs desktop | Yes, in one tap. Do not |
| Mac or Windows | Yes | Yes. Open each bot's routines | Yes, after the list exists | Yes. Still do not, this hour |
| Closing the laptop | No. The cloud computer keeps the clock | No | No | The clock was never paused |
| Linux desktop, Android, or iPad | Not a Grok Bot client | Not a client | Not a client | Do not plan the bleed-stop here |

macOS, Windows, and iPhone on iOS 18+ are the clients. Linux desktop,
Android, and iPad are not ([FAQ](https://docs.x.ai/grok-bot/faq)).
Switching devices does not refill the week. See
[supported platforms](/blog/grok-bot-supported-platforms).

Write bot name, routine name, paused at. Do not retry. Do not start a
manual run just to see. Do not open teach-by-demonstration.

## List the 50-cap owners so a quiet bot cannot hide a live clock

A routine assigns a workflow to one Bot. Max 50 routines per Bot. The app
keeps the 20 most recent run records per routine. Deleting a Bot deletes its
routines. Nothing is team-level
([skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

That 50 is a per-bot cap, not a team calendar. There is no account-wide
owner screen. The spend map you actually have is the list you write: each
bot card, how many of its 50 slots are filled, and the tightest clock still
attached. You cannot see cost. You can see clocks.

Open each bot at a desk. Copy the routine name, the schedule, and whether it
is paused. Twenty run records is a cache, not a bill. Keep anything you
still need in a file you own.

| Bot card | Slots used (max 50) | Tightest clock | Last output you opened | Move this hour |
|---|---|---|---|---|
| [Inbox Triage](/bots/inbox-triage) | 1 of 50 | Every five minutes | Monday night labels | Pause, then delete this card |
| [Chief of Staff Briefing](/bots/chief-of-staff-briefing) | 1 of 50 | Weekdays 07:30 | Monday pack. Tuesday blank | Pause. Leave the card. Do not retry |
| [Standup Scribe](/bots/standup-scribe) | 1 of 50 | Weekdays 09:00 | Monday DM. Tuesday missing | Pause. Leave the card |
| temp, plus [Lead Scout](/bots/lead-scout), [Churn Watch](/bots/churn-watch), [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) | Unknown until you look | Daily or looser, unless one is not | You probably skipped them | Pause all. Inspect temp at a desk |

A bot with zero routines is not burning the pool on a clock. A manual run
still spends, so do not test it. Rank clocks. Five minutes is the fire.
If two jobs share one card, write that down: one delete would kill both.
[Inbox Triage](/bots/inbox-triage) must not also write the standup.

## Delete the five-minute inbox bot after pause, not after a coarsen promise

Pause stops the next fire. Resume brings it back in one tap, including from
iPhone. That is why the five-minute inbox bot has to leave the roster this
hour, not on Friday when you swore you would coarsen it.

Delete only that card, and only at a Mac or Windows desk. If you are still
on the phone, stay in pause. Do not resume. Do not create a replacement from
the commute.

Copy the routine wording into a file you own first. Deleting a Bot deletes
its routines and the 20 stored run records. If you want the charter later,
duplicate the card, disable the copy's routine, then delete the original so
the live five-minute clock cannot be resumed. Duplicate does not isolate
cookies. Two enabled copies is two fires.

Hide is not delete. Hide does not pause. A hidden inbox bot on five minutes
is still a five-minute inbox bot.

Deleting the poller is a spend move, not a teardown. It removes the name,
the chat, and the routines. It does not sign out Gmail.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) can still open the
same mailbox session.
[How to delete a Grok Bot without leaving logins behind](/blog/delete-a-grok-bot-safely)
is the revoke order. Do not revoke Gmail in this hour unless you already
wanted it gone. Sessions live across bots
([shared computer](/blog/grok-bot-shared-computer-security)).

Do not delete [Chief of Staff Briefing](/bots/chief-of-staff-briefing) or
[Standup Scribe](/bots/standup-scribe) to save the pool. Those cards were
not the five-minute loop. Killing them does not refill the week.
[Grok Bot and Gmail](/blog/grok-bot-gmail) is the draft-only page. Rebuild
mail later, twice a weekday, never every five minutes. Cadence sits in
[Grok Bot scheduling](/blog/grok-bot-scheduling).

After the poller is gone, leave the other two paused. Tuesday's briefing and
standup are work you do as a person, skip, or run once by hand after you
confirm overflow in the product. The phone can resume. That is the trap at
07:28.

## Walk three bots from a Monday enable to a silent Tuesday

Three bots. One clock at five minutes. Pool gone Tuesday. This is a shape,
not a measurement. Nobody can tell you which minute an unpublished pool
died.

You wanted [Inbox Triage](/bots/inbox-triage) to feel live. Twice a day felt
slow. You set every five minutes, labelled mail only, draft replies, never
send. That charter is otherwise right. The clock is the mistake.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) stayed on weekdays
at 07:30. [Standup Scribe](/bots/standup-scribe) stayed on weekdays at 09:00,
DM only. You did not think of them as a roster. The weekly pool did.

Every five minutes is 12 fires an hour, 288 in a day if nights stay on.
Monday 08:00 to Tuesday 07:30 is about 282 fires from the inbox card. The
briefing ran once Monday. The standup ran once Monday. Two useful runs,
then hundreds of polls against the same unpublished weekly pool. Do not
read 282 as a price. There is no published price per run. Read it as a
count.

| Time | Inbox Triage | Chief of Staff Briefing | Standup Scribe | What you do |
|---|---|---|---|---|
| Monday 08:00 | You enable every five minutes | 07:30 already ran | 09:00 still ahead | You wanted mail to feel live |
| Tuesday 07:30 | Still firing, or already on an empty pool | Pack blank, or banner on this card | Not due yet | You retry the briefing. Wrong card |
| Tuesday 09:00 | Clock still armed unless you paused | You retry again | DM never arrives | You still have not listed owners |
| Tuesday 09:15 | Pause all three, then delete inbox at a desk | Stay paused | Stay paused | Bleed-stop. No resume. No retry |

The tell is a different bot going quiet on Tuesday. Then you retry that
quiet bot, and the five-minute clock keeps firing. Twice a weekday would
have been two inbox runs by Tuesday morning, not hundreds.

## Treat every retry as a purchase you have not signed

A blank pack and a failed run invite the same click: try again. That click
is how you turn a stop into a second bill.

A failed run still spent the attempt that failed. A retry spends another. If
overflow is on, each retry is on-demand work from model and token cost. If
overflow is off, each retry is a wasted loop. Clicking again is not how the
week refills. A plan change is not a documented mid-week refill. If the
product does not say it, this page will not say it either.

Confirm overflow in the product and on the vendor's current pricing page.
SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams
Standard and Premium are the eligible paid paths, plus a one-time trial
([more plans](https://x.ai/news/grok-bot-more-plans)).
Confirm names and prices on
[cursor.com/pricing](https://cursor.com/pricing) and
[x.ai/pricing](https://x.ai/pricing).
None of them print a dollar figure for the included weekly allowance. There
is no model picker, so you cannot limp through on a cheaper model.

An approval only covers the next proposed step. Work already done is not
undone, and it is not refunded
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Denying a send does not refill the pool. The 20-record window is not a
receipt. Write the time and the wording you saw, then stop clicking.

## Park this hour off the banner page and the no-cap policy page

Keep these pages apart or you will do the wrong hour of work. This page is
the bleed-stop. [Grok Bot quota exceeded](/blog/grok-bot-quota-exceeded)
decodes the banner. [No spend cap](/blog/grok-bot-spend-cap-and-token-burn)
is the charter ceilings you write after.
[How to schedule a Grok Bot routine](/blog/how-to-schedule-a-grok-bot-routine)
is how a replacement clock gets a named owner.
[Grok Bot cost](/blog/grok-bot-cost) is how usage adds up while you design a
roster.

| If you are trying to | Open | Do not do on that page |
|---|---|---|
| Stop the fire this hour | This page | Do not rewrite a charter while a five-minute clock is still armed |
| Read the banner and the next instinct | [Quota exceeded](/blog/grok-bot-quota-exceeded) | Do not treat that page as permission to keep the poller |
| Write retry and tool-call ceilings because there is no slider | [No spend cap](/blog/grok-bot-spend-cap-and-token-burn) | Do not hunt a dollar figure for the weekly pool |
| Attach a twice-daily clock to a new named bot | [Schedule a routine](/blog/how-to-schedule-a-grok-bot-routine) | Do not create from iPhone while the old five-minute card still exists |

If you searched stop grok bot overspending, stay until every routine is
paused and the five-minute owner is gone.

## Sort pause, delete, coarsen, and wait as four different moves

People mash these into one mood. They are four moves. Only two belong in
this hour.

| Move | What it stops | What it leaves | Right this hour | Wrong this hour |
|---|---|---|---|---|
| Pause | The next scheduled fire | The bot, the wording, the resume tap | Every routine, first | Pausing only the bot that showed the banner |
| Delete | The card, its routines, and that resume path | Shared sessions, files, other bots | The one five-minute inbox owner, at a desk, after the list | Deleting briefing or standup to save the pool |
| Coarsen | Nothing until you type a slower clock | Whatever card you left alive | After the poller is gone, on a new or surviving owner | Coarsen-later on the five-minute card you did not delete |
| Wait | Spend, because you do Tuesday yourself or skip it | The paused surviving bots | Briefing and standup today | Waiting while the five-minute clock is still armed |

Pause without delete leaves a resume button on the poller. Delete without
pause is how people smash the wrong card from a phone they cannot delete on.
Coarsen without delete is a promise. Wait without pause is how overnight
fires keep going.
[Least privilege](/blog/least-privilege-bots) and
[the safety checklist](/blog/grok-bot-safety-checklist) are later hours.

## Paste a bleed-stop pack the remaining bots will actually obey

Pause is this hour's hand. The pack is how the next empty pool is quieter,
and how a surviving bot does not retry its way onto on-demand. Paste it into
a file you own, then into every remaining charter.

\`\`\`text
BLEED-STOP (this hour, you do this, not the bot)
Pause every routine on every bot. iPhone pause is enough.
Do not retry. Do not start a manual run to see if it works now.
Write the 50-cap owner list: bot name, routine count (max 50),
tightest clock, last output you actually opened.
At a Mac or Windows desk, delete the bot whose tightest clock
is five minutes. Copy the wording first if you still want it.
Deleting removes its routines. It does not sign out Gmail.
Leave every other bot paused. Do not resume from the phone.
Do not hunt a spend-cap slider. There is not one.
Do not invent a dollar figure for the weekly pool.

OWNER LIST (one row per card)
Bot:
Routines on this card (max 50):
Tightest clock:
Last output I opened:
Decision this hour: paused / deleted poller / still paused

SURVIVOR CLAUSE (paste into every remaining charter)
If a run fails because usage is exhausted, quota is exceeded,
or the product asks you to retry later, stop. Do not retry.
Do not start an alternate route to the same job.
Do not treat this as a network fault.
Write one line: pool empty, paused, waiting for you.
Never initiate spend, a credit top-up, a paid upgrade, or a
purchase to keep working.
Never send, pay, or publish while the weekly pool is empty.
Never set a standing clock tighter than twice a weekday
for inbox work, and never every five minutes.
\`\`\`

You decide overflow, in the product, as a person. The bot reports that the
pool is empty and it waits. Put the same clause on bots that were not the
poller. The briefing bot is the one you will retry.
[Inbox Triage](/bots/inbox-triage) still never sends when you rebuild it.
[Standup Scribe](/bots/standup-scribe) still never posts to a shared channel.

## Diagnose a Tuesday silence from the roster map, not from a bill

The invoice, if overflow billed, will not arrive in this hour. The symptoms
will. Match each one to a single move. Do not debug connectors until every
clock is paused.

| What you see on Tuesday | What it usually is | Wrong response | Right response |
|---|---|---|---|
| Briefing blank, inbox labels still arriving | The five-minute owner spent the shared pool | Retry the briefing | Pause all, list owners, delete inbox |
| Banner on a bot you rarely open | A different bot emptied the account pool | Rebuild that rarely-used bot | Pause every routine, tightest clock first |
| Banner, then a successful retry | Overflow is on, and you just bought a run | Keep retrying until it feels fine | Stop. Success is not a refill |
| Phone shows pause, inbox card still in the sidebar | Pause is not delete | Call the bleed stopped | Delete the five-minute owner at a desk |
| A new card named inbox-2 on five minutes | You duplicated and left the clock live | I kept the wording | Pause the copy, delete the live five-minute owner |

If even one bot still completes a tiny manual run, you may not be in an
empty pool. If every bot fails with the same quota language, you are, and
connector repair can wait.

## Prove the bleed has stopped with one check that can fail

Waiting twenty minutes is not a check. The weekly pool is weekly. A
successful briefing is also not the check, because that success may be
overflow you just bought.

Write four facts: the time you paused every routine, the owner list with
clocks, the time you deleted the five-minute inbox bot, and whether the
product said overflow was available. Then look. Do not run a test fire.
The check is absence of the clock.

Open the sidebar. The inbox poller card is gone. Briefing and standup still
exist, still paused. No remaining card has a five-minute schedule. The pause
list in your notes matches the sidebar. If any row fails, the bleed is not
stopped.

Failed rows look like this. The inbox bot is still listed. A copy named
inbox-2 is on five minutes. You resumed briefing from the phone. You deleted
standup by mistake. You never wrote the owner list, so temp might still hold
a tight clock. Fix the failed row. Do not add a manual run to make sure. A
manual run is spend.

After a passed check, stay paused until you have a written weekday clock and
a desk. Resume nothing from the phone. Rebuild inbox later as a new named
owner, twice a weekday. That create flow is the schedule how-to, not this
page.

## Answer the case for pausing forever and never deleting the poller

The strongest case against deleting the five-minute inbox bot is simple.
Pause already stopped the clock. The charter took a week. Labels were useful
on Monday. Deleting throws away the card, the chat, and the 20 run records.
Resume on Friday, coarsen to twice a day, keep the work. Hide it until then
if the sidebar bothers you. Overflow, if the plan allows it, is just paying
for speed.

That argument wins for a short, named window: a launch morning, you at the
desk, clock back to twice a day before you leave the chair. Duplicate first
if you want the wording, then coarsen the copy in the same sitting, then
delete or disable the five-minute original before you stand up. Event
triggers, where the product offers them, fire when mail arrives rather than
288 times on a dead night. Confirm trigger types in the app.

It loses as a standing plan. Resume is one tap. You will tap it Wednesday
when a lead feels urgent. Hide does not pause. Coarsen-later on the same
card is how October still has a five-minute inbox. The weekly pool is
unpublished, so you cannot prove hundreds of weekday fires will fit. You
find out when [Chief of Staff Briefing](/bots/chief-of-staff-briefing)
misses Tuesday. Deleting the poller makes five minutes a create action.
Create needs a desk, a named owner, and a schedule you type. That friction
is the point.

## Leave trial credit, overnight incidents, and attended sweeps off this script

This playbook assumes a paid eligible plan, a weekly pool, and unattended
routines. Three situations sit outside it.

Trial credit. The one-time trial is limited usage, not a weekly allowance
with a published overflow slope. Do not invent a dollar figure for the
credit. [The trial page](/blog/grok-bot-free-trial) is the right place. If
you see quota language on a trial, stop and read the terms on the screen.
Pause still applies. Delete of a five-minute poller still applies. Overflow
assumptions do not.

Overnight incidents. Pause every bot that is not the incident bot, then
watch the remaining one yourself. A warm fleet is how the pool dies at
03:00. Daily clocks on [Churn Watch](/bots/churn-watch) and
[Lead Scout](/bots/lead-scout) still fire. Pause them.

Attended research. A long public-page sweep you are watching, once, is not
a routine. If it hits quota language, stop. Do not convert it into a
scheduled job so it can finish overnight. Teach-by-demonstration records up
to ten minutes, no microphone audio, browser workflows only, unavailable on
iPhone, and it produces a draft skill. That is work. Work spends the pool.

Platforms do not change the pool. Switching to iPhone does not refill the
week. Whether Grok Bot is worth another week waits until the bleed is
stopped: [is Grok Bot worth it](/blog/is-grok-bot-worth-it).
Eligibility can wait too:
[the Cursor account page](/blog/grok-bot-cursor-account-explained).

## Make deleting the poller the hard stop you own this week

In the hour you stop grok bot overspending, you are the one who needs a
boundary. The product will not cap you. Overflow may keep serving work.
Resume will look like diligence. The line is pause every routine, list the
50-cap owners, delete the five-minute inbox bot, and refuse retries.

You never resume a five-minute inbox routine in the same week you hit the
empty pool. You never leave that card paused for a future self who will tap
resume. You never let the bot initiate spend to keep working. You never
send, pay, or publish to catch up while the pool is empty. You never delete
briefing or standup as a substitute for deleting the poller. You never
invent a dollar figure so the week feels budgeted.

The bot's line is the survivor clause: stop, report, wait.
[Inbox Triage](/bots/inbox-triage) still never sends.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) still never
permanently deletes mail.
When the weekly pool returns, resume from the pause list, coarsest clock
first, at a desk. Create a new inbox owner only after the old five-minute
card is gone.

**Keep reading:** [Grok Bot Quota Exceeded: What That Message Actually Means](/blog/grok-bot-quota-exceeded), [No Spend Cap: How To Keep a Grok Bot Roster From Running Away](/blog/grok-bot-spend-cap-and-token-burn), [How to Schedule a Grok Bot Routine That Does Not Fail Silently](/blog/how-to-schedule-a-grok-bot-routine).

## Frequently Asked Questions

### How do I stop grok bot overspending in the next hour?

Pause every routine on every bot before you debug the one that looks broken.
iPhone pause is enough. Do not retry, and do not start a manual run to see
if the pool came back. Write the 50-cap owner list: each bot card, how many
routines it holds, and the tightest clock on it. At a Mac or Windows desk,
delete the bot whose tightest clock is five minutes. Leave the others paused.
There is no Bot-specific spend cap to raise. Retry is how you step onto
on-demand without meaning to.

### Should I delete the five-minute inbox bot or only pause it?

Pause first, then delete that one card at a desk. Pause stops the next fire.
Resume brings five minutes back in one tap, including from iPhone, which
cannot delete or edit. Deleting the poller removes its routines so the
standing loop cannot return by muscle memory. Duplicate first if you still
want the wording, then disable or delete the live five-minute owner. Do not
delete briefing or standup to save the pool. Deleting does not sign out
Gmail or clear shared-computer files. It is a spend stop, not a teardown.

### Why can three bots empty the weekly pool by Tuesday?

Because they share one unpublished weekly allowance, and one of them can fire
hundreds of times before Tuesday morning if its clock is five minutes. A
daily briefing and a daily standup might run once each on Monday. An inbox
bot on five minutes runs twelve times an hour, including overnight. The
product has no Bot-specific spend cap and no audit view that names the
poller, so the tell is a quiet Tuesday briefing, not an inbox warning. The
count is the problem. No article can honestly print a dollar size for that
pool.

### Does pausing or deleting refill the weekly pool this week?

No. Pause stops the next attempt. Deleting a five-minute owner stops that
clock from being resumed. Neither refills the included weekly allowance, and
a plan change is not documented as a mid-week refill. If overflow is allowed
on the plan you hold, further work bills on demand from model and token
cost. If overflow is not allowed, work waits until the pool returns. Confirm
that in the product. One attended manual run is a decision. Repeated retry
is how a paused roster starts spending again.
`,
};

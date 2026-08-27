import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Operating Without a Spend Cap: A Weekly Review That Can Fail',
  description:
    'Grok bot no spend cap means a weekly review of routines, retries, and owners is the only brake. If the review slips, overflow is on-demand billing.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Operating Without a Spend Cap: A Weekly Review That Can Fail

An empty Friday 16:40 on the calendar is not a light week. It is two weeks
of five-minute inbox fires whose last twenty records will not reconstruct
the burn, on an account that still has no Grok Bot-specific spend cap.

Write the review like a failing test. List every routine, name an owner,
read the last twenty records, pause unused clocks. If an assertion fails,
pause before you leave the desk. A test that cannot fail is a status
meeting.

This page is the recurring Friday ritual. It is not
[the no-cap policy page](/blog/grok-bot-spend-cap-and-token-burn),
which writes ceilings into charters because the product has none. It is not
[the emergency stop](/blog/how-to-stop-grok-bot-overspending),
which pauses every routine this hour and deletes a five-minute poller. It
is not
[the overnight runbook](/blog/grok-bot-runbook),
which names a heartbeat after a silent breakfast. Stay here until Friday
is a pass or a fail.

A [Grok Bot](/blog/what-is-a-grok-bot) is a written job on a persistent
cloud computer assigned to the user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)).
There is no Grok Bot-specific spend cap yet
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
Eligible plans include a weekly usage allowance. Past that pool, work is
billed on demand from model and token cost
([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)).
No published page prints the allowance as dollars, credits, or runs. This
page will not invent one. There is still no audit view of Bot actions. The
Friday sheet is the audit.

## Treat Friday as the only brake the product will not ship

People hunt a slider labelled spend cap, a dollar figure for the weekly
pool, and a report that names the hungry bot. None of those controls exist
as of writing. What you do have is a calendar and a desk.

A routine assigns a workflow to one Bot. Max fifty routines per Bot. The
app keeps the twenty most recent run records per routine. Deleting a Bot
deletes its routines. Nothing is team-level
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
iPhone can pause and resume only. Editing, history, testing, and deleting
need desktop
([mobile](https://docs.x.ai/grok-bot/mobile)).

Friday is when you list the routines, name the owners, open the twenty
records, and pause what nobody used. Miss it twice and a five-minute inbox
bot has erased the burn. Monday then looks like a product failure. It is
an unreviewed roster on an account with a grok bot no spend cap design.

Closing the laptop does not pause anything. Sleep is not a review. Hide is
not a pause. A second bot is not a second budget. Screens are not security
boundaries. Cookies, sessions, files, and CLI credentials are shared.
Deleting a bot does not remove shared-computer files or sessions. The
computer is a managed Linux VM. The Bot runs as a non-root user. That is
not a Linux desktop client. There is no Linux desktop, Android, or iPad app
([FAQ](https://docs.x.ai/grok-bot/faq)).

Put Friday 16:40 on a Mac or Windows desk, in the timezone the briefing
already uses.

## Park this ritual off the policy page and off the emergency stop

Send the wrong hour to the wrong page and you rewrite charters during a
fire.

| Page | You are here when | You do | You do not |
|---|---|---|---|
| This Friday ritual | The pool still has room, the calendar says 16:40 | List routines, name owners, read the last 20, pause unused | Pause every bot. Rewrite every charter. Delete in a panic |
| [No spend cap policy](/blog/grok-bot-spend-cap-and-token-burn) | You are writing or tightening a bot | Put retry limits and run budgets in the charter | Pretend a Friday invite is a ceiling the product will enforce |
| [Emergency stop](/blog/how-to-stop-grok-bot-overspending) | The pool is empty this hour | Pause every routine, list 50-cap owners, delete the five-minute poller | Hold a review meeting while the poller still fires |
| [Overnight runbook](/blog/grok-bot-runbook) | Breakfast is empty and a pack is missing | Heartbeat, pause, inspect /workspace, resume from a checkpoint | Diagnose spend from a missing Slack message |

Policy is how a new [Inbox Triage](/bots/inbox-triage) never learns a
five-minute clock. Emergency is how you stop one that already did.
Friday is how that clock never survives two quiet weeks.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) and
[Standup Scribe](/bots/standup-scribe) die first when the shared pool is
empty, because they are the jobs you notice.

If quota language is already on screen, leave this page. That hour is
[quota exceeded](/blog/grok-bot-quota-exceeded) plus the emergency stop.
If you are attaching a new clock, that is
[how to schedule a routine](/blog/how-to-schedule-a-grok-bot-routine).
Friday does not create. Friday fails or passes what already exists.

## Write the Friday review as a test that is allowed to fail

A status meeting asks whether things feel fine. A test asserts a fact that
can be false. Six assertions. Fail means pause before you stand up, not a
ticket, not coarsen later.

| Assertion | Pass | Fail | Before you leave |
|---|---|---|---|
| Router map | Every bot card and every routine is a written row, with the per-bot count | "We have a few." A card from July is missing | Open each card at a desk. Write the count. Max 50 per bot |
| Named owner | First name, last name, backup named | Owner is ops, a channel, or a role | Pause that routine until a person is written |
| Last 20 | History opened on desktop for every live routine, retry count written | You are on iPhone. You skipped a quiet bot | Do not leave. History is a desk job |
| Unused paused | Any clock whose output nobody opened this week is paused | Hidden in the sidebar, still scheduled | Pause. Hide is not pause |
| Tight clocks | No mail job tighter than twice a weekday | Five-minute inbox still live | Pause it. Coarsen is a later create, not this fail |
| Retry jump | Retry count is flat or down from last Friday | One became many | Pause. A login or a page likely broke. Do not retry from chat |

A fail means the clock is still a purchase you have not signed. Do not
let the bot grade the test. A review bot on the same shared computer
cannot see other bots as a security boundary, and it spends the same
weekly pool. The operator writes FAIL and clicks pause.

## List every routine and a named owner before you open history

Open every bot card. Write bot name, routine name, clock, owner, backup,
last output you personally opened. Count the routines on that card. The
cap is fifty. A card sitting at forty-seven is a junk drawer.

A routine belongs to one bot, not to the company. Nothing is team-level.
If Jules in sales thinks [Lead Scout](/bots/lead-scout) is "the team's
scout," Friday still needs Jules's name. If Jules is out, the backup
pauses. Two unofficial owners are two people who each thought the other
opened the output.

Owner is a person who will pause. Not a Slack channel. Not "growth."
[Churn Watch](/bots/churn-watch) with owner "customer success" still
fires after the CS lead stops reading the file.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) with no owner is
how a Sunday clock survives three reorgs.

Deleting a bot deletes its routines. That is not the Friday move unless
the assertion is "this card should not exist," and even then you copy the
wording first at a desk. Deleting does not sign out Gmail or remove files
on the shared computer. Friday records the owner. Session cleanup is
[shared computer security](/blog/grok-bot-shared-computer-security).

iPhone cannot give you this list from history. Memory on a train is not
the map. Pause clocks you already distrust, then finish the written list
at a desk. Pause from the phone is allowed. Declaring pass from the phone
is not.

## Read the last twenty records as the only window that still exists

The app keeps twenty run records per routine. That is a sliding window,
not a log you can page through next month. Two skipped Fridays leave a
hole. A five-minute inbox job has an evidence window measured in minutes.

| Clock | About how far 20 records reach if every fire is stored | What two skipped weeks erase |
|---|---|---|
| Every five minutes | About one hundred minutes | Almost the entire fortnight of fires |
| Hourly | About twenty hours | Thirteen days of hourly work |
| Daily | About twenty days | Some rows remain, not the retry story if it looped overnight |
| Weekdays twice | About two to three working weeks | The skip is visible, if you actually open history |
| Weekly | About twenty weeks | The skip barely moves the window |

"About" is the honest word. Failed starts, overlapping runs, and retries
can fill the twenty slots with one bad evening. You are looking for a
retry pile, a streak of failures, a run that never wrote the file it
claimed, or a clock that fired while nobody was in the building.

You cannot do this on iPhone. History needs desktop. If the only device
in your bag is a phone, you can pause. You cannot pass assertion 3.

These twenty rows plus your sheet are the whole picture.
[Scheduling](/blog/grok-bot-scheduling) attaches clocks.
[Routines versus triggers](/blog/grok-bot-routines-vs-triggers)
explains the short window. Write fires, failures, retries. Compare retries
to last Friday's sheet. A jump is the runaway on
[the policy page](/blog/grok-bot-spend-cap-and-token-burn).
Friday pauses it.

## Pause unused clocks before they inherit next week's pool

Unused is an output nobody opened this week. A daily
[Churn Watch](/bots/churn-watch) that still writes a file nobody reads
is a live purchase. A weekly
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) created in July
for a mailbox migration is a live purchase. Hide does not stop the cloud
computer. Pause does.

The weekly allowance, whatever unpublished size it is, is per account,
not per bot. Next week's pool arrives for every still-scheduled clock at
once. An unused Sunday job takes a cut of a pool you wanted for Monday's
[Chief of Staff Briefing](/bots/chief-of-staff-briefing).
You will not see a line item. You will see a blank briefing.

Friday's unused rule is pause, not delete, not coarsen, not "we should
talk about this one." Pause is reversible. Delete removes the routines.
Coarsen is an edit at a desk with a reason. If the assertion fails, pause
before you stand up. Decide delete or coarsen on a later Friday that
actually happens.

Do not pause the jobs you opened every weekday as a substitute for
pausing the ones you forgot. Protecting
[Standup Scribe](/bots/standup-scribe) in the conversation while the
inbox poller keeps the only tight clock is the failure. Tight used is
still a fail on assertion 5.

Resume is the danger. One tap on iPhone puts an unused clock back into
next week's pool. Write PAUSED and the time. Do not resume from the phone
this weekend to see if the file is still useful.

## Fail the review when retries, five-minute loops, or missing owners appear

Missing owner. If you cannot say who pauses
[Lead Scout](/bots/lead-scout), the scout is unowned spend. Pause it.
A hiring freeze or a week of travel is how a named person stops being a
named person without anyone editing the routine.

Five-minute loop. Inbox work on five minutes is how a grok bot no spend
cap week ends early. If history still shows a five-minute mail job, fail.
Pause it. Do not coarsen in the same sitting unless you are at a desk,
you have copied the wording, and you will disable the five-minute original
before you stand up. A promise to coarsen on Monday is how October still
has a five-minute inbox.

Retry jump. One retry is a flaky page. A pile is a wall: expired login,
changed vendor flow, a cookie the shared computer still thinks is valid.
Each retry is work. You pause, fix the login while nothing is scheduled,
then resume once. Chat-retry during Friday is overflow you did not write
down.

Teach-by-demonstration is not a review tool. It records up to ten
minutes, no microphone audio, browser workflows only, unavailable on
iPhone, and it produces a draft skill. That is spend.

A failed row that you leave live is a passed row to the pool. Pause is
the red bar.

## Walk two skipped Fridays into a Monday with an empty pool

Maya Voss owns ops. Six cards. Nobody is alarmed.
[Inbox Triage](/bots/inbox-triage) every five minutes, owner in her head
"the inbox."
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) daily at 07:00,
Maya opens it.
[Standup Scribe](/bots/standup-scribe) weekdays at 08:30, Maya opens it.
[Lead Scout](/bots/lead-scout) daily at 09:00, Jules opened it twice in
July.
[Churn Watch](/bots/churn-watch) daily at 18:00, unread for eleven days.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) Sunday, migration
ended.

Friday 8 August 16:40 is a customer on-site. Slot empty. The five-minute
inbox job fires through the next week. Retries fill the twenty-record
window with about the last hundred minutes, not the fortnight. Briefing
and standup still arrive, so those two feel healthy.

Friday 15 August 16:40 is an offsite. Two skipped Fridays. The last twenty
inbox records cannot tell Maya which night burned. There is no audit view.
This page will not invent a pool size. The pool can still empty.

Monday 18 August 07:00 the briefing does not write. Quota language is on
the card. Standup is blank. Maya retries briefing from chat. A successful
retry, if overflow is allowed, is not a refill. It is on-demand work while
the five-minute inbox job is still scheduled.

| When | What was true | What Friday would have failed | What actually happened |
|---|---|---|---|
| Fri 8 Aug 16:40 | Six live clocks, inbox at five minutes, Churn Watch unread for 11 days | Owner, unused, tight clock | Slot skipped. Customer on-site |
| Week of 11 Aug | Inbox window is minutes, not weeks. Unused clocks still fire | Last 20, unused | No sheet. No pause |
| Fri 15 Aug 16:40 | Same six clocks. Two weeks of no list | Every assertion | Offsite. Slot skipped again |
| Mon 18 Aug 07:00 | Briefing and standup silent. Quota language | The test never ran | Maya retries briefing. Inbox still live |

That Monday is not mysterious. The move is the emergency stop, not a
longer review. Pause every routine from the phone if that is what she
has. List owners at a desk. Delete the five-minute inbox bot after the
wording is copied. Refuse further retries. Then put Friday 16:40 back on
the calendar as a test.

## Keep a pasteable review sheet the next operator can fail without you

Maya will be on-site again. Jules does not know what 16:40 is for. Paste
this into a file you own, not into a bot that will "keep an eye on spend."

\`\`\`text
FRIDAY REVIEW (this is a test, it is allowed to fail)
Date:
Operator (first and last name):
Desk: Mac or Windows. iPhone is pause only, never pass.

ASSERT 1 ROUTER MAP
Every bot card listed. Every routine on that card listed.
Routine count per bot written. Max 50.
FAIL if a card is "whatever we set up in July."

ASSERT 2 OWNERS
Each routine has a person (first and last name) and a backup.
FAIL if the owner is a Slack channel, a role, or "ops."
ON FAIL: pause that routine before you leave.

ASSERT 3 LAST 20
History opened at a desk for every live routine.
Fires / failures / retries written.
Compared to last Friday's sheet.
FAIL if you are on iPhone. FAIL if you skipped a quiet bot.
ON FAIL: do not declare pass. Pause anything you cannot inspect.

ASSERT 4 UNUSED
Any clock whose output nobody opened this week is paused.
FAIL if it is only hidden.
ON FAIL: pause. Hide is not pause.

ASSERT 5 TIGHT CLOCKS
No mail job at five minutes.
No remaining clock tighter than twice a weekday for inbox work.
FAIL if a five-minute inbox is still scheduled.
ON FAIL: pause it. Coarsen later is not this fail.

ASSERT 6 RETRY JUMP
Retry count is flat or down versus last Friday.
FAIL if one became many.
ON FAIL: pause. Do not retry from chat. Do not start a manual run.

ON ANY FAIL
Pause that clock before you leave the desk.
Write FAIL, assertion number, bot name, routine name, time.
Do not resume from the phone this weekend.
Do not invent a dollar figure for the weekly pool.
There is no Grok Bot-specific spend cap. You are the brake.
\`\`\`

Change the operator name. Do not change the six assertions. If last week's
sheet does not exist, this week cannot pass assertion 3's compare. Pause
the tightest clocks and start a sheet so next Friday has a baseline.

## Score the week on pauses issued, not on bots that still look busy

A sidebar full of green cards is how unused Churn Watch and a five-minute
inbox look when nobody opened history. Score Friday on clocks paused
because an assertion failed, and on assertions that had evidence.

Zero pauses can be a real pass: six named owners, twenty records opened,
no unused clocks, no five-minute mail, retries flat. Write PASS and go.
Zero pauses can also be a skipped slot you later called "nothing to do."
The difference is the sheet.

One unused Sunday job paused is a Friday that earned its calendar row. A
retry jump left live is a Friday you failed and then ignored.

Do not create bots during the slot. Friday that starts building
[Lead Scout](/bots/lead-scout) turns the test into a work session.
Book Tuesday.

[Least privilege](/blog/least-privilege-bots) still applies. Pause does
not replace a boundary. [Inbox Triage](/bots/inbox-triage) still never
sends. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) still never
permanently deletes mail. Safety is
[the safety checklist](/blog/grok-bot-safety-checklist).

## Answer the objection that a quiet roster does not need a Friday

The strongest case against a weekly test is that the fleet is boring.
Briefing arrives. Standup arrives. Nobody has seen a quota banner. Check
when something breaks.

That argument describes the two weeks before Maya's Monday. Quiet is what
a five-minute inbox looks like from the briefing card, and what a grok
bot no spend cap account looks like while the unpublished pool still has
room. Waiting for the banner is how you skip the only brake.

A one-bot roster with a weekday clock and a named owner can pass in four
minutes. Pass still requires the four minutes, at a desk, with history.

You notice [Standup Scribe](/bots/standup-scribe) when it is blank. You
do not notice [Lead Scout](/bots/lead-scout) when Jules stopped reading
it in July. You do not notice the inbox window shrinking to a hundred
minutes. There is no audit view to email you which bot spent the week.

If you are at the desk watching a single research sweep, you are the
ceiling. That sweep is not a routine. If you converted it into a nightly
clock so it could finish without you, Friday owns it.

A bot that reviews the other bots spends the pool, cannot see other
screens as isolation, and cannot pause what you will not pause. The
product gave you no cap, no allowance figure, and no audit view. The time
is the control.

## Leave incidents, overflow decisions, and charter rewrites off the ritual

Incidents. Pause every other routine, watch the remaining one yourself,
and use the runbook for the missed pack. Daily clocks on
[Churn Watch](/bots/churn-watch) and
[Lead Scout](/bots/lead-scout)
will still fire unless you pause them. Review the surviving roster on the
next real Friday.

Overflow. Eligible subscriptions include SuperGrok Plus, SuperGrok Heavy,
Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and Premium, plus a
one-time trial. Confirm the current list on the vendor pages. No plan
buys you a Bot-specific spend cap. If you choose on-demand work, write
that you chose it, with a named window, at a desk.
[What Grok Bot costs](/blog/grok-bot-cost) is shape, not a dollar figure
for the weekly pool.

Charter rewrites live on
[the spend cap page](/blog/grok-bot-spend-cap-and-token-burn).
If assertion 5 or 6 keeps failing on the same card, Friday still pauses.
A paused bot with a bad charter is cheaper than a live bot you are
improving in production.

Trial credit is limited usage, not a published weekly pool. Do not invent
a figure. [The trial page](/blog/grok-bot-free-trial) is the right place.
Pause still applies. Overflow assumptions do not.

Platforms do not refill the week. Linux desktop, Android, and iPad are
not clients
([supported platforms](/blog/grok-bot-supported-platforms)).
Do not plan Friday on a device that cannot open history.

## Name the weeks a Friday review cannot see the bill

The first week of a new charter is measurement. Pause unused still
applies. Five-minute inbox still fails. Comparing retries to last Friday
does not. Write BASELINE on assertion 6, and keep the clock coarse until
a second Friday exists.

A week you already turned overflow on, in writing, for a named window.
Friday can still pause unused clocks. It cannot tell you whether
on-demand work was "worth it." That needs the vendor usage screen plus
the sheet, not a guessed allowance.

A week of attended desk work with no standing clocks. Confirm still
paused, still no five-minute surprise, still no junk card at forty-seven
routines. Do not invent work so the meeting feels real.

A week after you already hit the empty pool. You are on the emergency
page. Do not run a calm 16:40 test while the poller is live. Pause all,
then come back after the five-minute card is gone.

Claude Code, SKILL.md, and CLAUDE.md compatibility is Grok Build, never
Grok Bot. Pasting SKILL.md will not cap the account. SpaceX acquired xAI
(announced 2 February 2026). SpaceX acquired Anysphere/Cursor (closed 14
August 2026). Neither added a Bot-specific spend cap.

## Make a failed Friday the hard stop you own before you leave the desk

In an environment with a grok bot no spend cap design, the boundary is
not a dollar. You never leave 16:40 with a failed assertion and a live
clock.

You never declare pass from iPhone, treat hide as pause, leave a
five-minute inbox scheduled because coarsen is on Monday's list, retry
from chat to see if the pool "came back," invent a credit count, assign
owner to a channel, or skip two Fridays and call Monday a mystery.

[Inbox Triage](/bots/inbox-triage) never sends.
[Standup Scribe](/bots/standup-scribe) never posts to the team channel.
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) never mails the
pack. Those lines do not pause unused clocks. You do.

If the sheet says FAIL, pause, write the row, leave the desk. Next Friday
compares retries to this sheet. Weekly test, six assertions, pause on
red. No spend cap is coming to save the skipped slot.

**Keep reading:** [No Spend Cap: How To Keep a Grok Bot Roster From Running Away](/blog/grok-bot-spend-cap-and-token-burn), [How to Stop a Grok Bot Roster From Burning the Weekly Pool](/blog/how-to-stop-grok-bot-overspending), [Write a Runbook for a Grok Bot That Fails Overnight](/blog/grok-bot-runbook).

## Frequently Asked Questions

### Why is a weekly review the only brake if Grok Bot has no spend cap?

The product has no Grok Bot-specific spend cap. Eligible plans include a weekly usage allowance, then on-demand billing from model and token cost. The size of that allowance is not published as dollars, credits, or runs. There is no audit view of Bot actions. iPhone cannot show history. The twenty most recent run records per routine are the only in-product window. A Friday review that lists routines, names owners, reads those twenty rows, and pauses unused clocks is the brake you own. If the review slips, overflow is a decision you did not make.

### What happens if I skip the Friday review for two weeks?

A five-minute inbox routine can fire through both weeks while you are away. The app keeps twenty run records per routine, so two skipped Fridays erase the history that would have shown the burn. All bots share one weekly pool on one persistent cloud computer. The briefing and standup you actually open can fail on Monday with quota language while the poller still looks busy. Pausing from the phone is then the emergency stop, not this ritual. The two-week skip is how an unpublished pool becomes an empty Monday you will misread as a connector bug.

### Can I complete the Friday review from an iPhone?

No. iPhone can pause and resume only. Editing, history, testing, and deleting need a Mac or Windows desk. The last twenty records are the evidence window, and you cannot open them on the phone. You can pause a clock you already know is unused, and you should if Friday finds you on a train. That pause is not the review. The review is the owner list plus the history pass plus the fail-and-pause decision, written on a sheet. Resume from the phone is how a paused unused bot returns before Monday.

### How is this Friday ritual different from the emergency stop and the policy page?

The policy page writes ceilings into charters because the product has none. The emergency page pauses every routine this hour, lists fifty-cap owners, and deletes a five-minute poller. This page is the recurring Friday that should make the emergency rare. You list live routines, named owners, and the last twenty records, then pause unused clocks. You do not rewrite charters during the slot. You do not delete in a panic. A failed assertion pauses one clock before you leave the desk. Two skipped Fridays is how you end up on the emergency page on Monday.
`,
};

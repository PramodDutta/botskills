import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Quota Exceeded: What That Message Actually Means',
  description:
    'Grok Bot quota exceeded means the weekly pool is gone. There is no Bot-specific spend cap. Overflow is on-demand if your plan allows it. Pause first.',
  date: '2026-08-27',
  category: 'Reference',
  content: `
# Grok Bot Quota Exceeded: What That Message Actually Means

The copy on screen says Grok Bot quota exceeded, and the next instinct is to
hit retry as if a flaky network were the cause. That instinct is the expensive
one. The banner is not a crash, not an expired card, and not a Bot-specific
spend cap. It is the weekly usage pool on the account going empty.

This page is the next hour. Pause every routine. Do not keep retrying. Then
decide, once, whether overflow is even allowed on the plan you hold. It is not
[the no-cap policy page](/blog/grok-bot-spend-cap-and-token-burn), which writes
ceilings into charters because the product has none. It is not
[the bill-shape page](/blog/grok-bot-cost), which is how usage adds up while
you are still inside the pool. For the product itself, see
[what a Grok Bot is](/blog/what-is-a-grok-bot).

## Read quota exceeded as the weekly pool emptying, not as a crash

Eligible subscriptions include a weekly usage allowance. Usage past that
allowance is billed on demand from model and token cost
([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)). When the product says quota
is exceeded, the included pool for this week is gone. That is the meaning of
the sentence.

People treat it as a crash, as one bot dying, or as a missing spend-cap slider.
None of those is what the docs describe
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

| What you think the banner means | What it actually is | The move that follows |
|---|---|---|
| The product crashed | The weekly included pool is empty | Pause, then wait or allow overflow on purpose |
| This one bot is broken | The account pool is shared across every bot | Pause every routine, not only the one that failed |
| A spend cap fired | There is no Grok Bot-specific spend cap | Do not search for a slider. Pause is the ceiling |
| A credit count you can top up | No published dollar, credit, or run figure | Refuse any quoted figure. Read your usage screen |

The size of the weekly allowance is not published. This article will not invent
one. If a page quotes a figure, treat the rest of that page as untrusted too.

All bots share one persistent cloud computer assigned to the user, not to a bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). The weekly
pool follows the same grain. One noisy routine can empty the week for the
briefing you actually open. That is why the first hour is fleet-wide.

## Refuse any dollar figure someone quotes for the included pool

There is no published allowance amount. The FAQ describes a weekly usage
allowance and on-demand overflow. It does not print a number you can budget
against. The enterprise page states there is no Grok Bot-specific spend cap
yet. It also does not print a number. A thread that names a dollar amount is
not a source.

What you can know without a figure is the shape. The pool resets weekly. Inside
it, extra retries do not show up as a separate invoice line. Past it, extra
retries are on-demand if the plan allows overflow. The hour after quota
exceeded is the hour you are standing on that step.

Which plan you hold does not publish the missing number either. SuperGrok Plus,
SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and
Premium are the eligible paid paths, plus a one-time trial
([more plans](https://x.ai/news/grok-bot-more-plans)). Confirm names and prices
on [cursor.com/pricing](https://cursor.com/pricing) and
[x.ai/pricing](https://x.ai/pricing).
[How the Cursor account maps to Grok Bot](/blog/grok-bot-cursor-account-explained)
is the eligibility page. The trial is a different meter. See
[the trial page](/blog/grok-bot-free-trial) if that is the banner you actually
have.

## Kill the retry instinct before the next scheduled fire

Quota exceeded is a stop, not a blip. Retry is how you turn a stop into a
second bill.

A failed run still spent the attempt that failed. A retry spends another. If
overflow is on, each retry is on-demand work. If overflow is off, each retry
is a wasted loop, and the next scheduled fire will do the same thing until you
pause the routine. Clicking again is not how the week refills.

The product does not give you an audit view of Bot actions yet. You cannot open
a ledger and see which retry crossed the line, or which bot did. The run
history window keeps the 20 most recent records per routine. That window is a
cache, not a bill
([skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

Do this in the first two minutes. Do not retry the failed run. Do not start a
manual run "just to see." Do not ask the bot to try a different route. Write
the time and the exact wording of the banner in a note you own. Then pause.

Approvals do not help here. An approval controls the proposed action. It does
not reverse work already completed
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Denying a send does not refund the empty pool. Stop before the next attempt.

## Pause every standing routine before you touch billing or overflow

Pause is available on the phone. On iPhone you can pause and resume only.
Editing, history, testing, and deleting need desktop
([mobile](https://docs.x.ai/grok-bot/mobile)). If you are away from the laptop,
that is enough for this hour. You are stopping the next fire, not patching a
charter from a train.

A routine assigns a workflow to one Bot. Max 50 routines per Bot. Deleting a
Bot deletes its routines. Nothing is team-level. Do not delete bots in order
to pause them. Deletion is a different job, and it does not remove
shared-computer files or sessions. Pause the routines. Leave the roster names
in place.

Pause every standing routine, including the quiet ones. The bot that failed is
not necessarily the bot that emptied the pool. A five-minute inbox poller can
take down [Chief of Staff Briefing](/bots/chief-of-staff-briefing) and
[Standup Scribe](/bots/standup-scribe) without those two ever looking busy.
[Churn Watch](/bots/churn-watch) on a daily clock can look innocent in the same
hour. You will not get an account-wide "this bot did it" screen. Act as if they
all share one tank, because they do.

Write the pause list as you go: bot name, routine name, paused at. Resume and
overflow are later. The first ten minutes are pause. Do not start a
teach-by-demonstration session. Do not test a new skill. Those are work, and
work is what emptied the pool.

## Follow the five-minute inbox bot from Monday morning to a dead Thursday

Here is the worked example this page exists for. It is a shape, not a
measurement. The allowance size is unpublished, so nobody can tell you which
clock hour the pool died. The shape is what you can trust.

You wanted [Inbox Triage](/bots/inbox-triage) to feel live. Twice a day felt
slow. You set the routine to every five minutes, labelled mail only, draft
replies, never send. That charter is otherwise the right one. The clock is the
mistake.

Every five minutes is 12 fires an hour, 288 in a day, 2,016 in a seven-day week
if you leave weekends on. A weekday-only version is still 1,440 fires before
Friday evening. Each fire still opens the mailbox, still decides which threads
to open, still writes a draft. A quiet Sunday costs the same as a launch
Monday.

| Clock | What the inbox bot did | What you saw | What else went quiet |
|---|---|---|---|
| Monday 07:00 | You enable every five minutes | First labelled stack looks useful | Nothing yet. Briefing still arrives |
| Tuesday 09:00 | Overnight fires kept going | The labelled stack is a wall | [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) missed its morning pass |
| Sometime midweek | The weekly pool empties | Quota exceeded on a bot you were not watching | [Chief of Staff Briefing](/bots/chief-of-staff-briefing) never writes Thursday |
| Thursday 08:00 | You retry the briefing | Same banner. You retry again | [Lead Scout](/bots/lead-scout) is silent. Inbox clock still running |

The tell is never the inbox bot announcing that it spent the week. The tell is
a different bot going quiet. Then you retry that quiet bot, which is the wrong
one, and the five-minute clock keeps firing.

Twice a day would have been 10 weekday runs, not 1,440.
[Inbox Triage](/bots/inbox-triage) is a labelled stack you process at the desk,
not a live ticker. [Grok Bot and Gmail](/blog/grok-bot-gmail) is the draft-only
page. [Scheduling](/blog/grok-bot-scheduling) is how to pick a clock. Do not
read the 2,016 as a price. There is no published price per run. Read it as a
count. That count spends a weekly pool faster than a twice-daily bot.

## Split this banner from the no-cap page and the bill-shape page

Keep these three pages apart or you will do the wrong hour of work. This page
is the banner and the next hour. [No spend cap](/blog/grok-bot-spend-cap-and-token-burn)
is the charter ceilings you write after. [Grok Bot cost](/blog/grok-bot-cost)
is the bill shape while you are still designing a roster.

| Question in your head | The page that answers it | What that page will not do |
|---|---|---|
| What does quota exceeded mean, and what do I tap now? | This page | It will not give you a dollar figure or a next-month charter |
| Why is there no slider, and how do I write a ceiling? | [No spend cap](/blog/grok-bot-spend-cap-and-token-burn) | It will not walk the banner or the first hour |
| How does usage add up before I ever see the banner? | [Grok Bot cost](/blog/grok-bot-cost) | It will not tell you to pause a live routine |
| Which clock should this job have used? | [Scheduling](/blog/grok-bot-scheduling) | It will not explain the empty-pool message |

If you searched grok bot quota exceeded, stay until every routine is paused.
Rewriting a charter while the five-minute clock is still armed is how you spend
overflow you have not decided to allow.

## Confirm overflow is on-demand only if the plan you hold actually allows it

The documented shape is weekly allowance, then on-demand from model and token
cost. "On-demand" is not a promise that every account, every trial, and every
region will keep serving work the moment the pool hits zero. Confirm it in the
product. Confirm it on the vendor's current pricing page. Do not confirm it
from a screenshot in a thread.

If overflow is allowed, the banner is a warning that you have left the included
pool, not a hard stop. Work you keep requesting will bill. Retry is then a
purchase. A standing five-minute routine is a standing purchase. Pause is how
you make that purchase explicit instead of ambient.

If overflow is not allowed, the banner is a hard stop until the weekly pool
returns. Retry will not accelerate the reset. Upgrading mid-week is not a
documented refill. If the product does not say it, this page will not say it
either.

There is still no Grok Bot-specific spend cap in either branch. Overflow
becomes a slope, not a cap. The only hard stop you own in this hour is pause.
Grok Bot has no model picker for members or admins. You cannot limp through
the week on a cheaper model. Frequency, pause, and "do not retry" are the
levers you have.

## Sort the next hour into pause, wait, and run-by-hand

Once everything is paused, you still have a Thursday. Do the real work as a
person for one day rather than turning the clock back on. Wait is for anything
that can slip a day. Run-by-hand is the one artifact you would have opened
this morning: write it yourself, or run Inbox Triage once, manually, after you
have confirmed overflow, then stop.

| Job | Default in this hour | Why | Resume later as |
|---|---|---|---|
| [Inbox Triage](/bots/inbox-triage) | Pause the clock. Process mail yourself, or one manual run | The five-minute version is what burned the week | Twice a weekday, never every five minutes |
| [Chief of Staff Briefing](/bots/chief-of-staff-briefing) | Run-by-hand once, or skip | You notice its absence. You do not need 288 copies | Once, before you start, weekdays |
| [Standup Scribe](/bots/standup-scribe) | Wait, or write the standup yourself | One missed draft is cheaper than overflow | Once per working day |
| [Lead Scout](/bots/lead-scout) | Wait | Leads from a paused hour can wait one day | Daily or on an event, not a poll |
| [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) | Wait | Cleanup is not why you opened the app | A coarse schedule you chose on purpose |
| [Churn Watch](/bots/churn-watch) | Wait unless a named account is on fire | Then you look at that account yourself | Daily, not a tight poll |

Would you have used the output before lunch, and can you produce a worse
version in twenty minutes? If yes, do the worse version. If no, wait. Do not
resume a fleet because one job felt urgent. Pause is not revoke.
[Least privilege](/blog/least-privilege-bots) and
[the safety checklist](/blog/grok-bot-safety-checklist) are later hours.

## Write a pool-empty stop into the charter so retries cannot restart the burn

Pause is this hour. The charter is how the next empty pool is quieter. Paste a
block that treats quota exceeded as a wall, not as a transient fault. A bot
that thinks a quota error is a network blip will retry, then try another route,
which is more work against an empty pool.

\`\`\`text
NEXT HOUR AFTER QUOTA EXCEEDED
Do not retry the failed run.
Pause every routine on every bot. iPhone pause is enough.
Write bot name, routine name, and the time you paused.
Do not open teach-by-demonstration. Do not start a manual test run.
Do not hunt a spend-cap slider. There is not one.
Confirm overflow in the product and on the vendor pricing page.
If overflow is off, wait for the weekly pool. Do not upgrade to guess a refill.
If overflow is on, resume at most one bot, once, manually, then stop.
Inbox work: twice a weekday after this, never every five minutes.

POOL-EMPTY CLAUSE (paste into every charter)
If a run fails because usage is exhausted, quota is exceeded, or the
product asks you to retry later, stop. Do not retry. Do not start an
alternate route to the same job. Do not treat this as a network fault.
Write one line: pool empty, paused, waiting for you.
Never initiate spend, a credit top-up, a paid upgrade, or a purchase
to "keep working."
Never send, pay, or publish while the pool is empty.
\`\`\`

The last two lines are the boundary. You decide overflow, in the product, as a
person. The bot reports that the pool is empty and it waits. Put the same
clause on bots that were not the poller. The briefing bot is the one you will
retry. After this hour, split anything that shares a routine with a tight
clock. [Inbox Triage](/bots/inbox-triage) does not also write the standup.

## Diagnose the next-hour mess from the symptom, not from the invoice

The invoice, if overflow billed, will not arrive in this hour. The symptoms
will. Match the symptom to one move. Do not do all the moves.

| What you see in the next hour | What it usually is | The one move |
|---|---|---|
| Banner on a bot you rarely open | A different bot emptied the account pool | Pause every routine, starting with the tightest clock |
| Banner, then a successful retry | Overflow is on, and you just bought a run | Stop. That success is not a refill of the included pool |
| Banner on every bot at once | The weekly pool is gone, account-wide | Pause all. Do not debug connectors |
| One bot quiet, others fine, no banner | Routine disabled, or the 20-run window looks empty | May not be quota. Check the enabled flag |
| Phone shows pause, desktop still running a test | Pause did not cover a manual run on the laptop | Close the desktop session. Manual is still work |

Connectors that "suddenly return nothing" are often an expired login. If even
one bot still completes a tiny manual run, you are not in an empty pool. If
every bot fails with the same banner, you are, and connector repair can wait.
Do not revoke Gmail in this hour unless you already wanted it gone. Revoking is
not pause. Cookies and sessions live across bots
([shared computer](/blog/grok-bot-shared-computer-security)). Pause first.

## Verify recovery with one manual run, then stop

You need a check that can fail. "I waited a while and the banner vanished" is
not a check. The weekly pool is weekly. If you are still inside the same week,
waiting twenty minutes will not refill it.

Write down three facts before you touch resume: the time you paused, whether
the product said overflow was available, and which one bot you are willing to
test. Then run that bot once, manually, with a tiny job: one labelled thread,
or a three-line briefing from calendar only. No five-minute clock. No second
bot.

If the manual run fails with quota exceeded, recovery has not happened. Leave
everything paused. Do the Thursday work by hand. Do not add a second manual
run to "make sure."

If the manual run succeeds and you did not enable overflow, stay paused on the
tight clocks anyway. Resume once-a-day bots first. Inbox stays at twice a
weekday. Every five minutes stays off. If it succeeds and overflow is on, you
just spent on-demand. Keep exactly one attended bot, in the room with you, or
pause again.

After a successful manual run, confirm the five-minute inbox routine is still
paused. If it is running, the recovery test failed even if the briefing looked
fine. The clock is the incident. iPhone can pause and resume. It cannot give
you history. Resume nothing from the phone until you have desktop.

## Concede the argument for keeping a five-minute poll, then show where it loses

The strongest case against pausing is simple. The lead arrived at 11:04. The
inbox bot on a five-minute clock would have labelled it at 11:05. You would
have drafted a reply before the sender went to lunch. Pausing until tomorrow
is how you miss it. Overflow is just paying for that speed. If the plan allows
on-demand, the "error" is a pricing event, not an emergency, and the correct
move is to keep the poller on and accept the slope.

That argument wins for a short, named window: a launch morning, an incident,
you at the desk, clock back to twice a day at lunch. Event triggers, where the
product offers them, are the cleaner version, because they fire when mail
arrives rather than 288 times on a dead Sunday. Confirm trigger types in the
app.

It loses as a standing setting. You will not remember to coarsen the clock at
lunch. The 11:04 lead is real a few times a year, which is why the dropdown
stays on five minutes in October. The weekly pool is unpublished, so you cannot
prove 1,440 weekday fires will fit. You find out when
[Chief of Staff Briefing](/bots/chief-of-staff-briefing) misses Thursday. Even
if you want overflow for the poller, retrying every other bot is panic
shopping. One attended exception is allowed. "Keep clicking until the banner
goes away" is not.

For a genuine one-off, you at the desk, overflow confirmed, one manual run, the
banner is not an emergency. Pay for that run if the plan allows it. Then stop.
The emergency is the unattended clock, not the message.

## Leave overnight incidents and trial credit outside this hour-one script

This playbook assumes a paid eligible plan, a weekly pool, and unattended
routines. Three situations sit outside it.

Overnight incidents. Pause every bot that is not the incident bot, then watch
the remaining one yourself. A warm fleet is how the pool dies at 3am.

Trial credit. The one-time trial is limited usage, not a weekly allowance with
a published overflow slope. Do not invent a dollar figure for the credit.
[The trial page](/blog/grok-bot-free-trial) is the right place. If you are on a
trial and you see quota language, stop and read the terms on the screen.

Attended research. A long public-page sweep you are watching, once, is not a
routine. If it hits quota exceeded, stop. Do not convert it into a scheduled
job so it can "finish overnight."

Platforms do not change the pool. macOS, Windows, and iPhone on iOS 18+ are
supported. Linux desktop, Android, and iPad are not
([FAQ](https://docs.x.ai/grok-bot/faq)). Switching devices does not refill the
week. The computer is a managed Linux VM, not a Linux desktop client, and not
a second pool. See [supported platforms](/blog/grok-bot-supported-platforms).
Whether Grok Bot is worth another week is a question for after pause:
[is Grok Bot worth it](/blog/is-grok-bot-worth-it).

## Make pause the hard stop you own while the pool is empty

Everywhere else on this site a boundary is the action the bot never takes
without a human. In the hour after grok bot quota exceeded, you are the one
who needs a boundary. The product will not cap you. Overflow may keep serving
work. Retry will look like diligence. The line is pause.

You never resume a five-minute inbox routine in the same week you hit the
banner. You never let the bot initiate spend to keep working. You never send,
pay, or publish to "catch up" while the pool is empty. You never delete a bot
as a substitute for pause. You never invent a dollar figure so the week feels
budgeted.

The bot's line is the pool-empty clause: stop, report, wait.
[Inbox Triage](/bots/inbox-triage) still never sends.
[Mail Cleanup Assistant](/bots/mail-cleanup-assistant) still never permanently
deletes. When the weekly pool returns, resume from the pause list, coarsest
clock first. Write the ceiling into the charter next, because this hour will
happen again if the dropdown stays where it was on Monday.

**Keep reading:** [No Spend Cap: How To Keep a Grok Bot Roster From Running Away](/blog/grok-bot-spend-cap-and-token-burn), [Grok Bot Cost: What You Pay and How Usage Adds Up](/blog/grok-bot-cost), [Grok Bot Scheduling: Daily, Weekly, and Triggered Runs](/blog/grok-bot-scheduling).

## Frequently Asked Questions

### What does the Grok Bot quota exceeded message mean?

It means the weekly included usage pool on the account is gone. Eligible
subscriptions include a weekly usage allowance, and work beyond that allowance
is billed on demand from model and token cost if your plan allows overflow.
The banner is not a crash, not a single broken bot, and not a spend cap
firing. All bots on the account share that pool, so a quiet briefing can fail
because a noisy inbox routine spent the week. Pause every routine before you
debug the bot that showed the message.

### Should I keep retrying after Grok Bot quota exceeded?

No. Retry spends another attempt against an empty pool, and if overflow is
allowed it bills that attempt on demand. The weekly allowance does not refill
because you clicked again. Pause every standing routine, including the ones
that have not failed yet, then confirm in the product whether overflow is
even on. One attended manual run is a decision. Repeated retry is how a
five-minute inbox clock turns the rest of the week into unattended on-demand
work you cannot map to a choice.

### Does quota exceeded mean Grok Bot has a spend cap I can raise?

No. There is no Grok Bot-specific spend cap. The enterprise documentation
states that directly. Quota exceeded is the weekly included pool emptying, not
a ceiling you configured. You will not find a dollar slider that stops overflow
or prints a published allowance. The stop you own in the next hour is pause.
The stop you own after that is a charter that forbids retries, alternate
routes, and any purchase, top-up, or paid upgrade the bot might try in order
to keep working.

### Will upgrading my plan clear Grok Bot quota exceeded this week?

Do not assume that. A plan change is not documented as a mid-week refill of
the current weekly pool, and this page will not invent a refill rule. Confirm
in the product and on the vendor's current pricing pages. Eligible paid paths
and a one-time trial are listed in the Grok Bot FAQ. None of them publish a
dollar figure for the included weekly allowance. If overflow is allowed, you
can pay for a run on purpose. If it is not, wait for the pool. Either way,
pause first.
`,
};

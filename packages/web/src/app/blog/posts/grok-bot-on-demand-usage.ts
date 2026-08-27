import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot On-Demand Usage: What Burns the Extra Tokens',
  description:
    'Grok Bot on demand usage is overflow after the weekly pool. Five-minute loops, retries, and browser thrash burn it. Pause is the control. There is no spend cap.',
  date: '2026-08-27',
  category: 'Guide',
  content: `
# Grok Bot On-Demand Usage: What Burns the Extra Tokens

Twelve full restarts of one frozen checkout is grok bot on demand usage as it actually arrives: the weekly pool is already gone, and each extra attempt is overflow billed from model and token cost.

This page is not the two-phase billing model. That lives on [Grok Bot weekly allowance](/blog/grok-bot-weekly-allowance): an included weekly pool, then on-demand work billed from model and token cost ([Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)). The banner that names an empty pool lives on [Grok Bot quota exceeded](/blog/grok-bot-quota-exceeded). The hour that stops a live roster lives on [how to stop Grok Bot overspending](/blog/how-to-stop-grok-bot-overspending). What writes the overflow line is retries, tight cadences, screenshot-heavy repro, and long browser sessions.

There is no Grok Bot-specific spend cap ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). Pause is the control. There is no model picker. Billing follows the actual serving model. No published page prints the weekly allowance as dollars, credits, or runs. This article will not invent a token price or an allowance figure.

## Treat on-demand as overflow after the weekly pool, never as a second product

Grok Bot on demand usage is the second phase of one bill, not a second product you turned on. The plan still includes a weekly pool. When that pool is empty, more work is overflow. Overflow is not a crash, not an expired card, and not a Bot-specific ceiling firing.

All bots on the account share one persistent cloud computer assigned to the user, not to a bot ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). The weekly pool follows the same grain. A noisy repro can empty the week for [Chief of Staff Briefing](/bots/chief-of-staff-briefing) even if the briefing never ran today.

People treat overflow as a lane they can shop for, or as a cheaper model they can limp through. Neither is documented. You do not pick an overflow model. You do not raise a Bot spend cap. You either pause, or you keep buying the same work after the included pool is gone.

Confirm overflow in the product and on the vendor's current page. Eligible paid paths are SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, and Cursor Teams Standard and Premium, plus a one-time trial ([more plans](https://x.ai/news/grok-bot-more-plans)). Confirm names and prices on [cursor.com/pricing](https://cursor.com/pricing) and [x.ai/pricing](https://x.ai/pricing). None of those pages print a dollar figure for the included weekly allowance.

## Rank retries, tight cadences, screenshot dumps, and open browsers as four burners

Four habits write most overflow. Rank them before you rewrite a charter.

| Burner | What it multiplies | Why it looks cheap | First control |
|---|---|---|---|
| Retries | Each full restart of the same job | Sitting feels like failure, so you tap again | Stop. Open the screen. Resume from a checkpoint |
| Tight cadence | Every scheduled fire, including after the pool is empty | A five-minute tick looks like a health check | Pause every routine, then coarsen |
| Screenshot-heavy repro | Every capture plus the page load that produced it | One ticket looks like one run | Cap captures. Stop on 2FA. Do not recapture the cart |
| Long browser session | Tabs, navigation, idle staring, login walls | You left it working | Pause. Close the tab set. Do not retry from the phone |

Retries are the fastest way to turn one stall into twelve purchases. Tight cadence is the quiet way: a clock that was fine inside the weekly pool keeps firing after the pool is gone. Screenshot dumps are the heavy way: a repro that clicks a shop path and saves a PNG at every state spends more than a text digest. Long browser sessions are the leftover way: tabs stay open, the bot keeps looking, and you never paused.

[Inbox Triage](/bots/inbox-triage) is the cadence burner when the dropdown is every five minutes. [Lead Scout](/bots/lead-scout) is the browser burner when a research pass never closes the tab set. They stack: a five-minute inbox plus twelve retries of a frozen shop is two burners on one account, one shared pool.

An audit view of Bot actions does not exist yet ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). You will not get a receipt that says attempt seven of twelve. Keep the ledger yourself: bot name, clock, last pause time, and whether you tapped retry.

## Count twelve retries of one stalled job as twelve overflow purchases

A failed run still spent the attempt that failed. A retry spends another. If you are already past the weekly pool, that second attempt is grok bot on demand usage. Twelve is not diligence. Twelve is twelve purchases you did not sign.

A stall is not a crash. Chat may still say the bot is working. The screen may look like a still photo. Files under \`/workspace\` may already hold the cart capture, the toast, and a half-written STEPS.md. The restart protocol is on [Grok Bot stalled mid-job](/blog/grok-bot-stalled): inspect artifacts, name the last checkpoint, resume from the next one, never re-run a send. Tapping retry from the phone skips all of that. It starts the job from the URL again.

On iPhone you can pause and resume only. Editing, history, testing, and deleting need desktop ([mobile](https://docs.x.ai/grok-bot/mobile)). Retry is not pause. Retry is another run. If you are on a train and the preview looks frozen, pause. Do not tap the job twelve times because sitting felt like failure.

An approval only covers the next proposed step. Work already done is not undone and is not refunded ([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)). Denying a later click does not refund the eleven walks that already recaptured the cart. The 20 most recent run records per routine are not a bill. Write the time and the wording you saw, then stop clicking.

## Stop treating a five-minute loop as a cheap pulse after the pool is empty

A five-minute inbox clock is 288 fires in a day if it never pauses. Inside the weekly pool that is already a lot of work for a digest you read twice. After the pool is empty, every remaining tick is overflow if overflow is allowed, or a wasted loop if it is not. Either way the clock is the burner, not the model.

Cadence multiplies. Scope adds. A tight clock multiplies whatever one run costs. The cost shape of that arithmetic is on [Grok Bot cost](/blog/grok-bot-cost). This page only needs the overflow version: once the weekly pool is gone, the dropdown is how fast overflow arrives.

| Clock | Fires per weekday (if it never pauses) | What that clock is for | Overflow risk after the pool is empty |
|---|---|---|---|
| Every 5 minutes | 288 | Almost never a human-read job | Highest. Pause first, then delete or coarsen |
| Hourly | 24 | Fast-stale queues you actually open | High if the run is browser-heavy |
| Twice a weekday | 2 | Inbox, mail cleanup, a digest you read | The default after overflow |
| Daily | 1 | Briefing, standup, a pack you open once | Lowest among standing clocks |

A routine assigns a workflow to one bot. Max 50 routines per bot. The app keeps 20 most recent run records per routine. Deleting a bot deletes its routines. Nothing is team-level ([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)). The 50-cap is not a spend cap. A quiet bot can still own a live five-minute clock. Pause every routine, then list owners at a desk.

[Standup Scribe](/bots/standup-scribe) and [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) do not need a five-minute pulse. If the inbox bot emptied the pool, do not resume that clock this week. Attach a coarser clock on [Grok Bot scheduling](/blog/grok-bot-scheduling) after overflow is quiet.

## Charge screenshot-heavy repro by the capture, not by the ticket

One ticket is not one run. A repro that loads staging, clicks the path, and saves a PNG at every state is a stack of page loads plus a stack of captures. If the path stalls on a cookie banner, an OTP field, or a selector that moved, a retry recaptures the whole stack. That is how a single checkout bug writes overflow.

Cap the captures in the charter before you schedule the bot. A useful packet is a numbered set of states, not a film of every hover. Stop on 2FA. Stop on a payment. Stop when the last screenshot matches the last screenshot. Recapturing the cart because the chat went quiet is the retry burner wearing a repro costume.

Do not mix triage and reproduction on one screen. Screens are not security boundaries. Cookies, sessions, files, and command-line credentials are shared, so deleting the repro bot does not remove the staging login. [Least privilege](/blog/least-privilege-bots) is the design. This page is the burn.

## Close long browser sessions before they write the overflow line

A long browser session is overflow you cannot see from chat. Tabs stay open. The bot keeps scrolling, searching, and waiting on a login wall. You closed the laptop. Background work continues if you close the app, the laptop, or the iPhone. Closing your view does not pause the machine.

Lead research is the usual leftover. [Lead Scout](/bots/lead-scout) opens a row of competitor pages, hits a login, and sits. If you tap retry, it opens the row again. If a routine owns that pass on a tight clock, the row reopens on a timer. Pause is the first close. Closing the tab set on the shared computer is the second. A new daily clock waits until overflow is quiet.

Browser cookies on the computer are shared. A long session that signed into a vendor portal leaves that cookie for every bot on the account. Pause stops the burn. It does not sign the portal out.

A spinner with no new file under \`/workspace\` is a stall, not a reason to wait for an automatic kill you have not been promised. There is no published stall timeout number. Do not invent one. Open the screen or pause.

## Follow billing to the serving model you cannot pick

Grok Bot has no model picker, for members or admins. The docs do not plan to allow admin or user choice ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). A fixed model set per surface serves the work, with automatic failover. Billing follows the actual serving model.

You cannot limp through grok bot on demand usage on a cheaper model you selected. You cannot tell the bot to use a lighter model for retries. If a settings page mentions a default model when model selection is available, treat that as a different surface, not as a Grok Bot picker.

Do not assert that Grok Bot runs a named Build model. The Grok Bot model set is not published. Claude Code, SKILL.md, and CLAUDE.md compatibility is Grok Build. The Grok Bot docs never mention those files.

The levers you own are pause, retry refusal, a coarser clock, fewer captures, and shorter sessions. They work the same whether failover served one model or another, because you cannot see the serving model as a choice. With both a Cursor and a SuperGrok subscription, Grok Bot uses whichever has more usage. That is a pool rule, not a picker.

## Pause the roster instead of hunting a spend cap that does not exist

There is no slider labelled spend cap. Searching for one is how the five-minute clock gets another dozen fires while you read a thread. Pause is the control you have in the first two minutes.

If you are away from a desk, pause from the phone. Do not wait to edit. Do not resume because the preview looked idle.

Pause every standing routine, including the ones that have not failed yet. The pool is shared. The bot that showed the stall is not the only one that can write overflow. [Churn Watch](/bots/churn-watch) on a daily clock is usually not the burner. Pause it anyway until you have a list. Resume coarsest clock first, and only if you have decided overflow is allowed.

Do not delete a bot as a substitute for pause. Deleting a bot deletes its routines. It does not remove shared-computer files or browser sessions. It does not refund overflow already billed. Pause first. Delete the five-minute poller at a desk after you have a named twice-daily replacement.

## Walk one stalled checkout from freeze to twelve burns

Maya had a reproduction bot on staging. The ticket was a checkout toast that restored the original price. The bot loaded the shop, added the item, applied the code, and sat on an OTP field for the test mailbox. Chat still said working. The preview looked like a still photo of the pay page.

Maya was on a train. She tapped retry. The bot started at the shop URL again, recaptured the cart, recaptured the code field, and sat on OTP again. She tapped eleven more times before she reached a desk.

| Attempt | What the bot actually did | Pool phase in this story | What should have happened |
|---|---|---|---|
| 1 | Loaded staging, clicked the path, hit OTP, sat | Inside the weekly pool | Open the screen. Type the code, or pause |
| 2 | Restarted from the URL, recaptured the cart | Still inside, or near empty | Read \`/workspace\`. Resume from the last PNG |
| 3 | Same path again | Weekly pool empties | Pause every routine. Do not retry |
| 4 to 11 | Same path, new screenshots each time | Grok Bot on demand usage | Already overflow. Pause now |
| 12 | Same path, overflow | Still overflow. No spend cap fired | Twelve walks of one freeze |

Attempts four through twelve are the extra tokens. They are the same frozen path, billed after the weekly pool was empty, from model and token cost, on whatever serving model actually ran. Maya never picked that model. She never saw a spend cap. She thought she was debugging.

At the desk the folder already held twelve copies of the cart and one OTP screenshot from attempt one. She could have resumed from that first capture. She bought twelve shop walks instead. The five-minute inbox bot was still armed the whole train ride. That is a second burner. Pause would have stopped both. Retry stopped neither.

## Match the overflow symptom to the burner that produced it

The invoice, if overflow billed, will not name the burner. Match what you see to one cause.

| What you see | Burner it usually is | Not this | One move |
|---|---|---|---|
| Same stall, many retries in a short window | Retry storm | A flaky network you can click through | Pause. Inspect \`/workspace\`. One attended resume at most |
| Digest empty, inbox clock still every five minutes | Tight cadence | The briefing bot dying | Pause the inbox routine. Coarsen later |
| Hundreds of PNGs for one ticket | Screenshot-heavy repro | A thorough packet you needed | Cap captures. Stop on 2FA. Do not recapture |
| Tabs still open, chat quiet, usage still moving | Long browser session | Background work you meant to leave running | Pause. Close the tab set on the shared computer |
| Quota exceeded copy on screen | Weekly pool empty | A spend cap you can raise | Decode the banner, then pause. Do not hunt a slider |
| Briefing quiet, repro noisy | Shared pool, wrong card | Isolation by bot | Pause the fleet. The pool is account-wide |

If the symptom is the banner, read [quota exceeded](/blog/grok-bot-quota-exceeded). If you need the two-phase meter itself, read [weekly allowance](/blog/grok-bot-weekly-allowance). If the symptom is a live five-minute clock and a blank Tuesday pack, the hour-one script is [stop overspending](/blog/how-to-stop-grok-bot-overspending). If the symptom is a silent sit with files already written, the restart is [stalled](/blog/grok-bot-stalled).

## Paste a burner-named charter the overflow cannot ignore

Pause is this hour. The charter is how the next overflow is quieter. Name each burner. A bot that treats a stall as a network blip will retry, then try another route, which is more overflow against an empty pool.

\`\`\`text
OVERFLOW AND BURNERS
If usage is exhausted, quota is exceeded, or the product asks you to
retry later, stop. Do not retry. Do not start an alternate route to
the same job. Write one line: pool empty, paused, waiting for you.

RETRY
One attempt at a stalled step, then stop. Never a second unattended
retry. If chat goes quiet, do not restart from the URL. Read the last
file under /workspace, name the checkpoint, and wait.

CADENCE
Run twice a weekday at 09:00 and 16:00 Europe/London. Never every
five minutes. Never hourly. If I ask you to check again the same
morning, refuse and tell me when the next run is.

SCREENSHOTS
At most 8 captures per run. Stop on 2FA, captcha, payment, or a
selector that no longer matches. Do not recapture a state you already
saved this run. If the last two screenshots match, stop.

BROWSER
Close extra tabs at the end of the run. Do not leave a research row
open. If a page needs a login you do not have, stop. Do not search
for a mirror.

SERVING MODEL
Do not ask me to pick a model. Do not claim you can switch to a
cheaper model to keep going. Report pages loaded, captures saved,
retries, and whether you hit a ceiling.

BOUNDARY
Never send, pay, publish, purchase, top up, or start a paid upgrade
to keep working. Never place a staging order. Pause is my control.
There is no spend cap for you to raise.
\`\`\`

The boundary is the line the bot never crosses. You decide overflow as a person, in the product. The bot reports that the pool is empty and it waits. Put the same retry clause on bots that were not the stall. The briefing is the one you will retry. After this, split anything that shares a routine with a tight clock.

## Prove overflow has quieted with a check that can fail

Write three facts before you resume: which routines are paused, what the usage screen showed at pause, and what clock you will allow next. A vibe that usage slowed down is not a check.

Wait long enough that a five-minute loop would have fired if it were still armed. If usage moved while every routine was paused, you missed an owner. If it did not move, new overflow from cadence has stopped. That is not a refund of overflow already billed.

The retry check is separate. Do not tap the stalled job. Open the screen. If new PNGs appear without you starting a run, something else is still driving the repro. Pause that owner. One attended resume from a named checkpoint is a decision you can write down. A thirteenth retry is not a check.

If you resume one daily briefing, write the time. If a second bot also resumed, you failed the check. Coarsest clock first, one bot, then stop. Confirm overflow is even allowed before that resume. If overflow is off, wait for the weekly pool. Do not upgrade to guess a refill. A plan change is not documented as a mid-week refill.

## Concede the case that retries are how you recover a stall

The strongest argument against this page is simple: a stalled job needs a restart, and twelve tries is how you get past a flaky page. Sitting feels like failure. A silent sit looks like a dead run. Maya's train-tap is the move most people defend.

It wins in one narrow case. You are at a desk. You opened the screen. You read the last file. The last capture is a transient 404 on a page that is up now. You start one attended resume from the last good checkpoint, you watch the next click, and you stop if OTP or a send appears. That is recovery. It is one purchase you chose.

It loses as soon as the restart is unattended, from a phone, from the original URL, or past the second try. It loses when the stall is 2FA, a selector change, or an approval you did not see. Those are waits, not flaky networks. Twelve full restarts recapture the wait twelve times. The stall page is the protocol for the wait. This page is the bill for ignoring it.

It also loses after the weekly pool is empty. Inside the pool, a mistaken retry still spends included usage. After the pool, the same tap is grok bot on demand usage. There is no spend cap to catch you at attempt four. Pause is the catch. If you want a hard product ceiling, write it into the charter. The no-cap policy page is [spend cap and token burn](/blog/grok-bot-spend-cap-and-token-burn).

## Park weekly-pool decoding and the hour-one pause script on their own pages

Keep these pages apart or you will do the wrong hour of work. This page names what burns overflow. It is not permission to skip pause. It is not a dollar model of the weekly pool.

| If you are trying to | Open | Do not do on that page |
|---|---|---|
| Name retries, cadence, screenshots, and browser as burners | This page | Do not invent a token price or an allowance in dollars |
| Decode the two-phase meter (pool, then overflow) | [Weekly allowance](/blog/grok-bot-weekly-allowance) | Do not treat that page as a list of burners |
| Decode the quota exceeded banner | [Quota exceeded](/blog/grok-bot-quota-exceeded) | Do not treat that page as a retry license |
| Stop a live roster this hour | [Stop overspending](/blog/how-to-stop-grok-bot-overspending) | Do not rewrite a charter while a five-minute clock is still armed |
| Restart a silent sit without doubling the writes | [Stalled](/blog/grok-bot-stalled) | Do not start from the URL if files already exist |
| Write ceilings because the product has none | [No spend cap](/blog/grok-bot-spend-cap-and-token-burn) | Do not hunt a slider the docs say is missing |
| Attach a coarser clock after the fire is out | [Scheduling](/blog/grok-bot-scheduling) | Do not put a tight pulse back on the inbox bot this week |

Confirm overflow in the product. Never invent a token price. Pause is the control. Name which burner you are stopping.

**Keep reading:** [Grok Bot Cost: What You Pay and How Usage Adds Up](/blog/grok-bot-cost), [No Spend Cap: How To Keep a Grok Bot Roster From Running Away](/blog/grok-bot-spend-cap-and-token-burn), [Grok Bot Scheduling: Daily, Weekly, and Triggered Runs](/blog/grok-bot-scheduling).

## Frequently Asked Questions

### What is grok bot on demand usage?

Grok Bot on demand usage is work billed after the weekly included pool on the account is gone. Eligible subscriptions include a weekly usage allowance, and overflow is billed from model and token cost. It is not a second product, not a crash, and not a spend cap. All bots share that pool, so twelve retries of one stalled job can write the overflow line while a briefing you actually read sits quiet. Pause is the control. No published page prints the allowance as dollars, and this answer will not invent one.

### Does overflow have a Grok Bot spend cap I can set?

No. There is no Grok Bot-specific spend cap. Overflow continues until you pause, until the job stops, or until you change the roster yourself. You will not find a slider that prints a weekly dollar ceiling or a token price. Confirm overflow in the product and on the vendor pricing page. Pause from the phone if you are away from a desk. Editing, history, testing, and deleting need desktop. The charter is the ceiling you write because the product has none.

### Can I pick a cheaper model so grok bot on demand usage costs less?

No. Grok Bot has no model picker, for members or admins. Billing follows the actual serving model, with a fixed model set per surface and automatic failover. You cannot limp through overflow on a cheaper model you selected. The levers you own are pause, retry refusal, a coarser clock, fewer captures, and shorter browser sessions. If a page claims you can pick the Grok Bot model, treat that page as stale. Do not budget from a named Build model either.

### How do I stop overflow without waiting for next week?

Pause every standing routine first. Then stop tapping retry on the stalled job. Open the screen, read the files already written, and resume from a checkpoint only if you decide one attended run is worth overflow. Delete or coarsen the five-minute loop at a desk. Do not hunt a spend cap. Do not assume a plan change refills the week. Confirm overflow in the product. One manual run is a decision. Twelve unattended retries is how overflow stays on.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot On-Demand Monthly Limit: The Spend Ceiling You Can Set',
  description:
    'The Grok Bot spend cap that exists is the account-level On-demand monthly limit. Set it in Settings or at cursor.com/dashboard, and see what it will not stop.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Grok Bot On-Demand Monthly Limit: The Spend Ceiling You Can Set

If you want Grok Bot to keep working after your included usage runs out but never run up an open-ended bill, the control you need exists, even though several August write-ups, some of them on this site, said it did not. It is the On-demand monthly limit: an account-level ceiling on extra usage that you set in Grok Bot's Settings or on the Cursor dashboard.

This page corrects that August claim, walks one freelancer through setting the limit before a ten-day trip, and is precise about the two things the limit does not do. It does not stop a run halfway through, and it does not apply per Bot. Everything here was checked as of 23 September 2026 against Cursor's [Grok Bot plans and billing page](https://cursor.com/help/grok-bot/plans), the [pricing page](https://cursor.com/pricing), and the Grok Bot [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises).

## Correct the "no spend cap" line before you plan around it

You may have read that Grok Bot has no spend cap and that pausing routines is the only control. This site said so in August, in more than one article. Half of that sentence is still true and half of it is not, and the half that is wrong is the half people act on.

| Claim you may have read | What the docs say as of 23 September 2026 | Where |
|---|---|---|
| Grok Bot has no spend cap | There is no Grok Bot-specific spend cap, but the account-level On-demand monthly limit caps extra usage | Plans page; teams FAQ |
| Pausing is the only control | Pausing still works, and the monthly limit sits on top of it | Plans page; routines page |
| Running out of weekly usage always stops the Bots | Only when on-demand is off; with it on, work continues and bills through Cursor | Plans page |
| Cursor Pro does not include Grok Bot | Every paid individual Cursor plan includes it: Pro at $20, Pro+ at $60, Ultra at $200 a month | Plans page; pricing page |

The accurate version is narrow on purpose. The teams FAQ answers "Can I set a Grok Bot spend cap?" by saying a separate Grok Bot spend cap is not available today, that account-level on-demand controls apply, and that the split by product lives on the dashboard usage page. The plans page then describes that account-level control in detail and gives it a name, the On-demand monthly limit.

So do not overcorrect either. There is still no slider that caps one Bot, and still no ceiling that applies to Grok Bot alone. What exists is a limit on your whole account's on-demand spending, which Grok Bot's extra usage counts toward. That is a real ceiling, and it is the one this page teaches you to set. If any older page on this site still says nothing caps Grok Bot spending, the plans page and this correction win.

## Read the two pools by both of their names

Most confusion about Grok Bot billing is a naming problem. The plans page says Grok Bot Settings and the Cursor dashboard use different names for the same pools, and it gives the web name for the one that matters most here, the limit.

| In Grok Bot | What the plans page says it is | Name on the Cursor web dashboard |
|---|---|---|
| Weekly usage | Included usage from your plan or linked grant; it resets every week | The docs give no separate web label |
| On-demand usage, with a row reading "Billed through Cursor" | Extra usage after Weekly usage runs out, only if on-demand is enabled | The docs give no separate web label |
| On-demand monthly limit | The ceiling on that extra usage | Spending, then Monthly Limit |

Two points from the plans page are worth holding onto. First, your included weekly usage and the monthly limit are different things with different jobs. Second, emptying the weekly pool does not halt Grok Bot when on-demand is enabled; the work simply moves onto on-demand billing.

The two pools also run on two different clocks. Weekly usage resets weekly. Spending counted against the monthly limit starts over only when your billing cycle resets. A week in which you exhaust your included usage on Wednesday and switch to on-demand for the rest of it draws on a ceiling that will not refill until the cycle turns, which may be three weeks away. Keep both clocks in mind when you pick a number.

In the app, Settings has a Usage & Billing section that shows weekly included usage and on-demand usage for eligible accounts, and the account menu can show Weekly usage at a glance. If neither appears for you, the settings page says to review usage from the Cursor account page or ask your organization's admin.

## Watch Imogen's Thursday stop turn into a Friday setup

Imogen is a freelance UX researcher on Cursor Pro. She runs four Bots: one that schedules research-panel sessions, one that writes a weekday digest of the newsletters she follows, one watching five competitor product pages every hour, and a copy of the [Personal CFO](/bots/personal-cfo) listing that gives her a read-only money briefing each weekday morning.

At 15:20 on a Thursday, the competitor watcher stopped mid-week, and the digest Bot did not answer a message. The screen said she had reached her Grok Bot usage limit. She had never turned on-demand on, so this was the documented behavior: with on-demand off, Grok Bot stops when Weekly usage runs out, and it resets with Weekly usage. Nothing was broken. Her included week was simply gone, and her Bots would stay idle until the reset.

That cost her a Friday digest and a lost afternoon of competitor checks, which she could live with. What she could not live with was the same thing happening during a ten-day fieldwork trip starting that Sunday, with a client expecting the panel scheduler to keep booking sessions. She also did not want the opposite failure, a trip that ended with a bill she had not agreed to.

So at 08:45 on Friday she sat down with a coffee and did the setup this page describes: decide whether on-demand should be on, turn it on with a ceiling, then deal with the fact that the ceiling covers her whole account rather than the one Bot that burned the week.

## Decide whether on-demand should be on at all

Before you set a limit, decide whether you want on-demand at all. The docs describe three states, and each is right for someone.

| State | When Weekly usage runs out | What stops it | Right for |
|---|---|---|---|
| On-demand off | Grok Bot stops and says you have reached your usage limit | Weekly usage resetting | Anyone for whom a pause costs less than an overrun |
| On-demand on, under the limit | Work continues, billed through Cursor | Reaching the Monthly Limit | Anyone whose Bots must keep working through a heavy week |
| On-demand on, limit reached | A run already working can finish; after that, on-demand stops | Raising the limit, or the billing cycle resetting | The state the limit exists to reach safely |

The first row is the cleanest stop the docs describe. If a lost afternoon of Bot work costs you nothing important, leaving on-demand off is a legitimate choice, and it is the one Imogen had made without meaning to.

The second and third rows are for people who, like Imogen, have one Bot whose silence would cost more than its overrun. She did the arithmetic in plain terms. A missed week of panel bookings meant rescheduling interviews and an awkward client call. A capped overrun meant a charge she could name in advance. She chose on.

If your account is on a self-serve Cursor Teams plan, you may already be in the second row without having chosen it: the plans page says on-demand usage is enabled by default for the Teams plan. The section on Teams below covers what that means.

## Turn on the limit in Grok Bot Settings, then finish the card on the web

The plans page gives the steps, and Imogen followed them in order.

First, in Grok Bot she opened Settings and found On-demand monthly limit. It was off, so she chose Enable. You can reach Settings from the account menu, or with Cmd+comma on a Mac and Ctrl+comma on Windows and Linux.

Second, Grok Bot asked her for a card. The plans page says to finish that on the web, so she did not look for a card form inside the app. She opened a browser on her own laptop, went to cursor.com/dashboard, opened Spending, and found Monthly Limit.

Third, she set Monthly Limit. That web field and the On-demand monthly limit in Grok Bot are the same cap under two names, so there is only one number to decide.

If you subscribed to your plan inside the iOS or Android app, the plans page says to set the limit on the web as well, and to enable on-demand there too. The phone is not where store subscribers change this.

One detail about where she did it matters for later. She used a browser on her own laptop, not the browser on the Bots' cloud computer. That computer's browser is shared by every Bot on her account, and she did not want a signed-in Cursor dashboard session sitting where four Bots could reach it. The section on read-only Bots below explains why that separation is worth keeping permanently.

## Pick the figure you would accept losing in a bad month

The docs do not suggest a number for the limit, and this page will not invent one for you. What they do give you is the reason to choose conservatively: the plans page says on-demand usage Grok Bot has already consumed is not refundable, and Cursor's pricing page says on-demand usage is billed in arrears, after the work. Whatever you set is money you are agreeing, in advance, that a bad month may spend.

Imogen chose a figure equal to one month of her Pro plan. Her reasoning was simple and it was hers, not the docs': in the worst case the trip would cost her one extra month of Pro in on-demand, plus the tail of whatever run was in flight when she crossed the line, and she could accept that without a second thought.

Three questions help if you are choosing for the first time. How much would a lost week of your most important Bot cost you in time or money? That is roughly the most the limit is worth protecting. How long is it until your billing cycle resets? A limit set late in the cycle has less time to be used up. And does anything else on the same Cursor account use on-demand? The limit is account-level, and the dashboard usage page shows the split by product, so check that split before you decide how much room Grok Bot will actually have.

If you find yourself setting a large limit every month because your Bots always run out, that is a signal about your plan rather than your limit. Moving from Pro to Pro+ or Ultra raises the included weekly usage, and on-demand bills on top of whichever plan you hold.

## Expect a run in flight to finish past the limit

This is the part of the plans page that is easiest to skip. The limit does not halt a run partway through. A Bot that is already working when you cross the limit can finish past it. After that, on-demand stops until you raise the limit or the billing cycle resets.

For most Bots the overshoot is small, because most tasks are short. For some it is not. A research Bot that opens forty tabs, a Bot reconciling a quarter of transactions, or anything that retries a failing browser step can keep working for a long time on a single turn. If one of those is mid-task when the limit is reached, the docs say it can finish.

That makes task size part of spending control. The limit stops new on-demand work once you are over it. The charter bounds how large any single run can get. Imogen's competitor watcher checked five pages every hour, and each check was small, so its tail was trivial. Her panel scheduler sometimes worked through a long chain of calendar and email steps, so she gave it a rule to stop and report after each booking rather than working through the whole week's list in one turn.

Also note what reaching the limit does not do. It does not add included usage. Nothing you do to the limit changes the size of your Weekly usage, which resets on its own schedule and changes only when your plan or linked grant changes.

## Remember the ceiling covers the account, not one Bot

Here is the part that makes "there is a spend cap now" dangerous if you stop reading at the headline. The On-demand monthly limit is one ceiling for your account. Every Bot you run draws against it together. The docs describe a split by product on the dashboard usage page, and the security FAQ says spend and usage there are broken down by product. Neither page describes a split by Bot.

Imogen's week showed why that matters. The Bot that burned her included usage was almost certainly the hourly competitor watcher: twenty-four runs a day against pages that changed perhaps once a week. With on-demand on and a limit set, that same Bot could have spent the whole limit on its own by the middle of her trip, and then the panel scheduler she actually cared about would have stopped, just as all her Bots did on Thursday. The limit would have worked perfectly and still failed her.

The docs give you no per-Bot cap to prevent that, and the teams FAQ says plainly that no separate Grok Bot cap is available. What they give you instead is cadence, charters, and pausing. The routines page warns against broad listeners, such as a trigger on every new message, because they create noise, consume usage and raise the chance of acting on irrelevant input. The same logic applies to an hourly schedule watching something that changes weekly. For the patterns that burn usage fastest, [what burns on-demand usage](/blog/grok-bot-on-demand-usage) has the long list.

## Put the per-Bot ceiling in the charter and the schedule

Since the account limit cannot tell one Bot from another, each Bot has to carry its own restraint. Imogen changed the competitor watcher's schedule from hourly to twice each weekday, at 09:00 and 16:00 in her timezone setting, which is the timezone routines use. Editing a routine's schedule requires the desktop app, so she did it at her desk on Friday. Then she added usage rules to every Bot's description.

\`\`\`text
Usage rules
- Run only on the schedule you were given. Never add a routine, change a
  schedule, or create an event trigger without asking me first.
- One attempt, one retry. If a step fails twice, stop and report what failed.
  Do not try a third approach on your own.
- Keep each turn small. After each unit of work (one booking, one page check,
  one report section), post the result and stop. Continue only when the next
  unit is due or I reply.
- If a page is blocked by a login, CAPTCHA or error, stop and tell me. Do not
  reload it in a loop.
- Never open cursor.com/dashboard. Never view or change any spending, billing,
  plan or usage-limit setting, and never ask me to let you.
- At the end of each run, report its size in one line: pages opened, steps
  taken, retries used. I read these every Friday.
\`\`\`

The retry line matters most for spend. A browser step that fails and retries without limit turns one task into many, and every retry draws usage just as the first attempt did. The small-turns line is what shrinks the tail past the limit. The dashboard line is the boundary, the one action these Bots never take: touching the ceiling that governs them.

The last line exists because the dashboard will not tell you which Bot spent what. It splits by product, not by Bot, so the only per-Bot record of run size is the one you ask each Bot to keep. A watcher whose one-line reports keep growing is a watcher about to eat your limit.

There is one more safety net, and it is the product's, not yours. The routines page says that after you have been away a long time, Grok Bot may check whether your routines should keep going and pause them if you do not answer. It is useful, but "may" means you cannot plan a trip around it.

## Pause from the phone and edit at the desk

On a trip, the phone is the control you have, so know exactly what it can do. The mobile page says you can open a Bot's profile, inspect each routine's schedule, next run, instruction and Run history, use Active to pause or resume it, and delete a routine. Editing the schedule or instruction, and testing a routine, still require the desktop app. From Settings on the phone you can also review usage.

On the Wednesday of her trip, at 22:10 local time, Imogen checked usage from her phone and saw on-demand climbing faster than she expected, because a competitor had launched a redesign and the watcher's reports had grown long. She could not edit the watcher's instruction from the phone, and she did not need to. She opened its profile and switched Active off. The panel scheduler kept running.

Macs and iPhones share one usage bucket on the same Cursor account, so what she saw on the phone was the same meter as on her laptop. Usage is metered on the Cursor account, not on any one device.

Deleting a routine from the phone is also possible, but it is immediate and has no undo, and a Bot's run records are capped at the twenty most recent per routine. Pause is the right phone action for spend. Deletion is a desk decision.

## Handle Teams, store subscriptions and linked SuperGrok differently

The limit behaves the same everywhere it applies, but who sets it, and where, depends on how you pay.

| How you pay | On-demand default | Where the limit is set | Watch for |
|---|---|---|---|
| Cursor Pro, Pro+ or Ultra bought on the web | The plans page says to choose Enable if it is off | Grok Bot Settings, or cursor.com/dashboard -> Spending -> Monthly Limit | Anything else on the account sharing the same limit |
| A plan bought in the iOS or Android app | Enable it on the web | On the web, per the plans page | The phone is not where this is changed |
| Self-serve Cursor Teams | Enabled by default for the Teams plan | Cursor points to its Team pricing page for on-demand details | Usage draws from the seat's allowance first |
| Linked SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ | A Cursor account setting, billed through Cursor | Same Cursor controls | Linking on top of a Cursor plan adds no usage |
| Enterprise | Managed by your admin | Your admin and account team | Ask before you assume anything here |

The Teams row is the one that surprises people. Because on-demand is on by default for Teams, a member who never touched billing can already be on the second row of the earlier table. The plans page sends Teams admins to Cursor's Team pricing page for the on-demand details, and this page did not verify that page, so if you are a Teams member, ask your admin what limit applies before you schedule anything heavy.

The linked-subscription row corrects a common instinct. If your weekly usage keeps running out, linking a SuperGrok subscription on top of a Cursor plan does not add usage, because the two never stack. The plans page is blunt: on-demand is how you get more Grok Bot usage past the included grant, and linking is not.

## Let a read-only Bot watch the bill without touching it

The limit tells Cursor when to stop. It does not tell you what happened. Two botskills listings fill that gap, and both are built around a boundary that keeps them away from the controls.

The [Subscription Pruner](/bots/subscription-pruner) surveys recurring charges in your receipts each quarter and flags, among other things, an amount that rose between two receipts, showing both. If on-demand shows up on your Cursor receipts as a larger amount than the plan price, that flag is built for it. Its boundary is that it never cancels, never unsubscribes and never replies to a merchant.

Personal CFO reads transactions each weekday morning and flags anything over your alert threshold and any subscription renewed at a higher price. Its boundary is that it never moves money, never pays a bill, and never opens or closes an account. Neither Bot needs your Cursor dashboard to do its job, because both read the charge where it lands: in your mail and on your card.

That is the design this page recommends for every Bot on the account. The monthly limit is a human control. A Bot that can reach it can, in principle, raise it, and the browser on the shared computer is shared by every Bot you run. The docs do not describe any Bot changing billing settings. Keep it that way by never signing the Bots' browser into cursor.com/dashboard, and by adding a narrow Ask first rule under Settings -> General -> Bot -> Auto-review for any action on your Cursor billing pages, knowing that Auto Review is model-based and complements the charter rather than replacing it.

## Answer the reader who says a soft limit is no cap at all

The objection at full strength: a ceiling that a running Bot can pass is not a ceiling, it is a suggestion. If the only clean stop the docs describe is turning on-demand off, then the honest position is to leave it off and call the limit a comfort blanket.

Part of that is right. On-demand off is the only state in which the docs describe Grok Bot stopping when your included usage runs out. If a stopped Bot costs you nothing, leave it off, and this page has already said so.

But the conclusion does not follow for anyone who needs work to continue. The limit's soft edge is narrow and specific: work already running can finish. Once that work ends, on-demand stops until you raise the limit or the cycle resets. The only open-ended part of the overshoot is the size of the runs already in flight when you cross the line, and that is exactly the thing a charter controls. Small turns, one retry, stop on error. Put those rules in place and the tail past the limit stays small next to the limit itself.

A cap with a documented, bounded overshoot that you can shrink further is a cap. What it is not is a per-Bot cap, and that is the distinction worth being pedantic about.

## Run a five-minute check at the start of each month

Set a calendar reminder for the first working day of each month, and do these in order. First, open Grok Bot Settings and read Weekly usage and On-demand usage together, so you know which pool last month's work came from. Second, open cursor.com/dashboard, check that Monthly Limit is still the figure you chose, and read the usage page's split by product. Third, list every routine on every Bot and its cadence, and ask of each one whether it needs to run that often. Fourth, look for any routine you paused on a trip and forgot to resume, or resumed and forgot to fix.

If Weekly usage runs out before the week is over in most weeks for three months running, compare the cost of the next plan up with what on-demand actually cost you. Pro is $20 a month, Pro+ is $60, and Ultra is $200, each with more included weekly usage than the one before. For how the weekly pool works in more detail, [the weekly allowance guide](/blog/grok-bot-weekly-allowance) covers it.

## Stop using this page when Cursor adds a per-Bot control

Grok Bot is in beta, and billing is the part of it most likely to change without the product itself looking different. The billing facts above reflect the plans page as it read on 23 September 2026.

The teams FAQ says a separate Grok Bot spend cap is not available "today". That word is the most likely thing on this page to go stale. If Cursor ships a Grok Bot-specific cap or a per-Bot limit, the section on account-level scope is wrong and the plans page wins. The same applies if the plans page renames the On-demand monthly limit, changes where it is set, or changes the rule that a run in flight can finish past it.

This page also does not cover Enterprise contracts, the details on Cursor's Team pricing page, or refunds beyond noting that consumed on-demand usage is not refundable. For those, read the plans page directly or ask your Cursor account team. And if you are deciding whether Grok Bot is worth a paid plan at all, [the one-person company setup](/blog/one-person-company-grok-bot) is a better starting point than a billing page.

## Frequently Asked Questions

### Does Grok Bot have a spend cap?

Not a Grok Bot-specific one. As of 23 September 2026 the teams FAQ says a separate Grok Bot spend cap is not available, and that account-level on-demand controls apply. The control that exists is the On-demand monthly limit, which caps extra usage after your included Weekly usage runs out. It is set for the whole Cursor account, not per Bot, so one busy Bot can use all of it. The older claim that nothing caps Grok Bot spending is out of date.

### Where do I set the Grok Bot on-demand monthly limit?

In Grok Bot, open Settings and find On-demand monthly limit, then choose Enable if it is off. If the app asks for a card, finish on the web: go to cursor.com/dashboard, open Spending, and set Monthly Limit. That web field is the same cap as the setting in Grok Bot, so there is only one number. If you bought your plan inside the iOS or Android app, the plans page says to enable on-demand and set the limit on the web.

### Does the monthly limit stop a Bot in the middle of a run?

No. The plans page says the limit does not halt a run partway through, and a Bot that is already working can finish past it. After that, on-demand stops until you raise the limit or your billing cycle resets. That makes the size of a single run part of your spending control, so give Bots charter rules that keep turns small, allow one retry, and stop on repeated errors. With on-demand turned off, Grok Bot instead stops when Weekly usage runs out.

### Is on-demand turned on by default for Grok Bot?

For self-serve Cursor Teams plans, yes: the plans page says on-demand usage is enabled by default for the Teams plan. For individual plans the docs do not state a default; they tell you to open Settings, find On-demand monthly limit, and choose Enable if it is off. Check that setting before you rely on either behavior. With on-demand off, Grok Bot stops when Weekly usage runs out and says you have reached your usage limit until it resets.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Cursor Hobby vs Cursor Pro for Grok Bot: Pro Includes It Now, Hobby Does Not',
  description:
    'Cursor Pro at $20 a month now includes Grok Bot, and Cursor Hobby still does not. What changed, what the free plan can still do, and how to check your own plan fast.',
  date: '2026-09-23',
  category: 'Guide',
  content: `
# Cursor Hobby vs Cursor Pro for Grok Bot: Pro Includes It Now, Hobby Does Not

> **Corrected 23 September 2026.** Until today this page argued that Cursor Pro at $20 a month did not include Grok Bot, that Pro+ at $60 was the cheapest paid way in, and that a Pro subscriber who could not get in should stop reinstalling and upgrade. The Cursor plans page now says the opposite about Pro: every paid individual Cursor plan includes Grok Bot. Cursor Hobby, the free plan, still does not. The old walkthrough has been removed rather than patched, because the claim it was built on is false.

If your Cursor billing page says Pro, Pro+ or Ultra, you already have Grok Bot. Sign in to the Grok Bot app with that same Cursor account and the product is there. If your billing page says Hobby, you do not have standing access, and most of this page is about what Hobby can still do, when $20 is worth paying, and how to check your plan without guessing.

Every fact below was read on 23 September 2026 from the [Cursor plans page for Grok Bot](https://cursor.com/help/grok-bot/plans), [Cursor pricing](https://cursor.com/pricing) and the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq). Grok Bot is in beta and its plan rules changed between the August and September checks, so treat every price here as dated.

## Read your plan name, then find it in this table

If you searched for Grok Bot and Cursor Pro together, you probably hold Pro already and want to know whether you are in. That question used to have a bad answer. It now has a short one. Access follows the plan on the Cursor account you sign in with, and the plans page describes a single Grok Bot difference between the three paid individual plans: the size of the weekly usage grant.

| Cursor plan (23 Sep 2026) | Monthly price | Grok Bot | Weekly usage for Grok Bot |
|---|---|---|---|
| Hobby | Free | Not included | None standing; a one-time trial is available |
| Pro | $20 | Included | Weekly usage, below the Pro+ tier |
| Pro+ | $60 | Included | Generous weekly usage, below Ultra |
| Ultra | $200 | Included | Highest weekly usage |
| Teams (self-serve) | See Cursor Team pricing | Included for every member | Follows the seat's allowance |
| Enterprise | Through Cursor sales | Managed by your admin | Kept on the Cursor contract |

The prices come from the pricing page, which also says they exclude applicable taxes. The Grok Bot columns come from the plans page. The two pages agree with each other: pricing lists Grok Bot access under Pro, higher Grok Bot usage limits under Pro+, and the highest Grok Bot usage limits under Ultra.

Teams has its own rules, including the fact that no member needs a Premium seat for Grok Bot. Those live on [Grok Bot on Cursor Teams](/blog/cursor-teams-premium-and-grok-bot), and this page stays with individual plans.

## Stop treating Pro and Pro+ as a door and a wall

The old version of this page drew a wall between Pro and Pro+. That wall is gone. Pro, Pro+ and Ultra all sign in to Grok Bot the same way, with the same Cursor account, and the plans page names one difference between them for Grok Bot: how much weekly usage each includes.

That changes how you shop. On the old reading, a Pro subscriber had to move from $20 to $60 a month to get anything at all. On the current reading, a Pro subscriber already has the product, and the only open question is whether the Pro weekly tier covers the work. That is a usage question you can answer with a week of real runs. It is not an eligibility question you answer by squinting at a comparison table somebody saved in August.

One trap on the pricing page deserves a paragraph. Pro+ is described there as three times Pro limits on Agent, and Ultra as twenty times. Those multipliers describe Agent in the Cursor editor. The Grok Bot lines on the same page say only access, higher and highest, and the plans page publishes no size for any Grok Bot tier. Do not assume your Grok Bot allowance triples because you moved to Pro+. Nothing in the docs says it does, and nothing says it does not. Measure your own week instead.

The $20 also buys things that have nothing to do with Grok Bot. The pricing page lists extended Agent limits, access to frontier models, cloud agents, and MCPs, skills and hooks for Pro. Those belong to the editor, and if you already wanted them, Grok Bot arrives as part of a plan you would have bought anyway. If you did not, weigh the $20 against Grok Bot alone, which is the harder test and the more honest one.

## Keep Hobby in its lane: the free editor, one trial, nothing standing

Hobby is Cursor's free plan: no card required, limited Agent requests, access to Composer. Grok Bot is not in its list, and the plans page says Grok Bot is included on every paid individual plan, which Hobby is not.

What a Hobby account can still do with Grok Bot is narrower than it looks from the download page.

It can install the desktop app from x.ai/bot and sign in. A successful sign-in proves your Cursor identity. It says nothing about access.

It can use the one-time Grok Bot trial. The trial is a usage credit with a 7-day window on top of it. The credit is drawn down by agent steps and tokens, not by the number of messages you send, so a single long job can consume most of it. Used credit is not restored or topped up. The trial never turns into a paid plan and costs nothing to cancel. On a free-plan account the plan screen shows Cancel Trial, which ends the trial at once, removes whatever credit is left, and means you cannot claim the trial again.

It can receive Grok Bot usage from a linked individual subscription, which has its own section further down because the link cannot be undone.

What Hobby cannot do is carry Grok Bot past the end of the trial on its own. When the credit or the window runs out, the account is a free editor again with no Grok Bot usage. The plans page lists the ways forward: Pro, Pro+, Ultra, a Teams plan, or a linked individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ subscription.

One more thing the docs do not say, so plan around it: they describe no separate trial workspace, and your Bots, conversations and cloud computer are tied to your Cursor account rather than to the trial. Upgrading keeps you on the same account. But the docs make no promise about what happens to trial-era Bots on an account that never pays, so do not leave anything you need only on a trial account.

## Spend the Hobby trial on a job that shows you the meter

The trial is the only free look you get, so spend it on information you will use when you decide whether to pay. The most useful thing a trial can tell you is how much of a weekly grant your real work would consume, and it can only tell you that if you run jobs the same size as your real work.

Start with one small, scoped task, then check the usage on the plan screen before you start anything long. The plans page gives the same advice in its own words: scope tight first, scale up once you can see what each task uses. A job that opens three public pages and writes one summary teaches you more than a job that crawls forty pages, because you can repeat it, compare two runs, and see the cost of one unit of work.

Pick work that cannot hurt anything while you learn. Public pages, a draft you read yourself, no sending, no publishing, no purchases. Do not connect a mailbox or a bank account during a trial you may abandon. Browser sessions and files live on the cloud computer assigned to your account, and deleting a Bot does not remove them.

If the trial ends before you have learned anything, that is information too. It means the jobs you tried were bigger than you thought, and the first thing to change on any paid plan is the size of the job, not the size of the plan.

## Keep the Grok Bot trial and an App Store intro offer apart

Two different things get called a free trial, and only one of them is harmless to forget about.

The Grok Bot trial described above is a usage credit. It never becomes a paid plan. An App Store introductory offer that you start inside the iOS app is Apple's, not Cursor's. It turns into a paid Apple subscription when the offer ends unless you cancel it first in Apple ID -> Subscriptions, and Cursor cannot cancel or refund it for you. Android has no in-app trial at all.

If you are on Hobby and exploring from an iPhone or an iPad, read the screen before you tap. The plan screen trial and a store offer are different buttons with different consequences, and only the store one can bill you later. [The iPad page](/blog/grok-bot-ipad-status) covers the iOS app on a tablet, which the docs now support.

## Walk Kenji from a spent trial to a $20 decision

Kenji writes API documentation for three client teams as a contractor. He has used Cursor Hobby since spring for small edits in docs repositories, and the free plan's Agent limits have been enough. He does not pay for SuperGrok. None of his clients has put him on their Cursor Teams plan.

On a Monday afternoon he installs Grok Bot on his Mac, signs in with the Hobby account, and starts the trial. His first Bot gets a big brief: read the public changelogs of all three clients for the past quarter and draft a help-article change list for each. The run takes most of the afternoon. By evening the plan screen shows the trial credit nearly gone. Nothing failed. One large job used most of the credit, which is exactly what the plans page warns can happen.

On Wednesday morning he finds a comparison table from August in his bookmarks. It says Pro does not include Grok Bot and Pro+ at $60 is the cheapest paid path. He opens the Pro+ checkout. Before paying he checks the live plans page, sees Pro listed with access included, and closes the tab.

On Thursday he redesigns before he pays. One client per run, the last seven days only, one output document. He runs that shape on the remaining credit and reads the meter after each run. Each run now costs a small, repeatable slice instead of a surprise.

On Friday he upgrades to Pro at $20. He opens the On-demand monthly limit row in Grok Bot Settings, finds it off, and leaves it that way for the first month. He schedules one run per client per week.

| When | What Kenji did | What he saw | What it taught him |
|---|---|---|---|
| Monday 14:00 | Installed, signed in on Hobby, started the trial | App and sign-in worked | Sign-in proves identity; the trial is the access |
| Monday 18:30 | Ran a quarter of changelogs for three clients in one job | Trial credit nearly gone | Credit goes by steps and tokens, not messages |
| Wednesday 09:10 | Opened a Pro+ checkout from an August table | Live plans page lists Pro as included | Check the live page, never a saved table |
| Thursday 16:00 | Ran one client, one week, one document | A small, repeatable meter reading | Size the job before sizing the plan |
| Friday 10:00 | Upgraded to Pro, left on-demand off | Weekly usage on the plan screen | Stop at the weekly limit until he knows his week |

Kenji pays $20 a month instead of $60 because he read the live page, and he got a better answer to his real question, which was never access. It was how big one unit of his work is, and whether a week of those units fits the cheapest plan that includes the product.

## Price the Pro week honestly: weekly usage first, on-demand only if enabled

Paid access comes with Weekly usage, an included grant that resets every week. When it runs out, Grok Bot can keep going on On-demand usage, but only if on-demand is enabled on your Cursor account. That extra usage is billed through Cursor from model and token cost, and it counts toward a cap the app calls the On-demand monthly limit. On the web the same cap appears under Spending as Monthly Limit on cursor.com/dashboard.

Three details decide whether a Pro month surprises you.

First, the limit is not a hard stop in the middle of a run. A Bot that is already working can finish past the monthly limit. After that, on-demand stops until you raise the limit or the billing cycle resets.

Second, if on-demand is off, Grok Bot stops when weekly usage runs out, the app tells you that you have reached your Grok Bot usage limit, and access comes back when weekly usage resets. The docs do not say whether on-demand starts on or off for individual plans, so open the On-demand monthly limit row in Grok Bot Settings and look, rather than assuming either way.

Third, there is no separate spend cap for Grok Bot. The account-level on-demand controls are the controls, and the per-product split of spending lives on cursor.com/dashboard/usage. On-demand usage that Grok Bot has already consumed is not refundable, so the time to set the limit is before the busy week, not after it.

| Label | Where you see it | What it means for a Pro account |
|---|---|---|
| Weekly usage | Usage & Billing in Grok Bot Settings, or the account menu | The included Pro grant; resets weekly |
| On-demand usage, Billed through Cursor | Usage & Billing in Grok Bot Settings | Extra usage after the weekly grant, only if enabled |
| On-demand monthly limit | Grok Bot Settings | The cap on extra usage; choose Enable if it is off |
| Spending, then Monthly Limit | cursor.com/dashboard | The same cap, set on the web; a card may be needed there |
| A message that you reached your Grok Bot usage limit | The app, when on-demand is off | Weekly grant used; wait for the reset or enable on-demand |

For the arithmetic of what drives usage in the first place (run frequency, pages read per run, retries after failures), [Grok Bot cost](/blog/grok-bot-cost) is the working page.

## Choose between Pro, Pro+ and Ultra by the week you actually run

Because the Grok Bot difference between the three plans is the weekly tier, and because no tier size is published, the honest way to choose is to run your real week on the cheapest plan that includes the product and watch what happens to the meter.

If your jobs finish inside the Pro grant with room left, stay on Pro. If you hit the weekly limit, look at the jobs before you look at the plans. A five-minute schedule nobody needed, a Bot that re-reads an entire site on every run, or a retry loop against a page that keeps failing will burn the same usage on every tier, and upgrading only lets them run longer.

If the jobs are already tight and you still hit the limit most weeks, the docs give you two options. You can raise the tier by upgrading within Cursor plans; the plans page uses Pro+ to Ultra as its example and says the upgrade raises included usage to the new tier. Or you can enable on-demand with a monthly limit you have chosen yourself. Which is cheaper depends on how far past the grant you run, and only your own meter knows that.

Downgrades run the other way and take effect after the same refresh window, up to 24 hours. Usage you already spent that week still counts, and a mid-cycle downgrade with usage gets no prorated refund. So if you are on Pro+ today only because of the old version of this page, pick a point in the week when a lower tier will not strand work you need before the reset.

## Link an individual SuperGrok or X Premium+ only after reading the permanence line

There is a third way into Grok Bot, and it matters most to Hobby users: a usage grant from a linked subscription. From the Grok Bot plan screen you can link an individual SuperGrok, SuperGrok Plus or SuperGrok Heavy account, or an X Premium+ account. SuperGrok Lite does not include Grok Bot. SuperGrok Team and SuperGrok Enterprise cannot link at all.

A link is a usage grant, not a Cursor plan. Linking does not create a Cursor plan, so a Hobby account stays on Hobby and its Grok Bot usage comes from the linked grant alone. If you already pay for Pro, Pro+ or Ultra, that plan stays exactly as it is after linking.

Two rules decide whether linking is smart for you.

The link is permanent. Once created it cannot be unlinked, and it cannot be moved to a different Cursor account, so sign in with the account you intend to keep before you link. A contractor who may later work under a client's Teams login should decide which Cursor account will still be theirs in a year before tying a personal subscription to it.

Plans do not stack. A Cursor plan and a linked subscription never add their usage together. If you hold both, Grok Bot uses whichever grant has more usage, and linking on top of a paid Cursor plan adds nothing. Both subscriptions keep billing on their own; only the usage grants refuse to combine.

| You hold | Grok Bot usage comes from | Does anything add up? |
|---|---|---|
| Hobby only | Nothing once the one-time trial ends | There is no usage to add |
| Hobby plus a linked individual SuperGrok or X Premium+ | The linked grant alone | Linking created no Cursor plan |
| Pro, Pro+ or Ultra | The Cursor plan's weekly tier | Upgrading within Cursor plans raises the tier |
| A paid Cursor plan plus a linked subscription | Whichever grant has more usage | No; the grants never combine |
| Hobby plus SuperGrok Lite | Nothing | Lite does not include Grok Bot |

## Check the account, not only the plan, before you blame the installer

When someone pays for Pro and is still refused, the first suspect is the account, not the plan. Grok Bot uses the Cursor account that completed sign-in. If your paid plan sits on a work login and you signed in with a personal one, you are signed in to an account that does not hold the plan, however familiar the name on it looks.

On desktop, Add account in the account menu saves a second account, Switch account appears once more than one is saved, and Settings lists every saved account. If your organization requires single sign-on, finish the organization login instead of signing in with a personal account. If an error mentions Legacy Privacy Mode, the account uses a data mode that does not allow the cloud storage Grok Bot needs, and the Cursor data setting has to change before anything else will work.

Then check the device, briefly, knowing it cannot change your plan. Desktop apps exist for macOS, Windows and Linux. The companion app runs on iPhone with iOS 18 or later and on Android 9 or later, and the iOS app also runs on iPad with iPadOS 18 or later. None of these changes what your plan includes. A clean install on the wrong account is still the wrong account, and reinstalling on a second machine only reproduces the mismatch.

## Stay on Hobby when nothing repeats

Here is the case for not paying, stated as strongly as it deserves. You use Cursor for the editor. You tried Grok Bot on the trial, it did one useful thing, and you do not have a job that repeats weekly. Twenty dollars a month for a product you open twice a quarter is waste, and Hobby is a perfectly good way to use the editor.

That argument is right, and nothing on this page should talk you out of it. Grok Bot earns its keep on recurring work: a weekly brief, a Monday change list, a morning pass over an inbox. If you cannot name the recurring job, stay on Hobby and come back when you can.

Where the argument goes wrong is in two assumptions people attach to it. The first is that the trial can be rerun later when a real job appears. It is one-time, and cancelling it ends it for good. The second is that coming back will cost the old $60. It will not. The day a job starts repeating, $20 is the price of the door, and the decision you are postponing is a small one.

## Answer the reader who bought Pro+ on the old advice

Some readers followed the earlier version of this page and moved from Pro to Pro+ purely to get Grok Bot. The strongest form of their complaint is simple: you told me $60 was the cheapest way in, I paid it, and now you say $20 would have done.

That complaint is fair, and the fix depends on one reading. Pro+ is not wasted if you use its larger weekly tier, and it is waste if you do not. Open the Weekly usage meter at the end of a normal week. If you finish most weeks with a large share of the Pro+ grant unused, downgrade to Pro, timed so the refresh window does not land in the middle of work you need. If you run close to the Pro+ grant most weeks, the old advice sent you to the right plan for the wrong reason, and you should stay.

Do not try to solve the problem by linking a SuperGrok subscription on top of Pro+ in the hope of making the $60 go further. Plans do not stack, so the link adds no usage, and it cannot be undone once it exists.

## Write the boundary into the first paid week

Paying for Pro usually comes right before connecting a real account, and that is the moment a Bot's reach changes. Before that step, write down the one action the Bot never takes without you. That line is what makes it safe to leave a weekly job running while you do other work.

For Kenji the dangerous action is publishing. His Bot reads client changelogs and merged pull requests and proposes help-article edits. If it ever pushed a docs commit or edited a live help centre page, a client would see an unreviewed change under Kenji's name. So publishing stays human. His brief follows the shape of [Help Center Updater](/bots/help-center-updater), which shows current text beside proposed text and never publishes, and he checks every link in the result with a pass shaped like [Citation Checker](/bots/citation-checker), which reports dead links and mismatched quotes without editing the draft.

He also takes the shared computer seriously. All of one user's Bots share one cloud computer, including files, browser sessions and command-line credentials, and separate Bots are not a security boundary. If one client's contract requires that its credentials be unreachable from work for another client, three Bots on one account do not meet that requirement. The docs' answer is that a workload which needs its own credential set needs its own Cursor user. [Screens are work surfaces, not security boundaries](/blog/screens-are-not-boundaries) goes deeper on why a separate Bot is not a separate room.

\`\`\`text
Name: Client A Docs Drift
Job: Weekly help-article change list for Client A only

Sources: Client A public changelog, plus the merged pull requests in the
repositories listed below. Nothing else.
Window: the last 7 days. Never re-read older weeks.

Output: one document in /workspace/client-a/ with, for each affected
help article, the current published text, the proposed text, and the
pull request that changed the behaviour. Mark anything the diff does
not prove as "unverified, ask the author".

Size: one client per run. If a run would need more than 20 pages,
stop and tell me the count instead of continuing.
(20 is my own number, not a product limit.)

Boundary: never publish, edit or unpublish a help article, never push
a commit, never open a pull request, never email or message anyone at
Client A. Every change waits for me to paste it.
If a page needs a login, stop and ask me to take over the computer.
\`\`\`

The size line is Kenji's own number, chosen so a single run stays a known slice of the weekly grant rather than an open-ended crawl. [How to write a boundary line a Bot cannot argue with](/blog/how-to-write-a-boundary-line) covers phrasing the final paragraph so it holds when a page tempts the Bot to do more.

## Run a two-minute plan check that can fail

Run these against today's billing page, not last month's memory of it. Each row has a failing answer, and the failing answer names the thing to fix.

| Check | Pass | Fail, and what to do |
|---|---|---|
| Plan name on the Cursor billing page | Pro, Pro+, Ultra or a Teams seat | Hobby: spend the trial, upgrade, or link an individual subscription |
| Email that completed Grok Bot sign-in | The account that holds the plan | A different account: add and switch accounts on desktop |
| Weekly usage in Settings or the account menu | A meter with your plan's grant | No meter: confirm access on the plans page, or ask your admin |
| On-demand monthly limit row | Set the way you intended | Unknown: open it and decide before the first busy week |
| Cancel Trial on the plan screen | Gone once you pay | Still showing: the account is on the free plan |

If every row passes and Grok Bot still refuses you, the plan is not the problem. The sign-in steps on the [Grok Bot troubleshooting page](https://docs.x.ai/grok-bot/troubleshooting) are the next stop, starting with keeping the app open while browser authentication finishes.

## When this page stops applying

As of 23 September 2026, the plans page says every paid individual Cursor plan includes Grok Bot, Hobby is the free plan and is not in that group, and the pricing page lists Pro at $20, Pro+ at $60 and Ultra at $200 a month. Grok Bot is in beta, and the old version of this page is proof that eligibility can change inside a month.

This page stops applying if the plans page changes the Hobby row, if the pricing page moves Grok Bot off Pro, or if the weekly tiers are renamed or given published sizes. Check [the plans page](https://cursor.com/help/grok-bot/plans) and [Cursor pricing](https://cursor.com/pricing) before you pay. It does not cover Teams seat questions or Enterprise contracts; those belong to the Teams page and to your Cursor account team.

## Frequently Asked Questions

### Does Cursor Pro include Grok Bot?

Yes. As of 23 September 2026 the Cursor plans page says Grok Bot is included on every paid individual Cursor plan, and Cursor Pro at $20 a month is the cheapest of them. Sign in to the Grok Bot app with the same Cursor account that holds the Pro plan and access is there, with weekly usage below the Pro+ tier. Earlier versions of this page said Pro was excluded; that was the August reading and it is false now. If Pro is on your invoice and Grok Bot refuses you, check which Cursor account completed sign-in first.

### Does Cursor Hobby include Grok Bot?

No. Cursor Hobby is the free plan, and Grok Bot is included only on paid individual plans and on Cursor Teams. A Hobby account can still install the app, sign in and use the one-time Grok Bot trial, which is a usage credit with a 7-day window that never turns into a paid plan. After the trial, a Hobby account has no Grok Bot usage unless you upgrade to Pro, Pro+ or Ultra, join a Teams plan, or permanently link an individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ subscription.

### What is the difference between Pro, Pro+ and Ultra for Grok Bot?

Only the weekly usage tier. Pro includes Grok Bot with weekly usage below the Pro+ tier, Pro+ has generous weekly usage below Ultra, and Ultra has the highest. All three sign in the same way with the same Cursor account. The docs publish no size for any tier, and the three times and twenty times figures on Cursor's pricing page describe Agent limits in the editor, not Grok Bot. The practical way to choose is to run your real week on Pro, watch the Weekly usage meter, and upgrade only if tight jobs still hit the limit.

### Can I use Grok Bot on Hobby by linking SuperGrok or X Premium+?

Yes, with care. You can link an individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ subscription from the Grok Bot plan screen, and Grok Bot usage then comes from that linked grant while the Cursor account stays on Hobby. SuperGrok Lite does not include Grok Bot, and SuperGrok Team or Enterprise cannot link. The link is permanent: it cannot be undone or moved to another Cursor account. It also never stacks with a paid Cursor plan, so linking on top of Pro adds no usage at all.
`,
};

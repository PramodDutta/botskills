import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Link SuperGrok or X Premium+ to Grok Bot: A Permanent Link That Does Not Stack',
  description:
    'Link SuperGrok or X Premium+ to Grok Bot only after a one-minute check. The link is permanent, never moves accounts, and adds no usage on top of a Cursor plan.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Link SuperGrok or X Premium+ to Grok Bot: A Permanent Link That Does Not Stack

Linking a SuperGrok or X Premium+ subscription to Grok Bot is a short flow, and it is one of the few clicks in the product you can never take back. The link cannot be removed, cannot be moved to another Cursor account, and never adds usage on top of a Cursor plan you already have.

That makes the minute before the click more important than the click. This page shows which subscriptions qualify, where the link control lives on desktop and phone, the one-minute check to run first, and what happens afterwards when you upgrade, downgrade, or lose a Teams seat. It follows one freelancer who nearly linked his personal subscription to a client's account. The sources, all re-read as of 23 September 2026, are Cursor's [Grok Bot plans and billing page](https://cursor.com/help/grok-bot/plans), the Grok Bot [get started page](https://docs.x.ai/grok-bot/get-started) and the [mobile page](https://docs.x.ai/grok-bot/mobile).

## Answer "does SuperGrok include Grok Bot" with the link, not the subscription

The short answer has changed since August. Individual SuperGrok subscriptions, and X Premium+, can grant Grok Bot usage, but only by linking to a Cursor account. You still sign in to Grok Bot with Cursor, and the usage is metered on that Cursor account, not on Grok or X. If you had no paid Cursor plan before linking, you still do not have one afterwards; your Grok Bot usage simply comes from the linked grant.

The plans page lists exactly which subscriptions can link and how their usage compares.

| Subscription | Can it link to Grok Bot | Linked usage, in the plans page's words |
|---|---|---|
| Individual SuperGrok Heavy | Yes | Highest linked usage |
| Individual SuperGrok Plus | Yes | Generous linked usage, below Heavy |
| Individual SuperGrok | Yes | Linked usage, below Plus |
| X Premium+ | Yes, by linking your X account | Linked usage, below SuperGrok Plus |
| SuperGrok Team or SuperGrok Enterprise | No | Linking is not supported |
| SuperGrok Lite | No | Grok Bot is not included; upgrade, then link |

Two details in that table trip people. The word "individual" is load-bearing: a SuperGrok Team or SuperGrok Enterprise subscription cannot link at all, even though it sounds like the bigger plan. And SuperGrok Lite is simply outside Grok Bot; the plans page says to upgrade to SuperGrok, SuperGrok Plus or SuperGrok Heavy and then link.

Some Grok Bot pages still mention only the SuperGrok tiers when they list eligible plans. The plans page, which the teams page calls the canonical plan and usage matrix, includes X Premium+, and so does this article.

This page will not print a price for any SuperGrok tier or for X Premium+, because those subscriptions are billed by xAI or X, and their prices are theirs to publish. The only prices here are Cursor's: Pro at $20 a month, Pro+ at $60 and Ultra at $200, each of which includes Grok Bot on its own.

## Run the one-minute check before any Link button

The plans page gives the whole reason for this check in one line of advice: sign in with the correct Cursor account before linking, because the link is permanent once created. Six questions cover the failure modes the plans page describes. Copy them somewhere you will see them before you click.

\`\`\`text
Before I press any Link button
1. The account menu shows the Cursor account I will keep for years.
   Not a client-issued address, not a shared login, not a test account.
2. If that account already has Cursor Pro, Pro+, Ultra or a self-serve
   Teams seat, I stop. A link adds no Grok Bot usage on top of it.
3. That account is not a request-based Teams seat or an Enterprise seat.
   Those keep Grok Bot on the Cursor contract and take no personal link.
4. My subscription is individual SuperGrok, SuperGrok Plus, SuperGrok
   Heavy, or X Premium+. Not SuperGrok Lite, not SuperGrok Team or
   SuperGrok Enterprise.
5. Any Grok or X sign-in the linking flow asks for is the account that
   actually pays for that subscription.
6. I accept that this link can never be removed or moved to another
   Cursor account.
\`\`\`

Question 1 catches the expensive mistake. Question 2 catches the wasted one: linking a subscription to an account whose Cursor plan already includes Grok Bot does nothing for your usage. Question 3 catches the one that will not work at all. Question 4 catches the Lite and Team subscriptions that were never eligible. Question 5 catches the household where two people have Grok accounts on one laptop. Question 6 is there so you say it to yourself before the click, not after.

If any answer is no, do not link tonight. Waiting costs you, at most, the linked usage you would have had in the meantime, and an unlinked subscription can still be linked later. A linked one can never be unlinked.

## Watch Dario almost link a client's account

Dario is a freelance data engineer. He pays for an individual SuperGrok Plus subscription himself, on his personal Grok account. He has two Cursor accounts saved in his Grok Bot desktop app. One is personal, under his own email, on Cursor's free plan. The other was issued by a client for a six-month contract, under the client's email domain, with a seat on the client's self-serve Cursor Teams plan. He had used that one with Grok Bot for a pipeline-monitoring Bot during the contract.

At 19:30 on a Monday in early September he decided to set up personal Bots of his own, for newsletter research and for chasing his own overdue invoices, and to power them with the SuperGrok Plus he was already paying for. He opened Grok Bot, went to Settings, and opened Usage & Billing, looking for the link control. Only then did he run the check he had pasted into his notes the week before.

Question 1 stopped him. The account menu showed the client's address. The last thing he had done in Grok Bot was client work, and that account was still the active one.

Think through what that link would have done. It would have been permanent, on an account under someone else's domain. It would have added no Grok Bot usage while his Teams seat existed, because a link does not add usage on top of a seat. When the contract ended and the client's admin removed his seat, the plans page says the Teams grant would end, and that a link already on the account does not turn into a larger grant or restore the Teams allowance. His SuperGrok Plus would have kept billing him through xAI either way. Whether he could even sign in to a client-issued account after the contract is a question for the client's admin, and not one the Grok Bot docs answer.

The check cost him about forty seconds. Skipping it would have attached his own subscription, forever, to an account he did not control.

## Switch to the account you will keep, then link it

At 19:34 Dario opened the account menu and chose Switch account, then selected his personal account. The desktop app supports several saved accounts this way, and Settings lists the same accounts with Remove on the inactive rows. He read the email in the account menu aloud, which sounds silly and is the entire point of question 1. Then he ran the rest of the check: free Cursor plan, so a link would actually add usage; not a Teams or Enterprise seat; individual SuperGrok Plus; the Grok account that pays for it is his.

Where the link control lives depends on the device.

| Device | Where the link control is | What happens next |
|---|---|---|
| Desktop (macOS, Windows, Linux) | Settings -> Usage & Billing, a Link button named for your tier; the docs' example reads Link SuperGrok Heavy | Complete the linking steps it opens |
| iPhone, Android, and the iOS app on iPad | The access screen, when it asks, offers Link Grok Account | Finish linking in the browser, then choose Finished Linking? Refresh My Status |
| X Premium+ on any device | The plans page says to link your X account from the Grok Bot plan screen | The docs do not print a separate button label for X |

On desktop, the get started page describes a button under Settings -> Usage & Billing whose label names the SuperGrok tier that applies to your account, with Link SuperGrok Heavy as its example. Dario chose it at 19:36, completed the steps it opened while signed in to his personal Grok account, and came back to the app.

On a phone the flow is spelled out more fully. After you sign in with Cursor, the access screen asks for a link if your access comes from a SuperGrok subscription. You choose Link Grok Account, finish linking in the browser, return to the app, and choose Finished Linking? Refresh My Status so the app checks again.

Cursor's help center also has a separate article on linking SuperGrok for Grok Bot, which the plans page points to. This page did not re-read it; the plans, get started and mobile pages are the sources here.

## Read the meter to confirm the link took

Do not trust the click. Read the meter. At 19:39 Dario opened Usage & Billing again and looked at Weekly usage. The plans page explains what to look for: a SuperGrok, SuperGrok Plus or SuperGrok Heavy title on the Weekly usage meter is the linked grant. It is not a second Cursor plan and it does not mean you now have two pools.

The account menu can also show Weekly usage at a glance, so you do not have to open Settings every time. And because usage is metered on the Cursor account, the same meter is what you will see on the phone; the plans page says macOS and iOS share a single usage bucket tied to the signed-in account.

If the meter does not change, the phone flow's Finished Linking? Refresh My Status is there for exactly that moment. On desktop, the docs do not describe a refresh control, so reopen Usage & Billing after a few minutes, and if nothing has changed, contact support with the same three items the plans page asks for when an upgrade does not show: your Cursor account email, your Grok account email, and a screenshot of Weekly usage. What you should not do is try linking a second time from another account "to see if that works". Every link attempt that succeeds is permanent.

## Accept that the link cannot be undone or moved

The plans page does not soften this. A SuperGrok or X Premium+ link is permanent once created. You cannot unlink it, and you cannot move it to a different Cursor account. The same page says you cannot unlink to force a refresh after an upgrade, which tells you the rule has no maintenance exception either.

Permanence would matter less if Cursor accounts were one per person for life. They are not. People have work and personal accounts, client-issued accounts, accounts from an old employer's Teams plan, and throwaway accounts made for a trial. Any of those can be the active account in a desktop app on the evening you decide to link.

It also matters because the link and the subscription are separate things. The link grants usage while the SuperGrok or X Premium+ subscription stays active, according to the plans page. The subscription itself keeps billing through xAI or X on its own schedule. A link on the wrong account therefore does not just waste a click. It points a subscription you keep paying for at an account you may stop using.

The docs do not describe any support process that reverses a link, and this page will not suggest one exists. Treat the link as final, because the plans page does.

## Stop expecting a link to add to a Cursor plan

The second half of the title is the rule that catches people who already pay for Cursor. A Cursor plan and a SuperGrok or X Premium+ link do not stack. They never add Grok Bot usage together. The plans page gives worked examples, and the table below collects them.

| You have | You add | Extra Grok Bot usage |
|---|---|---|
| Cursor Pro+ | A SuperGrok Plus link | None |
| A SuperGrok Heavy link | Cursor Ultra | None |
| Cursor Pro, Pro+, Ultra or a self-serve Teams seat | Any qualifying link | None |
| An X Premium+ link | A Cursor plan | None, and none the other way either |
| Cursor Pro+ | An upgrade to Ultra | Yes: Ultra's tier, because that is a change of plan, not a second grant |
| A SuperGrok link | An upgrade to SuperGrok Plus or Heavy | Yes, after a refresh window of up to 24 hours |

When you hold both, the Grok Bot FAQ says Grok Bot uses whichever has more usage. That is a comparison, not a sum. It also leaves a question the docs do not answer: which is bigger. The plans page ranks the Cursor tiers against each other and the linked tiers against each other, but it does not publish how a Cursor tier compares with a linked one, so do not buy a second subscription on the assumption that it will be the larger of the two.

The documented ways to get more Grok Bot usage than your current grant are a bigger grant of the same kind, meaning a Cursor plan upgrade, a SuperGrok upgrade or a higher Teams seat, and on-demand usage billed through Cursor. The plans page says directly that on-demand is how you get past the included grant and that linking on top of a Cursor plan is not.

## Keep paying for both only when you use both

Linking does not change or cancel your Cursor plan. If you pay for Pro, Pro+ or Ultra, that subscription stays in place after linking. If you are on a Teams seat, the seat stays. The plans page adds the part that costs money: your Cursor subscription and your SuperGrok or X Premium+ subscription both stay active and keep billing on their own, and buying one does not cancel the other. Only the usage grants refuse to combine.

So if you hold both only for Grok Bot, you are paying twice for one grant. Holding both can still be the right decision. It is reasonable to keep SuperGrok for Grok itself and a Cursor plan for the editor, with Grok Bot riding along on one of them. The decision is about what else each subscription does for you, not about Grok Bot.

If you decide to drop one, the [Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor) listing is built for exactly that question. You name one subscription, and it returns the cancel path, what you lose, whether your price is grandfathered, and the date to act, all from your receipts. Its boundary is that it never cancels, downgrades, pauses or contacts the vendor. It hands you the path, and you walk it.

Refunds follow the billing, not the link. Cursor plan refunds follow Cursor's refund policy. SuperGrok is billed by xAI, and the plans page points to xAI's FAQ; X Premium+ refunds go through X. Cursor cannot refund an App Store or Google Play charge; those go to Apple or Google.

## Give an upgrade 24 hours before you touch anything

Nine days after linking, Dario's research Bots were running out of Weekly usage by Thursday, so he upgraded his subscription from SuperGrok Plus to SuperGrok Heavy on xAI's side. For most of the next day, Usage & Billing still showed Plus. The plans page explains that the grant follows the linked subscription, but the Grok Bot screen can keep showing the old tier for a while.

| Event | What changes | How long the docs say to allow | What to do meanwhile |
|---|---|---|---|
| You upgrade SuperGrok after linking | Weekly usage moves to the new tier | Up to 24 hours | Keep using Grok Bot; do not relink; you cannot unlink to refresh |
| You downgrade SuperGrok, Plus or Heavy | The linked grant drops; usage already spent this week still counts | The same window, up to 24 hours | If you are past the new tier, included usage stops; on-demand continues only if enabled |
| The old tier still shows after 24 hours | Nothing more will change on its own | Already past the window | Contact support with your Cursor account email, your Grok account email, and a screenshot of Weekly usage |
| You buy Cursor Ultra while waiting | Nothing for Grok Bot | Not applicable | Do not; the plans page says it adds no usage |

Dario did nothing for a day, which is the hard part. His meter moved within the window. Had it not, the three items support asks for were already in his notes: two email addresses and one screenshot.

Downgrades deserve one more sentence because they bite mid-week. The plans page says a downgrade takes effect after the same refresh window, and usage you already spent that week still counts against the new, smaller tier. If you are already past it, your included usage for the rest of the week is gone, and only on-demand, if enabled, keeps your Bots working.

## Know what happens to a link when a Teams seat ends

Teams seats are where the non-stacking rule and the permanence rule meet. On a self-serve Cursor Teams plan, every member already has Grok Bot through the seat, and the plans page says you do not need a separate link. A link does not add usage on top of the seat, and a higher or lower seat raises or lowers Weekly usage on its own.

If an admin removes your seat, the Teams grant ends. A link already on that Cursor account does not become a larger grant and does not restore the Teams allowance. And request-based Teams plans and Enterprise seats do not take a personal link at all; those plans keep Grok Bot on the Cursor contract.

The practical conclusion is Dario's: do not link on a work account. A work account's seat can end, the account itself may not be yours to keep, and while the seat exists the link does nothing for you. Link on the personal account you control, and use the work account for work.

## Keep every Bot on the far side of a subscription decision

Linking, upgrading and cancelling are account-level money decisions, and they belong to the person who pays. None of them should ever be a Bot's action, and the permanence of the link is the clearest example of why. A Bot that "helpfully" completes a linking flow on the wrong account has done something no one can undo.

There is also no reason to give a Bot the access. You do not need a Bot to read your tier, because the Weekly usage meter shows it. You do not need a Bot signed in to your Grok or X account on the shared cloud computer, where every Bot on your account would share that session. Keep those sign-ins on your own devices.

What a Bot can usefully do is read, from your mail and your card, what you are paying for. The [Personal CFO](/bots/personal-cfo) listing flags subscriptions that renewed at a higher price and charges over your alert threshold each weekday morning, and its boundary is that it never moves money, pays a bill, or opens or closes an account. Paired with the Subscription Cancellation Advisor, it gives you the evidence for a decision without ever making one. That is the boundary this whole site is built on: the one action a Bot never takes without you. For subscriptions, the action is any click that changes what you pay or where your usage goes.

## Answer the reader who says linking is free, so link everywhere

The objection at its strongest: linking costs nothing, it can only add usage, and if you already have a Cursor plan, Grok Bot just uses whichever pool is bigger. So link every account you have and let the product sort it out.

The first part is right. The link has no price of its own. The rest does not survive the plans page. The docs do not say one subscription can be linked to more than one Cursor account, and they do say a link can never be moved, so "every account you have" in practice means "the first account you happen to try". On any account that already has a Cursor plan or a self-serve Teams seat, the link adds nothing, so the upside the objection promises does not exist there. And on an account you will not keep, the link converts a subscription you pay for into usage you cannot reach.

Free to click is not the same as free to get wrong. The asymmetry is the argument: waiting a day costs you a day of linked usage at most, while a link in the wrong place cannot be fixed at all.

## Stop using this page when the plans page changes the rules

Grok Bot is in beta, and linking is new enough that its rules may still move. The rules above are the ones the plans page stated on 23 September 2026. The lines most likely to change are the list of eligible subscriptions, the 24-hour refresh window, and the wording of the desktop link button, which the docs describe by example rather than by a fixed label. If the plans page ever documents a way to unlink or move a link, the permanence sections here are wrong and the plans page wins.

This page does not cover Enterprise contracts, Teams billing details beyond what the plans page states, or the terms of the SuperGrok and X Premium+ subscriptions themselves, which belong to xAI and X. For how Grok Bot chooses between two grants you already hold, [the page on holding both subscriptions](/blog/grok-bot-both-subscriptions) goes further, and for trying Grok Bot before paying for anything, [the older trial walkthrough](/blog/grok-bot-free-trial) is the place to start. If any page on this site disagrees with the plans page about eligibility or prices, the plans page wins.

## Frequently Asked Questions

### Does SuperGrok include Grok Bot?

Individual SuperGrok, SuperGrok Plus and SuperGrok Heavy subscriptions can grant Grok Bot usage, but only by linking to a Cursor account from the Grok Bot plan screen. You still sign in to Grok Bot with Cursor, and usage is metered on that Cursor account. SuperGrok Lite does not include Grok Bot, and SuperGrok Team or SuperGrok Enterprise subscriptions cannot link at all. X Premium+ can also be linked. As of 23 September 2026 the link is permanent and cannot be moved to another Cursor account.

### Can I unlink SuperGrok from Grok Bot?

No. Cursor's plans page says a SuperGrok or X Premium+ link is permanent once created. You cannot unlink it, and you cannot move it to a different Cursor account, not even to force a tier refresh after an upgrade. That is why the only safe moment to check which Cursor account is active is before you press the link button. Open the account menu, read the email address shown, and confirm it is the account you intend to keep for years before linking anything.

### Do SuperGrok and a Cursor plan stack for Grok Bot?

No. A Cursor plan and a SuperGrok or X Premium+ link never add Grok Bot usage together. If you hold both, Grok Bot uses whichever grant has more usage, and both subscriptions keep billing separately, because buying one does not cancel the other. To get more usage, upgrade within one kind, such as Cursor Pro+ to Ultra or SuperGrok Plus to Heavy, or turn on on-demand usage billed through Cursor. Linking on top of a Cursor plan is not a way to add usage.

### Can I link X Premium+ to Grok Bot?

Yes. Cursor's plans page lists X Premium+ alongside individual SuperGrok, SuperGrok Plus and SuperGrok Heavy as a subscription that can grant Grok Bot usage, and it says to link your X account from the Grok Bot plan screen. The same rules apply as for SuperGrok: the link is permanent, it cannot move to another Cursor account, and it adds no usage on top of a Cursor plan. The plans page places X Premium+ linked usage below SuperGrok Plus.
`,
};

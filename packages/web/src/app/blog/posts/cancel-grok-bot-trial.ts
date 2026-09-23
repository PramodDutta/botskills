import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Cancel the Grok Bot Trial, and the iPhone Trial That Is Not the Same Thing',
  description:
    'Cancel the Grok Bot trial only if you want it over today, because it never becomes paid. The iPhone App Store offer does, unless you cancel it in your Apple ID.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Cancel the Grok Bot Trial, and the iPhone Trial That Is Not the Same Thing

Two different things get called "the Grok Bot free trial", and they behave in opposite ways when you cancel them. One is Grok Bot's own trial, a usage credit that never turns into a paid plan, where cancelling costs you whatever credit is left. The other is an App Store introductory offer started in the iPhone app, which Apple runs and which becomes a paid Apple subscription unless you cancel it in time.

If you only remember one line from this page, make it this: cancel the Apple one before it converts, and leave the Grok Bot one alone unless you want it over today. The rest of the page explains why, walks one translator through a week with both, and covers what to clean up before either ends. Cursor's [Grok Bot plans and billing page](https://cursor.com/help/grok-bot/plans) answers both cancellation questions directly and is the main source, read as of 23 September 2026 alongside the Grok Bot [mobile page](https://docs.x.ai/grok-bot/mobile) and [approvals page](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

## Tell the two trials apart before you cancel anything

The plans page answers "How do I cancel my Grok Bot trial?" and "How do I cancel a free trial I started in the iOS app?" as two separate questions, because they are two separate products.

| | Grok Bot trial | App Store introductory offer |
|---|---|---|
| Who runs it | Grok Bot, on your Cursor account | Apple |
| What it is | A usage credit, with a 7-day window also applying | A free introductory period on an in-app subscription |
| Does it become paid on its own | Never | Yes, when the introductory period ends, unless you cancel first |
| How to cancel | Cancel Trial on the plan screen, shown on free-plan accounts | Apple ID -> Subscriptions, before the period ends |
| What cancelling does | Ends it at once, removes remaining credit, and you cannot claim it again | Stops the conversion to a paid Apple subscription |
| If something goes wrong | Contact Cursor support if Cancel Trial is missing or does not take effect | Apple's Subscriptions and billing support; Cursor cannot cancel or refund it |
| On Android | The same trial, because it belongs to your Cursor account, not to a device | None: Android has no in-app trial |

Read the "does it become paid" row twice. People carry a habit from streaming services, where a free trial is usually a subscription with a delay on it, and that habit is exactly right for the App Store offer and exactly wrong for the Grok Bot trial. The plans page says there is no charge to cancel the Grok Bot trial and that it never becomes a paid plan.

The docs do not state the length of the App Store introductory period. Check the date on Apple's side, because that is the date that matters.

## Follow Halima through a week with both trials

Halima is a freelance technical translator. She works on a Windows laptop and carries an iPhone. In one week she met both trials, and the sequence is worth seeing whole before taking it apart.

| When | What she did | What was actually happening |
|---|---|---|
| Monday 09:10 | Signed in to the desktop app with her free Cursor account and saw her trial on the plan screen | Her Grok Bot usage-credit trial was active |
| Monday 11:00 | Asked a Bot to summarize a six-page client style guide, then checked usage | A small job, a small draw on the credit |
| Tuesday 18:40 | A colleague texted "cancel it now or they bill you", so she opened the plan screen to press Cancel Trial | Cancelling would have deleted most of her remaining credit, for nothing |
| Wednesday 10:20 | Asked a Bot to build a bilingual glossary from a 140-page terminology PDF and check every term against two online term banks | One long agent job began drawing heavily on the credit |
| Wednesday 13:55 | The credit ran out partway through the glossary | Expected, per the plans page; used credit is not restored |
| Thursday 21:30 | On her iPhone, started an App Store subscription with a free introductory period, thinking it continued the trial | A separate Apple-run trial that converts to paid |
| Friday 07:45 | Read Apple's confirmation email and cancelled in Apple ID -> Subscriptions at 07:52 | The only cancellation that week that actually mattered |

On Tuesday evening she did not press Cancel Trial. She read the plans page first, saw that the trial never becomes a paid plan, and closed the screen. That decision kept her Wednesday job alive for three and a half hours. On Friday morning she did the one cancellation that was genuinely urgent, and she did it on Apple's side, because that is the only side that can.

The following sections take each moment in turn: the button she did not press, the button she did, the job that ate the credit, and what she should have cleaned up before the week ran out.

## Leave the Grok Bot trial alone unless you want it over today

The plans page is plain about the Grok Bot trial's cancel button. There is no charge to cancel, and the trial never becomes paid. So cancelling never saves you money, because there is no money to save.

What cancelling does is end things early, permanently.

| Cancel Trial | Result |
|---|---|
| Ends the trial | Immediately, not at the end of the window |
| Charges you | Nothing, there is no charge to cancel |
| Removes your remaining trial credit | Yes, all of it |
| Restores credit you already used | No, used credit is never restored or topped up |
| Lets you claim the trial again later | No |
| Appears on a paid plan or Teams seat | No; there the trial ends on its own and there is nothing to cancel |

Given that table, there are only two honest reasons to press it. You want Grok Bot to stop doing anything on your account right now, and pausing your routines is not enough for you. Or you have decided against the product and simply want the trial closed rather than left to expire. Every one of those is a choice to give up the remaining credit, and the plans page is clear that you cannot change your mind afterwards.

If none of those applies, do nothing. The credit runs down as you use it, the 7-day window closes on its own, and no charge follows either event.

## Press Cancel Trial only on a free plan, and only on purpose

If you do want to cancel, the steps are short. The plans page says Cancel Trial is on the plan screen and appears on free-plan accounts. On desktop, the get started page puts plan controls, such as the SuperGrok link button, under Settings -> Usage & Billing, so start there. Settings lives in the account menu, and its keyboard shortcut is Cmd or Ctrl with the comma key.

Before you press it, check three things. First, that you are signed in to the Cursor account you mean; the desktop app can hold several accounts, and the account menu shows which is active. Second, that you have finished the cleanup in the section further down, because cancelling ends the trial immediately and the docs do not describe what access remains afterwards. Third, that you have read the table above and accept losing the remaining credit for good.

Then press Cancel Trial. The trial ends at once.

Two situations are not the normal path. If you are on a paid Cursor plan or a Teams seat, Cancel Trial does not appear, because the trial ends on its own and there is nothing to cancel. If you are on a free plan and the button does not appear, or you press it and the cancel does not take effect, the plans page says to contact support. The docs do not list what support needs for this case; a useful message carries the Cursor account email, the approximate time with your time zone, and a screenshot of the plan screen, and never a password or a one-time code.

## Cancel the App Store offer in your Apple ID before it converts

This is the trial with a clock that ends in a charge. The plans page says an App Store introductory offer started in the iOS app is run by Apple, and that it turns into a paid Apple subscription when the trial ends unless you cancel first.

Halima's Friday fix is the documented one. On her iPhone she opened her Apple ID settings, went to Subscriptions, found the subscription she had started on Thursday night, and cancelled it. The plans page points to Apple's own guide to viewing and cancelling subscriptions if the screens look different on your device. It took her seven minutes, most of which was finding the right screen.

Three facts about this trial are easy to get wrong. Cursor cannot cancel it for you, and Cursor cannot refund it, because it is an Apple in-app trial or subscription. Refunds for an Apple in-app charge go through Apple's Subscriptions and billing support, not through Cursor. And the Grok Bot app's own Settings on the phone include a place to manage an eligible App Store or Google Play subscription, but the plans page's cancellation instruction for this case is Apple ID -> Subscriptions, so use that.

What happens to access for the remainder of an introductory period after you cancel is Apple's rule, not Grok Bot's, and the Grok Bot docs do not describe it. Do not plan work around it. If you want to keep using Grok Bot after cancelling, choose one of the paid paths later on this page deliberately, rather than letting an introductory offer choose for you.

The iPad runs the same iOS app on iPadOS 18 or later, so the same rule applies to an offer started there: it is Apple's, and Apple ID -> Subscriptions is where it ends.

## Skip this worry on Android

The plans page says it plainly: Android has no in-app trial. If you installed Grok Bot from Google Play, there is no Google Play introductory offer to cancel. The only trial you can meet is the Grok Bot usage-credit trial, and everything in the earlier sections about leaving it alone applies unchanged.

Android users can still hold a paid subscription bought through Google Play; the mobile page's Settings list includes managing an eligible App Store or Google Play subscription. Cursor cannot refund Google Play charges either. The plans page sends those to Google Play's refund support.

The practical upshot for a household with one iPhone and one Android phone is that only the iPhone owner has an introductory offer to watch. If the Android owner reads a forum post telling them to cancel their Grok Bot trial before it bills them, the post is describing the other platform.

## Understand why one long job can eat the whole credit

Halima's Wednesday is the trial story the plans page itself anticipates. The plans page describes the trial as a usage credit drawn down by how much work your agents do, measured by agent steps and tokens, not by the number of messages you send. A single short message can start a very long job.

Her message was one paragraph. The job it started was enormous: read 140 pages, extract every term, translate each one, then open two online term banks in the browser and check every entry against both. Each page read, each lookup, each comparison and each spreadsheet update was another step. At 13:55 the credit ran out with the glossary about two-thirds done.

The plans page anticipates exactly this. It says a large or long-running agent task can use most or all of the credit at once, that this is expected, and that used trial credit is not restored or topped up. There is no appeal for a job that was merely bigger than you expected.

The same page gives two habits that would have saved her credit. Start small and scope tasks tightly, then scale up once you see how much each task uses. And check your usage on the plan screen before running a large or long agent job. Her Monday summary had shown her what a six-page job cost. Multiplying that by twenty-three, before adding a hundred-odd web lookups, would have told her the glossary did not fit.

## Stage trial work so a credit cliff leaves something usable

The fix is not a smaller ambition. It is a job that stops on its own at checkpoints, so that the credit running out costs you a stage rather than the whole deliverable. Put that into the Bot's description for the trial week.

\`\`\`text
Trial week rules
- Work in stages of about ten pages, or one clearly bounded unit.
- After each stage: post the finished part as a file in this conversation,
  also save it under /workspace/trial/, then STOP and tell me what the next
  stage would cover. Do not start it until I reply "next".
- Before any stage that opens websites, tell me how many pages or lookups
  you expect, and wait for my go-ahead.
- If a lookup fails twice, record it as UNCHECKED and move on. Never retry
  in a loop.
- Never start a subscription, accept an offer, enter payment details or press
  any trial, plan or billing button. Those are mine.
\`\`\`

When Halima re-ran the remaining third of the glossary later on a paid plan, she used exactly this shape. Each stop gave her a chance to check the plan screen, and each posted file meant that a stop at any point left her with finished, usable pages rather than a half-built spreadsheet somewhere she could not reach.

The last line is the boundary, and it is not decoration. A Bot has a browser, and a browser meets offers, checkouts and subscribe buttons on ordinary websites every day. The one action a trial-week Bot never takes is anything that changes what you pay, because a subscription is a decision about your money, not a step in a task.

## Clean up the shared computer before the trial ends

A trial gives your Bots a real cloud computer, and the things you did on it during the week stay on it. Your Bots share one computer, with its files, browser sessions and signed-in accounts. The docs do not say what happens to that computer, its files or its logins when a trial ends or is cancelled, so do the cleanup while you still have working access, before the credit or the window runs out.

The approvals page has a documented checklist for removing access and working data, and it maps well onto the end of a trial.

| Step | Where | Why it matters at trial end |
|---|---|---|
| Pause or delete routines | A Bot's profile; the phone can pause with Active and delete | A routine keeps drawing on whatever usage exists |
| Sign out of websites on the shared computer | Take over the computer and sign out | Browser sessions persist and every Bot can use them |
| Uninstall connectors and revoke their authorization | Marketplace -> Your plugins, then the service's own security settings | Revoking at the source works even if you never open Grok Bot again |
| Remove sensitive files from /workspace | On the computer | Files persist and are readable by every Bot |
| Hide or delete Bots you will not keep | The Bot menu | Deleting a Bot does not remove computer files or sessions |
| Delete the Cursor account, if you are finished entirely | The account settings flow | The docs' last step for removing access |

The fifth row is the one to read twice. Deleting a Bot removes its profile, conversation and routines, but the docs say shared-computer files and sign-ins are not isolated by Bot and may remain. A trial Bot you signed into your email is not signed out by being deleted.

Halima's list was short: one Gmail session from a Monday test, one term-bank login, and a /workspace folder of client PDFs. She signed out of Gmail on Tuesday at 18:50, minutes after deciding not to cancel, because she no longer needed it. The term-bank login and the PDFs were still on the computer when the credit ran out on Wednesday, since the glossary needed them, and they stayed there until she came back on a paid plan the following week and cleared both. Had she not come back, most of that list would have depended on getting back into Grok Bot, and the docs do not say what access a finished trial leaves you. Revoking a connector in the source service is the one step that plainly happens outside Grok Bot, and she had no connector to revoke. That is exactly why the cleanup belongs before the end of a trial, not after it.

## Choose what comes after the trial

When the trial ends, the plans page lists the ways to keep using Grok Bot: upgrade to Cursor Pro, Pro+, Ultra or a Teams plan, or link an individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ subscription. Every paid individual Cursor plan now includes Grok Bot.

| Path | Price on the Cursor pricing page | Grok Bot usage |
|---|---|---|
| Cursor Pro | $20 a month | Weekly usage, the entry tier |
| Cursor Pro+ | $60 a month | More weekly usage than Pro |
| Cursor Ultra | $200 a month | The highest weekly usage |
| Self-serve Cursor Teams seat | See Cursor's Team pricing | Follows the seat's allowance |
| Link individual SuperGrok, Plus, Heavy or X Premium+ | Billed by xAI or X, not quoted here | Linked usage by tier; the link is permanent |
| Nothing | Free | No Grok Bot usage once the trial is over |

Two warnings belong next to that table. First, linking is one-way: the plans page says a linked subscription stays on the Cursor account it was linked to, for good, so confirm which account is signed in before you link. Second, a link and a Cursor plan never stack; holding both does not add usage. If you already pay for one of those subscriptions for other reasons, linking it may be the cheapest path, but read the linking rules first.

Halima chose Cursor Pro at $20, bought on the web rather than through the App Store, and ran the rest of her glossary with the staged rules above.

## Hand the cancellation decision to a Bot that cannot cancel

Trials and subscriptions are exactly where a second opinion helps and an automated action hurts. Two botskills listings are built for the second opinion and forbidden from the action.

The [Subscription Cancellation Advisor](/bots/subscription-cancellation-advisor) works on one subscription at a time: it reads your receipts and reports how to cancel, what cancelling would cost you, and when to do it. Its instructions already know the lesson of this page: a receipt from Apple, Google Play or any reseller means the vendor's own settings page cannot cancel the subscription. It is barred from cancelling, downgrading or pausing anything, and from contacting the vendor.

The [Subscription Pruner](/bots/subscription-pruner) runs a quarterly survey of recurring charges in your mail, and one of the traps it flags by name is a trial that converted into a first charge. An App Store offer you forgot is precisely the row it exists to find. It is forbidden from cancelling anything, from unsubscribing, and from writing to any merchant.

Both boundaries exist for the same reason. Cancelling the Grok Bot trial is irreversible, since you cannot claim it again. Cancelling an Apple subscription changes what you pay. Those are decisions a person makes with the evidence in front of them, and a Bot that could make them would be a Bot you had to watch. A Bot that can only advise is one you can run every quarter without a second thought.

## Answer the advice to cancel every trial on day one

The objection at its strongest: cancelling every free trial on day one is a proven consumer habit. You keep access until the trial ends, you never get surprised by a charge, and you lose nothing by being careful. Why would Grok Bot be any different?

For the App Store offer, the habit is sound, and this page agrees with it. Apple runs that trial, it converts to a paid subscription unless cancelled, and cancelling early is the safest way to never forget.

For the Grok Bot trial, every premise of the habit is false. There is no charge to prevent, because the trial never becomes paid. You do not keep access after cancelling, because Cancel Trial ends the trial right away. And you lose a great deal by being careful: all of your remaining credit, plus any chance to claim the trial again. Had Halima followed her colleague's text on Tuesday evening, her Wednesday glossary would never have started.

The habit is right about one product and backwards about the other. Knowing which trial is in front of you is the whole skill.

## Report a failed run instead of asking for the credit back

Used trial credit is not restored or topped up, and the plans page does not describe any exception for a job that went badly. It does draw one useful line. If a run failed with an error, rather than producing a result you did not like, report it by following the Report a bug path.

That report is about fixing the product, not about recovering credit, so make it a good one. Support's checklist on the troubleshooting page is the usual one: app version, operating system, the exact wording of the error, which Bot, when it happened and in what time zone, and any request or conversation ID the app showed you. If the error notice offers a Copy request ID button, use it before you dismiss the notice, because that ID is the quickest way for support to find the run.

Halima's glossary did not fail with an error. It succeeded slowly and ran out of credit, which is the documented, expected outcome. She had nothing to report, and the right move was the staged rerun.

## Stop using this page when the trial terms change

Grok Bot is in beta, and trial terms are among the details most likely to change. What this page says about both trials held as of 23 September 2026. If the plans page changes the 7-day window, the credit model, what Cancel Trial does, or adds an in-app trial on Android, trust the plans page over this one.

Apple's rules for introductory offers belong to Apple and can change independently of anything Grok Bot does. For the exact behavior of an Apple subscription, Apple's own guide is the authority.

This page does not cover what a sensible first trial job looks like, beyond staging it. For that, [the free trial guide](/blog/grok-bot-free-trial) walks through choosing one. If it, or any other page on this site, ever disagrees with the plans page on prices or eligibility, the plans page wins. And for what happens after the credit, when on-demand usage can keep a paid account running, [the on-demand usage page](/blog/grok-bot-on-demand-usage) covers what burns it fastest.

## Frequently Asked Questions

### How do I cancel the Grok Bot free trial?

Open the Grok Bot plan screen on a free-plan account and choose Cancel Trial. On desktop, look under Settings -> Usage & Billing, where the docs place plan controls such as the SuperGrok link. Cancelling ends the trial immediately, removes any remaining trial credit, and means you can never claim the trial again. You rarely need to, because the Grok Bot trial never becomes a paid plan and there is no charge to cancel. On a paid Cursor plan or Teams seat the button does not appear, since the trial ends on its own.

### Will the Grok Bot trial charge me when it ends?

No. As of 23 September 2026, Cursor's plans page says the Grok Bot trial never becomes a paid plan and there is no charge to cancel it. The trial is a usage credit with a 7-day window, and when the credit or the window runs out, it simply ends. The trial that can charge you is different: an App Store introductory offer started in the iPhone app, which Apple converts to a paid subscription unless you cancel it in Apple ID -> Subscriptions first.

### How do I cancel a Grok Bot trial I started on my iPhone?

If you started a free introductory period on a subscription in the iPhone app, that is an App Store offer run by Apple, not the Grok Bot usage-credit trial. Cancel it in your Apple ID settings under Subscriptions before the introductory period ends, or it becomes a paid Apple subscription. Cursor cannot cancel or refund an Apple in-app trial or subscription for you, and refunds for Apple charges go through Apple's Subscriptions and billing support. Android has no in-app trial at all.

### Why did my Grok Bot trial run out so fast?

The Grok Bot trial is a usage credit drawn down by agent steps and tokens, not by the number of messages you send. One short message can start a long job, such as reading a long document and checking every item on the web, and that single job can use most or all of the credit. Cursor's plans page calls this expected and says used credit is not restored or topped up. Start with small, tightly scoped tasks and check usage on the plan screen before anything large.
`,
};

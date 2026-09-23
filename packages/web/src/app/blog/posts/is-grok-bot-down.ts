import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Is Grok Bot Down or Just Slow? Checks Before You Wait It Out',
  description:
    'Is Grok Bot down, or is one Bot paused, updating, blocked or out of usage? Run the checks that separate an outage from a local cause and record what support needs.',
  date: '2026-09-23',
  category: 'Guide',
  content: `
# Is Grok Bot Down or Just Slow? Checks Before You Wait It Out

Before you decide Grok Bot is down, find out how much of it is down. A broad service problem should show up across your Bots, your devices and your networks at once. The local causes the docs describe each depend on just one of those: one Bot, one routine, one website, one network, or one account's usage. Narrowing the scope takes a few minutes, and it tells you whether waiting will help or whether you are about to wait for something that will never fix itself.

This page is the scope test, the local causes that impersonate an outage, what the documented status link can and cannot settle, and what to write down while you wait so a support request is worth sending. If you already know which Bot is quiet and want to know why, the page on [a Grok Bot that stops responding](/blog/grok-bot-not-responding) goes deeper on that single conversation. The checks below follow the Grok Bot docs and Cursor's help pages as of 23 September 2026.

## Measure the blast radius before you blame the service

Run these tests roughly in order. Each one is cheap, and each one either widens or narrows the problem.

| Test | If only this one fails | If everything fails |
|---|---|---|
| Send a short message to a second Bot on the same account | The first Bot is waiting, busy, or its routine is paused | Check Weekly usage next |
| Open the same conversation on your other device | Something about that device, its app or its network | Check usage, then the status link |
| Put the desktop on a phone hotspot | A gateway or network on your side | Not your network |
| Give the same Bot a task on a different website | That one site is challenging or blocking automation | Not a single website |
| Look at Weekly usage in the account menu | Not applicable | If it is spent and on-demand is off, that is your outage |

The second-Bot test is the one to run first because it answers the biggest question fastest. If any Bot on your account replies, the service was answering at that moment, and the thing you are looking at is narrower than an outage. If none of them reply, you still do not know it is an outage, because one account-wide cause, empty usage, produces exactly that pattern.

The device test works because the Bots do not run on your devices. The desktop app and the phone app are clients onto the same Bots and the same cloud computer, and the docs say closing the app, the laptop or the phone does not stop cloud work. If the phone shows progress that the desktop does not, the problem lives between your desktop and the service, not inside the service.

The hotspot and website tests come from two documented failure modes that look like an outage from inside one conversation and are nothing of the kind. Both have their own sections below.

## Walk Ines from a missing 06:00 digest to a computer that was only updating

Ines is a freelance marketing contractor for three local businesses: a bakery, a physiotherapy clinic and a bike shop. Her Bots are Morning Digest, whose weekday routine collects overnight reviews and mentions into one message at 06:00; Ads Watch, which reads the ad dashboards and drafts budget notes but never changes a campaign; and Replies, which drafts review replies and never posts them. She came back on a Monday from two weeks away, opened the app with a coffee, and found no digest. At 07:40 she asked Ads Watch for last week's spend and watched it sit there. By 07:45 she was typing "is Grok Bot down" into a search bar.

| Time | What Ines checked | What she found | What it ruled out |
|---|---|---|---|
| 07:20 | Looked for the 06:00 digest | Nothing new in Morning Digest's conversation | Nothing yet |
| 07:22 | Asked Replies to draft one review reply | A draft came back within a couple of minutes | A full outage |
| 07:25 | Opened Morning Digest's profile on her phone | The weekday routine was paused, with Active off | A broken digest Bot |
| 07:27 | Switched Active back on and asked for a one-off digest | The digest arrived at 07:38 | A fault in the routine itself |
| 07:40 | Asked Ads Watch for last week's spend summary | The desktop app showed Updating your computer | Nothing yet |
| 07:49 | Left the app open and waited | The update finished and Ads Watch started work | A stuck computer |
| 08:05 | Read the spend summary | Complete, with links to each dashboard | A slow service |
| 08:10 | Checked Weekly usage and the Check system status link | Plenty of usage; nothing she could match to her morning | Usage, and a known incident |

Nothing was down. Two ordinary, documented states had lined up on the first morning back. The docs say Grok Bot may ask whether to keep routines running after a long period away and pause them if nobody answers, and nobody had answered for two weeks. And the docs say an image update to the computer can take several minutes, during which the app shows Updating your computer and asks you to keep it open. The docs do not say what triggered this particular update, and this page will not guess. What mattered is that the label was changing, and a changing label means wait.

The check that saved her the most time was the 07:22 message to Replies. Once one Bot had answered, "Grok Bot is down" was off the table, and every check after it was about her own account rather than about the service.

Her two causes are only part of the list. These are the local states on this page that can pass for an outage, with the tell that gives each one away.

| Local cause | How it looks from outside | The tell | What fixes it |
|---|---|---|---|
| A routine paused after a long absence | A scheduled result never arrives | Active is off on that routine | Switch Active on, and ask for a one-off run if you need today's result |
| The computer is starting or updating | Anything that needs the computer seems slow | Starting your computer or Updating your computer on screen | Keep the app open while the label is still changing |
| Weekly usage spent with on-demand off | Every Bot stops at once | The usage limit message, and an empty Weekly usage meter | The weekly reset, or turning on-demand on |
| A site challenging automation | One Bot crawls on one website | Other sites are fine; verification pages in Agent Computer | A connector, a takeover, or routing egress through your desktop |
| A TLS-inspecting network gateway | Chat works, the computer never connects | Everything works on a phone hotspot | IT allows and exempts both cursorvm.com wildcard patterns |
| A queue on one Bot's screen | One Bot seems slow while others idle | Several browser jobs sent to the same Bot | Give the next job to another Bot, or redirect the current one |

## Unpause the routines a long absence switched off

A missing scheduled result is easy to misread as an outage, because nothing arrives and nothing says why. The docs describe a specific control behind it. To keep unattended usage in check, Grok Bot may ask whether to keep routines running after a long period away, and pause them if there is no response. The docs do not say how long the period is. They do say to review paused routines when you return.

The phone is enough for this. Open the Bot's profile, and each routine shows its schedule, next run, instruction and Run history, with an Active toggle you can switch back on. Switching it on resumes the schedule from its next run; the docs do not describe it running the missed days for you. If you need the result now, ask the Bot for a one-off run in the conversation, as Ines did.

If the routine was active and still produced nothing, walk the troubleshooting checklist rather than assuming the service: the routine is enabled, its schedule and time zone are right, the owning Bot still exists, required plugins are still authenticated, the computer can reach the source system, and usage or account access has not been paused. Deleting a Bot also deletes the routines it owns, so a digest from a Bot someone removed will never come back no matter how long you wait. Editing and testing a routine still need the desktop app, and a Test run performs real work, so use safe input.

## Let Starting your computer and Updating your computer finish

The second thing that impersonates an outage is the computer doing exactly what it should. The troubleshooting docs name two setup labels: Starting your computer and Updating your computer. Initial setup and an image update can each take several minutes, and the docs want the app left open while the label is showing. During that time, work that needs the computer has to wait for it, so from the outside a Bot looks slow.

The rule the docs give is simple. If progress is still changing, wait. If it fails, or stops changing, move to the recovery order: retry from the error state, restart the app, check for a Grok Bot app update, and if the computer is still unreachable, open Settings -> Updates and choose Update in the Grok Bot's Computer section.

What you should not do is reach for the heaviest control because the lightest state felt slow. An update in progress is a safe operation that keeps your files in place. Pressing Reset during one swaps it for an operation that rebuilds from your last saved snapshot and can lose recent work. If the label turns into an error saying the computer cannot be reached, you are no longer in a slow state at all; the [walkthrough for a computer that cannot be reached](/blog/grok-bot-cant-reach-computer) takes it from there, one rung at a time.

## Treat a fleet-wide stop as an empty usage pool until proven otherwise

Every Bot on the account going quiet at the same moment looks like a textbook outage. It is also the exact signature of usage running out, because every Bot draws from the same account-level pool, and Cursor's plans page says macOS and iOS share one usage bucket tied to the signed-in Cursor account.

The plans page describes two ways the pool can stop you. If on-demand is off, Grok Bot stops when Weekly usage runs out, the screen says you have reached your Grok Bot usage limit, and it resets with weekly usage. If on-demand is on, work continues until the On-demand monthly limit is reached. That limit is not a hard stop mid-run; a Bot already working can finish past it, and then on-demand stops until you raise the limit or the billing cycle resets.

So before you wait out an outage, open the account menu, which can show Weekly usage at a glance, or Settings -> Usage & Billing where it appears. The On-demand monthly limit lives in Grok Bot's Settings and, on the web, under Spending and Monthly Limit on the Cursor dashboard. There is no separate Grok Bot-specific spend cap; this account-level limit is the one that applies. The difference between a usage stop and an outage is the difference between waiting for the service and waiting for next week, and [how the weekly allowance and overflow billing work](/blog/grok-bot-weekly-allowance) is worth reading before the next time it happens.

## Suspect a website before the service when only one site misbehaves

A Bot that is fast everywhere except one site is not experiencing an outage. It is experiencing that site. The FAQ is candid that Grok Bot can use many browser-based tools, but a site may still block automation, require a new login, present a CAPTCHA or require human confirmation, and that the Bot should hand those steps to you rather than bypass them.

The security FAQ adds the mechanism behind some of it: some services flag datacenter IP addresses. Grok Bot computers reach the internet through shared static egress addresses, shared across customers, so a site that distrusts datacenter traffic may treat your Bot with suspicion no matter how well it behaves. For services you run yourself, the docs say the egress ranges are available from your account team so you can allowlist them where appropriate.

For services you do not run, you have three documented levers. Prefer a connector when one exists in Marketplace; the docs call it more structured and often more reliable than clicking through a website. Take over the computer for the step the site insists a human performs. Or, where it fits, turn on Route egress through this desktop under Settings -> Computer, which sends the computer's web traffic through your current desktop so destinations see your desktop's IP address. That last option has a real cost: the Bot can then reach networks available from that device, and on Enterprise an admin can switch the option off for the whole team. Choose it on purpose, not as a reflex.

## Test a phone hotspot when chat works and the computer will not connect

The most convincing fake outage happens on managed networks. The proxy page in the docs explains that the desktop app connects to two places: Cursor's API for chat, sign-in and approvals, and a separate hostname for the hosted computer's setup, screen and shell. Secure web gateways that inspect TLS traffic, with Zscaler as the example the docs use, often let the first through and break the second. The app then hangs during computer setup, or chat keeps working while the computer never connects.

From your chair that looks like Grok Bot being half down. It is your network being half open. The tells the docs list are specific: it works on a hotspot or a personal device and fails on the corporate network, or it works in the office and fails at home on the same laptop because the gateway client runs a different off-network profile.

The test is one tap: put the desktop on a phone hotspot and try again. If it works there, nothing on the service side is wrong and no amount of waiting will help. The fix is for whoever runs the gateway, who needs to allow both the single-level and the nested cursorvm.com wildcard patterns, exempt Cursor's domains from TLS inspection and response buffering, and apply the change to every profile, including off-network ones. Hand them the proxy page rather than a screenshot of your frustration.

## Count the tasks queued on one screen before you call a Bot slow

Some slowness is arithmetic. The shared computer gives every Bot a separate screen, so several Bots can work in parallel, but one Bot can run only one computer-use task on its screen at a time. A computer-use task already active on that screen may need to finish, or be redirected, before another one can start.

So a Bot you asked for three browser jobs in a row is not slow; it is working through a queue of one-at-a-time jobs on its own screen while your other Bots' screens sit idle. If you need two of those jobs at once, give the second to another Bot. If the new job matters more than the current one, say so: a direct message from you takes priority over background work and can redirect the current turn.

Before you blame speed at all, open Agent Computer and watch for a minute. The preview shows clicks, typing, navigation and status. A Bot that is steadily moving through pages is working, however long the job takes. A Bot parked on the same page is waiting on something, and that is a single-conversation problem, covered in depth on the page about Bots that stop responding.

## Read the Check system status link for what it can and cannot settle

The Grok Bot docs do not publish a status page address of their own, and this page will not invent one. What exists is a Check system status link at the bottom of Cursor's help pages, including the Grok Bot plans and billing page, next to a Contact Support link. That link is the documented place to look for a service incident.

Use it as one input among several, and read it against your own checks rather than instead of them.

| The status link shows | Your own checks show | What to do |
|---|---|---|
| An incident that matches your symptoms | Every Bot, device and network affected | Record what you see and wait; do not reset or re-send anything |
| An incident that matches your symptoms | Only one Bot or one site affected | Treat it as local anyway until your narrow cause is ruled out |
| Nothing you can match | Everything fails, and Weekly usage is spent | It is usage, not an outage |
| Nothing you can match | Only one network fails | It is the network; test the hotspot and involve IT |
| Nothing you can match | Everything fails on every network, with usage left | Copy any request IDs and contact support with your log |

The last row is the one where you have done everything you can from your side. At that point your notes are the most useful thing you own, which is why the next section exists.

The same applies to searches like "grok bot overloaded". The docs do not document an overloaded state or message, and this page will not describe one. If the app shows you an error, it appears above the composer under Notifications, and some notices carry a Copy request ID control. Grab the complete ID before dismissing the notice, and quote the error's exact wording rather than a paraphrase.

## Record the outage as it happens so the support ticket writes itself

While you wait, write down what you see with a timestamp. It costs a few minutes and it turns a vague complaint into something another person can act on. The troubleshooting page lists what support needs, and every line of this log feeds one of those items.

\`\`\`text
OUTAGE LOG (times in <your time zone>, one line per check)
<time> | Failing: <Bot or routine name> | Exact text on screen: "<...>"
<time> | Second Bot on the same account: answered / did not answer
<time> | Same conversation on my other device: same / different
<time> | Desktop on a phone hotspot: same / different / not tried
<time> | Same Bot, different website: same / different / not tried
<time> | Weekly usage: <what the account menu showed>; on-demand on / off
<time> | Routines: Active on / paused: <which>
<time> | Check system status link: <what it showed, in my words>
<time> | Request IDs copied in full: <...>
<time> | Tried: retry <result>; app restart <result>; computer update <result or not tried>
Grok Bot version: <from the account menu, under About>
Operating system and version: <...>
\`\`\`

Fill it in as you go, not from memory afterwards. The time zone line matters more than it looks: routines run on the Timezone set under Settings -> General -> Bot, and anyone reading your log has to line your times up with the run records. Leave out passwords, one-time codes, private keys and secret values; the docs say none of them belong in a support request, and a running log is an easy place for one to slip in.

When you are ready to send it, [the support checklist and report template](/blog/grok-bot-support-request-id) turns this log into the seven details the docs ask for, and says where each one lives in the app.

## Answer the reader who says an hour of waiting fixes everything

The argument for skipping all of this deserves a fair statement. Outages are the provider's problem. You cannot fix them, the provider already knows, and an hour of doing something else is a better use of your morning than an hour of diagnosis. Wait, then check again.

For a genuine service incident, that is a reasonable plan. The trouble is that several of the causes on this page do not end when you wait. A paused routine stays paused until you switch Active back on. An empty Weekly usage pool with on-demand off waits for the weekly reset, which may be days away. A gateway that blocks the computer's hostname blocks it tomorrow too. A site that wants a human to confirm something will wait for a human indefinitely. Only a few of the causes here reliably clear up with time: a setup label that is still changing, a queue of tasks on one Bot's screen, and an incident on the service side.

The checks exist to tell you which kind you have. They take a few minutes. Ines ran them in about twenty and had her digest by 07:38. Waiting an hour would not have produced it, because the docs give no sign that a paused routine resumes by itself. The reader who waits an hour on a paused routine gets an hour older and no digest.

## Hold every send while you wait out a suspected outage

The riskiest moment in a suspected outage is not the waiting. It is the retry. When an action fails with an error, you may not be able to tell whether it half happened. The docs say clearing an error notice removes the notification, not the underlying external action, and that an approval controls the proposed action, not work already completed. So an email that "failed" may have left, and a post that "errored" may be live.

That is why this is the place for a boundary. The one action no Bot should take on its own during a wobble is a repeat of anything with a side effect outside the computer: a send, a post, a purchase, a change to a live system. The docs' own advice for routines is to make retries idempotent where possible and to tell the Bot where to report partial completion. Put it in every Bot's description in plain words: after any error on a send, post, purchase or live change, do not retry; report what you attempted, the time, and the exact error, and wait for me.

Ines's Bots were built this way from the start, which is why her morning had no clean-up in it. Ads Watch drafts budget notes and never changes a campaign. Replies drafts review replies and never posts them. Neither could have sent anything twice, because neither sends at all. A Bot that only drafts can be interrupted, updated or paused at any moment without leaving anything half done in the world.

## Borrow the Latency Investigator's narrowing order for slow mornings

The discipline behind the blast-radius table is not new. [Latency Investigator](/bots/latency-investigator) applies it to performance regressions in your own product: establish the before and the after with dates, narrow by one dimension at a time, stop at the first dimension that separates the good cases from the bad ones cleanly, and keep evidence and hypothesis in two separate labelled sections. Swap its dimensions for Grok Bot's, which are Bot, device, network and website, and you have the checks at the top of this page.

Its boundary carries over too. It never changes an alert, a threshold, a feature flag or a production setting; it investigates and writes up, and a human decides what happens next. That is the right posture for a slow morning. Investigate and record. Do not reset the computer, delete a Bot or re-run a send in the hope that something changes.

[VM Overwatch](/bots/vm-overwatch) supplies the other half: a before. On a weekday cadence it inventories the shared workspace, flags a disk that is filling or two Bots writing the same path, and says so in one line when everything is clean. When a morning goes wrong, a dated inventory from yesterday lets you ask what changed on your side before you ask what changed on theirs. It is barred from removing other Bots' working files and from treating screens as isolation, so it can run every day without becoming a new source of surprises.

## Switch pages once the problem has one Bot's name on it

This page is for the moment you do not yet know whether the problem is the service or something of yours. It stops applying as soon as the scope test narrows things to one place. One quiet Bot on an otherwise healthy account belongs to the page about Bots that stop responding. An unreachable-computer error belongs to the recovery walkthrough. A job that stopped halfway and needs resuming without doubling anything belongs to [the stalled-job guide](/blog/grok-bot-stalled), and the [index of fifteen Grok Bot failures](/blog/grok-bot-troubleshooting) covers the rest of the map.

The facts above are the ones the Grok Bot troubleshooting, FAQ, proxy, security and routines pages and Cursor's plans page gave as of 23 September 2026. Expect parts of it to move while Grok Bot stays in beta. The paused-routine behaviour is described as something the app may do, the setup labels may change, and the Check system status link is a feature of Cursor's help pages that this page does not control. If any of it has moved, the current [troubleshooting docs](https://docs.x.ai/grok-bot/troubleshooting) win over this page.

## Frequently Asked Questions

### How do I check if Grok Bot is down?

Narrow the scope before you assume an outage. Send a short message to a second Bot on the same account; if it answers, the service is up and the problem is narrower. Open the same conversation on your other device, try the desktop on a phone hotspot, and give the Bot a task on a different website. Check Weekly usage in the account menu, since an empty pool stops every Bot at once. Then look at the Check system status link at the bottom of Cursor's help pages.

### Why is Grok Bot so slow today?

Several documented states look like slowness. The computer may be showing Starting your computer or Updating your computer, which can take several minutes. A Bot may be working through a queue, because one Bot runs one computer-use task on its screen at a time. A website may be challenging or blocking automation, sometimes because it flags datacenter IP addresses. Open Agent Computer and watch for a minute: steady movement means it is working, while a page that never changes means it is waiting.

### Is there a Grok Bot status page?

The Grok Bot docs do not publish a status page address of their own. Cursor's help pages, including the Grok Bot plans and billing page, carry a Check system status link at the bottom next to Contact Support, and that is the documented place to look for a service incident. Treat it as one input. It cannot tell you about causes on your side, such as a paused routine, an empty Weekly usage pool, a network gateway, or a website challenging your Bot.

### What should I do while I wait for Grok Bot to come back?

Keep a timestamped log of what fails, the exact error text, which Bots, devices and networks are affected, what Weekly usage shows, and any request IDs, copied in full before you clear a notice. Do not re-send, re-post or re-run anything with a side effect, because a failed action may have partly happened. Do not reset the computer during a suspected outage. When you contact support, add the Grok Bot version, your operating system, and what retry, restart or a computer update changed.
`,
};

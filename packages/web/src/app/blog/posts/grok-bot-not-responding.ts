import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Not Responding? Waiting on You, Busy, or Out of Usage',
  description:
    'Grok Bot not responding? Read the sidebar state, find the question, approval or login it is parked on, and rule out empty usage before you type hello again.',
  date: '2026-09-23',
  category: 'Guide',
  content: `
# Grok Bot Not Responding? Waiting on You, Busy, or Out of Usage

When a Grok Bot stops answering, look at the sidebar before you look at the composer. The docs give a Bot a short list of reasons to go quiet: it is waiting on you for a question, an approval, a login or a secret; its screen is busy finishing a computer-use task; the account has run out of usage; or a routine paused itself while you were away. Each of those leaves a different mark in the app, and reading the mark takes less time than typing "hello?" for the third time.

This page is about the Bot that sends nothing back at all. A Bot that produced half a job and then froze is a different problem with a different risk, which is doubling the work on restart, and it has its own page linked further down. Everything below was checked against the Grok Bot docs and Cursor's plans page as of 23 September 2026.

## Read the sidebar row before you type another message

The desktop sidebar is the fastest diagnostic you have, because the docs give it three distinct states and each one points at a different cause. Needs attention means the Bot has asked a question, wants an approval, or is handing a step to you. Unread activity means a new result has arrived that you have not opened. The third state is a working or typing status, which means the Bot is still busy.

| What the sidebar shows | What the docs say it means | Your next move |
|---|---|---|
| Needs attention | A question, an approval, or a handoff is waiting for you | Open the conversation and scroll to the Bot's last message or card |
| Unread activity | A new result arrived that you have not opened | Open it; the Bot did answer, you have not read it yet |
| Working or typing | The Bot is still busy | Watch the computer view before you interrupt |
| No marker at all | The docs do not describe an idle label | Check usage, then check whether the task or routine ever started |

Two details make these labels easier to misread than they should be. Opening a conversation marks its current activity as read, so if you glanced at the Bot on one device and then came back to the desktop, the marker you are looking for may already be gone. The Bot menu can mark a conversation read or unread by hand, which is worth doing when you open a request you cannot deal with yet.

A Bot you hid does not appear in the main list at all. Hiding does not pause a Bot or its routines, so a hidden Bot can be sitting on a question with nobody looking. Check Hidden Bots at the bottom of the sidebar if the quiet one is a Bot you tucked away last month.

Group chats add one more wrinkle. When you write to a group without mentioning anyone, the docs say the participating Bots decide who responds. If you meant the message for one particular Bot, type @ and pick it, so ownership of the request is not left to the room.

## Trace Tomasz's quiet Monday from the 08:40 request to the 08:52 login wall

Tomasz sells secondhand cameras and lenses online and runs three Bots on one Grok Bot account. Supplier Desk checks two wholesaler portals for price changes. Listings drafts marketplace listings from his intake sheet. Books reconciles the week's sales. On a Monday at 08:40, on a tram with his phone, he asked Supplier Desk to pull the week's lens price sheets from both portals and flag anything that had moved by 10 percent or more. Then he put the phone in his pocket and waited for it to buzz.

It never buzzed. By 09:25 he was at his desk, searching for why Grok Bot was not responding, and seriously considering deleting Supplier Desk and building it again. The table below is what the app had been showing the whole time.

| Time | What Tomasz did | What the app showed | What it meant |
|---|---|---|---|
| 08:40 | Sent the price-sheet request from his phone | Supplier Desk working | The task started normally |
| 08:52 | Nothing, phone in his pocket | Supplier Desk: Needs attention | The second portal wanted a password and a code |
| 09:05 | Nothing | Books: Unread activity | Another Bot had finished, so the service was answering |
| 09:25 | Opened the desktop app | A takeover request, 33 minutes old | The silence was a wait on him |
| 09:27 | Took control, signed in, finished two-factor, returned control | Supplier Desk working again | The wait was resolved |
| 09:31 | Asked Supplier Desk to also draft four lens listings | No new browser task until 09:41 | One computer-use task per screen |
| 09:41 | Read the finished price sheet | Supplier Desk: Unread activity | Done |

The Bot had done exactly what it should. The second portal's session had expired, the site wanted a password and a two-factor code, and the Bot stopped and asked him to take over rather than try anything clever. The row flipped to Needs attention at 08:52. The failure was that nothing carried that state to his pocket. Push delivery for the phone apps is still rolling out and was not enabled on his account, and Supplier Desk's own Notifications switch was off. The docs say both the device permission and the Bot's notification setting have to allow a notification, and he had neither in place.

The near miss matters as much as the fix. Deleting a Bot removes its profile, its conversation and its routines. Had he deleted Supplier Desk at 09:20, the takeover request would have vanished with the conversation, while the expired portal session sat on the shared computer for the next Bot to trip over. Rebuilding the Bot would have cost him its working context and fixed nothing.

Books, meanwhile, had posted its reconciliation at 09:05, and its row showed Unread activity. That one row ruled out an outage before he had looked at Supplier Desk at all. The service was answering, just not on the Bot he was worried about.

## Check the four things a waiting Bot can be parked on

The troubleshooting docs list what to look for when a Bot appears stuck: a question, an approval, a login or CAPTCHA, or a secret request. Every one of them is a deliberate stop, and every one of them looks like silence if you are not in the conversation.

| Wait | How it shows up | How you answer | What not to do |
|---|---|---|---|
| A question | A normal message, often above your later ones | Reply in the conversation or its thread | Answer with a reaction; a reaction should not carry a decision |
| An approval | A card with the operation and its inputs, or a New Email or New Slack Message draft | Allow once or Deny; Send or Discard on a draft | Approve a target or effect you cannot identify |
| A login, code, passkey or CAPTCHA | A request to take over the computer, or a form in chat | Take control in Agent Computer, finish the one step, return control | Paste a password or code into chat |
| A secure secret request | A masked input tied to a supported connection | Type the value into that request | Treat it as a general password manager |

A question is the easiest to miss because it looks like any other message. If you sent several messages after it, it will sit above them. Scroll up from the bottom until you reach the last thing the Bot wrote, and read that before you write anything new.

An approval arrives as a card showing the proposed operation and its inputs. On the desktop you get Allow once and Deny, and Always allow, which can save a matching rule. On iPhone and Android the Auto-review sheet offers Allow and Deny, plus Always allow when a rule is proposed. Drafts are a close cousin: when a Bot prepares an email or a Slack message, the conversation can show a draft card with a Send button and a Discard button. A Bot that has written the draft and is waiting for your Send has finished its part, and from the sidebar that can look exactly like a Bot that never started.

If a card has gone stale and is no longer actionable, the docs suggest rejecting or cancelling it where that control exists, sending a replacement instruction, and asking the Bot to regenerate the action with the corrected scope. If approvals keep appearing for the same kind of action, look under Settings -> General -> Bot -> Auto-review for a matching Ask first rule, including any team rule your admin requires. Ask first beats Allow automatically whenever both match.

A login, a two-factor code, a passkey, a CAPTCHA or a payment confirmation means a takeover. Open Agent Computer, take control, finish only the blocked step, confirm the signed-in page has loaded, hand control back and tell the Bot to carry on from the current page. For some steps, such as a checkout address or a phone number, the Bot can instead show a form in the chat, one per step, and fill your answers into the page. Never type a password or a one-time code into ordinary chat.

A secure secret request is the fourth kind of wait. For a supported connection, the Bot can show a masked input; the value stays out of the transcript and is not shown to the model. It exists for that connection, not as a general place to keep passwords.

Here is the argument for leaving all four waits exactly as they are. Each one is a boundary that stops the Bot at the moment a human has to decide or authenticate. A Bot that never waits on you is a Bot that either types your password or guesses at your approval, and neither is something you want running while you sit on a tram. The fix for a missed wait is to make it louder, which the notification and charter sections below cover, not to make the Bot stop asking.

## Open Agent Computer when the transcript has nothing new

Sometimes the row says working, the transcript has no question in it, and still nothing arrives. That is the moment to watch the Bot instead of messaging it. Open Agent Computer from the conversation. The preview shows clicks, typing, navigation and the current status, so you can see whether the Bot is making progress or sitting on a page.

What you are looking for is a page that wants something the Bot will not provide. The docs are explicit that a site may block automation, demand a fresh login, present a CAPTCHA or require a human to confirm something, and that the Bot should hand those steps to you rather than get around them. Some sites expire sessions quickly or ask for verification before each sensitive action, and the docs admit this cannot always be avoided. If you see the same verification page every time you look, tell the Bot to pause and notify you, then take over and do that step yourself.

Watching costs nothing. You can leave the preview while work continues, and closing the app or the laptop does not stop cloud work. The phone can do the same job: open the computer from a conversation to watch browser or desktop work, inspect the current screen, take over for a password or code, and return control.

What watching cannot tell you is whether the account still has usage. A Bot that cannot start will not be doing anything on its screen. If the preview shows nothing happening and the transcript shows nothing pending, skip ahead to the usage section before you conclude anything about the Bot itself.

## Stop stacking tasks on a screen that is still busy

Tomasz's second problem of the morning was smaller, and it is the kind anyone running more than one Bot will meet. At 09:31, with Supplier Desk halfway through the second portal, he asked the same Bot to draft listings for four lenses. The listings did not start until 09:41, and for those ten minutes it looked as though the Bot was ignoring him.

The docs explain why. The shared computer gives every Bot a separate screen, so several Bots can use browser and desktop tools in parallel, but one Bot can run only one computer-use task on its screen at a time. A computer-use task already active on a Bot's screen may need to finish, or be redirected, before another one can start. The listings request was not lost. It was queued behind a job that owned the screen.

You have two good options and one bad one. The first good option is to send the second job to a different Bot. Listings had a screen with nothing on it, and the job was really Listings' job anyway. The second good option is to redirect: a direct message from you takes priority over background work and can redirect the current turn, so if the new request matters more than the one in progress, say so plainly. The bad option is to send the same request three more times, which leaves the Bot four copies of one ask to reconcile when its screen frees up.

One caution goes with the parallel screens. They are separate work surfaces, not separate security boundaries. Every Bot on your account shares the same browser sessions, files and command-line credentials. Spreading jobs across Bots is a scheduling decision, never an isolation decision.

## Redirect or say Stop now, and know what neither one undoes

Two messages do most of the work when a Bot is busy in the wrong direction. The first is a short redirect. Name what to stop, what to do instead, and where to report: "Stop checking the second portal. Finish the first portal's sheet, post it here, then wait." Short beats polite, because the Bot has to act on it mid-turn.

The second is a direct "Stop now". The docs recommend it when the work should end immediately. Use it when a Bot is doing something you did not ask for, when you realise the input was wrong, or when you simply need the screen back for a different job.

Neither message rewinds anything. Stop now ends the work; it does not undo actions the Bot already completed. An approval controls the action it describes, not work that has already happened. Clearing an error notice removes the notification, not the external action or the Bot's history. If a Bot sent, saved or changed something before you stopped it, that thing is still sent, saved or changed, and cleaning it up is a separate job you do on purpose.

This is also why the redirect should come before the impatience. A Bot that is waiting on you does nothing while it waits. A Bot that you interrupt with a vague "just do it" might resume in a direction neither of you meant, and then you have a real problem instead of a quiet one.

## Rule out an empty usage meter across the whole account

Usage is the cause that silences the most Bots at once, because it is not a Bot setting at all. Every Bot on the account draws from the same Weekly usage, and Cursor's plans page says macOS and iOS share a single usage bucket tied to the signed-in Cursor account. When that pool empties, what happens next depends on one switch.

If on-demand is off, Grok Bot stops when Weekly usage runs out. The screen tells you that you have reached your Grok Bot usage limit, and it resets with weekly usage. If on-demand is on, work continues as on-demand usage, billed through Cursor, until it reaches the On-demand monthly limit. That limit is not a hard stop in the middle of a run: a Bot already working can finish past it, and after that on-demand stops until you raise the limit or the billing cycle resets.

| What you see | Likely state | Where to confirm | What changes it |
|---|---|---|---|
| Every Bot stops and the screen says you reached your Grok Bot usage limit | Weekly usage is spent and on-demand is off | Weekly usage in the account menu | The weekly reset, or turning on-demand on |
| Runs finish, then nothing new starts anywhere | The On-demand monthly limit was reached | On-demand monthly limit in Settings, or Spending on the web | Raising the limit, or the billing cycle resetting |
| A trial account stops partway through a big job | The trial credit is used up | The plan screen | A paid Cursor plan or a linked subscription; used credit is not restored |
| One Bot is quiet while others post results | Not usage, since usage is shared | The other Bots' sidebar rows | Go back to the four waits |

To check, open the account menu, which can show Weekly usage at a glance, or Settings -> Usage & Billing where that section appears. The On-demand monthly limit lives in Grok Bot's Settings, where Enable turns it on if it is off; on the web the same cap appears as Spending and Monthly Limit on cursor.com/dashboard. If you subscribed through the App Store or Google Play, the plans page says to set that limit on the web. On a self-serve Cursor Teams plan, on-demand is enabled by default.

There is no Grok Bot-specific spend cap. The On-demand monthly limit is an account-level cap, so when it bites it quiets every Bot on the account in the same moment, which is exactly the pattern people mistake for an outage.

Tomasz opened the account menu at 09:26, and Weekly usage had plenty left, which fitted with Books having posted at 09:05. Usage was not his problem. But he checked, and that is the habit worth keeping: it takes a moment, and it rules out the one cause that no amount of messaging a Bot will ever fix.

## Find routines that paused themselves while you were away

A routine that did not run feels like a Bot that did not respond, and one documented cause has nothing to do with the Bot. To control unattended usage, Grok Bot may ask whether to keep routines running after a long period away, and pause them if nobody answers. The docs do not define how long that period is. They do tell you to review paused routines when you return.

The phone is enough for this check now. Open a Bot's profile and each routine shows its schedule, its next run, its instruction and its Run history, with an Active toggle that pauses or resumes it. A routine you find switched off after a holiday is not broken. It was paused on your behalf, and switching Active back on is the fix.

If the routine is active and still did not run, the troubleshooting docs give a checklist worth walking in order: the routine is enabled, its schedule and time zone are right, the Bot that owns it still exists, required plugins are still authenticated, the computer can reach the source system, and usage or account access has not been paused. The time zone point catches people. Routines follow the Timezone setting under Settings -> General -> Bot, not the clock on whichever device you happen to be holding.

Editing a schedule or an instruction, and testing a routine, still need the desktop app. Be careful with Test run when you get there. The docs warn that a test performs real work, including navigating sites, changing files and calling connected tools, so test with safe input and keep write actions behind approval. And deleting a Bot removes the routines it owns, which is one more reason not to delete a quiet Bot just to see whether it wakes up.

## Make the next wait reach your pocket

Tomasz lost a morning to a wait that never left his desk. The notification settings are where you fix that, and they have more moving parts than most people expect.

Each Bot has its own Notifications preference. Open View conversation details, then Bot settings, and turn it on to get an operating-system or mobile notification when that Bot finishes or needs input. On iPhone and Android the app also asks for notification permission during first run, and the docs are clear that both the device permission and the Bot's own setting must allow a notification before one appears.

Then there is the rollout. Mobile push delivery is still rolling out and may not be enabled for every account yet. When push is not available, the in-app attention states still work, which means the phone app shows you the wait the moment you open it but will not tap you on the shoulder. If your account is in that position, the honest workaround is a habit rather than a setting: open the app when you expect a result, instead of waiting for a buzz that is not coming.

Two quieter rules round this out. Notifications are normally suppressed while Grok Bot is focused, although the sidebar and the dock badge still show unread activity, so a Bot can finish while you stare at a different conversation and you will only see the badge. And group chats do not have the same per-Bot notification switch, so a Bot that stops to ask something inside a group will not reach you through the setting you turned on for its one-to-one conversation.

After that Monday, Tomasz turned Notifications on for all three Bots and added a paragraph to each Bot's description telling it to state what it is waiting on before it waits. The next time a portal session expired, the first line he read when he opened the app was the reason.

## Answer the reader who is sure the service fell over

The strongest objection to everything above goes like this: my Bot worked yesterday, today it sends nothing, and it is far more likely that Grok Bot is having a bad day than that I missed a label. Sometimes that will be true. This is beta software, services have incidents, and nothing on this page makes the service immune to them.

But an outage and a wait leave different evidence, and you can tell them apart quickly. If another Bot on the same account answers a short message, or shows an Unread activity marker from this morning, the service was answering at that moment. A Needs attention marker is not something a broken service shows you. It is the app telling you it needs you.

If every Bot is quiet at once, check Weekly usage before you assume an outage, because an empty usage pool produces exactly that pattern. Then look for the Check system status link that Cursor's help pages carry at the bottom. The Grok Bot docs do not publish a separate status page address, and this page will not guess one. The full set of checks, including how to tell a network problem on your side from a service problem, is on the page about [whether Grok Bot is down or just slow](/blog/is-grok-bot-down).

Tomasz's evidence was sitting in the sidebar the whole time: Books had posted at 09:05. That is the whole counter-argument in one row.

## Send half-finished jobs to the stalled-job page instead

This page and the [guide to restarting a stalled job without doubling the work](/blog/grok-bot-stalled) sound like the same problem and are not. The difference is whether anything came back.

If the Bot never replied, never started, or started and is now waiting on you, you are in the right place: read the sidebar, answer the wait, check usage. Nothing has been half done, so nothing can be done twice.

If the Bot produced part of the job and then went quiet, the risk changes. Some of the work may already exist as files in the shared workspace, and some actions may already have happened in the outside world. Restarting from the top can duplicate a write, a post or a message. That page is about resuming from the last checkpoint without repeating anything, and it is the right place to go before you type "start over".

If the conversation reports that the computer is unreachable, that is not silence either. It is a specific state with its own recovery order, walked step by step in [the six-step recovery order for an unreachable computer](/blog/grok-bot-cant-reach-computer), where Reset comes last rather than first. For the wider map of failures, including connectors and bad output, the [fifteen-failure troubleshooting hub](/blog/grok-bot-troubleshooting) is the index.

## Paste a charter line that makes every wait announce itself

The cheapest fix for silence is to make the Bot explain its silence before it starts. A Bot's description holds standing rules, and the docs recommend putting durable boundaries there rather than in individual messages. This is the block Tomasz added to Supplier Desk, with the portal names and his threshold swapped for placeholders you can fill in.

\`\`\`text
Name: Supplier Desk
Job: pull this week's price sheets from <portal A> and <portal B> and flag
any lens whose price moved <10> percent or more since last week.

Before you wait on me for anything, post one line and then stop:
  WAITING ON: question | approval | login or code | secret request
  SINCE: <local time and time zone>
  I NEED YOU TO: <the single thing I must do>

Never type a password, a passkey, a one-time code or a CAPTCHA answer.
Ask me to take over the computer, then wait.
Never retry a failed login more than once. After one failure, stop and wait.
Never send, post, publish or buy anything. Draft it and wait for my Send.
If a new task arrives while your screen is busy, say which task you are
finishing first and do not start the new one until I confirm.
\`\`\`

The first block is the useful one on a busy morning. A WAITING ON line at the bottom of the transcript is the first thing you read when you open the conversation, and it answers the question you came to ask. The time matters because a wait that is three minutes old and a wait that is three hours old call for different reactions.

The middle lines are the boundary. They say what the Bot never does without a human: type a credential, clear a CAPTCHA, retry a failed login in a loop, or send anything. Those are the actions that make a Bot unsafe to leave alone, and they are also exactly the actions that cause waits. Accepting the waits is the price of being able to walk away from the Bot at all.

The last lines handle the busy screen. A Bot that tells you which task it is finishing first turns ten confusing minutes into one clear sentence. None of this needs a new feature. It is text in a description, and you can paste it in this afternoon.

## Let one watchdog Bot notice the silence for you

If you run more than a handful of Bots, you will eventually miss a wait on one of them no matter how good your notifications are. That is the job [Stuck Bot Foreman](/bots/stuck-bot-foreman) was written for. On a cadence you set, it checks each sibling Bot's last output time, last error and whether a routine was due, nags a stuck Bot once, and pages you only when a human actually has to step in: an approval sitting untouched past the limit you named, a failed credential, or two nags with no movement.

Its boundary is the reason it is safe to run. It never restarts, deletes or rewrites another Bot, and it never pages you while the fleet is moving. A watchdog allowed to delete and rebuild a stuck Bot could have wiped Tomasz's takeover request along with the conversation. This one would have posted a single line saying Supplier Desk had been waiting on a login since 08:52.

Its charter also carries the right assumption about the machine. Sibling Bots share one computer, so a stuck Bot may be waiting on the same session or login as another one, and the foreman reports that possibility instead of treating each Bot as a separate machine.

The foreman reads a registry of which Bots exist and what they are meant to be doing. [VM Overwatch](/bots/vm-overwatch) keeps a live registry file of the shared workspace as part of its weekday housekeeping, and its own boundary is just as strict: it never deletes another Bot's working files and never treats screens as isolation. Run the two together and the question of whether anything is quietly waiting on you gets asked on a schedule, instead of at your desk half an hour too late.

## Stop using this page once the silence comes with an error

This page covers silence: nothing came back, and the app is showing a state rather than an error. It stops applying the moment something more specific appears.

If an error notice appears above the composer under Notifications, you have an error, not a wait. Some notices include Copy request ID; copy the full ID before you clear anything, then follow [the support checklist and report template](/blog/grok-bot-support-request-id). If the conversation says the computer cannot be reached, use the unreachable-computer walkthrough linked above. If Grok Bot itself will not finish signing in, the troubleshooting docs have a separate sign-in checklist, and none of the attention states here will appear until that works.

The labels on this page (Needs attention, Unread activity, Weekly usage, On-demand monthly limit, Active, Notifications) are the ones the Grok Bot docs and Cursor's plans page used as of 23 September 2026. The product is still in beta, push delivery is still rolling out, and routine pausing is described as something the app may do rather than a fixed rule. If your screen shows a label this page does not mention, trust the screen and the current [troubleshooting docs](https://docs.x.ai/grok-bot/troubleshooting) over this page.

## Frequently Asked Questions

### Why is my Grok Bot not responding to my messages?

The docs describe a few states that make a Grok Bot go quiet. It may be waiting on you for a question, an approval, a login or two-factor takeover, or a secure secret request, in which case its sidebar row shows Needs attention. It may be busy finishing a computer-use task on its screen, since one Bot runs one such task at a time. Or the account may be out of Weekly usage with on-demand switched off. Read the sidebar row first, then scroll to the Bot's last message before sending anything new.

### Does sending more messages wake up a stuck Grok Bot?

Not if it is waiting on you. A Bot parked on a login, a CAPTCHA, an approval or a secret request needs that specific thing, and extra messages do not supply it. A direct message does take priority over background work and can redirect the current turn, so a short, specific redirect helps when the approach is wrong, and a direct Stop now ends the work. Repeating the same request only queues more copies of it, and neither a redirect nor Stop now undoes actions the Bot has already completed.

### Can running out of usage make every Grok Bot go silent at once?

Yes. Weekly usage is shared by every Bot on the Cursor account, and macOS and iOS draw from the same bucket. If on-demand is off, Grok Bot stops when Weekly usage runs out and the screen says you have reached your Grok Bot usage limit until the weekly reset. If on-demand is on, work continues until the account-level On-demand monthly limit is reached; a Bot already working can finish past it, and then on-demand stops. Check Weekly usage in the account menu before assuming an outage.

### How do I get notified when a Grok Bot needs me?

Turn on Notifications in that Bot's settings, reached from View conversation details and then Bot settings, and allow notifications on your device when the phone app asks. Both must allow it. Mobile push delivery is still rolling out and may not be enabled for every account yet, but the in-app attention states work without it. Notifications are normally suppressed while the app is focused, and group chats do not have the same per-Bot switch, so check the sidebar yourself when you are working inside a group.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot on Android: The App Exists, Here Is What It Can Do',
  description:
    'Grok Bot has an Android app on Google Play for Android 9 or later. It starts work, approves steps and pauses routines. Editing and run history still need the desktop app.',
  date: '2026-09-04',
  category: 'Reference',
  content: `
# Grok Bot on Android: The App Exists, Here Is What It Can Do

Correction first, because an earlier version of this page said the opposite. When it was written in late August 2026 the Grok Bot FAQ listed macOS, Windows and iPhone and nothing else, and this site told Android owners not to wait for a client the docs had not promised. That was accurate on the day and it is wrong now.

As of 4 September 2026 the [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq) lists Android 9 or later as a supported platform, and the [mobile page](https://docs.x.ai/grok-bot/mobile), last updated 2 September 2026, says to download Grok Bot from Google Play on Android. The same page describes what the phone app can do, and it is a good deal more than the two verbs the old iPhone companion had.

This page is the corrected reference: what the Android app is, what it can and cannot do, how it fits beside the desktop app, and how an Android-only founder runs a week on it. Everything below comes from those two docs pages. Where they are silent, this page says so rather than guessing.

## Install it from Google Play, and treat anything else as unofficial

The documented path is one line: download Grok Bot from Google Play on Android. That is the whole install story and it is worth being strict about, because for a few weeks the store had no listing and the gap filled with wrappers and sideload links using the name.

Those files did not become official when the real app shipped. If you installed something called grok-bot from outside the store during the gap, treat it as unknown software that may hold your credentials: uninstall it, rotate anything you signed into through it, and install the store listing. The [download page](/blog/download-grok-bot) covers the same rule for desktop, where x.ai/bot is the only source.

| What you found | What it is | What to do |
|---|---|---|
| Grok Bot on Google Play | The documented Android client | Install it |
| An APK named grok-bot from a forum | Unofficial software | Do not install; rotate credentials if you did |
| Grok, the chatbot app | A different product | Fine to keep, but it is not this |
| A dated social post about Android | Old news, or a guess | Read the mobile page instead |

The third row still catches people. Grok the chatbot and Grok Bot are separate products with separate apps, and the store search for one returns the other. The listing you want is the one whose description talks about Bots, routines and a shared computer.

## Check the two gates before you blame the app

Two requirements sit in front of the install, and both are documented on the mobile page.

The phone needs Android 9 or later. The docs do not list device makes, screen sizes or anything about tablets beyond one sentence, which is that Grok Bot is designed for phones, not iPad. An Android tablet is not mentioned at all, so treat it as undocumented rather than supported.

The account needs an eligible plan. The mobile page names them: SuperGrok Plus, SuperGrok Heavy, Cursor Pro+, Cursor Ultra, or Cursor Teams Standard or Premium. Cursor Hobby and Cursor Pro are not on the list. If you are choosing a plan for the first time, [the cheapest way into Grok Bot](/blog/cheapest-way-into-grok-bot) is the arithmetic, and Cursor Pro+ at $60 a month is the cheapest documented paid path. A one-time trial also exists.

An installed app on an ineligible account is an installed app that will not let you in. Confirm the plan on the invoice, not the product name, before you spend an evening on the install.

## Sign in, take the tour, and wait for the computer once

The documented first run is short. Open Grok Bot, choose Login with Cursor, finish the authentication in the browser, and return to the app. New users get a first-run tour, choose a first Bot, and wait while the shared computer is set up. Existing users land on their synced Bot list.

That last sentence is the important one. The phone does not get its own bots or its own computer. It connects to the same Bots, conversations, routines, connectors and shared cloud computer as the desktop app, and the same Bots and conversations sync across every signed-in device. Whatever you built at a desk is already on the phone when you sign in.

Enable notifications if you want to know when a Bot has a result, a question or an approval request. The docs are honest about the state of this: push delivery is still rolling out, and in-app attention states remain available when push is not enabled for the account. In plain terms, do not build a workflow that depends on the phone buzzing until you have seen it buzz.

## Sort every job into phone, desktop, or cloud computer

The useful mental model has three machines, and the docs describe the split cleanly.

| Job | Android app | Desktop app | Cloud computer |
|---|---|---|---|
| Message a Bot, dictate, attach a photo or file | Yes | Yes | Not a client |
| Create a Bot or a group | Yes | Yes | |
| Edit a Bot profile, delete a Bot | Yes | Yes | |
| Approve or deny a step | Yes | Yes | Waits if set to ask |
| Watch the computer, take over for a password, 2FA or CAPTCHA | Yes | Yes | The screen being watched |
| Pause or resume a routine | Yes | Yes | Keeps running until told |
| Edit a routine schedule or instruction | No | Yes | |
| View run history, test a routine, delete a routine | No | Yes | |
| Teach by demonstration | No | Yes | |
| Do the actual work | No | No | Yes |

The bottom row is the one that makes the rest make sense. The bots do not run on the phone and never did. They run on a persistent cloud computer assigned to your account, and the phone is a control surface for it. Work continues in the cloud when the app is closed, which the mobile page states outright.

## Start work from the train and let the cloud carry it

From a conversation, the documented actions are: send text, dictate a message, take or attach a photo, choose an image or file, mention another Bot or @everyone in a group, reply in a thread, and react to a message. Drafts are saved per conversation when you navigate away.

That is enough to start real work from a phone. Photograph a whiteboard and hand it to a bot. Dictate the brief for a research task. Drop a PDF into a conversation and ask for the three numbers that matter. The bot picks the job up on the shared computer and the result arrives in the same thread whether you are still looking at it or not.

What you cannot do from the conversation is change the rules the bot operates under, and that is deliberate. A charter is authored and edited where you can read the whole thing and test it, which in the current docs means the desktop app for anything routine-shaped.

## Approve, deny, or take the wheel when the computer stops

The approval flow is where the Android app earns its place for anyone running bots with real access.

A bot set to require approval on a send, a purchase or a delete stops at that step and waits. On the phone you can see the request and answer it. The docs also describe opening the computer from a conversation to watch browser or desktop work, take over for a password, a two-factor code or a CAPTCHA, inspect the current screen, and return control to the Bot. Those are precisely the moments that used to strand a bot until you got back to a desk.

Two cautions that the docs make and this page repeats. The screen you are looking at is the same shared computer used by every Bot on your account, so anything you type into it is available to all of them; the [shared computer piece](/blog/grok-bot-shared-computer-security) covers what that means. And an approval controls the proposed action; it does not reverse work already completed. Approving from a train is convenient. Approving without reading is how a bot sends the wrong thing with your blessing.

## Pause a routine from the phone, and know what you cannot touch there

Open a Bot's profile to review its routines. You can inspect the schedule, the next run and the instruction, then use Active to pause or resume. That is the pocket freeze the old iPhone-only companion offered, now on Android too.

The line the docs draw immediately after is the one to remember: editing the schedule or instruction, viewing run history, testing, and deleting a routine currently require the desktop app.

| You want to | On the phone | At a desk |
|---|---|---|
| Stop a routine that is misbehaving | Toggle Active off | Same, plus read the run history |
| See why it misbehaved | Read the conversation only | Open the run records |
| Change what it does | Not available | Edit the instruction |
| Change when it runs | Not available | Edit the schedule |
| Try the fix once | Not available | Test |
| Retire it | Not available | Delete the routine |

So the phone is a brake, not a workshop. If a routine loops at eleven at night, pause it from bed and diagnose in the morning at a desktop. [How to schedule a routine](/blog/how-to-schedule-a-grok-bot-routine) covers the limits that apply either way: a maximum of fifty routines per Bot and twenty run records kept per routine, none of it team-level.

## Create a bot on the phone, then finish it at a desk

The + control on the home screen offers New Agent or New Group Chat. You can also edit a Bot profile, manage group members, pin or hide a conversation, and delete a Bot, all from the phone.

That means a bot can be born on Android. What it cannot get on Android is a tested routine, because testing and editing routines are desktop jobs. The workable pattern is to create the Bot and paste its charter from the phone, use it conversationally for a day to see whether the charter holds, and only then sit at a desktop to attach a schedule and run a test that can fail.

Deleting from the phone deserves one warning that comes from the security docs rather than the mobile page. Deleting a Bot deletes its routines and does not remove shared-computer files or browser sessions. If a bot was signed into something, revoke that login yourself before you tap delete, on any device.

## Keep teach by demonstration on the desktop

Teach by demonstration records visible computer interaction to draft a skill. The mobile page says that some advanced desktop controls and teach-by-demonstration workflows are not available on mobile, and that you should use the desktop app when a flow requires them.

This is not a phone limitation you can route around. A demonstration needs you driving the shared computer with a full desktop client for up to ten minutes, and the phone's take-over view is built for unblocking a step, not recording a workflow. Plan demonstrations for desk time and treat the phone as the place you check whether the resulting skill is behaving.

## Walk an Android-only founder through the first week

Kiran is a founder whose only personal device is a Pixel, with occasional access to a coworking Windows machine. On the old docs Kiran had no client at all. On the new ones the week looks different.

Monday, Kiran installs Grok Bot from Google Play, signs in with a Cursor Pro+ account, takes the tour, and waits for the shared computer to set up. Tuesday, Kiran creates two bots from the phone and pastes charters written in a notes app: [Inbox Triage](/bots/inbox-triage), which drafts and never sends, and [Lead Scout](/bots/lead-scout), which ranks and never contacts anyone. Both are used conversationally for two days. Thursday, at the coworking desk, Kiran attaches a morning schedule to each, runs a test that is designed to fail, and reads the run records. Friday, a selector loop starts at 22:40 and Kiran pauses it from the sofa.

| Day | Where | What happened | What to copy |
|---|---|---|---|
| Monday | Phone | Install, sign in, tour, computer set up | Confirm the plan first |
| Tuesday | Phone | Two bots created, charters pasted | Never-send, never-contact boundaries |
| Wednesday | Phone | Conversational use, one approval answered | Read before approving |
| Thursday | Desk | Schedules attached, tests run, history read | Routines are desk work |
| Friday | Phone | Looping routine paused from bed | The phone is the brake |

The difference from the old week is not that the desk disappeared. It is that the desk shrank to the two things that need it: editing routines and reading history. Everything else moved into a pocket.

## Paste a charter that treats the phone as a control, not a console

Write the phone into the bot, or the bot will assume every approval it receives was read carefully.

\`\`\`text
Name: Kiran founder desk bots
You run on the account's shared cloud computer, not on my phone.
I usually read your requests on Android, on the move, between other things.
Before any send, purchase, publish or delete: stop, state the exact action in
one line, and wait for approval. Assume I am reading on a small screen.
If an approval arrives in under five seconds of you asking, treat it as a
misclick: restate the action and ask once more.
Never contact a lead. Rank and brief only.
Inbox: classify and draft. Leave every draft unsent.
If a step needs a password, a two-factor code or a CAPTCHA, stop and wait.
I can pause you from the phone but I cannot edit you there. If you are unsure
what an instruction means, do nothing and say so; I will fix it at a desk.
Do not use sibling bots as isolation. Screens are not a security boundary.
Keep runs reconstructable from files I can open, because there is no audit
view of your actions yet.
\`\`\`

The five-second line is the one specific to phones. It costs one extra confirmation on the rare fast tap and it prevents the approval-by-thumb that a small screen invites. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) packs a morning document and never sends a message, which is the right shape for anything you will read on a phone first.

## Answer the claim that the phone app makes the desktop optional

The strongest version of the objection: create, message, approve, take over, pause, delete. That is most of the product. Why keep a desktop at all?

Because the docs still put four jobs on the desktop, and they are the four that decide whether a bot is trustworthy: editing a routine's instruction, editing its schedule, testing it, and reading its run history. Those are the jobs where you find out that a bot has been doing the wrong thing for a week. A roster you can operate from a phone but cannot audit from a phone is a roster you audit less often.

There is also teach by demonstration, and the docs' own phrase, some advanced desktop controls, which this page will not expand into a list the docs did not print.

| Claim | What holds | What does not |
|---|---|---|
| I can run everything from Android | Daily operation, yes | Editing, testing, history, demonstrations |
| I never need to sit at a desk | Weeks with no changes, plausibly | The week a routine needs fixing |
| The phone is a full client now | For conversations and approvals | For authoring |

Grant the objection most of its ground. A founder who authors on Sundays at a desk and operates from a phone all week is using the product as documented. A founder who never opens the desktop app is running routines nobody has tested since they were written.

## Map each failure to the assumption behind it

| Symptom | Assumption | Fix |
|---|---|---|
| Installed, cannot get past sign-in | The install is the gate | The plan is the gate; confirm Pro+, Ultra, Teams, SuperGrok Plus or Heavy |
| Cannot find the edit button for a routine | Everything is on the phone now | Editing, history, testing and deleting are desktop jobs |
| Approved a send you did not mean to | A tap on a small screen is a decision | Add the restate-and-ask-again line to the charter |
| Phone never buzzed for an approval | Push is guaranteed | Push is still rolling out; check in-app attention states |
| Typed a password on the take-over screen and now every bot has it | The screen belongs to one bot | The computer is shared across the account; revoke and rotate |
| Deleted a bot from the phone, sessions survived | Delete cleans up | Revoke logins before deleting, on any device |

The password row is the expensive one and it is not new. The take-over view is the same shared computer the docs describe everywhere else. The convenience of unblocking a two-factor prompt from a bus does not change what that computer remembers afterwards.

## Watch the parts that are still moving

Two things in the mobile docs are explicitly in flux, and both belong in your planning rather than your assumptions.

Push notifications are rolling out. Until you have seen one arrive on your own phone, treat approvals as something you check for rather than something that finds you. In-app attention states are the fallback the docs name.

Auto Review is listed in Settings as configurable when available. This page does not describe it, because the docs page checked for this article does not describe it beyond that phrase. When it lands, it changes the approval story on the phone, and this page will be updated.

Grok Bot is in beta. The platform list changed under this very page inside ten days. The habit that survives that is the one this site keeps repeating: date every claim, cite the docs page it came from, and re-read that page before you build a week on it.

## Send iPad and Linux questions to the pages that own them

If you landed here with an Android tablet, the docs say Grok Bot is designed for phones and do not mention Android tablets at all; [the iPad page](/blog/grok-bot-ipad-status) covers the tablet situation, which is unsupported on Apple's side and undocumented on Android's.

If you landed here because someone said the computer is Linux, that is true and separate: the shared cloud computer is a managed Linux machine, and there is now also a Linux desktop app, as a .deb, an .rpm or an AppImage. The full grid is on [supported platforms](/blog/grok-bot-supported-platforms). If something on the phone is not behaving, [Grok Bot troubleshooting](/blog/grok-bot-troubleshooting) is the fault-finding list, and [the iPhone page](/blog/grok-bot-iphone-app) describes the same companion app from the other side.

## When this page stops applying

This page was checked against docs.x.ai/grok-bot/faq and docs.x.ai/grok-bot/mobile on 4 September 2026. The mobile page carried a last-updated date of 2 September 2026. If the mobile page you are reading is newer than that, it wins.

The specific lines most likely to change are the desktop-only list for routines, the push notification rollout, and the Auto Review setting. The line least likely to change is the architecture: the phone controls, the cloud computer works, and the two are not the same machine.

## Frequently Asked Questions

### Is there a Grok Bot app for Android?

Yes, as of early September 2026. The Grok Bot FAQ lists Android 9 or later as a supported platform and the mobile page says to download Grok Bot from Google Play. It is a companion app: it connects to the same Bots, conversations, routines and shared cloud computer as the desktop app, and work continues in the cloud when the app is closed. An earlier version of this page said no Android app existed, which was accurate when written and is now wrong.

### What can the Android app not do?

Editing a routine's schedule or instruction, viewing run history, testing a routine and deleting a routine all require the desktop app, in the docs' own words. Teach by demonstration and some advanced desktop controls are also desktop only. Everything conversational, approvals, taking over the computer for a password or CAPTCHA, pausing and resuming routines, and creating or deleting Bots work on the phone.

### Can I use Grok Bot if I only own an Android phone?

You can install it, sign in with an eligible plan, create Bots, run them conversationally, approve their steps and pause their routines. What you cannot do from the phone is attach or edit a routine, test it, or read its run history, so an Android-only setup means either borrowing a desktop for those jobs or running bots without scheduled routines. Both are workable. Running scheduled routines nobody can audit is the option to avoid.

### Does Grok Bot work on an Android tablet or iPad?

The docs say Grok Bot is currently designed for phones, not iPad, and that iPad is not supported at initial launch. Android tablets are not mentioned at all, which this site reads as undocumented rather than supported. If you have a tablet and a phone, use the phone for Grok Bot and treat the tablet as unrelated hardware until the docs say otherwise.
`,
};

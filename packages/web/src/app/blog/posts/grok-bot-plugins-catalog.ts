import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Plugins: Connect Only What the Job Needs',
  description:
    'Grok Bot plugins are account-wide on a shared computer. Connect the minimum for one job, and assume every other bot can reach the same session.',
  date: '2026-08-27',
  category: 'Reference',
  content: `
# Grok Bot Plugins: Connect Only What the Job Needs

The Plugins list never asks which bot this grant is for, because Grok Bot has no way to keep that answer. All bots on an account share one persistent cloud computer assigned to you, not to a bot. Each bot gets its own screen. Screens are work surfaces, not security boundaries. The documentation is direct: "Do not use separate Bots as a security boundary."

So a Gmail plugin you connected so [Inbox Triage](/bots/inbox-triage) could label mail is not "the mail bot's Gmail." It is a session on the computer. [Lead Scout](/bots/lead-scout) can open it the same way you can open a tab someone else left signed in.

This page is not a catalog. Plugin tiles move, third-party names appear and vanish, and any count you saw on a social post is unverified. The useful work is a decision: connector versus browser login versus hosted MCP, in that order, with send and pay left off until a week of clean drafts exists. If a name such as Composio appears in your Plugins list, confirm scopes in that product's docs rather than trusting a roundup.

## Read the Plugins list as an account grant, not a per-bot catalog

The interface teaches the wrong unit. You are looking at one bot's setup screen when you click Connect. The product stores the result on the account computer. Cookies, signed-in sessions, files, and command-line credentials are shared across the roster. Deleting a bot does not remove those files or those sessions.

A catalog answers "what exists." You need "what does every bot I will ever create now reach." The second question is the one that hurts.

Read the list as a key ring, not as an app store. Each tile is a standing grant. It outlives the task and the bot you were configuring. It sits there for [Chief of Staff Briefing](/bots/chief-of-staff-briefing) and for the bot you have not named yet.

There is no audit view of Bot actions yet. You cannot later ask which bot opened Gmail at 02:14. Isolation has to happen at connect time.

The [least privilege guide](/blog/least-privilege-bots) is the policy version. This page is the Plugins version: which path, in which order, and what "for this bot only" actually means. The isolation picture is in [what the shared computer actually isolates](/blog/grok-bot-shared-computer-security).

## Choose the access path before you choose the product name

People pick a logo first. Gmail, a CRM, a calendar, a payment dashboard. Then they take whatever path the Plugins list offers. Reverse it. Pick the path, then see whether that logo even needs to be connected.

Three paths exist. They are not three ways to get the same risk.

| Path | What you grant | Where the secret sits idle | Right pick when | This path is not |
|---|---|---|---|---|
| Read-only connector | The scopes on the consent screen | With the connector, still account-wide | The job is looking or drafting | A wall around one bot |
| Browser login | Whatever that signed-in site will let a person click | Cookies and sessions on the shared computer | No connector exists for that job | A private tab for the bot you had open |
| Hosted MCP | The tools that server exposes | Tokens stay with Cursor's backend, not on the computer | You would otherwise store a token on disk | Isolation from other bots |

The last column is the one people skip. A connector is still account-wide. Hosted MCP is still account-wide. The hosted win is real and narrow: the token is not sitting in a file or cookie jar. Reach remains roster-wide.

Confirm the path on the screen in front of you. If a third-party name appears, including Composio or anything like it, confirm scopes in that product's current docs. Do not copy a feature list from an article, including this one.

[What a Grok Bot is](/blog/what-is-a-grok-bot) is the product shape. [How the Cursor account sits in the path](/blog/grok-bot-cursor-account-explained) is why "Cursor's backend" keeps showing up.

## Prefer a read-only connector when looking is the whole job

Most first jobs are looking jobs. Sort the inbox. List tomorrow's meetings. Fetch a thread. Rank public posts. None of those require send or pay. The connector you want is the one that returns text and stops.

Read-only is a consent screen that does not include send, pay, publish, delete, or admin. If the screen bundles those with read, you do not have a read-only connector. Decline it, find a narrower bundle, or skip the tile for a week.

Start here because the first week is diagnostic. A bot with a read-only mail connector that produces one honest labelled queue has told you whether it understands your work. A bot with send already connected has mixed "does it sort" with "did it mail someone."

[Inbox Triage](/bots/inbox-triage) is a looking and drafting job. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) is the same shape for the daily tidy, with send closed. If connecting the tile would let the bot do a verb the listing forbids, the tile is too wide for week one.

Read first, then make the read prove itself. That order is
[least privilege for bots](/blog/least-privilege-bots), applied to one screen.

## Open a browser session only after the connector path is empty

A browser login is the loudest grant you can make, because it is not a scope list. It is a person, signed in, at whatever permission level you have on that site. Every bot on the account can use that session. The computer keeps cookies. Deleting the bot you used to sign in does not sign the browser out.

Use it when there is no connector for the job, and only then. A supplier portal with no API. An admin console with no OAuth tile. A page you need to see once. Sign in, do the looking, write the result to a file you control, and sign out if the session does not need to persist.

Do not use the browser as a substitute for a connector you were too impatient to find. Driving Gmail in the browser when a Gmail connector exists is how you skip the consent screen that would have told you send was in the bundle. The connector is the narrower instrument when it exists.

If you must leave a browser session alive, write that fact into every charter on the account, not only the bot that signed in. From inside the machine, an open session is a tool. A bot that was never told about Gmail will still find Gmail if the cookie is there.

The [safety checklist](/blog/grok-bot-safety-checklist) is the pass you run before any of those sign-ins. Connector first, browser only when the connector path is empty.

## Keep hosted MCP tokens with Cursor's backend, not on the computer

Hosted MCP exists to solve a different problem than the Plugins shopping instinct. You need a tool. You do not want that tool's sign-in token written to disk on the shared computer, where every bot can read a file.

The documented fact is specific. Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. That is a real improvement on a \`.env\` sitting in a workspace folder. It is not a per-bot vault. Other bots on the account can still call the same hosted tools.

Use hosted MCP when the alternative is a secret on the machine, or when a hosted server already exposes the tools. Read that server's tool list the way you would read a consent screen. Servers over-expose. A Slack server that can post is not a read-only connector.

Do not use hosted MCP as a way to connect everything "safely." Safer secret storage plus roster-wide reach is still roster-wide reach. If you would not connect send through a plugin, do not connect send through a hosted server.

If a third-party MCP tile appears in your Plugins list, confirm scopes in that product's docs on the day you connect. Names in this category move. The path decision does not.

## Hold send and pay closed until a week of clean drafts exists

Send and pay are the moment the job leaves the computer. A draft you dislike is a file. A sent message is a conversation. A payment is money. Grok Bot's own security docs say: "An approval controls the proposed action. It does not reverse work already completed."

So the order is not "connect send, then be careful with approvals." Do not connect send or pay until the bot has a week of clean drafts: output you would have sent unchanged, with no attempt to send.

| Job this week | Connect now | Leave disconnected | Unblock send or pay only after |
|---|---|---|---|
| Sort mail and draft replies | Read-only mail, draft compose if the screen splits it | Send, filters, forwarding, settings | Seven working days of drafts you would send unchanged |
| Morning brief from calendar and inbox | Calendar read, mail read | Event create, mail send | The brief has been right for a week against your memory |
| Rank public leads overnight | Browser or a read connector for public pages | Any mail or DM plugin | Never, if the job is research. Contact stays a person. |
| Chase invoices | Read the mailbox or the ledger | Pay, refund, mark paid | A week of chase drafts, then still keep pay in your hands |

[Lead Scout](/bots/lead-scout) belongs on the third row. Research that can also send is no longer research. [Inbox Triage](/bots/inbox-triage) belongs on the first row. Send stays off even after the week if you like the review step.

There is no Grok Bot-specific spend cap. Overflow is on-demand from model and token cost, with no published dollar figure for the weekly allowance.
[Spend and token burn](/blog/grok-bot-spend-cap-and-token-burn) is the money version. [Draw the approval line on reversibility](/blog/grok-bot-approval-rules-reversibility) is the click version. If the tile can send or pay, it stays off until the week of drafts is real.

## Treat a Gmail plugin as a session the research bot can open

This is the sentence people argue with. You connected Gmail "for the mail bot." You never mentioned Gmail in the research bot's charter. Therefore, you think, the research bot cannot see mail.

It can, if the session is on the computer. Separate bots are not a security boundary. A charter that never mentions Gmail is a preference. An open Gmail session is a capability.

Mail is the worst case because a mailbox is not only the job. It is password resets, contracts, bank statements, and every customer thread you have ever had. Connecting it so [Inbox Triage](/bots/inbox-triage) can label messages also gives [Lead Scout](/bots/lead-scout) a way to enrich a lead from a private thread. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) will read mail if you connected mail, which may be what you want. The briefing bot is still not a vault.

The Gmail grant order lives in
[Grok Bot and Gmail](/blog/grok-bot-gmail). Read that before you connect the tile. This section is the shared-computer consequence: the plugin is not for the mail bot only.

If you need mail looking and you do not want your personal archive on the machine, use a mailbox that exists for the bots. That is a different identity, not a different screen.

## Walk Inbox Triage through the grant, then watch Lead Scout

Here is the week, because the abstract version is too easy to agree with.

Monday you create [Inbox Triage](/bots/inbox-triage). You open Plugins, find Gmail, skip send, allow read and draft, and paste a charter that says never send, never delete, never forward. The first run labels eighteen threads and writes three drafts. Two are ones you would send. One is wrong about a date. You fix the charter.

You also have [Lead Scout](/bots/lead-scout), whose job is public posts and a sheet. Its charter says it never contacts anyone. You did not connect Gmail "for" Lead Scout.

Wednesday you are behind. A lead posted that they want to switch, and you wonder whether they already emailed you. You ask Lead Scout to check whether anyone on last night's list already wrote to the inbox. Lead Scout opens Gmail and quotes a sentence from a customer who is not on the public list. The sentence is useful. It is also private mail being read by a bot whose job was public research.

Friday the decision is no longer theoretical. Keep Gmail connected, and write into every charter that mail is in reach. Or revoke Gmail, and accept that Inbox Triage cannot see the inbox until you reconnect, at which point the same sharing returns. There is no third option named "Gmail for Inbox Triage only."

| Day | What you connected | What Inbox Triage did | What Lead Scout could also do |
|---|---|---|---|
| Monday | Gmail read and draft, send off | Labelled the queue, wrote three drafts | Open the same Gmail session if asked |
| Wednesday | Nothing new | Ordinary run | Did open Gmail, quoted a private thread into a sheet |
| Friday | Decision, not a new tile | Keeps mail, or loses it when you revoke | Can open Gmail until you revoke at Google |

The useful scar is Wednesday. The research bot was not misconfigured. The Plugins list has no per-bot column. That is what "account-wide" looks like when you are late and you ask a convenient question.

## Write every live session into the charter, not only the plugins you meant to add

A charter that lists allowed plugins is incomplete if another bot already signed something in. From inside the computer, allowed is whatever works. Name both sides: what this bot may use, and what it must refuse even if the session is sitting there.

\`\`\`text
JOB
Inbox triage only. Label, summarise, draft. Stop.

PLUGINS THIS BOT MAY USE
Gmail, if connected: read threads, apply the labels in this charter,
save drafts on the three highest-priority needs-reply threads.
Nothing else from the Plugins list.

SESSIONS THAT EXIST ON THIS COMPUTER
Assume Gmail is reachable by every bot on the account, including
bots whose job is not mail. If you are not Inbox Triage, do not
open Gmail. If a task sounds like mail and you are not Inbox Triage,
stop and say the session exists but this job does not use it.

STAY DISCONNECTED
Send, pay, publish, delete, forward, filters, forwarding, settings.
If a tile for those appears, do not connect it. If it is already
connected, stop and tell me. Do not use it.

SEND AND PAY
Not yours. Not after a good draft. Not after a week. Wait for me
to connect them, in writing, on a later date.

STOP
Never send. Never spend. Never contact a lead. An open tab is not
permission. A saved session is not permission. Permission is this
block.
\`\`\`

Paste a shortened SESSIONS block into [Lead Scout](/bots/lead-scout) as well. The mail bot's charter cannot bind the research bot. Each bot reads its own. The shared computer is why both copies have to exist.

If a third-party tile is connected, name it in PLUGINS THIS BOT MAY USE only after you have confirmed scopes in that product's docs. Do not write "whatever is connected."

## Diagnose a bot that used a session you connected for someone else

Plugin failures in this shape do not look like errors. They look like a helpful extra paragraph.

| What you see | What actually happened | What to do |
|---|---|---|
| Research output quotes a private email | A mail session on the shared computer was in reach | Treat mail as account-wide. Add a refuse-mail line to every non-mail charter, or revoke Gmail |
| A bot sent mail you only asked it to draft | Send was in the bundle, or a browser session could click Send | Disconnect send. A charter cannot unsend |
| Deleting the mail bot did not sign Gmail out | Deleting a bot leaves shared sessions in place | Sign out on the computer and revoke the grant at Google |
| A hosted tool still works after you "removed" a plugin | Another path remains, often on Cursor's backend | Revoke at the provider and at the hosted side, then test from a bot that should fail |
| A pay dashboard was "just to look" and a refund went out | Browser session, full permission, no connector narrowing | That path cannot be made safe with a prompt. Keep pay off the computer |

The first row is the Inbox Triage week. The last row is why pay stays disconnected even when the job is "just look." A logged-in dashboard is your full seat.

Match the symptom to the path. A careful bot with a live send session is a send bot.

## Answer the claim that a charter is enough isolation for plugins

The strongest argument against connecting less is not "the bot feels incomplete." The harder argument is this: I will connect Gmail for the mail bot, I will write "do not open Gmail" into every other charter, and isolation is then a prompt problem.

That argument is half right. You should write the refuse line. The SESSIONS block above is that line. It reduces accidents when you are watching.

It is not isolation. Charters are instructions, not a sandbox. There is no audit view to catch the time a bot ignored the line. There is no per-bot cookie jar. A prompt injection can ask the research bot to use any tools it has, and an open session counts. A rushed operator can ask the convenient question, as on Wednesday, and the mail bot's charter will not be consulted.

The cases where the argument wins are small. A bot that cannot reach the network. A bot you run only while watching. A job with no useful session on the machine. If Gmail is connected, those cases do not include Lead Scout.

Keep the refuse line, and still connect the minimum. The charter is a second control. The first is the Plugins list having less on it.

If you want the policy as a principle, that is
[least privilege](/blog/least-privilege-bots). If you want the Gmail scopes in order, that is
[the Gmail guide](/blog/grok-bot-gmail). Charter as wall is not a wall.

## Verify the grant by asking a bot that should have no use for it

A check that cannot fail is not a check. After you connect any plugin, open a bot whose job does not use it and ask a question that would be easier with that plugin.

If you connected Gmail for Inbox Triage, open Lead Scout and ask whether it can see a Gmail session. Then ask a question you would never want it to answer: quote the latest unread message. If it quotes mail, you have a file that proves the grant is account-wide. Put the refuse line in that bot's charter the same hour, or revoke.

If you connected only a hosted MCP tool, run the same shape of test from a bot that should not call it. If the call works, the hosted path is account-wide too. The token sitting at Cursor's backend did not confine the tool to one bot.

If you refused to connect send, ask Inbox Triage to send a test to yourself. The only passing result is a refusal, a draft, or a message that send is not connected. A sent mail is a failed test with an audience.

Write the date of the test next to the plugin. Repeat it when you add a bot. New bots inherit the computer, not your memory of Monday.

[Scheduling](/blog/grok-bot-scheduling) does not change the test. A routine assigned to one bot still runs on the shared computer. The overnight run is the one you will not be watching.

## Revoke the vendor grant, because deleting a bot leaves the session

People clean up in the wrong product. They delete Inbox Triage and assume Gmail is gone. Deleting a bot deletes that bot's routines. It does not remove shared-computer files or browser sessions. Gmail is still signed in. Lead Scout can still open it.

Revoke in this order, and check after each step with the bot that should fail. Sign out on the shared computer if the path was a browser login. Revoke the OAuth grant at the provider. Remove the tile in the Plugins list if it still shows as connected. Run the Lead Scout test again. If the quote still appears, a path remains: a hosted token, a second login, a file with a refresh token.

Hosted MCP needs the same honesty. Removing a tile may not tell Cursor's backend to drop the sign-in. Find the hosted connection and revoke it there. Then test.

"I will connect it for the afternoon and take it off later" is a weak plan. Later means a vendor screen you have to find while doing something else. Connect for the week you are actually living, and revoke as a scheduled pass.

The [safety checklist](/blog/grok-bot-safety-checklist) belongs here as well as at connect time. Offboarding is the same work in reverse.

## Stop adding tiles once the named job can finish

The Plugins list will always be longer than the job. That is its design. Your job is to stop.

Name the job in one sentence. Inbox triage for the weekday queue. Overnight lead ranking from public posts. Connect the minimum path that finishes that sentence. When the bot produces a checkable output without a new tile, you are done. Other tiles wait for a newly named job, after a week of clean drafts.

This page refuses to print a catalog. A list of names would be stale before you finish reading it. Look at your Plugins list. If a third-party name is there, confirm scopes in that product's docs. If it is not there, do not connect it because a roundup sounded impressive.

Where this stops fitting: a job that is send, by nature, with no useful draft stage. That job may still want a dedicated mailbox and a tiny allowlist of recipients, and it still should not share a computer with a research bot you do not watch. Two accounts beat two bots.

[Whether Grok Bot is worth it](/blog/is-grok-bot-worth-it) is a different decision from plugins. Plugins are what you do after you have the product, and they are how most people make the product larger than the job.

**Keep reading:** [Grok Bot and Gmail: Permissions and What to Automate](/blog/grok-bot-gmail), [Least Privilege for Bots: Connect the Minimum, Not the Maximum](/blog/least-privilege-bots), [One Computer, Many Screens: What Grok Bot Actually Isolates](/blog/grok-bot-shared-computer-security).

## Frequently Asked Questions

### Does a Gmail plugin stay limited to the mail bot that connected it?

No. All bots on a Grok Bot account share one persistent cloud computer assigned to the user, not to a bot. Browser cookies, signed-in sessions, files, and credentials are shared, and screens are not security boundaries. A Gmail plugin you connected for Inbox Triage is a session every other bot can open, including a research bot whose charter never mentioned mail. Deleting the mail bot does not remove that session. Revoke at the provider if you need it gone.

### Should I sign in through the browser when a connector already exists?

No. Use a read-only connector first when the job is looking or drafting. A browser login grants whatever that site allows a signed-in person to click, and the session lives on the shared computer. Take the browser path only when no connector exists for that job, then treat the session as account-wide. If a third-party name appears in your Plugins list, confirm scopes in that product's docs before you treat it as narrower than the browser.

### Where do hosted MCP sign-in tokens live, and does that isolate bots?

They stay with Cursor's backend and are never stored on the computer. That keeps a token out of the shared disk and cookie jar, which is better than a secret file every bot can read. It does not isolate one bot from another. Hosted tools remain reachable at account scope, so a research bot can still call whatever you connected for a mail bot. Prefer hosted MCP over a token on disk, and still connect the minimum.

### When is it reasonable to connect a send or pay plugin?

After the bot has a week of clean drafts: output you would have sent unchanged, with no attempt to send or pay in that week. Send and pay leave the computer. An approval does not reverse work already completed, and Grok Bot has no product-specific spend cap you can lean on. Many jobs should keep send in your hands even after the week. Connect those tiles for a named job that cannot finish without them, not because the Plugins list still had empty slots.
`,
};

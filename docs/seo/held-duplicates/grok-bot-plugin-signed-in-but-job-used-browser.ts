import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'The Plugin Is Signed In and the Job Still Used the Browser',
  description: 'This grok bot plugin vs browser guide traces why a connected plugin was skipped, proves which path ran, and prevents silent browser fallback from becoming policy.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# The Plugin Is Signed In and the Job Still Used the Browser

Tariq does not need a bot that looks busy. Tariq needs a transcript brief that should have used the signed-in plugin to arrive with enough evidence to review and no hidden external action. The useful setup is narrow: collect named inputs, preserve uncertainty, produce a private artifact, and stop at the boundary.

The boundary for this workflow is exact: **Never fall back from a plugin to the browser silently. Report the selected path before collecting any source data.** That sentence is the control surface. A friendly bot name, a routine label, and a successful sign-in do not replace it. The longer explanations live in the [inheritance guide](/blog/grok-bot-transcriptapi-vs-browser), [boundary guide](/blog/what-a-pasted-prompt-inherits), [approval guide](/blog/where-a-bot-cookie-actually-lives), [permission guide](/blog/what-an-approval-actually-governs), [architecture guide](/blog/how-to-write-a-boundary-line), [operator guide](/blog/learn-grok-bot). This page spends its time on the failure you searched for.

The plugin card showed signed in, yet Tuesday output cited a rendered page and lacked timestamps. Tariq discovered the charter named the website before the plugin, so the bot chose the first workable route rather than the intended one.

Start from one of these real catalog patterns when it matches the work: [starting workflow](/bots/podcast-summarizer), [evidence helper](/bots/source-verifier), [review helper](/bots/agent-work-logger), [briefing helper](/bots/chief-of-staff-briefing). Each is a starting charter, not an authorization grant. Replace its sample sources, owner, review window, and output path before the first live run.

The procedure below has one aim: make a repeated run boring enough to inspect. It uses an explicit source register, a four-state decision table, a private output, and a human checkpoint. If the evidence cannot support a row, the correct value is unknown. If the completion state cannot be proved, the correct action is stop.

## Split grok bot plugin not showing into four exclusive states before browser fallback

People collapse four failures into one sentence: the plugin is missing, so Grok Bot is broken. The four states do not share a repair.

State one: not in the live catalog. This account, today, does not offer that tile. Recreating [Inbox Triage](/bots/inbox-triage) does not add a row. Debugging the bot will not either.

State two: in the catalog, not installed on this computer. The computer that matters is the persistent cloud computer assigned to your user account, not the Mac on your desk. A Chrome extension, a Cursor IDE plugin, or someone else's screenshot is not an install here.

State three: installed, not signed in. The row exists. OAuth was opened, a challenge sat unfinished, or the session died. Installed is a row. Signed in is a living grant.

State four: you wanted MCP, not a plugin. Hosted MCP sign-in tokens stay with Cursor's backend, not on the computer. Searching Plugins for that server will always look like grok bot plugin not showing.

| State | What you saw | What is true | Proof that would fail |
|---|---|---|---|
| Not in the live catalog | Search returns no row | This account does not have that tile today | Reload Plugins. Search still empty |
| In catalog, not installed here | You remember the logo from a roundup or another seat | The grant was never completed on this Grok Bot computer | The tile still offers Connect |
| Installed, not signed in | The row exists and still cannot read mail | The session or OAuth grant is missing or dead | Inbox Triage read test fails while the tile is visible |
| Wanted MCP | You hunted a server name inside Plugins | The tool lives on a hosted MCP path, or only in Grok Build | The MCP list is empty, or you held a Claude Code file |

Pick one state before you touch the bot. The live list in the product names it. The catalog page will not.

## Confirm the live Plugins catalog on this account before you debug before browser fallback

The live catalog is the Plugins list on the Grok Bot account you are actually using, opened on a desktop client that can edit. It is not a blog screenshot, a roundup, grokbot.dev, a colleague's wall, or the Grok Build marketplace that auto-reads Claude Code plugins. It is not the iPhone app, where you can pause and resume only.

Open Plugins. Search the exact name you expected. Take a screenshot. That screenshot is the only catalog this article will trust. If Gmail is there, you have left state one. If Gmail is not there, you are still in state one, and every other repair is theatre.

Hedge the contents. Whether your account offers a Gmail connector at all is a thing to check at connect time rather than assume. Availability and the consent bundle both change. This page will not assert that Gmail is present, absent, read-only, or bundled with send. Confirm the row in front of you. If a third-party name appears, confirm that product's current docs, not a feature list in any article, including this one.

[What a Grok Bot is](/blog/what-is-a-grok-bot) is the product shape. [How the Cursor account sits in the path](/blog/grok-bot-cursor-account-explained) is why "this account" is not a throwaway phrase. If iPhone is the only client in the room, stop: editing needs desktop. The [iPhone editing limit](/blog/grok-bot-iphone-cannot-edit) is a different page.

## Treat an absent catalog row as a product fact, not an outage before browser fallback

An empty search feels like downtime because the rest of the product still loads. Plugins simply does not contain the name you brought. That is a product fact for this account today. It is not a crash.

Deleting [Inbox Triage](/bots/inbox-triage) deletes that bot's routines. It does not restock the catalog, install a tile, or remove shared sessions. You can destroy the mail bot and still have a Gmail cookie sitting on the computer for [Lead Scout](/bots/lead-scout).

If the live catalog lacks the row, you do not have a plugin path for that name today. Choose, in writing: wait and recheck the live list, pick a different named job, or take a different path (hosted MCP if that is the real tool, or a browser session if you accept that it is your full identity on that site). Do not take the browser path while telling yourself the plugin is "basically connected."

State one is allowed to stay state one. Write it down. Then decide whether the job still exists without that tile.

## Prove install on this computer instead of trusting a remembered tile before browser fallback

Installed means the grant was completed on the Grok Bot cloud computer attached to this user account. It does not mean you have seen the logo, connected Gmail in Chrome on your Mac, or watched a teammate connect it on a different Cursor seat. All bots on an account share one persistent cloud computer. Screens are not security boundaries. "Do not use separate Bots as a security boundary."

Proof is visual, then behavioral. Visual: this account's Plugins list shows a connected state, not Connect. Behavioral: [Inbox Triage](/bots/inbox-triage) can complete a read that only that grant would allow. If the visual check fails, you are in state two even if you "already set this up last week" in some other window.

If you connected the tile on this account and then created [Mail Cleanup Assistant](/bots/mail-cleanup-assistant), you did not need to install it again. There is no per-bot plugin vault. Walk Connect on desktop, finish the provider screen, and come back. If the tile still offers Connect, call it uninstalled, not missing.

## Finish OAuth after the tile exists, because installed is not signed in before browser fallback

A tile can exist and still do nothing. That is state three, and it is the one people skip because the row is visible so the hunt feels over. Installed is plumbing. Signed in is a session or an OAuth grant that can actually answer.

Signed in fails in boring ways. You closed the consent screen. A second factor never reached the Bot computer. The provider revoked last week's grant. You signed into the wrong mailbox. Or you signed into Gmail in the shared browser and never completed plugin consent, so you are not in state three. You are in state two plus a leftover session.

Test sign-in with a read that can fail. Ask Inbox Triage for a header you can check yourself: the newest unread sender, or a subject you just mailed to yourself. If the bot invents an empty inbox, or says it cannot access Gmail, sign-in is not done. If it quotes mail, some path is live, and you still have to ask which: plugin grant, or browser cookie. Those two paths are not interchangeable. Do not rebuild the bot to "refresh" a token the bot does not own.

## Leave the Plugins wall when the missing tool was hosted MCP before browser fallback

Some empty searches are correct. You are in the wrong list.

Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the computer. Plugins, browser cookies, files, and CLI credentials live on the shared computer. If the job is an API with a bounded tool list, hunt on the hosted MCP path in [Grok Bot and MCP: Hosted Tokens, Browser Fallbacks, and Blast Radius](/blog/grok-bot-mcp-servers). Staring at Plugins until a server name appears will keep producing grok bot plugin not showing.

If you needed MCP, stop scrolling Plugins. Open the hosted connection UI. Read the tool list. A server that can send is not a read-only connector just because you found it while hunting a missing plugin. MCP is not a fallback that "also does Gmail" unless you have confirmed that server, on that day, in that product's docs.

## Replay the Gmail week where a browser session impersonated the connector before browser fallback

Monday you decide [Inbox Triage](/bots/inbox-triage) should sort the weekday queue and draft replies it will never send. You expect a Gmail connector. Plugins is empty, or Connect looks slower than the inbox in another tab. You sign into mail.google.com on the shared Grok Bot browser. Mail moves. You tell yourself the plugin is showing now, in spirit.

Tuesday you want [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) on the same mailbox. The Gmail tile is still absent, or it still offers Connect. Grok bot plugin not showing. You consider deleting Inbox Triage to "reset integrations." You never left state one or state two. You created a full-identity login on the shared computer.

Wednesday [Lead Scout](/bots/lead-scout) is late. You ask whether anyone in the mailbox mentioned the account. It quotes an unread thread. The cookie was enough. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) could have done the same. Screens are desks, not locks.

Thursday you finally screenshot the live catalog. Maybe Gmail is there today and you can install a narrower connector. Maybe it is not. Either way, the browser session is still there until you sign out and revoke it at Google. Deleting Inbox Triage will not sign Gmail out.

| Day | What you did | What you told yourself | What was actually granted |
|---|---|---|---|
| Monday | Signed into mail.google.com on the Bot computer | The Gmail plugin is working | Your mailbox identity, as a cookie, for every bot on the account |
| Tuesday | Searched Plugins, saw no connected Gmail | Grok Bot lost the plugin | Catalog vs install was never completed. The cookie is not a tile |
| Wednesday | Asked Lead Scout a convenient mail question | The research bot went rogue | Shared sessions. The research bot used a tool that was sitting out |
| Thursday | Deleted Inbox Triage, Plugins still empty, mail still open | Reset failed, product is down | Deleting a bot leaves shared sessions. Catalog did not change |

The [Gmail guide](/blog/grok-bot-gmail) is the scope work once a real connector exists. This week is what happens when you skip it and keep the session.

## Paste a four-state debug charter that a bot can fail in public before browser fallback

A hunt without a written state turns into vibes. Paste this into Inbox Triage, fill the blanks from the live UI, and make sure the bot can fail it.

\`\`\`text
BOT: Inbox Triage (plugin-missing debug, not a send job)

JOB
Sort the weekday mailbox into labelled queues and draft replies.
Never send.

FOUR-STATE CHECK (fill from the live product, today)
1. CATALOG: On this Grok Bot account, desktop Plugins search for Gmail
   returned: [ROW EXISTS / NO ROW]. Screenshot stored at: [path].
   I will not quote a roundup, a count, or another account's wall.
2. INSTALLED ON THIS GROK BOT COMPUTER: The tile state is
   [CONNECT / CONNECTED / NOT PRESENT]. Laptop extensions do not count.
3. SIGNED IN: A read test at [timestamp] returned [sender/subject I verified
   in Gmail / CANNOT READ / INVENTED EMPTY INBOX].
4. MCP INSTEAD: I [do / do not] need hosted MCP for this job. If I do, the
   connection lives with Cursor's backend, not in Plugins.

SESSIONS THAT ARE NOT THE PLUGIN
- A mail.google.com tab or leftover cookie on the shared computer is not
  a completed plugin grant. Sign out if the connector path is the one I want.
- Lead Scout and Chief of Staff Briefing can open any session I leave.

BOUNDARY
Never send. Never spend. Never treat an open tab as permission.
Never tell me the plugin is fine because the browser can still load mail.
If Plugins has no row, say "not in the live catalog," not "Grok Bot is down."
\`\`\`

Shorten the SESSIONS block into [Lead Scout](/bots/lead-scout) the same hour if a mail cookie already exists. If you fill line 1 as NO ROW, stop installing. You are in state one.

## Trace the leftover Gmail cookie that Lead Scout can still open before browser fallback

The reason grok bot plugin not showing can coexist with "the bot can already read mail" is the shared computer. Cookies, signed-in sessions, files, and CLI credentials are shared. Screens are not security boundaries.

Plugins can be empty while Gmail is present as a website. [Inbox Triage](/bots/inbox-triage) used the identity. [Lead Scout](/bots/lead-scout) inherited it. [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) will inherit it tomorrow. [Churn Watch](/bots/churn-watch) does not need Gmail and can still open it.

Your laptop can be signed into Gmail all day without installing a Grok Bot plugin. The cloud computer can be signed into Gmail all day without the Plugins tile ever flipping. Only the second case surprises people, because they did the sign-in on a bot screen and assumed the tile followed.

If the path was a browser login, sign out on the shared computer, then revoke at Google. If a plugin grant exists, revoke that too. Then ask Lead Scout to quote the latest unread message. The only passing result is a failure to read mail. The [shared computer security](/blog/grok-bot-shared-computer-security) page is the isolation picture. This page is the missing-tile version.

## Answer the claim that recreating the bot will restore a missing plugin before browser fallback

The strongest objection is practical. Plugins is empty. The bot is the thing you know how to delete. Recreating [Inbox Triage](/bots/inbox-triage) feels like a reboot. The cousin claim is that xAI should "restore Gmail," or that the beta is down because a logo is missing.

Recreating the bot fails for mechanical reasons. All bots share one computer assigned to the user. A new bot gets a new screen and new routines (max 50 per bot; deleting a bot deletes its routines). It does not get a new catalog, cookie jar, or hosted MCP vault. If the tile was absent before, the new bot sees the same catalog. If a Gmail cookie was present before, the new bot can open it.

Waiting for a restore is only rational after you have a screenshot of the live catalog and a date. Catalog contents change. Grok Bot launched in beta on 11 August 2026 and eligibility widened on 21 August 2026. None of that entitles you to treat an empty search as an incident before you have distinguished state one from state two. Do not invent a headcount of plugins that "should" be there.

The objection wins only when Plugins cannot load at all, for any name, while the rest of the product is also dead. A single missing name on a healthy wall is a catalog fact or an install fact. Keep the bot. Fix the state. The [safety checklist](/blog/grok-bot-safety-checklist) is the pass you run before you add a grant to make the empty row feel better.

## Fail the diagnosis with a bot that should not see mail at all before browser fallback

A check that cannot fail is not a check. After you name a state, pick a bot whose job does not use Gmail and ask a question that would be easier with Gmail.

| What you see | Likely state | Repair that can fail | Repair that wastes the afternoon |
|---|---|---|---|
| Plugins search empty, browser never opened | Not in the live catalog | Reload desktop Plugins and screenshot the same empty row | Delete Inbox Triage to restock the wall |
| Logo remembered, tile still says Connect | Not installed on this computer | Complete Connect on desktop, then recheck the tile | Sign into mail.google.com to "test" |
| Tile visible, header read fails | Installed, not signed in | Finish OAuth, rerun a sender you can verify | Recreate the bot to refresh a token it does not own |
| Empty Plugins, you expected an API server | Wanted MCP | Open hosted MCP and read the real tool list | Keep scrolling Plugins for a server name |
| Plugins empty, a bot already quotes mail | Browser session, not a plugin | Sign out, revoke at Google, rerun the Lead Scout quote | Call the leftover cookie a connected plugin |

If you never touched the browser, open [Lead Scout](/bots/lead-scout) and ask it to quote the latest unread message. A quote means a session exists, so you are not in clean state one. If you are in state two, complete Connect or do not. Do not "test" by signing into mail.google.com. That installs a cookie and contaminates the diagnosis.

If Lead Scout succeeds and [Inbox Triage](/bots/inbox-triage) fails the plugin read, you have a browser session plus an unfinished plugin. Repeat the Lead Scout quote test when you add a bot. [Scheduling](/blog/grok-bot-scheduling) does not change it: a routine still runs on the shared computer.

## Hedge third-party tiles and refuse to quote a catalog headcount before browser fallback

This page will not tell you how many plugins exist. Any number you saw is unverified unless you counted the live list on your account today, and even then that number is your account today, not a platform constant. Do not paste a count into a charter or a bug report. Counts mix Build and Bot. Counts are how state one gets argued as an outage.

If a third-party name such as Composio appears in your Plugins list, confirm scopes in that product's current docs on the day you connect. Do not assume the tile is narrower than a browser session, is Gmail, or is MCP. Read the consent screen. If it is wider than the job, decline it.

Independent feeds are not documentation. Confirm in the product. Then connect the minimum. [Least privilege](/blog/least-privilege-bots) is the policy. Once the state is named, leftover design questions go to [the plugins catalog article](/blog/grok-bot-plugins-catalog), leftover server questions go to [the MCP page](/blog/grok-bot-mcp-servers), and leftover scope questions go to [the Gmail guide](/blog/grok-bot-gmail).

## Keep send disconnected while the connector path is still unproven before browser fallback

Missing-plugin week is when people widen the grant to make the bot feel complete. The tile is confusing, so they sign into the full mailbox in the browser, leave send available, and tell themselves they will lock it later.

[Inbox Triage](/bots/inbox-triage) and [Mail Cleanup Assistant](/bots/mail-cleanup-assistant) are looking and drafting jobs. Their listings already refuse send. If the only way you can "find Gmail" is a full browser login, you have parked your mailbox identity on the shared computer. That may be a choice for a supplier portal with no connector. It is a bad choice for Gmail while you are still arguing with an empty Plugins search.

Where this breaks down: a job that is send by nature, with no useful draft stage. That job still should not start during a missing-plugin debug, and it still should not share a computer with a research bot you do not watch. Two accounts beat two bots.

**Keep reading:** [Grok Bot Plugins: Connect Only What the Job Needs](/blog/grok-bot-plugins-catalog), [Grok Bot and MCP: Hosted Tokens, Browser Fallbacks, and Blast Radius](/blog/grok-bot-mcp-servers), [Grok Bot and Gmail: Permissions and What to Automate](/blog/grok-bot-gmail).

## Reconcile Tariq's case with a four-state ledger before the next run before browser fallback before browser fallback

A retry is not a recovery plan. Recovery starts by writing down what is known for each unit of work. Give every candidate, deal, message, routine, or account one row. Do not let a clean final total erase a dirty intermediate state. The ledger should survive after the browser tab, plugin response, or recent-history row disappears.

| Observed state | Required action | Control result |
|---|---|---|
| Plugin returns the required fields | Use the plugin and record its result shape | Proceed and retain evidence |
| Plugin returns an explicit error | Stop and surface the error | Stop automatic progress |
| Plugin returns empty data | Treat empty as a failure, not permission to browse | Escalate with the gap named |
| Browser fallback is approved for one URL | Use the browser once and label the exception | Require explicit human handling |

For Tariq, the first pass is intentionally manual. Number the units from 1 through 8, an arbitrary rehearsal size, and attach the source URL or record identifier to each row. Add observed-at time, output path, completion evidence, and reviewer. Eight is not a product limit. It is small enough to compare every row without sampling.

The walked failure matters because the tempting repair is the wrong repair. The plugin card showed signed in, yet Tuesday output cited a rendered page and lacked timestamps. Tariq discovered the charter named the website before the plugin, so the bot chose the first workable route rather than the intended one. The bot should not smooth that gap into a confident sentence. It should state which step completed, which step did not, and which step has an unknown state. That output gives the reviewer something actionable without pretending the missing evidence exists.

Use this charter fragment as the fixed rule for the next rehearsal:

\`\`\`text
OBJECTIVE
Prepare a transcript brief that should have used the signed-in plugin.

SOURCES
Use only the identifiers and pages listed in the run manifest.
Record the source and observed-at time for every extracted fact.

OUTPUT
Write one private ledger row per unit.
Allowed states: complete, not-started, blocked, unknown.
Never convert unknown into complete or not-started.

BOUNDARY
Never fall back from a plugin to the browser silently. Report the selected path before collecting any source data.

STOP CONDITIONS
Stop when a required source is absent, a completion receipt is missing,
or the requested action would cross the boundary.
Return the affected identifier, last proved step, missing evidence, and owner.
\`\`\`

Run the rehearsal twice. In run one, provide complete evidence for all eight units and confirm the output shape. In run two, remove one required field from unit 3, introduce a contradictory source for unit 5, and remove completion evidence from unit 7. A passing bot returns three different exceptions. A failing bot forces all three into the same successful state.

The review is also specific. Compare the eight input identifiers with the eight output rows. Open two cited sources at random, then inspect all three planted exceptions. Confirm that the bot did not create an extra row, hide a missing value, or cross the boundary. Record pass or fail beside each check. A sentence saying the run looked good is not evidence.

After the rehearsal, choose one of three outcomes. Promote the routine only if every planted exception stayed visible. Revise the charter if the wrong source won or the stop condition was vague. Retire the workflow if the human must reconstruct most rows anyway. That last answer is legitimate. Automation that moves the review burden into detective work has not removed work.

## Frequently Asked Questions

### Why is a Grok Bot plugin not showing after I created a new bot?

Creating a bot does not install plugins and does not restock the catalog. All bots on the account share one persistent cloud computer assigned to you, not to the bot, so a new screen sees the same Plugins list and the same leftover sessions. If the live catalog has no row, the new bot will not gain one. If you never completed Connect on this computer, the new bot is still uninstalled. If a Gmail cookie already exists, the new bot can use that session even while Plugins looks empty. Recreate nothing until you have a desktop screenshot of the live search.

### If Gmail works in the shared browser, is the Gmail plugin connected?

No. A working mail.google.com tab proves a signed-in website session on the shared computer, not a completed plugin grant. Grok bot plugin not showing can sit next to a mailbox that already opens, because those are different paths. The plugin path is a live catalog row, an install on this Grok Bot computer, and a finished sign-in. The browser path is your full identity, reachable by every bot, including Lead Scout. Sign out of the leftover session if you still intend to use a connector, and confirm the tile in Plugins before you call the plugin connected.

### How do I tell a missing catalog row from a hosted MCP job I looked for in Plugins?

### Should I delete the bot so the missing plugin comes back?

No. Deleting a bot deletes that bot's screen and its routines. It does not change what the live catalog offers this account, does not complete Connect, and does not remove shared-computer files or browser sessions. You can delete Inbox Triage and still leave Gmail signed in for every other bot. Take a catalog screenshot, distinguish installed from signed in, and revoke leftover cookies on purpose. Recreating the bot clones the same four-state problem onto a clean name.
`,
};

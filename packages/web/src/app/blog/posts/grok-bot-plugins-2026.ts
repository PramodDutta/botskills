import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Plugins in 2026: What to Connect First, and What to Leave Off',
  description:
    'A connect-first order for grokbot.dev plugins: transcript and mailbox connectors in week one, and every publish, spend, or post plugin left switched off.',
  date: '2026-08-26',
  category: 'Reference',
  content: `
# Grok Bot Plugins in 2026: What to Connect First, and What to Leave Off

A plugin directory reads like a checklist, and that is the trap. The community
site grokbot.dev keeps a wall of roughly twenty-six plugins that people have
wired into Grok Bot, with entries such as TranscriptAPI, AgentMail, StayingAPI,
AdKit and Postiz sitting side by side in one grid. A grid implies parity. It
suggests that each tile is a feature you are missing until you sign in.

They are not features. They are connectors, and each one is a decision about
what a bot can reach on your behalf. This article gives you an order to connect
them in, a shorter list to leave alone, and a way to write the decision down so
the next bot you create inherits it.

None of the entries below are botskills.sh listings. We publish charters, not
connectors. When a plugin name appears here it is because you will meet it on
that wall and need a way to price it.

## Treat a plugin wall as optional connectors, not a shopping list

The visual grammar of a plugin directory is the app store, and the app store
teaches you that installing is free and reversible. A connector is neither. It
is an authorisation that outlives the task you granted it for, and on Grok Bot
it lands somewhere wider than the bot you were setting up.

That width is documented. All bots on an account share one persistent cloud
computer, and the computer is assigned to your user account rather than to an
individual bot
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Browser
cookies, signed-in sessions, files and command-line credentials are shared
across bots on that machine. So when you sign a plugin in for your research bot,
you have widened what every bot on the account can reach, including the ones you
have not written yet.

Read the wall with two columns in your head instead of one. The first column is
the job a plugin finishes. The second is the set of actions it makes possible
even when nobody asked. Most tiles on any plugin directory are fine in the first
column and expensive in the second, and the directory format hides that
asymmetry because it gives every entry the same amount of space.

The practical consequence is small and unpopular. Browse the wall for ideas.
Connect from a list you wrote yourself.

## Connect the smallest set that finishes the first real job

Pick one job you actually have this week, then connect only what that job cannot
finish without. Not the job you might have next quarter, and not the job that
sounds impressive in a screenshot.

This ordering works because the first week is diagnostic. You are not learning
whether a plugin is good, you are learning whether the bot understands your work
well enough to be trusted with anything wider. A bot with two connectors that
produces one useful brief has told you more than a bot with nine connectors and
a plausible summary you cannot check.

| Plugin family | Finishes a first job? | Reversible if it misfires | Connect in week one |
|---|---|---|---|
| Transcript and caption fetch | Yes, research briefs need source text | Yes, output is a file you delete | Yes |
| Dedicated agent mailbox | Yes, if you keep it draft only | Yes while nothing sends | Yes, send stays off |
| Read-only web and page fetch | Yes, most research is reading | Yes | Yes |
| Calendar read | Sometimes, for briefing work | Yes | Yes if the job needs it |
| Social scheduling and posting | Rarely on day one | No, a deleted post is a screenshot | No |
| Ad spend and campaign tools | No | No, money moved is money moved | No |
| Bulk outbound mail | No | No | No |
| Storage write to a shared drive | Sometimes | Partly, versions help | Only scoped to one folder |

The column that decides most rows is the third one. Reversibility is a better
filter than usefulness, because usefulness is what you notice on day one and
reversibility is what you need on the day something goes sideways.

## Leave publish, spend, and blast plugins off until a person owns the click

There is a category of connector where the failure is not a bad draft but a
public artefact. Posting to a timeline, sending to a list, moving money,
launching an ad set. For those, the useful question is not whether the bot is
careful. It is who owns the click.

Grok Bot's own security documentation draws the line in a sentence worth reading
twice: "An approval controls the proposed action. It does not reverse work
already completed"
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
An approval prompt is a gate in front of an action, not an undo behind it. If
the plugin is connected and the action fires, the approval you would have given
is no longer the relevant control.

So the rule for this family is not "approve carefully". The connector stays
disconnected while a human still does that step by hand. You lose a little
convenience and keep the property that matters.

There is a second reason, and it is about attention. A bot that drafts and stops
gets reviewed, because you have to read the draft to send it. A bot that
publishes gets skimmed. Connecting a publishing plugin does not just add a
capability, it removes the only reliable review step you had.

## Put transcript and mailbox plugins ahead of social posters

The two families worth connecting first are the ones that turn a browser fight
into a file. Transcript fetch is the cleanest example. Driving the YouTube page
to scrape captions burns session time, breaks on redesigns, and produces
paraphrase when the captions panel refuses to load. A transcript plugin returns
timestamped text in one call.

The [YouTube Transcript Desk listing](/bots/youtube-transcript-desk) is written
around that preference. Its stop line is that it never posts, comments, likes or
subscribes, and it never burns the browser on captions: if a transcript plugin
is not connected, it tells you to add one rather than looping the player until
quota dies. That is a charter shaped by which connector exists, which is the
right direction of influence.

A dedicated mailbox is the second. The reason is identity rather than
convenience. Working from your personal Gmail on a shared computer means every
bot on the account can reach that session, so the blast radius of the least
careful bot you ever write includes your entire correspondence archive. A
mailbox created for the bot keeps the archive out of the machine.

The [Agent Inbox listing](/bots/agent-inbox) pairs that with a send boundary:
nothing sends, forwards or replies until you approve the exact text to the exact
recipients, and a standing instruction like "handle my mail" is not approval for
a later message. Connect the mailbox. Leave send in your hands. The full grant
by grant treatment lives in
[the Grok Bot integrations reference](/blog/grok-bot-integrations-list).

## Read grokbot.dev as an independent feed, not as xAI documentation

grokbot.dev is a community site. It describes itself as independent and not
affiliated with xAI, and you should take that at face value in both directions.
It is not an official capability list, and it is also not a knock-off. It is a
useful feed of what people are actually wiring up, which is information the
vendor docs do not carry.

The distinction matters when the two disagree. A plugin tile on a community wall
tells you someone made a connection work. It does not tell you the connection is
supported on your plan, available in your region, or still working this month.
Product surface for Grok Bot has moved fast since the beta opened on 11 August
2026, and eligibility widened again on 21 August 2026, so any third-party list
is a snapshot with a decay rate.

Practically: use the wall for discovery, then verify against two sources you
control. The plugin surface inside your own account is the first, because it
reflects your plan and your administrator's provisioning. The official docs are
the second, for isolation, approvals and platform support. When an article and a
product screen disagree, believe the screen.

One more read discipline. A community feed carries prompts as well as
connectors, and copying a stranger's prompt into a bot that holds your sessions
is the same class of mistake as pasting a shell script you have not read.

## Map each plugin to a boundary verb before you sign in

Every botskills.sh listing carries a boundary: the action the bot never takes,
written as a verb. That field is doing double duty here. Before you connect a
plugin, write the verb it would make possible, then decide whether your charter
already forbids it. If the charter is silent, the connector wins.

| Plugin you are eyeing | Verb it enables | Boundary line to write first | Connect after that? |
|---|---|---|---|
| Transcript fetch | Read captions, write a file | Never publishes the brief anywhere | Yes |
| Agent mailbox | Read a thread, compose a draft | Never sends without exact text approval | Yes |
| Calendar | Read availability, create events | Writes only to my own calendar | Yes, read first |
| Social scheduler | Queue a post that fires later | Never queues, never posts, drafts only | No |
| Ad platform | Create or raise a spend line | Never spends, never edits a budget | No |
| Outbound mail at volume | Send to a list | Never mails anyone outside this chat | No |
| Storage write | Overwrite a shared file | Appends to one named output folder | Scoped only |

Two rows deserve attention. The social scheduler row is the one people
misclassify, because scheduling feels like drafting. It is not. A scheduled post
is a send with a delay, and the delay ends whether or not you are watching. The
storage write row is the one that looks harmless and eats a spreadsheet formula,
which is why append-only is the shape to ask for.

## Paste a "plugins allowed" block that names what stays disconnected

Most charters list what the bot may use. The stronger version also names what
must stay off, because a bot that stumbles into an already-authenticated tool
treats it as available. From inside the machine, it genuinely is.

\`\`\`text
// PLUGINS YOU MAY USE
Transcript fetch: read captions and metadata. Write the brief to
/workspace/research/ and nowhere else.
Agent mailbox: read threads, compose drafts. Send is not yours.

// PLUGINS THAT STAY DISCONNECTED
No social scheduler, no poster, no ad platform, no bulk mail.
If a task appears to need one, stop and name the plugin and the
reason. Do not queue anything for later.

// THE SESSION CLAUSE
This holds even if you find yourself already signed into a tool.
An open tab is not permission. A saved session is not permission.
Permission is this list.

// WHERE YOU STOP
Never post, never publish, never spend, never send.
If a step needs one of those, hand me the exact text or the exact
amount and wait in this chat.
\`\`\`

The session clause is the line worth copying verbatim. Without it, the charter
reads as a description of what you connected, and the shared cookie jar makes
that description wrong the moment another bot signs something in.

## Walk a week-one roster: transcript, dedicated mail, nothing that posts

Here is the roster in practice, with a real job attached, because an abstract
policy is easy to agree with and hard to follow.

The job: you want a weekly research brief on three competitors, drawn from their
public videos and whatever lands in a mailbox you can point at.

Day one, you connect a transcript plugin and nothing else. You give the research
bot three video URLs and ask for a one-page brief with five verbatim quotes and
timestamps. You read it. If a quote does not appear at the timestamp given, you
have found a fabrication problem in the cheapest possible place, and you have
lost nothing but an afternoon.

Day two, you create a mailbox for the bot. Not your Gmail. You send one test
message to yourself through it, after approving that test, and you write the
from-address into a one-line identity file so nobody guesses a display name
later.

Day three through seven, the bot reads that mailbox, drafts replies, files
briefs, and sends nothing. Your only job is to read the drafts and click send
yourself. By Friday you know two things you could not know on Monday: whether
the drafts are good, and whether the bot stops where you told it to.

What you have not done all week is connect anything that publishes. You now have
evidence, and evidence is what should widen a permission, not momentum.

## Diagnose plugin sprawl, missing scopes, and "it posted anyway"

Plugin problems rarely announce themselves. They show up as a bot that is
suddenly unhelpful, or suddenly too helpful.

| Symptom | Usual cause | Fix |
|---|---|---|
| The bot used a tool you never mentioned | Sessions and sign-ins are account level, not per bot | Name allowed plugins in the charter, then disconnect what nothing uses |
| A connector worked last week and fails today | The session expired, or the site added a challenge | Re-authenticate yourself on the computer. Never paste a code into chat |
| Sign-in succeeds but the plugin returns nothing | The scope granted is narrower than the call being made | Read the error, grant the one missing scope, not the whole set |
| "It posted anyway" after you said draft only | A scheduler was connected, so the send was queued not blocked | Disconnect the scheduler. A charter cannot un-queue a post |
| Ten plugins connected, none load bearing | Sprawl from browsing the wall rather than a job | Disconnect anything with no named bot using it this month |
| Deleting the bot did not remove the login | Deleting a bot leaves shared files and sessions in place | Sign out at the source and revoke the grant with the provider |
| A login that works on your laptop fails for the bot | Traffic leaves from static egress addresses that some services flag | Allowlist where permitted, or move that step off the browser path |

The row people argue with is the fourth. It reads as a prompt failure and it is
not. If a scheduling connector is live, "draft only" describes an intention
while the plugin describes a capability, and capability wins.

## Answer the case for connecting everything so the bot feels complete

The strongest argument against all of this is honest, so it deserves a straight
answer. A bot with every plugin connected is a better bot. It stops asking for
permission, it finishes jobs end to end, and the experience is the one the demo
promised. A bot with two connectors keeps handing work back to you, which feels
like a worse product and sometimes is.

That argument is right about the experience and wrong about the timing. The
value of a narrow connector set is not better output. It is checkable output
during the only period when you have no track record to reason from. Wide-open
configurations go wrong in week one, on a job the operator had not yet learned
to review.

There is also a version of completeness worth wanting. Connect widely on the
read side, where breadth pays: more sources, better briefs, fewer "I cannot see
that" replies. Keep the write and send side narrow. Most of the feeling of an
incomplete bot comes from the read side being thin, not from the send side being
blocked.

If after a month of evidence you widen a publishing grant deliberately, that is
a decision. Connecting it on day two because the tile was there is not.

## Verify a disconnected poster cannot fire from another bot on the VM

Here is a check that can fail, which is the only kind worth running.

Take a plugin you believe is disconnected, ideally something that posts. Now
open a different bot on the same account, one whose charter says nothing about
that tool, and ask it plainly to use it. Do not phrase it as a test. Ask for the
outcome, the way a careless instruction would.

Three results are possible. It refuses because the tool is not connected, which
is the answer you want and the only one that proves the disconnection is real.
It refuses because its charter forbids it, which is weaker than it sounds, since
you tested a sentence rather than a state. Or it does the thing, which means the
connector was live at the account level all along.

That third outcome is the whole reason the check exists. The documentation is
explicit that separate bots are not a security boundary and that screens are
work surfaces rather than security boundaries. Most people accept that as a
sentence and still reason as if bot number two is a fresh machine.

The [VM Overwatch listing](/bots/vm-overwatch) exists partly for this reason: it
housekeeps the shared computer and refuses to claim that a second bot is a
second machine. If you want the permission model in more depth, including what
each grant really reaches, read
[the Grok Bot permissions guide](/blog/grok-bot-permissions-explained).

## Leave AdKit and schedulers in a later article, not in week one

Some plugin families are genuinely useful and genuinely wrong for a first week,
and it is worth naming them rather than pretending the category does not exist.
Ad tooling and post scheduling are the clearest cases.

The reason is not vague danger. Both convert a bot's output into an effect you
cannot inspect before it lands. A scheduler moves the send outside the
conversation where you were reviewing. Ad tooling attaches a number to a
mistake, and Grok Bot has no product-specific spend cap yet, with subscriptions
carrying a weekly allowance and overflow billed on demand. Fine for usage, poor
for a bot that is enthusiastic about a campaign.

Note what is not published: there is no dollar figure for the included
allowance, and no plugin directory can tell you what a tool will cost inside
your account. Anyone printing a confident number is guessing.

So the honest sequencing puts these after a month of reviewed output, a charter
that has already caught one mistake, and a job that cannot be done any other
way. They are a second-quarter decision wearing a first-week interface.

## Compare this list to Cursor-hosted MCP tokens without mixing them up

There is a second connector path that gets muddled with plugin walls, and the
difference is the single most useful technical distinction in this whole topic.
Hosted MCP sign-in tokens stay with Cursor's backend and are never stored on the
computer, per the
[teams and enterprises documentation](https://docs.x.ai/grok-bot/teams-and-enterprises).
A browser login lands in the shared cookie jar on the shared machine.

| Path | Where the credential lives | Shared with other bots | Breaks when | Reach once granted |
|---|---|---|---|---|
| Hosted MCP integration | With the backend, not on the computer | Still account scoped, but no token on disk | Your server or the schema changes | Exactly the tools defined |
| Community plugin via browser sign-in | The shared cookie jar on the account computer | Yes, every bot on the account | A redesign, an expired session, a challenge | Whatever that session can click |
| Command-line credential on the machine | On the shared computer | Yes | Rotation, or a stale config | Whatever the CLI can do |
| A grant you revoke at the provider | Nowhere, once revoked | Not applicable | Not applicable | None, which is the point |

Casual writing calls all four "a connection". They are not the same risk. Where
you have a choice between a hosted integration and a browser sign-in for the
same job, the hosted path is better on exactly one axis that matters a lot, and
that axis is where the secret sits when the bot is idle.

Do not read this as MCP being safe. Account-level reach still applies. It is a
smaller failure surface, not an isolated one.

## Revisit the wall monthly, and disconnect anything unused

A connector review turns into theatre unless it has a failing condition. This
one has one. Once a month, list every plugin and sign-in on the account. Beside
each, write the name of a bot that used it in the last thirty days. Anything
without a name beside it gets disconnected that day.

| Cadence | What you do | The failing condition |
|---|---|---|
| Weekly, five minutes | Read one output per active bot end to end | You cannot verify a claim against its source |
| Monthly, ten minutes | Name a bot beside every connector | A connector with no name, which you disconnect |
| Monthly, once | Disconnect the one you are least sure about | Something breaks, which tells you what depended on it |
| Quarterly | Re-read the wall for genuinely new families | You find a tile you would have connected on impulse |
| After any incident | Revoke at the provider, not just in the app | The session still works, which means you only hid it |

The third row is the one that teaches you something. Disconnect the connector
you are least confident about and wait a week. If nothing breaks, it was dead
weight and your blast radius just shrank for free. If something breaks, you have
learned which bot quietly depended on it, which you did not know before.

Where this breaks down: none of this survives an account you share with someone
who connects things without telling you. Charters, reviews and boundaries are
controls on your own behaviour. If two people sign tools into one Grok Bot
account, the honest answer is two accounts, not two bots, and no amount of
careful plugin selection substitutes for that.

**Keep reading:** [Clip a YouTube Podcast by Timestamp, Then Draft the Post and Do Not Publish](/blog/grok-bot-clip-youtube-podcast), [A Front Door Bot That Turns a Messy Ask Into Plain-Language Results](/blog/grok-bot-firstmate), [The Five-Part Grok Bot Brief](/blog/grok-bot-five-part-brief).

## Frequently Asked Questions

### Are grokbot.dev plugins official Grok Bot features?

No. grokbot.dev is a community directory that describes itself as independent
and not affiliated with xAI, and the tiles on its wall are connectors people
have wired up rather than a vendor capability list. Treat it as a discovery feed
with a decay rate, because both the Grok Bot product surface and any third-party
list move quickly. Before you plan a workflow around a plugin, confirm it exists
for your plan and your region on the connector surface inside your own account,
and check the official documentation for anything about approvals, isolation or
platform support.

### How many plugins should I connect in the first week?

Two or three, chosen by one real job rather than by browsing. A transcript or
page-fetch connector plus a dedicated mailbox covers a surprising share of
useful first-week work, and both fail safely because their output is a file or
an unsent draft. Add a calendar read if the job genuinely needs availability.
Leave everything that publishes, posts, schedules or spends disconnected until
you have a month of reviewed output. Breadth on the read side is cheap and
valuable, breadth on the write side is where the expensive surprises live.

### Does disconnecting a plugin remove what it already did?

No, and this is the distinction that catches people. Disconnecting removes
future capability, not past effects. A post already published stays published, a
message already sent cannot be recalled, and money already spent is spent. The
Grok Bot documentation makes the same point about approvals: an approval
controls the proposed action and does not reverse work already completed.
Disconnecting also does not necessarily clear a browser session on the shared
computer, so for anything sensitive, revoke the grant with the provider itself
rather than only toggling it off in the app.

### Can I give one bot a plugin and keep it away from my other bots?

Not reliably, and the documentation is unusually direct about it. All bots on an
account share one persistent cloud computer, that computer is assigned to your
user account rather than to an individual bot, and cookies, sessions, files and
command-line credentials are shared across bots. The security guidance states
plainly that you should not use separate bots as a security boundary. Charters
that name allowed plugins are useful guardrails and worth writing, but they
constrain behaviour rather than capability. When two jobs genuinely must not
share a credential, use two accounts.
`,
};

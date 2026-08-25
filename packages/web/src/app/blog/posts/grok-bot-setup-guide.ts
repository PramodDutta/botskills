import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Setup Guide: From Install to First Working Bot',
  description:
    'A complete Grok bot setup path: account access, runtime choice, which tools to connect, one safe first bot, and how to prove the schedule really fired.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Grok Bot Setup Guide: From Install to First Working Bot

Most people who say their Grok bot setup "did not work" never got past the
connection screen. The bot was fine. What was missing was an account with the
right access, a runtime decision made on purpose, and a first bot small enough
that a failure was visible instead of ambiguous.

This guide is the whole arc, in order: what you need before you start, how the
runtime choice changes everything downstream, which tools to connect and which
to leave alone, one first bot that cannot embarrass you, and the verification
step almost everyone skips. Creating the bot itself is one stop on that arc,
covered decision by decision in [how to create a Grok
bot](/blog/how-to-create-a-grok-bot). If you are not yet sure what a bot is
versus a chat assistant, start with [the plain
explanation](/blog/what-is-a-grok-bot) and come back.

## Do these four things in order, or you will redo two of them

Setup is four things, and only one of them is software:

1. **Access.** An account on a plan that permits scheduled, tool-using bots.
2. **A runtime.** The thing that holds the bot and fires it on schedule.
3. **Connections.** The accounts the bot may read and write.
4. **One bot.** A charter, a trigger, and a verified first run.

Do them in that order. Attempting connections before you have decided the
runtime means redoing them, and building the bot before connections exist means
your first run fails for a reason that has nothing to do with your charter,
which is the most demoralizing way to start.

There is a step zero that costs two minutes and saves an evening: confirm the
machine you actually work on is supported. That check belongs before the
payment screen, not after it, and it is the next section.

Budget about ninety minutes end to end, most of it spent on step four.

## Check the device you work on before you pay anything

Platform support for Grok Bot is narrower than most coverage implies, and the
gaps are not the ones people guess.

| Platform | Supported as of writing | What that means for setup |
|---|---|---|
| macOS, Apple silicon | Yes | Full build, edit, schedule, and review |
| macOS, Intel | Yes | Same as Apple silicon |
| Windows x64 | Yes | A first-class desktop, not a fallback |
| Windows Arm64 | Yes | Also first class, which surprises people |
| iPhone, iOS 18 or later | Yes, partially | Pause and resume only; editing, history, testing, and deleting need a desktop |
| Linux desktop | No | xAI's FAQ answers this one with a flat no |
| Android | No | No app at all, so no remote control either |
| iPad | No | The iPhone app is not an iPad app |

Two consequences shape your setup. If your only machine runs Linux, the hosted
path is closed to you today and the honest options are a Mac or Windows machine
you already have access to, or a self-hosted runtime. And if you were planning
to build and tune charters from your phone during a commute, plan differently:
the phone is a remote control for a running bot, not a place to author one.
[The full platform breakdown](/blog/grok-bot-supported-platforms) covers what
each surface can and cannot do.

## Confirm the plan unlocks scheduling, not just a smarter model

Bot features sit behind paid tiers on hosted platforms, and the specific tier
moves. Eligibility widened on 21 August 2026, which quietly made a large amount
of published advice wrong about the entry price. Treat any article's plan name
or price as stale, this one included, and read the current plan page directly
before paying.

| Plan | Price as of writing | Includes Grok Bot |
|---|---|---|
| Cursor Hobby | Free | No |
| Cursor Pro | $20/mo | No |
| Cursor Pro+ | $60/mo | Yes, and it is the cheapest paid path |
| Cursor Ultra | $200/mo | Yes |
| Cursor Teams Standard | $40/user/mo | Yes |
| Cursor Teams Premium | $120/user/mo | Yes |
| SuperGrok | $30/mo | No |
| SuperGrok Plus | $100/mo | Yes |
| SuperGrok Heavy | Not published | Yes |
| A one-time trial | Free, once | Yes, for individuals |

The two rows that catch people are Cursor Pro at $20 and SuperGrok at $30. Both
are the plan directly below an eligible one, and both are what someone
remembers paying for when they say "I already have it." If you hold both a
Cursor and a SuperGrok subscription, Grok Bot draws on whichever has more usage
available rather than adding them together. [How the account and plan chain
actually works](/blog/grok-bot-cursor-account-explained) has the full picture
including the corporate history behind it.

Whatever plan you land on, what you are checking for is not the model. It is
three capabilities:

- **Scheduling.** Can a task run at a time you set, with nobody watching?
- **Tool access.** Can it reach an inbox, a calendar, a browser, a repository?
- **Persistence.** Does a bot exist as a saved object between runs, or does
  every session start empty?

A plan that gives you a smarter model but no scheduling cannot run a bot at
all. It runs conversations. That distinction is the entire difference between a
chat window and a teammate, and it is worth confirming before your card is
charged.

One thing no plan gives you is a model picker. Grok Bot does not offer model
selection to members or to admins, and xAI has said it does not plan to. If
your setup depends on pinning a specific model version, that is a constraint to
design around now rather than discover in week three.

## Grok Bot or Rakazo: pick the runtime before you build

Two runtimes dominate the paste-ready setups people share right now, and they
fail in opposite directions. Choose deliberately, because the choice changes
where your credentials live.

| | Grok Bot (xAI) | Rakazo (open source) |
|---|---|---|
| Where it runs | Hosted by the vendor | Your machine or your server |
| Model | Fixed set, no picker | Bring your own |
| Setup effort | Account and connections | Install, configure, supply keys |
| Credentials | Stored with the platform | Stay in your environment |
| Desktop platforms | macOS and Windows only | Wherever you can run it, Linux included |
| Best when | You want it working today | You need data to stay in-house |
| Worst when | Policy forbids vendor-held tokens | Nobody on hand to maintain it |

A useful tiebreaker: if you would be uncomfortable telling your accountant that
a third party holds a live session to your business inbox, run it yourself. If
that sentence does not bother you, hosted is faster and you should not
manufacture work.

The setups on botskills.sh are written against both, because a charter is
portable in a way that a UI walkthrough is not. The prompt, the tools it
expects, and the boundary all travel; only the place you paste them changes.

## Learn what one shared computer means before you connect an account

This is the part of hosted setup that most guides skip, and it changes which
accounts you are willing to attach.

On Grok Bot, all the bots on an account share a single persistent cloud
computer. Each bot gets its own screen on that machine, which looks like
separation and is not. Files written by one bot, browser cookies, signed-in
sessions, and credentials typed into a command line all live on the account's
computer, reachable from any screen. xAI's documentation states the conclusion
directly and tells you not to use separate bots as a security boundary.

Three practical consequences for setup:

- Creating a second bot does not create a second sandbox. If you were planning
  to keep a risky experiment away from your real accounts by giving it its own
  bot, that plan does not work. Use a separate account.
- Deleting a bot does not remove the files or browser sessions it created.
  Cleanup is a separate action you take on the computer itself.
- The machine underneath is a managed Linux VM and the bot runs as a non-root
  user, so the isolation that does exist is between the VM and everything else,
  not between one bot and its neighbour.

Two smaller facts worth knowing before you connect anything. Outbound traffic
uses static egress IPs, and some services flag datacenter addresses, so a
login that works from your laptop can behave differently from the bot's
browser. And there is no audit view of bot actions as of writing, which means
the record of what your bots did is whatever you instructed them to report.
[What the shared computer actually covers](/blog/grok-bot-shared-computer-security)
goes through the full list.

## Connect the minimum set of tools

Connections are usually account-level rather than per-bot. Attach an inbox once
and every bot on that account can reach it, including bots you have not written
yet and bots you copied from a stranger. That is the real reason to be stingy.

Four rules that cost nothing:

- Connect only what this week's bot needs. Add the rest on demand.
- Use a dedicated account for anything financial rather than your primary. On a
  shared computer, the account boundary is the only real one you can draw.
- For tools with no native connector, let the bot hit the login wall and hand
  you the screen. You authenticate, it resumes with a session rather than a
  stored password.
- Put a monthly reminder in your calendar to remove connections nothing uses.

Once connections exist, audit them from inside the runtime before you build
anything on top:

\`\`\`text
List every tool and account currently connected to this workspace.
For each one, state the scope granted (read, write, send, delete),
the last date a bot used it, and which of my bots depends on it.
Flag any connection with write access that no bot currently uses.
Report only. Do not disconnect or change anything.
\`\`\`

That last line matters. An audit bot with the ability to revoke access is a
worse problem than the stale connections it found. The longer argument for
granting narrowly and revoking on a schedule is in [least privilege for
bots](/blog/least-privilege-bots).

## Build one bot: a morning brief that touches nothing

Your first bot should be read-and-report, with zero write access to anything
external. A morning brief is the standard choice because a bad run wastes sixty
seconds of your attention and nothing else.

\`\`\`text
// IDENTITY
You are my Morning Brief bot.

// WHAT YOU OWN
Every weekday at 07:00 local time, read my calendar for today and
tomorrow, my inbox since the last run, and the #launches channel.
Produce one brief with exactly these four parts:
  1. TODAY: meetings in order, with the one line of context each needs
  2. NEEDS ME: items where I am the blocker, most urgent first
  3. CHANGED: anything that moved overnight and matters
  4. QUIET: what you looked at and deliberately left out

// WHAT GOOD LOOKS LIKE
The whole brief fits on one phone screen, under 250 words.
Every claim links to the source message, event, or thread.
If a section is empty, say "nothing" instead of padding it.

// WHERE YOU STOP
Never send, reply, archive, or accept anything.
Never post the brief anywhere except my own direct message.
If you cannot read a source, say so in the brief instead of guessing.
\`\`\`

The QUIET section is the part people delete and then miss. It shows you what
the bot ignored, which is the only way to catch a charter that is silently
dropping the things you care about most.

If you would rather start from a reviewed setup than a blank page, the
[chief of staff briefing bot](/bots/chief-of-staff-briefing) is this shape with
its boundary already written, and the [inbox triage bot](/bots/inbox-triage)
is the natural second one because it never sends and every draft waits for you.

## Decide where the charter lives before you paste it

The runtime holds a working copy of your charter. That copy is not a backup,
and treating it as one is a setup mistake you only discover at the worst
moment.

The platform's own retention is narrower than people assume. A routine belongs
to exactly one bot, a bot tops out at 50 routines, only the 20 most recent run
records are kept per routine, and deleting a bot deletes its routines with it.
Nothing lives at team level. So the entire history of how a bot came to behave
the way it does, every correction and every reason, exists only where you chose
to put it.

Put it in a file you own and can diff. A repository, a notes vault with
version history, or any document that records what changed and when. One file
per bot, named after the role, with a changelog block at the bottom:

\`\`\`text
// morning-brief.charter.txt
[the four blocks go here]

// CHANGELOG
2026-08-25  Created. Four sections, one schedule trigger, no write access.
2026-08-27  Added QUIET section after two useful items were dropped silently.
2026-08-29  Added empty-result clause; a broken calendar link produced a
            perfectly formatted brief that said nothing was on.
\`\`\`

Three things that buys you, none of which the runtime provides. The charter
survives you deleting the bot, so a retired setup can be revived without
reconstructing a month of tuning from memory. It moves between runtimes, which
is the whole reason a paste-ready charter is portable while a UI walkthrough is
not. And the changelog answers the question you will actually ask, which is
never "what does this bot do" but "what changed last Tuesday, because the
output got worse."

The habit costs about ten seconds per edit. Skipping it costs the afternoon you
spend trying to remember which of four changes caused the drift.

## Verify the run instead of trusting the schedule

A schedule that quietly fails looks identical to a quiet week. This is the most
common way a setup rots: it stops firing, you assume there was nothing to
report, and you find out in nine days.

Verify three things after the first scheduled run, not after the manual test:

| Check | How | Pass condition |
|---|---|---|
| It fired | Open the run history for the bot | A run exists at the scheduled time, not just your manual one |
| It read what you think | Compare the brief against the actual sources | Every source you listed appears somewhere, including as "nothing" |
| It stopped where it should | Search sent items, channels, and the trash | Zero outbound actions, zero deletions |

The third row is the one that has to be done by searching rather than by
asking. A bot's own report that it sent nothing is an assertion, and an empty
sent folder is evidence. Those are different things, and only the second one
survives a bot that misread its own charter.

Know how much history you get. A routine keeps only its 20 most recent run
records, so a daily bot gives you about four weeks of evidence and an hourly
one gives you less than a day before the earliest runs fall off the end. If a
run matters for a record you will want later, the charter has to write it
somewhere you keep, not rely on the run log.

## Set the failure path before you need it

Most runtimes will not shout on your behalf. Silence is the default, and
silence is indistinguishable from success.

\`\`\`text
If a scheduled run fails or a source is unreachable, retry once after
ten minutes. If it fails again, send me a one-line message that says
FAILED, the timestamp, and the reason. Never skip a run silently.

If you produce a brief with no items in any section, still send it,
and say which sources you successfully read to produce an empty result.
\`\`\`

The second clause catches the failure the first one misses. A bot with a broken
connection can produce a perfectly formatted brief that says "nothing" in every
section, and that output looks like a quiet Tuesday rather than a dead
integration. Making it name the sources it actually reached turns an ambiguous
empty result into a checkable one.

Retry counts are worth being conservative about. A retry loop that runs
unattended is the classic way to spend an unexpected amount of usage, and there
is no Grok Bot specific spend cap as of writing: the subscription includes a
weekly allowance and work beyond it bills on demand from actual model and token
cost. One retry, then a report, is the safe default for a first bot.

## Six setup failures and the fix for each

| Symptom | Actual cause | Fix |
|---|---|---|
| Bot answers when prompted, never runs alone | No trigger was saved | Add a schedule and confirm it in the run history |
| First run returns nothing useful | Charter says "summarize", not what a summary contains | Specify the output shape, section by section |
| Bot invents details about your calendar | Connection was never authorized, so it guessed | Reconnect and add "say so instead of guessing" to the charter |
| Runs stop after a few days | Session expired on a connected tool | Reconnect, and make failure loud so the next one is visible |
| Output drifts week to week | Corrections were typed in chat, not the charter | Move every correction into the charter file |
| Bot did something you did not expect | No boundary was written | Add the stop line before the next run |

Five of the six are charter problems wearing an infrastructure costume. That
ratio holds up in practice: the runtime is rarely the thing that is broken. For
the symptoms that genuinely are infrastructure, [the troubleshooting
guide](/blog/grok-bot-troubleshooting) sorts them by where the failure actually
lives.

## Every setup decision, with the cost of getting it wrong

Five decisions carry the whole setup. This is what each one costs when you pick
badly, which is a better guide than a list of pros and cons.

| Decision | The options | Pick this unless | Cost of the wrong pick |
|---|---|---|---|
| Where it runs | Hosted or self-hosted | Policy or Linux forces self-hosted, then self-host | Redoing every connection, and possibly a credential rotation |
| Which plan | The eligible tiers above | You qualify for the one-time trial, then trial first | A month of subscription for a capability you never used |
| What to connect | Calendar and inbox, or everything | A specific charter needs more, then add exactly that | An account-wide grant that every future bot inherits |
| First bot's authority | Read-only or read-and-write | Never, for a first bot | An irreversible action in the week you understand the least |
| Trigger type | Schedule or event | The work is genuinely reactive, then use an event | An unreadable run history and a bot you cannot reason about |

Row three is the one that is hardest to walk back. Revoking a connection is
easy, but a session that was live while a bot was running has already been
usable, and an approval controls the action being proposed rather than
reversing work already done.

## Where this setup path does not apply

Four situations where the ninety-minute path above is the wrong plan.

**Linux-only shops.** There is no Linux desktop app. The realistic route is a
self-hosted runtime, and the setup arc changes shape entirely because you own
the install, the model keys, and the updates.

**Organizations on Privacy Mode (Legacy).** That setting blocks Grok Bot
outright, so no amount of correct plan selection will produce a bot. Confirm
the workspace setting before anyone buys a seat.

**Teams that need per-bot isolation.** It does not exist. If your compliance
requirement is that the finance bot cannot reach the marketing bot's sessions,
the unit of separation available to you is an account, not a bot. A team-level
ceiling on local execution has been described as coming, with members able to
choose stricter but not looser settings, and as of writing it has not shipped.

**Anything that needs a formal audit trail today.** There is no audit view of
bot actions yet. You can build a serviceable substitute by having every bot
write an append-only log it never edits, but that is a charter convention you
maintain, not a platform guarantee, and it will not satisfy an auditor who
wants a system record.

## The objection: ninety minutes of ceremony for a morning brief

The fair criticism of this guide is that it is a lot of process for a bot that
summarizes your calendar. You could have the same brief in ten minutes by
pasting a prompt and setting a schedule, and for one bot that is true.

The reason to do it the long way is that almost nothing on this list is per
bot. The plan check, the platform check, the runtime decision, the connection
policy, and the failure convention are account-level facts you establish once
and reuse for every bot you ever build. The second bot takes fifteen minutes.
The fifth takes five.

The part that genuinely is per bot is the charter, and that is also the part
that pays back the most, because a charter with a checkable quality block turns
review from rewriting into approving. If you are going to run one bot forever
and never a second, skip to the charter and the verification step. If you
expect a roster, the ninety minutes is amortized across all of it.

## The one-sitting checklist

Work down this list in order and you have a running bot at the end of an
afternoon:

1. Confirm your machine is a supported platform.
2. Confirm the plan supports scheduling, tool access, and saved bots.
3. Choose hosted or self-run, and write down why.
4. Connect only calendar and inbox. Nothing else yet.
5. Run the connection audit prompt and read the output.
6. Save the charter in a file you own, then paste it in and set one schedule
   trigger.
7. Trigger it manually once and read the brief like a manager.
8. Let one scheduled run happen. Verify it fired, read correctly, and wrote
   nothing.
9. Add the failure-report instruction and the empty-result clause.
10. Run it for five days, correcting only in the charter.
11. Add a second, still read-only bot such as the [competitor pricing watch
    bot](/bots/competitor-pricing-watch), which reads public pages and never
    fills a form.

Nothing on that list grants a bot the ability to send, spend, or delete. That
is deliberate. Setup is the phase where you build the habit of writing a stop
line, and it is much easier to widen a bot's authority later than to explain
why it emailed a customer during week one.

**Keep reading:** [The Chief of Staff Bot](/blog/grok-bot-chief-of-staff-setup), [Self-Hosting Rakazo](/blog/rakazo-self-hosting-guide), [Bot Boundaries](/blog/grok-bot-boundaries).

## Frequently Asked Questions

### Do I need to install anything to set up a Grok bot?

With a hosted runtime, no. Bot creation happens inside the account you already
signed into, and the only install is whatever connector each tool requires,
which is usually an authorization screen rather than software. Self-hosted
runtimes are the opposite: you install the runtime, supply your own model keys,
and manage updates yourself. Choose based on where you want credentials to
live, not on which sounds more serious. Hosted gets you a working bot the same
afternoon, and self-hosted keeps sessions and tokens inside your own
environment.

### Which tools should I connect first?

Calendar and email, and nothing else until a specific bot needs more.
Connections are typically account-level, so every tool you attach expands what
every future bot on that account can reach, including setups you paste in from
elsewhere. Starting narrow also makes your first failures legible: when a bot
has access to two things, a wrong output has two possible sources instead of
nine. Add a connection at the moment a charter requires it, and remove the ones
no bot has used in a month.

### How do I know the schedule is actually running?

Check the run history rather than the output. A bot that produced nothing and a
bot that never fired look identical from your inbox, and the difference matters
enormously. Open the bot's run log after the first scheduled time has passed
and confirm a run exists that you did not trigger. Then add an explicit
instruction that a failed or skipped run must report itself with a timestamp
and a reason. Silence should never be a valid state for a scheduled bot.

### Can I use the same setup on Grok Bot and Rakazo?

Largely yes, which is why paste-ready charters are worth collecting. The
identity, the owned work, the definition of good output, and the boundary are
plain instructions that any capable runtime can follow. What does not travel is
the plumbing: connector names, the way schedules are expressed, and where the
run history lives. Expect to adjust those and nothing else. If a setup only
works on one platform, it is usually relying on a specific integration name
rather than describing the job it needs done.
`,
};

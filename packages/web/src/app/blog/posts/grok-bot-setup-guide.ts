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

## What setup actually involves

Setup is four things, and only one of them is software:

1. **Access.** An account on a plan that permits scheduled, tool-using bots.
2. **A runtime.** The thing that holds the bot and fires it on schedule.
3. **Connections.** The accounts the bot may read and write.
4. **One bot.** A charter, a trigger, and a verified first run.

Do them in that order. Attempting connections before you have decided the
runtime means redoing them, and building the bot before connections exist means
your first run fails for a reason that has nothing to do with your charter,
which is the most demoralizing way to start.

Budget about ninety minutes end to end, most of it spent on step four.

## Account and access: the parts that gate bot creation

Bot features sit behind paid tiers on hosted platforms, and the specific tier
moves. As of writing, treat any article's plan name or price as stale, this one
included, and read the current plan page directly before paying. What you are
checking for is not the model, it is three capabilities:

- **Scheduling.** Can a task run at a time you set, with nobody watching?
- **Tool access.** Can it reach an inbox, a calendar, a browser, a repository?
- **Persistence.** Does a bot exist as a saved object between runs, or does
  every session start empty?

A plan that gives you a smarter model but no scheduling cannot run a bot at
all. It runs conversations. That distinction is the entire difference between a
chat window and a teammate, and it is worth confirming before your card is
charged.

## Grok Bot or Rakazo: pick the runtime before you build

Two runtimes dominate the paste-ready setups people share right now, and they
fail in opposite directions. Choose deliberately, because the choice changes
where your credentials live.

| | Grok Bot (xAI) | Rakazo (open source) |
|---|---|---|
| Where it runs | Hosted by the vendor | Your machine or your server |
| Model | xAI's models | Bring your own |
| Setup effort | Account and connections | Install, configure, supply keys |
| Credentials | Stored with the platform | Stay in your environment |
| Best when | You want it working today | You need data to stay in-house |
| Worst when | Policy forbids vendor-held tokens | Nobody on hand to maintain it |

A useful tiebreaker: if you would be uncomfortable telling your accountant that
a third party holds a live session to your business inbox, run it yourself. If
that sentence does not bother you, hosted is faster and you should not
manufacture work.

The setups on botskills.sh are written against both, because a charter is
portable in a way that a UI walkthrough is not. The prompt, the tools it
expects, and the boundary all travel; only the place you paste them changes.

## Connect the minimum set of tools

Connections are usually account-level rather than per-bot. Attach an inbox once
and every bot on that account can reach it, including bots you have not written
yet and bots you copied from a stranger. That is the real reason to be stingy.

Four rules that cost nothing:

- Connect only what this week's bot needs. Add the rest on demand.
- Use a dedicated account for anything financial rather than your primary.
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
worse problem than the stale connections it found.

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

Then set the failure behaviour explicitly, because most runtimes will not shout
on your behalf:

\`\`\`text
If a scheduled run fails or a source is unreachable, retry once after
ten minutes. If it fails again, send me a one-line message that says
FAILED, the timestamp, and the reason. Never skip a run silently.
\`\`\`

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
ratio holds up in practice: the runtime is rarely the thing that is broken.

## The one-sitting checklist

Work down this list in order and you have a running bot at the end of an
afternoon:

1. Confirm the plan supports scheduling, tool access, and saved bots.
2. Choose hosted or self-run, and write down why.
3. Connect only calendar and inbox. Nothing else yet.
4. Run the connection audit prompt and read the output.
5. Paste the morning brief charter and set one schedule trigger.
6. Trigger it manually once and read the brief like a manager.
7. Let one scheduled run happen. Verify it fired, read correctly, and wrote
   nothing.
8. Add the failure-report instruction.
9. Run it for five days, correcting only in the charter.
10. Add a second, still read-only bot such as the [competitor pricing watch
    bot](/bots/competitor-pricing-watch), which reads public pages and never
    fills a form.

Nothing on that list grants a bot the ability to send, spend, or delete. That
is deliberate. Setup is the phase where you build the habit of writing a stop
line, and it is much easier to widen a bot's authority later than to explain
why it emailed a customer during week one.

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

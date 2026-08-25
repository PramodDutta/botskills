import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Why Agents Work Better With Self-Describing CLIs',
  description:
    'An AI agent CLI stops guessing when the tool can list its own commands. The manifest pattern, the three properties that make automation safe, and the missing one.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Why Agents Work Better With Self-Describing CLIs

Your bot ran a command that no longer exists. The flag was renamed two releases
ago, the error message was a usage dump, and the bot did what bots do with a
usage dump: it read it, invented a plausible correction, and tried again with a
different wrong flag.

Nothing was broken. The tool was fine, the bot was fine, and the setup was
fine on the day you wrote it. What failed was the list of commands you pasted
into a charter in June, which the tool had no idea existed and no way to update.

Product details in this article were checked on 2026-08-25. Command line tools
ship fast, so verify anything load-bearing on the vendor's own documentation
before you build on it.

## A tool list pasted into a prompt is stale the day after you write it

The default way people teach a bot to use a command line tool is to write the
commands into the setup prompt. Here are the six commands you need, here is
what each flag does, use this one for reports and that one for lookups.

It works immediately and it degrades invisibly. The tool adds a resource, and
your bot never learns it exists. A flag gets renamed, and your bot keeps using
the old name until something errors. A command gains a required argument, and
your bot's runs start half-failing in a way that looks like model flakiness
rather than a documentation problem.

The deeper issue is that you have created a second copy of the tool's
interface, stored in a place the tool cannot reach, maintained by nobody. It is
the same mistake as copying prices into a wiki. The copy is correct exactly
once.

Modern tools make this worse on purpose. Whop's
[CLI documentation](https://docs.whop.com/developer/cli) documents a \`whop
upgrade\` command and states that "The CLI keeps itself up to date in the
background." That is good engineering and it is fatal to the pasted list, because
the binary can now change without a deployment, a release note you read, or any
event you would notice. Your charter was written against a version that no longer
exists on the disk it runs on.

Once a tool updates itself, the only description of it that cannot be stale is
the one the tool produces at the moment you ask.

## Ask the tool what it supports instead of remembering what it supported

A self-describing tool can answer the question "what can you do" in a form a
machine can parse, without a human in the loop.

That is a stronger claim than having good documentation. Documentation is prose
on a website, and an agent reaching it has to browse, render, and interpret a
page designed for a person. A manifest is a single command that returns the
full surface: every command, every flag, argument shapes, and output formats.

The difference at run time is discovery instead of recall. Rather than
believing a list from June, the bot asks the tool what it supports now, then
plans against the answer. When the tool changes, the answer changes, and
nothing in your charter has to be edited.

There are four ways an agent comes to know a tool's surface, and they are not
equivalent.

| How the agent learns the surface | Can it disagree with the installed binary | What it costs per run | How it fails |
| --- | --- | --- | --- |
| A command list pasted into the charter | Yes, and silently, from the first release onward | Nothing | Wrong flags, invented corrections, half-failing runs that look like model flakiness |
| A documentation page fetched at run time | Yes, docs are versioned separately from the binary on this machine | Browsing, rendering, and interpreting a page built for a person | Right answer for the wrong version, and an expensive one |
| Scraping \`--help\` output per command | No, it comes from the binary | One call per command, and prose parsing on each | Fine until a help text is reformatted, then quietly wrong |
| One manifest command emitting everything | No, same source as the behaviour | One call, structured, planned against once | Only when the manifest command itself fails, which is loud |

The third row is what most people build and it is the interesting near miss. Help
text does come from the binary, so it cannot be stale, but it arrives one command
at a time, which means the bot must already suspect a command exists before it
can read about it. That is the exact thing discovery was supposed to fix.

Three things make a manifest genuinely useful rather than technically present:

| Property | What it enables | What breaks without it |
| --- | --- | --- |
| One command emits the whole surface | The bot plans before it acts | It discovers commands by failing at them |
| Structured output on every command | Results can be parsed, not scraped | The bot parses formatted tables and misreads one |
| Stable identifiers for resources | Retries and follow-ups target the same thing | A retry hits a different record |

## Whop shipped a working version of this

Whop's command line tool is a good concrete example, and a useful one because
they built it deliberately for agent use rather than adding a flag as an
afterthought.

Their [CLI documentation](https://docs.whop.com/developer/cli) documents
\`whop --llms\` as a machine-readable manifest of all commands, alongside
\`whop mcp add\` for registering with supported coding agents and \`whop skills add\`
for generating agent skills. Their [announcement post](https://whop.com/blog/cli/)
states the intent plainly: because the CLI is self-describing, agents can
discover and drive every command.

Two documented details matter more than they sound. Most command groups follow
one shape, so a bot that has learned the shape can form a defensible guess at a
command for a resource it has never seen and confirm it against the manifest
before running anything. And the CLI cannot create, list, update, rotate, or
revoke API keys itself, because those operations require a first-party dashboard
session. The tool an agent drives should not be able to mint its own
credentials, and here it cannot.

Read as a specification rather than as marketing, here is what that page
documents and what each piece buys an agent.

| Documented on the CLI reference page | What it gives an agent |
| --- | --- |
| \`whop --llms\`, described as a machine-readable manifest of all commands | A plan formed against the installed version instead of a remembered list |
| \`--format json\` on every command that talks to their API | Parsed results rather than a formatted table it might misread |
| Most groups following the shape resource, then list, get, create or update | A defensible guess at a command for a resource it has never seen |
| \`WHOP_API_KEY\` for CI, scripts, or headless agents, taking precedence over a saved profile for that invocation | A per-run identity you choose, rather than whichever profile happens to be signed in |
| Key creation, listing, rotation, and revocation requiring a first-party dashboard session, so they are not exposed by the CLI | A tool that cannot mint or widen its own credentials |
| \`whop api-keys permissions\` | A way to see what a key can do before the first unattended run |

One thing on that page is worth reading in the opposite spirit. The documented
command groups include payouts, transfers, ledgers, and disputes. Discovery works
perfectly there: an agent will find those groups, learn their shapes, and be
entirely capable of driving them. Nothing in a good manifest distinguishes a
command that lists products from one that moves money, and nothing should. That
judgment is yours, and it belongs in a charter rather than in a hope about what
the bot infers.

None of this is an endorsement of Whop as a commerce platform, which is a
different question entirely and one you should answer on your own numbers. It
is a good example of an interface built for the reader it actually has.

## Screen a command line on three properties before you hand it over

Discovery solves correctness. It does not solve safety. Before you let a bot
run a tool unattended, look for three properties, in this order.

Idempotent retries. Running the same command twice produces one outcome, not
two. This is the property that decides whether a timeout is annoying or
expensive.

Logged actions. Every invocation lands in a record you can read later, ideally
one the agent cannot edit.

A dry run. Some way to see exactly what a command would do without doing it.

Two out of three is common. Three out of three is rare enough that finding it
should change which tool you pick.

## Run the five-minute check on each property before you wire anything up

None of these needs a design review or a vendor call. Each is a command you run
or a page you search, and doing them in advance means the answer changes what you
build rather than what you hope.

| Property | The check | What to do when it is absent |
| --- | --- | --- |
| Machine-readable manifest | Run the manifest flag and confirm one call returns every command, not a summary | Scrape help per command and accept that discovery is now partial |
| Structured output | Run one read command with the JSON flag and parse the result | Restrict the bot to commands that do offer structure, and never let it parse a table |
| Idempotent writes | Look for a client-supplied identifier on any create command | Put the one-attempt retry rule below into the charter, since the tool will not help |
| A log you can reach | Can you read it without the vendor, how long is it kept, can the agent edit it | Keep your own run log in parallel and treat the tool's as unverified |
| Credential minting | Check whether the tool can create, rotate, or widen its own keys | Rule the tool out for unattended use, since no charter survives self-issued access |

The last row is never checked and is the cheapest of the five. A tool that can
issue its own credentials makes every other control provisional, because the
bot's permissions become something it can change rather than something you set.
Whop's documentation closes that door explicitly, and that is the property worth
looking for in anything else you adopt.

## Attempt every write exactly once, then go and look

Here is the failure. The bot runs a create command. The network drops after the
server processed it but before the response came back. The bot sees a timeout,
which looks exactly like a failure, and retries. Now there are two of whatever
it created.

For a report query, nobody cares. For anything that creates a record, charges a
card, sends a message, or moves a number, the duplicate is the whole problem,
and it is created by correct-looking retry logic doing exactly what you told it.

Two things reduce it. Prefer commands that take a client-supplied identifier,
so a retry with the same identifier resolves to the same object rather than a
new one. And where the tool does not offer that, write the retry rule into the
charter instead of leaving it to the bot's judgement:

\`\`\`text
RETRY RULE

Read commands may be retried up to three times.
Any command that creates, updates, sends, or moves anything is attempted
exactly ONCE. If it times out or returns an unclear result, do not retry.
Run the matching read command to find out what actually happened, report the
result to me, and stop.
\`\`\`

That last instruction is the one that saves you. A timeout is not evidence of
failure, it is an absence of evidence, and the correct response to an absence
of evidence is to go and look.

## The log has to live outside the agent

Every bot will tell you what it did. That report is a summary written by the
thing being audited, which makes it useful and not sufficient.

A tool-side log is different in kind. Whop's announcement post states plainly
that every action is logged, which is the right property to look for. Note how
thin the public detail is, though: when I read the CLI reference on 2026-08-25,
the logging documented there is \`whop apps logs\`, which returns the hosted server
runtime output of a deployed app and keeps it for seven days. That is a different
artefact from a record of the commands an agent ran, and I did not find a
documented command returning the latter. The property is claimed and the
retrieval path is not published, which are two different states of knowledge.

That is the general lesson rather than a complaint about one vendor. The question
to ask is not "does it log" but three sharper ones: can I read it without asking
the vendor, how long is it kept, and can the agent edit it. If the documentation
does not answer all three, assume a diary and keep your own record alongside.

This matters concretely for Grok Bot users. As of writing, the documentation
states that an audit view of Bot actions
[does not exist yet](https://docs.x.ai/grok-bot/teams-and-enterprises). If your
runtime does not keep the ledger, the tool's own log is the ledger, and picking
a tool that keeps one is a real selection criterion rather than a nice to have.
The broader treatment of that problem is in
[what to instrument when the runtime gives you nothing](/blog/bot-observability).

## Dry run is the one that is usually missing

Of the three properties, dry run is by far the least common. When I checked
Whop's CLI reference on 2026-08-25 I did not find a dry-run or preview flag
documented on that page. That is an honest gap in my reading rather than proof
of absence, and it is also the normal state of the ecosystem: most command line
tools built before agents were a consideration have no reason to offer one.

There is a \`--preview\` flag on that page and it deserves precision, because the
word invites exactly the wrong assumption. It belongs to \`whop apps deploy\` and
uploads a preview build that can be promoted later: a real upload of real
artefacts, not a simulation of one. A bot that reads the flag name and concludes
it has found a rehearsal mode has made the most predictable mistake available to
it, which is why a charter should name the specific flag it may treat as a dry
run rather than describing the category.

It is worth understanding why the gap hurts more with a bot than with a person.
A person running an unfamiliar destructive command hesitates, reads the flag
twice, and often opens the docs. A bot has no hesitation reflex. It has a plan,
and it executes the plan. Dry run is the mechanical substitute for hesitation,
and without it the first time you learn what a command does is after it has
done it.

This connects directly to how approvals actually behave. Grok Bot's own
security documentation is blunt about the limit: "An approval controls the
proposed action. It does not reverse work already completed." A gate placed
after the command has run is not a gate. Dry run is how you move the decision
to before.

## Run the first week on a credential that physically cannot write

The workaround is simpler than it sounds, and it is the thing I would do on any
new tool regardless: for the first week, give the bot a credential that
physically cannot write.

Not a charter instruction saying do not write. A credential with no write
permission on it. The difference is that one is a request and the other is
enforcement, and only one of them survives a confused bot deciding the rule
does not apply to this particular case.

Most platforms with API keys let you scope them, and the scoping happens in
their dashboard rather than in the tool. Whop's documentation, for instance,
includes \`whop api-keys permissions\` for inspecting what a key can do, and
states that keys themselves are created in the dashboard, not by the CLI. Run
that kind of check before the first unattended run rather than after, so you
find out from a command rather than from an incident.

The first week then looks like this. The bot runs read commands, produces the
reports and plans it would have acted on, and writes the exact command it
wanted to run into its report without running it. You read the commands. When a
week of them is boring, you widen the key.

That sequence is why our directory listing for
[Bookkeeping Auditor](/bots/bookkeeping-auditor) draws its boundary where it
does: it never edits the live books, and every change it finds waits for a
human. The same shape appears in
[PR Review Sentinel](/bots/pr-review-sentinel), which comments and never merges.
In both cases the bot's whole output is a proposal, which is exactly what a
missing dry run forces you to build by hand. The general argument for scoping
credentials this way is in
[least privilege translated for bots](/blog/least-privilege-bots).

## Publish your own machine surface for exactly the same reason

We are a directory rather than a runtime, so our machine surface is small, but
it exists for exactly the reason this article argues for.

\`\`\`text
https://botskills.sh/llms.txt
  plain text index: every bot and every article, one line each

https://botskills.sh/api/bots
  JSON catalog, filterable with ?category= and ?runtime=

https://botskills.sh/api/bots/<slug>/content
  the raw BOT.md for one bot, frontmatter plus setup prompt

https://botskills.sh/agents
  how an agent authors and submits a bot
\`\`\`

An agent asked to find a setup for a job should not have to scrape our HTML,
and it should not have to rely on a list of bots someone pasted into a prompt
in June. It should ask the catalog what is in the catalog. Every listing
carries a \`boundary\` field, which is the one action that bot never takes
without a human, and it is a field precisely so that a machine reading the
catalog can see the constraint rather than infer it from prose.

## Walk one agent through the catalog surface end to end

Take a concrete task: an agent asked to find a setup for answering product
reviews without ever posting one. Here is the whole path, and the thing to notice
is how little of it involves reading prose.

It starts at \`llms.txt\`, one line per bot and per article. That is the manifest
step, and it exists so the agent learns what the catalog holds today rather than
what someone told it the catalog held. A bot we published this morning is in that
file this morning.

It narrows with \`/api/bots?category=success\`, the structured-output step. The
agent filters on a field instead of matching words against a page, which is why
the result survives a redesign.

It fetches \`/api/bots/<slug>/content\` for the two or three candidates, which
returns the raw setup prompt rather than a rendering of it. That is the step that
would otherwise be scraping, and scraping is where an agent quietly loses the
last third of a long prompt.

Finally it reads the \`boundary\` field on each listing. For this case that field
says the bot never messages the customer and drafts stay internal. It is a field
rather than a sentence buried in prose precisely so a machine can compare
candidates on the constraint instead of inferring it.

Four steps, all machine-first, none requiring anyone to keep a list of our bots
correct inside somebody else's prompt.

## Match the failure to the property the tool was missing

CLI failures in bot runs look alike from the outside, which is why they get
misdiagnosed as model quality. Each of these has a different missing property
behind it.

| What you see | The missing property | What actually happened |
|---|---|---|
| A confidently wrong flag, then a second wrong flag | Discovery | The bot read a usage dump and invented a plausible correction |
| Two of something that should exist once | Idempotent writes | A timeout after the server had already processed the request, then a retry |
| A number in the report that no command returned | Structured output | The bot parsed a formatted table and misread a column |
| A command that worked last month and errors now | Discovery, on a tool that updates itself | The binary changed under a charter that did not |
| No record of what ran, only the bot's own summary | An external log | You are auditing the thing being audited |
| An action you would never have approved, already done | A dry run | The gate was placed after the command rather than before it |
| Access quietly wider than you granted | Credential control | The tool could issue or widen its own keys |

Five of the seven are fixed by choosing a different tool rather than writing a
better prompt. Tool selection is a safety decision, not a procurement detail.

## The strongest objection is that discovery costs a call on every run

The best argument against the manifest pattern is cost, and it is not silly. You
spend a call, tokens, and latency on every run to rediscover a surface that
changed maybe twice this year. For a bot running hourly that is a lot of
rediscovery to prevent a rare event.

The objection wins in two situations worth recognising rather than arguing with.

If you vendor a specific version of the tool and pin it, the surface cannot
change without you doing something. A pinned binary plus a command list generated
once from that binary is coherent, and strictly better than a pasted list because
it came from the artefact it describes. Regenerate it as part of the upgrade, not
as part of the run.

And if the tool exposes three commands and you use all three, the manifest is
ceremony. Read it once, write them down, move on.

Everywhere in between, the calculation runs the other way. The manifest call is
cheap, predictable, and paid on every run. The failure it prevents is rare,
expensive, and paid at a moment you did not choose, usually presenting as an
unrelated symptom while you hunt for a bug in your prompt. That is the trade a
health check makes, and nobody argues with those.

## Paste this tool-use block into any bot that drives a command line

Putting it together. This is the block, not the whole charter.

\`\`\`text
TOOL USE

At the start of every run, get the tool's current command manifest and plan
against that. Never plan from a command list in this document or from memory.
If the manifest command fails, stop and tell me. Do not guess commands.

Request structured output on every command that offers it. Never parse a
formatted table when a machine-readable format is available.

BEFORE ANY WRITE

If the command has a dry-run or preview mode, run that first and include its
output in your report.
If it does not, do not run the command. Write the exact command you would run
into your report and stop there.

You never run a command that moves money, deletes a record, or sends anything
to a person outside this company. Not with approval, not with a dry run,
not ever. Those are mine.

RETRIES

Reads: up to three attempts.
Writes: exactly one attempt, then read back to find out what happened.

REPORTING

Every command you ran, verbatim, in the order you ran it.
Every command you wanted to run and did not, and why.
Anything in the manifest that changed since your last run.
\`\`\`

That last reporting line is a small habit with a large payoff. A bot that tells
you the tool gained a command is a bot that turns vendor release notes into
something you actually read, once, in the context where it matters.

**Keep reading:** [Why Grok Bot Needs a Cursor Account and Every Way To Get Access](/blog/grok-bot-cursor-account-explained), [Grok Bot for Designers](/blog/grok-bot-for-designers-figma-motion), [Grok Bot Prompts That Actually Work](/blog/grok-bot-prompts-that-work).

## Frequently Asked Questions

### What makes a CLI good for an AI agent to use?

Three things, and only one of them is about the commands. The tool should be
able to emit its full command surface in a machine-readable form, so the agent
discovers what exists instead of trusting a list someone pasted into a prompt
months ago. Every command should offer structured output, so results are parsed
rather than scraped. And write operations should be safe to retry, logged
somewhere the agent cannot edit, and previewable before they run. Discovery
solves correctness. The other two solve safety, which is the part that decides
whether you can leave it running.

### Why not just give the agent the tool's documentation?

Because documentation is written for people and lives at a different address
than the tool. An agent reading a docs page has to browse it, interpret prose,
and hope the page matches the version installed on its machine. A manifest
comes from the binary itself, so it cannot disagree with the binary. It is also
far cheaper: one command returns the surface, where browsing burns tokens and
time on layout and marketing copy. Use the docs when you are designing the
setup. Use the manifest at run time, on every run.

### What do I do when a tool has no dry-run mode?

Build one out of permissions and reporting. Give the bot a credential scoped so
it physically cannot write, then have it produce the exact command it wanted to
run as part of its report instead of running it. You read those commands for a
week. When they stop surprising you, widen the credential one operation at a
time. This is slower than trusting a charter instruction, and it is the only
version that holds when the bot decides your rule does not apply to some
particular case.

### Is an MCP server better than a CLI for agent tool access?

They solve overlapping problems and the honest answer is that it depends on
what already exists. A well-built MCP server gives typed tool definitions the
agent sees natively, which is cleaner than parsing command output. A CLI is
often more mature, more widely tested, easier to run yourself, and trivially
scriptable outside the agent, which matters when you want to reproduce
something by hand. Some tools now ship both from the same codebase, which is
the best case. If you must pick one, pick whichever the vendor actually
maintains.
`,
};

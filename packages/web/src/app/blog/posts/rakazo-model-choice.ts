import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Choosing a Model for Rakazo: Cost, Speed, and Tool Use',
  description:
    'Your Rakazo model is now your decision. What actually matters for a long-running bot: tool-call reliability, vision for screen work, real context use, cost per run.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Choosing a Model for Rakazo: Cost, Speed, and Tool Use

The best argument for self-hosting is that you pick the model. The annoying
part of self-hosting is that now you have to pick the model, and the leaderboard
you would normally reach for measures almost nothing that matters here.

A chat benchmark scores a single high-quality answer. A bot run is thirty tool
calls in a row where the fifth one has to produce syntactically valid arguments
for a Gmail action, the twelfth has to look at a screenshot and find a button,
and any one failure burns the whole run. Different job, different criteria.

Everything below about Rakazo was read from
[elie222/rakazo](https://github.com/elie222/rakazo) on 2026-08-25. Model
pricing changes constantly, so this page deliberately teaches the arithmetic
and links to the providers' own pricing pages rather than printing numbers that
will be wrong by the time you read them.

## Self-hosting hands you a decision the hosted product deliberately removes

On the hosted alternative there is no decision to make. The Grok Bot docs state
that "Grok Bot has no model picker, for members or admins" and that user or
admin choice is not planned
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
That is a real feature for people who do not want the choice.

Rakazo puts it back in your hands. If you have not stood one up yet, start with
[the self-hosting walkthrough](/blog/rakazo-self-hosting-guide), because model
configuration is the last step of that install and the first thing that makes
the deployment useful.

## Three connection paths, and each one bills you differently

Rakazo does not maintain its own hardcoded vendor list. Its catalog is built
from the Pi harness's built-in providers, with a local provider and an
OpenAI-compatible provider registered on top
([pi-models.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/pi-models.ts)).
The connectable set therefore tracks Pi rather than anything the maintainers
curate, so check the app's model list rather than any article, this one
included.

| Path | Who pays the model bill | What the repository says about it | Best for |
| --- | --- | --- | --- |
| Provider API key | You, through that provider | "Uses your ... API key. Rakazo does not pay for model usage." | Comparing several models behind one OpenRouter key |
| Subscription sign-in | Your existing plan | Limited to ChatGPT Plus/Pro, Claude Pro/Max, Copilot, SuperGrok | An operator who already pays for one of the four |
| Operator local provider | Your hardware | "Runs on infrastructure configured by the deployment owner. No model charges from Rakazo." | Deployment-wide default on a machine you own |
| Per-user OpenAI-compatible | Whoever runs the URL | "Runs on a URL you control. Rakazo does not pay for model usage." | One person pointing at their own server |

Three details in that table are not obvious from it.

The shipped default in
[.env.example](https://github.com/elie222/rakazo/blob/main/.env.example) sets
\`PI_DEFAULT_PROVIDER\` to OpenRouter, and the catalog builder has a useful
quirk: set \`PI_DEFAULT_MODEL\` to an OpenRouter id the built-in catalog does
not know about and it is added to the list anyway, labelled as configured
through that variable. You are not restricted to the ids Pi ships with.

Subscription sign-in is limited by code, not by policy, and the code says so in
the error it raises: it "is only available for ChatGPT Plus/Pro, Claude
Pro/Max, GitHub Copilot, and SuperGrok"
([pi-oauth.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/pi-oauth.ts)).
The first three use a device code; Anthropic uses an auth URL.

The self-hosting guide names Ollama, LM Studio, llama.cpp, MLX, and vLLM as
local examples, with a warning worth reading before you point at anything:
prompts, attachments, and tool results all leave Rakazo through that URL
([self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)).
By default Rakazo accepts only loopback, private-range, and
\`host.docker.internal\` targets; public hostnames require
\`RAKAZO_OPENAI_COMPAT_ALLOW_PUBLIC\`.

One more catalog entry matters even though you would never run a bot on it. The
\`scripted\` provider is listed as a "Scripted runtime (local verification)"
with "No model charges. Deterministic fixture for tests." It matters because of
what happens when nothing is configured, which is the next section.

## Rakazo resolves your model in four layers, and the last one is a guess

Before you tune anything, know which layer is deciding. The run executor
resolves a model from a scope of a user and a workspace, reading the user's
default model credential and the deployment settings row, then falling back
([executor.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/executor.ts)).

| Layer | Where it is set | Who it applies to | Wins when |
| --- | --- | --- | --- |
| Connected credential default | Model settings, per connected provider | The user who connected it, in that workspace | It exists at all |
| Deployment default | The deployment settings row | Every user in the deployment | No user credential default |
| Environment default | \`PI_DEFAULT_PROVIDER\` and \`PI_DEFAULT_MODEL\` | The whole process | Neither of the above, and a deployment model key exists |
| \`scripted\` | Nothing is configured | Everything | No model is configured anywhere |

Three consequences fall out of that table.

The environment default is a floor, not a policy. With no connected credential
and an empty settings row, the code falls through to \`PI_DEFAULT_PROVIDER\` and
\`PI_DEFAULT_MODEL\`, and if \`PI_DEFAULT_MODEL\` is also unset it uses a
hardcoded DeepSeek id baked into the source. Fine for a first boot, bad to
inherit silently for a quarter. Set the deployment default explicitly.

The scope has no bot in it. The resolver is called with a user id and a
workspace id, and the \`Bot\` table in
[schema.prisma](https://github.com/elie222/rakazo/blob/main/packages/db/prisma/schema.prisma)
carries no model provider or model id column. Which model a run used is
recorded afterwards on the \`Run\` row rather than configured beforehand on the
bot.

The summariser inherits the same answer. History compaction uses the same
resolver when the executor provides it, so the model writing your thread
summaries is the model your default points at
([history-compaction.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/history-compaction.ts)).
If resolution lands on \`scripted\`, compaction is skipped entirely and the
process logs that it had no usable summariser model, a quiet failure you will
otherwise notice only as a bot that forgets things.

## Filter on tool-call reliability before you read a single benchmark

Rakazo's built-in tools are ordinary Pi tools rather than vendor-specific
ones, and the computer runtime doc spells out the consequence: "any model
exposed through Pi can call them"
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).
Can call is not the same as reliably calls. The tools a bot gets include
\`computer_observe\`, batched \`computer_act\`, \`open_path\`, \`launch_app\`,
\`shell\`, and file tools, plus every connector tool you enable.

That last part is where cheap models fall over. A managed app catalog exposes
dozens of connector actions with long, similar names, and the model has to pick
the right one and fill its arguments correctly first time. A model excellent at
prose and mediocre at structured output looks fine in a demo, then produces a
run that flails through six wrong tool calls before giving up, costing more
than the expensive model would have.

Test this directly rather than trusting a benchmark. Give a candidate model a
bot with your real connector set and one instruction that requires exactly
three tool calls in sequence. Run it ten times. Count how many runs complete
without a malformed call. That number is worth more than any leaderboard
position.

The count is cheap to collect because the schema already holds it. Every run
carries a status from a fixed set that includes \`completed\`, \`failed\`, and
\`cancelled\`, and every run has attempt rows attached, so a model that quietly
retries shows up as runs with more attempts rather than as an unexplained bill.

## Screen work needs vision, and that narrows the list fast

If a bot drives a browser through the desktop, the model has to look at
screenshots. Rakazo's documentation is explicit: screen operation "requires a
model that can accept image tool results and reason about screenshots"
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).
The repository's own end-to-end computer test bakes it into the command name,
requiring a vision-capable OpenRouter model id before it will run
([README](https://github.com/elie222/rakazo/blob/main/README.md)).

This is the cleanest hard filter in the whole decision. A text-only model can
run a bot that lives entirely in connector tools and the shell. It cannot run
a bot that clicks a button on a page that has no API.

There is a resolution number people forget. The Docker computer image starts
its virtual display at 1280x800
([start.sh](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/start.sh)),
so every frame your model reasons about is 1280x800. A model that is
technically vision-capable but weak at fine print fails on exactly the dense
dashboards you most wanted automated.

| What you are choosing for | The property that decides it | How to check it in Rakazo |
| --- | --- | --- |
| Connector-heavy bots | Structured tool-call accuracy | Ten runs of a three-call task, count clean runs |
| Browser and desktop bots | Accepts image tool results | The computer test refuses non-vision models |
| Long-running threads | Behaviour after compaction | Run past 100 messages, check it still knows the job |
| Scheduled bots | Wall-clock latency per step | Time a full routine, not a single reply |
| Anything you run hourly | Total tokens per completed run | Query your own usage records by bot |

## The context number that binds you is not the model's

People shop for context windows and then never use them, because the runtime
decides what actually reaches the model.

Rakazo compacts thread history on a fixed schedule. The constants are in the
source: a history window of 50 messages, a compaction batch of 50, a compacted
summary capped at 20,000 characters, and at most five semantic memories
injected into any one run
([history-compaction.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/history-compaction.ts)).
There is a larger legacy window of 200 for threads that predate compaction.

So a long-lived bot is not carrying a year of conversation into every call. It
is carrying a recent window plus a summary plus a handful of recalled
memories. Paying a premium for an enormous context window will not change that.
What does change with the model is how well it works from a compacted summary,
which is a quality you can only see by running a bot past the compaction
threshold and watching whether it still remembers its own boundary.

Screenshots are handled with the same frugality. The runtime notes that
identical consecutive frames keep their metadata but omit duplicate image bytes
from model context, which meaningfully changes the cost of a bot that watches a
slow-loading page.

If you configure a local model, note that Rakazo applies its own defaults
rather than discovering the server's: a 32768 context window and a 4096 max
token output, both overridable through
\`RAKAZO_LOCAL_CONTEXT_WINDOW\` and \`RAKAZO_LOCAL_MAX_TOKENS\`
([pi-local-provider.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/pi-local-provider.ts)).
A local model that advertises a much larger window will still be used at the
configured number until you change it.

## Latency compounds, because a run is many calls

Single-response latency is the wrong measure. A routine that opens a
dashboard, reads three panels, and writes a summary might be twenty model calls
with a screenshot round trip between several of them. A model that is two
seconds slower per call is forty seconds slower per run, and a bot on an hourly
schedule turns that into ten minutes a day of extra wall clock.

Two Rakazo settings interact with this, both shipped in
[.env.example](https://github.com/elie222/rakazo/blob/main/.env.example). Bot
computers pause after \`SANDBOX_IDLE_MS\`, which defaults to ten minutes, so a
slow model can keep a computer awake longer and change your infrastructure bill
rather than just your token bill. And \`SANDBOX_COMMAND_TIMEOUT_MS\` defaults to
five minutes, so a shell step that a slow model retries repeatedly can hit a
wall you did not configure.

Measure the routine end to end. Time a full run of a real bot, not a single
message in a chat box.

## Budget on cost per completed run, never on cost per token

Per-token prices are how models are sold. Cost per completed run is what shows
up on your card, and the two rank models differently, because a cheaper model
that needs three attempts is more expensive than a pricier model that needs
one.

Rakazo gives you the raw material to compute this honestly. Every run records
its provider and model, and usage records store provider, model, input tokens,
and output tokens against a bot and a run
([schema.prisma](https://github.com/elie222/rakazo/blob/main/packages/db/prisma/schema.prisma)).
Rows are written as the run emits them, so a run that made eleven model calls
leaves eleven rows rather than one estimate. That is your own Postgres, so the
query is yours to write, which is a concrete advantage over a hosted runtime
whose docs say there is no product-specific spend cap yet, a gap we covered in
[bot cost control](/blog/bot-cost-control).

The method, in four steps:

1. Run the same bot on candidate models for a week on a real schedule.
2. Sum input and output tokens per completed run from your usage records.
3. Multiply by the provider's current published rates for that exact model id.
4. Divide by runs that produced a usable result, not by runs that started.

Step four is the one people skip, and it is the one that changes the answer.

One schema detail to respect before you tidy up: usage records are attached to
a bot with a cascading delete, so deleting a bot deletes its cost history too.
Comparing models across throwaway bots means exporting the rows first.

## Price the exact model id yourself, on the day you write the budget

Do not take a price from an article, including this one. Model prices move,
they differ by model id within a family, and a stale table is how teams end up
budgeting on numbers that stopped being true two releases ago.

Check the provider's own page for the exact model id you configured:
[OpenRouter's model list](https://openrouter.ai/models) shows per-model rates
for anything routed through it, and vendors publish their own at
[Anthropic pricing](https://www.anthropic.com/pricing),
[OpenAI pricing](https://platform.openai.com/docs/pricing), and
[the xAI model docs](https://docs.x.ai/docs/models). Record the date you
checked alongside the number in whatever sheet you keep, because you will not
remember later which rate your budget assumed.

Write down the full model id rather than the family name, because the gap
between two ids in one family is frequently larger than the gap between two
vendors, and note which layer of the resolution table set it. "We are on the
cheap model" is a claim about a credential default somebody may have changed in
the app without telling you.

## Work one bot through the arithmetic before you switch anything

Pick a bot that already runs on a schedule and produces something you can grade
as usable or not. A research digest is ideal, because a human reads it every
morning and can say yes or no in two seconds.

Leave it on the current model for one full week, then read your own tables. The
join you want is roughly this, adjusted for how you spell identifiers:

\`\`\`sql
-- Tokens per completed run, per model, for one bot, over seven days.
select u.provider,
       u.model,
       count(distinct u."runId")               as completed_runs,
       sum(u."inputTokens")                    as input_tokens,
       sum(u."outputTokens")                   as output_tokens,
       sum(u."inputTokens" + u."outputTokens")
         / nullif(count(distinct u."runId"), 0) as tokens_per_run
from   usage_records u
join   runs r on r.id = u."runId"
where  u."botId"    = '<the bot id>'
  and  r.status     = 'completed'
  and  u."createdAt" > now() - interval '7 days'
group  by u.provider, u.model
order  by tokens_per_run desc;
\`\`\`

Then switch the deployment default to the candidate, leave it another full week
on the same schedule and the same instructions, and run the query again.

Now do the division that matters. Suppose the current model averages 40,000
tokens across 30 completed runs and you graded 27 outputs as usable, while the
candidate averages 25,000 tokens across 30 completed runs and you graded 21.
Per started run the candidate is much cheaper. Per usable output, the current
model costs 40,000 divided by 0.9 and the candidate costs 25,000 divided by
0.7, which closes most of the gap before you have priced a single token. Those
figures illustrate the arithmetic rather than measuring any model; the point is
that the second division routinely reverses the first ranking.

Day one tells you almost nothing, because a new model on a familiar task
usually looks fine. Day thirty tells you the truth, because by then the thread
has been compacted at least once, the bot has hit a page that loaded slowly,
and a connector has returned something shaped oddly.

## Screen a candidate with the harness the repository already ships

You do not have to invent an evaluation. Rakazo ships two, and they answer
different questions.

The offline suite covers tool-result images, action parsing, provider
conformance, workspace checkpoint and restore, and lifecycle integration, and
the docs state plainly that these tests "never call a model or live sandbox"
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).
A failure there is never a model problem.

The acceptance test is the one that screens a model. It is opt-in, is not run
by \`pnpm test\` or CI unless you invoke it, and takes a vision-capable
OpenRouter model id as an environment variable:

\`\`\`bash
# Needs Docker for a temporary Postgres, plus E2B_API_KEY and OPENROUTER_API_KEY.
COMPUTER_E2E_MODEL=<vision-capable-openrouter-model-id> pnpm test:computer
\`\`\`

Read what that command exercises, because it is close to a purpose built model
screen. It starts the full API, provisions a real E2B desktop, serves a
deterministic page inside the sandbox, and asks a real model to observe and
click a button. The button creates a server-side marker. The test then requires
the model to use terminal and file tools, and verifies both the marker and the
recorded tool calls. Finally it destroys the machine, boots a replacement, and
checks that the checkpoint restored the file the model created.

One command therefore proves vision, click accuracy, shell tool use, and file
tool use for a specific model id, on real infrastructure. Run it for each
candidate before you run any of them for a week.

For charter shape rather than model quality, use the \`scripted\` runtime: a
deterministic fixture with no model charges. Just do not leave a deployment
resolving to it, for the compaction reason above.

## Six model failures, and the symptom each one shows first

Most model problems present as something that does not look like one. Check
this table before you start switching vendors.

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Bot completes but the output is subtly wrong on a connector task | Malformed or misdirected tool call the model recovered from badly | Count clean runs on a three-call task; if under nine in ten, change model, not prompt |
| Graphical steps fail while shell and file steps succeed | Model cannot accept image tool results | Move that bot to a vision-capable id, verified with the computer acceptance test |
| Bot forgets its own boundary after a few weeks | Thread compacted and the summary lost it | Restate the boundary in the bot instructions, which survive compaction, not only in chat |
| Bot never seems to remember anything, no summaries appear | Model resolution landed on \`scripted\`, so compaction was skipped | Set a deployment default provider and model id, then check for new summaries |
| Local model truncates long outputs | Rakazo's own local defaults of 32768 context and 4096 max tokens | Raise \`RAKAZO_LOCAL_CONTEXT_WINDOW\` and \`RAKAZO_LOCAL_MAX_TOKENS\` |
| Token spend rose with no change in workload | A credential default changed, so a different layer of the resolution table is now winning | Group usage records by model for the period and see which id appeared |

The last row is the one worth internalising. Because a connected credential's
default outranks the deployment default, one person changing their own model
settings changes what their bots cost, and nothing announces it. Your usage
records are the only place that shows up.

## Route cheap by default and escalate on two named triggers

The pattern that holds up is boring: a cheap default for volume, a strong
model for judgment, and vision only where a screen is genuinely involved.

Rakazo supports a deployment-wide default through
\`PI_DEFAULT_PROVIDER\` and \`PI_DEFAULT_MODEL\`, and its database also stores a
default model per connected credential and a deployment default in settings,
with the model that actually served each run recorded on the run itself. The
project's site describes pointing different bots at different models, with the
cheap one triaging and the smart one writing ([rakazo.com](https://rakazo.com));
check the model settings in your own build for the current per-bot control,
since that surface is still moving in beta.

Here is a config-and-charter pair worth copying. The environment block sets a
cheap default so nothing accidentally runs expensive, and the charter names the
exception explicitly:

\`\`\`text
# .env, model section only. Never commit real keys.
PI_DEFAULT_PROVIDER=openrouter
PI_DEFAULT_MODEL=<cheap-model-id-you-verified>
OPENROUTER_API_KEY=<your key, not in git>

# Optional: an OpenAI-compatible server you operate
RAKAZO_LOCAL_MODELS=<model-id-from-your-server>
RAKAZO_LOCAL_MODELS_URL=http://127.0.0.1:11434/v1
RAKAZO_LOCAL_CONTEXT_WINDOW=32768
RAKAZO_LOCAL_MAX_TOKENS=4096

---

Bot: Lead Research
Model: the cheap default. This bot reads and sorts, it does not write
       anything anyone will read unedited.

What you do
- Take the account list from the sheet.
- For each account, read the public site and the last two press mentions.
- Score fit against our criteria and write one line of evidence per score.

Boundary
- You never contact anyone. No email, no form, no connection request.
- You never sign in to anything or create an account.
- If a page requires a login, mark the account as unverified and move on.

Escalate to the strong model when
- The task is drafting copy a human will send.
- The task requires reading a screenshot to proceed.
\`\`\`

Two triggers, both testable, and neither of them "this feels important". That
is what keeps the rule from decaying into "use the good model for the work that
matters", a sentence that ends with every bot on the expensive model by March.

Note what does not change when the model does. The boundary is the same line at
every price point, and a cheaper model makes it more important rather than
less, because the failure mode of a weaker model is a confidently wrong action.
Every listing on botskills.sh declares that line for exactly this reason:
[Lead Scout](/bots/lead-scout) never contacts anyone,
[Inbox Triage](/bots/inbox-triage) never sends an email, and no model upgrade
is a substitute for either.

## The objection: this is a lot of ceremony to avoid reading a leaderboard

The strongest argument against everything above is that it is disproportionate.
Two weeks of parallel runs and a SQL query, to choose a model that will be
superseded in six weeks anyway, for a deployment costing less per month than
one seat of the software it replaces. Pick a well-reviewed model, ship, move
on.

For a first deployment with three bots, that objection wins. Set the cheap
OpenRouter default the repository ships with, confirm the bot that drives a
browser is on a vision-capable id, and go do something else.

It stops winning at two thresholds. Schedule: a bot running hourly makes
roughly 700 runs a month, and a difference invisible on ten runs is a line item
on 700. And irreversibility: once a bot's output reaches a customer or a public
account, one confidently wrong action costs more than the entire model budget,
and the ten-run tool-call test becomes a safety check rather than a cost
optimisation.

The honest middle: run the acceptance test for every candidate regardless,
because it is one command, and the two-week comparison only past one of those
thresholds.

## Where the cheap default stops paying, and what to do at that edge

Two domains break the rule. Long chains of dependent judgment, where a bot
reads five sources and has to decide which two contradict each other: that is
one hard step, not five easy ones, and a cheap model fails it by producing a
fluent answer that picked wrong at step three, which no retry budget fixes
because the run completed. And tasks whose failure is silent, where a slightly
wrong number lands in a document nobody re-derives. Put both on the strong
model regardless of volume.

The adjacent decision is where these bots run, because the sandbox changes both
the latency numbers above and the blast radius of a confidently wrong action.
[Rakazo sandbox options](/blog/rakazo-sandbox-options) covers the providers and
what each one isolates.

**Keep reading:** [Grok Bot Cost](/blog/grok-bot-cost), [Grok Bot vs Lindy](/blog/grok-bot-vs-lindy), [Grok Bot vs OpenAI Computer Use](/blog/grok-bot-vs-openai-operator).

## Frequently Asked Questions

### Which Rakazo model should I start with?

Start with whatever cheap, tool-capable model you can verify, and set it as the
deployment default so nothing runs expensive by accident. The repository ships
an OpenRouter default in its example environment file precisely because it lets
you try several models behind one key before committing. Then upgrade
selectively: use a stronger model for bots that draft text a human will send,
and a vision-capable one for anything that drives a browser through the desktop.
Choosing by benchmark ranking is the common mistake, because those rankings do
not measure tool-call reliability across a thirty-step run.

### Does Rakazo need a vision model?

Only for screen work, but that covers more bots than people expect. Rakazo's
computer runtime documentation states that operating a screen requires a model
that can accept image tool results and reason about screenshots, and the
repository's own computer acceptance test will not run without a vision-capable
model id. A bot that lives entirely in connector actions, files, and the shell
does not need vision. A bot that clicks a button on a page with no API does. If
in doubt, assume any browser-driving bot needs it.

### Can I run Rakazo entirely on a local model?

Yes, and the repository documents two ways: a deployment-wide local provider
configured by the operator, and a per-user OpenAI-compatible connection that
each person sets in model settings. Ollama, LM Studio, llama.cpp, MLX, and
vLLM are named as examples. Two caveats matter. Rakazo applies its own context
and output limits to local models, defaulting to 32768 and 4096 tokens until
you override them. And small local models are usually the weakest at exactly
the thing bots need most, which is emitting correct tool calls repeatedly.

### How do I work out what a bot actually costs per run?

Query your own database rather than estimating. Rakazo records the provider and
model on every run, and stores input and output token counts per usage record
linked to a bot and a run. Sum tokens per completed run over a real week of
scheduled activity, multiply by the provider's current published rate for that
exact model id, and divide by the number of runs that produced a usable result
rather than the number that started. That last division is what exposes a cheap
model that quietly retries, which is the most common way a token budget goes
wrong.
`,
};

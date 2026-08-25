import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Reusing Your CLAUDE.md, Skills and MCP Servers in Grok',
  description:
    'Grok Claude Code skills compatibility is documented for Grok Build, not Grok Bot. What ports with zero config, and the frontmatter fields Grok silently ignores.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Reusing Your CLAUDE.md, Skills and MCP Servers in Grok

You have a \`.claude\` directory that took months to get right. Rules that stop
the same three mistakes, a handful of skills you actually use, MCP servers
wired to the tools you live in. The question is whether any of it survives a
move to Grok.

Most of it does. But it moves into a different product than the one half the
posts on this subject claim, and the fields you probably relied on for safety
are not the ones that carry over.

## Grok Build is the CLI. Grok Bot is the agent app.

Start here, because getting this wrong makes everything downstream wrong.

The compatibility statement lives on a Grok Build page. Grok Build is the
coding CLI you run in a terminal against a repository, and the documentation
for it says:
"Grok is fully compatible with Claude Code with zero configuration needed."
([skills, plugins and marketplaces](https://docs.x.ai/build/features/skills-plugins-marketplaces))
Grok Build went open source on 16 July 2026 ([x.ai news](https://x.ai/news)),
and it runs on grok-4.6, whose knowledge cutoff is 1 February 2026
([models](https://docs.x.ai/developers/models)).

Grok Bot is a different product. It launched in beta on 11 August 2026 and it
drives a persistent cloud computer, a managed Linux VM where the bot runs as a
non-root user ([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).
It is an agent that operates applications, not a CLI that reads your repo.

As of the documentation checked on 25 August 2026, no Grok Bot page mentions
Claude Code, SKILL.md, or CLAUDE.md. Not the FAQ, not the skills page, not the
settings page. That is not a claim that it will never work. It is a claim
about what is documented, and it is the opposite of what a lot of shared posts
assert.

| Question | Grok Build (the CLI) | Grok Bot (the agent app) |
|---|---|---|
| Reads Claude Code skills and plugins | Yes, documented, zero configuration | Not documented anywhere |
| Reads CLAUDE.md and .claude/rules/ | Yes | Not documented |
| Reads MCP servers set up for Claude Code | Yes | Not documented |
| Reads the AGENTS.md family | Yes | Not documented |
| Where it runs | Your machine, in your repository | A managed cloud Linux VM |
| How you teach it a workflow | Files committed next to the code | In-app skills and routines |
| Model choice | grok-4.6 on the CLI | No model picker, by design |

That last row is worth an aside. The Grok Bot documentation is explicit that
there is no model picker for members or admins, and that user or admin choice
is not planned. So a skill whose behaviour depended on pinning a model has
nowhere to land on the Bot side even in principle.

If you take one thing from this article: when someone tells you Grok reads
your CLAUDE.md, ask which Grok. The answer is Build.

## Ask which Grok before you believe any compatibility claim

The confusion is not random. Both products carry the same brand, both are
agentic, and the compatibility line is quotable without its context, so it
travels further than the page it came from. Run every claim you see through
this table before you act on it.

| Claim in circulation | Grok Build (the CLI) | Grok Bot (the agent app) | What to say instead |
|---|---|---|---|
| "Grok reads your CLAUDE.md with zero config" | Documented, and true | Not documented anywhere | Name the product. The answer is Build |
| "Grok picks up your Claude Code MCP servers" | Documented | Not documented | Same. Do not generalise it to the Bot |
| "Your existing skills and plugins just work" | Documented | Not documented | Same, with the field caveats below |
| "allowed-tools keeps the skill read-only" | False. It grants nothing and restricts nothing | No basis either way | Move the restriction into prose plus a mechanical control |
| "You can pin a skill to a model" | False. \`model\` is accepted and not applied | False. No model picker for members or admins, and none planned | Stop designing skills around model pinning |
| "Grok Bot runs grok-4.6" | grok-4.6 powers Grok Build | The Bot model set is not published | Unverifiable. Do not repeat it |
| "Claude Code can run a Grok-authored skill" | Undocumented | Undocumented | Say undocumented, and keep frontmatter minimal |

The fourth and fifth rows are the ones with consequences. Everything else on
that list is a naming mistake you can correct in a sentence. Those two are
assumptions people build safety on.

## Point Grok Build at a repository and these files load themselves

For Grok Build, the documented list is generous. It auto-detects Claude Code
marketplaces, plugins, skills, MCP servers, agents, hooks, and the instruction
files: CLAUDE.md, Claude.md, CLAUDE.local.md, and \`.claude/rules/\`. It also
reads the AGENTS.md family and the \`~/.agents/skills/\` and
\`~/.agents/commands/\` directories.

In practice that means you point Grok Build at an existing repository and it
picks up the setup already sitting there:

\`\`\`text
your-repo/
  CLAUDE.md               read
  Claude.md               read
  CLAUDE.local.md         read
  AGENTS.md               read
  .claude/
    rules/                read
    skills/               read
    agents/               read
    hooks/                read
    plugins/              read
    marketplaces          read

~/.agents/
  skills/                 read
  commands/               read
\`\`\`

No conversion step, no import command, no second copy of your rules to keep in
sync. That is a real convenience and it is the reason this compatibility is
worth writing about at all.

It is also the reason the next section matters. Zero configuration means
nothing tells you when something did not apply.

## Map every frontmatter field before you move a single skill

Here is the part nobody seems to have written up, and it is documented on the
same Grok Build page as the compatibility promise.

Grok accepts several SKILL.md frontmatter fields without applying them:
\`model\`, \`effort\`, \`license\`, and \`compatibility\`. Separately,
\`allowed-tools\` neither grants nor restricts tools. Read the whole surface at
once, including the fields that do survive, because the useful decision is
per field rather than per skill.

| Frontmatter field | What it means where you wrote it | What Grok Build does with it | What to do about it |
|---|---|---|---|
| \`name\` | Identifies the skill | Read. The skill loads with no conversion step | Nothing. It works |
| \`description\` | Tells the agent when the skill applies | Read | Keep it specific. It is the trigger surface you control |
| \`model\` | Pins the skill to a specific model | Accepted, not applied | Remove the dependency. Write so any model in the set can run it |
| \`effort\` | Requests deeper reasoning | Accepted, not applied | Put the depth in the body as named steps, not as a dial |
| \`license\` | Records terms of reuse | Accepted, not applied | Keep it for humans. Expect no enforcement |
| \`compatibility\` | Declares what the skill runs on | Accepted, not applied | Treat it as a note to yourself, then test the runtime |
| \`allowed-tools\` | Grants or restricts the tool set | Grants nothing, restricts nothing | Rewrite as a prose stop line plus a mechanical control |
| Any key you invented yourself | Whatever your old runtime made of it | Undocumented | Assume inert until a run proves otherwise |

"Accepted" is doing a lot of work in that table. The file parses. The skill
loads. Nothing errors, nothing warns, nothing appears in a log. Your skill
runs, apparently correctly, with four of its declarations quietly inert.

For \`license\` and \`compatibility\` that is a documentation problem at worst.
For \`model\` and \`effort\` it is a quality surprise: a skill you tuned around a
specific model and a specific reasoning budget now runs on whatever the
session has. Annoying, visible in the output, fixable.

\`allowed-tools\` is the one that is not merely annoying.

## Treat the lost allowed-tools line as a safety regression, not a nuisance

Plenty of skills use \`allowed-tools\` as a safety mechanism rather than a
convenience. The release-notes skill can read and search but not write. The
audit skill can look at files but not run shell commands. The summariser can
fetch but not post. That single line was the reason you were comfortable
running the skill without reading every step.

Move it to Grok Build and the field grants nothing and restricts nothing. The
tool set is whatever the session already has. The skill still works, so
nothing prompts you to look at it, and the reach it operates with is now
strictly larger than it was.

That is a safety regression that arrives without a single error message, and
it lands on exactly the same principle we argue everywhere else on this site:
a constraint that lives in a field the runtime ignores is not a constraint. It
is a comment. The full version of that argument is in
[the bot boundaries guide](/blog/grok-bot-boundaries), and this is the sharpest
real-world example of it we have found.

The fix is to move every restriction that mattered out of frontmatter and into
two places that do not depend on a parser honouring a key: prose in the body,
which the model genuinely reads, and a mechanical control that does not depend
on the model at all, such as the credentials the session holds, the directory
it runs in, or a required approval step.

Here is a skill that relied on the field:

\`\`\`markdown
---
name: release-notes
description: Draft release notes from merged pull requests
allowed-tools: Read, Grep, Glob
model: opus
effort: high
---

Read the pull requests merged since the last tag and draft release notes.
Group by area. Call out anything user-visible first.
\`\`\`

And the same skill rewritten so its limits survive a runtime that ignores the
frontmatter:

\`\`\`markdown
---
name: release-notes
description: Draft release notes from merged pull requests
---

Draft release notes from the pull requests merged since the last tag.
Group by area. Call out anything user-visible first.

// WHERE YOU STOP
Read only. Never write or modify a file, never run a command that changes
state, never commit, tag, push, or publish. Produce the notes as text in
your reply and stop there.

If finishing this task would require any of those actions, do not finish
it. Say exactly what you would have done and wait for me.
Failing the task is the correct outcome. Do not look for another way to
achieve the same effect.
\`\`\`

The second version is longer and it is worth the lines, because it works in
any runtime that reads the body, which is all of them. Two of the three
paragraphs are load-bearing: the first states the rule, and the last states
that the rule outranks the goal. Skip the last one and a helpful assistant
will treat the restriction as an obstacle to route around.

The same discipline shows up in catalog listings, because they have to work
without any assumption about the runtime.
[PR Review Sentinel](/bots/pr-review-sentinel) never merges, approves, pushes,
or requests changes, and comments only.
[Codebase Hardening Auditor](/bots/codebase-hardening-auditor) works only
inside the repository and never touches production. Both of those are prose
limits, not configuration keys, and that is deliberate.

## Walk one skill through the regression, start to finish

Abstract regressions are easy to nod at, so take a skill that exists in a lot
of repositories. Call it log-triage: it reads production logs, groups the
errors, and writes a summary. Eighteen months ago somebody added a line to its
frontmatter limiting it to reading and searching, and nobody has thought about
that line since. That is the normal case, not a careless one.

Day one, in the runtime it was written for. You ask it to triage last night's
errors. It reads, it searches, it produces the summary. When the obvious next
step is to restart something, it cannot, because the tool grant does not
include it. It says so and stops. You never had to think about that outcome,
which is exactly why the line earned its place.

Same file, moved to Grok Build. It parses, it loads, it runs, and the summary
looks the same. Nothing errors. Nothing warns. The only thing that changed is
that the limit which used to be structural is now whatever the body says, and
the body says nothing about restarting anything, because the field covered it.

Now the damage, which is undramatic and worse for it. The failure is not that
something gets restarted on Tuesday. It is that you no longer know which of
your skills still have limits and which are running on a field that does
nothing. They look identical from the outside: same file, same load, same
output.

Three questions turn that back into knowledge, at about a minute per skill.
What is the worst thing this skill could do with the tool grant removed
entirely? Is that worst case written anywhere the model actually reads? And is
there something outside the model, a credential, a directory, an approval, that
would stop it if the prose failed? A skill answering no, no, and no was never
safe to run unattended in any runtime, and the port is simply when you found
out.

## Port an existing .claude directory in six steps, in this order

Six steps, in order. The first one takes a minute and tells you how much work
the rest will be.

**Inventory the fields that will be ignored.** Run this at the root of every
repo you are porting:

\`\`\`bash
grep -rn "^model:\\|^effort:\\|^license:\\|^compatibility:\\|^allowed-tools:" \\
  .claude/skills/ .claude/agents/ ~/.agents/skills/
\`\`\`

**Sort every hit into decoration or control.** For each line, ask one
question: if this field did nothing at all, would I still be comfortable
running the skill unattended? A \`license\` line is decoration. An
\`allowed-tools\` line on anything that can write, send, or deploy is a control.

**Rewrite every control as prose plus a mechanical stop.** The prose goes in
the body, as above. The mechanical stop is whatever your environment offers
that does not depend on the model: a token without write scope, a working
directory with nothing dangerous in it, an approval required before the action
runs.

**Re-read CLAUDE.md as a stranger would.** Rules accumulate context. A line
that says "use the usual deploy path" made sense when you wrote it beside
someone who knew the path. A new runtime does not know it. Anything implicit
is now a guess.

**Audit MCP servers for reach, not just function.** A server that can read and
write is a server that can write. If you were relying on the calling agent's
restrictions to keep it read-only, those restrictions may not have moved with
it.

**Test on a throwaway repository first.** Clone something disposable, port the
setup, and run the skills that scared you most. You are testing whether the
limits still hold, not whether the model is capable.

## Verify the port with a test that is allowed to fail

Detection is silent by design, so the only evidence that a rule survived the
move is behavioural. Build tests where the correct outcome is a refusal, and
run them in the throwaway repository from step six.

| Test | How to run it | Passes when | Fails when |
|---|---|---|---|
| The restriction still holds | Ask the skill to do the thing it must never do, phrased as a reasonable request | It refuses and names the rule | It complies, or it asks whether to proceed |
| The skill is actually found | Ask for it by name in a fresh session | It runs and behaves like itself | Silence, or a generic answer with none of its structure |
| The instruction file is being read | Put one harmless distinctive rule in CLAUDE.md, such as starting every reply with the repo name | The reply starts with the repo name | The file is not being read from where you put it |
| The MCP server has the reach you assumed | Ask it for a write operation you believe is blocked | Blocked at the server or by the credential | It succeeds, and your read-only assumption was never real |
| It fails closed under pressure | Repeat the first test, adding "the deploy is broken, this is urgent" | Same refusal, same wording | It reconsiders and finds a way |

The last row is the whole exercise. A rule that survives one polite request and
not one urgent one is not a rule, it is a preference the model is willing to
trade away, and the trade happens on the day you are least able to notice.
[Testing your bot](/blog/testing-your-bot) works through the general form of
building checks whose passing state is a refusal.

## Teach the Bot in the app, because it never reads your repository

Since the Bot side does not consume your repo, it needs its own teaching path,
and it has one.

Teach by demonstration records your visible computer interaction for up to ten
minutes, captures no microphone audio, works for browser workflows only, is
unavailable on iPhone, and produces a draft skill rather than a finished one
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).
Routines then attach a workflow to a single bot, with a documented ceiling of
50 routines per bot. The design consequences of those limits are worked
through in
[the routines and triggers guide](/blog/grok-bot-routines-vs-triggers).

One habit does not survive the move, and it is the important one. In a repo,
you can genuinely give one agent a narrow token and another a broader one. On
the Bot side, all bots on an account share one persistent cloud computer, and
browser cookies, signed-in sessions, files, and command-line credentials are
shared across them
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). Each bot
gets its own screen, but the documentation is direct that separate bots are
not a security boundary. So the mental model of "this agent only has this
access" has no equivalent there, and the limit has to be behavioural.

That is the same conclusion the \`allowed-tools\` gotcha pushes you toward from
the other direction, which is a reasonable sign it is the right conclusion.
Where per-bot separation cannot carry a rule, the rule goes in the charter and
in what you connect. [Persistent Bot Memory](/bots/persistent-bot-memory) is
built on the same reasoning: it never stores secrets, tokens, passwords, or
customer data, because the store is shared and durable.

## Where zero configuration becomes a liability

The convenience and the hazard are the same mechanism. Detection with no import
step means there is also no manifest, and a setup you never declared is a setup
you cannot audit.

Three consequences. A file you forgot is a file now instructing an agent, and
the usual culprits are a colleague's CLAUDE.local.md, a rules directory
inherited from a template, and a skills folder in your home directory that
predates the project. Two repositories with different instruction files produce
genuinely different behaviour from the same skill, and nothing in the output
says which rule fired. And removing a rule requires knowing it exists, which is
hard when nothing documented reports the loaded set back to you.

The fix takes ten minutes. Keep one canonical instruction file per repository,
delete the duplicates instead of letting them coexist, and before blaming the
model for strange behaviour, grep every file in the detected set and read what
you actually shipped. Most "the model ignored my rule" reports are two rules
disagreeing, and the loser is the one you remembered writing.

## The strongest case for ignoring the ignored fields, and where it breaks

The best counter-argument is that those fields were never load-bearing. A
capable model reading a well-written skill about release notes was never going
to start running deployment commands, so \`allowed-tools\` was belt and braces
over an instruction that already existed in the body. If the prose is good, the
field was redundant, and losing it changes nothing real.

That is true, and it is true most of the time. Concede it properly: for a skill
that only reads, tagged out of habit, you can port it and stop thinking about
it. That is a large share of real \`allowed-tools\` usage and none of it needs
this article.

It breaks in two places. The first is the skills where the prose was never
written precisely because the field made it unnecessary. When the field is the
instruction, removing the field removes the instruction, and the body you are
relying on says nothing at all about the limit. Go and read three of your own
skills before deciding this does not describe you.

The second is pressure. A restriction stated once, mildly, in the middle of a
body whose main content is a goal, loses to the goal when finishing the task
requires crossing it. That is not a model defect, it is what helpfulness looks
like when a constraint reads as an obstacle. It is also why the rewritten
version above spends its final paragraph saying that failing the task is the
correct outcome, which is the only sentence in the file that outranks the
objective.

And there is an asymmetry that settles it. If the objection is right, following
this advice costs you about twenty minutes per repository. If it is wrong, you
find out in the single run where the limit would have mattered, which is also
the run where you were least able to watch.

## Name what is still undocumented, and stop there

Everything above describes Grok reading Claude Code artifacts. Several adjacent
questions have no published answer at all, and the honest move is to say so
rather than to infer.

| Question people ask | What is actually documented | What we will say |
|---|---|---|
| Does Grok Bot read SKILL.md or CLAUDE.md? | Nothing. No Grok Bot page mentions Claude Code, SKILL.md, or CLAUDE.md as of 25 August 2026 | Undocumented. Posts claiming it have conflated Build with Bot |
| Can Claude Code run a Grok-authored skill? | Nothing, in either direction | Undocumented. Keep frontmatter minimal if you need both |
| Which model does Grok Bot use? | There is no model picker for members or admins, and none is planned. The per-surface model set is not published | We will not name a model for the Bot |
| Do hooks behave identically across both? | Grok Build auto-reads Claude Code hooks. Equivalence of behaviour is not stated | Test them. Reading a file is not the same as matching its semantics |
| Is there a trail of what a skill did on the Bot side? | An audit view of Bot actions does not exist yet | Assume your record is whatever the run chose to report |

Nothing published describes the reverse direction, and we are not going to
assert that Claude Code will consume a Grok-authored skill or plugin correctly.

If you need one skill that works in both places, the safest construction is
also the simplest: keep the frontmatter to \`name\` and \`description\`, put
every behavioural rule in the body as prose, and pair it with a mechanical
control in whichever runtime is executing it. That version has no fields to
silently ignore, which is the whole problem this article is about.

For what a portable behavioural rule looks like when it is written properly,
[the one-person company playbook](/blog/one-person-company-grok-bot) has the
full charter format, and
[Engineering Agent Manager](/bots/engineering-agent-manager) shows the same
line applied to a bot that coordinates other agents: it never merges, posts
publicly, or messages outside the team without approval.

**Keep reading:** [Grok Bot vs Claude Agents](/blog/grok-bot-vs-claude-agent), [The Chief of Staff Bot](/blog/grok-bot-chief-of-staff-setup), [Grok Bot vs ChatGPT Tasks](/blog/grok-bot-vs-chatgpt-tasks).

## Frequently Asked Questions

### Does Grok Bot read my CLAUDE.md and SKILL.md files?

Not according to any documentation published as of August 2026. The Claude
Code compatibility statement appears on a Grok Build page, and Grok Build is
the coding CLI that runs against your repository. No Grok Bot page mentions
Claude Code, SKILL.md, or CLAUDE.md at all. Grok Bot is taught through in-app
skills, including a teach by demonstration mode that records browser
workflows, rather than through files in a project. Posts that describe Grok
Bot reading your \`.claude\` directory have conflated the two products.

### What transfers from Claude Code to Grok Build with zero configuration?

The documented list covers marketplaces, plugins, skills, MCP servers, agents,
hooks, and the instruction files CLAUDE.md, Claude.md, CLAUDE.local.md, and
the \`.claude/rules/\` directory. Grok Build also reads the AGENTS.md family and
the \`~/.agents/skills/\` and \`~/.agents/commands/\` directories. There is no
import or conversion step: you point it at a repository and the existing setup
is detected. The caveat is that detection is not the same as application, and
several frontmatter fields load without taking effect.

### Why does allowed-tools stop working when I move a skill to Grok?

Because Grok accepts the field without acting on it. The documentation states
that \`allowed-tools\` neither grants nor restricts tools, so a skill that used
it as a safety mechanism runs with whatever tools the session already has. The
file parses, the skill loads, and nothing warns you, which is what makes it
dangerous rather than merely inconvenient. The same is true of \`model\`,
\`effort\`, \`license\`, and \`compatibility\`. Move any restriction that mattered
into the body as prose and pair it with a mechanical control.

### Can Claude Code use a skill I wrote for Grok?

That direction is undocumented and we are not going to claim it works. If you
need a single skill that behaves the same in both runtimes, keep the
frontmatter minimal, ideally just a name and a description, and put every
behavioural rule in the body where any runtime that reads the file will see
it. Then pair the rule with something mechanical in each environment, such as
a token without write access or a required approval. A rule expressed only in
a field can always be ignored by a parser that does not implement it.
`,
};

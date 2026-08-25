import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Open Source Bot Runtimes Compared in 2026',
  description:
    'An open source AI agent runtime is only as free as its LICENSE file. Eight compared for 2026, with every licence read from the repository rather than assumed.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Open Source Bot Runtimes Compared in 2026

Half the projects marketed as open source in this category are not, and the
difference is not pedantic: it decides whether you can run one commercially
without a lawyer. Licences and repository details below were checked on
2026-08-25 by opening each repository's own LICENSE file. Verify before you
rely on any of it, because these move weekly, and the file to open is always
\`LICENSE\` in the default branch, never the badge in the README.

A note on where we stand: botskills.sh is a directory of bot setups, not a
runtime. We do not compete with anything on this page, which is precisely why
we can afford to tell you when one of them is the wrong choice.

## Who each of these is actually for

If you want a roster of persistent bots you chat with, each with its own
computer, [Rakazo](https://github.com/elie222/rakazo) and
[OpenMausBot](https://github.com/milind-soni/OpenMausBot) are the closest
shapes, with Rakazo built as a server you deploy and OpenMausBot built as a
desktop app driving agent CLIs already on your machine. If you want a general
agent on your own laptop, [goose](https://github.com/block/goose) is the most
mature. If your work is code and you want scheduled automations around it,
[OpenHands Agent Canvas](https://github.com/All-Hands-AI/OpenHands) is aimed
squarely at you. If you want an API-compatible replacement for a hosted managed
agents product, [Open Managed Agents](https://github.com/openma-ai/open-managed-agents)
exists for exactly that. And if you are hoping n8n counts as open source, read
the licence section before you build a business on it.

## How I checked, and what I refused to include

Every project here was included on one condition: I loaded its repository, read
its README, and read its LICENSE file. The licence column below is what that
file says, not what a badge, a listicle, or a directory site says.

Plenty of names surfaced during research that I could not confirm as real
repositories. Those are not in the table. A comparison with an invented project
in it is worthless, and the safest assumption about any aggregated "best
alternatives" list is that nobody opened the repositories.

Two kinds of exclusion happened here and both are worth stating, because the
exclusions are the part of a comparison nobody publishes. Several projects that
surfaced repeatedly in search results could not be loaded at all. The repository
did not resolve, so there was nothing to read, and a project I cannot open is a
project I cannot describe. Listing it on the strength of a search snippet would
have been precisely the failure this article exists to warn about.

The second exclusion is subtler. One project loaded cleanly, but its README was
near identical to another already in the table and the copyright holder named in
its licence file was the same. Listing both would have made the roster look one
entry longer while telling you nothing new. If you find a ninth name elsewhere
and wonder why it is missing here, it is one of those two reasons, and neither is
a judgement about the software.

I have not run all eight in production. Where I describe how a project runs, it
is from that project's own installation instructions, not from experience, and I
say so rather than implying a bake-off that did not happen.

## Let your hardest constraint eliminate most of the list

Comparisons in this category get sorted by popularity, the one signal that tells
you nothing about whether a project can do your job. Elimination is faster.
Apply the constraint you cannot negotiate away first, and most of the list
disappears before you read a feature description.

| The constraint you cannot move | What it removes | What survives it |
|---|---|---|
| Nobody on your side will run a server, a database, and a worker process | Rakazo, OpenBot, and self-hosted Open Managed Agents | goose, OpenMausBot, nanobot, Letta |
| It has to be reachable from a phone | Everything without a mobile surface | Rakazo, which ships an Expo mobile app alongside the web and Electron shells |
| It has to drive the agent CLIs you already pay for, with no second subscription | Anything that proxies to its own model provider | OpenMausBot, which runs bots on the \`claude\`, \`codex\` or \`grok\` CLIs already installed |
| More than one person needs their own access | nanobot, which has no multi-user access control | Rakazo, OpenBot, OpenHands Agent Canvas, Open Managed Agents |
| Customer data must never leave infrastructure you control | Every hosted product, which is the whole point of this page | All eight, since each documents a self-hosted or local path |
| Client code already calls a hosted managed-agents API and must not be rewritten | Everything that is not API compatible | Open Managed Agents, which exists for exactly this |
| The steps never change and every run must produce the identical result | All eight, without exception | A deterministic workflow tool, because this is not an agent problem |

The last row is the one worth reading twice. An agent runtime is the wrong tool
for a fixed sequence, and the demo will look brilliant right up until the run
where it improvises.

## The licence table, read from each LICENSE file

| Project and repository | Licence in LICENSE (linked to the file) | How you run it |
|---|---|---|
| Rakazo (\`elie222/rakazo\`) | [Apache License 2.0](https://github.com/elie222/rakazo/blob/main/LICENSE) | Node 22+, pnpm 9, Docker; Postgres via compose, then \`pnpm dev\` |
| OpenMausBot (\`milind-soni/OpenMausBot\`) | [Apache License 2.0](https://github.com/milind-soni/OpenMausBot/blob/main/LICENSE) | Signed desktop builds for macOS, Windows, Ubuntu, or from source with Node 24+ |
| OpenBot (\`CopilotKit/openbot\`) | [MIT](https://github.com/CopilotKit/openbot/blob/main/LICENSE) | Docker Compose, data in your own PostgreSQL |
| goose (\`block/goose\`) | [Apache License 2.0](https://github.com/block/goose/blob/main/LICENSE) | Desktop app, or a one-line CLI install |
| OpenHands Agent Canvas (\`All-Hands-AI/OpenHands\`) | [MIT](https://github.com/All-Hands-AI/OpenHands/blob/main/LICENSE) | Self-hosted locally, in Docker, on a VM, or on their cloud |
| nanobot (\`HKUDS/nanobot\`) | [MIT](https://github.com/HKUDS/nanobot/blob/main/LICENSE) | Python 3.11+, installed from PyPI |
| Open Managed Agents (\`openma-ai/open-managed-agents\`) | [Apache License 2.0](https://github.com/openma-ai/open-managed-agents/blob/main/LICENSE) | Cloudflare Workers and Durable Objects, or \`docker compose up\` |
| Letta (\`letta-ai/letta-code\`) | [Apache License 2.0](https://github.com/letta-ai/letta-code/blob/main/LICENSE) | \`npm install -g @letta-ai/letta-code\`, then \`letta server\` |

Two footnotes on that table. The goose README points at an \`aaif-goose/goose\`
repository, and both locations carry an Apache 2.0 LICENSE; the project states
it is now part of the Agentic AI Foundation at the Linux Foundation. And
\`letta-ai/letta\` is now a landing page: its README says the current source
lives in \`letta-ai/letta-code\`, which is the repository whose licence I read.

## Three of these are shaped like a roster you talk to

**Rakazo** is a server. Postgres and Prisma underneath, a web app, an Electron
desktop shell and an Expo mobile app on top, with sandbox providers for Docker,
E2B, Daytona and Box. Bots are persistent, they carry memory and routines, and
they get either a shared Team Computer or a computer of their own. Its own
runtime documentation is unusually honest about the limits of that split,
stating that per-bot folders on a Team Computer are not security boundaries.
Good at: a household or small team wanting always-on bots reachable from a
phone. Not for: anyone who does not want to operate Postgres, a worker process
and a sandbox provider. It describes itself as in beta.

**OpenMausBot** takes the opposite approach: local first, with a harness server
on \`127.0.0.1\` owning every agent process and transcripts kept in a directory
in your home folder. Bots run on the \`claude\`, \`codex\` or \`grok\` CLIs you
already have installed and logged in, so there is no new subscription and no
proxy in the middle. A permission broker turns shell commands and file edits
into approval cards. Routines and webhook triggers exist, with the webhook
receiver bound locally. Good at: using subscriptions you already pay for, on one
machine. Not for: a team that needs a shared always-on service, since it is a
desktop app; Ubuntu support is beta and host control is disabled entirely on
Wayland pending a safety issue the project links from its README.

**OpenBot** from CopilotKit is MIT licensed and openly labelled alpha. Its
premise is that any AG-UI agent arrives as a coworker, and that every action
against a computer, a file, an MCP server or a component passes through one
gateway that decides and records it. Agents are configuration in a YAML file
rather than code. Good at: teams already building on AG-UI who want governance
at the protocol layer. Not for: production today. Note one detail from its own
README: the example environment ships a single-user flag that admits every
request as one administrator, which is convenient on a laptop and completely
wrong on anything reachable from a network.

## Five are agents first, with no roster to speak of

**goose** is a general agent written in Rust with a desktop app, a CLI and an
API, working across many model providers and connecting to extensions over MCP.
It is the least bot-shaped thing here: no roster of persistent teammates, no
per-bot computer. Good at: being the dependable local agent, with governance
that comes from the Linux Foundation rather than from one vendor's roadmap. Not
for: anyone who specifically wants the messaging-app metaphor.

**OpenHands Agent Canvas** is a self-hosted control center for coding agents. It
runs the OpenHands agent out of the box but will also drive Claude Code, Codex,
Gemini or any ACP-compatible agent, across local, Docker, VM or cloud backends,
with automations that run on a schedule or on webhook events. Good at:
engineering teams who want scheduled agent work near their repositories. Not
for: non-technical workflows; the framing is a developer control center and the
product does not pretend otherwise.

**nanobot** is a Python personal agent framework with a WebUI, a terminal and
chat-app surfaces, plus memory, MCP and multi-agent delegation, installed from
PyPI. Good at: a single person who is comfortable in Python and wants something
small to fork. Not for: teams needing multi-user access control.

**Open Managed Agents** is the odd one out and the most precisely scoped: an
Apache 2.0 implementation of a hosted managed-agents API, drop-in compatible,
running on Cloudflare Workers and Durable Objects or on your own box, with
bring-your-own model credentials, MCP, encrypted vaults and durable sessions.
Good at: escaping a hosted dependency without rewriting the client code that
already calls it. Not for: someone who wants a UI, because the product is the
API.

**Letta** builds stateful agents whose memory persists and improves, usable from
a terminal UI, a desktop app, chat channels or an SDK, with \`letta server\` for
self-hosting. Good at: agents where long-lived memory is the point. Not for:
computer use, which is not what it is built around.

## Source available is not the same as open source

These come up in every comparison of this kind and get described as open source
constantly. Their own licence files disagree, in specific and different ways:

| Project | What the licence file actually says |
|---|---|
| [Suna](https://github.com/kortix-ai/suna/blob/main/LICENSE) | Elastic License 2.0. Source available, with use restrictions. Not an OSI-approved open source licence. |
| [n8n](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) | A Sustainable Use License. Files with \`.ee\` in the name or directory need a separate enterprise licence, and content on branches other than master is stated as not licensed at all. |
| [Dify](https://github.com/langgenius/dify/blob/main/LICENSE) | A modified Apache 2.0. Commercial use is allowed, but operating a multi-tenant service needs a commercial licence, and you may not remove the logo or copyright from the frontend. |
| [Flowise](https://github.com/FlowiseAI/Flowise/blob/main/LICENSE.md) | Apache 2.0 for most of the tree, with an enterprise directory and specific files under a separate commercial licence. |
| [Activepieces](https://github.com/activepieces/activepieces/blob/main/LICENSE) | MIT Expat for most of the tree, with everything under the enterprise directories under a different licence. |
| [Open WebUI](https://github.com/open-webui/open-webui/blob/main/LICENSE) | A BSD-3-style licence plus a branding clause: you may not remove or alter Open WebUI branding unless you stay under fifty end users in a rolling thirty days, or hold written permission. |

None of that makes them bad software. Several are excellent, and the restriction
is usually aimed at cloud providers reselling the product rather than at you
running it internally. The point is that "open source" in a headline tells you
nothing, and the files above tell you everything.

## Why the licence decides more than the feature list

A permissive licence and a copyleft one are genuinely different commitments, and
the difference shows up at the worst moment.

Under MIT or Apache 2.0 you can use the software commercially, modify it, ship
it inside a closed product, and keep your changes private. Apache 2.0 adds an
express patent grant and asks you to mark files you changed; MIT is shorter and
says nothing about patents, which is why legal teams often prefer Apache for
anything you build a business on. Copyleft licences, by contrast, attach
conditions to distribution, and the network-service variants attach them to
running a modified version as a service, which is a real obligation rather than
a formality. Source-available licences like Elastic 2.0 or a Sustainable Use
License are a third category again: usually fine internally, usually forbidden
as the basis of a competing hosted service.

Then there is the case with no ambiguity at all. If a repository has no LICENSE
file, no rights are granted. Default copyright applies, and you have no
permission to use, copy, modify or distribute it, regardless of how public it
looks or how many stars it has. "It is on GitHub" is not a licence. That is a
blocker rather than a detail, and the fix is to open an issue asking the
maintainer to add one. Every project in the tables above ships a licence file,
so the rule did not bite here, but it will the first time you pull in a
promising fork.

## Match the licence to what you actually plan to ship

The licence question only has an answer once you say what you intend to do. The
same file that is entirely permissive for an internal tool becomes the blocker
for a hosted product. Read down the left column to your intent, then read across.

| What you intend to do | Permissive (MIT, Apache 2.0) | Elastic 2.0 or a Sustainable Use License | Apache with a commercial carve-out | BSD style with a branding clause |
|---|---|---|---|---|
| Run it internally for your own team | Yes | Generally yes, this is the case these licences are written to allow | Yes | Yes, the branding clause still applies |
| Modify it and keep the changes private | Yes, and Apache 2.0 asks you to mark changed files | Read the use restrictions before you start | Yes for the permissive part of the tree | Yes |
| Embed it in a closed product you sell | Yes | This is the case the restrictions exist to control | Depends entirely on which directories you compiled in | Yes, if the branding survives |
| Offer it to customers as a hosted multi-tenant service | Yes | No, not without a separate licence | Dify's file names a commercial licence for multi-tenant operation | The branding clause governs, not the hosting |
| Publish a fork | Yes, carrying the notices | Restricted | Only the permissively licensed parts of the tree | Yes, with branding intact |
| Remove the vendor's logo from the interface | Not a licence question at all | Not addressed | Dify's file forbids removing the frontend logo and copyright | Forbidden unless you stay under fifty end users in a rolling thirty days, or hold written permission |

Five of the eight projects in the first table sit on Apache 2.0, which matters
more than it looks: the express patent grant that MIT does not contain is why
legal teams prefer it under anything commercial, and it is the licence that
survives a diligence conversation with the least friction.

None of this is legal advice. It is a reading of files anyone can open, and
anything you are betting a company on goes to a lawyer rather than to a blog
post.

## Open the LICENSE yourself in four minutes

Do not take this article's word for any row above. The check is short, it is the
same for every repository, and it produces a record you can show someone later.

\`\`\`bash
# 1. The file, not the badge. Default branch, top of the tree.
git clone --depth 1 https://github.com/OWNER/REPO && cd REPO
cat LICENSE 2>/dev/null || cat LICENSE.md

# 2. Carve-outs live in directories. Find them before you depend on them.
find . -iname 'LICENSE*' -not -path './node_modules/*'
ls -d */ | grep -Ei 'ee|enterprise|commercial'

# 3. Read three sentences, not the middle of the file:
#    what you may do, what you may not do, and whether a
#    separate licence is named for any part of the tree.

# 4. Record it, because the answer expires.
echo "REPO | $(git rev-parse --short HEAD) | $(date +%F) | LICENCE NAME" \\
  >> licences-checked.txt
\`\`\`

Two of those steps can fail in a way that changes your plan. If step 1 prints
nothing, stop: no LICENSE file means no rights granted. If step 2 lists a
directory with an enterprise or commercial name and you were about to deploy
from the default branch, you have found the thing that would otherwise surface
in a customer's vendor questionnaire next year, when unwinding it is expensive.

## The five ways a licence read goes wrong

Each of these is a real failure pattern rather than a hypothetical, and each maps
to a step above.

| What you did | What it costs you later | The step that catches it |
|---|---|---|
| Read the README badge instead of the LICENSE file | Legal blocks a launch on terms nobody had opened | Step 1, on the default branch |
| Cloned the default branch and never looked deeper in the tree | A directory you compiled in carries different terms from the root | Step 2, the find across every LICENSE file |
| Assumed a permissive top-level licence covers everything you ship | The project's dependencies carry their own terms into your distribution | A dependency licence scan, which is a separate job from this one |
| Pulled a promising fork that has no LICENSE file at all | No rights granted, default copyright, nothing you can build on | Step 1 printing nothing, which is itself the answer |
| Checked once and never again | The project relicensed, and the terms you remember are not the current ones | Step 4, the dated record, re-read before any major upgrade |

Step 4 is the cheapest of those fixes and the one everyone skips. Four lines in a
text file is the difference between answering a diligence question in a minute
and re-auditing eight repositories in a week.

## The strongest objection: none of this bites a tool you only run internally

The honest counter-argument to this entire article is that licence anxiety is
mostly imported from a different situation. If you self-host one of these for
your own team, never redistribute it, never resell access, and never embed it in
something a customer buys, then Elastic 2.0, a Sustainable Use License and MIT
are functionally identical for you. The restrictions in the source-available
group are aimed at cloud providers reselling the product, and you are not one.

That objection is correct, and it wins for most readers most of the time. It
stops winning at four specific moments, and all four arrive with a deadline
attached: you decide to embed the thing in a product you sell, you decide to
host it for customers, someone acquires your company and diligence opens every
licence file in the tree, or an enterprise customer's security review asks for a
software bill of materials. None of those are exotic. All of them are worse to
discover late.

So the position is not that licences are urgent. It is that the check costs four
minutes now and an unknown number of weeks later, and the asymmetry is the whole
argument.

## Who should not self-host any of these

Self-hosting buys you data residency, a database you can query, and no dependency
on somebody else's pricing page. It costs you an operator.

If nobody on your side will patch the host, rotate the secrets, watch the disk,
and read the logs, a hosted product is genuinely the better answer and you
should take it. If your steps never change and you need the identical result
every run, a deterministic workflow tool beats any agent, and an agent runtime
is the wrong tool no matter how good the demo looked. And if your requirement is
that customer data never leaves your infrastructure, self-hosting is not a
preference, it is the only option on the list, which is exactly when the extra
operational cost is worth paying.

## Where this comparison stops being reliable

Every comparison has a shelf life and a boundary, and it is better to name both
than to let you find them.

Licences change. A project can relicense, and while the version you already
pulled keeps the terms it shipped under, the next upgrade may not. That is why
the dated record exists and why "we checked in 2026" is an answer with an expiry
rather than a fact.

A root LICENSE does not describe every file in the tree. Three projects in the
source-available table prove it: terms differ by directory, and the directory you
need is usually the one carrying the feature you wanted.

The model provider is a separate legal layer no runtime licence touches. An
Apache 2.0 runtime calling a hosted model still sends every request under that
provider's terms, and says nothing about whether your data trains a model or
where inference happens. Reading one file does not answer the other question.

None of this is a benchmark. There is no latency, reliability or throughput
figure here, because producing honest ones for eight self-hosted projects is a
quarter of work that did not happen. Any article that hands you those numbers
almost certainly did not do it either.

And a licence permitting commercial use is not a statement that the software is
ready for it. Rakazo describes itself as in beta and OpenBot is labelled alpha by
its own README. Apache 2.0 and MIT grant you the right to run alpha software in
front of customers. They do not make it a good idea.

## The charter is what you actually carry between them

Every runtime here reads instructions in plain language. That is the portable
layer, and it is why our catalog stores setups as prose with one declared
boundary rather than as an export from any single product:

\`\`\`text
Job: research inbound signups and rank them by fit before my Monday review.
Sources: the signups sheet, the company website, and public LinkedIn pages.

Good output: one table, at most 20 rows, with company, headcount band, likely
budget owner, one sentence on why they signed up, and a fit score out of five.
Anything you could not verify is left blank rather than guessed.

Boundary: never contact anyone. No emails, no connection requests, no form
fills, no account creation. Research and ranking only.

If a source needs a login, skip it and note the skip in the table.
\`\`\`

That paste works in Rakazo's bot instructions, in an OpenMausBot bot profile, in
an OpenBot agent entry, or in a goose session, unchanged. It is the setup behind
[Lead Scout](/bots/lead-scout) in our directory, and the boundary sentence is
the same one whichever runtime ends up executing it. The same is true of a
coordination setup like [Chief of Staff](/bots/chief-of-staff), where the line is
that it routes and flags rather than decides.

That portability is the argument for treating the runtime as replaceable, which
is what [migrating a Grok Bot setup to Rakazo](/blog/migrate-grok-bot-to-rakazo)
walks through in detail, and it is the reason
[this directory exists at all](/blog/introducing-botskills).

**Keep reading:** [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers), [The Best AI Bots for Founders in 2026](/blog/best-ai-bots-for-founders), [The Best AI Bots for Marketing Teams in 2026](/blog/best-ai-bots-for-marketing).

## Frequently Asked Questions

### What is the best open source AI agent runtime in 2026?

There is no single winner, because the projects are shaped for different jobs.
For persistent bots that get a machine to work on, Rakazo and OpenMausBot come
closest to the Grok Bot experience, the first as a deployed server and the
second as a local desktop app. Note that the per-bot part differs: Grok Bot
gives every bot on an account a screen on one shared computer, not a computer
each. For a general agent on your machine, goose is the
most mature. For scheduled work around a codebase, OpenHands Agent Canvas fits
best. Pick by shape first, then confirm the licence allows your intended use.

### Is n8n open source?

Not under an OSI-approved licence. Its licence file describes a Sustainable Use
License, states that source files with an enterprise marker in their name or
directory require a separate enterprise licence, and says content on branches
other than the main branch is not licensed. That is a source-available model,
and for most internal automation it is perfectly workable. It becomes a problem
if your plan is to offer n8n itself as a hosted service to customers, which is
the case the licence is written to prevent.

### What happens if a GitHub project has no LICENSE file?

No rights are granted to you. Default copyright applies, which means you have no
permission to use, copy, modify or distribute the code, however public the
repository is. Being visible on GitHub is not a licence, and a README saying
"free to use" is not one either. This is a genuine blocker for commercial use
rather than a technicality. The practical fix is to open an issue asking the
maintainer to add a licence, and to avoid building anything on the project until
one appears.

### Can I run a bot setup on more than one runtime?

Usually yes, because the portable part is the written charter rather than the
configuration. The job description, the definition of good output, the boundary
line and the schedule intent are plain prose, and every runtime here accepts
plain prose instructions. What does not transfer is connector authentication,
approval configuration, and anything on the machine, because those are tied to
one deployment. Expect to rewrite the setup work and paste the charter
unchanged.
`,
};

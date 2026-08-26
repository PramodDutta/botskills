import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs Grok Build vs Grok 4.6: Three Products, One Name',
  description:
    'Grok Bot vs Grok Build vs Grok 4.6 are three products that share a name. Skills and CLAUDE.md belong to Build, never to the Grok Bot product.',
  date: '2026-08-26',
  category: 'Comparison',
  content: `
# Grok Bot vs Grok Build vs Grok 4.6: Three Products, One Name

Grok Bot vs Grok Build is the mix-up that produces the largest pile of wrong articles in this category. People search one phrase and get three objects: a teammate product on a shared cloud computer, a coding CLI, and a model. Grok Bot does not read your CLAUDE.md. Grok Build does, with documented caveats. grok-4.6 is a real model with a published cutoff. Grok Bot's serving model is unpublished, and the bot has no picker. If you paste a SKILL.md into a Grok Bot charter because a tweet said "Grok is compatible with Claude Code," you applied a Build fact to a Bot product.

This page keeps the three names apart. Coding details live in [reusing CLAUDE.md, skills and MCP](/blog/grok-bot-claude-code-skills-compatibility), which is about Build even though the slug says bot. Product facts for Grok Bot come from [docs.x.ai/grok-bot](https://docs.x.ai/grok-bot/faq). Build facts come from [docs.x.ai/build](https://docs.x.ai/build/features/skills-plugins-marketplaces). Both were checked 2026-08-25.

## Separate the teammate, the CLI, and the model before you install anything

| Object | Kind | Where it runs | What you buy |
|---|---|---|---|
| Grok Bot | Product | Shared cloud Linux VM, desktop and iPhone clients | A bundled teammate inside eligible Cursor and SuperGrok plans |
| Grok Build | Product | Your machine or CI, the grok CLI | A coding agent that reads local skill files |
| grok-4.6 | Model | API and product backends | Tokens, not a teammate and not a CLI |

Grok Bot launched in beta on 11 August 2026. Grok Build went open source on 16 July 2026. grok-4.6 is current, knowledge cutoff 1 February 2026, and powers Grok Build in the developer docs. None of those dates make the three objects one SKU.

If you needed a named bot to triage mail, you wanted Grok Bot. If you needed a terminal agent that picks up \`.claude/skills\`, you wanted Grok Build. If you needed a model in an API call, you wanted a model, and you still must not claim Grok Bot is that model.

## Never paste a Build compatibility list into a Bot charter

The line everyone quotes is that Grok is fully compatible with Claude Code with zero configuration. That sentence lives in the Build docs. It is about marketplaces, plugins, skills, MCP servers, agents, hooks, and the CLAUDE.md family. The Grok Bot docs never mention Claude Code, SKILL.md, or CLAUDE.md. Conflating them is the most likely error in the whole topic.

Build also documents a gotcha: Grok accepts but does not apply SKILL.md \`model\`, \`effort\`, \`license\`, or \`compatibility\` fields, and \`allowed-tools\` grants and restricts nothing. Even on Build, a skill file is not a security boundary. On Bot, that file is not the interface at all.

Engineers still need bots. [PR Review Sentinel](/bots/pr-review-sentinel) is a Grok Bot listing for review, not a CLI install. [Inbox Triage](/bots/inbox-triage) is mail. Neither becomes a Claude Code clone because you dropped a SKILL.md in a repo the VM can see.

## Put Grok Bot on the shared computer, and leave it there

Grok Bot's computer is assigned to the user account. Bots share cookies, files, and CLI credentials. Screens are not security boundaries. Deleting a bot does not clean the VM. That is the opposite of "each agent is a sandboxed coding worker." If you wanted sandboxed coding workers, look at Build on your machine, or at a harness you own, not at more Grok Bots.

Grok Bot also has no model picker, for members or admins, and no plan to add one. Billing follows the serving model. You cannot pin grok-4.6 onto a bot as a documented feature. Articles that say "Grok Bot runs grok-4.6" are asserting an unpublished mapping.

## Put Grok Build in the repo, and expect local files to matter

Build reads Claude Code marketplaces, plugins, skills, MCPs, agents, hooks, CLAUDE.md / Claude.md / CLAUDE.local.md / \`.claude/rules/\`, plus the AGENTS.md family and \`~/.agents/\` skills and commands. That is a local-first coding surface. It is not a cloud teammate that signs into Gmail and keeps going when the laptop shuts. If your laptop shuts, Build on that laptop shuts, unless you put it in CI.

Do not reverse the compatibility claim. "Claude Code can consume Grok-authored skills" is unverifiable. Do not write it.

## Use grok-4.6 as a model name, never as a product nickname

Search traffic glues "grok 4.6" to "grok bot" because they shipped in the same news cycle. The model has a developer page, a cutoff, and API pricing elsewhere. The bot has a FAQ, a computer, and a bundle. Calling the bot "grok 4.6" trains operators to look for a picker that the teams page says will not exist. Calling the model "a bot" trains operators to expect routines, plugins, and a cloud VM inside an API response.

When you write charters, name the product. When you write evals, name the model if you are on an API. When you are on Grok Bot, name the bot and accept failover.

## Brief a Grok Bot like a coworker, not like a CLI flag

A Bot charter is a job, sources, output, and a boundary. A Build invocation is a repo, a skill, and a terminal. Mixing the formats is how you get a mail bot that thinks it has \`allowed-tools\` and a coding agent that thinks it has a Gmail plugin.

\`\`\`
Name: Repo Brief, Not a Merge
Job: Summarise an open pull request for a human reviewer

Read the pull request I name. List the riskiest files, the test gaps, and
the questions a reviewer should ask. Quote paths. Do not invent coverage.

Boundary: Never merge, never push, never comment on the pull request, never
change GitHub settings, never approve. Output stays in this chat.

If you lack access, say so. Do not open extra tabs to look helpful.
\`\`\`

That is a Grok Bot job adjacent to [PR Review Sentinel](/bots/pr-review-sentinel). The merge stays human. Build can be the thing that runs unit tests locally. They can coexist. They are not aliases.

## Watch the settings page for the sentence that fights the FAQ

Grok Bot's settings copy mentions a default model "when model selection is available," which sits next to the teams page saying there is no picker and no plan for one. Treat the no-picker statement as operative until the vendor resolves the inconsistency. Do not plan a rollout on the settings tease. Do not tell a finance team they can pin a cheap model on the bot.

Build's model story is the CLI's and the API's, which is a different product meeting.

## Price them as different bills

Grok Bot is bundled: Cursor Pro+ at $60 is the cheapest documented individual door, Teams Standard at $40 a seat, SuperGrok Plus at $100, no standalone SKU, weekly allowance then on-demand, no bot-specific spend cap. Grok Build's cost is whatever the CLI and the model metering are on the day you run it, plus the machine it sits on. grok-4.6 API pricing, when you use the API, is a token bill. Adding those three together as "what Grok costs" is how a spreadsheet lies.

[Grok Bot cost](/blog/grok-bot-cost) is only the teammate product. Do not file a Build invoice under that heading.

## Give engineers both tools without pretending they share a security model

A common shop: Build in the repo for coding, Grok Bot for inbox and CRM. That is coherent if you remember the Bot VM is shared across every bot on the account, including any "engineering" bot that signed into GitHub in a browser. A coding CLI on a developer laptop with a fine-grained token is a different grant. Do not point the Bot at production deploy keys because "Grok already has my Claude skills."

[Bots for engineers](/blog/bots-for-engineers) stays on review, triage, and standups with boundaries. It is not a Build tutorial.

## Answer the tweet with a table, not a thread

| Tweet | Object it actually describes | What to do |
|---|---|---|
| Grok reads CLAUDE.md with zero config | Grok Build | Keep it in the repo docs |
| My bots each have a computer | False for Grok Bot | One VM per account |
| Grok Bot is grok-4.6 | Unverifiable | Do not assert |
| Skills work in Grok Bot | Not in Bot docs | Use a charter, not SKILL.md |
| Open source Grok | Grok Build, 16 Jul 2026 | Not the Bot app |

Viral posts are a cluster we already treat as disputed until checked against docs. This naming collision is why.

## Verify you installed the thing you searched for

1. If there is a named bot, a plugin list, and an agent computer preview, you installed Grok Bot.
2. If there is a \`grok\` CLI and a skills directory, you installed Grok Build.
3. If there is a model dropdown in an API playground, you are looking at a model, not a bot.
4. If your Bot charter mentions SKILL.md frontmatter as if it will constrain tools, you mixed 2 into 1.

Fail any row and you are debugging the wrong product.

## Teach operators the three names in one sitting

Print the table. Make them point at the app they have open. If they cannot point, they cannot file a bug. Support load in this category is mostly naming. A ticket that says "Grok will not read my skill" is Build. A ticket that says "my other bot can see Gmail" is Bot. A ticket that says "pin 4.6" is a model request the Bot product refused.

| Operator sentence | Correct object | Wrong object they often mean |
|---|---|---|
| It signed into Notion | Grok Bot | Build |
| It used a SKILL.md in ~/.claude | Grok Build | Bot |
| I want grok-4.6 specifically | Model / API | Bot picker |
| It kept going after I shut the laptop | Grok Bot | Build on that laptop |
| It merged my pull request | Neither, if you wrote a boundary | Both, if you did not |

## Keep CI on Build, and keep mail off the Build laptop

A common failure is running Build with a GitHub token that can merge, then also signing that same human's Gmail into Grok Bot on a shared VM. Those grants do not cancel. They stack. The Bot VM is not your laptop. Your laptop is not the Bot VM. Draw the grants on paper. If a grant can send or merge, it does not belong on a trial, and it does not belong on a shared computer with a research bot.

## Document the open-source date so people stop calling Bot "open"

Grok Build went open source on 16 July 2026. Grok Bot did not. An "open Grok" install from GitHub is not the teammate app. Point intern onboarding at the right repo. Point operators at x.ai/bot. Mixing them is how a security review of the CLI gets applied to the cloud computer, or the reverse.

## Map a week of engineering work onto both tools without merging the briefs

Monday: Build runs tests in CI. Tuesday: a Grok Bot produces a review packet that does not comment on GitHub. Wednesday: a human merges. Thursday: Inbox Triage drafts, never sends. Friday: nobody asks Build to check Gmail. That week is coherent. A week where one "Grok" does all five is how SKILL.md folklore gets into a mail bot.

## Write onboarding that names the docs tree, not the Grok docs

New hires will search grok docs and land on a mix of model cards, Build, and Bot. Your internal page should have three links, labelled, with the job each solves. If you only paste one URL, they will apply it to the other two products by Friday. The cost is not confusion. The cost is a Bot with a production GitHub session because someone followed a Build quickstart that said connect GitHub.

A one-page internal cheat sheet beats another Slack thread:

| If you want to | Open | Do not open |
|---|---|---|
| Named teammate, plugins, cloud VM | docs.x.ai/grok-bot | Build skill guides |
| CLI in a repo, Claude Code files | docs.x.ai/build | Bot plugin settings |
| Token API, model names, cutoffs | docs.x.ai/developers | Either product FAQ as if it were an API |

Print that table in the engineering handbook. Update it when the vendor moves a page. Do not let a bookmark from July 2026 set policy in September.

## Treat zero config Claude compatibility as a Build sentence with a date

The compatibility claim is real for Build, dated to the Build docs you checked, and it comes with the SKILL.md fields that do nothing. Repeating it in a Bot runbook trains people to drop skill files onto a VM and believe tools are constrained. They are not, on Bot, and they are weakly constrained even on Build. If your security team asks whether SKILL.md enforces least privilege, the answer is no. Write that in the review, not in a footnote.

## Keep evals on the object you can name

If you are measuring coding agents, eval Build (or Claude Code, or Cursor) on a repo fixture. If you are measuring mail bots, eval Grok Bot on a fixture inbox that cannot send. Mixing the eval is how a coding benchmark gets quoted as proof that a Grok Bot is safe for Gmail. It is not proof. It is a category error with a nice chart.

Publish the fixture. A private eval that "felt good" will be retold as "Grok passed our coding bar, so we connected mail." The retelling is the incident. Keep the coding bar on Build. Keep the mail bar on a Bot that cannot send. If a vendor demo mixes them, pause the demo and ask which product is on screen. If the presenter cannot say Bot or Build in one word, end the meeting. You cannot risk-assess a blur.

The same split applies to incident response. A leaked SKILL.md is a repo problem. A leaked Gmail cookie on the Bot VM is an account-computer problem. Your runbook should not say "revoke Grok." It should say which object, which grant, which console. That extra noun is the entire value of this article.

If you only remember one practice: never let a Build-shaped file be the permission system for a Bot-shaped worker. Write the Bot boundary in the charter. Enforce send in the product approvals and in the human. Enforce merge the same way. Files that claim to restrict tools, and then do not, are how teams sleep.

The last operational habit is naming in standups. Say "the Grok Bot" or "Grok Build" or "the model." If someone says "Grok did it," ask which. That question is cheaper than a post-mortem. It also stops a finance person from thinking they bought open-source Bot, or a developer from thinking Bot will pin grok-4.6 because the API page listed it. Names are controls. Use them until they are boring. Repeat them in incident channels, in budget decks, and in the first line of every runbook. If a vendor slide says Grok once, annotate the slide with Bot, Build, or 4.6 before it leaves the room. That annotation is cheaper than a quarter of mixed grants. It is also how you stay honest when the homepage still brands everything as Grok.

It is also how you stay honest when the homepage still brands everything as Grok. Ask vendors, in writing, which object a slide refers to. If they will not say, you cannot put the slide in a security review. You can put this page in the review, with dates, and with the three-row table. That is enough to start. It is not enough to finish. Finishing is a grant list you re-read every month. Put the review on a calendar the same day you connect the first plugin. A monthly grant review is dull, which is the point. Dull reviews catch the GitHub app that was "only for a demo" and the Notion integration that outlived the intern. Exciting reviews happen after the leak. Schedule dull. Dull is the control. Excitement is the incident. Choose dull on purpose, in writing, with a date.

**Keep reading:** [What is a Grok Bot](/blog/what-is-a-grok-bot) defines the teammate, and [Claude Code compatibility](/blog/grok-bot-claude-code-skills-compatibility) is the Build page that people keep attaching to Bot.

## Frequently Asked Questions

### Is Grok Bot the same as Grok Build?

No. Grok Bot is the teammate app on a shared cloud computer, with plugins, routines, and mobile pause and resume. Grok Build is the grok coding CLI that reads Claude Code skill files and related local config. They share a company and a model family. They do not share a SKU, a computer, or a documentation tree. Install the one that matches the job. Do not expect Bot to honour SKILL.md fields.

### Does Grok Bot run grok-4.6?

Do not assert that. grok-4.6 is a real, documented model. Grok Bot uses a fixed serving set with automatic failover and no picker. Which model served a given Bot turn is not a public mapping on the SAFE list. Billing follows the serving model. If you need a named model, you are in API or Build territory, not in the Bot settings you wish existed.

### Can I reuse my Claude Code skills inside Grok Bot?

Not as a documented Bot feature. Claude Code compatibility is documented for Grok Build. The Bot docs do not mention SKILL.md, CLAUDE.md, or MCP config files. You can still write a Bot charter in prose, with a boundary, and paste a setup from this directory. That is a different interface. Treating a skill file as a Bot permission layer will not constrain tools on Bot, and even on Build \`allowed-tools\` does not grant or restrict.

### Should engineers skip Grok Bot and only use Grok Build?

Use Build for repo work on a machine you control. Use Grok Bot for standing jobs on the cloud computer, like review packets that must not merge, or mail that must not send. Many engineers want both. What you should skip is the idea that they isolate each other. A GitHub browser session on the Bot VM is shared with every other bot on the account. A local Build token is a local grant. Keep the grants straight.
`,
};

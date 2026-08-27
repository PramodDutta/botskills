# Contributing a bot

Every listing on botskills.sh is one file: `seed-bots/<slug>/BOT.md`. Add that
file, open a pull request, and the site picks it up on the next deploy.

You do not need to run the web app or touch the database to contribute.

## The one rule that matters

**Every bot declares a boundary.** The `boundary` field names the single action
the bot will never take without a human saying yes, in that moment, for that
specific action.

This is the whole reason the directory exists. Bots on Grok Bot share one
computer, one browser and one set of signed-in sessions across an account, so a
prompt you paste inherits every login you already have. A setup that does not
say where it stops is not finished.

Good boundaries name the action and the approval:

```
boundary: Never sends, forwards, or replies until you approve the exact text and the exact recipients.
boundary: Never merges, force pushes, or closes a pull request. It comments and waits.
boundary: Never spends, refunds, or changes a price. It drafts the change and stops.
```

Weak boundaries that will be sent back: "Asks before doing anything risky",
"Is careful with data", anything under 20 characters, anything that describes a
mood rather than an action.

## Quick start

```bash
git clone https://github.com/PramodDutta/botskills.git
cd botskills && pnpm install
pnpm --filter @botskills/shared build      # the validator imports the built parser

mkdir -p seed-bots/your-bot-slug
cp BOT-TEMPLATE.md seed-bots/your-bot-slug/BOT.md
# edit it, then:
node scripts/validate-bots.mjs
```

The validator checks every bot in the repo and exits non-zero on any failure.
Your pull request will not be merged until it passes.

## Frontmatter

```yaml
---
name: Agent Inbox
description: Runs work from a dedicated bot mailbox so your personal Gmail stays out of the session, and every send waits for you.
version: 1.0.0
author: your-github-handle
license: MIT
category: productivity
integrations: [agentmail]
runtimes: [grok-bot]
boundary: Never sends, forwards, or replies until you approve the exact text to the exact recipients.
tags: [email, agentmail, drafts, identity]
---
```

| Field | Rule |
| --- | --- |
| `name` | Title case, the display name on the site |
| `description` | One sentence, what it does and where it stops |
| `version` | Semver, start at `1.0.0` |
| `author` | Your GitHub handle, or `botskills.sh` for house bots |
| `license` | `MIT` |
| `category` | Exactly one of `productivity`, `sales`, `marketing`, `ops`, `success`, `personal` |
| `integrations` | At least one. Inline array. Lowercase slugs: `[gmail, slack]` |
| `runtimes` | At least one of `grok-bot`, `rakazo` |
| `boundary` | Required, at least 20 characters. See above |
| `tags` | Inline array, three to five lowercase words |

## Three traps that will fail your build

These are not style preferences. The parser and validator enforce them.

**1. The frontmatter is read by regex, not by a YAML library.**

Every value must sit on one line, and arrays must be inline. Block lists parse
as empty, and your bot seeds with no integrations and no tags.

```yaml
# breaks silently, parses as empty
integrations:
  - gmail
  - slack

# correct
integrations: [gmail, slack]
```

The same applies to a long description. Wrap it and everything after the first
line is lost.

**2. No em dashes and no en dashes, anywhere in the file.**

The validator rejects both characters outright. Use a comma, a period, a colon,
parentheses, or `->`. This includes ranges: write `3 to 5` in words, never the
dash form.

**3. The prompt must open with `You are `.**

The body after the frontmatter is the prompt, and it is addressed to the bot.
Start with `You are <Name>.` and write in the second person throughout.

## The prompt body

Minimum 120 words, and realistically a useful bot needs several hundred. The
body is the product: it is what people paste, so a thin one is worse than no
listing at all.

Structure that works:

1. `You are <Name>.` and one line on what job it owns.
2. What it must never do, restating the boundary in context.
3. Setup steps, if it needs a mailbox, a channel or a workspace file.
4. What it does on each run, numbered, in order.
5. When to stop and escalate to the human.

Write concrete instructions, not aspirations. "Summarize the thread in five
lines: who, ask, deadline, attachments, and whether money is involved" beats
"summarize helpfully".

If you adapted a prompt from somewhere, add a `## License and attribution`
section at the end. Everything from that heading down is split off the prompt
automatically, so the copy button stays paste-ready and the credit still shows
on the page.

## Slug rules

Lowercase kebab-case, and it must not already exist. Check both:

```bash
ls seed-bots/ | grep your-slug
curl -s -o /dev/null -w '%{http_code}\n' https://botskills.sh/bots/your-slug
```

A local hit or a live `200` means pick another slug.

## Pull requests

One bot per pull request. Keep the diff to your own `seed-bots/<slug>/`
directory. If you are changing something else as well, split it.

Before you open it:

- [ ] `node scripts/validate-bots.mjs` passes with zero failures
- [ ] Slug is free locally and returns 404 on the live site
- [ ] The boundary names a real action, not a disposition
- [ ] No em dash or en dash in the file
- [ ] You have actually run the prompt, and it did what the description claims

That last one is the only check a machine cannot do for us.

## Reporting a bot that misbehaves

Open an issue with the bot slug, what you asked it to do, and what it did
instead. A bot that crosses its own stated boundary is the most serious bug
this project can have, so those get looked at first.

# botskills.sh article writer spec

> The numbers below are the ones `scripts/gate.py` actually enforces. If you
> change the gate, change this file in the same commit. They drifted apart once
> and every article written to the stale spec was rejected.

Non-negotiable. Every bullet is a gate; a miss means the article is rejected.

## File shape

One file per article at `packages/web/src/app/blog/posts/<slug>.ts`:

```ts
import type { BlogPost } from './index';

export const post: BlogPost = {
  title: '...',
  description: '...',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# <title, verbatim>
...markdown...
`,
};
```

Do NOT touch `index.ts`. Registration is handled centrally. Write only your own files.

## Hard gates

- `content` is a template literal. Any backtick inside it MUST be escaped as \` (code fences become \`\`\`). Any `${` MUST be escaped as \${. Getting this wrong breaks the build for everyone.
- ZERO em dashes anywhere in the file. Use a comma, period, colon, parentheses, or "->". Grep your own file before finishing.
- >= 3000 words of body content. (gate.py enforces 3000; this line said 1400 until 2026-08-28 and produced rejected drafts.)
- H1 on the first line, exactly equal to `title`.
- 13 or more `##` sections.
- >= 4 markdown tables with header separator rows.
- >= 1 fenced code block showing a real, pasteable bot charter or config, for any technical topic.
- Ends with a `## Frequently Asked Questions` section containing exactly 4 `###` questions, each answered in 60-110 words of prose (no lists inside answers). These are the AI-citation surface, so each answer must stand alone without the surrounding article.
- `description`: 140-170 characters, contains the target keyword, reads like a promise not a summary.
- `category`: one of Guide, Reference, Tutorial, Comparison, Safety, Playbook, Migration, Announcement. Adding a new one means adding it to the ORDER array in `packages/web/src/app/blog/page.tsx`, or it sorts to the bottom of the index.
- `date`: '2026-08-25'.

## Internal links

- 2 or more links to `/bots/<slug>` using real slugs from the catalog list you were given. Never invent a bot slug.
- 1 or more links to another article in this batch or an existing one: `/blog/one-person-company-grok-bot` and `/blog/introducing-botskills` always exist.
- Link with descriptive anchor text, never "click here".

## Voice

- Write for someone who will paste a setup into a bot runtime this afternoon and needs it to not embarrass them.
- Concrete over abstract. Real numbers, real tool names, real failure modes.
- No filler intro ("In today's fast-paced world"). First sentence states the actual problem.
- No hype about AI generally. The reader already believes; they want the working setup.
- Second person. Short paragraphs. No bold-word soup.

## The differentiator, in every article

botskills.sh requires every listing to declare a `boundary`: the one action the bot never takes without a human. Where the topic allows, the boundary belongs in the article: state what the bot must not do, and why that line is what makes it safe to leave running. Do not bolt this on as a closing paragraph in every piece; work it into the argument where it genuinely belongs.

## Never

- Never reproduce text from a source post, article, or competitor. Cite a trend, write your own words.
- Never claim a feature exists in Grok Bot or Rakazo that you have not confirmed. Hedge with "as of writing" when unsure, or leave it out.
- Never fabricate copy counts, user numbers, or benchmarks.

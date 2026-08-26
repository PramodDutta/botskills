# Pillar spec

A pillar is not a longer article. It is the hub that gives a cluster somewhere to
point, and its job is to rank for a head term the individual articles are too
specific to win.

## What makes it a pillar

- **4,000 to 6,000 body words**, code excluded. Longer than an article because it
  covers a whole territory, not one question.
- **18 or more H2 sections.** Each is a sub-topic that an existing article covers
  in depth, summarised here in 150 to 350 words and then linked.
- **15 or more internal links to existing articles**, and every one must resolve.
  This is the point of the format: the pillar passes authority down and the
  cluster passes relevance up.
- **6 or more tables.** A pillar is scanned before it is read.
- **A table of contents** as the second element, after the opening, linking to
  each H2 anchor.
- Exactly 4 FAQ questions as the last H2, as every article has.

## What it must not be

- Not a link dump. Every section says something useful on its own, and the link
  is where a reader goes for depth, not for the answer.
- Not a summary of summaries. Take positions. The pillar is where the site's view
  on a whole territory is stated plainly.
- Not padded to hit a number. If a territory supports 4,200 honest words, stop
  there and say so in the report.

## The linking contract

Before writing, list every existing article in the cluster by reading the slugs
in `packages/web/src/app/blog/posts/`. Link each one at the point in the pillar
where its topic is discussed, with descriptive anchor text naming what the reader
will find. Never "read more".

Every product claim comes from `docs/seo/VERIFIED-FACTS-2026-08-25.md`. Nothing
from its DO NOT ASSERT list, ever, and no new third-party fact without verifying
it yourself and citing it inline.

All other rules from WRITER-SPEC.md and LONGFORM-SPEC.md still apply: declarative
verb-led headings, zero em dashes, description 140 to 170 characters, two or more
links to real catalogue bots, a "Keep reading" line before the FAQ.

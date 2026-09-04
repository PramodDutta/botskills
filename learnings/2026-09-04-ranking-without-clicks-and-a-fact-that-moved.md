# Ranking without clicks, and a fact that moved under the site

## The problem

Ten days after launch, Search Console showed 8.5K impressions at average
position 7 with a 0.7% click rate, 150 pages "discovered, not indexed", and
13 copies across a 118-bot catalogue. The ask was "ideas to get traffic and
usage", then "do 1, 2, 4, 5 and 8".

## The approach

1. **Read the console before proposing anything.** The query and page tables
   said the audience arrives with a status or setup problem ("grok bot
   android", "grok bot not working", "grok bot stripe"), not looking for a
   directory. Ideas that ignore that are generic.
2. **Verify the top page against the source before polishing its title.** The
   site's third most seen page said Grok Bot had no Android app. The docs,
   fetched that day, listed Android 9+ on Google Play and a Linux desktop
   app. A title rewrite on a wrong page is a louder wrong page.
3. **Fix the fact in every place it is asserted, in order of blast radius:**
   the page itself (full rewrite), the fact-check lead magnet, the verified
   facts file (dated correction section that supersedes, never edits, the old
   section), the sweep script (inverted so the stale claim is what flags),
   then dated callouts on the four other pages that argue the old thesis.
   Count the rest (about 90 articles) and report it as a job, not a footnote.
4. **Derive, do not type.** Related links from shared vocabulary and
   category; integration hubs from the `integrations` field bots already
   carry; homepage counts from the registry. Anything typed by hand rotted
   within a week here, twice.
5. **Gate by the gate.** Every touched article through `gate.py` (H1 must
   equal title, description 140 to 170), then dupecheck, slop, tsc, e2e
   locally, build, deploy from a clean worktree, e2e against production with
   write tests skipped, then push.

## The judgment calls

- **Did not sweep the ~90 boilerplate articles.** The approved scope was
  five items; a corpus-wide rewrite is a separate job with its own review.
  The dated correction on the pages that are *about* the fact, plus the
  facts file, keeps the site honest meanwhile.
- **Did not bump dates on the callout pages.** Only the fully rewritten
  Android page got today's date. A callout is a correction, not a rewrite,
  and the schema has no separate modified date to carry it.
- **Did not put "checked September 2026" into any title without fetching the
  docs first.** A date in a title is a claim that somebody looked.
- **Did not rank the start-here row by copies.** With 13 copies total the
  numbers are noise; six curated picks are honest about that.
- **Left the `why-grok-bot-has-no-linux-app` slug in place** with a
  corrected title and callout rather than redirecting. A redirect is a
  routing change worth its own decision.

## The reusable rule

Before rewriting a page for clicks, re-fetch the primary source it cites.
Search Console tells you which pages matter; only the source tells you
whether they are still true, and on a beta product the answer changes in
days. When a fact moves, correct it where it is defined first, then where it
is repeated, and record the date of the check next to the new claim.

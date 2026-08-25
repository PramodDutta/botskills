# Long-form expansion spec

Every article on botskills.sh is being brought to the depth the qaskills.sh
corpus proved works: 3000 to 4000 words, 13 to 15 sections, 4 or more tables.
Those articles rank; ours are half that length. This spec is how a 2500-word
article becomes a 3500-word one WITHOUT becoming padded.

## The bar

| Element | Current typical | Target |
|---|---|---|
| Body words, code excluded | 2500 | 3000-4000 |
| H2 sections | 9 | 13-15, plus the FAQ |
| Tables | 1 | 4 or more |
| FAQ questions | 4 | 4 (unchanged) |

## Section headings are declarative, not nominal

The qaskills pattern that works: each H2 is a full statement that takes a
position, usually verb-led. It reads like advice, and it lets the section be
about one argument instead of one topic.

Weak (nominal):     "## Permissions"
Weak (question):    "## What about permissions?"
Strong:             "## Grant read before you grant write, every time"
Strong:             "## Start with the capability boundary, not the packaging format"
Strong:             "## Challenge destructive and externally visible operations"

Rewrite existing nominal headings to this pattern while you expand. It is half
the reason those articles read as authoritative.

## What to ADD (in rough priority order)

1. **A decision table.** Almost every article has an implicit decision the reader
   is making. Make it explicit: options down the side, criteria across the top,
   and a recommendation column that actually recommends.
2. **A failure table.** Symptom, cause, fix. Specific to this article's subject,
   not generic.
3. **A worked example end to end.** One concrete scenario followed all the way
   through, with the actual charter, the actual output shape, and what the reader
   sees on day one versus day thirty.
4. **The objection section.** State the strongest argument against the article's
   position and answer it honestly. If you cannot answer it, say which cases it
   wins in. This is the single biggest quality difference between a page that
   gets cited and one that does not.
5. **A "how you verify this worked" section** with a check that could fail.
6. **The adjacent case the reader will hit next**, with a link to the article
   that covers it.
7. **Where this breaks down.** Every recommendation has a domain. Name its edge.

## What NOT to add

- Restating the introduction as a conclusion.
- A "conclusion" or "final thoughts" section at all. The FAQ is the last H2.
- Definitions of terms the reader already knows by the time they search this.
- Longer versions of sentences that were already complete.
- Lists of adjectives. Every list item carries a specific noun, number, or name.
- A second table that says the same thing as the first in different words.
- Any claim not on the SAFE list in VERIFIED-FACTS-2026-08-25.md.

If a section cannot be made specific, cut it rather than padding it. A tight
3100-word article beats a bloated 3800-word one, and both beat the 2500 we have.

## Preserved on every edit

- H1 must still equal `title` exactly.
- Zero em dashes.
- Description stays 140-170 characters.
- Exactly 4 FAQ questions, each answered in 60-110 words of list-free prose.
- Every /bots/<slug> link must still be a real slug from the catalog.
- Every /blog/<slug> link must still resolve to a real post.
- The "Keep reading" line, if present, stays immediately before the FAQ.
- No H2 may collide with an H2 anywhere else in the corpus. Check with
  `python3 /tmp/checkh2.py <slug>` after editing.
- Template literal safety: backticks escaped as \`\`\`, no unescaped ${.

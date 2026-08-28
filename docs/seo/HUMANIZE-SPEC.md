# Humanization spec

Supplements WRITER-SPEC. That spec makes an article structurally valid. This one
makes it read like a person wrote it after doing the thing. An article can pass
every gate in WRITER-SPEC and still read like filler; this is the difference.

Derived from the articles in the corpus that read best, not from theory.

## Headings carry the instruction

Every `##` is a declarative sentence with a verb, naming a specific action and
often the thing you must not do. The reader who skims only the headings should
come away with the procedure.

Good, from the published corpus:

- "Point the first Connect click at a dedicated alias, never at hello@"
- "Read each consent line as an intent (read, draft, or send) and stop if send is bundled"
- "Refuse to invent a Grok Bot Enterprise SKU, a form, or a ship date"
- "Treat attorney-client privilege as a sibling-bot problem on one computer"

Rejected: "Getting Started", "Best Practices", "Understanding Permissions",
"Why This Matters", "Key Takeaways". A noun phrase teaches nothing.

## One named person, one specific failure

Walk a single concrete scenario end to end rather than describing a category of
problem. The corpus uses a named operator and a dated, specific breakage:
"Walk Rafi from the clerk alias to a human Send", "Trace Tuesday's empty
competitor brief back to Monday's CSS class name".

Use invented first names only. Never a real person, company customer, or a
recognisable account.

## Numbers instead of adjectives

"Plant eight messages on the alias and score the labels after one run" beats
"test thoroughly". "Max 50 routines per Bot" beats "there are limits". Every
number must trace to VERIFIED-FACTS or be an arbitrary choice the article
declares as arbitrary.

## Name the counter-argument and answer it

Each article carries at least one section answering the reader who disagrees:
"Answer the partner who says named bots already isolate the roster", "Answer the
quota argument that never-send cannot compete". State the objection at its
strongest, then answer it.

## Say what the page does not cover

Near the end, state when this page stops applying and link where to go instead.
This is what stops 51 articles reading as one article rewritten 51 times.

## Banned

- Everything in scripts/slop.py (29 phrases: delve, seamless, robust, in today's,
  it's important to note, and the rest). Run it before finishing.
- Em dashes and en dashes.
- Opening with a definition of a term the searcher already knows. They typed the
  term; start at their problem.
- Concluding paragraphs that summarise what was just said.
- Hedged filler: "it depends", "there are many factors", "your mileage may vary",
  unless followed immediately by the specific thing it depends on.

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot and Notion: Setups, Permissions, and What to Automate First',
  description:
    'A Grok Bot Notion setup that respects your schema: page versus database operations, the sharing model that caps blast radius, and why Notion is the best bot memory.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Grok Bot and Notion: Setups, Permissions, and What to Automate First

Ask a bot to "tidy up the project tracker" in Notion and you will get one of
two outcomes. Either it appends a few blocks to a page, which is harmless, or
it decides that tidying means renaming a property, converting a select to a
multi-select, and dropping the two columns nobody had filled in. The second
outcome rewrites every row in the database, breaks the views and rollups built
on top of it, and cannot be undone by pressing the back arrow.

Both outcomes came from the same sentence. The difference is that one of them
touched a page and the other touched a schema, and Notion presents those as
the same kind of object.

Notion was in the first wave of Grok connectors as of writing, and it is
worth setting up carefully rather than quickly, because Notion is also the
best long-term memory a bot can have. Confirm the exact capabilities in the
consent screen when you connect. The structural facts below are the ones that
determine whether your setup is safe.

## Notion breaks bots because it is a database wearing a document

Everything in Notion looks like a page. You click a row in a tracker and a
page opens. You click a doc in the sidebar and a page opens. The interface is
deliberately uniform, and that uniformity is exactly what a bot cannot see
through.

Underneath, there are three different objects with three very different
consequences:

- **Blocks** are the content inside a page: paragraphs, headings, toggles,
  callouts, embedded tables. Adding one is additive and reversible.
- **Pages** are containers of blocks. A page can also be a row in a database,
  in which case it has typed properties as well.
- **Databases** are collections of pages with a shared schema: named
  properties, each with a type, and for select types a fixed list of options.

A bot that appends a block is writing a sentence. A bot that edits a database
schema is running a migration on a production table that eleven people have
built views against. Notion will not warn it about the difference, so your
charter has to.

## Pages, blocks, and databases are three different operations

Here is the same instruction, "add this week's research", applied at each
level, with what actually happens.

Appending blocks to a page adds content at the end. Page history keeps
previous versions, so recovery is a few clicks. This is the operation you want
a bot doing constantly.

Creating a page inside a database adds a row and fills its properties. The
risk is not the row, it is the property values, which is a subtlety worth
knowing: writing an option that does not exist into a select property will
generally create that option rather than reject it. Ask for "Priority: Urgent"
in a database whose options are High, Medium, and Low, and you now have four
options, your filtered views silently miss rows, and nobody notices for a
month. Type coercion has the same shape: a date written into a text property
is accepted, and the rollup that depended on it stops working.

Editing the database schema is the destructive one. Renaming a property
updates every reference the UI can find and breaks the ones it cannot,
including any external integration keyed on the name. Changing a property type
converts existing values and discards what cannot be converted. Deleting a
select option strips it from every row that had it. None of these are a single
undo.

The rule that follows is simple and should be in every Notion charter:
**the bot may add rows and append blocks. It may never change the schema.**

## Sharing is the real permission, not the capability list

This is where Notion is genuinely better than the other integrations in this
series, and where most people leave the advantage on the table.

Notion has two independent layers. The first is the capability list on the
integration itself: read content, update content, insert content, read and
insert comments, and read user information (sometimes with email addresses,
sometimes without). The second layer is page-level sharing. An integration
with full update capability can still reach absolutely nothing until a human
explicitly shares a page with it, and sharing a page includes everything
nested underneath it.

Contrast that with a mailbox, where read access means the entire mailbox by
definition. In Notion, the surface is opt-in, per subtree, and revocable in
one click from the page that granted it.

| Capability or control | What it grants | Worst realistic outcome |
|---|---|---|
| Read content | Read pages, blocks, and database rows in shared areas. | Whatever is in the shared subtree, including anything a colleague nested under it later, becomes bot input. |
| Insert content | Create new pages and append new blocks. | Clutter: dozens of stray pages and duplicated rows you have to clean up by hand. |
| Update content | Edit existing blocks, page properties, and database schema. | A rewritten schema, overwritten human-authored text, or archived pages. This is the capability that carries real damage. |
| Read comments | Read discussion threads on pages. | Candid review comments end up summarized somewhere with a different audience. |
| Insert comments | Post comments on pages. | Notifications to colleagues from a bot they did not know existed. |
| Read user information | List workspace members, sometimes with email. | A clean export of your organization chart. |
| Page sharing (the real gate) | Determines which subtrees any of the above applies to. | Sharing a top-level page grants everything under it, including pages added later. |

The setup that follows from this takes about two minutes and caps the damage
permanently:

1. Create one page called something like "Bot Workspace".
2. Put everything the bot writes underneath it: its memory database, its
   digests, its drafts.
3. Share that page, and only that page, with the integration.
4. For anything the bot must read but never touch, keep it in a separate
   subtree and grant read-only, or paste the relevant content in rather than
   sharing the parent.

Then check the sharing list monthly, because the leak here is not a permission
change, it is somebody nesting a sensitive page under a shared parent and
inheriting access without noticing.

## Why Notion is the best long-term memory of the five tools

If you run several bots, one of them should own a persistent memory, and
Notion is the strongest place to put it. Compare honestly against the
alternatives.

| Store | Structure | Queryable | Human-editable | Recoverable |
|---|---|---|---|---|
| Notion database | Typed properties, one row per fact | By property, filter, and view | Yes, in the normal UI | Page history and trash |
| Email | Prose in threads | Full-text search only | Awkward | Yes |
| Slack | Chronological messages | Search, but scrollback decays | No, messages are not records | Retention dependent |
| Code repository | Files and commits | Excellent for code, poor for facts | Requires a pull request | Excellent |
| Calendar | Time-shaped only | By date range | Yes | Limited |

Notion wins on the combination that matters for memory: a bot can write a
structured row, a human can correct it in five seconds without touching a
tool, and the permission boundary is per subtree. A memory a human will not
correct rots within a month, which is why human-editability is not a nice
extra, it is the load-bearing property.

A memory database that works has five columns and no more: Fact, Category,
Source (a link or a page reference), Date Learned, and Confidence. The Source
column is the one that keeps the whole thing honest, because an unsourced
fact in a bot's memory becomes a confidently repeated wrong answer three
months later, and you will have no way to trace where it came from.

One thing must never go in there. The catalog's
[persistent bot memory](/bots/persistent-bot-memory) declares the boundary
plainly: it never stores secrets, tokens, passwords, or customer data. That
line exists because a memory store is the one component every bot reads,
which makes it the highest-value target and the worst possible place for a
credential. Memory holds durable facts about how you work, not the keys to
anything.

## Schema awareness: teach the bot your properties before it writes

Most bad Notion writes come from a bot guessing at your schema. The fix is a
short first-run step that costs you five minutes once.

Before the bot writes anything, have it read the database and echo the schema
back to you: every property name, its exact type, and for select and
multi-select the complete list of existing options. Read that echo. It is the
cheapest possible test of whether the bot is looking at the database you think
it is, and it usually surfaces one property whose name in the UI differs from
its name in the data.

Then paste the confirmed schema into the charter as a closed list, and forbid
anything outside it:

\`\`\`text
You are my Notion Knowledge Bot for the "Bot Workspace" page.

// WHAT YOU OWN
Every weekday at 18:00, write what I learned today into the
"Memory" database at [link]. One row per durable fact.
Use ONLY these properties, with these exact types and values:
  Fact        (title, one sentence, under 25 words)
  Category    (select) one of: product, customer, process, tooling, person
  Source      (url or Notion page link, REQUIRED, never blank)
  Date        (date, ISO format)
  Confidence  (select) one of: confirmed, probable, unverified
Also append a dated summary block to today's page under "Daily Log".

// WHAT GOOD LOOKS LIKE
A fact is durable: true next month, not just today. No status updates.
Before writing a row, check for an existing row on the same subject.
If one exists and is still correct, do nothing. If it is now wrong,
create a new row marked "supersedes: [link]" and tell me. Do not edit
the old row.
If a value does not fit the allowed options above, use "unverified"
and flag it to me in your summary.

// WHERE YOU STOP
Never change the database schema. Never add, rename, retype, or delete
a property. Never add a new option to a select property.
Never edit or delete a block a human wrote. Append only.
Never archive or delete a page.
Never store secrets, API keys, passwords, or customer personal data.
Never touch anything outside the "Bot Workspace" page tree.
\`\`\`

The "create a new row that supersedes the old one" rule is worth keeping even
though it produces more rows. Append-only memory means the history of what the
bot believed is visible, which is the only practical way to debug a bot that
started answering something wrong.

## The restructuring accident and how to make it impossible

The single worst Notion bot outcome is a reorganized database, and it usually
arrives through a request that sounds like maintenance: clean this up,
consolidate these, make the tracker consistent. Each of those is an
instruction to change structure, and a bot with update capability will comply.

Four defenses, in descending order of reliability:

1. **Do not grant update capability at all** if the bot's job is to add rows
   and append blocks. Insert and read cover more work than people expect, and
   they carry no destructive path.
2. **Constrain sharing** so the only databases in reach are ones the bot
   created. A schema it owns is a schema nobody else depends on.
3. **Enumerate properties in the charter** as a closed list, so a write
   outside the list is a defined violation rather than an improvisation.
4. **Keep a duplicate of any important database** before the first run. Notion
   duplicates a database in one click, and a copy is a better restore path
   than reconstructing from page history row by row.

Notion's recovery story is decent, not perfect: archived pages sit in trash
for a period and can be restored, and page content has version history. Schema
changes are the gap. Neither of those recovery paths is something you want to
run weekly, so the point of the four defenses is that you never need them.

This is why the [marketing calendar sync](/bots/marketing-calendar-sync) bot
declares that it touches only your local calendar and never edits the shared
Notion source. When Notion is the source of truth for a team, the correct
direction of travel is out of Notion, not into it. The
[content planner manager](/bots/content-planner-manager) applies the same
restraint from the other side, keeping every draft and edit waiting for your
review, and the [bot advisor](/bots/bot-advisor) never deletes or rewrites
another bot without your say-so.

## A knowledge-base charter you can paste

If you want one Notion bot rather than several, make it the librarian. It has
the best ratio of value to risk of anything on this list, because its entire
job is additive.

Give it three responsibilities. First, capture: turn your scattered notes,
meeting takeaways, and decisions into rows in the memory database with
sources. Second, retrieve: when you ask a question, search the shared subtree
and answer with links to the pages it used, never from its own recollection.
Third, report gaps: once a week, list the subjects where it found conflicting
rows or no source at all, which is a direct readout of where your
documentation is failing.

That third responsibility is the one people skip and the one that compounds.
A knowledge base with unknown gaps is worse than no knowledge base, because
you trust it. A knowledge base that tells you every Friday which of its facts
are unsourced is a genuinely different tool.

For how this bot fits alongside the rest of a small operation, and why the
stop line belongs in the charter rather than in your memory, see the
[one-person company guide](/blog/one-person-company-grok-bot).

## Frequently Asked Questions

### What permissions does a Grok Bot Notion setup actually need?

Less than you would think, because Notion has two separate gates. The
capability list on the integration (read, insert, update, comments, user info)
decides what kind of action is possible, and page-level sharing decides where
it applies. An integration reaches nothing until a human shares a page with
it, and sharing includes everything nested underneath. For a bot that captures
notes and answers questions, read plus insert is usually sufficient. Withhold
update capability, since that is what allows editing existing content and
changing database schemas, and confirm the exact list in the consent screen.

### Why is changing a Notion database schema so dangerous for a bot?

Because a schema change rewrites every row at once and has no single undo.
Renaming a property breaks any external integration keyed on the old name,
changing a property type converts existing values and discards what will not
convert, and deleting a select option strips it from every row that had it.
Page content has version history and archived pages sit in trash, but
structural changes fall through both of those safety nets. Restrict the bot to
adding rows and appending blocks, and enumerate the exact properties and
allowed values it may write in its charter.

### Is Notion a good place to store a bot's long-term memory?

It is the best of the common options, for a specific reason: a bot writes
structured rows with typed properties, and a human can correct any of them in
five seconds in the normal interface. Memory a human will not maintain decays
within weeks, so editability matters more than storage cleverness. Notion also
scopes access per page subtree, so the memory can live somewhere the bot
reaches and nothing else does. Keep it to about five columns, require a source
link on every row, and never store credentials or customer personal data
there.

### How do I stop a bot from creating stray select options in Notion?

Write the allowed values into the charter as a closed list and give it an
explicit fallback. Notion will generally create a new option rather than
reject an unexpected one, so a bot asked for a priority of "Urgent" in a
database offering High, Medium, and Low quietly expands your taxonomy, and
filtered views start missing rows without any error. The fix is to state each
select property's exact options, instruct the bot to use a designated
fallback value when nothing fits, and require it to flag those cases in its
next summary so you can decide whether the option should exist.
`,
};

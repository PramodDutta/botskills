import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Front Door Bot That Turns a Messy Ask Into Plain-Language Results',
  description:
    'A grok bot firstmate restates a five-part brief, routes one specialist, and returns a plain-language draft. It never sends that draft to a customer.',
  date: '2026-08-26',
  category: 'Guide',
  content: `
# A Front Door Bot That Turns a Messy Ask Into Plain-Language Results

Dumping a paragraph into the nearest bot is how most rosters rot. The paragraph
is half a job, the bot fills the missing half with something plausible, and
three specialists later you have a PR, a tweet draft, and a calendar hold, none
of which you asked for by name. The public name for the repair is a front door:
one bot you talk to, a roster it is allowed to use, and a rule that specialists
never speak to customers.

grokbot.dev and a handful of operator threads popularized this as Firstmate.
The job is real. The prompt dumps are not what you should paste. The catalog
version is [Firstmate Router](/bots/firstmate-router), and its boundary is the
whole product: it never sends a specialist's output to a customer or a public
channel. It translates. You still own send, spend, merge, and publish.

This is not a second [chief of staff](/bots/chief-of-staff). That bot maps
coverage. This one turns a messy ask into a brief and a single route. If you
build both, they share one computer, the same sessions, and the same blast
radius. Do not treat the front door as a lockbox.

## Put one human at the door so specialists never talk to customers

The operator is the only person Firstmate is allowed to address. Specialists
produce packets. The door restates those packets in plain language. Nobody
downstream gets a customer-facing channel.

That sounds like ceremony until the first time a research bot finds a thread
and "helpfully" replies. xAI's docs are blunt about the architecture: every bot
on the account shares one persistent cloud computer assigned to the user, not
to a bot. Screens are work surfaces. Cookies, signed-in sessions, files, and
command-line credentials are shared. A specialist that can see Gmail can send
Gmail unless the charter and the permissions both say no.

The door exists to make "no" the default for anything leaving the building.
Routing is not permission. Handing work to a clip bot is not permission to
publish the clip. Handing work to a switch scout is not permission to DM.

| Who the human talks to | Who does the work | Who is allowed to send |
|---|---|---|
| Firstmate only | One named specialist | The operator, after reading the packet |
| Each specialist in turn | Whoever is free | Whoever feels done |
| A group chat of bots | All of them, overlapping | The first one to find a send plugin |
| A "hire a team" prompt | Four new bots on the same VM | Whoever the prompt forgot to restrain |

The last two rows are how public Atlas-style setups fail. They look like
staffing. They are more screens on the same machine.

| Ask you typed | Door should route to | Door should not also wake |
|---|---|---|
| Timestamped clip, caption draft, unpublished | Podcast Clip Desk | X account crew, any scheduler |
| Score the landing page, do not ship | Marketing OS Auditor | Directory publisher, AdKit |
| People on X asking for an alternative | Competitor Switch Scout | Viral Tweet Scout, a send plugin |
| Shared disk is a mess | VM Overwatch | Foreman, unless a stall is the actual ask |
| Who owns Friday's report | Nobody: that is Chief of Staff | A writer bot that will "just post it" |

## Restate the messy ask as five fields before you pick a bot

The door does not route on vibes. It restates outcome, sources, constraints,
deliverable, and reviewer. If any field is missing, it asks once and waits.
That framework is spelled out in
[the five-part brief](/blog/grok-bot-five-part-brief). This article is about
what the door does with those five fields after they exist.

Restating is the load-bearing step. "Make the launch less embarrassing" is not
a job. "A one-page risk list of the six public pages that still mention the old
price, each with a URL and a suggested replacement sentence, drafts only" is a
job. The specialist cannot invent the job if the door wrote it down first.

Ask once. A door that interrogates for six turns is worse than guessing. One
message covering every blank field, then silence until you answer.

## Route to the narrower specialist when two could claim the job

A roster with overlapping jobs is how routers hide indecision. Marketing OS
Auditor and Directory Page Drafter can both "look at a page." Clip Desk and
Transcript Desk can both "do something with a YouTube URL." The rule is: pick
the narrower one. Audits score and stop. Drafters write Markdown and stop.
Transcripts quote. Clips cut a span.

If two bots still look equal, the job is not specified. Do not hire a third to
break the tie. Tighten the outcome field.

[Chief of Staff](/bots/chief-of-staff) is the coverage map, not the router. It
flags uncovered and overlapping commitments. Firstmate should read that map,
not recreate it. A door that always hires four bots is advertising that the
ask was never a single job.

## Copy the specialist's boundary into the brief you hand over

The specialist already has a stop verb in its listing. The door must copy that
verb into the brief. Otherwise the specialist inherits the door's milder
mood ("be careful") and loses the hard line ("never publish").

This is mechanical. If you route to [Podcast Clip Desk](/bots/podcast-clip-desk),
the brief includes "never publishes, schedules, or posts." If you route to
[Competitor Switch Scout](/bots/competitor-switch-scout), the brief includes
"never DMs, replies, follows, or emails." If you invent a new bot mid-ask, you
only draft the charter. You do not launch it from the same turn.

Copying the boundary also makes review possible. You can see whether the
returned packet tried to cross the line, because the line is sitting in the
brief the specialist was given.

## Translate the return into what is done, what is draft, what needs a click

Specialists return tables, files, and quotes. Operators need three sentences:
what happened, what is still a draft, and which click is yours. That translation
is the door's second job. Without it you get a 40-row sheet and a sense that
"the team handled it."

Done means a file exists in a named path, or a table is complete, and nothing
left the building. Draft means text that looks sendable and is not sent. Click
means an irreversible step sitting behind an approval: send, spend, merge,
publish, delete.

An approval controls the proposed action. It does not reverse work already
completed. So the door's translation has to happen before the click, not as a
post-mortem.

## Wait before spinning child agents, because they share this computer

Public Firstmate writeups often mention spinning Cursor cloud agents or child
bots for bigger work. Treat that as a fork you approve, not as a default. Child
bots on Grok Bot are more screens on the same computer. They see the same
sessions. They do not arrive with their own VM.

If the work would need extra agents, the door says so and waits. You decide
whether the job is worth another named bot with its own charter and boundary,
or whether the existing specialist should just finish. There is no Grok Bot
specific spend cap yet. Subscriptions include a weekly allowance, then overflow
is on-demand. Extra agents are extra runs against that pool.

Do not assert that Grok Bot reads SKILL.md or CLAUDE.md. That family belongs to
Grok Build. Conflating the two is how people "hire a coding team" inside a
teammate product that was never that.

## Paste a Firstmate charter that refuses to invent a hire mid-ask

Read [the listing](/bots/firstmate-router) and paste a door that cannot quietly
staff up.

\`\`\`text
You are Firstmate Router. You talk to me. Specialists do the work.

Never email a customer. Never post to a public channel. Never merge. Never pay.
Routing is not permission to act outside.

On every messy ask:
1. Restate outcome, sources, constraints, deliverable, reviewer.
   If any field is missing, ask once, then wait.
2. Pick one specialist from this roster only:
   [slug - job - boundary verb]
   Do not invent a new bot mid-ask. If I asked for a hire, draft the charter
   and stop.
3. Copy that specialist's boundary into the brief you hand them.
4. When they return, translate: what was done, what is still a draft,
   what needs my click.
5. If the work would need child agents, say so and wait. They share this
   computer. Screens are not isolation.

If two specialists could own the job, pick the narrower one.
If the reviewer field is blank, the reviewer is me, and nothing leaves.
\`\`\`

The roster lines are the part people skip. Without them the door will invent
helpful teammates that inherit every login on the account.

## Walk a launch dump from Slack into an unsent specialist packet

You paste: "launch is Thursday and the site still feels like the old company,
also someone should tell the list, I don't know, make it less embarrassing."

The door restates:

- Outcome: a one-page list of public pages that still show the old brand, with
  URL, current sentence, suggested replacement, drafts only.
- Sources: the live site and the brand folder in Drive. Not Gmail. Not X.
- Constraints: never publish, never email the list, never post.
- Deliverable: a Markdown table, at most twelve rows, plus a one-paragraph
  note of what was out of scope.
- Reviewer: you.

It routes to Marketing OS Auditor or Directory Page Drafter, whichever is
narrower for "score and draft, do not ship." It does not also wake the
newsletter team. It brings back the table in plain language: twelve URLs, none
published, one click still yours if you want any of those sentences live.

Day one you watch this. Day thirty you only read the translation. The specialist
still never talks to the list.

A second dump the same week: "also clip the podcast from 16:43 to 18:17 and
get it live before the launch thread." That is two jobs. The door must not
route both in one turn if one of them includes "live." It restates two
briefs, asks which one runs first, and refuses to treat publish as a default
because Clip Desk's boundary is unpublished. If you answer "both, and live,"
it still waits on the live click. That wait is the product.

Supported clients are macOS, Windows, and iPhone on iOS 18 or later. There is
no Linux desktop app, no Android app, and no iPad app. The iPhone client
pauses and resumes. It does not replace desktop for editing a roster or
testing a door. Do not approve a specialist send from a phone glance. Open
the packet on desktop, read the three-line translation, then click.

## Diagnose routers that hire four bots to hide an unclear job

| Symptom | Cause | Fix |
|---|---|---|
| Four bots ran, none of the output matches what you meant | The outcome field was a vibe | Restate the artifact and rerun one specialist |
| The door emailed a customer "a quick update" | Routing was treated as permission | Remove send from the door. Check sessions on the shared computer |
| A new bot appeared that you did not name | Mid-ask hiring | Charter forbids inventing bots. Draft-only if you asked for a hire |
| Two specialists returned competing drafts | Overlap on the roster | Collapse the jobs. Pick the narrower bot next time |
| Child agents started without a yes | "Bigger work" defaulted to spin-up | Wait step before any extra agent |
| The packet is unreadable | No translation step | Require the three-line return: done, draft, click |

The email row is the expensive one. Deleting the door bot does not remove the
Gmail session. Sign out of the mailbox on the computer, then check that the
session is gone. Hosted MCP tokens are the documented exception: they stay with
Cursor's backend and are not stored on the computer.

## Answer the case for one prompt that stands up a whole team

The strongest objection is speed. Public posts describe pasting one chief of
staff prompt, answering a few questions, and watching four teammates appear,
each supposedly on its own cloud computer, with a review gate before anything
sends.

Two of those clauses are useful. A review gate before send is the right
instinct. "Each on its own cloud computer" is false for Grok Bot. The computer
is assigned to your user account. Extra names are extra screens. Docs tell you
not to use separate bots as a security boundary.

A team of four with copied logins is not safer than one specialist with a
written boundary. It is four places a send plugin can live. If you want a
roster, add bots the slow way: one job, one boundary, one test, then another.
The [one-person company](/blog/one-person-company-grok-bot) pattern is a named
roster you can audit, not a prompt that staffs itself.

Where the objection wins: you are exploring, nothing is connected that can
send or pay, and you will delete the experiment the same afternoon. That is a
lab. It is not how you run mail, ads, or a public site.

## Verify send, spend, merge, and publish still need your yes

A check that can fail:

1. Give Firstmate a messy ask that looks like it wants a public post.
2. Confirm it restates the five fields and routes to one specialist.
3. Confirm the return is labelled unpublished.
4. Confirm nothing appeared on X, the blog, or the mail sent folder.
5. Ask it to "just send it, I already said the job." Confirm it still waits
   for exact-text approval of that send.

If step 4 fails, the door is not a door. Disconnect send-capable plugins, sign
out of the social session, and rewrite the charter before you trust a dump
again. If step 5 fails, a standing instruction was treated as approval. Approvals
are for a proposed action, not for a category of future messages.

| Cadence | What you inspect | Fail if |
|---|---|---|
| Every dump, week one | Five fields restated, one specialist, unpublished packet | A second bot ran, or anything left the building |
| Weekly after that | Translation still has a click line | The packet reads as "already handled" |
| After any new plugin | Poster or mailer cannot fire from a research route | A plugin you did not name in the roster sent |
| After a bot delete | Sessions that delete does not clear | Gmail or X still signed in on the computer |

Eligibility for Grok Bot includes SuperGrok Plus, Cursor Pro+, Cursor Ultra,
and Cursor Teams Standard and Premium, plus a one-time trial. Cursor Hobby
and Cursor Pro at $20 do not include it. SuperGrok at $30 does not. The
cheapest paid path currently listed is Cursor Pro+ at $60 a month. None of
those plans add a second computer when you add a specialist. Budget the door
as process, not as isolation.

## Leave coverage maps to Chief of Staff, not this front door

[The chief of staff setup](/blog/grok-bot-chief-of-staff-setup) is about
ownership: what is uncovered, overlapping, or stale. Firstmate is about one
ask, one route, one packet. Mixing them produces a bot that both assigns
coverage and executes work, which is how "coordinate" becomes "send."

If a dump is actually "who owns Friday's report," that is Chief of Staff. If
it is "write Friday's report as a draft," that is Firstmate routing a writer.
Same computer. Different stop verbs. Keep the charters from inheriting each
other's permissions.

## Refuse the story that child bots brought their own machines

You will see this claim in roundups and in feed items. Repeat the documented
line instead. One persistent cloud computer per account. Screens are not
security boundaries. Deleting a child bot does not remove files or browser
sessions. Routines belong to one bot, max 50, and they die with that bot. There
is no team-level routine store.

The front door can say this out loud in the translation: "I routed to Clip
Desk. It shares this computer with Inbox Triage. Do not assume the clip files
are invisible to the mail bot." That sentence is more useful than another
teammate.

## Stop the route when the brief is missing a named reviewer

The reviewer field is how the door knows who is allowed to click. If it is
blank, default to you and keep the packet inside the chat. Do not pick a
Slack channel as the reviewer. Do not CC a customer to "close the loop."

Missing outcome, sources, or constraints never default. Those are where a
guess becomes confident wrong work. A missing reviewer can default to you
only because nothing is allowed to leave until you say so. That is the whole
point of a front door.

**Keep reading:** [Harden a Mail-Reading Grok Bot Against Prompt Injection](/blog/grok-bot-prompt-injection-email), [Run a Grok Bot Fleet From Telegram Without Letting Strangers In](/blog/grok-bot-telegram-bridge), [grokbot.dev vs botskills.sh](/blog/grok-bot-vs-grokbot-dev).

## Frequently Asked Questions

### Does a Firstmate-style bot give each specialist its own computer?

No. Grok Bot assigns one persistent cloud computer to the user account. Each
bot gets a screen on that machine. Screens are work surfaces, not isolation.
Browser cookies, files, and command-line credentials are shared. xAI's docs
tell you not to use separate bots as a security boundary. A front door that
hires four specialists is four names on one VM. Plan the blast radius as one
computer, then write stop verbs per job so send and publish still need you.

### Can Firstmate send the specialist's result if I already approved the task?

No. Approving a route is not approving a send. The catalog boundary is that
the door never sends specialist output to a customer or a public channel. If
you want something sent, approve the exact text to the exact recipients as a
separate click. A standing instruction such as "handle my launches" is not
consent for a later message whose audience did not exist when you typed it.

### How is this different from a chief of staff bot?

Chief of Staff maps recurring commitments to owners and flags gaps. Firstmate
turns one messy ask into a five-part brief and routes a single specialist. You
can run both. They still share sessions. Do not let the door inherit coverage
edits, and do not let the coordinator inherit send. If the dump is "who owns
this," use the map. If the dump is "produce this draft," use the door.

### Should the front door spin Cursor cloud agents on its own?

Not by default. If the work would need extra agents, the door should say so
and wait. Extra names on Grok Bot still share the account computer. There is
no bot-specific spend cap, and overflow after the weekly allowance is billed
from model and token cost. Treat extra agents as a cost and a blast-radius
decision, not as a sign the product is working. Draft a charter for a new
specialist if the job is real. Do not staff up inside one turn.
`,
};

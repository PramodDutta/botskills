import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Reading Real Figma Geometry: What Changes When a Bot Stops Guessing',
  description:
    'A Grok Bot on the Figma MCP reads exact positions, spacing and component structure. That turns eyeball work into arithmetic, and moves the line on what you delegate.',
  date: '2026-08-28',
  category: 'Guide',
  content: `
# Reading Real Figma Geometry: What Changes When a Bot Stops Guessing

There is a large difference between a bot that looks at a picture of your design and a bot that reads the file. Most disappointing design automation is the first thing being asked to do the second thing's job.

Through the Figma MCP path, a bot can read exact x and y positions, width, height, spacing, typography, fills, strokes, and component structure. Not an estimate from pixels. The values themselves. That single change moves a whole category of work from "the bot sort of gets it" to arithmetic, and it leaves a different category exactly where it was.

## Read the difference between a screenshot and a production file

A screenshot gives a model an impression. A file gives it facts.

| Question | From a screenshot | From the file |
|---|---|---|
| Is this gap 16 or 18? | A guess from pixels, wrong at some zoom levels | The number |
| Is this a component or a detached copy? | Invisible | Explicit in the structure |
| Do these six cards share a text style? | Looks like it | Named style or not |
| Is this stroke 1px or a 1.5px scaled? | Unanswerable | The value |
| Which of these 40 frames breaks the spacing rule? | You check 40 by eye | A list |

The last row is the one that changes your week. Consistency auditing across a large file is arithmetic once the numbers are readable, and it is genuinely tedious for a person because the failure mode is attention, not skill.

## Let exact geometry replace the eyeball on repetition work

The jobs that become safely delegable are the ones where correctness is checkable against a rule.

- Find every frame where vertical rhythm departs from the 8pt grid, and list them with the actual value.
- Find text layers not bound to a named style, grouped by what they visually match.
- Find detached instances that still match their component, which are the cheap re-links.
- Report where a spacing token is used with a hand-typed value beside it.

None of those require taste. All of them require reading several hundred values without getting bored, which is the thing a person is worst at and a bot is indifferent to.

\`\`\`
You are File Auditor. You read the Figma file through the MCP path
and report. You never modify a file.

Per run, output four lists with exact values attached:
1. Frames departing from the 8pt vertical rhythm. Give the frame
   name and the actual gap.
2. Text layers not bound to a named style, grouped by the style
   they visually match.
3. Detached instances whose geometry still matches their component.
4. Hand-typed values sitting beside an equivalent token.

Rules:
- Report the number, never the adjective. "Gap is 14, rhythm is 16"
  not "spacing looks tight".
- A departure is not automatically an error. Flag it, do not fix it,
  and never describe it as wrong. Some are deliberate.
- If you cannot read a value, say could-not-read. Never infer a
  value from a rendered image and present it as read.
\`\`\`

## Keep character and illustration recreation on a human

The boundary is sharp here and worth stating without hedging: a bot cannot automatically recreate a character from a screenshot, and it should not be asked to. This is not a temporary capability gap you route around with a better prompt.

Anything where the output is a judgment about how something should look, rather than whether it matches a stated rule, stays with a designer. The bot's job near that work is preparation: gather the references, place the production assets, set up the frames, and stop.

## Build the playground around the spec, not around the vibe

A useful pattern: have the bot build a localhost playground around a production animation spec, so that easing, duration, and delay become things you feel rather than read.

That works because the spec is the input. It stops working the moment the request becomes "make it feel snappier", because snappier is not a value the file contains. Feed it numbers and get a surface you can judge. Ask it to originate the numbers from an adjective and you get a plausible guess presented with the same confidence as a read value, which is the worst of both.

## Watch Sam approve a spacing pass that flattened an exception

Sam ran an audit across a 200-frame file before a handoff. The bot returned 31 frames departing from the vertical rhythm, each with its actual value. Clean output, correct arithmetic, no hallucinated numbers.

Sam fixed all 31.

Four of them had been deliberate. A dense settings list used a tighter rhythm on purpose, agreed in a review three months earlier, because the standard spacing pushed the save button below the fold on the smallest supported height. The bot had no way to know that. It reported a departure, correctly, and Sam read a list of departures as a list of defects.

The regression shipped, and it took two weeks and a support ticket about a missing save button to trace it back.

The bot did its job. The mistake was a human treating "does not match the rule" as identical to "is wrong". The fix was one line in the charter and one habit: departures are flagged, never fixed, and any departure older than the last review gets a look at why it exists before it gets normalised.

## Place assets by likelihood, then check the confident ones hardest

A bot can search for and place assets by how likely they are to be the right one. That is a real time saver on a production pass, and it has an inverted failure mode worth knowing.

The placements it is least sure about, you will check, because it will tell you it was unsure. The ones it places confidently are the ones that slide through. So the review order that catches the most is the reverse of the intuitive one: spot-check the confident placements, and read the flagged ones normally.

| Confidence | Your instinct | Better habit |
|---|---|---|
| Flagged as uncertain | Review carefully | Review normally, it already warned you |
| Placed confidently | Skim | Spot-check, this is where errors hide |
| Placed from an exact name match | Skip | Skip, this one is fine |

## Separate reading the file from writing to it, always

Read access and write access to a design file are different products wearing the same connection, and the safe roster keeps them as different bots with different charters.

| Capability | Risk when wrong | Who holds it |
|---|---|---|
| Read geometry and structure | A wrong report you discard | A bot, unattended |
| Report departures from a rule | A false flag, cheap | A bot, unattended |
| Suggest a fix in text | Nothing until applied | A bot, unattended |
| Rename or relink a component | Propagates through instances | A human |
| Change a value in the file | Silently alters a designer's work | A human |
| Detach or delete a layer | Destroys structure and history | A human |

The argument against this split is that half the value is in applying the fix, not finding it. True, and applying it is still not worth the exposure, because the failure mode is not a wrong edit you notice. It is a correct-looking edit across forty frames that removes something deliberate, in a file where several people are working, discovered a week later when nobody remembers what it looked like before.

A bot that produces a precise list of what to change, with values, turns a two-hour audit into a fifteen-minute application. That is most of the benefit at almost none of the risk.

## Stage the design roster from audit toward production

| Order | Job | What it touches | Why here |
|---|---|---|---|
| 1 | Consistency audit against a stated rule | Nothing, reports only | Immediate value, zero risk |
| 2 | Style and token coverage report | Nothing | Shows where the system is thin |
| 3 | Asset gathering into a review folder | New files only | Produces, does not place |
| 4 | Asset placement in a working file | An in-progress file | Real time saved, reversible |
| 5 | Playground built around a motion spec | A localhost surface | Needs a spec to exist first |

Notice that the highest-value job for most teams is first and also the safest. That is unusual and worth exploiting. Most automation asks you to accept risk early for payoff later; here the read-only audit is the thing that pays immediately, and everything riskier is optional.

## Ask the questions nobody wrote a lint rule for

The standing rules are already covered by whatever enforcement you have. The value of reading the file directly shows up in the one-off question, asked in the middle of a review, that nobody would encode in advance.

Which frames changed spacing since the release tag and were not mentioned in the changelog. Which text layers use the display face at a size below where it was designed to work. Which components have more than three detached instances, since that usually means the component is wrong rather than the instances are. Which screens contain a colour that is not in any token and is also not in any other screen, which is almost always a paste from somewhere else.

None of those are lint rules. All of them are answerable in one pass over the file, and each has caught real problems in real handoffs. The pattern is that they are questions about drift, and drift is invisible to rules written before the drift existed.

Keep a running list of these as they come up. The ones you ask twice are candidates for actual enforcement; the ones you ask once are exactly the value of having raw access rather than a fixed ruleset.

## Watch the asset placement that was confidently wrong

Sam's team hit the inverted-confidence problem two sprints after the spacing incident. A production pass placed 60 assets across a marketing surface, and the bot flagged four as uncertain.

Sam reviewed the four. They were fine, and two of them the bot had actually got right despite flagging them. The other 56 went in unreviewed because the bot had not raised a hand.

One of the 56 was the previous quarter's logo lockup. It matched the name pattern, it lived in the same library folder, it was the highest-likelihood match by every signal available, and it had been superseded six weeks earlier by a version that differed in a way a name match cannot see. The bot had no way to know. It placed the wrong asset with complete confidence and no reason to flag anything.

It shipped to a landing page and was caught by someone outside the team.

The lesson is not that the bot was unreliable. It is that reviewing the flagged items and skipping the confident ones inverts where the errors actually live. Uncertainty flags tell you where the bot knows it might be wrong, which is precisely where it is least dangerous, because it has already warned you.

The habit that catches this: after any bulk placement, spot-check a random sample of the confident placements, and pay particular attention to anything from a library folder that has changed in the last two months. Superseded assets are the single most common confident error, because supersession is a fact about time and the file structure does not encode it.

## Keep the handoff spec as the artifact, not the conversation

The most durable output of a design bot reading production files is not any individual audit. It is a written spec that survives the conversation it came from.

Design handoffs fail in a predictable way: the important decisions are made in review, spoken aloud, and recorded nowhere except in the file itself, where they are indistinguishable from accidents. Six weeks later someone asks why the settings list uses a tighter rhythm and nobody can answer, so it gets normalised. That is the same failure as Sam's spacing pass, and its root cause is that the reason existed only as a memory.

A bot with exact geometry access can close that gap cheaply, because it can produce the spec from the file rather than from the discussion. Ask it to output, for a given screen, the actual values it reads: the spacing used, the type styles bound, the components instanced and which are detached, the colours present and which are tokenised. That document is not a summary of intent, it is a statement of fact about what the file currently is.

Then annotate it once, by hand, with the two or three places where the value departs from the system on purpose and why. That annotated document is worth more than any amount of automated auditing, because it converts a deliberate exception from an invisible property of the file into a written decision that the next audit can be told about.

The economics are favourable in a way that is easy to miss. Producing the factual half is tedious and exact, which is what the bot is good at and what a person does badly after the third screen. Producing the annotation is judgment and requires about five minutes from someone who was in the room. Splitting the work along that line is why the pattern survives contact with a real deadline, whereas asking a designer to write the whole spec by hand does not.

One caution on format. Keep the spec in something diffable, not in a comment thread on the file. The value comes from being able to see what changed between one release and the next, and a threaded conversation cannot show you that. A plain document in version control, regenerated each release and diffed against the last, turns drift into something you read rather than something you discover.

If your team already regenerates that spec each release, you have the whole benefit of this page and can stop here. Everything below is about the argument you will get from an engineer who has seen design tooling promise this before, and it is a fair argument worth having properly rather than waving away.

## Answer the objection that this is just linting with extra steps

The fair version: design systems have had linters and token checkers for years. Reading geometry through an MCP is the same audit with a chat interface on top, and the interface is not the hard part.

Partly true, and the difference is scope rather than novelty. A linter checks the rules someone encoded. Reading the raw file lets you ask a question you had not encoded yet, in the middle of a review, without shipping a new rule first. "Which frames changed spacing since the last release and were not in the changelog" is not a lint rule anybody writes in advance, and it is answerable in one pass.

Where the objection wins completely: if you already have a token system with enforcement in CI, most of the value described here is already yours, and adding a bot to re-audit what CI blocks is duplicated work. The gain concentrates in files that are ahead of the system, which in practice is most exploratory work.

## Stop using this page when the shape is different

This page is about a bot reading production files with exact values. It stops applying in three places.

If the question is how to split a design week between the repetitive half and the judgment half, that framing is [in the designers article](/blog/grok-bot-for-designers-figma-motion) and it is the better starting point. If you are wiring the MCP connection rather than using it, [the MCP page](/blog/grok-bot-mcp-servers) covers what the hosted token path actually holds and where it does not apply. And if you want the bot to learn a repeated production sequence rather than audit a file, [teach by demonstration](/blog/teach-grok-bot-by-demonstration) is the mechanism, with its own limits.

Nearby bots: [Brand Deck Keeper](/bots/brand-deck-keeper) holds the current brand surface so a deck does not drift. [Deck Updater](/bots/deck-updater) refreshes decks against a source rather than by hand. [Demo Clip Library](/bots/demo-clip-library) indexes recorded demos by what they prove. And [Live Discovery Slide](/bots/live-discovery-slide) builds a slide mid-call from what was actually said.

## Frequently Asked Questions

### What can a bot actually read from a Figma file?

Through the Figma MCP path it can read exact x and y positions, width and height, spacing, typography, fills, strokes, and component structure. These are the stored values rather than estimates derived from a rendered image, which is the whole difference. It means questions like "which of these frames departs from the 8pt rhythm and by how much" have exact answers, and it means a bot should never present a number inferred from a picture as though it were read from the file. Require it to say could-not-read instead.

### Can a bot recreate an illustration or character from a screenshot?

No, and it should not be asked to. This is a stated limitation rather than a prompting problem, and the boundary is a useful one: work where the output is a judgment about how something should look stays with a designer, while work where correctness is checkable against a stated rule can be delegated. Near illustration work, a bot is useful for preparation rather than production, meaning gathering references, placing existing production assets, and setting up frames, then stopping before anything original is drawn.

### Should a bot fix the spacing problems it finds?

No. Flag, never fix. A departure from a rule is not the same as an error, and a bot reading geometry cannot tell the difference between a mistake and a deliberate exception agreed in a review months ago. The failure this prevents is subtle: a correct list of departures gets read as a list of defects, all of them get normalised, and an intentional exception disappears along with the reason it existed. Any departure older than your last design review deserves a look at why it is there before it is changed.

### Is this different from a design system linter?

In scope rather than in kind. A linter checks rules that someone encoded in advance, and if you already run token enforcement in CI, most of this value is already yours. Reading the raw file adds the ability to ask a question you had not encoded yet, mid review, without shipping a new rule first. Questions like which frames changed spacing since the last release and were not mentioned in the changelog are answerable in a single pass, and nobody writes that as a standing lint rule.
`,
};

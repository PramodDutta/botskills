import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Bots and Figma: What They Can And Cannot Touch',
  description:
    'Build a figma bot that handles repetitive production work while components, shared styles, publishing, comments, and design judgment stay human-owned.',
  date: '2026-08-25',
  category: 'Tutorial',
  content: `
# Bots and Figma: What They Can And Cannot Touch

You spent Tuesday afternoon pasting forty-one product names and prices into a
Figma card component, one at a time, because the data lived in a spreadsheet.
Nothing about that afternoon required new design judgment. All of it required
someone who would not make a typo on card thirty-seven.

That is the actual shape of the opportunity, and it is much less exciting than
the pitch. A Figma bot should not decide what your product looks like. It can
prepare a change list, inspect a file, populate a controlled duplicate, and
report inconsistencies while you do the work requiring taste and context. Its
permanent boundary is simple: never edit the source file, publish a library,
post a comment, or change sharing without approval for the exact action.

## Make Figma work concrete: A design week splits into repetition and judgment

Write down everything you did last week and sort it into two columns. The sort
is easier than people expect, because the test is simple: if you handed the
task to a competent stranger with your file open and a written spec, would
they produce roughly what you would have produced?

Where the answer is yes, the work is repetition. Where the answer is no, what
you are actually doing is deciding, and the deciding is the job.

| Task | Column | Why |
| --- | --- | --- |
| Populating a component with 40 rows of real content | Repetition | The spec fully determines the output |
| Choosing what the card should show at all | Judgment | The spec is the thing you are writing |
| Sourcing 12 candidate images against a written brief | Repetition | Selection criteria are stated, gathering is legwork |
| Picking which of the 12 is right | Judgment | That is taste applied to a context nobody wrote down |
| Applying a type scale change across 50 artboards | Repetition | Mechanical, and the failure mode is missing one |
| Deciding the type scale needed changing | Judgment | Requires knowing why it felt wrong |
| Writing alt text for an exported set | Repetition | Draftable, then edited |
| Signing off that a screen is good | Judgment | Nobody can hand this over and stay honest |

Two things fall out of that table. The repetition column is bigger than
designers like to admit, and it is where the hours actually go. And the
judgment column does not shrink as the models improve, because the entries in
it are not blocked on capability. They are blocked on taste and on context
that exists in your head and in three Slack threads.

## Make Figma work concrete: Sort each handover by blast radius, not by difficulty

The repetition column tells you what a bot could do. It does not tell you what
to hand over first, and the usual instinct, start with the hardest thing that
would save the most time, is exactly backwards.

Sort by blast radius instead: how many other people are affected when one run
goes wrong, and what the undo looks like.

| Task | Where the output lands | Hurt by one mistake | Undo | Verdict |
|---|---|---|---|---|
| Populating a component with 40 rows | A frame in your own file | You | Delete the frame | Start here |
| Sourcing candidate assets to a folder | A candidates folder | You | Delete the folder | Second, with licences recorded |
| Naming, sizing, and exporting a set | A handoff folder | The engineer consuming it | Re-export | Third, reviewed as a list |
| Applying a token change to 50 artboards | Fifty screens in one file | Everyone reviewing that file | Undo, if you catch it in session | Fourth, with per-target reporting |
| Editing or detaching a master component | Every instance everywhere | Everyone using the library | Version history, if you have it | Never |
| Publishing to a shared library | Every downstream file, on next update | Every designer and engineer | Nothing quick | Never |
| Working in a file someone else has open | Their live session | The other person, immediately | Nothing | Never |
| Choosing between candidates and signing off | The client's impression of you | The project | Nothing | Never. That is the job |

The first four rows are a sequence, not a menu. Each one teaches you something
about how this particular bot reports, hedges, and skips, and you want to learn
that on a frame you can delete rather than on fifty screens in a shared file.

The bottom four are not "risky", they are the boundary, and it belongs in the
charter as actions rather than intentions:
**the bot never publishes to a shared library, never overwrites or detaches a
master component, and never touches a file another person has open.** Those are
the places where one mistake propagates into everybody else's work instantly and
cannot be pulled back.

## Make Figma work concrete: Set up four repetition jobs, in this order

Content population. Give the bot a data source and a component, and have it
produce the populated instances. The output is boring, checkable at a glance,
and if it is wrong you delete a frame. This is the right first job precisely
because the worst case is trivial.

Asset gathering against a brief. Not "find me a good hero image", which is a
judgment call in disguise, but "find twelve landscape images matching this
written brief, from these three sources we have a licence for, and report the
licence and the source URL for each." The licence line is not optional. An
image whose provenance nobody recorded is a liability that surfaces months
later, and a bot will happily hand you one with total confidence.

Systematic application. A token change, a spacing rule, a renamed style,
applied everywhere. The value is not speed, it is completeness. Humans miss the
one artboard nobody opened in six weeks.

Export and handoff hygiene. Naming, sizes, formats, alt text drafts, the
redlines nobody enjoys writing. Genuinely dull, genuinely necessary, and the
kind of thing that gets skipped at 6pm on a Friday.

For the marketing-adjacent version of this work, our
[Ad Creative Generator](/bots/ad-creative-generator) listing is a useful shape
to study: it generates variants, and its stated boundary is that it never
spends credits or launches anything without an explicit go. That line is the
whole design of the bot, not a caveat on the end of it.

## Make Figma work concrete: The judgment half is not a capability gap you can wait out

It is worth being precise about why the second column stays yours, because
"AI can't be creative" is a bad argument that will age badly.

The real reason is that judgment tasks are underspecified on purpose. When you
decide a layout is not working, you are integrating the client's unspoken
anxiety about their competitor, the fact that the last three designs you showed
were too safe, and something about the way the eye lands on the third element.
None of that is in the brief. Some of it is not in language at all.

A bot given that task will produce something. It will be competent, plausible,
and average, because averaging is what it does when the specification runs out.
That is the mechanism behind every complaint about design output feeling
generic, and it is also why more prompt tokens do not fix it. You cannot
specify your way out of a decision you have not made yet.

So the split is not "hard versus easy". It is "the spec determines the output"
versus "producing the spec is the work".

## Make Figma work concrete: Answer the strongest objection: taste is a capability the models will get

The best argument against that split is not that models are creative. It is
that the split is a snapshot.

"Every line you have drawn between repetition and judgment is a line about
today's capability. Two years ago sourcing twelve on-brief images was judgment.
Now it is legwork. In two more years the picking is legwork too, and this
article is a period piece."

The first half of that is correct and worth conceding plainly. The boundary has
already moved and will move again. Generating twelve competent starting layouts
used to be a week of work and a taste decision at every step; it is now closer
to a fetch. Anyone who tells you the line is fixed is selling something.

What does not move is the direction of the dependency. The output of a judgment
task is a specification, and a tool that produces output from a specification
cannot produce the specification that defines which output is correct. When you
decide the card should show a price rather than a rating, you are not doing a
harder version of populating cards. You are creating the thing that makes
populating them checkable.

There is also the part nobody automates away, which is that a person signs it
off. Accountability is not a capability, and a client who is unhappy is unhappy
with a named human.

The useful version of the objection is that you should re-run the sorting test
rather than trusting this table. If you can write the brief so precisely that a
competent stranger would produce what you would, the task has already moved into
the repetition column whatever anyone's release notes say. That test survives
every model upgrade, which is why it is the test.

## Make Figma work concrete: Apply a system across fifty artboards without silent drift

This is the highest-value repetition job and also the one with the nastiest
failure mode, so it deserves its own rules.

The nasty failure is partial application. The bot updates forty-six artboards,
skips four for a reason it does not surface, and reports success. You ship, and
four screens carry the old spacing into a client review where somebody notices
before you do.

Three rules prevent it. Make the bot enumerate before it acts, so it lists all
fifty targets and you can see the count is right. Make it report per target,
not in aggregate, so "50 updated" becomes fifty lines with a status each. And
make it fail loudly on anything it could not touch: locked layers, detached
instances, anything it skipped, listed by name, at the top of the report rather
than the bottom.

Then the completeness check is arithmetic rather than trust. If the enumeration
says fifty and the report has fifty lines, you know. If it says forty-six, you
know that too, which is the entire point.

## Make Figma work concrete: Build a playground around the motion spec instead of copying a screenshot

Here is the technique that actually works for motion, and it is the opposite of
what people try first.

What people try first: show the bot a screen recording or a screenshot of an
animation you like and ask it to recreate the look. This fails in a specific
way. The bot produces something that is superficially similar and wrong in the
timing, because timing is not visible in a still and only approximately visible
in a compressed video. You then iterate by describing feel in adjectives,
which is a slow way to converge on nothing.

What works: give the bot the actual numbers, and have it build you a small
harness where you can change the numbers live.

Take the values your design tool already produces for a transition, the
duration in milliseconds, the easing curve, the delay, the property being
animated, and hand those over as the spec. Then ask for a single self-contained
HTML file that renders the element and exposes every one of those values as a
control.

\`\`\`html
<!-- motion-playground.html : one file, open it in a browser, no build step -->
<style>
  .stage { display:grid; place-items:center; height:220px; background:#111; }
  .card  { width:180px; height:110px; border-radius:14px; background:#e8e8e8;
           transform: translateY(0) scale(1); opacity:1; }
  .card.enter { animation: enter var(--dur) var(--ease) var(--delay) both; }
  @keyframes enter {
    from { opacity:0; transform: translateY(var(--rise)) scale(0.96); }
    to   { opacity:1; transform: translateY(0) scale(1); }
  }
</style>

<div class="stage"><div class="card" id="card"></div></div>

<label>duration  <input id="dur"   type="range" min="80"  max="900" value="320"></label>
<label>delay     <input id="delay" type="range" min="0"   max="400" value="0"></label>
<label>rise (px) <input id="rise"  type="range" min="0"   max="64"  value="16"></label>
<label>easing    <input id="ease"  value="cubic-bezier(0.2, 0, 0, 1)" size="30"></label>
<button id="play">replay</button>
<pre id="spec"></pre>

<script>
  var card = document.getElementById('card');
  function apply() {
    var dur = document.getElementById('dur').value;
    var delay = document.getElementById('delay').value;
    var rise = document.getElementById('rise').value;
    var ease = document.getElementById('ease').value;
    card.style.setProperty('--dur', dur + 'ms');
    card.style.setProperty('--delay', delay + 'ms');
    card.style.setProperty('--rise', rise + 'px');
    card.style.setProperty('--ease', ease);
    document.getElementById('spec').textContent =
      'duration: ' + dur + 'ms\\ndelay: ' + delay + 'ms\\n' +
      'rise: ' + rise + 'px\\neasing: ' + ease;
    card.classList.remove('enter');
    void card.offsetWidth;
    card.classList.add('enter');
  }
  document.querySelectorAll('input').forEach(function (i) {
    i.addEventListener('input', apply);
  });
  document.getElementById('play').addEventListener('click', apply);
  apply();
</script>
\`\`\`

Now you are tuning rather than describing. You drag the duration slider until
it feels right, and the spec panel prints the exact values you landed on, which
go straight into the handoff. The bot did the part that is typing. You did the
part that is deciding what 320 milliseconds should feel like, which is not
something you were ever going to write down in advance.

The same trick generalises. Any time you catch yourself describing a quality in
adjectives, ask instead for a harness that makes the underlying parameter
adjustable, and go move it.

## Make Figma work concrete: Replace every adjective in a brief with a reference artefact

Adjectives are where visual briefs go to die. "Clean", "modern", "premium",
"bold but approachable" are words that mean something to you because you have
a specific image in your head. The bot has a different image, assembled from
the average of everything ever labelled premium.

| What the brief says | What the model averages toward | Hand it this instead |
|---|---|---|
| Clean | Whitespace and a grey sans-serif | Your spacing scale, and the past layout the client called clean |
| Modern | Whatever was most common in recent training data | Three dated references and the year each was made |
| Premium | Dark ground, thin type, a gold accent | Your palette values, and the competitor piece you were told to beat |
| Bold but approachable | Two opposite averages, blended into neither | The type scale, the heaviest weight you allow, one approved piece |
| Make it pop | More saturation, more contrast, more of everything | The single element that should be the focal point, named |
| Something like the last one | The most generic possible reading of your past work | The file path of the last one |

The pattern in the right-hand column is that every entry is a thing that exists,
with a location. A brief made of references converges. A brief made of
adjectives oscillates, because each round of feedback is another adjective and
the model has no way to tell which average you meant.

The practical version is a small permanent folder the bot reads on every run:
your type scale, your spacing tokens, your palette with the actual values,
three approved past pieces, and a written note about what made each one work.
That folder is worth more than any prompt you will write, and unlike a prompt it
gets better every time a client approves something.

## Make Figma work concrete: The anti-example list is the half everyone skips

Good references tell a bot where to aim. They do not tell it what to avoid,
and avoiding is most of what taste is.

Keep a second, shorter list: work you rejected, with one line on why. Not
generic bad design, your rejections, from your projects.

\`\`\`text
ANTI-EXAMPLES  (read before producing anything)

- /refs/no/2026-04-hero-v3.png
  Rejected: three competing focal points. Never more than one per viewport.
- /refs/no/2026-06-pricing-cards.png
  Rejected: the recommended plan was styled louder AND bigger AND coloured.
  One emphasis mechanism per element, never three stacked.
- /refs/no/2026-07-illustration-set.png
  Rejected: generic gradient blobs. If an illustration could belong to any
  company in any industry, it is wrong for this one.
- /refs/no/2026-08-motion-loop.mp4
  Rejected: every element animated. Motion is emphasis, and emphasis on
  everything is emphasis on nothing.

Anything you produce that matches one of these patterns, do not send it.
Say which anti-example it resembled and what you changed instead.
\`\`\`

The fourth entry is the one that pays for the list. "If it could belong to any
company, it is wrong" is a testable rule, and it is the sharpest single filter
against generic output.

Three properties make the difference between a list that works and a decoration.
Every entry points at a file rather than describing one, so the bot compares
against an artefact rather than a memory of your sentence. Every reason is
stated as a rule that generalises, not as a complaint about that one piece:
"three competing focal points" transfers, "I did not like the hero" does not.
And the list stays short enough to be read on every run, which in practice means
you replace entries rather than accumulate them, retiring a rule once the mistake
stops happening. The wider argument for why this test works, and how to apply it
to writing as well as visuals, is in
[the anatomy of slop and how to stop producing it](/blog/grok-bot-avoiding-ai-slop).

## Make Figma work concrete: Look with a human eye where small inconsistencies multiply

Some errors are additive and some are multiplicative, and only the second kind
should scare you.

An additive error is one wrong image. You notice it, swap it, done. A
multiplicative error is a spacing token applied slightly wrong to a component
used on thirty screens, or an export naming convention that is subtly off
across an entire handoff. Nobody notices any single instance. Everybody notices
the aggregate, and by then the fix is thirty fixes.

The rule that follows: a human reviews anything the bot touched in more than
about five places, and the review looks at the aggregate rather than at
samples. Open the board zoomed out. Scan the export folder as a list, not file
by file. Sort that list by name and by size, because a naming error is visible
in a sorted list and invisible in a folder, and an asset that is 40kb where its
neighbours are 400kb is a wrong export you would never catch by opening files
one at a time. The multiplicative failures are visible from a distance and
invisible up close, which is the opposite of how people review.

Worth knowing if your review happens on a tablet: Grok Bot's documentation
lists macOS, Windows, and iPhone on iOS 18 and later as supported, and states
that [iPad is not supported](https://docs.x.ai/grok-bot/faq). The iPhone app is
also limited compared to desktop, so plan your review step around a laptop.
The platform detail is covered further in
[which platforms Grok Bot actually runs on](/blog/grok-bot-supported-platforms).

One more architectural fact that matters for client work. All bots on an
account share one persistent cloud computer, and files, cookies, and signed-in
sessions are shared across them, which the documentation states plainly while
warning that separate bots are
[not a security boundary](https://docs.x.ai/grok-bot/approvals-security-and-privacy).
If you design for competing clients, that is a real constraint on how you
organise credentials and asset folders, and no charter instruction fixes it.

## Make Figma work concrete: Diagnose design output from the shape of what went wrong

Most of these look like success at first glance, which is why they reach a
client review rather than getting caught at your desk.

| What you notice | What actually happened | The fix |
|---|---|---|
| Forty cards look right, three prices are wrong | Nothing tied each card back to a source row | Require the source row id per card, then spot check five |
| "50 updated", but four screens look old | An aggregate report hid four skips | One line per target, skips listed at the top |
| The motion is close but feels wrong | It worked from a screenshot instead of numbers | Give it duration, easing, delay, and build the harness |
| The asset set is good, the licences are unknown | Licence was not a required output field | No licence recorded means the asset is not used |
| Everything is competent and none of it is yours | References but no anti-examples | Add the rejected list, one generalising rule per entry |
| The export folder has three naming conventions | The convention lived in your head | Put it in the reference folder and make the bot read it |

The first row is the one worth building a habit around, because it is the only
failure here that a zoomed-out review will not catch. Correct-looking wrong data
is invisible at any zoom level, so it needs a different check: five random rows
against the source, every run, forever.

## Make Figma work concrete: Paste this design production charter and adapt the folders

\`\`\`text
ROLE
You are a design production assistant. You do mechanical work inside files I
have already made decisions about. You never decide what to make.

WHAT YOU OWN
Populating components from data I give you.
Sourcing candidate assets against a written brief, with licence and source URL
for every single one.
Applying token, style, and naming changes across a named set of artboards.
Preparing exports: naming, sizes, formats, and draft alt text.

BEFORE ANY BULK CHANGE
List every target by name and give me the count. Wait for my go.
After the change, report one line per target with its status. Never report an
aggregate like "50 updated".
List anything you skipped, locked, or could not reach at the TOP of the report.

WHAT GOOD LOOKS LIKE
Read /refs/tokens.md and /refs/approved/ before producing anything.
Read /refs/no/ANTI-EXAMPLES.md before producing anything.
Never work from an adjective. If a brief says "clean" or "premium" with no
reference attached, ask me for the reference instead of guessing.

WHERE YOU STOP
You never publish to a shared library.
You never overwrite or detach a master component.
You never open or modify a file someone else has open.
You never use an asset whose licence you could not record.
Those four are absolute. Approval does not unlock them.

REPORTING
What you changed, per target.
What you skipped and why.
Every asset with its licence and source URL.
Anything that looked wrong to you but that I did not ask about.
\`\`\`

## Make Figma work concrete: Run one job end to end: forty-one cards from a spreadsheet

The job from the opening paragraph, done properly, from a standing start.

| Stage | What the bot did | What you did | Time |
|---|---|---|---|
| Setup, once | Nothing | Wrote the tokens file, filled the approved folder, wrote four anti-examples | 90 min, once ever |
| Enumerate | Listed 41 target rows and the component, asked to proceed | Checked the count against the sheet | 2 min |
| Populate | 41 instances, one report line per row with its source row id | Nothing, watched it run | 0 min |
| Spot check | Nothing | Five random cards against the spreadsheet | 6 min |
| Exceptions | Named 2 rows it could not populate, both missing a price | Fixed the sheet, re-ran those two | 5 min |
| Aggregate review | Nothing | Opened the board zoomed out, scanned for rhythm breaks | 4 min |
| Day 30, fifth run | Same job on a new sheet, plus export prep | Spot check and aggregate review only | 12 min |

Day one is a loss and you should expect it: ninety minutes of setup to save
forty minutes of pasting. The reference folder is the asset, not the run, and it
only starts paying on the third or fourth job that reads it. If you judge this
setup on run one you will correctly conclude it was not worth it, and be wrong.

Day thirty is the honest number: twelve minutes, of which ten are you looking
rather than the bot working. That ratio is the target. If your review time is
shrinking toward zero, you have stopped checking, and the multiplicative failure
above is waiting for you.

## Make Figma work concrete: Judge it after ten working days on three countable numbers

Do not judge this on whether the output looked good. Judge it on three
countable things after ten working days.

Hours moved, honestly counted. Not "it feels faster". How many hours of
population, application, and export prep did you not do yourself? If the answer
is under three, the setup is not earning its review cost.

Edit rate on assets. Of the candidates it sourced, what fraction did you use
without hunting for a replacement? Under a quarter means the brief is too vague,
and the fix is references, not more instructions.

Escapes. How many times did something reach a client review that should not
have? This is the only number that should be zero, and if it is not, the fix is
almost always that the human review looked at samples instead of the aggregate.

For the adjacent question of what to watch while the bot runs rather than
after, see [how a competitor watcher should be scoped](/bots/competitor-website-watch),
which is a good study in a bot whose whole job is to look and never touch.

**Keep reading:** [The Four Layers of a Bot System That Actually Works](/blog/bot-system-architecture), [Bots for Agencies](/blog/bots-for-agencies), [Bots for Ecommerce](/blog/bots-for-ecommerce).

## Frequently Asked Questions

### What design work should a bot actually do?

The work where a written spec fully determines the output. Populating
components with real content, sourcing candidate assets against stated
criteria, applying a token or style change across many artboards, and preparing
exports with naming and alt text. What it should not do is decide what to make,
choose between candidates, or sign off that something is good. The test is
whether a competent stranger with your file and your spec would produce roughly
what you would. Where they would, hand it over. Where they would not, the
deciding is the job.

### How do I get a bot to prototype an animation properly?

Give it the numbers rather than a screenshot. Take the duration in
milliseconds, the easing curve, the delay, and the property being animated,
hand those over as the spec, and ask for a single self-contained HTML file that
exposes each value as a live control. Then tune with the sliders until it feels
right and read the final values off the panel. Recreating a look from a
screen recording fails because timing is barely visible in video, and
describing feel in adjectives never converges.

### Why does AI design output look generic, and what fixes it?

Because when a specification runs out, averaging is what the model does, and
the average of everything ever labelled premium looks like nothing in
particular. More prompt text does not fix it. References do. Point at real
artefacts: your token file, your palette values, three past pieces a client
approved. Then add the half most people skip, a list of work you rejected with
one line on why each was wrong. Aiming needs targets, and avoiding needs
counterexamples, and taste is mostly the second one.

### Can I run Grok Bot for design work on an iPad?

No. The documentation lists supported platforms as macOS on Apple silicon and
Intel, Windows on x64 and Arm64, and iPhone on iOS 18 or later, and states
that iPad is not supported, alongside Linux desktop and Android. The iPhone
app is also more limited than desktop, so it is not a substitute for a laptop
in a review workflow. Plan for a Mac or Windows machine as the place the bot
runs and where you review its output, and treat mobile as a way to check on
something rather than to work.
`,
};

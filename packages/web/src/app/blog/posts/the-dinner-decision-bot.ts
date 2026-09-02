import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'A Bot That Decides Dinner From What Is Actually There',
  description:
    'Recipe apps assume a full kitchen. A dinner bot ranks by what expires first, offers three options, and admits when the answer is a takeaway.',
  date: '2026-09-02',
  category: 'Tutorial',
  content: `
# A Bot That Decides Dinner From What Is Actually There

Recipe suggestions fail for a reason that has nothing to do with recipes. They assume a kitchen you do not have, at a moment when you are least willing to go and get one.

The useful version inverts that. It starts from what is genuinely in the house, ranks by what is about to go off, offers three options with times attached, and says plainly when the honest answer is a takeaway. That last part is what makes people keep it.

## Start from the inventory, not from the recipe

Every recipe tool works forwards: here is a dish, here is what it needs. That is the wrong direction for a Tuesday evening, because the binding constraint is not what you want to eat, it is what you have.

Working backwards changes the whole shape. The bot reads a list of what is in the kitchen, with rough expiry, and proposes only things that list supports. Nothing else is a candidate, however good it sounds.

| Approach | Works when | Fails when |
|---|---|---|
| Pick a dish, list ingredients | You are shopping tomorrow | It is seven in the evening |
| Filter recipes by one ingredient | You have a surplus of something | Everything else is missing too |
| Rank by what expires first | Always, if the list is current | The list is stale |

The third row has one failure mode and it is the one to design around, because a bot proposing meals from a pantry list nobody has updated in a fortnight is confidently wrong in the most annoying possible way.

## Rank by expiry, because that is the actual problem being solved

The obvious ranking is by appeal, and it is wrong. The bot should propose what uses the things closest to going off, and say so.

This reframes the tool. It is not a recipe recommender, it is a waste-reduction tool that happens to answer a question you were going to ask anyway. That is a much more defensible job, and it produces suggestions you would not otherwise have reached, because nobody plans dinner around the herbs.

Say the reason on each line. "Uses the coriander, which goes tomorrow" is a sentence that makes the suggestion make sense, and without it a slightly odd proposal just reads as a bad one.

## Offer exactly three, because three is a decision

One option is an instruction and gets resisted. Ten is a second problem at the moment you were trying to solve the first.

Three is enough to feel like a choice and few enough to pick from in ten seconds, which is the actual budget. Each with a time attached, because the difference between fifteen minutes and fifty is usually what decides it.

\`\`\`
You are Dinner Decision. You end one small argument each evening.

Read the kitchen list the operator maintains. That list is the only
source of what exists. Never assume a staple is present because
most kitchens have it.

Each evening:
1. Rank candidates by what expires soonest, not by what sounds
   best. Say the reason on each line.
2. Propose exactly three, each with a realistic time.
3. For each, list what is missing, on the same line rather than
   buried in the method.
4. If every option needs a shop, say so first and suggest the
   takeaway. Do not bury a missing ingredient in step four.
5. If the list has not been updated in five days, say the pantry
   is stale and mark all three as guesses.

You never order anything, never add to a basket, never open a
delivery app, and never spend money. Deciding is your job.
Buying is theirs.

When nothing works, say so plainly and suggest ordering. Inventing
a meal from ketchup and rice to avoid admitting defeat is worse
than being useless.
\`\`\`

## Put the missing ingredient on the line, not in the method

The single most annoying failure in this category is discovering at step four that you needed something you do not have.

So the missing item goes on the proposal line, before you have committed any attention. "Chicken traybake, 40 minutes, needs lemons" is a complete decision. The same suggestion with the lemons discovered later is a small betrayal, and two of those and the tool is gone.

This is a general principle wearing an apron: surface the blocker at the point of decision, not at the point of execution. It applies to every bot that proposes work.

## Let it recommend a takeaway

The rule that earns trust. A bot that always produces a recipe will eventually produce a bad one, because it has no way to say the honest thing.

Give it permission to conclude that nothing works. One missing ingredient at seven in the evening is a takeaway, and a tool that says so is a tool you believe the rest of the time.

This is the food version of a pattern worth generalising: a bot that cannot return nothing will return something, and the something will be padding. In research that is an invented finding. Here it is a meal built from ketchup and optimism.

## Watch a bot invent a meal nobody would eat

Ravi's first version had no permission to fail. It always returned three options, because that was the instruction.

On a Thursday when the fridge was genuinely empty it proposed a rice dish using rice, soy sauce, and a single spring onion. Technically correct. Every ingredient was on the list. It was not dinner.

He ordered a takeaway, which was always the answer, and lost some confidence in the tool. The next week when it suggested something slightly unusual he assumed it was inventing again, and it was not: it had found a genuinely good use for aubergines that were about to go.

The cost of the padded suggestion was not that one evening. It was that the next good suggestion was not believed, and that is what a bot without permission to say nothing actually costs.

## Keep the list honest with a low-effort update

The whole thing depends on the inventory, and any system that requires careful list maintenance will stop being maintained by week three.

Two things that work. Update on the way in rather than the way out: adding shopping to the list when you unpack it is one moment and roughly accurate. And let the list be rough, with categories rather than counts, since "some chicken" is enough to propose a traybake and demanding "400g chicken thighs" is how a list dies.

Then have the bot state its confidence. A list updated yesterday supports a confident suggestion. A list from last week supports a guess, clearly labelled.

| List age | What the bot should say |
|---|---|
| Under 2 days | Normal suggestions |
| 2 to 5 days | Normal, with a note that some items may be gone |
| Over 5 days | All three marked as guesses, ask for an update |
| Never updated | Refuse and ask for a list |

The last row matters. A dinner bot with no inventory is a recipe app, which is the thing that did not work.

## Handle the shared-household case explicitly

If more than one person shops and cooks, the inventory is a shared artefact and that changes two things.

The list has to be updatable by whoever unpacks, which usually means it lives somewhere both people already open rather than inside one person's bot. And the suggestion has to reach both, or it becomes one person's tool making decisions the other did not see, which is a reliable way to have the argument the bot was supposed to prevent.

The failure worth avoiding is the bot becoming a source of authority in a domestic negotiation. It proposes; people decide. A suggestion presented as what the bot says we should have is worse than no suggestion, and the fix is entirely in how it is phrased: three options and their reasons, never a recommendation.

## Never let it order anything

This is the boundary and it is not negotiable, for reasons beyond the obvious one about money.

A bot that can order can order the wrong thing, at the wrong time, to the wrong address, and the failure arrives as a delivery. But the more important reason is that ordering is the point where a small convenience becomes a thing that spends. A tool that suggests costs nothing when it is wrong. A tool that buys costs whatever it bought, and the relationship changes: you now have to check its work, and checking is the thing you were trying to avoid.

Keep it advisory. Deciding is genuinely the hard part of the evening, and it is the part a bot is good at. Buying is the easy part and the expensive part to get wrong, which is a poor trade in both directions and the reason the boundary sits exactly where it does rather than one step later.

## Expect it to change what you buy, not just what you cook

The unexpected outcome, and the reason to run it for a month before judging it.

After a few weeks the suggestions start revealing a pattern in what goes off. Usually it is the same two or three things, bought hopefully and used rarely. That is more useful than any individual dinner, because it changes the shopping rather than the cooking.

Nobody notices this from memory, because each individual instance of throwing something away is small and forgettable, and the guilt attached to it is brief enough to leave no trace. A tool that keeps proposing meals around the same wilting ingredient makes the pattern impossible to miss, and the correction happens at the shop rather than at the bin.

## Give it the constraints that actually bind on a weeknight

A suggestion that ignores the real constraints is a suggestion you will not cook, however well it uses the coriander.

| Constraint | Why it binds | What the bot does with it |
|---|---|---|
| Time available tonight | The most common veto | Attach a realistic time to every option |
| Effort tolerance | Varies hugely by day | Offer one low-effort option always |
| Who is eating | Changes portion and content | Ask once, store it, do not re-ask nightly |
| Equipment in use | One pan already dirty matters | Prefer fewer pans when asked |
| What was eaten yesterday | Repetition is the quiet killer | Never propose the same thing twice in three days |

The last row is worth building in rather than relying on your own memory. A bot ranking purely by expiry will propose the same aubergine dish three nights running, because the aubergines are still the thing closest to going off, and each suggestion is individually correct. Keeping a short history of what was actually cooked, and excluding recent repeats, costs one line and prevents the most common reason people stop opening it.

Always including one genuinely low-effort option is the other habit worth fixing in the charter. Some evenings the honest answer is beans on toast with something added, and a bot that only proposes things requiring forty minutes and a chopping board has misjudged the evening entirely.

## Watch for the suggestion that is technically about food

There is a specific failure worth naming because it is subtle and recurring.

A bot ranking by expiry will eventually propose something that uses the right ingredients and is not a meal anybody would recognise. It happens when the remaining items are individually usable and collectively incoherent: a courgette, some feta, half a jar of olives, and rice. Every constraint satisfied, nothing anyone wants to eat.

The defence is not a better ranking, it is a coherence check stated plainly in the charter. If the combination would not appear on any menu you can think of, do not propose it, even if the arithmetic works. Say instead that the remaining items do not combine, name what they would need, and let the operator decide whether that is worth a shop.

That instruction converts a slightly absurd suggestion into a genuinely useful piece of information, which is that you are one ingredient away from three meals rather than zero away from one.

## Decide when it speaks, because timing is most of the value

A dinner suggestion at nine in the morning is noise. The same suggestion at half past five is the entire product.

| When it arrives | What happens |
|---|---|
| Morning | Read, forgotten by evening |
| Mid afternoon | Occasionally useful, if you shop on the way home |
| 17:00 to 18:00 | The decision window, and the right default |
| After 19:00 | Too late; the decision is already made or ordered |
| On demand only | Works, but you have to remember to ask |

The late-afternoon slot is doing something specific: it arrives while there is still time to act on a missing ingredient, and before the point where tiredness makes ordering the default. Half an hour either side of that changes the outcome more than any improvement to the suggestions themselves.

The on-demand version is a reasonable fallback and it is a different tool. Asking requires you to already be thinking about dinner, which means the decision fatigue has already started, and the value of the scheduled version is that it arrives before you have begun to dread the question.

## Let it be wrong without consequence

The last thing, and it is why this survives when more ambitious versions do not.

Nothing happens if you ignore it. No follow-up, no record of whether you cooked, no note that you ordered again. The bot proposes and stops, and the absence of any observation is what keeps it costless to disregard on the evenings when you had already decided.

The moment it starts tracking whether you took its advice, it becomes a thing with an opinion about your week, and a small daily suggestion that carries mild judgment gets muted quickly. Three suggestions, no memory of whether you used them, and no comment about the takeaway on Friday. That restraint is the feature, and it is the one most likely to be optimised away by somebody improving the thing six weeks in.

## Answer the objection that a recipe app already does this

The fair version: recipe apps have had pantry features for years, they have far larger recipe databases, and a bot with a text list is a worse version of a solved problem.

Mostly right, with one difference that matters.

Recipe app pantry features are built to sell you recipes, so the incentive runs toward proposing a dish and listing what you would need to buy. That is a different product from one whose job is to use up the coriander, and the incentive shows in the output: apps will happily suggest something requiring three items you do not have, because the shopping list is a feature rather than a failure.

The bot version has no such incentive, and can be told plainly that a suggestion needing a shop is a bad suggestion at seven in the evening. That is a charter line, not a technical capability, and it is the whole difference.

Where the objection wins outright: if you cook from a repertoire you already know and your problem is variety rather than decision, an app with a big database is genuinely better and this is not for you.

## Stop using this page when the shape is different

This page is a private decision aid working from an inventory you maintain. It stops applying in three places.

If the constraint is nutrition or a specific diet rather than what is in the fridge, that is a different job with different sources and this framing will fight you. If you want the bot to actually order, that crosses the boundary described above and belongs in [approval gates](/blog/approval-gates-for-bots) rather than here. And if the real problem is that you never have anything in, the fix is upstream in shopping rather than in a dinner bot at all.

Bots that help: [What Should I Cook](/bots/what-should-i-cook) is this charter as a listing, including the never-orders boundary. [Grocery Autopilot](/bots/grocery-autopilot) handles the shopping side and stops before checkout. [Amazon Cart Builder](/bots/amazon-cart-builder) is the same pattern for a different basket. And [Personal CFO](/bots/personal-cfo) is where the money question lives if the real issue turns out to be spend rather than dinner.

## Frequently Asked Questions

### Why rank by expiry rather than by what sounds good?

Because it changes what the tool is for, and the new job is more defensible. Ranking by appeal makes it a recipe recommender competing with apps that have far larger databases. Ranking by what goes off first makes it a waste-reduction tool that happens to answer the question you were about to ask anyway, and it surfaces meals you would never have reached, since nobody plans dinner around the herbs. Say the reason on each line, because without it a slightly unusual suggestion just reads as a bad one.

### Why exactly three options?

One reads as an instruction and gets resisted, and ten is a second problem at the moment you were trying to solve the first. Three is enough to feel like a choice and few enough to decide from in about ten seconds, which is the real budget at that time of day. Attach a realistic time to each, because the gap between fifteen minutes and fifty is usually what actually decides it, and put anything missing on the same line rather than leaving it to be discovered at step four.

### Should the bot ever say there is nothing to cook?

Yes, and giving it that permission is what makes the rest believable. A bot that must always return three options will pad on the evening the fridge is genuinely empty, and the padded suggestion costs more than that one evening: the next genuinely good suggestion is not trusted. One missing ingredient at seven in the evening is a takeaway, and a tool that says so plainly is one you believe the rest of the time. This generalises beyond dinner to any bot that cannot return nothing.

### What stops the pantry list from going stale?

Update on the way in rather than the way out, since adding shopping as you unpack it is one moment and roughly accurate, whereas recording things as you use them never survives a busy week. Keep the list rough: categories rather than counts, because "some chicken" is enough to propose a traybake and demanding exact weights is how a list dies. Then have the bot state its own confidence based on the list age, and refuse outright if there is no list, because a dinner bot without an inventory is just a recipe app.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Storyboard the Scenes Before You Generate a Single Shot',
  description:
    'Storyboard before you generate any shot, catch state-jump cuts on paper, lock continuity, and give every scene a pasteable prompt plus a review rule.',
  date: '2026-08-31',
  category: 'Tutorial',
  content: `
# Storyboard the Scenes Before You Generate a Single Shot

Mira had six polished clips and no usable sequence. In shot 03, a woman held a phone upright in her left hand and tapped Start with her right index finger. Shot 04 opened on the same phone lying flat on a walnut desk, held by a different sleeve, with the timer already finished. Each clip looked plausible alone. Put together, the hand, phone, surface, wardrobe, and moment in the action all changed during one cut.

Call this a state-jump cut. The outgoing state of one shot cannot become the incoming state of the next without an event the viewer never saw. It is more expensive than an ugly frame because regenerating shot 04 may disturb the face, lighting, screen, or product shape that already worked. The error began before generation. Two prompts described two attractive scenes, but nobody specified the physical handoff between them.

This tutorial gives you a storyboard before you generate workflow built around that handoff. You will write each card as a contract with an incoming state, one visible change, and an outgoing state. You will test the contracts as text, draw cheap frames, lock continuity, and only then generate. The [Grok Imagine Storyboard bot](/bots/grok-imagine-storyboard) can maintain the packet. The [Ad Creative Generator](/bots/ad-creative-generator) can supply sourced copy angles, but it does not decide whether two shots can cut together.

## Name the state-jump cut before you open a generator

A storyboard is not a gallery of images you hope to make. It is a plan for changes across time. The key question is not whether scene 04 looks good. Ask whether the first visible moment of scene 04 could follow the last visible moment of scene 03.

Write the state on both sides of every cut. State includes the character, wardrobe, prop position, screen condition, direction of movement, lighting motive, time of day, and information the audience already knows. You do not need to freeze every pixel. You need to freeze anything whose unexplained change would make the viewer notice the edit instead of the story.

The state-jump cut often hides inside ordinary prompt language. One prompt says, “close shot of a runner starting a timer.” The next says, “overhead product shot showing a completed interval.” Both are clear as isolated pictures. Neither explains how the phone moved from the runner's hand to the desk, how much time passed, or whether completion is a result, a flash-forward, or a mistake.

Use a hard diagnostic: read the outgoing-state cell of one row, then the incoming-state cell of the next. If they differ, point to the storyboarded event that causes the difference. If no event exists, do not generate either shot yet.

| Cut condition | What the viewer sees | What caused it | Decision before generation |
|---|---|---|---|
| Phone upright to phone flat | A prop teleports and rotates | Nothing on the board | Add a placement shot or keep it upright |
| Blue sleeve to bare arm | Wardrobe changes mid-action | Nothing on the board | Lock the sleeve or mark a time jump |
| Timer at 00:01 to completed | Time disappears | A declared time compression | Add a visual transition and label elapsed time |
| Movement left to movement right | Subject appears to reverse | Camera crossed the action line | Move the camera or make the crossing visible |

This table is not a generation checklist. It is an editability check. A model can render all four rows beautifully and still leave you with four failures.

## Write the audience change in one sentence before you list scenes

Start with the change you want in the viewer, not with a camera move. Write one sentence in this form: “The viewer begins believing X and ends understanding Y because they saw Z.” This is a local planning constraint, not a platform rule.

For Mira's timer demo, the sentence was: “The viewer begins thinking setup will interrupt a run and ends understanding that one visible tap starts a simple interval because they saw the runner move from hesitation to motion.” That sentence rules out several tempting shots. A skyline does not prove the tap. A rotating phone beauty shot does not show interruption disappearing. A completed-results dashboard may belong in another video.

Make every scene earn its place against the change. If a scene supplies no new fact, emotion, or causal step, remove it before it becomes an expensive clip. If two scenes do the same job, choose the one with the easier continuity contract. The purpose sentence also prevents the generator from becoming the writer. Generation renders decisions. It should not decide what the audience must understand.

Keep this sentence at the top of the storyboard packet. When someone asks for “one more cinematic opener,” compare it with the sentence. If the opener delays or contradicts the promised change, it is a separate asset, not scene 00 quietly added to this sequence.

## Lock every factual claim to the source brief before you visualize it

Images make invented claims feel true. A generated screen can show a feature the product does not have. A package can acquire a certification mark. A fictional result can appear as a convincing chart. Storyboarding is the last cheap moment to stop those mistakes because every visible claim still exists as text.

Create a source ledger beside the beat sheet. A scene may visualize a claim only when the brief points to an approved source. If the source is missing, mark the claim blocked. Do not ask the generator to “make a realistic dashboard” and accept whatever labels appear. Replace the screen with an approved mock, crop it out, or stop the scene.

| Story element | Required source | Allowed storyboard treatment | Failure response |
|---|---|---|---|
| Product shape and controls | Approved product reference | Match visible form and named controls | Block generation if the reference is absent |
| Screen text | Approved UI capture or copy deck | Quote exact approved words | Use a blank placeholder, never invented UI copy |
| Performance result | Approved evidence named in the brief | Show only the supported result | Remove the number or result scene |
| Brand mark | Approved asset folder | Use the supplied mark and placement rule | Flag any improvised mark for rejection |
| Person or customer story | Consent record and approved story | Show only the agreed scope | Replace with a non-identifying setup |

The [bot output verification method](/blog/bot-output-verification) goes deeper on claim ledgers. Here the job is narrower: stop unsupported facts before they become pixels that look authoritative.

## Turn the story into beats that each perform one visible job

A beat is the smallest change the audience must register. Write beats before shots because one beat may need two shots, and one shot should not carry five unrelated changes. Mira used seven arbitrary beats for a short demo: hesitation, phone ready, finger approaches, tap registers, runner moves, interval continues, benefit lands.

Phrase each beat as subject plus visible verb plus result. “Phone close-up” is a noun phrase and hides the event. “The thumb taps Start and the control changes state” can be directed and checked. “Runner lifestyle” is atmosphere. “The runner glances once at the active timer, pockets the phone, and accelerates” is an observable action.

Do not assign durations yet. First read the beats aloud in order. After every line, say “therefore” before the next. Hesitation, therefore phone ready, therefore finger approaches, therefore tap registers. If you need “meanwhile,” “somehow,” or “later” to rescue the logic, add a beat or declare a time transition.

Your beat sheet should be boring enough to debug. Style comes later. This is where you discover that the proposed hero frame shows the result before the cause, or that the script says the runner is already moving while the board shows a stationary tap. Repairing seven lines takes minutes. Repairing seven generated clips invites attachment to the prettiest wrong take.

## Give every scene an incoming state, one change, and an outgoing state

Now convert each beat into a scene contract. The contract has three state fields and one proof field. Incoming state says what must already be true in the first usable frame. Visible change says the action this scene owns. Outgoing state says what must be true in the last usable frame. Proof says what the viewer should understand after watching it.

| Scene | Incoming state | One visible change | Outgoing state | Proof delivered |
|---|---|---|---|---|
| 01 | Runner stopped, phone pocketed | Runner checks the track and hesitates | Runner reaches toward pocket | Starting feels like friction |
| 02 | Hand at pocket, phone unseen | Phone comes out upright in left hand | Start screen faces runner | Setup is ready |
| 03 | Phone upright, Start visible | Right finger taps once, control changes | Active timer visible, hands unchanged | One tap started the interval |
| 04 | Active timer upright in left hand | Runner pockets phone | Phone disappears into same pocket | Setup is finished |
| 05 | Phone pocketed, runner stationary | Runner pushes forward | Runner exits frame toward camera left | Motion begins without another setup step |
| 06 | Runner moving toward camera left | Pace settles while interval continues | Runner maintains direction and wardrobe | The interval runs in motion |

The exact scene count is arbitrary. The contract shape is the method. Scene 03 cannot end with the phone flat on a desk because scene 04 begins with it upright in the left hand. If you want the desk composition, storyboard the placement, announce a new time and location, or build another sequence.

Write only one visible change per scene when continuity is fragile. A single clip can contain several motions, but each extra motion creates another state that the next generation must preserve. Split compound action at a natural edit point before you pay for variants.

## Draw ugly cards that expose logic without creating attachment

Draw rectangles with stick figures, arrows, prop blocks, and screen labels. You are testing composition and causality, not auditioning an art style. An ugly card is useful because nobody argues that it is too beautiful to discard.

Use one card per scene contract. Mark the first usable frame on the left side and the last usable frame on the right. Draw an arrow for subject movement and a second arrow for camera movement. Put the key prop in a consistent hand. Label the screen state with plain text such as START VISIBLE or TIMER ACTIVE. If a card cannot show the one visible change, the contract is still vague.

Then cover the captions and ask a reviewer to narrate the sequence. If they say “the phone suddenly moved” or “I thought the runner turned around,” do not explain your intention. Record the confusion. A storyboard that needs its author standing beside it is not ready to brief a generator.

You can use paper, a slide deck, or a design file. Tool choice does not matter. The cards must remain quick to revise and must preserve stable scene IDs when reordered. Do not renumber silently after review, because comments and prompt filenames will point at the wrong scene.

## Pin a continuity bible beside every prompt

The continuity bible lists the facts that must remain stable across a connected run. Keep it shorter than the prompts. It is a constraint card, not a novel. Separate locked traits from scene-specific changes so a later prompt does not accidentally freeze something that should move.

Lock the character description, wardrobe, prop version, prop hand, environment, time of day, dominant light direction, color family, screen design, and movement axis. Give each a testable value. “Consistent outfit” cannot be checked. “Slate long-sleeve top, sleeves to wrist, no visible logo, black running shorts” can.

| Continuity field | Locked value for Mira's board | Allowed change | Rejection trigger |
|---|---|---|---|
| Wardrobe | Slate long-sleeve top, black shorts | Natural fabric movement | Color, sleeve length, or logo changes |
| Phone | Plain dark case, no visible brand | Screen moves from Start to Active | Case color, camera layout, or size changes |
| Hand | Phone remains in left hand through scene 04 | Right finger may tap | Phone appears in right hand before pocketing |
| Location | Outdoor track at early morning | Background angle may change within the axis | Desk, gym, or night lighting appears |
| Movement | Runner travels toward camera left | Speed increases | Direction reverses without a turn shot |
| Screen | Approved Start and Active mock states | One state change after tap | Invented metric, label, or result appears |

Repeat the locked values in prompts where they matter. Do not assume one generation remembers another. Also do not treat repetition as a guarantee. The continuity bible gives you a rejection basis. It does not force a generation system to obey.

## Mark screen direction and the action line before you choose camera angles

When a character moves left across one shot, the next shot should normally preserve that perceived direction unless you show the turn or deliberately reset the geography. Draw an action line through the scene and keep camera positions on one side during the connected action. This is a filmmaking rule you can bend when you understand the effect. It is not a model setting.

Mira's board placed the runner traveling toward camera left in scenes 05 and 06. An attractive alternate for scene 06 placed the camera across the track. That made the runner travel right. The shot was individually stronger and sequentially wrong. The board caught it as an arrow pointing the wrong way.

Eyelines need the same treatment. If the runner looks down and frame right at the phone, the insert should place the phone where that look lands. A centered floating phone may read as an advertisement rather than the object in the runner's hand. Mark eyeline with a dotted arrow on both cards.

Camera motion also has state. A push-in ending close cannot cut to another push-in that begins wide without a reason. Label whether the camera is locked, panning, tracking, or moving closer. You are not banning changes. You are requiring the board to show where they happen.

## Reserve edit handles around the action instead of generating only the moment

A clip that begins on the tap and ends on the changed screen gives the editor nowhere to enter or leave. Specify a clean hold before the action and another after it. The exact duration is a production choice. What matters is that both handles exist and contain stable state.

Write handles into each shot instruction: begin with the phone steady and Start visible; hold; perform one tap; show the control change; hold with the active state readable. If the output starts halfway through the finger movement, reject it even if the final frame is attractive. It does not satisfy the incoming-state contract.

Handles also reveal whether a scene carries too much. “Runner pulls phone, unlocks it, finds the app, taps Start, pockets it, and launches” has no stable place to cut if any middle action mutates. Split it at held states: phone presented, Start visible, active state visible, phone pocketed. Those states become edit points and regeneration boundaries.

Ask for ambient motion only when it does not erase the handles. Hair, fabric, steam, traffic, and handheld camera movement can make every frame unstable. A clean handle need not be frozen, but the prop, pose, and screen state must remain readable long enough to join the next shot.

## Walk Mira from six polished clips to one repairable board

Mira's first attempt began with six prompts written from a voiceover. She generated a wide track opener, a medium hesitation shot, a phone close-up, an overhead results shot, a running profile, and a sunset end card. The clips shared a color mood. They did not share a continuous event.

At the first assembly, shot 03 ended after the tap. Shot 04 began on a desk with a finished timer. Mira tried trimming around the jump, but fewer frames made the teleport faster. She tried placing the wide running shot between them, but that implied the runner started before pocketing the phone. A dissolve made the missing action softer, not logical. This was the state-jump cut.

She stopped generating and wrote the audience-change sentence. The completed-results shot failed it because the sequence only needed to prove a simple start, not a finished workout. She removed the desk shot, split the phone action into present, tap, and pocket states, and drew movement arrows for the first running shots.

Next she made the continuity bible: one slate top, one dark phone case, left-hand hold, approved two-state screen, track location, morning light, travel toward camera left. She wrote incoming and outgoing states for six scenes, then asked another editor to narrate the cards without captions. The editor correctly described hesitation, one tap, pocket, and launch.

Only then did Mira generate replacements for scenes 02 through 06. Scene 03 needed another take because the case changed color. Scene 05 needed another because the runner exited right. Those were contained failures with named rejection rules, not vague dissatisfaction. The resulting cut had fewer visual ideas than the first batch and one complete action. The storyboard did not make every generation correct. It made every incorrect generation diagnosable.

## Score the silent board before you spend on variants

Run a paper edit. Put the cards in sequence, hide their explanatory notes, and let one person who did not write them score the board. Use pass or fail rather than a soft average. A single broken state can make the central action unreadable even if every other row passes.

Score five questions. Can the reviewer identify the subject and goal? Can they say what changed in each scene? Does every outgoing state connect to the next incoming state? Does screen direction remain legible? Does every visible product claim have a source? The five-question count is a local test fixture, not a universal benchmark.

Record the first scene where the reviewer becomes confused. Repair that card and the card before it. Confusion often appears one scene late because the viewer holds an assumption until the next image contradicts it. Do not rewrite the whole board after one failure unless the purpose sentence changed.

After the silent pass, read the voiceover over the cards. Check that the picture does not reveal a result before the narration introduces it, and that the narration does not claim an action the board omits. If a line needs a new visual fact, add a beat and rerun the paper edit.

## Paste a bot charter that stops at an approved generation packet

Use a bot to collect sources, maintain stable scene IDs, build the state contracts, and prepare prompts. Keep its boundary explicit: it never generates, uploads, shares, publishes, or sends the shots. That line separates planning from outward action and keeps a flawed board cheap to discard.


\`\`\`text
You are Storyboard Gate, a pre-generation planning bot for [project name].

PURPOSE
Turn the approved brief into an edit-ready storyboard packet. Do not generate
media. The output is a plan that a human reviews before any generation begins.

INPUTS
- /workspace/storyboard/[project]/brief.md
- /workspace/storyboard/[project]/approved-sources.md
- /workspace/storyboard/[project]/approved-assets/
- The audience-change sentence supplied by the operator

If any required input is missing, name it and stop. Do not invent product
facts, UI text, prices, results, people, locations, or brand assets.

WORK
1. Build a beat sheet. Each beat must use a subject, visible verb, and result.
2. Give every scene a stable ID that is never silently renumbered.
3. For every scene, write incoming state, one visible change, outgoing state,
   proof delivered, source, camera, movement direction, and edit handles.
4. Build a continuity bible for character, wardrobe, prop, screen, location,
   light, color, eyeline, and movement axis.
5. Compare every outgoing state with the next incoming state. Mark BLOCKED when
   they differ without a storyboarded event.
6. Write one pasteable generation prompt per unblocked scene. Repeat the
   relevant continuity constraints and include a rejection rule.
7. Write storyboard.md, continuity.md, prompts.md, and review.csv under
   /workspace/storyboard/[project]/packet/.
8. Return the folder path and a list of every blocked scene.

BOUNDARY
Never click Generate. Never create an image, video, or audio file. Never open
a publishing surface. Never upload, post, schedule, share, email, or send a
storyboard, prompt, asset, or generated shot. Never create a public link.
The operator approves the packet and performs every generation and release.

PASS CONDITION
Every visible claim has an approved source. Every scene has one visible change.
Every outgoing state matches the next incoming state or names the transition.
If any condition fails, return BLOCKED with the exact scene IDs and stop.
\`\`\`

The [Grok Imagine Storyboard listing](/bots/grok-imagine-storyboard) covers a private creative pipeline. This charter is deliberately narrower because its output is the gate before generation. If you later use a different bot for files or clip handling, remember that separate bots do not isolate credentials. All bots on one account share one computer, and their screens are work surfaces rather than security boundaries.

## Generate anchor states before you request motion between them

After the board passes, generate the states that carry the most continuity risk before the decorative shots. For Mira, those anchors were Start visible, finger contact, Active visible, and phone pocketed. If the product shape or approved screen cannot hold across those states, there is no reason to spend time on the skyline or end card.

Generate in dependency order, not necessarily scene order. A wardrobe and location anchor can come first. Then test the prop and screen states. Then request motion that connects approved anchors. Decorative cutaways come after the main action can be assembled.

Do not confuse an anchor image with proof that motion will interpolate cleanly. It is a reference and a review target. The generated clip still has to begin and end on the contracted states. Reject a clip whose middle looks exciting but whose first or last usable frame breaks the handoff.

Name files with stable scene and take IDs, and record the prompt used for each. The companion guide on [keeping Grok Imagine storyboard output private](/blog/grok-bot-grok-imagine-storyboard) covers folder and release boundaries. This page stays focused on whether the shots can become one edit.

## Review the contact sheet against contracts instead of choosing the prettiest take

Place the last usable frame of scene 03 beside the first usable frame of scene 04. Repeat across every cut. A normal contact sheet showing one favorite frame per clip can hide the state-jump cut because it rarely displays the boundary frames that actually touch.

Build a cut sheet with two frames per scene: incoming and outgoing. Add the scene contract below them. Mark pass, reject, or repair. Reject names the violated rule. Repair names whether you will regenerate the current scene, change the next scene, or revise the board. Do not write “feels off.” Write “phone changes from left hand to right hand between 03 out and 04 in.”

Beauty matters after contract compliance. When two takes both pass, choose for expression, texture, timing, or composition. When the beautiful take fails and the plain take passes, use the plain take or regenerate. Letting beauty overrule continuity recreates Mira's first batch.

The [Podcast Clip Desk](/bots/podcast-clip-desk) begins from an existing timestamped span and drafts around it. That workflow does not need this pre-generation state contract because its source footage already exists. It needs a different verification surface.

## Answer the producer who says storyboards kill useful surprise

The strongest counter-argument is not that storyboards take too long. It is that generation earns its place by producing ideas nobody would have drawn, and a strict board can reduce the tool to an expensive rendering engine. That concern is valid for exploration. It does not justify asking exploration and final-sequence production to share one unlabeled folder.

Split discovery from assembly. Run a bounded exploration pass for style, compositions, locations, or transitions. Treat every result as a reference, not as scene 04. Once you choose the visual language, write the state contracts for the sequence and generate against them. Surprise remains welcome inside a contract when it does not alter the required incoming state, visible change, outgoing state, claim, or boundary.

If a surprise improves the story enough to change a state, update the board first. Propagate the change forward, rerun the silent review, and then regenerate affected scenes. This is not bureaucracy around creativity. It is version control for decisions that cross a cut. The board tells you which later shots the new idea invalidates.

## Stop using this page when the source footage already exists

This page stops applying when your primary task is selecting moments from footage that has already been recorded. Existing footage has fixed states. Your job becomes logging, transcript verification, rights review, and edit selection. Use a clip workflow such as [building a YouTube transcript desk](/blog/grok-bot-youtube-transcripts) rather than inventing pre-generation contracts after the fact.

It also stops applying to a single standalone image with no implied before or after. You still need source checks, art direction, and a publication boundary, but there is no adjacent cut to reconcile. For open-ended visual research, use an exploration board that labels outputs as references. Do not pretend it is an edit-ready storyboard.

Finally, stop and move to incident handling if an unreviewed asset has already been published or sent. Storyboarding cannot reverse outward action. Preserve the exact file, prompt, destination, and time, contain the release through the surface that received it, and investigate the process separately. A planning packet helps prevent the next failure. It does not undo this one.

## Frequently Asked Questions

### What does storyboard before you generate mean?

Storyboard before you generate means deciding the sequence, visible action, continuity rules, and evidence for each scene while every change is still cheap text or a rough drawing. Each scene receives an incoming state, one visible change, and an outgoing state that must connect to the next scene. Only after a silent review proves those handoffs do you write final prompts and generate media. The method prevents a state-jump cut, where individually convincing shots cannot be edited together because a prop, person, screen, direction, or moment changes without explanation.

### How detailed should an AI video storyboard be?

An AI video storyboard should be detailed wherever an unexplained change would break the edit. Lock character, wardrobe, key props, screen state, location, light direction, movement axis, eyeline, and the first and last usable state of each scene. Leave texture and decorative detail open when they do not affect continuity or claims. The practical test is simple: another person should be able to narrate the action from the cards without your explanation and identify exactly how every outgoing state becomes the next incoming state.

### Should I generate shots in storyboard order?

You do not have to generate shots in storyboard order. Generate the highest-risk anchor states first, such as the approved product view, a critical screen change, a hand position, or the wardrobe and location reference. Then generate the motion that connects those anchors. This dependency order tells you early whether the sequence can hold its defining constraints. Keep stable scene IDs even when generation happens out of order, record every prompt and take, and review the actual incoming and outgoing frames in story order before choosing a final take.

### Can a bot generate and publish after the storyboard is approved?

Approval of a storyboard should not silently authorize generation or publication. Those are separate actions with different consequences, accounts, and review needs. Give the planning bot a boundary that ends at an approved packet, then let a human perform generation and release through the intended tools. If you add another bot, do not treat its separate name or screen as credential isolation because bots on one account share one computer. A public bot share link copies configuration only; it does not copy the computer, logins, or conversation history.
`,
};

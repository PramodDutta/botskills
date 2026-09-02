import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Mining a Forum Without Becoming a Participant',
  description:
    'Use bots and Reddit for disciplined read-only research, preserve evidence, protect established accounts, and turn forum signals into reviewable briefs.',
  date: '2026-08-31',
  category: 'Guide',
  content: `# Mining a Forum Without Becoming a Participant
Reddit research goes wrong when a bot that was hired to observe starts behaving like a community member. A single vote, comment, follow, message, or post changes the forum it was supposed to study. It can also expose an established account whose history belongs to a human, not to the research job.

The useful setup is narrower. Your bot reads material that you are permitted to access, records exact links and quotations for a human reviewer, groups recurring language, and stops. It does not build karma, warm an account, test a reply, or join a community. Read-only is not a timid first phase. It is the finished operating model.

This distinction matters because forum research is unusually easy to contaminate. People speak differently when they believe a seller is present. Voting changes ranking. Replies redirect discussion. Direct messages move evidence out of the public thread. If your goal is to learn what people already say, participation is a measurement error as well as a trust problem.

This guide gives you a pasteable charter, a collection method, a failure walkthrough, and a review contract for bots and Reddit. It does not grant permission to scrape Reddit. Reddit's current User Agreement restricts automated collection except where its terms or a separate agreement permit it. Your approved access path comes before your prompt.

## Draw the boundary before opening Reddit

Write the non-negotiable line first: the bot may observe and summarize permitted material, but it may never take an action that changes Reddit or contacts a person. Put that line in the charter, the test plan, and the reviewer checklist. A boundary that appears only in a paragraph of background is too easy to lose during a long run.

Read-only means more than "do not post." Reddit has several smaller participation controls. Voting, saving, hiding, joining, following, reporting, opening chat, sending mod mail, and changing account preferences all alter state. Typing into a composer is also unnecessary risk. The bot should not draft inside Reddit, even if a human promises to review before submission. Draft in the report workspace instead.

| Surface | Bot may do | Bot must not do | Human review artifact |
|---|---|---|---|
| Public thread | Read through an approved path | Vote, save, hide, report, or reply | URL, title, date observed, excerpt |
| Community page | Read rules and public context | Join, follow, mute, or request access | Rule note and scope note |
| User profile | Avoid unless necessary for the question | Follow, message, infer identity, or compile a dossier | Reason for inclusion |
| Composer | Never open intentionally | Type, preview, or submit | Draft outside Reddit, if requested |
| Account settings | Observe nothing unless setup requires it | Change any preference or security control | Human-owned setup record |

The botskills.sh boundary is the action a bot never takes without a human. Here, the safer line is stronger: the bot never takes outward Reddit actions at all. A human can separately decide to participate, using their own judgment and their own session. Research remains an observation job.

## Choose a permitted access path before collecting a single thread

A prompt cannot turn prohibited collection into permitted collection. Reddit's official User Agreement says access, search, and collection must be allowed by its terms or by a separate agreement, and it prohibits scraping without prior written consent. If your intended volume or method needs an API, licensed source, or written permission, obtain that path before running a bot.

Do not instruct a browser bot to defeat a login challenge, rotate identities, bypass request limits, or imitate random human behavior. Those are not research refinements. They are warning signs that the access method is outside its intended lane. Stop and have the owner verify the terms and the approved mechanism.

For a small, human-paced review, define the exact pages a person would otherwise read and keep the collection finite. For a larger program, route through the access your organization has actually approved. This article deliberately gives no request rate, page allowance, or collection quota because those figures can change and your agreement may differ.

| Question | Acceptable evidence | Stop condition | Owner |
|---|---|---|---|
| Is this page public and in scope? | Recorded URL and approved research brief | Login, private community, or access warning appears | Research lead |
| Is automated access permitted? | Current terms, API terms, or written agreement | Permission is unclear | Legal or policy owner |
| Is the run staying within scope? | Finite query list and run log | Bot expands into unrelated communities | Operator |
| Can the output be retained? | Approved retention rule | Personal data exceeds the research need | Data owner |

Record the basis for access beside the run. "It loaded in a browser" is not a basis. Neither is "other tools do it." The operator should be able to point to the approved path without reconstructing the decision after a complaint.

## Treat account age as risk, not permission

Account age matters on Reddit, but not because an old account gives a bot moral or technical permission to participate. Reddit documents that communities can use account age in posting eligibility and AutoModerator rules. Reddit also documents broader contributor-quality and reputation signals that can include past account actions, verification, network, and location signals. Age is one input around participation, not a transferable badge of trust.

That makes the common "use an aged account" instruction backwards. An established account has more to lose. It may carry years of human posts, subscriptions, preferences, community standing, and private activity. Connecting it to an observing bot expands the consequences of a mistaken click or an exposed session. Buying, borrowing, or cultivating an account for automation does not create legitimate standing. It adds identity and provenance problems to the research job.

New accounts are not a workaround either. Some communities can restrict posts based on minimum account age, karma, verification, or related signals. But a research bot should never need to pass a posting threshold, because it should never post. If the plan depends on aging an account until it can contribute, the plan has quietly changed from observation to participation.

Use account age as a diagnostic question: whose history and standing would be affected if the bot acted? The older and more personally meaningful the account, the stronger the reason to keep its authenticated session away from the research environment. Age raises the asset value. It does not lower the control standard.

## Separate observation from the signed-in human identity

Prefer public, logged-out viewing when the approved access path supports it. A logged-out session removes many accidental action surfaces and makes the boundary easier to test. If approved research genuinely requires authentication, use an organization-controlled account whose purpose, owner, recovery method, and permitted behavior are documented. Do not quietly reuse a founder's personal Reddit session.

This separation must account for the runtime itself. Grok Bot assigns one persistent cloud computer to the account, not one computer to each Bot. Separate bots receive separate screens, but those screens are not security boundaries. Browser cookies, signed-in sessions, files, and command-line credentials are shared across bots on that account. Creating a "Reddit Research" bot beside another bot does not isolate the Reddit login.

The practical consequence is plain. If any bot on the shared computer can reach an established Reddit session, naming a separate research bot does not protect it. Inventory the whole computer before the run. Sign out or remove credentials that are not required. Do not assume deleting a Bot cleans up browser sessions or files, because it does not.

| Setup | Research value | Main risk | Decision |
|---|---|---|---|
| Logged-out public view | High for many discovery questions | Some pages may be unavailable | Prefer when permitted |
| Organization-controlled research account | Useful when approved authentication is required | Account can still act and gather history | Use only with documented ownership |
| Operator's established personal account | Little unique research value | Personal history, standing, and private surfaces are exposed | Do not connect |
| Separate Bot on the same account | Organizational convenience only | Cookies and credentials remain shared | Never treat as isolation |

If you need a deeper explanation of inherited sessions and files, read [what a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits). The bot name is an organizational label, not a credential vault.

## Narrow the question until the bot cannot roam

"Research what Reddit thinks about our product" is not a research question. It invites open-ended browsing, brand surveillance, identity collection, and selective quotation. Replace it with a bounded question that identifies the decision, communities, time window, evidence types, exclusions, and stopping point.

A useful brief might ask: "Within the approved set of twelve public threads already listed by the researcher, identify repeated complaints about onboarding instructions. Preserve exact URLs and short excerpts. Exclude jokes, deleted material, usernames, private pages, and claims that appear only once. Stop after all twelve threads are reviewed." The number twelve is an arbitrary project choice, not a Reddit allowance.

The bot must not expand scope because a profile, crosspost, or suggested community looks interesting. It can place a link in a "possible follow-up" field without opening it. That keeps discovery visible while preserving the human's authority over the next collection boundary.

Write exclusions as actions, not topics. "No personal data" is vague. "Do not open author profiles, record usernames, infer identity, or combine activity across communities" is testable. "No engagement" is vague. "Do not vote, join, follow, save, report, message, comment, or post" can be checked against the action log and screen recording.

## Capture claims with enough context to survive review

A research summary without source context becomes a rumor with nice formatting. For every included claim, capture the thread URL, post or comment level, observation date, a short excerpt, and the reason it answers the brief. Preserve whether the excerpt came from an original post or a reply. Do not flatten disagreement into consensus.

The reviewer should be able to reopen the exact context and decide whether the bot read it fairly. A screenshot can help with layout or deleted-context risk, but it does not replace a URL and textual excerpt. If a page cannot be preserved under your approved method, mark that evidence as unavailable rather than reconstructing it from memory.

| Field | Required value | Reject when |
|---|---|---|
| Source | Direct thread or comment URL | It points only to a search page |
| Observed | Calendar date of review | Date is missing |
| Evidence | Short exact excerpt with nearby context summarized | Paraphrase is presented as a quotation |
| Relevance | One sentence tying evidence to the research question | Connection is implied |
| Limits | Sarcasm, deletion, edits, or ambiguity noted | Tone is treated as certain without support |
| Identity | Omitted unless essential and approved | Username is copied by default |

Do not ask the bot to create a clean narrative too early. First collect evidence cards. Then cluster them. Then draft the brief. This order lets a reviewer challenge a cluster without losing the underlying material.

## Distinguish repeated language from representative opinion

Reddit is not a representative survey. A visible thread reflects who chose to participate, community rules, moderation, ranking, timing, and the wording of the original post. Upvotes are not a clean vote on your product question. A highly ranked joke can outrank a careful minority report. A deleted reply can remove the premise of a surviving response.

Describe what the dataset supports. "Four of the reviewed threads used the phrase setup tax" is a bounded observation if you preserved those four sources. "Customers believe setup is too hard" reaches beyond the sample. The first statement can inform a hypothesis. The second pretends you measured a population.

Keep frequency and importance separate. A rare comment may identify a severe failure. A repeated complaint may be copied from a common talking point. Ask the bot to label recurrence, specificity, and decision relevance independently. Do not turn a single score into truth.

Also preserve contradiction. If three excerpts praise control and two say the controls are confusing, the report should show both. The goal is not to manufacture a verdict. It is to give the decision-maker a compact map of the evidence that was actually reviewed.

## Score evidence without scoring people

Build a rubric around the material, never around the author. The bot can judge whether an excerpt is specific, firsthand in wording, corroborated within the approved set, recent enough for the decision, and connected to the question. It should not assign credibility from a username, avatar, claimed job title, writing style, account age, or karma.

Account history can tempt the bot into amateur background checking. Resist it. A profile tour increases personal-data collection and creates false confidence. Someone with an old account can be wrong. Someone with a new account can report a precise defect. Evaluate the claim and its observable support.

Use simple labels that expose judgment. "Direct description," "reported by another person," "opinion," "joke or sarcasm uncertain," and "cannot verify from thread" are more useful than a mysterious confidence percentage. When the bot is unsure, it should preserve the source and state the uncertainty, not smooth it away.

For a second-pass check, the [Citation Checker bot](/bots/citation-checker) can help compare claims with attached sources, while the [Claim Provenance Tracker](/bots/claim-provenance-tracker) gives you a stronger pattern for keeping each conclusion connected to its evidence. Neither bot changes the permission boundary for accessing Reddit.

## Preserve community context without copying the community

Each subreddit has its own rules, vocabulary, recurring formats, and moderation choices. Capture enough of that context to avoid obvious misreadings. A weekly complaint thread differs from a product announcement. A satire community differs from a support community. A flair can reverse the meaning of a title.

Do not respond by copying whole threads into your workspace. Collect the minimum excerpt needed to support the research claim, then keep the source URL. Large-scale copying creates retention, privacy, and rights questions that a better prompt cannot solve. If your project needs a corpus rather than a brief, stop and use an approved data arrangement built for that purpose.

Avoid quoting distinctive personal stories in presentations when a paraphrase with a source reference will answer the business question. Forum posts may be public, but the people writing them did not necessarily imagine their words on an internal sales slide. Public accessibility does not erase context.

Treat deleted and edited material carefully. Note what you observed and when. Do not hunt for removed versions, cached copies, or mirrors unless your approved research purpose and access rules explicitly cover that work. The safe default is to mark missing context and reduce the weight of the claim.

## Strip identity before ideas enter the brief

Most product and market questions do not require usernames. Remove them at collection time instead of promising to clean them later. Do not store avatars, profile links, locations, employer guesses, writing histories, or cross-community activity unless a specific approved research question genuinely needs them.

This minimization improves analysis. Reviewers focus on the language and problem rather than speculating about the person. It also makes accidental sharing less harmful. Use neutral evidence labels such as R01-C03, which can mean the third comment card from the first reviewed thread. The mapping should not contain a username if no one needs one.

Be careful with quotations that identify a person even after the username is removed. A distinctive job story, rare medical detail, exact location, or unique sequence of events can remain identifying. Shorten or paraphrase for the working brief while preserving the direct source for the limited reviewer group, if your retention rule allows it.

Never ask the bot to infer demographic attributes, political identity, health status, purchasing power, or employment from forum behavior. If the decision requires sensitive profiling, this read-only market-research pattern stops applying. It needs a different legal, ethical, and methodological review.

## Keep a pasteable charter stricter than the interface

The charter should constrain navigation, interaction, collection, output, and escalation. It should also tell the bot what to do when Reddit presents a login wall, challenge, private page, composer, or unclear permission. "Use good judgment" is not a stop rule.

Paste this charter into the bot instructions, then replace the bracketed fields. The arbitrary limits belong to your research plan. They are not platform allowances.

\`\`\`text
BOT NAME: Reddit Read-Only Researcher

PURPOSE
Review only the public Reddit URLs supplied in APPROVED_INPUTS and produce an evidence brief for [DECISION].

APPROVED_INPUTS
- The exact URLs in [SOURCE_LIST]
- The question in [RESEARCH_QUESTION]
- The observation window [START_DATE] through [END_DATE]

ALLOWED ACTIONS
- Open an approved URL through the access method authorized by [OWNER]
- Read visible public post text, comments, community rules, dates, and flair
- Record a direct URL, observation date, short excerpt, context note, and evidence label
- Group evidence by recurring problem language and preserve disagreement
- Draft all output only in [REPORT_DESTINATION]

NEVER ACTIONS
- Never post, comment, reply, vote, save, hide, report, award, join, follow, chat, message, or send mod mail
- Never type in a Reddit composer or change account, community, notification, or privacy settings
- Never open user profiles, collect usernames, infer identity, or join activity across communities
- Never bypass a login wall, challenge, rate control, robots instruction, technical control, or access restriction
- Never expand beyond SOURCE_LIST, even through recommendations, crossposts, profiles, or search results
- Never copy an entire thread when a short evidence excerpt is sufficient

OUTPUT FOR EACH EVIDENCE CARD
- Evidence ID
- Direct URL
- Observation date
- Post or comment context
- Short excerpt
- Interpretation
- Contradicting evidence
- Uncertainty or missing context

STOP AND MARK BLOCKED IF
- Any approved URL requires unapproved login or private access
- The page opens a composer or asks for an outward action
- Permission for the access method is unclear
- A source requests personal-data collection outside this charter
- The bot cannot preserve a direct source for a claim
- Reddit or the browser presents a challenge or restriction

BOUNDARY
This bot observes permitted material and writes an internal draft. It never participates on Reddit. A human cannot approve an exception inside this run.
\`\`\`

That final sentence closes a common loophole. If participation becomes useful, end the research run. A human can start a separate communication process after reviewing community rules and deciding whether engagement is appropriate.

## Walk Mina from an old login to one accidental vote

Mina is an invented research operator preparing an onboarding brief on a Tuesday morning. She gives the bot ten approved public thread URLs and a sound read-only charter. The flaw is outside the prompt: the shared cloud computer still holds the authenticated Reddit session from Mina's established personal account.

At 09:20, the bot opens the first thread. The page is personalized because the account is signed in, but the bot continues. On the fourth thread, content shifts while the page is loading. A click intended to expand a collapsed reply lands on the vote control. The arrow changes state. The bot has now participated, even though it never wrote a comment.

At 09:22, the bot notices the changed control and removes the vote. That repair does not restore the premise that the run was read-only. It also proves the session could act with Mina's identity. The correct response is not to finish the remaining six threads and mention the incident in a footnote.

Mina stops the run, records the affected URL and time, preserves the evidence of what happened, and signs the account out of the shared computer. She checks which other bots can reach the same computer because separate bot screens do not isolate cookies. She discards the contaminated run rather than mixing pre-incident and post-incident evidence.

Before restarting, Mina tests in a logged-out environment. The test opens one fixture page, scrolls, expands a reply, and produces a local evidence card without changing any control. She then runs the ten-URL brief again. The incident turns account age into the correct lesson: Mina's established account was a valuable human asset exposed by an unnecessary session. Its age did not help the research.

## Answer the argument that public forums invite automated observation

The strongest counter-argument is straightforward: Reddit is public conversation, search engines index much of it, and manual researchers read it every day. A read-only bot does not speak, so why burden the job with strict access checks and identity controls?

Because "public" answers only one question: whether a person can encounter the page. It does not settle whether your automated collection method is permitted, whether your volume is acceptable, whether retained personal data fits your purpose, or whether an authenticated bot can accidentally act. Reddit's current User Agreement expressly governs automated and non-automated collection and prohibits scraping without prior written consent except as otherwise permitted.

Read-only reduces social harm, but it is not a universal license. The charter and the access basis do different jobs. Permission determines whether and how the bot may read. The charter prevents the bot from becoming a participant once it is reading. You need both.

There is still a valuable middle ground. A bounded evidence review through an approved path can save a researcher from repetitive reading without impersonating a community member or manufacturing consensus. The discipline is not bureaucracy around harmless data. It is how you keep observation from drifting into extraction, profiling, or covert engagement.

## Test the absence of actions before trusting the summary

Test what the bot does, not what its charter says. Use fixture pages or an approved low-risk test set. Confirm that the bot can scroll, open permitted context, collect a short excerpt, and produce a local card without touching a state-changing control. A successful summary is not a successful test if a vote or save happened along the way.

Plant at least eight test conditions as an arbitrary coverage set: a login wall, a private page, a deleted comment, an edited post, sarcasm, a profile link, a composer, and a page challenge. The expected result is a stop, exclusion, or uncertainty label, depending on the condition. None should trigger circumvention or participation.

| Test | Expected bot behavior | Failure signal |
|---|---|---|
| Composer appears | Close or stop without typing | Cursor enters the text box |
| Profile link appears | Record no identity and stay on scope | Profile opens |
| Login is required | Mark blocked | Credentials are requested or reused |
| Comment is deleted | Note missing context | Bot reconstructs absent text |
| Sarcasm is ambiguous | Preserve uncertainty | Bot reports literal sentiment as fact |
| Vote control is near target | Avoid the control | Vote state changes |
| Suggested thread appears | Leave it unopened | Source list expands |
| Challenge appears | Stop the run | Bot retries or bypasses it |

Review the browser history, visible state, output destinations, and any available action trace. Grok Bot does not currently provide an audit view of Bot actions, so do not claim the product can prove a perfect negative from a built-in audit log. Design the run to minimize action surfaces and keep human-observable evidence.

## Review the brief as a chain of evidence

Assign one human to review sources and another, when stakes justify it, to challenge conclusions. The first checks that excerpts match their linked context. The second asks whether contradictory evidence was excluded, whether the sample supports the wording, and whether a business recommendation outruns the forum material.

Keep findings separate from decisions. The bot may say that six evidence cards describe confusing terminology. It should not decide to rename a feature, publish a comparison page, or contact the authors. Those are downstream actions with different owners and evidence requirements.

The [Content Idea Generator](/bots/content-idea-generator) can turn an approved, de-identified brief into draft topics after the Reddit collection is closed. Keep that downstream bot away from the live Reddit session. If it proposes a reply campaign, reject the proposal as outside the research boundary.

For the broader handoff pattern, [the bot that never sends](/blog/bot-that-never-sends) explains why a completed draft can be the final bot output rather than a temporary stage before autonomous action. Forum research benefits from the same posture: evidence arrives for judgment, not for automatic publication.

## Share the method without sharing the session

A Grok Bot share link can copy the Bot's configuration. It does not transfer the computer, logins, or conversation history. That makes a public-safe version of the charter shareable, but it does not make another operator's environment equivalent to yours. They still need their own eligible access and must establish their own permitted Reddit path.

Strip secrets and confidential details before sharing because the configuration is exposed to anyone who receives the link. Remove internal hostnames, research questions, customer names, private source lists, report destinations, and tokens. Share the method as a template, not the active investigation.

Do not tell a recipient that the shared bot arrives "logged in" or carries learned account trust. It does neither. Account age belongs to a Reddit account, not to a bot configuration. The recipient's copy begins without your computer, your Reddit session, or your history.

This is also why reproducibility depends on evidence cards and explicit scope. Another reviewer can inspect the same approved URLs and rubric. They should not need your authenticated identity or a hidden conversation history to understand how the brief was formed.

## Stop using this page when research becomes engagement or bulk data work

This page stops applying when your objective requires posting, commenting, voting, messaging, recruiting participants, conducting customer interviews, moderating a community, or running an official brand account. Those jobs make you a participant. They need community-specific rules, identity disclosure, communication review, and an explicit human owner.

It also stops applying when you need a large corpus, continuous monitoring, training data, user-level profiling, private-community access, or recovery of deleted material. Use a licensed or otherwise approved data arrangement and obtain policy, privacy, and legal review suited to that program. A browser charter is not a substitute for a data agreement.

If your real need is primary customer research, recruit consenting participants outside this read-only workflow. If your need is public response, let a human decide what to say and where to say it after reading the community rules. Do not stretch an observation bot until it resembles a covert community manager.

The dividing line is useful because it is crisp. This method helps you learn from a finite set of permitted forum pages without changing them. Once changing the forum or systematically acquiring its data becomes part of the goal, choose a different operating model.

## Run a final preflight that can cancel the job

Before every run, confirm the source list, access basis, session state, exclusions, output location, reviewer, retention rule, and stop conditions. A previous successful run does not prove today's environment is safe. Cookies change, pages change, terms change, and someone may sign an account into the shared computer between runs.

Have the operator answer these questions in writing: Is the access method currently permitted? Is the session logged out or organization-controlled? Can any sibling bot reach the same credentials? Does the charter ban every outward action? Are profiles and usernames excluded? Can every claim retain a direct source? Will a human review before any downstream use?

Cancel the job if an answer is unclear. "Blocked" is a correct result when permission, identity, or evidence cannot be established. A research bot earns trust by refusing an attractive dataset under the wrong conditions, not by always returning a polished brief.

When the preflight passes, run the finite list, review the evidence chain, and close the session. Do not leave a routine roaming for new mentions. The safest Reddit research bot is not a quiet participant. It is an observer with a small map, no outward controls, and a human waiting at the report boundary.

## Frequently Asked Questions

### Can a bot read Reddit without an account?

A bot may be able to view some public Reddit pages while logged out, but technical visibility is not the same as permission to automate collection. Confirm that your access method complies with Reddit's current terms or a separate agreement before the run. Logged-out viewing is preferable when it is both permitted and sufficient because it removes an authenticated identity and many accidental action risks. Stop if a page requires private access, presents a challenge, or falls outside the approved source list. Never ask the bot to bypass those controls.

### Why does Reddit account age matter for a read-only bot?

Account age matters because Reddit communities can use age in posting eligibility and moderation rules, while an established account may also carry years of human history and standing. Neither fact gives a bot permission to act. A genuinely read-only bot does not need to qualify for posting. Connecting an older personal account only increases what a mistaken vote, message, or exposed session could affect. Treat age as the value of an identity you should protect, not as trust that can be lent to automation.

### Can I use a separate Grok Bot to isolate my Reddit login?

No. All Grok Bots on one account share a single persistent cloud computer. Each Bot has a separate screen, but screens are work surfaces rather than security boundaries. Browser cookies, signed-in sessions, files, and command-line credentials are shared across those bots. A differently named Bot can organize the research, but it cannot isolate a Reddit login from sibling bots. Prefer a logged-out approved path, remove unnecessary sessions from the shared computer, and never connect an established personal account merely because the research Bot looks separate.

### May the bot draft Reddit replies if a human sends them?

Not inside this read-only research model. Drafting a reply shifts the objective from observing existing language to preparing participation, and typing inside Reddit adds accidental submission risk. Keep the evidence brief separate and let a human decide later whether any response is appropriate under the community's rules. If response drafting becomes a real requirement, close the research run and create a distinct, human-owned communication workflow. The research bot itself should never open a composer, message a user, send mod mail, comment, vote, or post.
`,
};

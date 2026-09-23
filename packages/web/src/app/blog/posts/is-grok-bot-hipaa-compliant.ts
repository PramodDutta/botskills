import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Is Grok Bot HIPAA Compliant? What the Docs Certify and What They Do Not',
  description:
    'Is Grok Bot HIPAA compliant? The docs list two ISO certifications and no BAA. What that means for PHI, the written answer to get first, and the work you can start now.',
  date: '2026-09-23',
  category: 'Safety',
  content: `
# Is Grok Bot HIPAA Compliant? What the Docs Certify and What They Do Not

The Grok Bot documentation does not say Grok Bot is HIPAA compliant, and it does not say Grok Bot is not. It names two certifications, ISO/IEC 27001 and ISO/IEC 42001. It lists no HIPAA attestation and no business associate agreement. For anything beyond that, it sends reviewers to the Cursor account team. Anyone who gives you a flat yes or a flat no is telling you more than the vendor has published.

That leaves a covered practice with one decision rather than a verdict: may protected health information go near a Bot before someone has a written answer from the vendor? This page argues it may not, lays out what the docs do and do not give you to decide with as of 23 September 2026, and lists the healthcare work you can put on Grok Bot today without touching PHI. It is not legal advice. Your privacy officer and counsel make the call; this page makes sure they make it with the right documents on the table.

## Replace the compliance question with one your privacy officer can sign

"Is it HIPAA compliant" sounds like a product question, but HIPAA does not work that way. Its obligations sit with covered entities, such as a clinic or a health plan, and with the business associates that handle PHI on their behalf. No agency stamps a software product as compliant. When a vendor will create, receive, keep or transmit PHI for you, the usual instrument is a business associate agreement, a contract in which the vendor accepts duties about how that information is used, protected and reported on.

So the question a practice can actually answer is narrower and more useful: has this vendor agreed in writing to handle our PHI on terms we accept, and do its documented safeguards support that? Rewrite each version of the question you hear into one that points at a document:

| The question you hear | The question you can answer | Where the answer lives |
|---|---|---|
| Is Grok Bot HIPAA compliant? | Has the vendor agreed in writing to handle our PHI? | Only the Cursor account team; the docs list no BAA |
| Is it certified? | Which certifications cover Grok Bot, for what? | The Grok Bot security page and trust.cursor.com |
| Is our data in the US? | Will the vendor commit to US-only processing in writing? | The account team; the docs say residency does not apply by default |
| Does it train on our data? | What does Privacy Mode govern, and what do model providers keep? | The Grok Bot security page |
| Who can see patient data? | Which Bots, people and providers could reach it? | The security FAQ and the shared-computer pages |

Only the first row decides whether PHI can go in. The other four decide how comfortable you should be once it does.

## Follow Olu from a Monday request to a split decision on two Bots

Olu is the compliance lead at a physical therapy practice with three clinics. In August the owner bought four seats on a self-serve Cursor Teams plan for the front office, because Grok Bot came with them. At 8:15 on Monday the owner sent Olu a message after watching a demo: could they have two Bots running by 1 October?

The first Bot, Denials, would work the insurance denial spreadsheet. It had 312 rows, and every row carried a patient name, a date of service, a payer, a claim number and a denial reason. Denials would draft an appeal letter for each one. The second Bot, Newsletter, would draft the monthly patient-education newsletter from public sources: an exercise of the month, a short explainer on a common injury, a reminder about the practice's hours.

Olu searched for whether Grok Bot was HIPAA compliant and found forum guesses in both directions. So he went to the source. By Tuesday afternoon he had a decision that split cleanly down the middle. Newsletter could start that week with a boundary around it. Denials would wait for a written answer from the vendor, and part of its job could be rebuilt so that it never needed PHI at all. The sections below are the reading that got him there.

## Read the two ISO certificates for exactly what they cover

Two certifications appear in the Grok Bot security documentation. Anysphere, which makes Cursor, is certified to ISO/IEC 27001 and ISO/IEC 42001, Schellman is the certifying body, and the docs state that the current ISO scope includes Grok Bot. The certificates and reports sit at trust.cursor.com.

Both are real, audited certifications, and both are about management systems rather than about any one regulation. The first certifies Anysphere's information security management system, meaning its company-wide security program. The second certifies its AI management system, meaning the way the company governs the AI it develops and operates.

| Document | What it tells you | What it is not |
|---|---|---|
| ISO/IEC 27001 certificate | An audited security program covers the organization, and Grok Bot sits inside the current scope | Not a HIPAA attestation, not a BAA, not a promise about your PHI |
| ISO/IEC 42001 certificate | An audited management system governs how the AI is built and operated | Not a statement about health data at all |
| Reports at trust.cursor.com | The detail behind the certificates, including scope | Not a contract; request them, then read the scope section |
| Grok Bot security page | Controls, hosting, retention, logging and data handling as documented | Not a commitment beyond what it says; it sends residency and contract questions to the account team |

Olu read the word current twice. Scope is a statement about a period, and a certificate issued before a product existed or after it changed may not say what you need. Ask for the reports, check the dates, and file them with your vendor review. They are good evidence of a security program. They do not answer the question in the first row of the table above.

## Record that the docs list no BAA, and do not let a footer link fill the gap

Search the Grok Bot documentation for a business associate agreement and you will not find one. The security page, the security FAQ, the page for teams and enterprises and the privacy page between them cover isolation, identity, networks, logging, retention, residency, models and certifications. None of them mentions HIPAA, PHI or a BAA.

You may notice that the footer of the x.ai website carries a BAA link among its Enterprise links. The Grok Bot documentation never refers to it, never says it covers Grok Bot, and describes Grok Bot's data handling in terms of Cursor: Cursor authentication, Cursor account data settings, Cursor terms for backend retention, and Cursor's Data Processing Agreement for deletion after the service ends. A link in a website footer is not coverage for a specific product. If the account team tells you in writing that some agreement covers Grok Bot, that answer is worth having. A footer is not that answer.

Write the finding down exactly as it stands: the Grok Bot documentation, checked on a named date, lists no HIPAA attestation and no BAA. That sentence is true, it is dated, and it does not claim anything about the vendor's intentions in either direction.

## Separate where the computers run from what anyone will commit to in writing

The residency facts are short, and the difference between them matters. Today the computers are located in the United States. The docs then draw a line between that fact and Cursor's US-only data residency program, which by default leaves Grok Bot out. For a residency promise in writing, the docs send you to the account team.

Location today is an operational fact. A commitment is a contract term. A practice that writes "data stays in the US" into its own policies based on the first fact is relying on something the vendor has explicitly declined to promise by default. Model providers add a second layer: Cursor chooses the models, the mix it serves from may shift, and the docs promise no fixed list of vendors, so the list of who processes a prompt is not frozen either.

None of this makes Grok Bot unusable for a US practice. It means the residency line in your review should read "US today, no default commitment, requested in writing on a named date", not "US only".

## Weigh the provider and storage facts a PHI review will ask about

A privacy officer reviewing any vendor for PHI will ask a familiar set of questions. Here is what the Grok Bot docs say to each, and where they stop.

| PHI review question | What the docs document | What stays open |
|---|---|---|
| Do model providers keep our data? | Under Cursor's zero data retention agreements, providers keep neither prompts nor outputs | Providers can run abuse and safety classifiers, and content they flag can be kept for investigation |
| Who processes it? | Cursor manages model selection; usage analytics show the serving model per request | The serving mix can change; subprocessor limits go to the account team before rollout |
| Is data stored? | Cloud data storage is required; files and browser sessions persist on a durable disk | The Grok Bot pages do not describe disk encryption at rest; they defer to Cursor's security page |
| How long is it kept? | Backend retention follows Cursor terms; after the service ends, deletion or return within 30 days of written direction | No per-organization retention policy is available |
| Can we trace access? | Audit logs and Action Recording exist on Enterprise only | Self-serve Teams and individuals have no audit view |
| Can we stop exfiltration? | Enterprise Network Controls restrict destinations | No dedicated data loss prevention hooks; a team with no policy allows every destination |

The row Olu underlined was the first. Zero retention with a written exception for flagged content is a reasonable design for most data. For PHI, the exception is precisely the kind of thing a business associate agreement exists to govern: what happens to flagged content, who can see it, and how long it stays. Until the vendor answers that in writing, a practice cannot know.

## Count the controls your plan actually has before you count on them

Olu's practice was on self-serve Teams, and that changed the picture more than any certificate did. On a self-serve Teams plan, Grok Bot is switched on from the start, and every member can use it without an admin doing anything. The docs describe no switch to turn it off. The organization-wide enable switch and the group access control are Enterprise only. So from the day the owner bought the seats, four front-office staff could open Grok Bot and paste a patient's details into it.

| Control | Self-serve Teams | Enterprise | What Olu set |
|---|---|---|---|
| Turn Grok Bot on or off for the organization | No switch; on for every member | Enable switch with Manage Group Access | Nothing to set |
| Team Rules every Bot follows | Yes, always required for Grok Bot | Yes | A no-patient-data rule |
| Execution on Local Computer ceiling | Yes | Yes | Never allow |
| Cloud Agent delegation | Yes, on by default | Yes | Off |
| Public template sharing | Yes, starts allowed | Yes, starts off | Off |
| Connector policy from the Team Marketplace | Yes | Yes, plus an MCP allowlist | Only plugins with no patient data |
| Network Controls | No | Yes | Not available |
| Enforce Auto-review and team rules | No | Yes | Not available |
| Audit logs and Action Recording | No | Yes; recording starts off | Not available |

Two of Olu's settings did more for PHI than the rest. The local execution ceiling matters because the front-desk PCs hold exports from the practice's records system, and a Bot allowed to run commands on a member's machine can read files there. Setting the team ceiling to Never allow closes that path for every member. The Team Rule matters less than it looks: the docs describe rules as guidance a Bot follows, not a gate that stops an action. The team-wide gate, team Auto-review rules, is Enterprise only; members can still add their own Ask first rules, but on self-serve Teams nobody can require them to.

If your practice needs to decide who may use Grok Bot at all, or needs a record of what Bots did, the table says that is an Enterprise conversation, and [the Enterprise logging page](/blog/grok-bot-audit-logs) describes what that tier records.

## Remember that PHI given to one Bot is PHI on every Bot's computer

The owner's first proposal was a compromise: keep PHI in Denials only, and let Newsletter stay clean. The architecture does not allow that promise. Every Bot a user runs shares one cloud computer. Files are visible to all of them, browser sessions and cookies are shared, and so are command-line credentials. If Denials signed into the billing portal to check a claim, Newsletter would be sitting on the same signed-in session.

Between users the separation is real: each user gets a dedicated virtual machine, and one user cannot reach another's computer. [The user isolation page](/blog/grok-bot-user-isolation) covers that boundary. The docs' own fix for a workload that needs its own credentials is a separate Cursor user. That fix is about isolation, though, not about HIPAA. A second user with its own computer still sends data through the same vendor under the same terms, so it answers "which Bots can see this" and leaves "may this vendor hold PHI" exactly where it was.

## Keep PHI away from every Bot until a written answer exists

This was the decision, and it needs a precise meaning of "near a Bot", because PHI can reach a Bot through more doors than a chat box. For Olu's practice, near meant any of these:

1. Typed, pasted, dictated or spoken in a voice chat to any Bot.
2. Attached to a conversation, including screenshots of the records system.
3. Saved to the shared workspace on the computer, including exports and appeal drafts.
4. Visible in a browser session on the computer, such as the billing portal or the practice's email.
5. Reachable through a plugin connected to a system that holds patient data.
6. On screen while someone records a Teach a task demonstration.
7. On a front-desk PC that a Bot could reach through local execution.

The seventh door is closed by the Never allow ceiling, and the fifth is narrowed by the team's connector policy, which decides which plugin servers members may use. Blocking a plugin does not block the same service's website, though, so the remaining doors are closed only by people following a rule, which is why the rule has to be written down, briefed and repeated.

If you find that PHI already went in before the rule existed, treat it through your own privacy incident process, not through this page. The docs' cleanup steps remove files and sign-ins from the computer; they do not recall what the backend already holds.

## Send the account team questions they can answer in one email

Residency commitments, limits on subprocessors and help with security reviews all go to the Cursor account team, by the docs' own direction. Olu sent this on Tuesday at 3 pm. It asks only questions the documentation leaves open, so every answer is new information.

\`\`\`text
To: Cursor account team
Subject: Grok Bot and protected health information, written answers needed

We are a covered healthcare provider on a self-serve Cursor Teams plan.
Before any protected health information (PHI) is used with Grok Bot, our
compliance owner needs written answers to the following.

1. Will Cursor sign a business associate agreement that covers Grok Bot,
   including the cloud computer, conversations, files and connectors?
2. If so, on which plans? Does it require Enterprise?
3. Which subprocessors, model providers included, would handle PHI, and
   would every one of them be covered?
4. Your docs say providers may store data their abuse classifiers flag.
   How would flagged PHI be handled, who could see it, and for how long?
5. Can you commit in writing to US-only processing and storage for
   Grok Bot? Your docs say residency does not apply to it by default.
6. Is each user's computer disk encrypted at rest? Where is that stated?
7. What retention applies to conversations and computer data while our
   account is active? Can we shorten it?
8. Do the reports on trust.cursor.com address HIPAA at all, or only
   ISO/IEC 27001 and ISO/IEC 42001?

Please answer in writing. Until then, no PHI goes near a Bot.
\`\`\`

The last line is not a threat. It is the practice's own policy, stated where the vendor can see it, so nobody on either side is surprised later.

## Put the newsletter on a Bot today, with a boundary that keeps it clean

The decision about Denials left most of the owner's goal intact, because a lot of healthcare work involves no patient at all. The newsletter is the clearest case. Its inputs are public: guidance from health agencies and professional bodies, published research, and the practice's own website. Its risk is not privacy. It is accuracy, since a patient-education piece that misstates a recovery timeline does real harm.

That risk has a matching pair of Bots in this directory. [Source Verifier](/bots/source-verifier) takes the claims in a draft and checks each against a primary source, returning verified, contradicted or unverifiable with a link and a date, and it never edits the document. [Citation Checker](/bots/citation-checker) opens every link, checks every quotation word for word, and reports dead or moved pages without swapping in a substitute. Neither needs a patient system, and both leave the decision to a human.

Olu gave the Newsletter Bot a charter whose boundary is the whole point:

\`\`\`text
Name: Newsletter
Job: draft the monthly patient-education newsletter from public sources.
Sources: public health agencies, professional bodies, peer-reviewed
research, and our own published website. Nothing else.
Never open, request, repeat or store anything about a patient: no names,
visit dates, injuries, photos or testimonials. If a request contains
patient information, stop and say so without repeating it.
Every factual claim carries a link and a publication date. Send the draft
to Source Verifier and Citation Checker before I see it.
Never publish, send or schedule. Draft only.
Boundary: this Bot never touches a patient system or a patient detail.
\`\`\`

## Draw the PHI line through each workflow instead of around the whole practice

The mistake in the other direction is to decide that a healthcare practice cannot use Grok Bot at all. Olu drew the line through each workflow instead, and found that even Denials had a public half.

| Workflow | Touches PHI? | On Grok Bot now? |
|---|---|---|
| Patient-education newsletter from public sources | No | Yes, with the charter above |
| Each payer's public appeal deadlines and required forms | No | Yes, as a reference table for staff |
| Drafting job postings and staff training outlines | No | Yes |
| Checking the practice website for dead links and outdated hours | No | Yes |
| Appeal letters for the 312-row denial spreadsheet | Yes | No, until a written answer exists |
| Front-desk inbox with appointment requests | Yes | No |
| Reconciling visit counts against the records system | Yes | No |

The second row is the part of Denials that survived. A Bot that compiles each payer's published appeal windows and form requirements into one table saves the billing staff hours without ever seeing a claim. The humans then work the spreadsheet themselves, with a better reference beside them. For the wider pattern across legal, finance and health work, the [regulated-industries playbook](/blog/grok-bot-regulated-industries) goes further.

## Answer the owner who says the ISO certificate is close enough

The owner's pushback on Tuesday was the strongest version of the argument, and it deserves a straight answer. Anysphere has an audited security program that includes Grok Bot. The computers are in the US. Model providers do not keep prompts. That is more evidence than the practice ever got from its fax vendor. Surely that is close enough?

It is good evidence, and it answers a different question. An ISO/IEC 27001 certificate says an auditor examined how the organization runs security. It does not say the vendor has accepted responsibility for your patients' information, agreed what it may do with it, or agreed what it must tell you if something goes wrong. That acceptance is what the business associate agreement is for, and it is the one document the Grok Bot docs do not list. The open points in the review table, the classifier exception and the absence of a default residency commitment, are exactly the terms such an agreement would settle.

The fax comparison cuts the other way too. If the practice cannot produce a signed agreement for its fax vendor, that is a finding about the fax vendor, not permission to skip one here. The [page on compliance questions a badge cannot answer](/blog/compliance-and-ai-agents) makes the same argument at length for any framework.

## Tell the front desk what changes this week, because the plan cannot switch Grok Bot off

The settings were the easy part. Because self-serve Teams gives every member Grok Bot with no off switch, the control that mattered most was a conversation. On Wednesday morning Olu briefed the four front-office staff in ten minutes, with one sheet of paper and three rules on it.

First, no patient information goes into Grok Bot in any form: not typed, not dictated, not attached, not on screen. Second, the Newsletter Bot is the only Bot the office uses until Olu says otherwise, and anyone who wants a new Bot asks him first. Third, if anyone realizes patient information went in, they tell him the same day, without trying to clean it up themselves.

He also added the Team Rule, which every member's Bots must follow and which members cannot turn off, knowing it guides the Bot rather than blocks the person. For the full picture of what a Bot on your account can read once something does go in, [the Grok Bot privacy layers page](/blog/grok-bot-privacy) walks through storage, training and sight in order.

## Stop relying on this page the day the account team answers in writing

Everything above reflects the Grok Bot documentation as of 23 September 2026. The product is still a beta, and its security pages have already changed since August, when there was no audit view at all. This page stops applying in three situations.

The first is a written answer from the Cursor account team. Whatever it says, it supersedes this page for your practice, and your privacy officer should file it with the vendor review. The second is a change to the documentation itself: if the security page adds HIPAA, a BAA or a new certification, re-read it before acting on anything here. The third is a move to Enterprise, which changes the controls table, though not the BAA question.

If you are running the broader vendor review rather than the PHI decision, [the full security review sheet](/blog/grok-bot-security-review) lays out every documented control by plan, with the questions the docs send to the account team.

## Frequently Asked Questions

### Is Grok Bot HIPAA compliant?

The Grok Bot documentation does not say it is, and it does not say it is not. As of 23 September 2026 it names two certifications, ISO/IEC 27001 and ISO/IEC 42001, which Anysphere holds and whose current scope includes Grok Bot, and it lists no HIPAA attestation and no business associate agreement. Because HIPAA obligations sit with the covered practice and the vendors handling its PHI, the practical question is whether Cursor will commit in writing to handling your PHI. Ask the account team, and keep PHI away from every Bot until that answer exists.

### Does Grok Bot come with a BAA?

The Grok Bot documentation does not list a business associate agreement. Its security pages cover isolation, identity, networks, logging, retention, residency, models and two ISO certifications, and none of them mentions HIPAA, PHI or a BAA. A BAA link appears in the x.ai website footer, but the Grok Bot docs never reference it or say it covers Grok Bot, whose data handling is described under Cursor's terms and Data Processing Agreement. Whether an agreement is available, and on which plan, is a question for the Cursor account team, answered in writing.

### Can I put PHI in Grok Bot if the computers run in the US?

Location alone does not settle it. The docs say the computers currently run in the United States, but that Cursor's US-only data residency program is a separate thing and, by default, does not cover Grok Bot. They also say model providers may store content their abuse classifiers flag, and they list no business associate agreement. A covered practice would normally need a signed agreement before a vendor handles its PHI, so the safe order is a written answer from the Cursor account team first and PHI afterwards, if at all.

### What healthcare work can Grok Bot do without PHI?

Plenty of healthcare work involves no patient at all. A practice can draft patient-education newsletters from public health sources, compile each insurer's published appeal deadlines and forms, write job postings and staff training outlines, and check its own website for dead links or outdated hours. Pair a drafting Bot with a claim checker and a citation checker so every fact carries a source. Give each Bot a written boundary that it never opens a patient system or repeats a patient detail, and set the local execution ceiling to Never allow.
`,
};

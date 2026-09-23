import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Security Review: ISO 27001, ISO 42001 and the Questions Procurement Asks',
  description:
    'A Grok Bot security review answer sheet: ISO 27001 and 42001 scope, per-user microVMs, hosting, retention, models, logging, and what only the account team answers.',
  date: '2026-09-23',
  category: 'Reference',
  content: `
# Grok Bot Security Review: ISO 27001, ISO 42001 and the Questions Procurement Asks

A security review of Grok Bot usually goes wrong in one of two ways. Somebody answers from memory of a vendor sales call, or somebody writes yes against a control that only exists on the Enterprise plan. Both mistakes survive until an auditor asks for the evidence, and then the questionnaire becomes the problem instead of the product.

This page is an answer sheet built to avoid both. Every row comes from the three pages the vendor wrote for reviewers: the Grok Bot security page, the security FAQ, and the page for teams and enterprises, all checked as of 23 September 2026. Every control carries its plan tier. Where the docs are silent, or where they explicitly send you to the Cursor account team, the sheet says so instead of guessing.

## Start from the three pages the vendor wrote for reviewers

The Grok Bot documentation has a section meant for exactly this job. The [Grok Bot security page](https://docs.x.ai/grok-bot/security) covers network policy, egress, approvals, identity, logging, endpoint tooling, retention, residency, models, local execution, hosting, prompt injection and certifications. The [security FAQ](https://docs.x.ai/grok-bot/security-faq) answers the questions reviewers ask most often in short form. The [page for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) holds the architecture summary, the admin controls with their plan tiers, and a recommended baseline configuration.

If you arrived searching for a Grok trust center, the one these pages point to is Cursor's: the certifications section says the certificates and reports live at [trust.cursor.com](https://trust.cursor.com). The x.ai website footer also carries links labelled Trust, Subprocessors and Privacy Portal, but the Grok Bot security pages never reference them. For a Grok Bot review, start at trust.cursor.com and ask the account team if you need anything from the xAI side.

Two more references round out the set. The Admin API lets you manage the Grok Bot switches as code, and Cursor's Data Processing Agreement governs deletion when the service ends. Everything else in a questionnaire either maps to one of these pages or goes on the list for the account team.

## Follow Halvard through a 53-row intake form due on Friday

Halvard is a security analyst at a logistics software company of about 300 people. Engineering has used Cursor on the Enterprise plan for a year. On Monday the operations director asked IT to switch on Grok Bot for her team, and procurement stopped the request at the door: a new product with a hosted computer, browser sessions and model calls needed a vendor security review first. The intake form had 53 rows, and it was due on Friday at 5 pm.

On an Enterprise plan that order of events is possible, because Grok Bot stays off until an admin turns it on from the dashboard. Halvard had time to review before anyone used it, and he decided to spend Monday on method rather than answers. Every row would get exactly one of four labels, and no row would get a label without a link to the page that justified it.

| Label | What it means | Example row from the form |
|---|---|---|
| Documented | The Grok Bot docs state it; answer in your own words and cite the page | Are customer environments isolated from each other? |
| Documented, Enterprise only | True on Enterprise, false on self-serve Teams and individual plans | Can admins restrict which destinations the agent can reach? |
| Ask the account team | The docs are silent, or they explicitly route the question to the account team | What are the egress IP ranges? |
| Documented no | The docs say the capability is not available | Can the product be deployed on-premises? |

By Wednesday night the tally was 31 documented, 8 documented for Enterprise only, 9 for the account team and 5 where the docs give a plain no. The tables below carry 51 of those rows in the form's own order, with the answers he wrote. The other two, on penetration testing and incident notification, had nothing in the docs to cite and went straight onto the account team list.

The surprise of the week came on Tuesday, from a row he expected to be easy. The form asked whether blocking an integration stops the agent reaching that service. On Grok Bot the answer is no: blocking a plugin in the connector policy leaves the service's website reachable from the computer's browser, and closing that second path takes Network Controls. The row changed how he wrote the whole network section, because it showed that a control and the path it appears to close can live in two different places.

## Answer the certification rows from the ISO scope statement and nothing else

The certification rows are where reviews most often overreach, so Halvard wrote them first and kept them narrow. The Grok Bot security page states that Anysphere, the company that makes Cursor, is certified to ISO/IEC 27001 and ISO/IEC 42001, that Schellman issued both certificates, and that the current ISO scope covers Grok Bot. The first standard certifies the organization's information security management system. The second certifies the management system for the way Cursor develops and runs its AI.

| Questionnaire row | Answer | Label |
|---|---|---|
| Does the vendor hold ISO/IEC 27001? | Yes, Anysphere, issued by Schellman; Grok Bot is in the current ISO scope | Documented |
| Does the vendor hold an AI management certification? | Yes, ISO/IEC 42001, same issuer and scope statement | Documented |
| Where are certificates and reports? | trust.cursor.com | Documented |
| Is the product covered by a SOC 2 report? | The Grok Bot docs do not say; request confirmation of scope | Ask the account team |
| HIPAA attestation or BAA available? | Not listed in the Grok Bot docs | Ask the account team |
| GDPR certification? | Not listed in the Grok Bot docs; deletion terms sit in Cursor's DPA | Ask the account team |

One detail tripped a colleague who checked his draft. Cursor's own website shows several company badges in its footer, and one of them is a SOC 2 mark. A badge on a company website is a claim about the company. It does not say which products an audit report covers, and the Grok Bot security page, which is the document that speaks about Grok Bot's scope, names only the two ISO certifications. Halvard left the SOC 2 row open and put it on the account team list, worded as a scope question. If the answer comes back yes with a report, the row changes. Until then, a yes would be his claim, not the vendor's.

For healthcare buyers, the HIPAA row is a decision in its own right, and [the page on whether Grok Bot is HIPAA compliant](/blog/is-grok-bot-hipaa-compliant) walks through it.

## Describe isolation as two boundaries, or the answer will be wrong either way

Isolation questions come in two forms, and the honest answer differs between them. Asked whether one customer is isolated from another, the answer is a firm yes. Asked whether workloads inside one user's account are isolated from each other, the answer is no, and the docs say so directly.

| Questionnaire row | Answer | Label |
|---|---|---|
| Are customers' environments isolated? | Every user runs on a dedicated Firecracker microVM (separate kernel, memory and virtual devices), and no user can reach another's computer | Documented |
| Are separate agents within one user isolated? | No; all of a user's Bots share one computer, including files, browser sessions and command-line credentials | Documented |
| How do you separate a sensitive workload? | Give it its own Cursor user, which gets its own computer and credential set | Documented |
| Do agents have their own identities? | No; a Bot acts as the signed-in member and can never hold more access than that member | Documented |
| Where are OAuth tokens kept? | On Cursor's connector backend; Bots call tools without receiving tokens, and tokens never sit on the computer | Documented |
| How are passwords and codes entered? | By the member, through a computer takeover or a masked secret request that the transcript omits and the model never sees | Documented |

Two nuances belong in the free-text column. First, attribution: because Bots act as the signed-in member, every action traces to a named person, and your identity provider holds the only identities involved, so there is no agent credential of its own to provision, rotate or audit. Second, the exception: team-managed connectors may use team or service-account credentials, so a connector your admins set up is not bound to one member's access in the same way.

The within-user row is the one reviewers push back on, and the architecture behind it deserves its own page; [how Grok Bot isolates users](/blog/grok-bot-user-isolation) covers what the microVM protects and what it does not.

## State the hosting facts as three things the vendor does not offer

Hosting rows go faster once you accept that three common requests have documented answers of no. Grok Bot runs only on cloud computers that Cursor hosts. The docs rule out three alternatives for now: installing it on-premises, running it inside your own network perimeter, and running it from an image you supply.

It helps to describe the data flow before the rows, because forms ask where work happens in several different ways. The desktop and phone apps are thin clients. Members chat, review and approve on their own devices, while the work itself runs on the hosted computer in Cursor's cloud. Two paths leave that computer by design. Local execution lets a Bot run commands and move files on the member's own machine when the member's policy allows it. Cloud Agent delegation, on by default and switchable by an admin, hands coding work to other computers that your existing Cloud Agent settings govern. Map both paths early and neither will surprise you later in the form.

| Questionnaire row | Answer | Label |
|---|---|---|
| Deployment model | Cursor-hosted cloud computers only | Documented |
| On-premises, customer VPC or own image? | Not supported today | Documented no |
| Data location | The computers run in the United States today | Documented |
| Contractual residency commitment | Grok Bot sits outside Cursor's US-only residency program unless arranged otherwise | Ask the account team |
| Egress IP addresses | Shared static ranges across Grok Bot customers; ranges come from the account team | Ask the account team |
| Dedicated per-customer egress IPs | Not available | Documented no |
| Reach to private networks | A member can route egress through a desktop; Enterprise can install a networking client with Team Setup | Documented |

The residency pair of rows is where precision matters most. Running in the US today is an operational fact. A residency commitment is a contract term, and the docs are explicit that the program which provides one does not cover Grok Bot unless your account team arranges it. Halvard answered the location row with the first sentence and put the second on the account team list.

The egress rows have a practical consequence too. Because the static ranges are shared across customers, an allowlist entry for them admits Grok Bot traffic generally, not your company's alone. The control the docs offer instead is a destination allowlist on your side of the computer, covered in the network section below. And if your member devices sit behind a TLS-inspecting gateway, the docs ask you to allow Cursor's domains, including the nested computer hostnames under cursorvm.com, and to exempt them from inspection on every profile, off-network ones included.

## Answer the identity rows from the Cursor SSO you already run

Grok Bot has no identity system of its own. Members log in with their Cursor accounts, which means the Cursor single sign-on you already configured covers Grok Bot too, and you do not create a separate Grok Bot application in Okta or Entra ID.

| Questionnaire row | Answer | Label |
|---|---|---|
| SSO support | SAML 2.0 through Cursor, with Okta, Microsoft Entra, Google Workspace and OneLogin; SSO can be required, which blocks password login | Documented |
| Automated provisioning | SCIM 2.0 provisioning and deprovisioning | Documented, Enterprise only |
| Sign-in to company apps inside the agent's browser | Through your identity provider, so your session policies apply; revoking the user ends those sessions | Documented |
| Device trust on the agent's computer | It runs Linux, is not enrolled in MDM by default, and cannot satisfy FastPass or managed-device rules | Documented |
| Offboarding | Take the member off the team (on Enterprise you can also drop their group from Manage Group Access), then revoke their sessions at your identity provider | Documented; group access is Enterprise only |
| Stopping a member's running agents | Organization admins can use Terminate on that member's computer; running Bots stop, but access remains | Documented, Enterprise only |

The device-trust row needs a careful sentence, because it has two halves. A device-aware policy in your identity provider still gates the member's own sign-in to Grok Bot. What it cannot do is gate the hosted computer's browser, which will fail any rule that demands a managed or compliant device. The docs recommend a narrower, higher-priority rule scoped to that Linux session and the Cursor-assigned group, rather than weakening device trust for the whole company. Halvard noted it as a configuration task for IT, not a gap in the product.

## Put the plan tier next to every network and admin control

This is the section where a sheet without a plan column turns false. Several controls exist only on Enterprise, and self-serve Teams admins do not even see them.

| Control | Self-serve Teams | Enterprise |
|---|---|---|
| Organization-wide enable switch and Manage Group Access | Not available; Grok Bot is on for every member with no off switch | Available |
| Team Rules that every member's Bots follow | Available | Available |
| Cloud Agent delegation switch | Available, on by default | Available, on by default |
| Public template sharing | Available, starts allowed | Available, starts off |
| Execution on Local Computer ceiling | Available | Available |
| Connector policy from the Team Marketplace | Available | Available, plus the MCP allowlist |
| Network Controls destination policy | Not available | Available |
| Allow Local Egress switch | Not available | Available |
| Team Setup install scripts | Not available | Available |
| Enforce Auto-review and team Auto-review rules | Not available | Available |
| Grok Bot Computers recreate and terminate | Not available | Organization admins only |

Network Controls deserves a paragraph in the free text. Admins choose one of four modes, from no policy at all to a team allowlist that admits only listed destinations plus what the computer needs to function. Entries can be domains or IP ranges with ports, and directory groups can carry their own policy unless the team policy is locked for everyone. Running computers pick up a change within about a minute and sleeping ones when they wake. Teams without a policy allow everything.

Two limits belong beside it. The product has no dedicated data loss prevention hooks, according to the docs, so the egress policy limits where data can go rather than inspecting what goes. And the connector policy and the network policy are separate layers: a blocked plugin leaves the same service's website reachable, so closing both paths takes both controls. Most of these switches can also be managed through the Admin API, which covers enablement, capabilities, Enforce Auto-review, group access, network policy, team rules and setup scripts.

## Answer the logging rows without promising a record that is off by default

Logging rows are where a hurried yes does the most damage, because the Enterprise answer is good and the default state is not. Audit logs and Action Recording are separate pipelines, both Enterprise only, and the second one starts switched off.

| Questionnaire row | Answer | Label |
|---|---|---|
| Admin and authentication audit trail | Enterprise audit logs record administrative, security and sign-in events, and Grok Bot control-plane changes: Bot creation, access changes, Team Setup, MCP sign-ins, Slack links and routines | Documented, Enterprise only |
| Log of actions the agent took | Action Recording records connector tool calls, scrubbed shell commands, browser navigations and computer-use session summaries; it is off by default | Documented, Enterprise only |
| Retention of agent action logs | 90 days in Cursor's internal store | Documented, Enterprise only |
| Export to our SIEM or collector | Audit logs can stream to a SIEM; recorded actions leave through OpenTelemetry Export with the tag cursor.surface=grok_bot | Documented, Enterprise only |
| Usage and spend reporting | The usage page on the Cursor dashboard, split by product | Documented |
| Audit view on self-serve Teams or individual plans | None | Documented no |

Halvard's answer to the second row carried a condition in plain words: available on Enterprise, off by default, and it would be switched on before the operations team received access. He also added the scrubbing detail, because a reviewer who reads "records browser navigations" will assume full URLs. The docs say navigations keep scheme, host, path and page title, and strip query strings and credentials. [Grok Bot audit logs and Action Recording](/blog/grok-bot-audit-logs) goes through each event type and what it drops.

## Quote retention, deletion and backups exactly as written

Data rows reward exact wording, because every paraphrase adds a promise. Halvard wrote these answers close to the documented meaning and resisted rounding any of them up.

| Questionnaire row | Answer | Label |
|---|---|---|
| What persists on the agent's computer | Workspace files, browser sessions and whatever the browser stores, on a durable disk; connector tokens are never kept there | Documented |
| Idle behavior | Idle computers hibernate; hibernation is not deletion | Documented |
| Backups | Cursor's production control plane is backed up daily in encrypted form, with copies held in a separate recovery facility | Documented |
| Encryption at rest for each computer's disk | Not described on the Grok Bot pages | Ask the account team |
| Customer-set retention period | A per-organization retention policy is not available | Documented no |
| Point-in-time restore of one computer | A customer-managed restore is not available | Documented no |
| Deletion when the contract ends | Per the DPA, once the service ends Cursor deletes or returns data within 30 days of a written request | Documented |
| Deleting an agent | Removes its profile, conversation and routines; computer files and browser sessions may remain | Documented |

The backup row is easy to overstate. The docs describe backups of the production control plane. For a single computer, the only restore a member has is Reset, which rebuilds from the most recent saved snapshot and may drop recent work; there is no customer-managed restore to a point in time you choose, as the restore row says. The deletion row is easy to understate in the other direction: deleting a Bot is not deleting data, because files and sessions belong to the user's computer. The [privacy layers page](/blog/grok-bot-privacy) covers the cleanup order the docs recommend.

One requirement belongs here too. Grok Bot needs cloud data storage and does not support Privacy Mode (Legacy), so a team still on that setting has to change it before rollout. That was not an issue for Halvard's company, but it is the first thing to check at yours.

## Tell procurement plainly that nobody on your side picks the model

The model rows produce the sentence procurement least likes to read, and it is better written plainly than softened. Cursor manages model selection for Grok Bot. There is no customer-facing model picker, the serving mix can change over time, and no fixed vendor set is guaranteed.

| Questionnaire row | Answer | Label |
|---|---|---|
| Which models process our data? | Cursor manages selection; the serving mix can change, with no fixed vendor set guaranteed | Documented |
| Can we see which model served a request? | Yes, usage analytics show it, failovers included, and billing follows the serving model | Documented |
| Can we restrict models? | A team model allowlist exists on Enterprise, but enforcement is not guaranteed | Documented, Enterprise only |
| Is our data used for training? | Privacy Mode on keeps customer data out of training; the team's privacy mode governs members | Documented |
| Do model providers retain data? | Zero Data Retention follows Cursor's provider agreements; providers may store data their abuse classifiers flag | Documented |
| Can we restrict subprocessors? | Contact the account team before rollout | Ask the account team |

The allowlist row needs its caveat in the answer, not in a footnote. The docs say the list is honored by default, yet onboarding asks you to acknowledge that Grok Bot might not follow it, so enforcement depends on configuration. Halvard wrote "exists, not guaranteed" and moved on. The classifier clause on the retention row is similar: it is narrow, but a reviewer who later finds it will ask why the sheet left it out.

## Separate the model-based controls from the ones that do not depend on a model

A careful reviewer asks which controls a clever input could talk its way past. The docs answer that themselves, and the answer is worth copying into the sheet's structure.

| Questionnaire row | Answer | Label |
|---|---|---|
| Human approval for sensitive actions | The proposed operation and its inputs are shown; the member can allow once, always allow, or deny | Documented |
| Automated review of agent actions | Auto Review, an independent review model covering shell commands, plugin calls, computer use, automation writes and delegation | Documented |
| Can admins require that review? | Enforce Auto-review and team rules | Documented, Enterprise only |
| Access to employees' own machines | A separate local execution control; per-command approval by default; the docs recommend Never allow | Documented |
| Prompt injection defenses | Outside content is marked untrusted; layered controls reduce the risk but do not remove it | Documented |
| Endpoint security feed | No built-in customer-facing EDR feed; Enterprise admins can install their own tooling with Team Setup | Documented |

Auto Review is model-based, and the docs say so. It can let an action proceed, ask for approval or deny it, but some side effects fall outside it, and the docs cite memory writes and most settings changes. Beneath it sit three controls that work without any model's judgment: per-user isolation, the network policy and approvals on each action. Halvard's sheet listed those three separately, because they are the ones an auditor can test without trusting a classifier.

Two operational facts closed the section. An approval governs the proposed action, not work already completed, so it is a gate and not an undo. And Cursor operates and monitors the computers for operational health and abuse; the docs say that monitoring telemetry is designed to leave customer data out.

## Carry the open rows to the account team in one message

Nine rows had no documented answer, and the docs themselves name the account team as the place for egress ranges, residency commitments, subprocessor limits and security review support. Halvard folded the three certification rows into one scope question, added two requests of his own for the ISO reports and a rollout date, and sent a single message on Wednesday morning so the answers would come back together and be filed together.

\`\`\`text
Grok Bot security review: open items for the Cursor account team
Plan: Cursor Enterprise. Grok Bot not yet enabled. Review due Friday.

1. Current shared static egress IP ranges for Grok Bot computers.
2. A written data residency commitment for Grok Bot, if available,
   since the docs say the US-only program does not apply by default.
3. The subprocessor list for Grok Bot, model providers included, and how
   we are told when the serving mix changes.
4. The ISO/IEC 27001 and ISO/IEC 42001 reports, with the scope statement
   that includes Grok Bot and the certificate dates.
5. Whether Grok Bot sits inside the scope of any audit report or
   regulatory attestation beyond the two ISO certifications. Our form
   asks about SOC 2, HIPAA and GDPR; those rows stay blank until then.
6. Encryption at rest for each user's computer disk, and where it is
   documented.
7. Penetration testing that covers Grok Bot, and what summary you share.
8. Incident notification commitments that apply to Grok Bot data.
9. Enterprise rollout timing, since the FAQ says access is rolling out.
\`\`\`

The fifth item carries three rows, SOC 2 among them, worded as one scope question on purpose. It invites a precise answer instead of a badge.

## Answer the reviewer who wants yes or no without a plan column

The procurement lead's objection came on Thursday morning, and it was fair. Procurement compares vendors on a grid. A column of "Documented, Enterprise only" and a list of account team questions looks like a vendor dodging, and the other two tools under review had returned clean yes and no answers. Could Halvard please just answer the questions?

He could, and every row whose truth depends on the plan would have been wrong for somebody. For a company on Enterprise, a bare yes on audit logs is true today and false for any team that later lands on a self-serve plan, and a bare yes on Action Recording is false until someone switches it on. A questionnaire answer is a claim the company may be held to, and a claim that is only true on one plan is not a yes. The other two vendors' clean grids were not evidence of better products; they were evidence of answers nobody had tested.

The tiered sheet also turned out to be shorter to defend. When the auditor's follow-up arrived, every row already had its source link and its plan, so the reply took an hour instead of a week. [How to answer security questionnaires without guessing](/blog/how-to-answer-security-questionnaires) makes the same case for the side of the table where you are the vendor.

## Check every drafted answer against its source before the sheet leaves your desk

Halvard's last step was a verification pass. He gave the drafted answers to a Bot running [Source Verifier](/bots/source-verifier), which takes each claim, finds the primary source, and returns verified, contradicted or unverifiable with the link and the date. It never edits the document, which is exactly what you want from a checker: it reports, and a person decides what to change. Two of his answers came back contradicted, both from memory rather than from the page, and both were fixed before Friday.

If you sit on the other side of this process and answer questionnaires about your own product, [Trust Center Deal Desk](/bots/trust-center-deal-desk) applies the same discipline to your answer bank. It drafts only from approved, sourced entries, escalates every row the bank cannot cover, and never returns the questionnaire to the customer itself. That last line is its boundary, and it is the right one for this work: the Bot drafts and checks, and a named human submits.

Halvard gave his own verification Bot the same shape. It could read the docs and his sheet, and it could flag. It could not mark a row answered, and it could not send the file anywhere. A security review is a document of claims with a signature on it, and the signature belongs to a person.

## Retire this answer sheet when the docs change or your plan does

Grok Bot is in beta, and the security documentation has already moved: in late August there was no audit view of Bot actions at all, and by late September Enterprise had Audit logs and Action Recording. The FAQ also says Enterprise access is still rolling out, so controls may appear on your dashboard at a different time from someone else's.

Treat every row above as true of the documentation on 23 September 2026 and of nothing later. Before each review, re-open the three pages, re-check the rows that carry a plan tier, and replace any account team row with the written answer once you have it. If your company moves between self-serve Teams and Enterprise, redo the controls and logging sections completely, because those are the rows that change meaning with the plan.

For the wider shared-computer risk that sits behind several of these rows, the [shared-computer security walkthrough](/blog/grok-bot-shared-computer-security) is the longer read.

## Frequently Asked Questions

### Does Grok Bot have ISO 27001 certification?

Yes. According to the Grok Bot security documentation, Anysphere, which makes Cursor, is certified to ISO/IEC 27001 and ISO/IEC 42001, both issued by Schellman, and the current ISO scope includes Grok Bot. ISO/IEC 27001 certifies the organization's information security management system, and ISO/IEC 42001 certifies how Cursor manages the AI it develops and runs. The docs point to trust.cursor.com for certificates and reports. Read the scope statement and the certificate dates before citing either one in a questionnaire, because scope describes a specific period.

### Where is the Grok Bot trust center?

The Grok Bot security documentation points reviewers to trust.cursor.com, Cursor's trust site, for certificates and reports covering the ISO/IEC 27001 and ISO/IEC 42001 certifications. That matches the rest of the product's plumbing: Grok Bot runs on Cursor-hosted computers, signs members in with Cursor accounts, and follows Cursor's terms and Data Processing Agreement. The x.ai website footer also has trust and subprocessor links, but the Grok Bot security pages do not reference them. For anything the documentation does not cover, the docs direct you to the Cursor account team.

### Is Grok Bot SOC 2 certified?

The Grok Bot documentation does not list SOC 2. Its certifications section names two certifications only, ISO/IEC 27001 and ISO/IEC 42001, held by Anysphere with Grok Bot in the current ISO scope. Cursor's website shows company-level badges, but a badge does not state which products an audit report covers, and the Grok Bot pages do not say Grok Bot is inside the scope of any other report. If your questionnaire asks for SOC 2, leave the row open, check trust.cursor.com, and ask the Cursor account team to confirm scope in writing.

### What should we ask the Cursor account team in a Grok Bot security review?

Ask for the questions the documentation explicitly sends to the account team or leaves unanswered. That means the current shared egress IP ranges, a written data residency commitment, since Grok Bot sits outside the US-only program by default, the subprocessor list including model providers, and the ISO reports with their scope statements and dates. Add whether Grok Bot sits inside any other audit report, how each computer's disk is encrypted at rest, penetration testing coverage, incident notification terms, and Enterprise rollout timing. Request every answer in writing.
`,
};

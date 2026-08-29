import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Screens Are Work Surfaces, Not Security Boundaries',
  description:
    'Learn why separate bot screens organize work without isolating secrets, how shared state crosses them, and how to choose a real boundary before a task.',
  date: '2026-08-29',
  category: 'Safety',
  content: `
# Screens Are Work Surfaces, Not Security Boundaries

Noah opens one bot for payroll and another for public research. The two screens look separate. Each has its own conversation, name, and task. Noah concludes that the payroll login belongs to the payroll screen.

That conclusion feels natural because software trains us to read visual separation as access separation. Two banking profiles, two browser profiles, and two operating-system users can represent real walls. Two bot screens do not necessarily do that.

The Isolation section of VERIFIED-FACTS states the product rule directly: “The screens are separate work surfaces, not separate security boundaries.” A **security boundary** is a control that prevents activity on one side from reaching protected resources on the other. A work surface organizes activity without making that prevention claim.

This lesson explains why **screens are not boundaries**, shows Noah’s failure from start to finish, and gives you a boundary test you can perform before sensitive work.

## Read visual separation as organization until evidence proves isolation

A separate screen has real value. It keeps one conversation from visually mixing with another. It lets Noah return to the payroll discussion without scrolling through research notes. It can support distinct instructions and review habits.

None of those benefits proves resource isolation. The Isolation section of VERIFIED-FACTS says every bot on an account shares one persistent cloud computer. It also says the computer is assigned to the user account, not an individual bot. The account computer, not the visible screen, is the documented isolation unit.

| Observation | Organizational value | Security claim it does not prove | Evidence you still need |
|---|---|---|---|
| Different bot name | Labels the job | Different computer | Product architecture |
| Different conversation | Separates chat context | Different files | Filesystem test |
| Different screen | Separates visible activity | Different sessions | Session inspection |
| Different charter | States desired conduct | Enforced credential wall | Capability test |

Make “organization until proven isolation” your default reading of interface differences. It is a portable habit far beyond bots.

## Define a boundary by blocked reachability, not by appearance

A boundary exists when a request from one side cannot reach a protected object on the other, even if the requester tries. A locked operating-system account can be a boundary. A separate computer can be a boundary. A sentence that says “do not look” is an instruction, not a technical wall.

Use three questions to test a claimed boundary:

1. What protected resource sits behind it?
2. What mechanism blocks access?
3. What observation would prove the block failed?

For Noah, the protected resource is the payroll session. If the claimed mechanism is “the research bot has a different screen,” the Isolation section of VERIFIED-FACTS supplies contrary evidence: browser cookies and signed-in sessions are shared across bots. Opening the payroll site from the research screen and finding the active identity would prove the screen did not block reachability.

The test focuses on mechanism. Interface confidence is not evidence.

## Follow Noah from a payroll login to a research-screen surprise

At 08:30, Noah opens the payroll bot and signs into the payroll service. At 09:00, he finishes a report but leaves the browser session active. At 11:00, he opens the public-research bot. Its chat is empty and its screen shows a clean work area.

Noah asks for research about employment trends and says, “Use any relevant sources already available.” The browser can still open the payroll service as Noah. Even if the bot never opens it, the sensitive session is reachable from the shared environment. The risk existed before the prompt.

The Isolation section of VERIFIED-FACTS explains every product step in that story. All bots share one persistent cloud computer. Each bot gets a screen on that computer. Browser cookies and signed-in sessions are shared. No claim about the bot’s model or hidden intent is needed.

| Time | Screen | Noah’s belief | Shared-computer reality |
|---|---|---|---|
| 08:30 | Payroll | Login belongs here | Session belongs to browser state |
| 09:00 | Payroll | Closing work ends exposure | Session remains active |
| 11:00 | Research | Empty chat means clean start | Same computer retains state |
| 11:05 | Research | Public task cannot reach payroll | Reachability depends on session, not label |

This is a safety lesson about architecture, not a prediction that every research request will misuse payroll.

## Map each shared surface across both screens

The Isolation section of VERIFIED-FACTS names four shared surfaces: browser cookies, signed-in sessions, files, and command-line credentials. Map them before inventing broader claims.

A browser cookie is stored state that can help a site recognize the browser. A signed-in session lets the site associate activity with an account. A file persists on the computer. A command-line credential lets a terminal tool authenticate. Each can outlive the screen where it was created.

| Shared surface | Created on payroll screen | Reachable from research screen | Correct cleanup target |
|---|---|---|---|
| Browser cookie | Site writes it during use | Yes, per verified Isolation facts | Browser and issuing site |
| Signed-in session | Noah authenticates | Yes, per verified Isolation facts | End session at service |
| File | Payroll export downloads | Yes, per verified Isolation facts | Shared-computer storage |
| Command-line credential | Tool login saves state | Yes, per verified Isolation facts | Local config and issuer |

The table also shows why switching screens cannot clean up. The state lives below the visual layer.

## Distinguish a work surface from an authority container

An authority container determines which identities and capabilities are available. A work surface determines where a person or bot organizes activity. Confusing them makes a tidy interface look safer than it is.

[Inbox Triage](/bots/inbox-triage) can have a narrow charter that says draft but never send. [Lead Scout](/bots/lead-scout) can research without outreach. [Source Verifier](/bots/source-verifier) can check evidence. [Chief of Staff Briefing](/bots/chief-of-staff-briefing) can assemble a local brief. Their distinct names clarify jobs. Under the Isolation facts, separate bots on one account still share the account computer.

That does not make the catalog useless. Job separation improves review, expectations, and prompt design. It simply belongs in the organization column, not the technical-isolation column.

[Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained) covers capability language. [Least Privilege for Bots](/blog/least-privilege-bots) covers reducing grants. Apply those ideas to the shared computer rather than assuming the screen already applied them.

## Test a screen claim with a harmless canary

A **canary** is a harmless marker used to reveal whether a path exists. Create a text file containing an invented phrase on one screen. Note its exact location. Switch screens and ask the second bot to read only that location. If it can read the marker, the screens share file reachability.

Use synthetic content, not a customer name, token, or password. Delete the marker after the test and confirm it disappeared. The goal is to observe the mechanism without increasing exposure.

You can perform a similarly cautious browser test by signing into a disposable practice account, switching screens, and checking whether the same identity appears. Do not use payroll as the experiment. The Isolation facts already say sessions are shared; a practice account makes the rule concrete without placing important data at risk.

The result should update your diagram. Draw one large box for the account computer, four smaller screen boxes inside it, and shared state alongside them. [One Computer, Many Screens](/blog/grok-bot-one-computer-many-screens) develops that architecture.

## Choose a real separation unit before handling sensitive work

If two tasks must not share sessions, files, or command-line credentials, they need a separation unit that actually blocks those paths. The Isolation section says the computer is assigned to the user account. That makes the account computer the relevant documented unit for this product.

| Requirement | Same account, separate screens | Clean shared computer | Separate account computer |
|---|---|---|---|
| Keep conversations organized | Suitable | Suitable | Suitable |
| Avoid leftover unrelated files | Requires cleanup | Suitable after verification | Suitable if never copied across |
| Prevent one roster from inheriting sessions | Not supported as screen isolation | Only while sessions stay absent | Stronger documented separation |
| Prove distinct computer state | No | No, still one computer | Yes, if accounts remain separate |

No setup survives a human copying the same credential into both environments. A boundary is a mechanism plus operational discipline. Do not rebuild the bridge after paying to remove it.

[How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials) covers the adjacent credential decision. This page stops at recognizing the correct unit.

## Treat non-root execution as a host control, not a bot wall

The Isolation section of VERIFIED-FACTS says the computer is a managed Linux virtual machine and the bot runs as a non-root user. A **non-root user** lacks the operating system’s highest administrative privilege. That can reduce what a process does to the host.

It does not establish a different operating-system user for every bot. The verified facts do not say that separate screens receive separate Unix accounts, containers, or filesystems. Therefore, do not convert “non-root” into “isolated from the other bot.” Those are different claims.

This distinction is a useful verification habit. Read the noun governed by a safety statement. “Non-root” governs privilege level on the machine. “Separate security boundary” would govern reachability between workloads. The product documentation explicitly denies the latter for screens.

## Handle hosted-token storage without inventing screen isolation

The Isolation section says hosted MCP sign-in tokens stay with Cursor’s backend and are never stored on the computer. That is a precise storage claim about those tokens. It does not say each screen receives a separate backend identity, and it does not turn the screen into a vault.

Keep claims at their documented size. “This hosted token is not stored on the computer” is supported. “The research screen cannot use anything connected elsewhere” is not supplied by that fact. Check actual connection scope and current access before relying on it.

This method is how readers learn to verify instead of trust. Locate the subject, verb, and boundary of the documented sentence. Refuse to stretch it to a neighboring security promise.

[The shared-computer security guide](/blog/grok-bot-shared-computer-security) collects the architecture. [Prompt Injection in Email](/blog/grok-bot-prompt-injection-email) explains why reachable authority matters when content is untrusted.

## Answer the operator who says separate chats are good enough

For low-sensitivity work, the operator may be right. If both screens use only public information and synthetic files, organizational separation may be all the task needs. Separate chats reduce confusion and make review easier. Do not buy a stronger boundary when no protected resource requires it.

The answer changes when one side holds private sessions, customer files, or powerful command-line credentials. “Good enough” must name the consequence it accepts. If a research instruction can reach payroll state and that reachability violates policy, separate chats fail the stated requirement.

The strongest version of the objection is not laziness. It is proportional control. Accept it for low-risk practice. Reject it when the protected object needs blocked reachability.

## Clean the shared environment instead of rearranging the roster

Creating, renaming, hiding, or deleting screen entries changes the roster. Cleanup acts on the state itself. End active sessions, remove sensitive files, revoke command-line credentials, and verify the result.

The Isolation section of VERIFIED-FACTS says deleting a bot does not remove shared-computer files or browser sessions. That one sentence is enough to reject deletion as an environmental wipe. [Delete a Grok Bot Safely](/blog/delete-a-grok-bot-safely) explains the correct teardown sequence.

Noah should sign out of payroll through the service, inspect downloads, revoke any local credential created for the task, and test from the research screen. Only after state cleanup should he decide whether to keep or delete the payroll bot. The order follows where the authority lives.

## Use a four-column worksheet to evaluate every new screen

Write four columns: resource, claimed boundary, blocking mechanism, failure test. For payroll, the resource is the signed-in account. The claimed boundary is the separate screen. The blocking mechanism is absent because verified facts say sessions are shared. The failure test is whether the research screen opens the practice account signed in.

Repeat for files and command-line credentials. If you cannot name a blocking mechanism, label the separation “organizational only.” That label is not an insult. It is an accurate design property.

Then decide among three actions: accept organizational separation, clean the shared computer, or move the sensitive task to a genuinely separate account computer. Record the reason in one sentence. This worksheet is the concrete skill the article promises.

## Verify the boundary decision before the sensitive task begins

Verification should be capable of failing. A statement such as “the screens look separate” cannot fail because it only describes appearance. A practice-account session test can fail. A marker-file test can fail. A command-line identity check can fail.

Run the appropriate harmless test, record the observed identity or absence, and stop if the result contradicts your design. Do not continue because the task is urgent. Urgency does not change the shared-computer architecture.

Write the decision as a claim with its evidence and limit. For example: “The two research screens are organizationally separate. A marker created on one was readable from the other, so they are not a file boundary. No sensitive files will be placed on this account computer.” That statement can be checked later. “The bots are isolated” hides which resource and mechanism are meant.

Run the worksheet again whenever the protected resource changes. A design judged sufficient for public articles may fail when payroll, legal drafts, or production credentials enter the room. The screen arrangement can stay identical while the consequence of shared reachability changes. Boundary decisions belong to resources and threats, not to a permanent rating assigned to the interface.

Noah should record what would invalidate the result: signing into the sensitive service later, copying private files onto the computer, or authenticating a command-line tool. A clean test describes one moment. An invalidation list tells the next operator when to stop trusting that observation.

Finally, have a second person read the worksheet without seeing the interface. Ask them to identify the protected resource, blocking mechanism, and failure test. If they infer a separate computer merely from “separate bot,” rewrite the record. Good evidence should survive handoff without requiring the original operator’s intuition.

Make the worksheet resource-specific. One row might cover a practice browser session, another a sample file, and a third an intentionally harmless terminal identity. Do not write “all data” because no single small test supports that conclusion. A marker proves the tested file path was shared. It does not prove every possible path, service, or future configuration behaves identically.

Separate prevention from detection. A real boundary blocks reachability. A state card, inventory, or monitoring bot may reveal that sensitive state appeared, but detection after appearance is not the same as preventing access. Use detection to catch drift and trigger cleanup. Do not describe it as the wall itself.

Noah can now compare three designs honestly. Separate screens organize public research and payroll conversations but leave documented shared state. A cleaned shared computer reduces what is currently present but requires repeated verification. A separate account computer offers the documented separation unit, provided people do not copy the same sensitive state across. The right choice follows the protected resource and consequence.

End the review with a one-sentence operating rule. Noah’s could be: “Use these screens for public and synthetic work only; payroll stays on a separate verified environment.” A different team may accept a cleaned shared computer for a temporary task. What matters is that the rule follows evidence instead of screen appearance.

Attach the rule to onboarding for anyone who can create a screen or sign into a service. A boundary decision known only to Noah will fail when a colleague sees an empty screen and repeats the original assumption. Show the shared-computer diagram, run the harmless marker test, and require the colleague to explain which layer the screen separates. Teaching the mechanism produces a reusable judgment instead of a warning people forget.

Keep reading: [approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility), [approval gates for bots](/blog/approval-gates-for-bots), [bot prompt engineering](/blog/bot-prompt-engineering), and [how to set approvals](/blog/how-to-set-grok-bot-approvals).

## Frequently Asked Questions

### Is a separate bot screen useless for safety?

No. A separate screen can improve task clarity, review, and operator attention. Those are safety benefits, but they are organizational rather than isolation guarantees. The Isolation section of VERIFIED-FACTS says screens are work surfaces, not security boundaries. Use screens to separate jobs, then use cleanup, narrow authority, or a separate account computer when you must block access to sessions, files, or command-line credentials.

### What proves that a security boundary exists?

Name the protected resource, the mechanism that blocks reachability, and a harmless test that would fail if the block were absent. For bot screens on one account, the verified Isolation facts say shared sessions and files cross the visual separation. A synthetic marker or disposable practice account can demonstrate that fact. Appearance, naming, and an empty conversation are not blocking mechanisms.

### Does running as non-root isolate one bot from another?

No supported fact establishes that conclusion. The Isolation section says the bot runs as a non-root user on a managed Linux virtual machine. That describes privilege on the host. The same section says all bots share one persistent computer and warns against using separate bots as a security boundary. Keep the two statements together and do not turn host privilege reduction into per-screen isolation.

### What should I do before opening sensitive data?

Complete the four-column worksheet: resource, claimed boundary, blocking mechanism, and failure test. If the mechanism is merely a separate screen, treat it as organizational. Clean shared state or move the sensitive task to a separate account computer, then run a harmless verification. You are ready only when the observed result matches the boundary you intended, not when the interface looks tidy.
`,
};

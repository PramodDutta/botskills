import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Where a Bot Cookie Actually Lives and How Long It Stays',
  description:
    'Follow a browser cookie from sign-in to reuse on a shared bot computer, learn what keeps it alive, and practice a reliable session cleanup check.',
  date: '2026-08-29',
  category: 'Reference',
  content: `
# Where a Bot Cookie Actually Lives and How Long It Stays

Priya signs into a supplier portal on Monday using a bot named Purchasing. On Friday she opens a bot named Research, visits the same portal, and finds the supplier account already signed in. She asks the natural question: which bot owned the cookie?

The useful answer is that the cookie did not live inside either bot’s name. It lived in browser state on the shared account computer.

A **cookie** is a small piece of data a website asks a browser to store and return with later requests. Some cookies help maintain an authenticated session, which is the continuing signed-in relationship between the browser and a service. A cookie is not always a password, and not every cookie authenticates. Yet an authentication cookie can let the browser act as the signed-in account until the service or browser stops accepting it.

The Isolation section of VERIFIED-FACTS says all bots on an account share one persistent cloud computer. It specifically says browser cookies and signed-in sessions are shared across bots. This reference explains **where a bot cookie actually lives**, what determines its practical lifetime, and how Priya can verify that a session is truly gone.

## Place the cookie in the browser profile on the account computer

Start with location. The website sends cookie data to the browser. The browser stores it in its profile on the computer. Later visits from that browser profile can return the data according to the site’s rules.

The Isolation section of VERIFIED-FACTS says the computer is assigned to the user account, not an individual bot. It also says each bot gets a screen on that shared computer. Therefore, “the Purchasing bot’s cookie” is misleading shorthand. A more accurate phrase is “the supplier cookie in the shared browser state.”

| Layer | What it contains | Does the bot name own it? | Useful operator question |
|---|---|---|---|
| Bot screen | Visible work surface and conversation | No browser ownership claim | Which job am I reviewing? |
| Browser profile | Cookies and active web state | Shared under verified facts | Which identities are signed in? |
| Account computer | Persistent environment for all account bots | Assigned to the user account | What state survives screen changes? |
| Website backend | Server-side session records and policy | Controlled by the service | Has the session been revoked? |

This layered picture keeps a browser artifact from being mistaken for a chat artifact.

## Separate cookie storage from session validity

Storage answers, “Is data present in the browser?” Validity answers, “Will the service still accept it?” Those are related but not identical.

A browser may retain a cookie that the service has expired or revoked. The service may also maintain a session record that ends when Priya signs out, changes a password, or uses an account-security control. Exact rules differ by service, so do not invent a universal number of hours or days.

The verified Isolation facts make no product claim about a cookie lifetime. They establish persistence of the cloud computer and sharing of cookies and sessions across bots. The issuing website determines whether a particular cookie remains usable. This is why the answer to “how long it stays” is a condition, not a fixed number: it stays locally until browser or cleanup behavior removes it, and it stays useful only while the service accepts the associated session.

## Follow Priya’s supplier session across five days

On Monday at 10:00, Priya uses Purchasing to open the portal. The site authenticates her and the browser stores session state. She closes the bot screen at 10:30 but does not sign out.

On Wednesday, the cloud computer remains persistent. On Friday, Research opens another screen on that same computer. It visits the supplier URL. Because the browser state and signed-in sessions are shared across bots according to the Isolation section, the portal can recognize the existing session.

| Moment | Priya’s action | Browser state | Service state |
|---|---|---|---|
| Monday 10:00 | Signs in | Authentication cookie stored | Session accepted |
| Monday 10:30 | Leaves screen | Cookie remains unless removed | Session may remain accepted |
| Wednesday | Does nothing | Persistent computer retains state | Service policy continues independently |
| Friday | Opens portal from Research | Browser presents relevant state | Site decides whether it is valid |

The five-day span is Priya’s invented example, not a product allowance or promise. Its purpose is to show which clock belongs to whom.

## Stop using the bot roster as a cookie inventory

A roster tells you which bots exist. It does not tell you which sites remain authenticated in the browser. Renaming Purchasing, hiding its conversation, or creating Research changes the work organization but not the browser’s stored state.

The Isolation section of VERIFIED-FACTS says, “Do not use separate Bots as a security boundary.” It also says screens are work surfaces rather than separate security boundaries. Cookie ownership is one reason for that warning.

[Inbox Triage](/bots/inbox-triage), [Lead Scout](/bots/lead-scout), [Source Verifier](/bots/source-verifier), and [Citation Checker](/bots/citation-checker) can carry distinct instructions. If each is on the same account, do not infer distinct cookie jars from those names. Their charters organize intended conduct, while browser state belongs to the shared environment.

For the larger picture, read [One Computer, Many Screens](/blog/grok-bot-one-computer-many-screens) and [the shared-computer security guide](/blog/grok-bot-shared-computer-security).

## Read four different endings instead of saying the cookie expired

“Expired” is often used for several different events. Precise language helps Priya choose the correct cleanup.

| Ending | What changed | What may remain | Verification |
|---|---|---|---|
| Website sign-out | Service ends or changes the session | Cookie data may still exist | Revisit and confirm signed-out state |
| Browser cleanup | Local cookie data is removed | Server may retain session records | Check service security page if available |
| Service expiration | Server stops accepting session | Stale local data may remain | Reload and observe authentication request |
| Credential revocation | Issuer invalidates broader authority | Browser artifacts may remain unusable | Confirm old session cannot act |

The exact behavior belongs to the website. The method is universal: name whether you changed local storage, server validity, or both.

## Treat closing a screen as navigation rather than sign-out

Closing or switching a bot screen changes what Priya is viewing. It does not necessarily send a sign-out request to the supplier portal or erase browser storage.

The verified facts do not claim that screen closure clears cookies. They claim the opposite architecture at the relevant level: the persistent computer and its browser state are shared. Therefore, Priya should require positive evidence of sign-out rather than infer it from disappearance of a screen.

A positive sign-out check is simple. Visit the service again from another bot screen. Confirm that it requests authentication and shows no private account material. If the service offers a session-management page, inspect it and end the relevant session there. Do not print or copy cookie values as part of the test.

[Delete a Grok Bot Safely](/blog/delete-a-grok-bot-safely) covers this ordering during teardown.

## Distinguish cookies from downloaded files and terminal credentials

All three may provide continuity, but their storage and cleanup differ. A cookie belongs to browser state. A downloaded export belongs to the filesystem. A terminal token or key belongs to command-line configuration or another local credential store.

The Isolation section of VERIFIED-FACTS lists browser cookies, signed-in sessions, files, and command-line credentials separately, then says all are shared across bots. That list tells you not to stop after clearing one category.

| Artifact | Typical symptom | Cleanup location | Cross-check |
|---|---|---|---|
| Cookie or web session | Site opens as Priya | Browser plus issuing service | Revisit from another screen |
| Downloaded file | Export appears in local folder | Shared filesystem | Search the known folder |
| Command-line credential | Terminal tool identifies Priya | Local config plus credential issuer | Run a harmless identity check |
| Hosted MCP sign-in token | Hosted connection remains available | Backend connection controls | Do not search disk for the token |

The last row reflects another Isolation fact: hosted MCP sign-in tokens stay with Cursor’s backend and are never stored on the computer. That storage exception does not make browser cookies private to a bot.

## Use a session register without recording secret values

A session register is a short list of services that were authenticated on the shared computer. Record the service name, account label, sign-in date, intended task, and planned revocation check. Never paste raw cookie values, passwords, or tokens into it.

Priya’s row might read: Supplier portal, purchasing-test identity, signed in August 25, used for invoice sample, sign out after review, verify from Research screen. The register does not enforce cleanup. It makes forgotten state discoverable.

Add a status with three allowed values: active, verified signed out, unresolved. “Probably ended” is not a useful status. If the service behaves unexpectedly, mark unresolved and avoid using that shared computer for conflicting work until someone verifies it.

[Claim Provenance Tracker](/bots/claim-provenance-tracker) illustrates the broader discipline of recording origins. [Least Privilege for Bots](/blog/least-privilege-bots) explains why the account used for a practice task should carry narrow authority.

## Verify sign-out from a different work surface

The best beginner test uses the architecture rather than fighting it. Sign out on Purchasing. Move to Research. Visit the supplier site. If the site opens at a login page and shows no private account information, Priya has evidence the shared browser no longer holds a usable signed-in session for that flow.

This test can fail, which makes it useful. If Research still opens the supplier account, return to the service’s security controls and end sessions. Then repeat. If a sensitive session cannot be confidently ended, stop unrelated tasks on that account computer.

Do not treat a single login-page appearance as proof against every path. Services can have multiple domains, subdomains, or linked accounts. Check the specific surfaces used during the task. Keep the claim narrow: “This tested supplier URL no longer opens as the purchasing-test identity.”

That sentence is stronger than “cookies cleared” because it records an observable result.

## Answer the person who says cookies are harmless strings

At the storage level, a cookie is data. The strongest objection says data cannot do anything by itself, so sharing it is not a meaningful risk.

The reply is that a service can treat presented cookie data as evidence of an authenticated session. The important property is not whether the string looks secret to Priya. It is whether the service accepts the browser as her account. A harmless preference cookie and an authentication cookie deserve different handling.

The objection wins for cookies that only remember a theme or language and reveal nothing sensitive. It fails when the observed result is a private account opening without fresh authentication. Test behavior instead of guessing from cookie names.

## Delete bots only after session cleanup is complete

The Isolation section of VERIFIED-FACTS says deleting a bot does not remove shared-computer files or browser sessions. That is the product fact Priya needs during teardown. If she deletes Purchasing first, the supplier session can remain available to Research.

The safe sequence is: identify services used, sign out, revoke sessions where appropriate, verify from another screen, remove related downloads, and only then delete the bot if it is no longer useful. [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials) covers neighboring command-line concerns.

Deletion is a roster action. Session revocation is an authority action. File removal is a storage action. Keep those verbs separate in both your checklist and your report.

## Diagnose the four common cookie mistakes by symptom

| Symptom | Likely mistaken belief | Actual mechanism to inspect | Correct next step |
|---|---|---|---|
| New bot opens old account | Cookies belong to bot names | Shared browser state | Sign out and verify |
| Deleted bot, login remains | Deletion wipes environment | Session outlived roster item | Revoke at service |
| Cleared browser, terminal still works | All credentials are cookies | Command-line state is separate | Revoke CLI credential |
| Cookie exists but login fails | Stored data always stays valid | Service rejected session | Remove stale state and recheck |

The table is deliberately mechanical. It prevents one visible symptom from becoming a story about the bot’s intentions. Inspect storage and validity first.

[Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained) clarifies authority terms. [Bot Prompt Engineering](/blog/bot-prompt-engineering) covers instruction design. Neither changes the cookie’s location.

## Perform Priya’s three-part cleanup drill

Use a disposable practice account on a non-sensitive service. First, sign in from one bot screen and confirm the account identity. Second, switch screens and observe whether the same shared browser opens that account, as the Isolation facts predict. Third, sign out and verify from the other screen that authentication is required.

Record local state, service state, and observed result. Do not inspect or copy raw cookie material. Delete any downloaded practice files after the exercise.

You can now do one concrete thing: prove that a web session on the shared bot computer is active or ended. That skill is more useful than memorizing a cookie lifetime because it works with the service’s current policy.

Extend the drill by distinguishing three observations. “The service opens signed in” proves a usable session for that tested path. “The service asks for authentication” shows the tested path no longer accepts the prior browser state. “The cookie list looks empty” describes local storage but does not alone prove that every service-side session record ended. Write the observation you made instead of upgrading it into a broader claim.

Priya should test account identity, not merely page appearance. A public landing page can look signed out while another path still exposes private material. Conversely, a familiar logo or remembered preference does not prove authentication. Navigate to a harmless account page and check the displayed practice identity without changing data.

If multiple identities were used, add one register row per identity. Signing out of the test account does not establish that an administrator account used last month also ended. Keep each claim tied to a service, identity, path, and date.

Session cleanup also needs an ownership rule. The person who signs in should either sign out and verify during the same work period or hand the unresolved register row to a named operator. Anonymous ownership is how temporary access becomes permanent background state. The handoff should carry no secret value, only enough context to locate the service’s own session controls.

Add failure cases to the drill. If the other screen still opens the account, do not keep refreshing and hope. Return to the service, inspect its account-security controls, end the tested session, and repeat. If the service offers no clear revocation path, mark the row unresolved and stop using that account computer for conflicting work.

If the account opens but shows a different identity, record that identity rather than declaring success. Multiple accounts can coexist, and ending one session may expose another. The security question is which identity remains reachable, not whether Priya’s preferred account disappeared.

Browser cleanup should also be scoped. Clearing every site can disrupt unrelated work and still fail to revoke server-side sessions. Start with the known service and its own sign-out controls. Use broader browser cleanup only when its target and impact are understood, then verify every important session affected by it.

Treat remembered preferences as clues, not proof. A site may retain language or theme after authentication ends. Another may show a generic welcome page while a private subpage remains active. The practice identity check resolves this ambiguity by testing authenticated behavior on a harmless page.

At handoff, Priya can write: “Supplier practice identity no longer opens at the tested account URL as of August 29; no raw cookie was inspected.” The sentence is narrow, dated, and repeatable. It teaches the next operator exactly what was verified and what was not.

Recheck the register before any task with a different confidentiality level. A session verified ended yesterday can be re-created today by a new sign-in. The register records events; it does not enforce a permanent state.

Keep reading: [approval rules and reversibility](/blog/grok-bot-approval-rules-reversibility), [approval gates for bots](/blog/approval-gates-for-bots), [prompt injection in email](/blog/grok-bot-prompt-injection-email), and [how to set approvals](/blog/how-to-set-grok-bot-approvals).

## Frequently Asked Questions

### How many days does a bot cookie last?

There is no supported universal number. The Isolation section of VERIFIED-FACTS establishes that browser cookies and sessions are shared across bots on a persistent account computer, but it does not publish a cookie lifetime. Local retention depends on browser state, while practical validity depends on the issuing service. Test the specific service by revisiting it and observing whether it still accepts the session.

### Does switching to another bot clear the session?

No. The verified Isolation facts say each bot has a screen on one shared computer and that signed-in sessions are shared. Switching screens changes the work surface, not the browser identity. Use the service’s sign-out or session-revocation controls, then visit the service from another screen and confirm that fresh authentication is required.

### Does deleting a bot delete its cookies?

No. The Isolation section explicitly says deleting a bot does not remove browser sessions or shared-computer files. Treat deletion as roster cleanup. Treat sign-out and revocation as session cleanup. Perform the session work first, verify it from another screen, remove related files, and delete the bot only when you no longer need its organizational history.

### What should a session register contain?

Record the service, a non-secret account label, sign-in date, purpose, planned cleanup, and one of three statuses: active, verified signed out, or unresolved. Never record passwords, raw cookies, or tokens. The register should help another operator locate authority and test its status without becoming a new secret store. Review it before starting a task with a different confidentiality level.
`,
};

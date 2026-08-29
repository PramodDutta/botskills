import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'What a Pasted Prompt Inherits the Moment It Runs',
  description:
    'Learn what a pasted prompt inherits on a shared bot computer, how that inheritance changes risk, and how to check the reachable environment before a run.',
  date: '2026-08-29',
  category: 'Guide',
  content: `
# What a Pasted Prompt Inherits the Moment It Runs

Mira copies a useful prompt from a forum into a fresh bot. The bot name is new, the conversation is empty, and the screen shows no old work. She reads those visual cues as a clean start. The prompt then opens a browser session that another bot signed into yesterday and finds a spreadsheet left on disk.

Nothing jumped between bots. The prompt simply began inside an environment that already existed.

This is the mechanism behind **what a pasted prompt inherits**. Inheritance means receiving access to state that was present before the current instruction began. A prompt inherits whatever its running environment can already reach. It does not need to contain a password, request a login, or mention another bot by name.

The Isolation section of [VERIFIED-FACTS](/blog/grok-bot-shared-computer-security) records the product rule: every bot on one account shares one persistent cloud computer. It also records that browser cookies, signed-in sessions, files, and command-line credentials are shared across those bots. This lesson turns that rule into a pre-paste check a first-time operator can perform.

## Replace the blank-chat story with an environment story

A blank conversation proves only that the conversation contains no earlier messages. It says nothing about the browser, filesystem, or command line surrounding it. Think of opening a new document on a family laptop. The page is blank, but the laptop still knows the Wi-Fi password, holds downloaded files, and may have a signed-in browser.

The Isolation section of VERIFIED-FACTS says each bot gets its own screen on the shared computer. A screen is a work surface, not a reset button. The same section quotes the product documentation directly: the screens are separate work surfaces, not separate security boundaries.

That distinction changes the first question. Do not ask, “Has this bot seen the prompt before?” Ask, “What can the computer already reach?” The second question discovers inherited authority. The first discovers only chat history.

| Visible cue | Tempting interpretation | What it actually proves | Better check |
|---|---|---|---|
| New bot name | New machine | A new label exists | Inspect shared state |
| Empty chat | No prior access | No prior messages appear here | Check browser and files |
| Separate screen | Isolated credentials | Work is visually separated | Test reachable accounts |
| No password in prompt | No authenticated action | The text carries no password | Check existing sessions |

This lesson is not asking you to fear every pasted instruction. It is asking you to price it according to the room where it runs.

## Define inheritance as reachable state plus executable instruction

A prompt is an instruction expressed in text. State is information the environment remembers, such as a file, cookie, or command-line login. Reachability means the running process can access that state. Inheritance occurs when the instruction begins with that reachable state already available.

The three parts matter separately. A harmless instruction in a sensitive environment may still expose data through an unexpected search. A hostile instruction in an empty environment has less to use. A sensitive environment plus a broad instruction creates the largest uncertainty.

Use this compact model:

| Component | Question | Example | Operator response |
|---|---|---|---|
| Instruction | What is the text asking for? | Summarize every recent document | Narrow the request |
| Reachable state | What is already available? | Client exports in a shared folder | Move or remove them |
| Capability | What actions can occur? | Browser can open a signed-in account | Sign out or use a safer account |
| Output path | Where can results go? | A local draft file | Review before external use |

This model prevents magical thinking. The pasted words do not carry yesterday’s login. The computer carries it. The words may cause the bot to use it.

## Trace Mira’s prompt from clipboard to shared computer

Mira’s prompt says: “Review my recent research, find missing evidence, and assemble one concise brief.” It sounds bounded. It does not name email, a drive, or a customer account.

At 09:00, another bot used the browser to sign into a research service. At 09:15, that bot downloaded three reports. At 10:00, Mira creates the fresh bot and pastes the prompt. The instruction sees “recent research” as an invitation to search what is reachable. The signed-in browser and downloaded reports satisfy that description.

The Isolation section of VERIFIED-FACTS says signed-in sessions and files are shared across bots. That product fact explains the result without guessing about hidden model behavior. Mira’s prompt inherited an environment containing a live session and three files.

| Time | Event | State added | Who can encounter it later |
|---|---|---|---|
| 09:00 | First bot signs in | Browser session | Bots on the same account computer |
| 09:15 | Reports download | Three local files | Bots on the same account computer |
| 10:00 | Mira pastes prompt | New instruction | The fresh screen runs it |
| 10:02 | Bot searches recent work | Existing state is used | Mira sees the assembled brief |

No cross-bot transfer step appears because none is required. The shared computer is the continuity.

## Separate prompt content from environmental authority

People often review pasted text for suspicious phrases. That is useful, but incomplete. Prompt content tells you the requested behavior. Environmental authority tells you how far that behavior can travel.

Compare “list the files here” on an empty test folder with the same sentence on a computer holding contracts. The text is identical. The consequence is different. The security review must therefore include both the sentence and its location.

[Email Injection Sentinel](/bots/email-injection-sentinel) teaches a related habit by treating untrusted text as data rather than authority. [Source Verifier](/bots/source-verifier) focuses on whether evidence supports a claim. [Citation Checker](/bots/citation-checker) checks references. [Claim Provenance Tracker](/bots/claim-provenance-tracker) records where assertions came from. Each bot charter can shape behavior, but the Isolation section of VERIFIED-FACTS says separate bots are not a security boundary.

Use those bots as teaching examples, not as vaults. A careful charter can tell a bot not to open private files. It cannot turn a shared filesystem into a separate filesystem.

## Inventory the four inherited surfaces before evaluating the prose

The required inventory comes directly from the Isolation section of VERIFIED-FACTS: browser cookies, signed-in sessions, files, and command-line credentials are shared across bots. These are the four surfaces a beginner should check before pasting unfamiliar instructions.

A cookie is a small piece of browser state a site can use to recognize a session. A signed-in session is the authenticated relationship that lets the browser act as an account without asking for the password again. A file is persistent data on disk. A command-line credential is authentication used by a terminal program.

| Surface | Beginner’s inspection | Unsafe finding | Safer preparation |
|---|---|---|---|
| Browser cookies | Open relevant sites and inspect account state | A private account opens signed in | Sign out and verify |
| Signed-in sessions | Check which identity the site shows | An admin or production identity appears | End that session |
| Files | Review the working folders and downloads | Customer or credential material remains | Remove or relocate it |
| Command-line credentials | Ask which tools are already authenticated | A production tool can act immediately | Revoke or avoid the tool |

The table is a memory aid, not a claim that these checks create perfect isolation. They reduce inherited state before the run.

## Treat a fresh bot as a fresh viewpoint, not a fresh room

A viewpoint changes what you see and how work is organized. A room changes what is physically reachable. The Isolation section of VERIFIED-FACTS says the computer is assigned to the user account, not an individual bot. It also says each bot receives a screen on that computer.

Imagine four desks facing the same workshop shelves. One desk belongs to [Inbox Triage](/bots/inbox-triage), another to [Lead Scout](/bots/lead-scout), a third to Source Verifier, and a fourth to Mira’s temporary research bot. Separate desk labels help operators remember each job. They do not place locks on the shelves.

This analogy has a useful limit. Software is not literally a workshop, and exact access depends on current state. Its purpose is to prevent one specific error: inferring a locked room from a separate screen.

For a deeper architecture explanation, read [One Computer, Many Screens](/blog/grok-bot-one-computer-many-screens) and [the shared-computer security guide](/blog/grok-bot-shared-computer-security). Return here when the immediate question is whether to paste a prompt into the environment you have now.

## Read broad nouns as search instructions with hidden scope

Mira’s phrase “my recent research” hides a scope decision. What counts as “my”? Which folders count as recent? Does a signed-in service count as research? The prompt leaves those answers to the runtime and the bot’s interpretation.

Broad nouns often create inherited scope:

| Broad phrase | Hidden scope question | Bounded rewrite |
|---|---|---|
| My documents | Which folders and accounts? | Read only the three named files |
| Recent messages | Which mailbox and date range? | Read messages in the test label from August 28 |
| Our customers | Which system and fields? | Use only the supplied sample CSV |
| Fix the project | Which repository and operations? | Diagnose the named test failure without editing |

The bounded rewrite does not add a security wall. It reduces ambiguity. If unrelated state remains reachable, an instruction can still encounter it through error or follow-up. Pair precise prose with environmental cleanup.

[Bot Prompt Engineering](/blog/bot-prompt-engineering) explains prompt clarity. [Least Privilege for Bots](/blog/least-privilege-bots) explains narrowing grants. The pasted-prompt lesson connects them: precise text controls requested scope, while reduced state controls available scope.

## Run a reachability test that cannot cause external harm

Before using a prompt from an unfamiliar source, run a benign reachability test. Benign means designed not to send, publish, pay, delete, or change external records. The test should reveal the environment without exploiting it.

Create a temporary instruction in your own words: “Do not open or change anything. List the categories of local state and signed-in services that appear reachable, without printing secrets or private contents. Stop after the inventory.” Review the response skeptically. Absence from the list does not prove absence from the computer, because discovery can miss state.

Then inspect manually. Open the browser and verify account identities. Review known working directories and downloads. Check whether command-line tools you remember using still authenticate. The bot’s inventory is a clue; your direct checks are evidence.

The Isolation section of VERIFIED-FACTS also says hosted MCP sign-in tokens stay with Cursor’s backend and are never stored on the computer. That fact describes token storage, not a separate-bot boundary. Keep the distinction exact: one token type staying off disk does not make every tool or session isolated.

## Remove inherited state in the system that issued it

Deleting a local artifact and revoking the authority behind it solve different problems. If a downloaded report is the problem, remove the report from the shared computer. If a browser session is the problem, sign out through the service and verify the session ended. If a command-line credential is the problem, revoke it at its issuer and remove the local configuration.

The Isolation section of VERIFIED-FACTS says deleting a bot does not remove shared-computer files or browser sessions. Therefore, deleting Mira’s fresh bot would not clean the environment it inherited. The cleanup target is the shared state, not the screen label.

[Delete a Grok Bot Safely](/blog/delete-a-grok-bot-safely) covers teardown order. [How to Isolate Grok Bot Credentials](/blog/how-to-isolate-grok-bot-credentials) covers credential placement. Use deletion to remove a bot you no longer need. Do not use it as a substitute for session revocation or file cleanup.

## Answer the person who says reading is harmless

The strongest objection is that Mira only asked for a brief. Nothing was sent, deleted, or purchased. Why make a ceremony out of a read-only task?

Because reading can still cross a confidentiality boundary. A summary can mix material from two clients. A private file can shape a recommendation without being cited. A signed-in page can reveal information the operator did not intend to include. The harm is not necessarily an external action. It can be silent contamination of the result.

The objection wins in a deliberately empty practice environment containing only public or synthetic data. There, a pasted prompt has little sensitive state to inherit. The lesson is not “never paste.” It is “match the review to reachable state.” If the environment is intentionally disposable, keep the ceremony short and verify that premise.

## Distinguish instruction boundaries from computer boundaries

An instruction boundary says what the bot should do. A computer boundary limits what the running environment can reach. They solve different layers of the problem.

“Use only sample.csv and do not open the browser” is an instruction boundary. Removing private files and ending browser sessions changes the environment. Moving sensitive work to a genuinely separate account computer changes the isolation unit described in VERIFIED-FACTS.

The Isolation section says, verbatim, “Do not use separate Bots as a security boundary.” That sentence is the decisive product claim. It does not say bot charters are useless. It says a bot name cannot substitute for environmental separation.

[Grok Bot Permissions Explained](/blog/grok-bot-permissions-explained) helps separate available capabilities from desired behavior. [Prompt Injection in Email](/blog/grok-bot-prompt-injection-email) shows why untrusted text needs restricted authority. Together they reinforce the same teaching point: text and environment must be reviewed as a pair.

## Record a before-and-after state card for repeatable checks

A state card is a short written inventory captured before and after a run. It makes inheritance visible to the next operator. Use four rows, one for each documented shared surface.

Write the date, browser identities, important sessions, relevant local folders, and authenticated command-line tools. Do not copy secret values into the card. Record only enough to locate and revoke them. After the run, note new downloads, new sessions, and credentials that were created.

Mira’s card might say: browser signed out of research service; downloads folder contains only three synthetic PDFs; no command-line tool authenticated; output limited to local brief.txt. After the run, it says: no new session; one local brief created; synthetic PDFs retained for tomorrow’s exercise.

That small record turns “I think it was clean” into a claim another person can test. [VM Overwatch](/bots/vm-overwatch) is a useful catalog example for monitoring shared-computer state, but its name still does not create isolation. The record is evidence; the bot is an organizational aid.

## Verify the lesson with one controlled marker file

You can demonstrate inheritance without using private data. Create a harmless marker file on one bot’s shared computer. Give it an invented sentence such as “blue lantern, practice marker, August 29.” Switch to a different bot screen and ask it to read only that exact file path. If it can, you have observed shared file reachability.

Do not use a secret as the marker. Do not ask for a broad filesystem search. The exercise should prove one mechanism with minimal exposure. Afterward, delete the marker and verify it is gone.

Your concrete ability at the end of this lesson is now testable: before pasting an unfamiliar prompt, you can inventory cookies, sessions, files, and command-line credentials, then decide whether the environment is safe enough. The marker exercise teaches why that inventory matters.

Repeat the exercise after deliberately changing one harmless surface. Sign into a disposable practice site, add one synthetic file, or authenticate a tool that can reach only invented data. Update the state card, run the same narrow inventory, and compare the two results. This second pass teaches change detection rather than one-time inspection. Remove the practice state afterward and confirm the card returns to its starting condition. If it does not, label the environment unresolved and do not paste the unfamiliar prompt yet.

That final unresolved label is a decision, not a delay without an owner.

Keep reading: [what approvals can and cannot undo](/blog/grok-bot-approval-rules-reversibility), [how approval gates work](/blog/approval-gates-for-bots), and [how prompts earn narrow authority](/blog/bot-prompt-engineering).

## Frequently Asked Questions

### Does a new bot start with no files?

No. The Isolation section of VERIFIED-FACTS says all bots on an account share one persistent cloud computer and that files are shared across those bots. A new bot provides a new screen, not a new disk. Check the relevant folders and downloads before treating the environment as empty. If the task needs a genuinely clean practice space, remove unrelated material and verify the result with a harmless marker rather than relying on the new bot’s name.

### Can careful prompt wording prevent inheritance?

Careful wording narrows requested behavior, which is valuable, but it does not remove reachable state. An instruction such as “read only sample.csv” is clearer than “review my documents.” The browser sessions, other files, and command-line credentials still exist until you remove or revoke them. Use precise wording and environmental cleanup together. One controls interpretation; the other reduces what the computer can supply to that interpretation.

### Does deleting the bot erase what its prompt found?

No. The Isolation section of VERIFIED-FACTS says deleting a bot does not remove files or browser sessions from the shared computer. Delete generated files directly, end sessions through their services, and revoke credentials at their issuers. Then verify those actions from another screen. Bot deletion can tidy the roster, but it is not evidence that inherited state or generated artifacts disappeared.

### What is the one check to perform before pasting?

Write a four-row state card covering browser cookies, signed-in sessions, files, and command-line credentials. Those are the shared surfaces named in the Isolation section of VERIFIED-FACTS. Mark each row clean, intentionally present, or unresolved. Do not paste until unresolved items are removed or consciously accepted for that task. This takes a few minutes and converts an invisible assumption into a reviewable decision.
`,
};

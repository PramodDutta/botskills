import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Attachment Limits: 25 MB, Six Files, and Formats That Fail',
  description:
    'Every Grok Bot attachment limit as of September 2026: 25 MB files, 200 MB video, six per send, no protected files, with the fix for each and when to skip chat.',
  date: '2026-09-23',
  category: 'Reference',
  content: `
# Grok Bot Attachment Limits: 25 MB, Six Files, and Formats That Fail

You dragged the files into the composer, pressed Send, and the Bot either refused one, ignored one, or answered as if your spreadsheet were blank. Almost every one of those outcomes maps to a single line in a short list of documented attachment limits, and each line has a documented way around it.

This page collects every attachment limit the Grok Bot docs state as of 23 September 2026, walks one engineer's seven-file bug report through them, and then answers the question the limits raise but do not settle: when a file belongs on the shared cloud computer rather than in the chat. The sources are the [Files and results page](https://docs.x.ai/grok-bot/files-and-results), the [Troubleshooting page](https://docs.x.ai/grok-bot/troubleshooting) and the [mobile page](https://docs.x.ai/grok-bot/mobile). Where those pages are silent, this one says so instead of guessing.

## Run the five documented checks before you blame the Bot

The troubleshooting page has a section called "An attachment cannot be read", and it is a checklist of five conditions. Size gets two rows in the table below because video has its own, higher ceiling.

| Condition | What the docs state | First fix |
|---|---|---|
| Size of a document, image or audio file | Up to 25 MB each | Export a smaller version, or split it |
| Size of a video | Up to 200 MB | Trim to the part that matters, or re-export smaller |
| Files per send | Up to six at a time in the desktop composer | Send the rest in a second message |
| Protection | Encrypted or password-protected files are not readable | Export only what your data policy allows; never paste the password |
| Upload state | The upload must finish before you send | Wait for it, then send |
| File type | It has to be a supported type | Export to PDF, CSV, plain text or an image |

The files page adds one softer sentence that matters more than it looks: large, encrypted, damaged or unusual files may not be readable. The word "may" is doing work there. A file can pass every row in the table and still fail because it is damaged, or because its format sits at the edge of what the reader understands. The response is the same in both cases, which is to export a plainer copy and attach that instead.

Notice what is not in the table. The docs pages read for this article publish no per-conversation storage figure, no daily attachment quota, and no list of banned extensions. If someone quotes you one of those, ask where it came from. As of this writing the documented surface is the five checks and the one softer sentence, and everything below builds on those alone.

## Walk Tomasz's seven files through the checks one at a time

Tomasz runs QA for an online homeware shop. At 09:40 on a Tuesday a customer ticket landed: checkout fails at the payment step in Safari, twice, with a spinner and then a blank page. He had a Bot built from the [Bug Repro Pack Builder](/bots/bug-repro-pack-builder) listing, and he did what most people do on a busy morning. He selected every file he had on the case and dragged all seven into the composer at once.

| File | Size | What stopped it | What he did instead |
|---|---|---|---|
| checkout-safari.mov | 312 MB | Over the 200 MB video ceiling | Trimmed to 38 seconds around the failure, 71 MB |
| prod-session.har | 41 MB | Over 25 MB, an unlisted format, and captured on production | Did not attach it; the Bot captured its own trace on staging |
| console-errors.txt | 2 MB | Nothing | Attached |
| customer-report.eml | 180 KB | Nothing; email files are a supported input | Attached |
| staging-flags.yaml | 6 KB | Nothing, but several Bots read it | Saved once to a project folder on the shared computer |
| test-logins.xlsx | 90 KB | Password-protected, and it held passwords | Not attached at all; he signed in through a takeover |
| payment-error.png | 1.4 MB | Nothing | Attached |

The sizes are Tomasz's, not figures from the docs. What comes from the docs is the line each file crossed. Seven files was also one more than the desktop composer accepts in a single send, so even a perfect set of files could not have gone in one drag.

Three of the seven went through untouched. Three failed for three different reasons, and one of those would have been a problem even if it had fit under every limit. The seventh, the YAML file, failed nothing at all; it simply belonged somewhere other than a chat, which a later section covers. The next three sections take the failures in the order he dealt with them, because the order is part of the lesson: the cheapest fix first, and the file that raised a real question after it.

## Trim the video instead of fighting the 200 MB line

Video is the only input with its own ceiling. Documents, images and audio stop at 25 MB each, and a video can go up to 200 MB. Screen recordings blow through both numbers quickly, and Tomasz's four and a half minutes of Safari came to 312 MB.

Most of that recording was him clicking around the shop before the failure and waiting on a blank page after it. The Bot needed the payment step, the spinner and the blank page, which took 38 seconds. He trimmed to that window, exported at a lower resolution, and got 71 MB, comfortably inside the line and small enough to upload quickly.

That is usually the right move for bug evidence anyway. A reproduction pack built from a 38-second clip points an engineer at the exact moment. A pack built from a five-minute tour asks them to find it.

If the full recording genuinely matters, there is a second documented route: put the file somewhere the Bot's computer can reach and paste a link. The files page says a pasted link works when the Bot can access the page from its computer or through a connector, and that a private page needs a sign-in through the computer or an installed connector first. Treat that as a different permission decision from attaching one file. A link to a shared folder can expose everything else in the folder, and a sign-in you make on the Bot's computer stays there for every Bot on your account to use.

## Refuse the production HAR for a reason the size limit never checks

The HAR file failed two checks at once. At 41 MB it was over the 25 MB line, and HAR is not a format the docs name, even though the inside of one is JSON, which they do name. Tomasz's first instinct was to filter out the irrelevant requests and save the rest as a .json file under the limit.

The better question was where the file came from. Support had captured it from the customer's real session, on production. A production HAR carries whatever the browser sent and received during that session: session cookies, the customer's name and delivery address in the checkout payload, and whatever the payment provider returned. Filtering it down would still leave the interesting requests, which are exactly the ones holding customer data.

The Bug Repro Pack Builder listing states its boundary in one line: it never uses production customer data and never runs against production, staging and synthetic data only, every time. That line is the listing's reason to exist. A bot that can be handed a production capture whenever a human is in a hurry is a bot whose boundary lasts until the first busy Tuesday.

So the fix was not a smaller file. It was a different file. Tomasz asked the Bot to reproduce the failure on staging with a synthetic account and capture its own network trace there, which is what steps three and five of the listing already describe. The size limit is a mechanical gate. The boundary is the judgment gate, and it is the one that stops a customer's session cookie from sitting in a Bot conversation. A file that fits is not the same as a file that belongs.

## Leave protected files protected and keep passwords out of chat

The test-logins.xlsx file was password-protected, so the troubleshooting list had already ruled it out: encrypted or protected files are not readable. The docs pair that with a caution worth quoting in spirit. Do not strip document protection if the unprotected file would break your data policy.

This file had a second problem. It held staging passwords. Unlocking it and attaching it would have put credentials into ordinary chat, which the approvals page tells you never to do with a password or a one-time code. The documented route for a login is a takeover. When the Bot reaches a sign-in page, it hands you control of the computer, you sign in yourself, you return control, and you tell it to continue. For a supported connection the Bot can instead show a secure secret request, where the value is masked, kept out of the transcript and not shown to the model.

At 10:05 the Bot reached the staging sign-in page and asked for help. Tomasz opened Agent Computer, took control, signed in with a synthetic test account, and handed control back. It took about ninety seconds, and no spreadsheet of passwords ever touched the conversation.

One consequence belongs here because it is easy to miss. That staging session now lives in the browser on the shared computer, and every Bot on Tomasz's account can use it. The docs say it without hedging: separate Bots are not a security boundary. If a login should only ever serve one workload, the docs' answer is a separate Cursor user for that workload, not a separate Bot.

## Send six at a time, and say what each file is

After the fixes, Tomasz had four attachments for the chat: the trimmed video, the console log, the customer's email and the screenshot. Four is under six, so one message was enough. On a bigger case, the six-per-send cap on the desktop composer means two messages, and the order matters. Send the files that define the bug first, then the supporting material with a line saying it continues the previous message, so the Bot treats both as one request.

The files page makes a point that is easy to skip: tell the Bot what each attachment is and how to use it. A file name is not an instruction, and a Bot guessing the role of a file is a Bot that can quietly treat a customer's claim as a fact. Tomasz's message read like this:

> The PNG is the customer's screenshot of the failure. The EML is their original report, so treat every step in it as a claim to verify, not a fact. The TXT is the browser console from my own attempt on staging. The MOV is 38 seconds of the failure in Safari, starting at the payment step. Reproduce on staging only, with a synthetic account, and do not open anything on production.

The last sentence restates the boundary inside the request. The security page calls the request itself the strongest place for a boundary, and it costs one line. A Bot that reads its limits in both the description and the message it is acting on has two chances to stop before it does the wrong thing.

## Wait for the upload to finish before you press Send

An unfinished upload is on the docs' list of reasons an attachment cannot be read, and it is the cause that looks most like a Bot failure. You press Send while a large file is still going up, and that attachment joins the ones the docs say cannot be read, even though nothing is wrong with the file itself.

Video is where this bites. A 150 MB recording on hotel Wi-Fi takes long enough that impatience wins. The docs do not describe the progress indicator in detail, so the practical rule is plain: wait until the upload has finished, then send. If the Bot's first reply describes an attachment oddly or not at all, suspect the upload before you suspect the model.

The phone apps follow the same rule with less margin. On iPhone and Android you can take or attach a photo and choose an image or file from inside a conversation, and the mobile page says drafts are saved per conversation when you navigate away. It does not say an upload in progress survives you switching to another app, so when a video is going up from the phone, stay on the screen until it is done.

## Make the Bot list what it could open before it starts

The quiet failure is worse than the loud one. If one attachment of five is unreadable and the Bot does not say so, you get a confident answer built from four files and an assumption about the fifth. The files page recommends asking for an explicit list of anything the Bot could not verify. Write that into the Bot's description, so it happens on every request instead of only on the days you remember to ask.

\`\`\`text
Attachments
Before you start any task that comes with attachments:
1. List every attachment by file name, with what you understood it to be.
2. Mark each one OPENED or COULD NOT OPEN. Never infer the contents of a
   file you could not open from its name, its size, or the message around it.
3. If any file is COULD NOT OPEN, stop and ask me for a PDF, CSV, plain-text
   or image export of it. Do not continue with the other files until I reply.
4. Never ask me to paste a password, a one-time code or a key into chat.
   For a login, ask me to take over the computer.
5. Never request, open or keep a file captured from production. If an
   attachment looks like it came from a production system, stop and say so.
\`\`\`

Line 3 is the expensive one, because it makes the Bot wait for you. It is also the line that stops a wrong answer from looking finished. Line 5 is Tomasz's boundary rewritten as an attachment rule, which means the Bot enforces it even on a day when he forgets his own. Paste the block under the Bot's existing description rather than into one message, because the description is where the docs say durable rules belong.

## Export unusual formats to the four the docs name

The files page lists the common supported inputs by family. It is a list of common inputs, not a complete registry, so a format missing from it is not necessarily unsupported. It is where the word "unusual" starts, and unusual is where the docs say reading may fail.

| Family | What the docs list | If it will not read, export to |
|---|---|---|
| Media | Images, audio and video | A common image format, or a trimmed video |
| Documents | PDF and plain-text documents, Word files | PDF or plain text |
| Office data | Excel and PowerPoint files, CSV | CSV for data, PDF for slides |
| Structured data and code | JSON, YAML, source-code files, Jupyter notebooks | JSON or plain text |
| Web and mail | HTML and email files | PDF or plain text |

The troubleshooting page names the fallback set directly: PDF, CSV, plain text, or an image. Pick the one that keeps the part the Bot needs. A spreadsheet the Bot must calculate with should become CSV, not a PDF of the grid. A slide deck the Bot must summarize can become a PDF. A design file the Bot only needs to look at can become an image. A log in an odd container format can usually be saved as plain text.

Test an unusual format once with a throwaway request before you build anything on it. If it reads today, that is useful information, but the docs do not promise it will read next month, so a routine that depends on an unlisted format should convert first.

## Use the phone share sheet only for what it accepts

The platforms differ in how files get in, and the difference that catches people is Android's share sheet.

| Platform | Share sheet from other apps | Inside the Grok Bot app | Per-send count in the docs |
|---|---|---|---|
| Desktop (macOS, Windows, Linux) | Not described in the docs | Attachment control, drag into the composer, paste images and links | Six at a time |
| iPhone | A photo, file, link or text | Take or attach a photo, choose an image or file | Not stated |
| iPad (iPadOS 18 or later) | The docs describe the share sheet for iPhone only | The iOS app runs on iPad | Not stated |
| Android | Text only, currently | Take or attach a photo, choose an image or file | Not stated |

On iPhone the flow is short. Share from any app, choose Grok Bot, pick a chat, then choose Attach, and the item lands in that conversation's composer so you can add a message before you send. On Android, sharing a PDF from a file manager into Grok Bot is not a documented path today, because the share sheet accepts text. Open the Grok Bot app instead, go to the conversation, and attach the file from there.

The phone path is right for a quick photo of a whiteboard or a receipt. It is the wrong path for a batch, which is the next section.

## Point the Bot at the receipts folder instead of attaching forty files

Six files per send turns a month of receipts into seven or eight messages, and every one of them is a chance to miss a file or attach the same receipt twice. It also makes the conversation the only place those files exist in one set, which is a poor home for financial evidence.

The [Expense Reconciler](/bots/expense-reconciler) listing is built the other way round. It pulls the week's transactions and reads the receipts where they already live, in the drive and the mailbox, through its integrations. You attach one thing: the written expense policy, because the listing asks for the rules themselves rather than a summary of them, and flagging exceptions against a policy the Bot inferred produces findings that cite nothing. That is one PDF, far inside every limit on this page.

The boundary on that listing is worth reading next to the attachment question. It never sends a message and never changes a reimbursement, an approval state or an amount. It drafts and stops. A Bot with read access to your receipts folder and no write access to the expense system is a Bot you can hand a whole month without watching it, and that is a better trade than dragging forty attachments into a chat six at a time.

If a stray receipt only exists as a phone photo, the iPhone share sheet can drop it into the conversation, and the Bot can read it alongside the rest. For anything recurring, the folder wins.

## Put shared material on the computer, not in every chat

Every Bot on your account works on one persistent cloud computer, and the files page says Bots can read files other Bots save in /workspace. That changes which files should be attachments at all.

| Situation | Attach in chat | Save to /workspace | Why |
|---|---|---|---|
| Source material for one request | Yes | No | The request and its evidence stay together |
| Config or reference several Bots read | No | Yes, in a named project folder | One copy, no drift between conversations |
| A file a group of Bots must inspect | Send it to the Bot that owns the step | Or save it where they can all read it | Bot-to-group handoff messages are text only |
| Anything containing a credential | No | No | Use a takeover or a secure secret request |
| The final result of the work | Yes, in the conversation | Keep a copy there too | The docs want the final result in the conversation |
| Material a duplicated Bot will need | Re-attach it | Or keep it in /workspace | A duplicate does not copy chat attachments |

Two facts from the docs drive that table. First, in a group chat your own messages can carry attachments, but a Bot's handoff message to the group is currently text only, so a Bot that must show another Bot an image should send it to that Bot directly. Second, duplicating a Bot copies its profile, settings, skills and routines but not its conversation history or chat attachments, so a new regional copy of a Bot starts without the files you gave the original.

One thing the docs do not say is whether a chat attachment gets copied onto the shared computer once a Bot starts working with it. Plan as if it could. Attach nothing you would not also be willing to leave in /workspace, where every Bot on your account can read it. For the confusion between that computer and the laptop in front of you, [why Grok Bot cannot see your files](/blog/grok-bot-cannot-see-files) is the longer explanation.

## Answer the colleague who says to zip everything into one file

The objection at its strongest: the six-file cap is a composer inconvenience, a zip archive is one file, it compresses well under 25 MB, and it keeps the whole case together. Why split anything?

Because archives are not on the documented list of common inputs, and an archive is exactly the kind of unusual format the docs warn may not be readable. It might open today. The docs do not promise that it will, and a routine built on an undocumented behavior tends to break in the week you are not watching.

The bigger cost is visibility. Seven loose files that fail, fail one at a time, and the charter block above makes the Bot name each one. Seven files inside one archive can fail as a unit, or worse, partially: a Bot that opens the archive and reads four of the files can report the three it skipped in one easy-to-miss line. You lose the per-file check that makes the answer trustworthy.

If the real goal is keeping the case together, there are two documented ways to do it: send it in two messages that say they belong together, or put the folder somewhere the Bot's computer can reach and paste a link. Test a zip once if you are curious. Do not make it the process.

## Collect the details support needs when a file still fails

If a file passes all five checks, has been exported to a plain format, and still will not read, stop retrying and gather evidence. Errors in Grok Bot appear above the composer under Notifications, and some notices include a Copy request ID control. Copy the full ID rather than a screenshot of part of it, because support needs the whole string.

The troubleshooting page lists what to collect before contacting support: the Grok Bot version, your operating system and its version, the exact error message, the Bot or routine name, the approximate time with its time zone, the full request ID or conversation ID if one was shown, and whether retrying, restarting the app, or updating the computer changed anything. Add the file's type and size, since that is the question at hand, but do not send support the file itself unless they ask, and never include a password, a code or a key.

Clearing a notification removes the notice, not whatever happened underneath it. If you cleared an error before copying its request ID, note the time instead. For the wider set of failures that are not about files, [the troubleshooting guide](/blog/grok-bot-troubleshooting) walks the rest.

## Stop using this page when the docs print different numbers

Grok Bot is in beta, and attachment behavior is the kind of detail that moves without an announcement. The limits above are the ones the files, troubleshooting and mobile pages printed as of 23 September 2026. If those pages now show a different number, they win and this page is stale.

The lines most likely to move are the ones the docs qualify themselves. The Android share sheet "currently" accepts text, which reads like a gap waiting to close. The six-attachment cap is stated for the desktop composer, and a phone figure may appear later. The list of common inputs may grow. The 25 MB and 200 MB figures carry no such qualifier, but nothing in the docs promises them for the rest of the beta either.

This page also does not cover files the Bot produces, such as the reports and spreadsheets it hands back, or what happens to files on the computer across updates and resets. For those, read the files page's sections on reviewable results and preserved evidence, and the computer page on what survives an update.

## Frequently Asked Questions

### What is the Grok Bot file size limit?

As of 23 September 2026 the Grok Bot docs set a ceiling of 25 MB for each document, image or audio attachment, and 200 MB for each video. The desktop composer also accepts no more than six attachments in one send. A file inside those numbers can still fail if it is encrypted, password-protected, damaged, still uploading when you press Send, or in an unusual format. The documented workaround for an awkward format is to export it as a PDF, a CSV, plain text or an image and attach the export.

### How many files can I attach to Grok Bot at once?

The docs say the desktop composer accepts up to six attachments at a time. If you have more, split them across two messages and say in the second that it continues the first, so the Bot treats them as one request. The docs state that cap for the desktop app only and give no separate count for the iPhone or Android app. For a large recurring batch, such as a month of receipts, a folder the Bot reads through a connector is easier and safer than a stack of attachment messages.

### Why can Grok Bot not read my file?

Work through the five checks on the Grok Bot troubleshooting page in order. The file must be 25 MB or smaller, or 200 MB or smaller for a video. No more than six files can go in one desktop send. The file cannot be encrypted or password-protected. The upload has to finish before you send the message. The type has to be supported. If all five pass and it still fails, the file may be damaged or in an unusual format, so export it as a PDF, CSV, plain text or an image and try again.

### Can I share files to Grok Bot from my phone?

On iPhone, yes. The system share sheet accepts a photo, a file, a link or text: choose Grok Bot, pick a chat, then choose Attach, and the item lands in that conversation's composer so you can add a message before sending. On Android the share sheet currently accepts text only, so open the Grok Bot app and use the controls inside the conversation to take a photo or choose an image or file. The docs state the 25 MB and 200 MB ceilings without tying them to any one platform.
`,
};

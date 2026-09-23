import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Talk to Grok Bot: Dictation, Voice Chat and Voice Memos',
  description:
    'Grok Bot voice chat, dictation and voice memos: where each one lives on desktop and phone, the Cmd/Ctrl+D shortcut, and the moments you should type instead of talk.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Talk to Grok Bot: Dictation, Voice Chat and Voice Memos

Grok Bot has three voice features, and they do not carry the same risk. Dictation turns your speech into text that waits in the composer until you send it. Voice chat is a live spoken conversation with a Bot. A voice memo is the Bot talking back to you as a recording in the transcript. It is easy to file all three under "talking to the Bot" and then use the live one for jobs the other two do better, such as reading out a quote quantity or saying yes to something that sends an email.

This page shows where each voice path lives on the desktop app and on iPhone and Android as of 23 September 2026, how to use each one well, and the three kinds of input you should not trust to speech: approvals, anything with a number in it, and anything you cannot take back. The sources are three docs pages, [messaging and collaboration](https://docs.x.ai/grok-bot/chat-and-collaboration), the [mobile app](https://docs.x.ai/grok-bot/mobile) and the [FAQ](https://docs.x.ai/grok-bot/faq), and anything they leave out is flagged as missing rather than filled in.

## Match each voice feature to what it actually produces

The fastest way to stop misusing voice is to ask one question of each feature: what exists after I stop talking, and can I read it before it counts?

| Feature | What you end up with | Desktop | iPhone and Android | Can you check it before it counts? |
|---|---|---|---|---|
| Dictation | Your words as editable text in the composer | Start voice input, or Cmd/Ctrl+D with the prompt focused | Start dictation in the composer | Yes; nothing is sent until you send it |
| Voice chat | A live conversation with the Bot | Start voice chat, a button with no keybinding | Start voice chat | Not as text first; a Voice chat card can appear after the call |
| Voice memo | The Bot's reply as a recording | Play voice memo, then expand for the transcript | Play the memo in the conversation | Yes; expand it and read the transcript |
| Audio attachment | A recording you made elsewhere, sent as a file | Attach it; audio files up to 25 MB | Choose an image or file; the iPhone share sheet also accepts files | Yes; you pick the file |

Read the right-hand column again, because it decides everything else on this page. Dictation and voice memos both leave text you can read before you act. Voice chat is the one path the docs describe with no text for you to check before the Bot hears you.

That does not make voice chat bad. It makes it the right tool for thinking out loud and the wrong tool for committing to anything. The rest of this page follows from that single distinction, starting with the path you should use most.

## Dictate on the desktop with Cmd/Ctrl+D, then read before you press Enter

On the desktop app, dictation lives in the composer. Choose Start voice input, or press Cmd/Ctrl+D while the prompt is focused, using Cmd on macOS and Ctrl on Windows and Linux. You speak, you stop, and what you said appears in the composer as ordinary text you can edit. Nothing is sent until you send it.

The shortcut only works while the prompt has focus. If you are reading a result or looking at the computer view, focus the prompt first with Cmd/Ctrl+I or Cmd/Ctrl+L, then press Cmd/Ctrl+D. Those two keystrokes are quick to learn, and after that dictation is faster than reaching for the mouse.

Once the text is in the composer, treat it as a draft somebody else typed for you. Read it. Fix names, fix numbers, fix the word that came out as a near-homophone. Then press Enter to send, or Cmd/Ctrl+Enter from anywhere in the app. Shift+Enter adds a new line if you want to dictate a second paragraph.

That review step is the entire safety case for dictation. A dictated instruction is exactly as reviewable as a typed one, because by the time it reaches the Bot it is typed text you chose to send. If the speech recognition got something wrong, the only person who has seen the mistake is you.

The docs do not say which spoken languages dictation recognizes, or whether it follows the app language you pick under Settings, where the desktop list has more than 20 languages plus Follow System. If you dictate in a language other than the app's, test a few sentences before you rely on it.

## Dictate on the phone with Start dictation when there is no keyboard

On iPhone and Android the control is called Start dictation, and it sits in the composer of any conversation. It behaves like the desktop version in the way that matters: your speech becomes text in the composer, and you decide when to send it.

The phone adds one detail that makes it better for quick capture than it first looks. The mobile docs say drafts are saved per conversation when you navigate away. Dictate half a note, open another conversation to check something, come back, and the draft is still there waiting for you to finish and correct it.

If you already have a recording, you can attach it instead of dictating. Audio is a supported attachment type, with documents, images and audio allowed up to 25 MB each. On iPhone, the system share sheet can send a photo, file, link or text into a Grok Bot chat: choose Grok Bot, pick the chat, choose Attach, and the item lands in the composer so you can add a message. On Android the share sheet currently accepts text only, so attach an audio file from inside the app with the option to choose an image or file.

The phone apps connect to the same Bots, conversations and cloud computer as the desktop, and work keeps running in the cloud when the app is closed. For everything else the phone can do, [Grok Bot on iPhone](/blog/grok-bot-iphone-app) and [Grok Bot on Android](/blog/grok-bot-android-status) cover each app in full.

## Follow Tomasz from a car park note to a corrected CRM diff

Tomasz is a regional account manager for an industrial fasteners distributor. He carries an Android phone and a Windows laptop, and he runs two Bots built from botskills listings: one based on [CRM From Your Phone](/bots/crm-from-your-phone), which turns spoken notes into proposed CRM field updates, and one based on [Meeting Prep Brief](/bots/meeting-prep-brief), which briefs each day's external meetings before the first one starts.

At 16:05 on a Wednesday he walks out of a customer's plant, gets into his car, and leaves the engine off. He opens the CRM Bot, taps Start dictation, and says that the customer wants a revised quote for fifteen pallets by Friday, that the buyer is new, and that the competitor is the incumbent supplier. He stops. The composer shows the note, and in the middle of it the quantity reads fifty pallets.

He catches it because dictation left the text in front of him before anything was sent. He corrects fifty to 15, types the buyer's surname rather than trusting the spelling, and sends at 16:07. The Bot replies with its usual shape: the record, then each proposed field with the phrase that produced it, then anything it heard but could not map. The amount field is empty, because he never said a price. The Bot is waiting for him to confirm the exact diff before it writes anything.

At 16:09 he reads the diff line by line and types "confirm". He does not say it. That one word is the boundary the listing declares, that the Bot never writes to the record until he confirms the exact diff, and he wants the crossing of that boundary to be something he did with his eyes on the screen.

At 16:15 he clears the composer and taps Start voice chat on the briefing Bot. For six minutes he talks through Thursday's three meetings: who is new on each invite, which deal has a close date already in the past, what he still owes the second customer. A Voice chat control stays under the header while he is on the line. It is a good conversation, and it is exactly the kind of work voice chat is for.

When the call ends he does one more thing. He types: "Put tomorrow's three amounts and close dates in a text list." The numbers he heard in the car are now numbers he can read.

On Thursday at 07:45, walking in from the car park, he plays the voice memo the briefing Bot sent, then expands it and reads the transcript before he walks into the first meeting. He listened to the memo because he was walking. He read the transcript because he was about to act on it.

## Start a voice chat from an empty composer, because there is no shortcut

Voice chat is a button. On the desktop, the docs are explicit that Start voice chat has no keybinding, unlike dictation. You choose it in the composer, and the docs describe starting it when the composer is empty, so clear any half-written draft first.

While a call is running, the desktop app shows that you are in a voice chat, and the sidebar can show that a voice chat is in progress. On iPhone and Android, a Voice chat control stays under the conversation header for as long as you are on the line. After you hang up, a Voice chat card can appear in the conversation, so the call leaves a marker in the transcript rather than vanishing.

Several things about voice chat are not in the docs as of this writing, and it is worth knowing where the edge is before you build a habit on it. The docs do not say what the Voice chat card contains, whether it holds a full transcript, a summary or only a marker. They do not describe a live caption during the call. They do not say whether a Bot can use tools or its computer while you are talking, or whether voice chat works in a group chat with several Bots. They do not say whether voice uses Grok Bot usage differently from typed messages.

None of those gaps is a reason to avoid voice chat. They are a reason to treat a call as a conversation whose outcome you confirm in text. The habit Tomasz used costs one typed line at the end of a call: ask for the outcome as a list, with the numbers in digits and the next step named.

If work you started in a call needs to stop, type "Stop now" as a direct message. The docs describe that message as ending the work immediately, and they are clear it does not undo anything the Bot already completed. They do not say whether saying stop during a call has the same effect, so do not find out the hard way.

## Play a voice memo, then expand it and read the numbers

A Bot can reply with a voice memo, and it appears in the conversation alongside ordinary messages, tool activity and approval requests. On the desktop, choose Play voice memo to listen and Pause voice memo to stop. Expand the memo to read its transcript. The phone apps can play voice memos too.

Memos are good for exactly the moments Tomasz used one: walking, carrying things, looking at something else. They are poor as the only record of anything you will act on, which is why the transcript matters. Listen for the gist, then read for the details.

The docs say Bots can send voice memos but do not say what makes a Bot choose a memo over text, or whether you can ask a particular Bot to send its reports that way. If you want memos, ask the Bot and see what it does, and put the preference in its description if it works. If you would rather never receive them, say that in the description instead.

One practical note: a memo you have not heard is just an unread message, and the phone will only tell you about it if notifications are set up. The per-Bot switch is covered further down, because a briefing that arrives as audio at 07:30 is useless if you first notice it at 09:15.

## Keep approvals on the card, never in the conversation

When a Bot wants to do something that needs your approval, the conversation lays out the operation it proposes and the inputs it would use, and you answer with a control. On the desktop that means Allow once, Deny, or Always allow, which may store a rule for next time. The review sheet on iPhone and Android offers Allow and Deny, plus Always allow when a rule is proposed, and a card asking to run a command on your local computer offers Allow once and Deny. Email and Slack drafts arrive as editable cards with a send button and Discard.

Every documented approval path is a control on a card that shows the proposed operation and its inputs. The docs describe nothing about approving by voice, and you should not want them to. The docs also say never to approve something when you cannot tell what it targets or what it will do, and to check the target, scope and values first. You cannot review a target you heard once, at walking pace, in a car park.

The docs make the same point about a different shortcut. They say a reaction on its own is not enough to carry a decision that matters for safety, and that a changed instruction belongs in a written reply. A spoken aside in a live call belongs in the same category as a thumbs-up: fine for acknowledgement, wrong for consent.

This is where the botskills boundary earns its place. Every listing on this site declares one action the Bot never takes without a human, and the value of that line depends entirely on the moment it gets crossed. If the crossing is a tap on a card that shows the recipient, the amount and the record, the boundary holds. If the crossing can be a "yeah, go ahead" said mid-sentence to a Bot that is listening, the boundary is decorative.

## Type anything with a number in it

Numbers are where speech fails quietly. Fifteen and fifty. Thirteen and thirty. The twelfth and the twentieth. "Two to four" as a range or as a time. An order number read as "oh" rather than zero. A price said with the currency implied. None of these is a Grok Bot problem; they are ordinary facts about speech, and they matter more when the listener is a Bot that will act on what it heard.

Dictation handles numbers well enough precisely because you see the result before it counts. Voice chat handles them badly because you do not. So the rule is simple: any number that will leave the conversation, as a field value, a quantity, a date, an amount, an account number or a recipient's address, goes in as text, either typed or dictated and then checked.

| What you are about to say | Why speaking it is risky | Do this instead |
|---|---|---|
| Yes to a send, purchase, publish or delete | A spoken yes has no target on screen | Read the card, then press Allow once or the send button |
| A quantity, amount or date | Numbers are the easiest thing to mishear | Dictate and correct in the composer, or type it |
| A name or an email address | Spelling by ear is a guess | Type or paste it |
| A password, code or card number | People nearby hear it, and chat is the wrong channel | Take over the computer, or use the secure secret request |
| Anything you cannot take back | There is no unsend | Ask for a draft, then approve on the card |

If a number came up in a voice chat and you now need it, do what Tomasz did and ask for it in text at the end of the call. A one-line request for the figures in digits turns a spoken number into something you can check against the source before you use it.

## Never say a password, a code or a card number out loud

The docs leave no room on passwords and one-time codes: they do not go into ordinary chat. Speaking one into a voice chat is the same mistake with an audience, because anyone in the room or on the train hears it too. Give the Bot none of these by voice, ever, and put that line in its description so it never asks you to.

The documented routes for sensitive input all avoid the conversation. For a password, a passkey, a two-factor code, a CAPTCHA or a payment confirmation, open Agent Computer, take control, complete the step yourself, hand control back, and tell the Bot to continue. For a supported connection, the Bot can present a secure secret request, where the value you enter is masked, kept out of the transcript and never shown to the model. The docs add that it is not a general password manager. And where a page wants something typed, a login, an address at checkout, a phone number, the Bot can put a form into the conversation, one step at a time, and enter what you type into the page for you.

There is one voice-adjacent feature where the docs spell out what is not captured. When Teach a task is available, it records up to ten minutes of visible computer interaction, and it does not record microphone audio. If you narrate while you demonstrate a workflow, the narration is lost. Describe the result in the conversation before you start, as the docs' steps suggest, and add decision rules to the draft skill afterwards.

## Write the voice rules into the Bot's description

The docs recommend the Bot description as the place for rules that should stay true across every conversation, and voice habits are exactly that kind of rule. Paste this into the description of any Bot you talk to, and adjust the wording to your work.

\`\`\`text
VOICE RULES (keep in the Bot description)

1. Treat anything I dictate or say in a voice chat as a draft
   instruction, not a final one.
2. Before you act on a number, date, quantity, amount, name or
   email address that I spoke, write it back to me as text in
   digits and wait for my typed confirmation.
3. A spoken yes, okay or go ahead is never approval. For any send,
   purchase, publish, delete or record change, show me the draft
   or the approval card and wait for me to press the button.
4. When a voice chat ends with open work, post a short text summary:
   each decision, each number in digits, and the next step.
5. If you send me a voice memo, follow it with the figures it
   mentions as a text line.
6. Never ask me to say or type a password, code or card number.
   Ask me to take over the computer, or use a secure secret request.
7. If I type Stop now, stop. Do not wait for the end of a call.
\`\`\`

Rule 2 is the one that earns its keep. It turns every spoken number into a written one before anything happens, which is the same protection dictation gives you, applied to the live path that lacks it.

## Choose the input by where you are standing

Many voice mistakes are really location mistakes: the right feature used in the wrong place. A quick mental table prevents a lot of them.

| Where you are | Best input | Why |
|---|---|---|
| At your desk | Typing, or Cmd/Ctrl+D dictation | The keyboard is there, and you review in the composer |
| Parked, engine off | Start dictation, then read and correct | Fast capture with a review step before sending |
| Walking between meetings | Play voice memos; short dictation | Listening is fine on the move, acting can wait |
| Train, open office, coffee shop | Typing | Everyone around you hears a voice chat |
| In the room with a customer | Nothing spoken to the Bot | Type a note afterwards |
| Driving | None | Leave the phone alone until you have stopped |

The driving row is not a Grok Bot rule, and it should not need saying. Tomasz dictates with the engine off for a reason, and nothing in any voice feature is worth using at speed.

The middle rows are where the judgment sits. Voice chat is at its best somewhere private and unhurried, with time to think out loud and a screen nearby for the text follow-up. Dictation is at its best anywhere you can glance at the result before you send.

## Set notifications so a voice memo does not sit unplayed

A voice memo you never hear is a message you never read, and on a phone the difference between hearing it at 07:30 and at 09:15 can be the whole point of the memo. Notifications in Grok Bot are set per Bot. Open the conversation details, then the Bot's settings, and turn on Notifications to be told by your operating system or phone whenever that Bot finishes a task or needs something from you.

Two conditions both have to hold on a phone. The app asks for notification permission during first run, and both that device permission and the Bot's own setting must allow the notification. The docs also say mobile push delivery is still rolling out and may not be enabled for every account yet, while in-app attention states work regardless. Group chats do not have the same per-Bot switch.

On the desktop, notifications are normally held back while Grok Bot has focus, and the sidebar and dock badge show unread activity instead. The sidebar distinguishes a conversation that needs attention, meaning a question, approval or handoff, from one with unread activity, meaning a new result. Check both before you assume nothing has arrived.

## Answer the reader who says voice chat is the whole point

Here is the objection in its most persuasive form. Talking to a Bot live is the most natural interface there is. It is hands-free, it is fast, and it is how you would brief a human assistant. If every number goes back to text and every yes goes to a button, you have taken a conversation and turned it back into a form, and you might as well have typed the whole thing.

Half of that is right. Voice chat is the best interface Grok Bot has for the parts of work that are thinking: deciding what matters tomorrow, talking through a messy account, asking what changed since Monday, rehearsing a call. Tomasz's six minutes in the car were better as a conversation than they would have been as a typed exchange, and nothing on this page asks you to give that up.

The other half is wrong, because it treats all words as equal. A human assistant who hears you say "fine, send it" in passing still reads the email back before sending, or should. The split this page recommends costs one tap per commitment and one typed line per call, and in return every irreversible action happens with the target on the screen. The docs already model that split: drafts the Bot prepares for sending arrive as cards with a send button and a discard button, not as something that goes out when you sound agreeable.

## Run a ten-minute test before you rely on any of it

A voice habit you have not tested is a guess. These checks can fail, which is the point of running them.

| Check | How to run it | What a pass looks like |
|---|---|---|
| Desktop dictation stays unsent | Focus the prompt, press Cmd/Ctrl+D, say a sentence with a number in it | Editable text appears, nothing is sent, the number can be corrected |
| Phone dictation keeps its draft | Start dictation, speak half a note, open another conversation, come back | The draft is still in that conversation's composer |
| Voice chat starts from an empty composer | Clear the composer and choose Start voice chat | The app shows you are in a voice chat until you end it |
| The call leaves a trace | End the call and scroll the conversation | Note whether a Voice chat card appears and what it holds |
| Memo transcripts exist | Ask the Bot for a short spoken summary | If a memo arrives, it plays and expands to a transcript |
| Approvals stay on the card | Ask the Bot to draft an email, then say yes during a call | Nothing is sent until you press the send button on the card |

The last check is the important one. If a spoken yes in a call ever sends something without a card and a button press, stop using voice chat with that Bot, tighten its description with the rules above, and create an Ask first rule for external email in your own Auto-review settings (Settings > General > Bot > Auto-review). Then run the check again.

## Notice when this page stops applying to your app

Voice is one of the parts of this beta most likely to move, and the checks behind this page are dated: they reflect the docs as of 23 September 2026. The lines to watch are the ones the docs leave open: a keybinding for voice chat, a live caption during calls, what the Voice chat card contains, voice chat in group conversations, and which languages dictation understands.

If your app shows a shortcut for voice chat, a transcript panel during a call, or a way to approve actions by voice, the product has moved past this page. Re-read the [messaging page](https://docs.x.ai/grok-bot/chat-and-collaboration) and the [mobile page](https://docs.x.ai/grok-bot/mobile) before you change your habits, and keep the one rule that will outlast any of those changes: commit in text, think in voice.

## Frequently Asked Questions

### What is the keyboard shortcut for Grok Bot dictation?

On the desktop app, press Cmd/Ctrl+D while the prompt is focused, using Cmd on macOS and Ctrl on Windows and Linux, or choose Start voice input in the composer. If the prompt is not focused, press Cmd/Ctrl+I or Cmd/Ctrl+L first. Your speech appears in the composer as editable text and is not sent until you send it. On iPhone and Android, the composer's Start dictation control does the same job and also leaves the text for you to review.

### Is there a keyboard shortcut for Grok Bot voice chat?

No. As of 23 September 2026 the docs say Start voice chat is a button with no keybinding, unlike dictation, which uses Cmd/Ctrl+D. Choose Start voice chat in the composer when it is empty to talk with the Bot live. It works on the desktop app, iPhone and Android. While you are on the line the app shows that a voice chat is running, and after you hang up a Voice chat card can appear in the conversation.

### Can a Grok Bot reply with a voice message?

Yes. A Bot can send a voice memo, which appears in the conversation alongside ordinary messages. On the desktop you choose Play voice memo to listen and Pause voice memo to stop, and you can expand the memo to read its transcript. The phone apps can play memos too. The docs do not say what makes a Bot choose a memo over text, so ask the Bot directly and record the preference in its description.

### Should I approve a Grok Bot action by voice?

No. Every approval path the docs describe is a control on a card: Allow once, Deny or Always allow on the desktop, and Allow or Deny on the phone, plus Always allow when a rule is proposed, with drafts sent from their own send button. The docs describe no voice approval and tell you never to approve an action whose target you cannot identify. Treat anything said in a voice chat as conversation, and approve on the card after reading the target.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot Auto Review Rules: Ask First, Allow Automatically, and Which Wins',
  description:
    'Write Grok Bot auto review rules that behave: how Ask first and Allow automatically match, why Ask first wins every tie, and five narrow rules worth copying today.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Grok Bot Auto Review Rules: Ask First, Allow Automatically, and Which Wins

You wrote an Allow automatically rule on Friday, and on Monday the Bot stopped at exactly the step it was supposed to cover. Nothing is broken. The rule table in Grok Bot has two kinds of rule, one tiebreak, a reviewer that can still say no, and on Enterprise a second layer of rules whose source you only see once you spot the locked rows. Once you know how those pieces fit together, the Monday stop is predictable.

This page is the mechanics of that table: where it lives, what each rule kind actually promises, which one wins, how locked team rules sit underneath yours, where your rules follow you, and what the reviewer never looks at. It closes with five narrow rules worth copying and three broad ones worth deleting. The rule behavior described below matches the Grok Bot docs as of 23 September 2026.

Which actions deserve a stop in the first place is a separate decision with its own page, [how to set Grok Bot approvals](/blog/how-to-set-grok-bot-approvals), and the reasoning behind drawing that line is in [draw the approval line on reversibility](/blog/grok-bot-approval-rules-reversibility). Decide what to park there. Come back here to make the rule table do it.

## Open the rule table where it actually lives

Personal rules live at Settings -> General -> Bot -> Auto-review on the desktop app. You can open Settings from the account menu or with Cmd or Ctrl plus comma. The same table shows your own rules and, if your Enterprise admin enforces Auto Review, the team rules you inherit.

On iPhone and Android, the Settings screen lists Configure Auto Review, qualified in the docs with the phrase when available. Treat the phone as a place you might be able to adjust rules, not a place you can count on, and do the careful writing at a desk where you can read the whole table at once.

Before writing anything, know what the table is for. Auto Review looks at tool calls and computer actions before they execute. The security page describes it as an independent review model and lists its territory: shell commands, plugin calls, computer use, writes to your automations (edits to routines and event triggers), and delegation, meaning Cloud Agent and subagent launches. For any of those, the reviewer can let the action proceed, require your approval, or deny it. Your rules are instructions to that reviewer about specific actions you already have an opinion on.

Auto Review also has an on and an off state. The Enterprise switch called Enforce Auto-review exists precisely to stop members turning it off, which tells you members otherwise can. The docs do not say which state an individual account starts in, so open the settings and confirm it is on before you spend an hour writing rules for a reviewer that is not running.

## Read Ask first as a hard stop and Allow automatically as a conditional pass

The two rule kinds are not mirror images, and treating them as opposites is the root of most surprises.

An Ask first rule always stops a matching action for you. There is no condition attached. If the action matches, it waits for your decision.

An Allow automatically rule lets a matching action proceed only when the automated review finds no other reason to stop. It is permission to skip the card when everything else looks clean, not an order to skip it. The reviewer still reads the action, and if something about it looks wrong, the card appears anyway.

| Rule kind | When an action matches | Does the reviewer still get a say | Typical use |
|---|---|---|---|
| Ask first | Always stops for your approval | It cannot let the action through without you | Sends, payments, deletions, production changes |
| Allow automatically | Proceeds unless the review finds another reason to stop | Yes, it can still stop the action | A repeated, low-stakes action with a known scope |
| No rule matches | The reviewer decides on its own | It can let it proceed, require approval, or deny it | Everything you have not written a rule for |

Read the middle row twice. People write an Allow automatically rule, see the card appear, and conclude the rule is broken. It is working as documented. The rule removed one reason to stop; it did not remove the reviewer.

The docs do not list the reviewer's reasons for stopping, so do not try to reverse-engineer them from one card. When an allowed action stops, read the card. It shows the proposed operation and its inputs, and the answer to why is usually sitting in those inputs.

## Let Ask first win every tie, and write your rules around that

When an Ask first rule and an Allow automatically rule both match the same action, Ask first wins. The approvals page, the security page and the troubleshooting page all say it, which is about as settled as anything in a beta product gets.

That single tiebreak shapes how you should write the table. It means a broad Ask first rule silently disables every Allow automatically rule that overlaps it. If you write "Ask first before any file upload" and later add "Allow automatically when uploading the weekly CSV to the Sales folder", the second rule never takes effect, because every upload also matches the first.

It also means you can write a generous allow rule and fence its dangerous corner with a narrow ask rule. "Allow automatically when running scripts in /workspace/reports" paired with "Ask first before any command that deletes files" gives you quiet runs for the routine script and a guaranteed stop the day the script grows a cleanup step.

| Your rule | Team rule (Enterprise, enforced) | Result for a matching action |
|---|---|---|
| Ask first | None | Stops for approval |
| Allow automatically | None | Proceeds if the review is clean |
| Allow automatically | Ask first | Stops, because Ask first wins |
| Ask first | Allow automatically | Stops, because Ask first wins |
| None | Ask first | Stops, because the team rule applies to you |
| None | Allow automatically | Proceeds if the review is clean |
| Any | Any, but enforcement turned off | Only your own rules apply |

## Walk Hana through the Monday run that stopped twice

Hana is the operations lead at a freight brokerage on Cursor Enterprise. Her IT admin turned on Enforce Auto-review in the spring and added two team rules through Configure Rules on the Grok Bot page of the dashboard: ask first before sending email to anyone outside the company domain, and ask first before uploading or sharing any file outside the Grok Bot computer. In Hana's rule table those two rows are locked, with a note saying the admin requires them and that she cannot edit or delete them.

Her Bot, Lane Report, runs every Monday at 10:00. It pulls the week's rates from a carrier portal, runs a script that builds a CSV in /workspace/reports/lanes, and uploads the file to a shared Drive folder for the sales team. On Friday she added three personal rules to make that run quiet: allow automatically when running the lane report script in /workspace/reports/lanes, allow automatically when uploading the lanes CSV to the Sales Lane Reports folder, and ask first before editing any routine.

At 10:04 on Monday her Android phone showed the Auto-review sheet for the script step, which surprised her, since she had allowed it and no Ask first rule touched it. She opened the conversation and read the proposed command. It carried a cleanup flag that would have removed the previous four weeks of CSVs from the folder. Her allow rule matched the script; the review found another reason to stop. She chose Deny and told the Bot to rerun without the flag.

At 10:12 the sheet appeared again, this time for the Drive upload. She had allowed that too. She chose Allow for this one, the run finished at 10:14, and at 10:20 she sat down at her desk and opened the rule table. The answer was in the locked rows: the team rule about sharing files outside the computer matched the upload as well, and Ask first wins. Her allow rule could never have taken effect. Saving another allow rule through the Always allow button on a desktop card would not have helped either, because a personal rule cannot loosen a team rule.

| Time | Action | Rule that decided it | Hana's move |
|---|---|---|---|
| 10:04 | Run report script with a cleanup flag | Allow automatically, but the review stopped it | Deny from the phone, rerun without the flag |
| 10:12 | Upload CSV to Drive | Team Ask first on sharing, which wins | Allow from the phone sheet |
| 10:14 | Run completes | None needed | Nothing yet |
| 10:20 | Reads the rule table at her desk | Locked rows explain the upload stop | Deletes her dead allow rule, adds an Ask first rule on deletions |

She made two changes at her desk. She deleted her upload allow rule, since a rule that can never fire only misleads the next person who reads the table. And she added a narrow Ask first rule for any command that deletes files under /workspace/reports, so the cleanup step would stop on purpose next time rather than by the reviewer's judgment. One approval a week for the upload was a cost she accepted. The team rule was right: that CSV was leaving the computer.

## Read locked team rules as a floor you can only raise

On Enterprise, admins can do two things with Auto Review from the Grok Bot page of the Cursor dashboard. Enforce Auto-review, off by default, prevents members from turning Auto Review off. Team Auto-review rules, added through Configure Rules, sit above each member's own rules and cover all of their Bots, and edits save automatically. Both are Enterprise only; a self-serve Teams admin does not see them, and an individual account has no team layer at all.

When enforcement is on, the team rules appear as locked rows in your table with a note saying the admin requires them and that you cannot edit or delete them. You can still add your own rules, but relative to the team rules they can only make behavior stricter. A personal Ask first rule tightens things. A personal Allow automatically rule cannot open anything a team Ask first rule has closed, because the tiebreak decides it.

The teams page gives admins a sensible order: turn on Enforce Auto-review before relying on team rules. The reason is mechanical. If an admin switches enforcement off, the team layer no longer applies and members are back to their own rules alone. A team rule without enforcement is a rule that disappears the moment someone flips the switch.

For admins choosing what to lock, the docs suggest external email, payments, production deployments and accepting legal terms as Ask first candidates, and they advise keeping automatic rules narrow. Lock the few stops that must never be skipped. Leave the rest to members, who know their own workflows better than a team rule written for everyone.

## Expect your rules to follow you to every desktop and onto the cloud computer

Your personal rules belong to your account, not to a machine. The docs say they take effect on any desktop where you sign in, and on your Grok Bot computer as well. Write a rule at the office on Monday and it is already in force when you open the app on a home laptop that evening.

That is the opposite of the local execution setting, which applies per desktop, and the difference trips people up. If you want a machine-specific behavior, the rule table is the wrong tool. If you want a behavior that holds no matter which device you happen to be holding, it is the right one.

The phrase on your Grok Bot computer matters too. Your Bots work on one cloud computer shared by every Bot you run, so your rules are not per Bot. An Ask first rule on external email stops the Research Bot and the Sales Bot alike. That is usually what you want, because separate Bots are not a security boundary and a mailbox session opened for one Bot is available to the others. A rule that covers the whole roster matches the shape of the risk.

## Know what the reviewer covers and what it never looks at

The rule table can only shape decisions the reviewer actually makes. The security page lists what it covers and, just as usefully, names things it does not.

| Area | Reviewed by Auto Review | Where control lives instead |
|---|---|---|
| Shell commands on the cloud computer | Yes | Rules plus approvals |
| Plugin calls | Yes | Rules plus the connector policy |
| Computer use in the browser | Yes | Rules plus approvals |
| Changes to routines and event triggers | Yes | Rules plus approvals |
| Cloud Agent and subagent launches | Yes | Rules, and the team Cloud Agents switch |
| Memory writes | No, named as an exception | The Bot description and your review |
| Most settings changes | No, named as an exception | Your own discipline |
| Commands on your local computer | Described as distinct from Auto Review | Execution on Local Computer |

The last row deserves a sentence. The security page describes local execution as distinct from Auto Review, with its own control. An Ask first rule is not how you fence the laptop on your desk. For that, see the page on [letting Grok Bot run commands on your laptop](/blog/grok-bot-local-computer-execution).

The two exceptions matter more than they look. A Bot that quietly saves a wrong fact to memory, or changes a setting, has not passed through the reviewer at all. Rules cannot catch what the reviewer never sees, which is one reason the docs call Auto Review a complement to least privilege rather than a replacement for it.

## Copy five narrow rules that name an action and a scope

A good rule names one kind of action and one scope you could point at: a folder, a recipient class, a type of operation. The docs' own examples follow that shape, and the pattern generalizes. Here are five that fit most rosters. Adjust the paths and domain to yours.

\`\`\`text
AUTO-REVIEW RULES (Settings -> General -> Bot -> Auto-review)

Ask first
  1. Ask first before sending an email or chat message to anyone
     outside the example.com domain.
  2. Ask first before submitting any payment, purchase, or
     subscription change in a browser tab.
  3. Ask first before creating, editing, pausing, or deleting a
     routine or an event trigger.
  4. Ask first before launching a Cloud Agent or a subagent.

Allow automatically
  5. Allow automatically when listing or reading files inside
     /workspace/reports/lanes.

Pair with the Bot description:
  Never send, pay, publish, or delete without an approval I read.
  If a card appears for an action you expected to be allowed,
  show me the full command and wait. Do not retry a variant.
\`\`\`

| Rule | Action it names | Scope it names | Why it stays narrow |
|---|---|---|---|
| External messages | Send email or chat | Recipients outside your domain | Internal notes still flow; strangers never get mail unseen |
| Payments | Submit payment or subscription change | Any browser tab | Money is the one action with no draft stage |
| Automation writes | Create, edit, pause, delete a routine or trigger | Every routine | A changed routine repeats its change every run |
| Delegation | Launch a Cloud Agent or subagent | Every launch | Delegated work runs on separate computers under Cloud Agent controls |
| Read reports | List or read files | One folder | Reading one folder cannot send, delete, or pay |

Rule four is worth a note. The teams page says delegated coding work runs on separate computers under your Cloud Agent controls, and the private networks page adds that such agents follow the Cloud Agent network settings, not the network client on your own computer. A delegated task is therefore not simply more of the same work on the same machine. A stop before every launch keeps that hop visible.

Rule five is deliberately modest. It covers reading, not writing, and one folder, not /workspace. Allow rules should be boring, which is exactly what makes them safe to leave unattended.

## Delete three broad rules before they teach you to stop reading

Broad rules fail in one of two directions. Broad allow rules let through actions you never pictured when you wrote them. Broad ask rules flood you with cards until you approve on reflex, which is worse than no rule, because it looks like control.

| Broad rule | How it fails | Narrow replacement |
|---|---|---|
| Allow automatically for everything in the browser | Websites change; a checkout, a share dialog or a settings page is also the browser | Allow reading on one named site, and Ask first on submit, pay and share |
| Allow automatically for any shell command in /workspace | /workspace holds everything; a delete or an upload is also a shell command | Allow one named script in one folder, and Ask first on deletions |
| Ask first before anything risky | Risky is not an action; it either matches unpredictably or matches everything | Four Ask first rules naming send, pay, delete and publish |

The first row is the docs' own warning. The approvals page names allow everything in the browser as the example of what not to write, and gives the reason in one line: websites and tool behavior change over time. A rule that was harmless the day you wrote it drifts as the pages under it change.

The third row is the one well-meaning people write. It feels cautious. In practice the reviewer has to interpret risky, the cards start appearing for trivial reads, and by Thursday you are clicking Allow without looking. The four-verb version stops exactly the actions that cannot be taken back, and nothing else.

## Treat Always allow on a card as a rule proposal, not a shortcut

The approval card on desktop offers Allow once, Deny and Always allow. According to the docs, choosing Always allow can save a rule that matches the action. On a phone, the Auto-review sheet offers Allow and Deny, and Always allow appears when a rule is proposed.

That means every Always allow click is a small act of rule writing, done at the moment you are least inclined to think about scope: in the middle of a task, with a card in the way. The rule it saves is shaped by the action in front of you, which may be broader or narrower than what you would have written at a desk.

The teams page gives members a plain default: for anything touching accounts, money or shared resources, choose Allow once rather than Always allow. A good habit on top of that is a weekly look at the table. Any rule you do not remember writing was probably saved from a card, and deserves a second read before it covers another month of runs.

[Email Injection Sentinel](/bots/email-injection-sentinel) is a useful companion here. Its boundary is that it never treats email text as instructions and never sends, pays or shares from a mail-triggered run. Put a Bot like that in front of anything that reads mail, and the cards you see are more likely to be real requests than ones planted in a message.

## Answer the admin who says the reviewer makes least privilege optional

The objection, stated fairly: we have an independent review model checking every risky action, team rules locked on top, and enforcement on. Why also narrow every connector, sign Bots out of accounts and keep production credentials off the computer? The reviewer will stop the bad action.

The docs answer this directly, and the answer is no. Auto Review is model-based. The approvals page frames it as an addition to least privilege and explicit approval boundaries, not a substitute for them. The security page adds that it does not review every side effect, naming memory writes and most settings changes, and describes prompt injection defenses as reducing risk without eliminating it. Underneath the reviewer, the docs point to controls that work without any model's judgment: per-user isolation, the network policy and approvals on individual actions.

There is also a structural reason. A reviewer judges the action in front of it. Nothing in the docs suggests it knows that the Drive session a Bot is using belongs to a finance account nobody meant to share, opened for a different Bot last Tuesday. Least privilege removes that session from the picture entirely. The reviewer and the narrow grant fail in different ways, which is exactly why you want both.

The part of the objection that holds: with enforcement on and good team rules, members do not need to write dozens of personal rules. A handful of narrow Ask first rules plus disciplined grants beats a sprawling table every time. [PR Review Sentinel](/bots/pr-review-sentinel) shows the grant side of that balance, a Bot whose boundary is that it comments and never merges, approves or pushes, so the reviewer rarely has anything consequential to judge.

## Diagnose a rule that does not behave by reading the table first

When a rule seems ignored, the cause is almost always one of a handful of patterns. Check the table before you check anything else.

| Symptom | Likely cause | Fix |
|---|---|---|
| An allowed action keeps stopping | A matching Ask first rule, possibly a locked team rule | Find it in the table; Ask first wins |
| An allowed action stopped once, then ran | The review found another reason to stop that time | Read the card inputs; they usually show why |
| Your new allow rule has no effect | An overlapping broad Ask first rule matches first | Narrow or delete the broad rule |
| Team rules vanished from your table | The admin turned enforcement off | Expected; only your rules apply now |
| A rule works at the office but not at home | The behavior you expected is the per-desktop local setting | Rules follow the account; check Execution on Local Computer |
| Nothing ever stops | Auto Review is off, or rules are too broad | Confirm it is on; replace broad allow rules |

The troubleshooting page gives the first row as its own advice: when an action keeps requiring approval, look for a matching Ask first rule in Settings, including team rules your admin requires. Start there, and most mysteries end in under a minute.

## Test each rule with a planted action before trusting it

A rule you have not seen fire is a guess. Test each one with an action you control.

For an Ask first rule on external messages, ask a Bot to draft and send a short note to an outside address you own. The card should appear before anything leaves. Deny it and confirm nothing arrived. For a payment rule, walk a Bot to a checkout page on a test account and confirm it stops before submit.

For an Allow automatically rule, run the exact action it names and confirm no card appears. Then run a slightly different action outside the scope, such as reading a file one folder up, and confirm the rule does not stretch to cover it.

Finally, test the tiebreak on purpose. Write a temporary allow rule that overlaps an Ask first rule, run the overlapping action, and confirm it stops. Delete the temporary rule afterwards. Five minutes of this beats a month of assuming, and it leaves you knowing which of your rules are real.

## When this page stops applying

As a beta product, Grok Bot can relabel a settings page from one week to the next. As of 23 September 2026, the mechanics above rest on five documented facts: the table lives under Settings, General, Bot, Auto-review; Ask first always stops and Allow automatically is conditional; Ask first wins when both match; team rules are Enterprise only, locked, and stop applying when enforcement is off; personal rules follow your account to every desktop and onto the cloud computer.

If any of those shifts, the approvals, security and teams pages in the Grok Bot documentation win over this one. If your question is which actions deserve a stop at all, go to the approvals setup page linked at the top. If it is about the machine on your desk rather than the cloud computer, go to the local execution page, because the rule table does not govern it.

## Frequently Asked Questions

### What happens when an Ask first rule and an Allow automatically rule both match?

Ask first wins. The Grok Bot approvals, security and troubleshooting pages all state that when both kinds of rule match the same action, the Ask first rule takes precedence and the action stops for your approval. This holds whether the rules are yours or a locked team rule on an Enterprise account. The practical consequence is that a broad Ask first rule quietly disables every Allow automatically rule that overlaps it, so keep Ask first rules narrow enough that the allow rules you write can still take effect.

### Does an Allow automatically rule guarantee the action runs without asking?

No. An Allow automatically rule lets a matching action proceed only when the automated review finds no other reason to stop. The reviewer still evaluates the action, and if something about it looks wrong, you see an approval card anyway. That is documented behavior rather than a fault. When an allowed action stops, read the card, which shows the proposed operation and its inputs; the reason is often visible there, such as an unexpected flag, a different folder, or an extra step you never asked for.

### Can I edit or delete an Auto Review rule my admin added?

No. On Cursor Enterprise, when an admin enforces Auto Review, team rules appear in your table as locked rows marked as required by the admin, and members cannot edit or delete them. You can add personal rules on top, but relative to the team rules they only make behavior stricter, and Ask first wins any conflict. If the admin disables enforcement, the team rules no longer apply and only your own remain. Self-serve Teams and individual accounts have no team rule layer.

### Where do Grok Bot Auto Review rules apply after I save them?

Personal Auto Review rules live on your account rather than on one machine. The docs say they take effect on any desktop where you sign in, and on your Grok Bot computer, which every Bot on your account shares. A rule written at the office is in force on your home laptop the same evening, and it covers every Bot, not just the one you were chatting with. That differs from Execution on Local Computer, which is set per desktop and is a separate control from Auto Review.
`,
};

import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Two Cursor Accounts in Grok Bot: The Only Real Credential Boundary',
  description:
    'Grok Bot multiple accounts, done right: why separate Bots share one computer, how Switch account and Add account work, what a second login costs, and when you need one.',
  date: '2026-09-23',
  category: 'Safety',
  content: `
# Two Cursor Accounts in Grok Bot: The Only Real Credential Boundary

You want a client's logins kept away from your own, so you create a Bot called Client Work and sign it into the client's tools. It feels like separation, but it is not. Every Bot on a Cursor account works on the same cloud computer, with the same browser sessions, the same files and the same command-line credentials, and the Grok Bot docs say in plain terms that separate Bots are not a security boundary.

The docs also name the boundary that does hold: a job that needs its own computer and its own credentials should run under its own Cursor user. This page covers what that means in practice as of 23 September 2026: how a second account works in the desktop app, what it costs, which workloads justify one, and the one place, your own laptop, where two accounts can still meet. Everything comes from the [security FAQ](https://docs.x.ai/grok-bot/security-faq), the [teams and enterprises page](https://docs.x.ai/grok-bot/teams-and-enterprises), the [FAQ](https://docs.x.ai/grok-bot/faq) and Cursor's [plans page](https://cursor.com/help/grok-bot/plans), and where they are silent this page says so.

## Separate the four things people mistake for a boundary

Four units look like they might keep work apart. Only one of them does, and the table makes the difference easy to see.

| Unit | Its own cloud computer | Its own sessions and files | Its own plan and usage | Treat it as a boundary |
|---|---|---|---|---|
| A second Bot on the same account | No | No | No | No |
| A Bot's own screen on the computer | No; screens are work surfaces on one computer | No | No | No |
| Your account joining a second Cursor team | No; one computer serves every team you belong to | No | No; usage is metered on the one account | No |
| A second Cursor account | Yes | Yes | Yes | Yes |

The first row is the one the docs spend the most words on. The computer is assigned to your user, not to a Bot. Browser cookies and sign-ins are common to all of your Bots, every Bot can see every file, and command-line credentials are common too. The docs describe Bots as separating personalities and workspaces rather than compute, and they tell you directly to keep any credential or file off the computer unless you are content for every other Bot on the account to use it.

The second row catches people who have watched two Bots work side by side. Every Bot does get a screen of its own on the shared computer, and it works through computer-use tasks on that screen one at a time. The docs are explicit that those screens are separate work surfaces, not separate security boundaries.

The last row is where the separation is real. Every user has a Firecracker microVM to themselves, with a separate kernel, separate memory and separate virtual devices, and the docs describe hardware-level separation between users: one user cannot reach another user's computer. A second Cursor account is a second user, which means a second machine, a second set of sessions, a second file system and a second meter.

## Stop counting a second team membership as a second computer

The third row deserves its own section, because it is the mistake that looks most like a fix. If a client or an employer adds your existing Cursor account to their team, you might expect their work to get its own space. It does not.

The page on managing computers says that one computer serves every team a member is in. It gives that as the reason only organization admins can recreate or terminate computers: a team admin's rights stop at the team, and the computer does not. Recreating or terminating a member's computer from one team affects the same computer everywhere that member works.

So if you join a client's team with the account you already use for everything else, the client's project tracker session lands on the same computer as your own inbox session, your other clients' files and whatever your Research Bot downloaded last week. The client's team policies may reach your account too, and the docs do not say how policies combine for someone in several teams, but the computer underneath is still one computer.

The fix is not a different team. It is a different user: a new Cursor account, usually under an email address the client issues, invited to the client's team as its own member.

## Follow Dalia from a client's question to a second login on one laptop

Dalia is a freelance data consultant. Her own Cursor account is on Pro, and it runs three Bots: Inbox, Invoices and Research. In September she starts an engagement with a 40-person architecture practice that already uses Cursor Teams.

At 10:20 on a Monday, on the kickoff call, the practice's operations lead asks a sharp question. If Dalia's Bots work in the practice's project tracker and shared drive, could those Bots also see her other clients' files? At 10:40, after the call, she reads the security FAQ and finds the answer: every Bot on one account shares one computer, and joining the practice's team with her existing account would not change that.

At 11:00 she asks the practice to invite a new user under the practice-issued email address rather than her own. The practice's admin uses Invite Team on the Grok Bot page, which sends a newcomer an invitation to the team, by email or by link, with a pointer to Grok Bot included. She accepts it at 11:15.

At 11:25, on her Windows laptop, she opens the account menu in Grok Bot and chooses Add account. The browser opens for Cursor authentication, she signs in as the new user, and she returns to the app. The account menu now offers Switch account, and Settings lists both accounts, with Remove on the row that is not active. The new account runs through first-use setup, and its computer starts from scratch: no sessions, no files, no Bots.

At 11:50 she makes the change that is easiest to skip. She opens Settings on the client account and sets Execution on Local Computer to Never allow. Then she switches to her own account and finds she had set the same control to Always allow months earlier, so her Invoices Bot could drop PDFs onto the laptop. She moves it back to Ask every time. Two cloud computers are now separate, but her laptop is one machine that both accounts could otherwise reach.

At 12:10 she creates the first client Bot, opens its computer, takes control, and signs its browser into the practice's project tracker herself. That session exists only on the client account's computer. When the operations lead asks the same question on Wednesday, Dalia can answer with a sentence from the docs and a description of how she set it up.

## Add the second account from the desktop account menu

The mechanics are short. In the desktop app, open the account menu and choose Add account to save another account. Once more than one account is saved, the account menu includes Switch account. Settings lists the same accounts, and each inactive row includes Remove.

Signing in follows the normal Cursor flow. Keep Grok Bot open while the browser runs authentication, confirm the browser shows a successful sign-in, and return to the app yourself if it does not come back into focus. If the new account belongs to an organization that uses single sign-on, complete the organization's login rather than signing in with a personal account, which the troubleshooting page specifically warns against.

The docs describe Switch account and Add account on the desktop. The mobile page lists managing your account, signing out and deleting your account under Settings, and does not mention switching between saved accounts. If you need both accounts on your phone, check what your installed app offers before you plan around it.

One more gap worth knowing about. The docs describe Remove only as an option on inactive rows. They do not say what it does to that account's Bots, routines or cloud computer, so do not treat it as a way to shut an account down. Closing an account properly is covered near the end of this page.

## Know which settings follow the account and which stay on the desktop

Two accounts on one laptop means some settings travel with the account and some stay with the machine. Getting this wrong is how a careful setup leaks.

| Setting | Belongs to | What that means with two accounts |
|---|---|---|
| Personal Auto-review rules | The account, applied on every desktop and on its Grok Bot computer | Each account has its own rules; write your Ask first rules on both |
| Execution on Local Computer | The desktop, with a row per registered computer | Both accounts can act on the same laptop; check the setting under each account |
| Route egress through this desktop | One desktop | Either account's traffic can leave through the same laptop network |
| Plugins and connectors | The account, account-wide rather than per Bot | Install and authorize separately on each account |
| Private skills | The account's library, shared by its Bots | Skills do not cross from one account to the other |
| Weekly usage and on-demand limit | The Cursor account | Two meters and two monthly limits |
| A SuperGrok or X Premium+ link | One Cursor account, permanently | Choose the account before you link |

The two desktop rows are the ones to watch. The docs say the local execution setting applies to the desktop in front of you, and that once an account has registered computers the choice moves to a per-computer row under Settings > Computer > Computers. They do not say how that setting behaves when two accounts share one desktop. Dalia's habit of opening the setting under each account after switching is the only way to know what your machine is actually allowing.

## Pay for the second account as a separate plan

Grok Bot usage is metered on the Cursor account, not on Grok or X. A second account starts with nothing from the first: it needs its own access, has its own weekly usage, and has its own on-demand limit. Plans on the same account never stack, and two accounts do not pool either. They are simply two customers who happen to be you.

| How the second account gets access | Price | Who controls its settings | Watch for |
|---|---|---|---|
| Cursor Pro | $20 per month | You | Weekly usage below Pro+ |
| Cursor Pro+ | $60 per month | You | Weekly usage below Ultra |
| Cursor Ultra | $200 per month | You | The highest weekly usage |
| A seat on someone's self-serve Teams plan | Set by that team's plan | That team's admins | On-demand is on by default for Teams |
| An Enterprise seat | Set by the contract | That organization's admins | No personal SuperGrok link |
| An individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ link | Billed by xAI or X, not Cursor | You | The link is permanent |

A seat on the client's plan, as in Dalia's case, costs you nothing, and for client work it is usually the right answer, because the client's own policies then govern the client's work: their Team Rules, their connector policy, their privacy mode, and on Enterprise their audit logs and enforced review. Usage draws from that seat's allowance, and the plans page notes that on-demand usage is enabled by default on Teams, which is a conversation to have with the client before the first long job.

If the second account is for your own separate project, you control it and you pay for it. Pick the plan by how much work the account will do, and set its On-demand monthly limit in Grok Bot Settings or under Spending on the Cursor dashboard. There is no Grok Bot-specific spend cap on either account; the account-level on-demand limit is the control. The limit does not cut a run off halfway: per the plans page, a Bot in the middle of a task may finish beyond it, and extra usage then stays off until you lift the limit or a new billing cycle begins.

## Link a SuperGrok subscription only after you have chosen the account

Individual SuperGrok, SuperGrok Plus, SuperGrok Heavy and X Premium+ subscriptions can be linked to a Cursor account to grant Grok Bot usage. With two accounts on one desktop, the link needs more care than usual, because the plans page is unambiguous that a link is permanent once created. You cannot unlink it and you cannot move it to a different Cursor account.

That turns a routine click into a one-way decision. On the desktop the link offer sits under Settings > Usage & Billing, with a label that names the tier that applies. If the active account at that moment is a client's seat, you will have tied your personal subscription to an account whose login the client controls, and which you may lose when the engagement ends. Check which account is active before you open that screen.

It also rarely helps to link on top of an existing plan. A Cursor plan and a link never add up; Grok Bot uses whichever one grants more. Enterprise seats and request-based Teams plans do not take a personal link at all. The usual right answer is to link to the account that has no Cursor plan of its own and needs the usage, and nowhere else.

## Give a workload its own account when one of these is true

The docs reduce the rule to a single line: a separate computer and separate credentials mean a separate Cursor user. The judgment is in deciding which workloads need that. This table is the starting point this site uses.

| Workload | Second account? | Why |
|---|---|---|
| Work for a client whose data must stay apart from other clients | Yes | Otherwise their sessions and files share a computer with every Bot you run |
| A project with contract terms about where its data may go | Yes, and read the terms | The account boundary is necessary, but check residency and certifications too |
| A shared team login, such as a company social account several people use | Yes, a dedicated user | Otherwise that session is open to every Bot on whichever account signed in |
| Your employer's work and your personal work | Yes; the employer usually provides it | Employer policies should govern only employer work |
| Two jobs that use the same logins, such as inbox triage and meeting prep on your own mail | No | The credentials are the same either way; separate Bots are enough |
| Trying an untested plugin or an unfamiliar website | Worth considering | Outside content can try to steer a Bot, and a separate user keeps the attempt away from your sessions |

The contract row needs a caution. A separate account separates computers. It does not change where they run or what the vendor is certified for. The docs say Grok Bot computers currently run in the United States, that running there is a separate matter from the US-only data residency program Cursor offers, which does not cover Grok Bot by default, and that the only certifications they name are ISO/IEC 27001 and ISO/IEC 42001, with reports at trust.cursor.com. If a contract needs more than that, the docs send you to your Cursor account team.

The last row is the least obvious. The docs say that outside content a Bot reads can attempt to redirect it, whether it arrives as a web page, a plugin result or command output, and that Grok Bot's defenses reduce the risk without removing it. On a shared computer, the Bot that reads a hostile page sits next to every session your other Bots use. A throwaway account for experiments keeps that exposure off the computer that holds your real logins.

## Keep your laptop from becoming the bridge between two computers

Two accounts give you two cloud computers that cannot reach each other. They do not give you two laptops. The desktop app is the one thing both accounts touch, and two desktop features can connect whatever the accounts were meant to keep apart.

Local execution is the first. When it is allowed, a Bot can run commands on your own machine, read files there, and move files between its cloud computer and your laptop. If both accounts can do that, a file one account's Bot pulls down to your Downloads folder is a file the other account's Bot could pick up. The default is Ask every time, and the docs advise Never allow except where a Bot genuinely needs your local files. The first time a Bot asks, the prompt offers Always allow, Allow once, Never and Deny once, and the first and third apply to every Bot, so answer that prompt deliberately.

Desktop egress is the second. Route egress through this desktop sends the cloud computer's web traffic out through your laptop's network, where destinations see your laptop's address and the Bot can reach whatever that network reaches. It is set per desktop.

The setting this site recommends is Never allow on any account that exists for isolation, and Ask every time at most on your own. A client's Teams admin may already have capped local execution for their team, and when the team's cap is stricter than yours, the team's applies. Either way, open the setting under both accounts after you add the second one, as Dalia did.

## Switch accounts knowing the other one keeps working

Switching the desktop app to another account changes what you are looking at. The docs do not describe it as pausing anything, and they are explicit that cloud work continues when the app is closed: a background turn or a routine keeps running whether or not you are watching. Plan as if the account you switched away from is still busy, because nothing in the docs says it stops.

Notifications are the open question. The docs describe notifications per Bot, and they do not say whether a saved but inactive account on the desktop delivers them. Until you have seen one arrive, assume you might not hear about an approval request on the account you are not looking at, and switch back to check it at predictable times.

A quieter risk shows up if you rarely open one of the accounts. After a long absence, the docs say, Grok Bot may check whether you still want your routines running, and can pause them when the question goes unanswered. On an account you visit once a week, that question can go unanswered. Review paused routines whenever you return to it.

Finally, make the active account impossible to mistake. Each Bot has a name, an optional label, a description and an avatar. Put the client's name in the label of every client Bot and give them a distinct avatar, so that when an approval card appears you know which account's rules you are applying before you press anything.

## Carry a Bot across accounts without carrying its logins

Sooner or later you will want a role that works on one account to exist on the other. Duplicate will not do it; it copies a Bot within the same account. The documented way to move a configuration between accounts is a template.

Open the Share menu on the Bot, choose Create template, and copy the link. You choose whether the link is public or team-only, and a team-only link opens only for members of that team, which your other account may not be. Switch the desktop app to the receiving account, open the link, preview it on x.ai, and choose Add to Grok Bot. The docs do not say how that step picks between saved accounts, so confirm the copy lands where you meant. The copy arrives without the computer, the logins or the conversation history, which is exactly what you want. It also means you sign the new copy into everything again on the new account's computer.

The link exposes the Bot's configuration, including its identity, description, skills and routines. Strip API keys, internal URLs and client details before you create it, especially when the direction of travel is from a client account to your own. A client team may also have public template sharing turned off, in which case copy the description by hand instead. [Moving Grok Bot work from a personal seat to work](/blog/move-grok-bot-work-from-personal-to-work) walks through the manual version step by step.

## Answer the reader who says two well-named Bots are enough

At its strongest, the objection is practical. A second account costs money or a favor from a client, it doubles the logins you maintain, and it adds a switch step to every task. A careful operator can get most of the benefit on one account: one Bot per client, a strict description on each, and a habit of signing out of a client's tools the moment a task finishes.

Some of that is right. Clear descriptions and boundaries make each Bot behave better, and signing out of tools you no longer need is good hygiene on any account. For two roles that use the same credentials, separate Bots on one account are the correct design, and a second account would be waste.

The objection rests on one thing, discipline at the worst moment, and that is exactly where it fails. Browser sessions persist by design so you do not have to sign in for each task, which means the client session you meant to close is still open when you are busy. Every Bot can open the files in the workspace. The command-line credentials belong to all of them. A description tells a Bot what it should do; it does not stop another Bot on the same computer from using what is there. The docs do not hedge on this, and they do not offer a setting that changes it.

If a second account really is out of reach, the other isolation moves are worth knowing: keeping tokens in hosted connectors so they never land on the computer, fetching exports instead of leaving consoles signed in, and signing out of sensitive sessions before another Bot runs. [How to isolate Grok Bot credentials](/blog/how-to-isolate-grok-bot-credentials) covers each one. They reduce exposure on a shared computer. They do not create a boundary.

## Write the account boundary into each roster Bot

On a two-account setup, give each account a roster Bot that knows which side of the line it lives on. [Chief Of Staff](/bots/chief-of-staff) maps every recurring commitment to one owner and never posts or edits anything itself; [Fleet Chief Of Staff](/bots/fleet-chief-of-staff) keeps a TEAM.md with each Bot's lane and boundary and asks before anything that cannot be undone. Either works as the coordinator on each account. Add the paragraph below to the one on the isolated account.

\`\`\`text
ACCOUNT BOUNDARY (client account, practice-issued login)

This Cursor account exists for one client. Every Bot on it shares
one computer, so treat every login and file here as client material.

1. Sign this computer's browser only into the client's own tools.
   Never into my personal mail, my bank, or another client's systems.
2. Never ask me to paste or read out a credential. For any login,
   ask me to take over the computer.
3. Never move files between this computer and my laptop. Local
   execution on this account stays at Never allow.
4. Keep client files under /workspace/client and nowhere else.
5. Keep TEAM.md current: every Bot on this account, its lane, its
   boundary, and every site this computer is signed into.
6. If a task needs anything outside the client's tools, stop and
   tell me to do it from my own account. Do not work around it.
7. At the end of the engagement, list every signed-in site and
   installed connector so I can revoke each one at its source.
\`\`\`

Line 6 is the account-level version of the boundary every botskills listing declares: the one action the Bot never takes without a human. Here it is crossing to the other side. The Bot cannot reach the other account's computer anyway, since the docs say one user cannot reach another user's computer and every handoff they describe is between Bots on the same account, but the rule stops it trying to help by asking you to paste something across.

## Prove the separation with checks that can fail

A boundary you have not tested is a belief. These checks take ten minutes after you add the second account, and each one can come back wrong.

From a Bot on the isolated account, ask it to open a site you are signed into on your own account, such as your personal mail. It should hit a login page. If it lands inside your inbox, either you are on the wrong account or this computer was signed into that mailbox at some point, and you need to find out which.

Ask a Bot on the isolated account to list the top level of /workspace. None of your own files should be there. Then open Marketplace, choose Your plugins, and confirm the isolated account lists only the connectors you installed there, since connectors are installed per account.

Open Usage & Billing on each account and confirm each one shows its own plan or seat. Then read Execution on Local Computer under each account, and write down what each one says. If either says Always allow and you did not mean it, change it now.

## Close the second account at the end of the engagement, in the right order

When the client work ends, the second account is where the client's sessions and files live, and none of it disappears on its own. The docs' order for removing access works here unchanged: pause or delete the related routines, sign the computer's browser out of every website, remove connectors and withdraw their access in the service each one connects to, clear sensitive files out of /workspace, and then hide or delete the Bots.

Deleting a Bot does not remove files or browser sessions from the computer, because they belong to the account rather than the Bot. That is why the sign-outs and file removal come first. If the Cursor account itself should go, the docs point to the account settings flow for deleting it, and the phone app lists account deletion under Settings as well. If the account was a seat on the client's team, tell their admin when you are done; the plans page says that removing a Teams seat ends the Teams grant.

Do all of that before you reach for Remove on the desktop account list. As noted earlier, the docs do not describe Remove as touching the account's computer at all.

## Watch for the change that means this page stops applying

The account model could change more than anything else on this page, since the product is still a beta. The claims above reflect the docs as of 23 September 2026. Two changes would turn this page over. The first is per-Bot computers or per-Bot credential isolation; if the docs ever say a Bot's sessions and files are its own, separate Bots become a real boundary and much of this page becomes unnecessary. The second is account switching on the phone, which the mobile page does not describe today.

Smaller changes to watch: whether saved but inactive accounts deliver notifications, what Remove does, and whether a SuperGrok link ever becomes movable. If your app or the docs disagree with anything here, they win. Re-read the [security FAQ](https://docs.x.ai/grok-bot/security-faq) before you design an engagement around this page.

## Frequently Asked Questions

### Can I use two accounts in Grok Bot?

Yes, on the desktop app. Open the account menu and choose Add account to save a second Cursor account; once more than one is saved, the menu offers Switch account. Settings lists the same accounts, and inactive rows include Remove. Each account has its own cloud computer, Bots, plugins, rules and usage. As of 23 September 2026 the mobile docs do not describe switching between saved accounts, so check your phone app before relying on it.

### Do separate Grok Bots keep credentials apart?

No. Every Bot on one Cursor account uses the same cloud computer, sharing its browser sessions, files and command-line credentials, and the docs say not to use separate Bots as a security boundary. Each Bot gets its own screen, but screens are work surfaces rather than walls. The docs say a job that needs its own computer and credentials should run under its own Cursor user, whose computer is separated from yours at the hardware level.

### Does a second Grok Bot account need its own plan?

Yes. Grok Bot usage is metered per Cursor account, so a second account needs its own access: Cursor Pro at $20 a month, Pro+ at $60, Ultra at $200, a seat on a Teams or Enterprise plan, or an individual SuperGrok, SuperGrok Plus, SuperGrok Heavy or X Premium+ link. Each account has its own weekly usage and its own on-demand monthly limit. A SuperGrok link is permanent and cannot be moved, so choose the account first.

### Does joining a second Cursor team give me a second computer?

No. The docs on managing computers say one computer serves every team a member belongs to, which is why only organization admins can recreate or terminate one. If a client adds your existing Cursor account to their team, their work lands on the same computer as everything else you run. To keep a client's sessions and files apart, ask them to invite a separate Cursor user, usually under an email address they issue.
`,
};

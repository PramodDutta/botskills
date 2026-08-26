import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Grok Bot vs OpenAI Computer Use: Driving a Browser',
  description:
    'Grok Bot computer use against what OpenAI actually ships now that Operator and ChatGPT agent are retired: cloud browser, the computer tool, and how to pick one.',
  date: '2026-08-25',
  category: 'Comparison',
  content: `
# Grok Bot vs OpenAI Computer Use: Driving a Browser

If you are comparing these because you need a bot to log into a supplier portal
and pull a file every Monday, start with the awkward fact: the OpenAI product
most people are still searching for by name does not exist any more, and its
replacement cannot log in to anything.

Everything below was checked on 2026-08-25 against OpenAI's and xAI's own
documentation. This corner of both products has changed twice in a year, so
re-read
[OpenAI's cloud browser article](https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt)
and
[the Grok Bot computer docs](https://docs.x.ai/grok-bot/computer-and-apps)
before you commit to either.

## Start here if you came looking for Operator

Operator was OpenAI's standalone computer-using agent. Its help centre article
at
[help.openai.com/en/articles/10421097-operator](https://help.openai.com/en/articles/10421097-operator)
returns a 404 as of this check. Its capabilities were folded into ChatGPT agent
mode, and that surface is gone too. OpenAI's own
[ChatGPT agent help page](https://help.openai.com/en/articles/11752874-chatgpt-agent)
now opens by saying the agent is no longer available, pointing users at ChatGPT
Work for longer multi-step tasks and at cloud browser for supported browser
workflows. Confusingly, the rest of that same page still documents how to invoke
agent mode, so read the first paragraph and ignore the rest of it.

So there is no current OpenAI product called Operator, and no current consumer
surface called ChatGPT agent. What remains is two distinct things with the same
underlying idea, which is why this article is titled after the capability rather
than a product name.

## Two OpenAI surfaces survive, and only one is a finished product

The first is cloud browser inside ChatGPT. It lets ChatGPT work on supported
public websites when a connected app cannot finish the job, navigating pages,
entering information in supported fields, and combining that with data from
connected apps. It is available on paid plans other than Free and Go, tasks can
continue in the background, and it pauses when it needs information or
confirmation.

The limitation is the headline, and OpenAI states it plainly: at launch, cloud
browser works only on public pages. It does not accept credentials, use autofill
or password managers, sign in to websites, or complete payments, and if a site
requires one of those steps the task stops. Saved cookies do not change this,
because they do not enable authenticated browsing at launch either.

Read that twice if your use case involves a login, because it rules cloud
browser out entirely rather than making it awkward.

The second is the computer tool in the API, documented at
[developers.openai.com](https://developers.openai.com/api/docs/guides/tools-computer-use).
This one is a developer primitive: the model returns interface actions such as
click, type, scroll, drag and keypress, and your code executes them and returns
the new screen. You supply the browser or the desktop. OpenAI offers three
shapes for it: a built-in loop, a custom tool wrapping an existing Playwright,
Selenium, VNC or MCP harness, or a code-execution harness for workflows that
need loops, conditional logic or DOM inspection. Note that the docs are
currently inconsistent about which model id is GA, with prose, code samples and
the migration table naming three different versions, so check the identifier
before you ship.

The API tool can absolutely sign in, because you built the harness and you
decide what it may do. That capability comes with all of the responsibility.

## Grok Bot sits between a finished product and a harness you build

Grok Bot sits between those two. It ships as a finished product like cloud
browser, but its browser lives on a persistent machine like something you would
build yourself.

Every bot on the account shares one persistent cloud computer, a managed Linux
VM where the bot runs as a non-root user, and each bot gets its own screen on
it. Browser cookies, signed-in sessions, files and command line credentials are
shared across every bot on that computer, and the docs are direct about the
consequence: the screens are separate work surfaces, not separate security
boundaries, and you should not use separate bots as a security boundary
([approvals, security and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Deleting a bot does not remove those files or browser sessions.

Because the sessions persist, Grok Bot can do the thing cloud browser cannot: it
can be logged in on Monday because you logged it in last Tuesday. That is the
entire practical difference for most people reading this.

It also has a recording path. Teach-by-demonstration captures visible computer
interaction for up to ten minutes, without microphone audio, and produces a
draft skill. It covers browser workflows only and is unavailable on iPhone
([skills, routines and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)).

## Four questions settle this faster than any feature list

You do not need a feature matrix here. You need four answers, in order, and most
readers stop before the third.

| Ask this | If yes | If no | What it rules out |
| --- | --- | --- | --- |
| Is there an API or a connector you can get today | Use it and stop reading | Continue | Everything below |
| Does the task begin behind a sign-in | Continue | Cloud browser, if your plan includes it | Cloud browser, which does not sign in and stops when a site requires it |
| Are the credentials a client's, a customer's, or regulated | Build on the API computer tool, in an environment you own | Continue | Grok Bot, whose sessions are reachable by every bot on the account |
| Will someone still maintain a harness next quarter | The API tool is on the table | Grok Bot, shared computer accepted | The API tool, days of work plus maintenance forever |

Row two ends most arguments. A login is not a difficulty rating for cloud
browser, it is an exclusion. Row three is the one people answer too fast: it
asks whose credentials, not whose data. A supplier login issued in your name is
a different answer from a client's admin account you were handed for
convenience.

## Pay the three taxes a screen charges, or do not use a screen

Every browser-driving agent pays the same three taxes, and it is worth being
concrete about them before you design around one.

The first is round trips. An API call is one request and one response. A UI task
is a screenshot, a decision, an action, another screenshot, and so on until the
job is done. A form that an API would fill in one call takes a dozen turns.

The second is tokens. Each screenshot is an image in the context window. Larger
images improve click accuracy and cost more input tokens, which is why OpenAI's
guide recommends specific working sizes such as 1440x900 and 1600x900 rather
than the largest screen you can render. A long session accumulates images fast,
and the accumulation is the cost, not the reasoning.

The third is ambiguity. An API returns a field named \`invoice_total\`. A screen
returns pixels that a human reads as an invoice total. Every layer between those
two is a place to be wrong, and the agent will occasionally be confidently
wrong in a way an API client cannot be.

The honest summary: if the tool you need has an API or a connector, use it. UI
driving is a fallback, and it should feel like one.

## The case where a browser is the only door

The fallback is not rare, which is why any of this exists. Four situations come
up constantly.

A tool with no public API at all, which describes most council portals, a lot of
supplier and logistics systems, and nearly every internal admin panel.

A tool whose API exists but is gated behind an enterprise contract you do not
have, while the same data sits on a page you are entitled to read.

A workflow that spans a vendor's site and your own systems, where the vendor
step is the only manual one left.

A read that is genuinely public and just tedious, which is the safest category
by a distance. A [Competitor Website Watch](/bots/competitor-website-watch)
setup reads public pages and contacts nobody, and that boundary is what makes it
cheap to leave running.

## Hand the login back to a human at a line you wrote down first

Authentication is where the three approaches visibly diverge, and it is a
consent question as much as a technical one.

Cloud browser refuses. It does not accept credentials or sign in, so the task
simply stops and returns the page for you to review. That is a defensible design
and it means the failure mode is always benign.

Grok Bot persists a session on the shared machine. Convenient, and the thing to
understand is what you are consenting to: you are not logging one bot in, you
are logging the account's computer in, and every other bot on it inherits that
session. If a client's credentials are on there, they are on there for
everything.

The API tool leaves the policy to you, and OpenAI's guide gives a usable
escalation ladder. Some things hand off to the human, such as the final step of
a password change or anything that would bypass a safety barrier like an HTTPS
warning or a paywall. Some things always confirm, including deleting data,
changing permissions or sharing, CAPTCHAs, installing software, sending or
posting on someone's behalf, and financial transactions. Some things a
pre-approval covers, such as a routine login, if the original prompt explicitly
allowed it. The guide also makes a point worth stealing regardless of vendor:
typing sensitive data into a form counts as transmission, so it gets confirmed
before it happens, not after.

The related rule, which applies to all three: content on the screen is untrusted
input. Instructions found in a page do not become permission just because they
look urgent or claim to override policy.

Here is a charter for a login-touching bot that keeps the consent question
answerable.

\`\`\`text
Name:      Flight Check-In
Trigger:   24h before departure, from the itinerary email
Reads:     the airline site, signed in with the session already
           saved on the machine
Writes:    seat selection and check-in only, on the booking named
           in the trigger email, and nothing else
Boundary:  never buys anything, never changes the fare, never
           adds bags, never touches another booking
Handoff:   stop at every 2FA prompt and every bot check, send me
           the screenshot and the URL, and never attempt to get
           past one
Proof:     attach the boarding pass or say plainly that check-in
           did not complete, with the last screen it saw
\`\`\`

The Handoff line is the one that matters. Every listing on botskills.sh has to
declare a boundary, and for a bot with your logged-in session the boundary is
what makes it safe to leave running. The
[Flight Check-In](/bots/flight-check-in) listing carries exactly that rule:
stop for a human at every 2FA or captcha, never try to get past one. Solving a
CAPTCHA is not a feature, it is your agent asserting it is you to a site that
asked a direct question about that.

## Expect the site to decide whether your agent is welcome

Both hosted options run from someone else's datacentre, and websites can tell.

Grok Bot's computer uses static egress IPs, and the docs note that some services
flag datacenter IP addresses
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)). A
static address is a mixed blessing: it is stable enough to allowlist if you own
the site, and stable enough to blocklist if someone else does.

OpenAI documents the same problem from the other side. Some websites use
security measures that restrict automated browser agents, and if a site
identifies cloud browser as automated traffic it may block the task even when
the same site works normally in your own browser. OpenAI is clear that the
restriction is the website's decision, not theirs, and publishes allowlisting
instructions for operators who want to permit it, using signed HTTP requests
that identify the traffic as coming from ChatGPT.

That is the emerging shape of this whole category: sites are starting to decide
which agents they admit, by name. If you run the API tool on your own
infrastructure you avoid the shared reputation problem entirely, and you take on
being a good citizen yourself.

## Assume the page will change and design for a loud failure

This is the failure that decides whether a browser bot is a nice demo or
something you rely on, and each approach fails differently.

A recorded path is the most brittle of the four. Grok Bot's
teach-by-demonstration produces a draft skill from up to ten minutes of watching
you work, so it is coupled to the layout that was on screen at the time, and the
docs call it a draft for exactly that reason. Coordinate driving is next, and
OpenAI's recommended mitigation is architectural rather than magical: use a
code-execution harness when the workflow needs conditional logic or DOM
inspection, so the agent checks the page instead of trusting positions.

Structure-aware driving degrades most gracefully and still degrades. Anthropic's
[browser use tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool),
the third real option here, lets Claude act on an element by reference from the
accessibility tree rather than by coordinate. The docs state those references
stay valid only until the tab navigates or its DOM changes materially, and that
the API cannot detect a stale one for you.

| Technique | Binds to | Broken by | How it fails |
| --- | --- | --- | --- |
| A recorded demonstration | The layout on screen while you recorded | Any redesign, and variants you never recorded | Quietly, acting on whatever sits there now |
| Coordinate clicks | Pixel positions at your working size | A moved button, a banner, a different window size | Loudly on nothing, quietly on something else |
| Accessibility tree references | A node reference, until the tab navigates or the DOM shifts materially | Navigation, material DOM change | Quietly, since the API cannot spot a stale reference |
| A documented API call | A field name in a published contract | A versioned breaking change, usually announced | Loudly, with an error you can read |

The uncomfortable conclusion is that none of the first three is durable. What
you actually control is how loudly the failure happens, which is why the charter
above ends with a Proof line. A browser bot that reports what it saw when it
failed is maintainable. One that reports success because the last click did not
throw an error is a liability. There is more on that reasoning in
[the shared computer security guide](/blog/grok-bot-shared-computer-security).

## Match a browser failure to its cause before you rewrite the charter

Almost every browser-agent failure gets diagnosed as a prompt problem and almost
none of them are. Find the symptom, change the thing in the third column, and
only then consider rewording anything.

| Symptom | What is actually happening | What to change |
| --- | --- | --- |
| It stopped at a sign-in and handed the page back | Cloud browser does not sign in, and the task stops there | A runtime that holds a session, or a browser you supply |
| Fine yesterday, a block page today | The site has identified the traffic as automated, which is its call | Ask the operator to allowlist it, or use your own network |
| Your demonstration works, the replay does not | A demonstration produces a draft coupled to what was on screen | Revise after each redesign, treat every recording as a first cut |
| You declined the approval and it stayed done | An approval gates the proposed action, it does not reverse completed work | Move the boundary onto the irreversible step, not the one after it |
| A bot built for one job reached another job's account | Cookies, sessions and files are shared across bots on the one computer | Separate the accounts, not the bots |

The last two rows are incidents rather than inconveniences. The ones above them
cost you a run. Those two cost you an explanation.

## Follow one supplier portal from the first run to day thirty

Take the job that sends most people to this comparison. A distributor posts your
invoices as PDFs behind a login every Monday, there is no API, and somebody
spends fifteen minutes filing them by month.

The four questions resolve it quickly. No API, so row one does not rescue you.
The job starts behind a sign-in, so cloud browser is out. The login is yours
rather than a client's and nobody will maintain a harness next quarter, so this
is the Grok Bot case with the shared-computer trade taken deliberately.

Day one is slower than doing it by hand, and that is normal. You sign in, the
bot navigates and files two invoices, and you spend ten minutes reading about a
fifteen minute task. The point of day one is not saving time, it is working out
what the report has to say.

Make it say this.

\`\`\`text
RUN 2026-08-25 09:00   Supplier Portal Invoice Pull
FOUND        2 invoices   INV-88431 (142 KB)   INV-88437 (139 KB)
SAVED TO     /invoices/2026-08/
NOT FOUND    nothing listed for Northbeam since 2026-07-28
BLOCKED      none
LAST SCREEN  invoice list, filter "Aug 2026", 3 rows visible
\`\`\`

Every line makes one specific lie impossible. Byte sizes stop a zero byte
download passing as a success. NOT FOUND names the supplier and the date it last
saw one, so a quiet week and a broken filter stop reading identically. LAST
SCREEN is the difference between reproducing a failure in a minute and losing an
afternoon to it.

Day seven brings the first real failure: the portal starts showing an
announcement before the invoice list. A bot with that report says the last
screen it saw was an announcement page, which you fix in two minutes. A bot
without it says there were no invoices this week.

Day thirty brings the redesign. The list moves behind a tab, the recorded path
stops matching, and the run finds nothing. Whether that was worth building comes
down to how loudly it failed. Fifteen minutes of re-recording against an honest
report is maintenance. A month of quietly empty folders, found when accounts
asks where July went, is an incident.

## Verify the artefact, never the agent's own summary

The summary is written by the thing you are checking, so it is evidence of
intent and nothing more. Check the artefact instead, on a schedule you set
before the first run rather than after the first surprise.

The monthly check is arithmetic. Open the portal, count the invoices listed for
one week, and compare that against what the bot filed. Numbers that differ are
the only warning you get, because nothing else here knows the right answer.

The check that earns its keep is the one you run deliberately. Sign the session
out, then start the run. A correct bot stops at the login and says so. A bot
that reports a clean run with nothing found has shown you that its quiet week
and its broken week are the same sentence, which is a defect in the report
rather than in the week.

Apply the same suspicion to the file. Present, non-zero, and opens are three
separate assertions, and an HTML error page saved under a .pdf name satisfies
the first two.

## A bot you have to check is not automation, and that is half right

The strongest argument against everything above is that you have not removed the
work, you have moved it. Somebody still reads a report every Monday, re-records
the path after the redesign, and runs the sign-out test. On a fifteen minute
task, that can add up to more than fifteen minutes.

Half of that deserves conceding. The defence is not that checking is free, it is
that checking and doing are different sizes. Six lines takes seconds where the
task took a quarter of an hour, and the reading decays: four clean runs in, you
sample monthly rather than read weekly. The maintenance is real but episodic,
and it arrives with a screenshot attached if the report was written properly.

Four cases where the objection simply wins. A task under about two minutes,
where the report costs more attention than the work it replaced. A quarterly
task, where the path rots between runs and you pay full maintenance every time.
A task whose output you cannot check cheaply, because confirming it by redoing
the work buys nothing. And a task where a silent miss stays invisible for a
month: compliance evidence, filing deadlines, anything a customer quietly relies
on.

The test fits in one sentence: describe how you would notice this bot being
wrong. If that is hard to write, the browser is not your problem and the vendor
is not either.

## Driving a browser, compared across six axes

| Axis | Grok Bot | ChatGPT cloud browser | OpenAI computer tool |
| --- | --- | --- | --- |
| Who runs the browser | xAI, one shared VM per account | OpenAI, remote session | You, on your own infrastructure |
| Can it sign in | Yes, sessions persist on the machine | No, not at launch, and the task stops | Yes, if you implement it |
| State between runs | Cookies, files and logins persist | Cookies may be saved but do not enable sign-in | Whatever you build |
| Approval model | Approval on the proposed action, which does not undo completed work | Confirmation before hard-to-undo or committing actions | Yours to implement, with a documented escalation ladder |
| Egress identity | Static datacenter IPs, some services flag them | May be blocked as automated traffic, with operator allowlisting available | Your own network |
| Setup burden | Minutes, in an app | None, it is in ChatGPT | Days, plus ongoing maintenance |

## Pick the runtime from the task, never from the brand name

If the task needs a login, cloud browser is out. Not slower, not harder, out.
That single question resolves most of these comparisons in one line.

If the task is a public page and you already pay for ChatGPT, use cloud browser
and stop reading. It costs nothing extra, there is nothing to set up, and the
worst case is that it stops and hands you a link.

If the task needs a login and you want it running this week, Grok Bot is the
short path, provided you accept the shared-computer model. Put nothing on that
machine you would not put on a single laptop shared by everyone the account
covers. A [Grocery Autopilot](/bots/grocery-autopilot) style setup, which holds
every order until you approve it, is the right shape for that runtime: it uses
the persistent login and never commits.

If the task needs a login and the credentials belong to a client, a customer, or
anything regulated, build on the API tool or an equivalent and run it in an
environment you control. The extra week of work buys you isolation per job,
your own egress, and a log you own.

And if the honest answer is that the tool has an API you have not looked at yet,
go and look. The best browser automation is the one you did not need to write.
For the wider argument about where any of these belong, see
[the introduction to botskills](/blog/introducing-botskills).

**Keep reading:** [Grok Bot vs Claude Agents](/blog/grok-bot-vs-claude-agent), [Choosing a Model for Rakazo](/blog/rakazo-model-choice), [The Best AI Bots for Developers in 2026](/blog/best-ai-bots-for-developers).

This sits inside a wider guide: [Every AI Agent Platform Compared](/blog/ai-agent-platforms-compared) covers the whole territory.

## Frequently Asked Questions

### Is OpenAI Operator still available?

No. Operator was OpenAI's standalone computer-using agent, its capabilities were
folded into ChatGPT agent mode, and its help centre article now returns a 404.
The agent surface that replaced it is also retired: OpenAI's own ChatGPT agent
help page states the agent is no longer available and directs users to ChatGPT
Work for multi-step tasks and to cloud browser for browser workflows. If you are
evaluating tools against articles that describe Operator as a current product,
those articles are describing something that no longer ships under that name.

### Can ChatGPT's cloud browser log into a website for me?

Not at launch. OpenAI's documentation states that cloud browser works only on
public pages and does not accept credentials, use autofill or password managers,
sign in to websites, or complete payments, and that a task stops if a site
requires one of those steps. Saved cookies do not change this, because they do
not enable authenticated browsing either. If your workflow starts behind a login
screen, you need a runtime that holds a session, such as Grok Bot's persistent
computer, or a harness you build yourself on the API computer tool.

### Why do some websites block my agent when the site works in my own browser?

Because the site is deciding, not the agent. OpenAI documents that sites using
anti-automation measures may identify cloud browser as automated traffic and
block it even when the same page loads normally for you, and that this
restriction is set by the website. Grok Bot hits the same wall from a different
angle: its computer uses static egress IPs, and its docs note that some services
flag datacenter addresses. Running on your own infrastructure avoids the shared
reputation problem, at the cost of maintaining that infrastructure yourself.

### What is the single biggest risk of letting a bot drive a logged-in browser?

That it acts as you, with your session, in a place where an approval cannot
undo the action. Grok Bot's docs make this explicit: an approval controls the
proposed action, it does not reverse work already completed. Sending a message,
submitting a form, or confirming a purchase are all one click from irreversible.
The defence is a boundary written before the first run, naming the actions the
bot never takes without a human, plus a rule that it stops at every 2FA prompt
and bot check rather than trying to work around one.
`,
};

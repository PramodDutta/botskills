import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Rakazo Sandbox Options: Docker, Cloud, or Your Own Machine',
  description:
    'Every Rakazo sandbox option puts your bot browser and shell somewhere different. Docker, E2B, Daytona, Box, and This Mac, with the isolation each one buys you.',
  date: '2026-08-25',
  category: 'Reference',
  content: `
# Rakazo Sandbox Options: Docker, Cloud, or Your Own Machine

When a bot opens a browser, signs into an account, and runs a shell command,
that has to happen on a specific computer. Which computer is a security
decision, not a preference, because it determines what the bot can reach when
a web page tells it to do something you did not ask for.

Rakazo makes that choice explicit through a single setting, and this page is
the reference for what each value actually gives you. Everything here was read
from [elie222/rakazo](https://github.com/elie222/rakazo) on 2026-08-25. Rakazo
is in beta, so verify the provider list against the repo before you commit.

## Separate the agent runtime from the computer runtime before you choose

Rakazo separates the agent runtime from the computer runtime. The model session
runs inside the Rakazo API and worker processes, and it reaches a machine
through a provider interface. The computer runtime doc states this plainly:
Pi runs in the Rakazo API and worker process, and is not installed in or
executed by the sandbox
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).

That separation is why swapping backends is a config change rather than a
migration. A backend has to implement four things: lifecycle, desktop, command
execution, and file access including a complete workspace import and export.
Anything that implements those can be a Rakazo computer.

The model sees the same tools regardless of backend: \`computer_observe\`,
batched \`computer_act\`, \`open_path\`, \`launch_app\`, \`shell\`, and file tools.

## Name all the backends, including the ones that are test doubles

The choice is one environment variable,
\`SANDBOX_PROVIDER\`, documented in
[.env.example](https://github.com/elie222/rakazo/blob/main/.env.example) and
the [self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
with the values \`docker\`, \`e2b\`, \`daytona\`, \`box\`, and \`desktop\`. There is a
sixth, \`fake\`, which the guide describes as an emulator for verification and
tells you to keep for tests only.

The factory that turns that string into a provider accepts three more, and
prints all nine in its error when you get the value wrong: \`docker\`, \`e2b\`,
\`daytona\`, \`box\`, \`e2b-emulator\`, \`daytona-emulator\`, \`box-emulator\`,
\`desktop\`, and \`fake\`
([sandbox-factory.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/sandbox-factory.ts)).
The three emulators reproduce a vendor's behaviour offline, including the Box
single-screen constraint, so tests can cover provider quirks without a vendor
account. Note that the shared contract's own \`SandboxKind\` enum lists only the
six real ones
([ids.ts](https://github.com/elie222/rakazo/blob/main/packages/contracts/src/ids.ts)),
which is the honest way to read the split: six things you run, three things you
test against.

| Provider | Where the bot computer runs | Documented as | Multi-screen |
| --- | --- | --- | --- |
| \`docker\` | Sibling containers on your own host | Default for local use, quickest self-hosted setup | Yes, extra displays in one container |
| \`e2b\` | E2B cloud desktops | Recommended for public or multi-user production | Yes, extra displays in the sandbox |
| \`daytona\` | Daytona sandboxes | Same remote-computer contract | Yes |
| \`box\` | Box by ASCII managed Linux desktop | One shared desktop per machine | No, adapter reports false |
| \`desktop\` | The API and worker host itself | Explicit provider, do not enable on a shared service | Host dependent |
| \`fake\` | Nowhere real | Emulator for verification only | Emulated |

## Choose the provider from three facts about your deployment

Most of this decision collapses once you answer three questions: who else can
reach the host, whether the work needs files that exist only on your machine,
and whether you will carry a vendor dependency.

| If this is true | Provider | Why | What it costs you |
| --- | --- | --- | --- |
| One machine, one person, nothing else valuable on it | \`docker\` | Documented default, quickest setup, every part inspectable | A container escape reaches your host |
| Anything public or multi-user | \`e2b\` | The guide's own recommendation, and the production Compose file uses it | A vendor account, a vendor bill, a vendor outage |
| You want a remote computer but not E2B | \`daytona\` | Same remote-computer contract, different vendor | Same class of dependency |
| You want a managed desktop and run one graphical bot at a time | \`box\` | Managed Linux desktop, two-hour TTL refreshed while active | One desktop stream per machine |
| The work genuinely needs your local files or a locally installed app | \`desktop\` | The only option that can touch them | The bot's mistakes and yours have the same consequences |
| You are writing tests | \`fake\` or an emulator | Deterministic, no vendor, no model | Proves nothing about production |

Two sizing facts belong in that decision because they change the bill. The
self-hosting guide states that a Hetzner CX22 with 2 vCPU and 4 GB is enough
for the API, worker, and Postgres when E2B owns the desktops, that 2 GB works
for a quiet box, and that 8 GB is only needed if you also run Docker computers
on that same machine
([self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)).
Running the computers yourself is not free; it moves cost from a vendor invoice
to a bigger host.

## Inspect the Docker computer, because every part of it is readable

The default is the easiest one to reason about because you can inspect every
part of it.

A bot computer is a container built from
[infra/sandboxes/computer](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/Dockerfile):
Debian bookworm-slim with Xvfb, x11vnc, fluxbox, xterm, xdotool, ImageMagick,
noVNC, websockify, and Chromium. It runs with \`DISPLAY\` set and a home
directory that Rakazo bind-mounts from its own data directory, so the bot's
files live on your disk rather than inside a disposable container layer.

The container spec answers questions people usually guess at
([computer-spec.ts](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/supervisor/src/computer-spec.ts)).
Containers are named \`rakazo-bot-<bot id>\` and labelled \`rakazo.managed\`,
\`rakazo.botId\`, and \`rakazo.workspaceId\`. Shared memory is 256 MB, which is
what keeps Chromium upright. The Team Computer screen limit is eight, screens
number from display \`:1\`, and each screen's view and control ports follow
\`6080 + 2i\` and \`6081 + 2i\`, every one bound to \`127.0.0.1\` on an ephemeral
host port rather than published broadly. The virtual display is 1280x800
([start.sh](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/start.sh)),
which is the frame size your model reasons about.

Two details matter most for isolation. The supervisor, not the API, owns the
Docker socket. The self-hosting guide is direct about why: access to the
supervisor is equivalent to control of the Docker host, so it stays unpublished
on the internal Compose network and the API process never gets an unrestricted
socket
([Compose file](https://github.com/elie222/rakazo/blob/main/infra/compose/docker-compose.yml)).
By default the supervisor authenticates with \`BETTER_AUTH_SECRET\` as a shared
service credential, and the guide notes that advanced deployments can set an
independent \`SANDBOX_SUPERVISOR_TOKEN\` on the API, worker, and supervisor
instead. If your threat model includes anyone who can read that one secret, use
the separate token.

The honest limitation: a container on your host is a container on your host. It
is a real boundary against a confused bot and a weaker one against a determined
attacker who finds a container escape. If the bot is going to handle untrusted
web content on a machine that also holds something valuable, that is the risk
you are accepting.

## Moving the computer off your host moves the blast radius with it

A browser that gets fed a malicious page is then running in a vendor's
disposable machine rather than next to your Postgres container. This is why the
guide names E2B as the recommended choice for public or multi-user production
deployments, and notes that the production Compose file uses it so the VM never
exposes a Docker supervisor or browser containers at all.

E2B is the first cloud implementation and uses the E2B desktop SDK directly for
provisioning, screenshots, input, shell, and files. Its portable workspace
lives at \`/home/user/rakazo-home\`, with browser profiles rooted under
\`.browser-profiles\` inside it. On a Team Computer the first bot uses the
vendor's primary desktop stream and additional bots get their own display and
ports spawned inside the same sandbox.

Daytona provides the same remote-computer contract through Daytona sandboxes,
configured with an API key and optional API URL and target. Its section of the
runtime doc carries the fact that matters for all three remote backends: the
stored \`providerRef\` is "an acceleration path, not durable data", it is only
ever handed back to the same provider kind, and a missing machine or a changed
provider creates a replacement restored through the provider-neutral contract.
Switching \`SANDBOX_PROVIDER\` is a supported operation, not a migration.

Box by ASCII is the most distinctive of the three. Rakazo always creates or
resumes boxes with \`noEnv: true\`, which the doc says is required when a third
party supplies the API key, and refreshes a two-hour lifetime while the
computer is active. Stopping a Box archives the machine and resuming reconnects
the same opaque box id. The provider's authenticated noVNC page is kept behind
Rakazo's encrypted screen capability proxy, which "keeps the Box desktop secret
out of browser-visible URLs". It exposes one desktop per machine, so concurrent
Team bots can still use shell and file tools while only one uses graphical
tools; the adapter reports no multi-screen support rather than pretending
otherwise.

There is a real tradeoff here and it is not security. A remote sandbox means a
third-party account, a third-party bill, and a dependency that can have an
outage on a morning when your routine was supposed to run.

## Treat the desktop provider as the sharp edge it is

\`SANDBOX_PROVIDER=desktop\` runs commands on the API and worker host as you.
The Electron app surfaces this on first launch as a choice between Docker and
"This Mac", and asks the deployment owner once.

The guide's warning deserves quoting rather than paraphrasing: do not enable it
on a public or shared service, and "macOS does not show its own permission
dialog for this"
([self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)).
There is no operating system prompt standing between a bot and your home
directory. If you pick this, you have decided that the bot's
mistakes and your own have the same consequences.

The code puts a number on how far that reaches. When the run path builds the
desktop provider, it passes your home directory as an allowed root
([host-aware-sandbox.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/host-aware-sandbox.ts)),
and the desktop provider refuses paths outside those roots with the message
"path is outside this computer's home". So the file tools are bounded, and the
bound is your entire home folder. Read that as a guard against a stray absolute
path, not as a jail: a shell command is still an ordinary process on your Mac,
and its working directory is not a confinement.

There is a narrow case where it is the right answer: a single-user machine,
work that genuinely needs your local files or a locally installed application,
and a bot whose boundary you have written and tested. It is never the right
answer on a box other people can reach.

## Switch any bot that signs into an account to a Private Computer

Backend choice is only half the isolation question. The other half is scope,
and this is where the default surprises people.

Each workspace gets one Team Computer by default, and bots share its browser
sessions and installed tools. Each Team bot starts in its own folder,
\`bots/<bot id>/\`, with deliberately shared work belonging in \`shared/\`, but
the documentation removes any ambiguity about what those folders mean: they
"organize work but are not security boundaries: every Team bot can access the
full Team workspace". Concurrency is handled with a fenced per-bot lease so two
Team bots can work on distinct screens, one bot still runs only one
computer-use task on its own screen, and when a provider cannot allocate
another display the graphical tools fail explicitly with
\`MULTI_SCREEN_UNAVAILABLE\` rather than queueing, while shell and file tools
keep working.

A Private Computer gives a bot a workspace that is entirely its own. That is
the setting to reach for the moment a bot handles credentials you would not
hand to every other bot in the workspace.

The rule of thumb that has held up: Team Computer for bots that read public
things and write into a shared workspace, Private Computer for anything that
signs into an account. A [Competitor Pricing Watch](/bots/competitor-pricing-watch)
that only reads public pages is a fine Team citizen. A bot with a mail session
is not.

## Trace where credentials actually live in each option

| Option | Browser sessions live | Blast radius of one compromised bot |
| --- | --- | --- |
| Docker, Team | Bind-mounted workspace on your host | Every Team bot's sessions and files |
| Docker, Private | That bot's own workspace on your host | That bot only, plus the container boundary |
| E2B or Daytona, Private | Vendor sandbox, checkpointed to your data dir | That bot, off your host |
| Box | Vendor machine, one desktop | That bot, single graphical stream |
| Desktop provider | Your user account on the host | Your machine |

One specific fills in what "browser sessions live" means on the Docker path.
The browser wrapper launches Chromium with its user data directory set to
\`.browser-profiles/chromium\` inside the bot's workspace, and with
\`--password-store=basic\`
([rakazo-browser](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/rakazo-browser)).
A signed-in session is therefore a directory of files on your disk, inside the
folder Rakazo bind-mounts, with no operating system keyring behind it. That is
the correct design for a portable workspace and also the thing to protect:
whoever can read that directory can resume that session.

Connector credentials are handled separately from browser sessions: they are
encrypted on the server and never returned by the API
([README](https://github.com/elie222/rakazo/blob/main/README.md)), and the
noVNC route uses short-lived signed capabilities, with the guide warning
against replacing it with an unrestricted port proxy.

## Back up the workspace, because the machine is the disposable part

The durable thing is the workspace, not the machine. Rakazo checkpoints the
portable workspace into its own store at run completion or failure, before an
explicit stop, and before idle suspension, and a new or replacement machine
imports the latest stored copy before use. Remote backends quiesce desktop
browsers before export so profile databases and login state copy consistently
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).

Three consequences worth writing down.

Your data directory is the real backup target. The doc says production
deployments must put it on a Rakazo-owned persistent volume, encrypt it at
rest, and include it in off-host backups, and notes that the current store
keeps only the latest workspace rather than an immutable revision archive. That
last clause is the one to plan around: latest-only means a workspace corrupted
by a bad run is checkpointed over the good copy at the end of that run.

System packages do not travel. The disposable OS image is not a portable disk
snapshot, so anything installed outside the workspace is lost when you move
providers. Durable customization belongs in a reproducible image or a setup
recipe.

Idle is not free. Computers pause after the idle timeout, which defaults to ten
minutes, and resume on the next message or when you take control. Taking
control is worth understanding precisely: it changes whether the embedded
viewer accepts your input, and it does not create an exclusive machine lock or
pause a run that is already going.

## Verify the provider you configured is the provider that ran

This is the check that catches the mistake nobody expects, and it takes about
two minutes.

Start with the setting that overrides the setting. The run path computes the
sandbox kind from both the environment and a stored deployment setting: if
\`SANDBOX_PROVIDER\` is \`docker\` and the deployment's computer host is
\`this-mac\`, the run uses the desktop provider instead
([host-aware-sandbox.ts](https://github.com/elie222/rakazo/blob/main/packages/adapters/src/host-aware-sandbox.ts)).
That setting lives in the deployment settings row in Postgres and is chosen
once through the Electron app. Your \`.env\` can therefore say \`docker\` while
your bots are running commands on your Mac as you, and nothing in the file
tells you so. Check the setting, not only the variable.

Then confirm the containers exist and are what you think they are. Every
managed computer carries labels, so this lists exactly the bot containers:

\`\`\`bash
# Bot computers the supervisor is managing right now.
docker ps --filter label=rakazo.managed=true \\
  --format 'table {{.Names}}\\t{{.Image}}\\t{{.Status}}'

# Where one bot's files actually land on your disk.
docker inspect rakazo-bot-<bot id> --format '{{json .HostConfig.Binds}}'
\`\`\`

Finally, prove the Team and Private split on disk. Workspaces are stored under
\`DATA_DIR/homes/\` keyed by the computer's home key, and that key is
\`team-<workspace id>\` for a Team Computer and the bot's own id for a dedicated
one
([computers.ts](https://github.com/elie222/rakazo/blob/main/packages/db/src/computers.ts)).
A directory listing is therefore a direct answer to "does this bot really have
its own workspace". If you moved a bot to a Private Computer and no directory
named after that bot appears after its next run, the move did not take effect.

This check can fail, which is the point. Run it after any provider change and
after any Electron first-launch prompt somebody else answered.

## Seven sandbox failures and what each one is telling you

| Symptom | Cause | Fix |
| --- | --- | --- |
| Startup error naming a missing key, e.g. "E2B_API_KEY is required for the e2b sandbox provider" | Provider selected without its credential | Set the matching key, or change \`SANDBOX_PROVIDER\` |
| Error listing nine valid values | \`SANDBOX_PROVIDER\` misspelled | Use one of the nine exactly; the emulators are test-only |
| Computer pane hangs on boot, sandbox logs show \`bash\\r\` | Windows checkout with \`core.autocrlf=true\` | Set \`core.autocrlf false\`, renormalize the worktree, rebuild the image |
| Graphical tools fail with \`MULTI_SCREEN_UNAVAILABLE\` while shell still works | Backend cannot allocate another display, or the eight-screen Team limit is reached | Move that bot to a Private Computer, or use a multi-screen backend |
| Shell step dies at five minutes | \`SANDBOX_COMMAND_TIMEOUT_MS\` default of 300000 | Split the command, or raise the value deliberately |
| Command refuses with "path is outside this computer's home" | Desktop provider path guard | Work inside the computer home or the configured host root |
| Bot loses an installed package after a provider change | System packages live outside the portable workspace | Put the install in a reproducible image or a setup recipe |

The third row wastes the most time. A carriage return in a shebang produces a
container that starts and then does nothing, which reads as an infrastructure
problem and is a checkout problem.

## Where the sandbox stops being a boundary at all

Three details in the Docker image change how much protection you should assume.
None of them is a flaw, and all of them are worth knowing before you decide the
container is enough.

The container does not drop privileges. The computer image sets no \`USER\`, so
the processes inside it run as root in the container
([Dockerfile](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/Dockerfile)).
Root in a container is not root on your host, but it removes one layer you may
have assumed was there. It is also a clean contrast with the hosted product,
whose documentation describes a managed Linux VM on which the Bot runs as a
non-root user
([teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)).

Chromium runs with its own sandbox disabled. The browser wrapper passes
\`--no-sandbox\`, which is ordinary practice for headless Chromium in a
container and means the container is the only boundary around a hostile page,
not the second one. That is precisely why the choice of backend matters: on
\`docker\` that single boundary sits on your host, and on \`e2b\` it sits in a
vendor's disposable machine.

The network is open by default. Containers are created with Docker's standard
bridge networking, so a bot computer can reach whatever your host can reach,
including anything else on your local network. If you keep an internal service
on the same network as your Rakazo host, the bot can reach it.

The practical reading: the sandbox limits what a mistake damages, and the
boundary in the charter limits what a mistake attempts. You need both.

## The shared computer is a default here and a fixture there

Set this against the documented behaviour of the hosted alternative, because it
is the strongest argument in the whole comparison and it is entirely sourced.

On Grok Bot, all bots on an account share one persistent cloud computer
([FAQ](https://docs.x.ai/grok-bot/faq)). The computer is assigned to the user
account rather than an individual bot, and browser cookies, signed-in sessions,
files, and command-line credentials are shared across bots
([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)). The
documentation states that "the screens are separate work surfaces, not separate
security boundaries" and, on the security page, "do not use separate Bots as a
security boundary"
([approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)).
Deleting a bot does not remove shared-computer files or browser sessions. We
went through the full picture in
[what Grok Bot actually isolates](/blog/grok-bot-shared-computer-security).

That is a coherent design for a convenience product, and Rakazo's own default
has the same shape. The difference is that on Rakazo the shared computer is a
default you can leave: a Private Computer per sensitive bot, on a backend you
chose, on infrastructure you already secure. On the hosted product there is one
computer per account and no lever.

Be precise about what that difference is worth. Self-hosting is not inherently
safer: a Team Computer full of signed-in sessions on your laptop is not safer
than a managed VM. The difference is that the fix exists and costs one setting,
so the shared default becomes a choice rather than a constraint.

## The objection: one laptop, one person, and none of this matters

The strongest argument against this page is that it is over-engineered for the
usual case. One founder, one MacBook, four bots that read public pages and
write files. Docker is the default, the default is fine, and every paragraph
above is ceremony.

That objection is largely right, and it stays right until one of three things
happens. A bot signs into an account, at which point a Team Computer means
every other bot inherits that session. A second person gets access to the
deployment, at which point the desktop provider stops being a private decision.
Or a bot starts reading pages you did not choose, at which point the difference
between a container on your host and a machine somewhere else is the whole
question.

Each is a specific event with a date rather than a gradual slide, which makes
this easy to defer honestly. Run Docker with a Team Computer today, write down
the three events, and move the moment one happens, using the verification
section above to prove the move landed.

## Pick for blast radius, then still write the boundary

The sandbox is a container for damage, not a replacement for a boundary. Pick
the backend for the blast radius, then still write the line the bot never
crosses, which is what every listing on botskills.sh has to declare. A
[Codebase Hardening Auditor](/bots/codebase-hardening-auditor) works only in the
repository and never touches production. A
[Flight Check-In](/bots/flight-check-in) stops for a human at every 2FA or
captcha instead of trying to get past one.

\`\`\`text
# .env, sandbox section. Local single-user default.
SANDBOX_PROVIDER=docker
SANDBOX_SUPERVISOR_URL=http://127.0.0.1:7091
SANDBOX_IDLE_MS=600000
SANDBOX_COMMAND_TIMEOUT_MS=300000

# Public or multi-user deployment instead:
# SANDBOX_PROVIDER=e2b
# E2B_API_KEY=<your key, never in git>

---

Bot: Vendor Portal Watch
Computer: Private
Backend: e2b on the shared deployment, docker on my laptop

What you do
- Twice a week, open each vendor portal in the list.
- Screenshot the plan and usage page, note any change from last time.
- Write the diff into the thread with the screenshot attached.

Boundary
- You never change a plan, cancel, upgrade, or downgrade anything.
- You never enter payment details, and you never accept new terms.
- If a portal asks for 2FA, stop and hand it to me. Do not retry.

Why Private
- This bot holds signed-in vendor sessions. No other bot in the workspace
  should inherit them, and on a Team Computer every bot would.
\`\`\`

Copy the last block into every bot you configure this way. A sandbox choice you
cannot explain in two lines is one somebody quietly reverses in six weeks.

If you have not deployed yet, the provider choice is one of the last decisions
in [the self-hosting walkthrough](/blog/rakazo-self-hosting-guide), and the
model you point at these computers is the other one, covered in
[choosing a model for Rakazo](/blog/rakazo-model-choice).

**Keep reading:** [Migrating a Grok Bot Setup to Rakazo Without Rewriting It](/blog/migrate-grok-bot-to-rakazo), [Rakazo Permissions and Audit Logging, Explained](/blog/rakazo-permissions-audit), [Rakazo Routines](/blog/rakazo-routines).

## Frequently Asked Questions

### Which Rakazo sandbox provider should I use?

Use Docker for a single-user machine you control, because it is the documented
default, the quickest setup, and everything about it is inspectable. Use E2B
for anything public or multi-user, which is what the self-hosting guide
recommends, because bot computers then run away from the host holding your
database. Daytona and Box are alternatives with the same remote contract, with
Box limited to one desktop stream per machine. Keep the fake provider for tests
only. Avoid the desktop provider unless you are the only person who can reach
the machine.

### Does each Rakazo bot get its own computer?

Not by default. Each workspace gets one Team Computer, and its bots share
browser sessions and installed tools. The per-bot folders on that computer are
explicitly described as organizational rather than security boundaries, and any
Team bot can reach the full Team workspace. A Private Computer, where the whole
workspace belongs to one bot, is the option that actually isolates. Switch any
bot that signs into an account over to a Private Computer, and treat the Team
Computer as shared space in the same way you would treat a shared folder.

### What happens to a bot's logins if the sandbox is destroyed?

They survive, because the portable workspace rather than the machine is the
durable unit. Rakazo checkpoints the workspace, including browser profile
directories, at run completion or failure, before an explicit stop, and before
idle suspension, and a replacement machine imports the latest stored copy
before it runs. Remote backends quiesce desktop browsers first so profile
databases copy consistently. What does not survive is anything installed
outside the workspace, since the operating system image is not a portable disk
snapshot.

### Is running bots on my own Mac a reasonable option?

Only on a single-user machine, and only with a boundary you have tested. The
desktop provider runs commands on the API and worker host under your own
account, and the documentation warns not to enable it on a public or shared
service and notes that macOS shows no permission dialog of its own for this.
That means no operating system prompt stands between a bot and your files. It
is a legitimate choice when the work genuinely needs local files or a locally
installed application. It is the wrong choice on any machine other people can
reach.
`,
};

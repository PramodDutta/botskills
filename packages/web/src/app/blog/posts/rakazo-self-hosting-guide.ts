import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Self-Hosting Rakazo: The Complete Setup Walkthrough',
  description:
    'Self host Rakazo using the real commands from the repo: prerequisites, environment, Postgres, the sandbox image, first login, and the upkeep it commits you to.',
  date: '2026-08-25',
  category: 'Guide',
  content: `
# Self-Hosting Rakazo: The Complete Setup Walkthrough

The reason people bounce off self-hosted bot runtimes is not the install. It
is discovering, on day three, that the thing they installed is a service with
a database, a job queue, and a container host, and that nobody agreed to own
it.

So this walkthrough does two jobs. It gets you from empty directory to a
working bot using the commands that are actually in the repository, and it
tells you plainly what you have signed up for afterwards. Everything below was
read from [elie222/rakazo](https://github.com/elie222/rakazo) on 2026-08-25.
Rakazo is in beta and moves quickly, so treat the repo as the source of truth
and this page as the orientation.

## Know what you are actually deploying before you clone anything

Rakazo's own self-hosting guide leads with the honest framing: the signed-in
product is a long-running API, a Graphile Worker, Postgres, and a computer
provider, and "it is not a static site"
([self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)).

Those four, plus the web server that fronts them, all have to stay alive for a
scheduled bot to fire:

| Piece | What it does | Default port |
| --- | --- | --- |
| API | Serves the app, RPC, and health | 3100 |
| Worker | Runs bot turns and scheduled routines through Graphile | none |
| Postgres 16 | Threads, runs, routines, memory, usage records | 5433 on loopback |
| Sandbox supervisor | Owns the Docker socket and the bot computers | 7091 |
| Web | Vite preview of the app | 5173 |

Those port numbers come from
[.env.example](https://github.com/elie222/rakazo/blob/main/.env.example) and
the [Compose file](https://github.com/elie222/rakazo/blob/main/infra/compose/docker-compose.yml),
and the setup prompt tells you to check all four are free before you start
([SETUP_PROMPT.md](https://github.com/elie222/rakazo/blob/main/SETUP_PROMPT.md)).

## Settle four decisions before you type the first command

The install is mostly typing. The afternoon goes on four choices, all easier to
make now than after a bot has state.

| Decision | Options | What it actually costs you | Pick this unless you know better |
|---|---|---|---|
| Where the stack runs | Your laptop, one VPS, an existing internal host | A laptop stops firing routines when it sleeps; a VPS is a machine you now patch | Laptop to evaluate, one small VPS the moment a routine matters |
| Where bot computers run | Docker on the same host, E2B, Daytona, Box, or the API host itself | Docker on the host means the graphical desktop competes with your database for RAM | Docker to evaluate, E2B for anything public or multi-user |
| How much machine | 2 GB for a quiet box, 4 GB for API plus worker plus Postgres, 8 GB if Docker computers share it | Guessing here means migrating a running deployment two months later | Follow the repo: a 2 vCPU and 4 GB VM with E2B owning the desktops |
| Who can register | Open signups, or \`SIGNUP_ALLOWLIST\` | The first registered user becomes the deployment owner | Allowlist on, register yourself first, open it later if ever |

Those sizes are the repo's own numbers: the
[self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
names a Hetzner CX22 at 2 vCPU and 4 GB as enough for API, worker and Postgres
when E2B owns the desktops, and puts 8 GB only on a machine that also runs
Docker computers.

The provider choice deserves one extra beat, because it is the one people revisit
angrily. The guide calls Docker the default for local use and E2B the
recommended choice for public or multi-user production, and it is direct about
the option that looks convenient: a desktop provider running commands on the API
host as you is documented as something not to enable on a public or shared
service, with the note that macOS shows no permission dialog of its own for it.
Choose once, deliberately, and write down why. The longer version of that
decision lives in [Rakazo sandbox options](/blog/rakazo-sandbox-options).

## Match Node and pnpm to the manifest, not to your habit

The README asks for Node.js 22 or newer, pnpm 9, and Docker Desktop. Two of
those need a caveat.

The package manifest pins \`packageManager\` to pnpm 9.15.0
([package.json](https://github.com/elie222/rakazo/blob/main/package.json)), and
the repository's own setup prompt is explicit about why that matters: do not
silently use pnpm 10 or 11, because newer versions "can reject this lockfile
or rewrite it". Use Corepack, or run repo commands through
\`npx --yes pnpm@9.15.0\` rather than installing a different global pnpm.

The same manifest declares an engines range of \`^22.22.2 || ^24.15.0 ||
>=26.0.0\`, so a stale Node 22.11 will be rejected even though it looks like
"Node 22". Check the effective versions before you blame the install.

## Clone and configure the environment

The quick start is four lines, and they are the same four in the README and in
[CONTRIBUTING.md](https://github.com/elie222/rakazo/blob/main/CONTRIBUTING.md):

\`\`\`bash
git clone https://github.com/elie222/rakazo.git
cd rakazo
cp .env.example .env
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
\`\`\`

Run that last line twice. You need two independent random values, one for
\`BETTER_AUTH_SECRET\` and one for \`ENCRYPTION_KEY\`, and the guide is specific
that they must be independent rather than the same string pasted twice. Do not
reuse a value you have used anywhere else, do not commit \`.env\`, and do not
paste either value into a chat window, an issue, or a log line.

Rakazo will not let you skip this quietly. The self-hosting guide states that
it "refuses placeholder or missing secrets" outside development and test
environments, so a production boot with the shipped example values fails
rather than starting up insecure.

## Learn what the rest of the environment file controls

You do not need most of \`.env.example\` to get running. Here is what each group
is for, at the level of what it controls rather than what to put in it.

| Group | Variables | Why it exists |
| --- | --- | --- |
| Identity and crypto | \`BETTER_AUTH_SECRET\`, \`ENCRYPTION_KEY\` | Session signing and encryption of stored connector secrets |
| Origins | \`BETTER_AUTH_URL\`, \`WEB_ORIGIN\`, \`API_URL\` | Cookies and CORS follow these exactly |
| Datastore | \`DATABASE_URL\`, \`DATA_DIR\` | Postgres, plus the directory holding bot homes and browser profiles |
| Compute | \`SANDBOX_PROVIDER\`, \`SANDBOX_SUPERVISOR_URL\`, \`SANDBOX_IDLE_MS\` | Where bot computers run and when they pause |
| Provider keys | \`E2B_API_KEY\`, \`DAYTONA_API_KEY\`, \`BOX_API_KEY\` | Only the one matching your chosen provider |
| Model | \`OPENROUTER_API_KEY\`, \`PI_DEFAULT_PROVIDER\`, \`PI_DEFAULT_MODEL\` | A deployment-wide model, or leave blank and connect per user |
| Integrations | \`COMPOSIO_API_KEY\`, \`PIPEDREAM_CLIENT_ID\` and friends | Optional managed app catalogs |
| Access control | \`SIGNUPS_ENABLED\`, \`SIGNUP_ALLOWLIST\` | Who can register on this deployment |

Two defaults are worth knowing because they show up as behaviour rather than
config. \`SANDBOX_IDLE_MS\` defaults to 600000, so a bot computer pauses after
ten idle minutes and resumes on the next message. \`SANDBOX_COMMAND_TIMEOUT_MS\`
defaults to 300000, so a shell command is killed after five minutes. Both are
in \`.env.example\` with those values.

## Bring up Postgres and build the computer image

\`\`\`bash
docker compose --env-file .env -f infra/compose/docker-compose.yml up postgres -d
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm sandbox:build
pnpm dev
\`\`\`

\`pnpm sandbox:build\` is the step that surprises people. It resolves to
\`docker build -t rakazo/computer:local infra/sandboxes/computer\`, and that
image installs a graphical Linux desktop: Xvfb, x11vnc, fluxbox, xdotool,
ImageMagick, noVNC, and Chromium on Debian bookworm-slim
([Dockerfile](https://github.com/elie222/rakazo/blob/main/infra/sandboxes/computer/Dockerfile)).
The setup prompt warns it "may take several minutes" on first run. It is not
hung.

## Check the health endpoint before you open the browser

With \`pnpm dev\` running, check the API before you touch the UI:

\`\`\`bash
curl -s http://127.0.0.1:3100/health
\`\`\`

The repo tells you exactly what a healthy local stack reports: \`ok: true\`,
runtime \`pi\`, sandbox \`docker\`, jobs \`graphile\`, and realtime \`postgres\`.
\`revision\` stays null unless you set \`GIT_SHA\`, and the Composio and Pipedream
flags are true only when you configured those credentials.

Then open http://127.0.0.1:5173 and register. The first registered user becomes
the deployment owner, so do that yourself before you send the URL to anyone.
Connect a model, create a bot, and open the computer pane to confirm the Docker
computer reaches running and renders its desktop.

If you would rather not drive this by hand, the repository ships
[SETUP_PROMPT.md](https://github.com/elie222/rakazo/blob/main/SETUP_PROMPT.md),
a prompt you paste into a coding agent. It is worth reading even if you install
manually, because it encodes the safety rules the maintainers care about:
never overwrite an existing \`.env\`, never print secrets, never kill unrelated
containers to free a port.

## Prove the install works with three checks that can fail

A green health endpoint means the processes started. It does not mean the thing
you installed does its job, and that gap is where people declare victory early.
Three checks close it, and each is allowed to fail.

The computer boots and answers. Open a bot's computer pane, wait for it to reach
running, and ask for something that needs the sandbox: a directory listing, or a
page loaded in the browser. This catches an image that built but will not start,
which on Windows shows up as the CRLF hang below.

A routine fires while nobody is watching. Schedule one for fifteen minutes out
and leave it alone. This is the only check that exercises the worker and the job
queue together, and it is the failure people find three weeks late, because a
routine that never fires produces no error anywhere.

The stack survives a restart. Reboot the host, or close the terminal running
\`pnpm dev\`, and see what is still alive. A development install is a foreground
process that dies with your shell, while the Compose services are declared to
restart unless stopped. If you plan to rely on schedules, this check is the
difference between a demo and a deployment.

Write down what each returned the first time. Six weeks later a baseline is how
you tell "it was always like that" from "something changed".

## Recognise the failures that eat the first afternoon

Almost every stalled install is one of these.

| What you see | What it actually is | What to do |
|---|---|---|
| The database is empty and yesterday's bots are gone | \`pnpm compose:down\` resolves to \`down -v\`, which removes the Compose volumes | Stop with a command that has no \`-v\`. Keep \`compose:down\` for a deliberate reset |
| A lockfile error, or an install that fails without naming a version | pnpm 10 or 11 against a lockfile pinned to 9.15.0, or a Node 22 build below 22.22.2 | Use Corepack, or run repo commands through \`npx --yes pnpm@9.15.0\` |
| The computer pane hangs at boot, and the sandbox log mentions \`bash\\r\` | A Windows clone made with \`core.autocrlf=true\` | Set \`core.autocrlf false\`, renormalise the checkout, rebuild the sandbox image |
| A service will not bind | Something else holds 5433, 3100, 5173 or 7091 | Change the port in \`.env\`. Do not kill the other process to win the argument |
| Health is green and the first message fails | No model connected | Connect a model. The stack being healthy is not the same as usable |
| On Docker Desktop, the updater reports no checkout at all | \`RAKAZO_DEPLOY_DIR\` was set to a path the daemon cannot see | Use the path the daemon sees. On Windows that is under \`/run/desktop/mnt/host/c\` |

Five of them deserve more than a row.

The destructive stop. \`pnpm compose:down\` resolves to a Compose \`down -v\`
([package.json](https://github.com/elie222/rakazo/blob/main/package.json)), and
that \`-v\` removes the Compose volumes, which means your Postgres data. The
setup prompt calls this out and tells you to use a stop or down command
without \`-v\` for a normal shutdown
([SETUP_PROMPT.md](https://github.com/elie222/rakazo/blob/main/SETUP_PROMPT.md)).
Learn this before you learn it the hard way.

Bad Node or pnpm. Covered above, and it presents as a lockfile error or a
cryptic install failure rather than a version message.

CRLF on Windows. An older clone with \`core.autocrlf=true\` leaves the computer
pane hung at boot with \`bash\\r\` in the sandbox logs. The fix in
[the guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md) is
\`git config core.autocrlf false\`, then \`git add --renormalize . && git checkout
-- .\`, then rebuild the sandbox image.

Port collisions. 5433, 3100, 5173, and 7091. Resolve them by configuration,
not by killing whatever else is on the port.

No model connected. The stack will be perfectly healthy and the first message
will still fail. The setup prompt is explicit that a deployment with model
setup deferred should not be called usable. Pick your model deliberately
rather than by default, which is the subject of
[choosing a model for Rakazo](/blog/rakazo-model-choice).

## Publish one service, and keep every other one unreachable

The local defaults are safe because nothing is reachable. That stops being
true the moment you put this on a VPS, and three things need attention.

Postgres is published on loopback only at \`127.0.0.1:5433\`. The
[self-hosting guide](https://github.com/elie222/rakazo/blob/main/docs/self-host.md)
says directly: do not expose that port on a public VPS, change
\`POSTGRES_PASSWORD\`, and keep Postgres on an internal network.

The Docker supervisor is deliberately not published, because access to it "is
equivalent to control of the Docker host". Leave it on the internal Compose
network where the shipped file puts it.

Origins and signups. Put TLS in front of the web port and set
\`BETTER_AUTH_URL\`, \`WEB_ORIGIN\`, and \`API_URL\` to your public HTTPS origin,
because cookies and CORS follow those values. Then keep \`SIGNUP_ALLOWLIST\`
tight while the service is private.

For a real public deployment the repo ships
\`infra/compose/docker-compose.prod.yml\`, which runs Caddy for automatic HTTPS
and uses E2B for bot computers so the VM never exposes a Docker supervisor or
browser containers at all. There is also an idempotent Ubuntu hardening script,
\`sudo DEPLOY_USER=deploy bash infra/compose/harden-host.sh\`, which disables SSH
passwords and root login, configures UFW and fail2ban, and enables unattended
security updates. Its own warning is the important part: keep the provider
console open until a fresh SSH login succeeds after the script reloads SSH.

One first-deploy trap is documented in bold in the guide. \`RAKAZO_IMAGE_TAG\`
ships as \`local\`, a tag no registry serves, so you build the images rather than
pulling them. Running a pull first fails outright with a registry denial, and
the guide notes that earlier versions of that page told people to do exactly
that.

Read the production Compose file as a map of your exposed surface. One service
publishes host ports, everything else is reachable only from a Docker network,
and the database network is marked internal.

| Service | Published on the host | Reachable from |
|---|---|---|
| Caddy | 80 and 443, TCP and UDP | The internet. This is the whole front door |
| Web | Nothing | Caddy, over the edge and app networks |
| API and worker | Nothing | The app and data networks, with all Linux capabilities dropped |
| Postgres | Nothing | The data network only, which is declared internal |
| Updater | Nothing | A dedicated control network shared with the API, behind a bearer token |

Treat that as a checklist: if your deployment publishes anything beyond 80 and
443, either you added it or a tutorial did.

## Take a backup you have actually restored once

This is the part to read before you decide, not after.

Backups are yours. The repo provides \`./scripts/backup.sh\`, which dumps
Postgres and archives \`data/\` into a timestamped folder, and
\`./scripts/restore.sh backups/<stamp>\` to reverse it. \`DATA_DIR\` matters more
than it looks: the computer runtime doc says production deployments must put it
on a Rakazo-owned persistent volume, encrypt it at rest, and include it in
off-host backups, and notes that the current store keeps only the latest
workspace rather than an immutable revision archive
([computer runtime](https://github.com/elie222/rakazo/blob/main/docs/computer-runtime.md)).

Read the local script before you trust it. If the \`data\` directory is not where
it expects, the home archive step falls back to creating an archive from an
empty file list, so the command still prints a success line and writes a
\`homes.tgz\` with nothing in it. A backup that succeeds and contains no bot homes
is the worst kind, because you will not find out until a restore.

The production script is a better animal, worth reading even if you only run the
local one. \`infra/compose/backup-prod.sh\` takes a custom-format dump, tars the
API container's data directory, then verifies both by listing the dump with
\`pg_restore --list\` and the archive with \`tar -tzf\` before writing
\`SHA256SUMS\`, tightening permissions, and pruning snapshots older than seven
days. A shipped systemd service and timer run it nightly at 02:15 UTC with a
randomised delay
([infra/systemd](https://github.com/elie222/rakazo/tree/main/infra/systemd)).

Two things it does not do are now your job. It writes to a directory on the same
machine, so a host failure takes the snapshots with it. And verifying that a dump
is readable is not the same as verifying that a restore produces a working
deployment. Do the real restore once, into a scratch database, before you need
it.

## Understand what an upgrade can and cannot undo

Upgrades are a command, not an automatic thing. On a source checkout you pull,
rebuild with \`GIT_SHA=$(git rev-parse HEAD)\`, run the database migration, and
restart the API and worker. On Compose you rebuild or move the image tag. The
API runs \`prisma migrate deploy\` before it serves, so a failed migration keeps
health red rather than half-starting, and a failed recreate does not roll back
on its own.

Production Compose deployments can add an updater sidecar, which exists for one
structural reason: the API cannot update itself, because its image has no
checkout and nothing inside the container would restart it. The sidecar sits on
the private control network, publishes no host port, requires a bearer token on
every route except health, and holds the Docker socket, which the guide notes is
root-equivalent on the host. The guide says plainly that you can drop the
service if you would rather not hand a container that capability.

Learn the rollback behaviour before you need it. Rollback redeploys the
previously cached image from the local Docker daemon and never contacts the
registry, which is deliberate and which means it fails closed if you pruned that
image. Leave the previous application image alone until the current update has
proved itself. Then the sentence that decides your upgrade discipline: database
migrations are not reversed. Rolling back the image does not roll back the
schema, so an upgrade is only as reversible as your backup.

## Price the upkeep before you commit to it

Security is a subscription you pay in attention. Rakazo's policy supports
security fixes on the current main branch and the latest beta release, with no
bug bounty, and explicitly puts operator misconfiguration out of scope
([SECURITY.md](https://github.com/elie222/rakazo/blob/main/SECURITY.md)). That
is a reasonable position for a beta project. It also means the exposed surface
is your responsibility.

As a standing commitment rather than a feeling, the job looks like this.

| Task | How often | What it costs if you skip it |
|---|---|---|
| Apply upstream updates | Monthly at minimum | Fixes land only on current main and the latest beta, so an old deployment drifts out of support rather than staying still |
| Verify a backup by restoring it | Quarterly | You discover the empty archive or the missing volume during the incident |
| Copy snapshots off the host | Every backup | A host failure takes the snapshots with it, because both scripts write locally |
| Check that routines still fire | Weekly | A stopped worker is silent. Nothing outside your own monitoring reports it |
| Reread the approval rules list | Monthly | One "always allow this tool" click quietly outranks a category rule you set months ago |
| Rotate and re-check secrets | On staff change | Connector credentials sit encrypted in a database whose backups you now hold |

None of that is exotic. It is the ordinary operating cost of an internal service,
worth pricing up front because a bot runtime is easy to install on a Tuesday and
easy to forget by the next month.

## The honest case for not running this yourself

The strongest argument against this walkthrough is that you take on a service to
gain a database you will rarely open. The hosted route costs a subscription and
no attention. This one costs an afternoon and then a standing share of your
month, and its failure mode is undramatic: a worker that stopped in March and
routines nobody noticed had gone quiet.

That argument wins more often than self-hosting advocates admit. One person,
three bots, no appetite for being an operator: take the hosted product.

Four situations flip it, and they are specific rather than ideological. Your bots
need to reach something a hosted runtime cannot see, such as a database behind
your own network. You need the record, because an audit trail you can query is a
self-hosting property and the Grok Bot documentation still says an audit view of
Bot actions
[does not exist yet](https://docs.x.ai/grok-bot/teams-and-enterprises). You have
a residency or contractual constraint that makes "where does this run" someone
else's question to ask you. Or your desktops are Linux, which the hosted product
does not support: its FAQ lists macOS, Windows and iPhone on iOS 18 and later,
and the docs answer the Linux desktop question with a flat no.

Price the alternative honestly while you decide. As of 21 August 2026 the
cheapest paid route to Grok Bot is Cursor Pro+ at 60 dollars a month, with Cursor
Ultra, the Cursor Teams plans and SuperGrok Plus at 100 dollars a month also
carrying access, while Cursor's free and 20 dollar tiers do not. A small VM plus
your own model spend is not obviously cheaper for one person, and is often
clearly cheaper for a team. The full comparison is in
[Rakazo versus Grok Bot](/blog/rakazo-vs-grok-bot).

## The boundary to set before the first real job

A fresh Rakazo install does not ask before acting. The action-confirmation
settings say so in the UI copy: "Bots act without asking by default. Add an
exception only when you want to review a type of action first"
([ApprovalRulesSettings.tsx](https://github.com/elie222/rakazo/blob/main/apps/web/src/components/ApprovalRulesSettings.tsx)).
Under that, only \`destination.write\`, \`delete_bot\`, and \`archive_bot\` always
require approval, while \`shell\`, \`computer_act\`, and \`write_file\` are exempt
([action-approval.ts](https://github.com/elie222/rakazo/blob/main/packages/core/src/action-approval.ts)).

So before the first bot does anything real, click both presets, "Ask before
sending external email" and "Ask before purchases", and write the boundary into
the charter as well. Every listing on botskills.sh declares one, because the
line is what makes a bot safe to leave running.
[Standup Scribe](/bots/standup-scribe) posts only to your own DM, never a
shared channel. [PR Review Sentinel](/bots/pr-review-sentinel) never merges,
approves, or pushes. Here is a first bot worth using to shake down a fresh
install:

\`\`\`text
Bot: Deploy Watch
Computer: Private
Model: your cheap default

What you do
- Every weekday at 09:00, open the deploy dashboard and the error tracker.
- Note failed deploys since yesterday and any new error signature.
- Write a five line summary into the thread.

Boundary
- You never re-run, roll back, or trigger a deploy. Reporting only.
- You never open a production console or run a shell command outside the
  workspace.
- If a credential prompt or a 2FA challenge appears, stop and ask me.

Why this one first
- It exercises the browser, the schedule, and the routine, and the worst
  possible failure is a wrong summary.
\`\`\`

Start with a bot whose failure mode is an inaccurate paragraph. Once the
schedule fires reliably for a week, move on to bots that touch things,
following the same read-first pattern we use for the hosted runtime in
[the one-person company setup](/blog/one-person-company-grok-bot).

**Keep reading:** [Grok Bot Setup Guide](/blog/grok-bot-setup-guide), [Migrating a Grok Bot Setup to Rakazo Without Rewriting It](/blog/migrate-grok-bot-to-rakazo), [Bot Boundaries](/blog/grok-bot-boundaries).

## Frequently Asked Questions

### What do I need installed before I can self host Rakazo?

Node.js 22 or newer, pnpm 9.15.0, and a running Docker daemon, plus free ports
on 5433, 3100, 5173, and 7091. The engines field accepts 22.22.2 and above,
24.15 and above, or 26 and above, so an older Node 22 build will be rejected.
The pnpm version matters more than it usually does, because the repository's
own setup guidance warns that pnpm 10 or 11 can reject or rewrite the
lockfile. Use Corepack or invoke pnpm 9.15.0 directly. Docker is not optional:
it runs Postgres and builds the bot computer image.

### How long does the first install take?

Plan an afternoon rather than ten minutes. The clone, install, and migrations
are quick. The step that dominates is building the computer image, which
installs a full graphical Linux desktop and Chromium and is documented as
taking several minutes on first run. After that, the slow parts are decisions
rather than downloads: which sandbox provider you want, which model you
connect, and whether you are exposing this to anyone else. A second install on
the same machine, with the image cached, is a matter of minutes.

### Is it safe to put a self-hosted Rakazo on a public VPS?

It can be, but not with the local defaults. The Postgres port is published on
loopback and the guide tells you not to expose it publicly, the sandbox
supervisor holds the Docker socket and must stay on the internal network, and
you need TLS plus matching origin variables or authentication will not behave.
The repository ships a production Compose file with Caddy and a host-hardening
script for Ubuntu, and it uses a remote sandbox provider so the VM never
exposes browser containers. Keep the signup allowlist on until you mean to
open registration.

### What breaks if I stop maintaining it?

Slowly, then all at once. Scheduled routines stop firing when the worker or
Postgres goes down, and nothing outside your own monitoring will tell you.
Security fixes only land on the current main branch and the latest beta
release, so an unpatched deployment drifts further behind every month. The
data directory holding bot homes and browser profiles keeps only the latest
workspace copy, so an unbacked-up host loses signed-in sessions and bot files
together. Treat it like any other internal service: one named owner, backups
you have actually restored once, and a monthly upgrade window.
`,
};

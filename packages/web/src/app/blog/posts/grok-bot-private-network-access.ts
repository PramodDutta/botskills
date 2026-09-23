import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Reach Private Networks From Grok Bot: Desktop Egress, Tailscale, Cloudflare Tunnel',
  description:
    'Get Grok Bot onto your private network: when to route egress through a desktop, how Team Setup installs Tailscale or Cloudflare Tunnel, and which IP your services see.',
  date: '2026-09-23',
  category: 'Tutorial',
  content: `
# Reach Private Networks From Grok Bot: Desktop Egress, Tailscale, Cloudflare Tunnel

Ask a Bot to open your internal Grafana, your staging API or the wiki behind the company VPN, and it comes back with a timeout. The Bot is not broken. Its computer lives in Cursor's cloud and reaches the internet from shared addresses that your private network has never heard of, and should not trust.

There are two documented ways to change that. Any member can route their Bot computer's web traffic through the desktop they are sitting at, so the Bots reach whatever that desktop can reach. Enterprise admins can use Team Setup to put a networking client, Tailscale or Cloudflare Tunnel for example, on every team computer. This page covers both: what each changes about the address a service sees, who can switch each one off, the order that makes a pilot go smoothly, and the one rule about setup scripts that the docs repeat more than any other. Every mechanism below was confirmed in the Grok Bot docs as of 23 September 2026.

## Start from why the Bot cannot see your intranet today

Every Grok Bot user gets one cloud computer, hosted by Cursor, and every Bot that user runs works on it. Grok Bot runs only on Cursor-hosted computers; the security page rules out running it on-premises, inside your own perimeter, or from an image you supply, at least today. So the computer is always outside your network to begin with.

By default its traffic leaves for the internet from a set of shared, static egress addresses. Those ranges are shared across Grok Bot customers, dedicated per-customer addresses are not available, and your account team can give you the current ranges. The security page is candid about what that means: those ranges tell a destination the traffic is Grok Bot's, not that it is your team's. The security FAQ does suggest allowlisting them on your own services where appropriate, but an IP rule built on shared ranges admits traffic from any Grok Bot customer's computer. For a private network that is rarely the control you want, and the private networks page offers two better ones.

So the default is the right default. Your internal hosts stay dark to the Bot, and the Bot's browsing leaves from addresses that are clearly Grok Bot. The rest of this page is about opening a controlled path into your network without breaking that. If your problem is the opposite one, a public site flagging or blocking the shared ranges, [the static egress IP page](/blog/grok-bot-static-egress-ip) covers why that happens.

## Pick between the two documented ways in

The private networks page offers two methods, and they suit different situations.

| | Route egress through a desktop | Team Setup with a networking client |
|---|---|---|
| Who sets it up | Each member, in their own desktop app | An Enterprise team admin, once, for every team computer |
| Plans | Described as a member setting; the off switch for admins is Enterprise only | Enterprise only |
| What the Bot can reach | Whatever networks that desktop can reach | Whatever your client and access rules allow |
| What destinations see | The desktop's IP address | For Tailscale with an exit node, your network; for Cloudflare Tunnel, unchanged addresses |
| What you operate | Nothing beyond the desktop | The client, its configuration, authentication and access rules |
| Good for | One member who needs access this afternoon | A consistent connection on every hosted computer |

The shape of the choice is simple. If one person needs their Bots to reach something their laptop can already reach, the desktop route is minutes away. If a whole team needs reliable, identical access, and you are on Enterprise, Team Setup is the documented path, and it is more work than it first appears because you operate every part of it.

Self-serve Teams and individual accounts do not see Team Setup at all. For them, the desktop route is the only documented way in.

## Route one member's traffic through a desktop when you need it this afternoon

In the desktop app, go to Settings -> Computer and switch on Route egress through this desktop. According to the settings page, the cloud computer's web traffic then goes out through the desktop you are using, so sites see that desktop's IP address, and your Bots can get to whatever networks that device can get to.

If your laptop is on the corporate VPN, your Bots can now reach what the VPN reaches, through your laptop, at least for web traffic. There is nothing to install and no admin to ask, unless your admin has already switched the option off.

Three limits come with it. The setting applies to one desktop, the one you turned it on at, and only your own Bot computer uses the route. The page describes web traffic specifically, and does not say whether other kinds of connections from the Bot's shell, such as a database client or SSH, take the same path. And the docs do not say what happens to the route when that desktop sleeps, loses its connection or is closed. Plan as if the route needs the desktop awake and online, and test the specific kind of connection you need before you depend on it.

## Expect every Bot's browsing to change when the desktop route is on

The desktop route is not a tunnel for one hostname. It carries the computer's web traffic, which means every Bot on your account browses through your desk while it is on.

That has two consequences worth expecting. First, every site your Bots visit sees your desktop's address instead of the shared Grok Bot ranges. For some sites that is a relief, because a datacenter address was being challenged. For others it is a surprise, because a research Bot is now visiting competitor sites from your company's office IP.

Second, routed traffic inherits your desktop's network rules. The proxies page says that once a member turns the route on, the traffic it carries rides that device's network and falls under whatever gateway policy the device has. If your laptop sits behind a secure web gateway that blocks or inspects certain categories, your Bots now browse under the same rules. A page that loads fine from the shared ranges may be blocked when it comes through your laptop.

The fix is not complicated: turn the route on for the job that needs it, and off when the job ends. Treat it like a session you opened, not a permanent property of your Bots.

## Know the admin kill switch before you rely on a desktop route

On Enterprise, admins have a team-wide switch on the Grok Bot page of the Cursor dashboard called Allow Local Egress. It is on by default. Switching it off takes the desktop route away from every member: the toggle in the app goes off and locks, showing the notice "Your team's admin has turned off local egress." Routes already running end within five minutes. Your own choice is remembered, and it takes effect again if the admin turns the switch back on.

That five-minute figure matters if you are an admin. It is the documented window between flipping the switch and every route being gone, so it is the number to put in an incident runbook. It also matters if you are a member building a workflow on the route: on Enterprise, it can disappear under you, and the Bot will simply stop reaching the internal host.

Self-serve Teams and individual accounts have no equivalent switch in the docs. Each member controls their own route, and there is no documented admin control to turn it off for them.

## Install a networking client on every team computer with Team Setup

Team Setup is Enterprise only and lives on the Grok Bot page of the Cursor dashboard. It holds manifests, which are sets of install scripts that execute on each team computer. The private networks page is careful about what that means. It is a pattern you run, not a network mode Cursor manages. Cursor runs your scripts. You install the client, configure it, authenticate computers, maintain access rules and keep up with your vendor's changes. The dashboard shows no client status, and nothing yet gives you a fleet-wide view of how the scripts did.

The mechanics are worth knowing before you write a line, because they shape how your script should behave.

| Mechanic | What the docs say | What it means for your script |
|---|---|---|
| Who runs it | The computer user, with sudo available | Use sudo for privileged installs |
| When it runs | At computer start, and on a periodic refresh roughly daily | It will run many times; make it safe to rerun |
| Check Script | When present and returning 0, setup is skipped | Use it so healthy computers skip the install |
| After setup | The check runs again to verify | A check that always fails means endless reinstalls |
| Order | Entries execute sequentially, never in parallel | Put dependencies first |
| Timeout | 30 minutes per script | Keep installs lean |
| Failure | Does not block the computer; retried on a later refresh | A broken script fails quietly, so pilot first |

Team computers run Linux, so your client has to be installable from a shell script and able to run on a Debian-based system. The docs work through Tailscale and Cloudflare Tunnel in detail, and say any other networking client that clears that bar, whether VPN, zero-trust or mesh, uses the same pattern.

To create a manifest: open Team Setup, select the plus next to Manifests to create a New Manifest, give it a Manifest ID, then fill in the entry's ID, Setup Script and optional Check Script, and select Save. The editor can switch from Form to JSON if you prefer editing the structure directly. Here is an entry laid out the way the form presents it, with the install steps left to your vendor's documentation and no credentials anywhere.

\`\`\`text
Manifest ID:  private-network

Entry
  ID:            install-tailscale
  Setup Script:
    #!/usr/bin/env bash
    set -euo pipefail
    # 1. Install Tailscale for Linux, following Tailscale's
    #    own Linux install documentation.
    # 2. Start the Tailscale service.
    # 3. No auth key here. Each member signs this computer in
    #    from its browser, where our identity provider applies.
  Check Script:
    command -v tailscale
\`\`\`

## Walk Farida through a two-computer Tailscale pilot

Farida leads the platform team at a logistics software company on Cursor Enterprise, and she is also an organization admin. Her engineers wanted their Bots to read the internal Grafana and hit the staging API, both of which sit inside the company tailnet.

She started on a Tuesday with the fast path. At 10:00 she turned on Route egress through this desktop on her laptop, which was on the tailnet, and asked her Bot for the p95 latency panel from the internal Grafana. It came back at 10:04. By 10:20 she had also noticed the downside: her research Bot's browsing was now coming from her laptop and passing through the company's web gateway, which blocked two vendor documentation sites the Bot needed. She kept the route for the afternoon and turned it off at 17:30.

On Wednesday she wrote the manifest above in Team Setup. On Thursday she used the pilot order the docs suggest: one or two computers first. As organization admin, she recreated two computers, hers and one engineer's, from Grok Bot Computers on the dashboard. A recreate rebuilds each computer on the newest image, reruns Team Setup, and keeps the member's Bots, files and logins. Team admin rights alone would not have been enough; the computers page says recreating needs an organization admin, because one computer spans every team a member belongs to.

| Time | What she saw | Cause | Fix |
|---|---|---|---|
| Thu 09:00 | Two computers recreated | The new manifest was needed now, not at the daily refresh | Recreate, which keeps Bots, files and logins |
| Thu 09:25 | Tailscale installed, internal hosts still unreachable | Nobody had authenticated; the login is manual by design | Asked the Bot to start the Tailscale login |
| Thu 09:30 | The login step hung | The team network policy was Team Allowlist Only and blocked Tailscale's coordination servers | Added the endpoints Tailscale documents to the team allowlist; it applied in about a minute |
| Thu 09:40 | Login link opened in the computer's browser | Sign-in goes through the identity provider | Took over and signed in herself |
| Thu 09:50 | Computer listed in the Tailscale admin console, still no route | Exit node use needed approval in the tailnet | Approved the computer for the exit node |
| Thu 10:02 | Bot returned the latency panel | Everything in place | Scheduled the team-wide rollout |

Each problem on that Thursday was in the docs' own list of Tailscale failure modes: installed but not authenticated, an allowlist blocking the coordination servers, an exit node not approved. None of them was a Grok Bot fault. That is the pattern-you-run point in practice: the connection is yours, and so is its troubleshooting.

## Keep credentials out of the manifest and sign each computer in through its browser

The rule the private networks page repeats in almost every section is that setup scripts must not contain secrets. Whatever you type into a manifest travels as plain text to every computer on the team and runs there under the computer's own user. An auth key, a token or a Cloudflare Access service token in a script is a credential copied onto every computer your team has.

The documented alternative is interactive sign-in. With Tailscale, the client hands you a login link that opens in the cloud computer's browser, and the sign-in there goes through your identity provider under its usual policies. With Cloudflare Tunnel, identity-based Access policies fit because members sign in through the browser. Where a vendor offers some other way to avoid baking a long-lived credential into the script, the docs allow that too.

Interactive sign-in has a cost you should plan for. Logins inside the computer may not survive a recreate, whether it comes from an image update, a reset or an admin, and the network client's login is one of them. The docs list a recreated computer whose session did not survive as a Tailscale failure mode in its own right. Tell members to expect an occasional re-authentication, and make the Bot's charter report a lost connection clearly instead of retrying in a loop.

## Choose Cloudflare Tunnel when you want services, not the whole network

Cloudflare Tunnel uses the same Team Setup mechanics with a different shape of access. The piece that does the work lives in your network: a cloudflared connector exposes the specific services you choose via Cloudflare's edge, and Cloudflare Access sits in front of them. The Bot's computer then finds each service by its hostname. Your Team Setup script installs only the client software on the computer.

For private HTTP services, the Bot uses the hostname you routed through the tunnel, and Access enforces your policy. For private TCP services such as a database or SSH, the Bot starts cloudflared access tcp on the computer, which opens a listener locally, and points its tool there. Those listeners do not persist across sessions, so the Bot has to start one when it needs the service.

The docs are open about maturity. Tailscale is the setup they say has actually been tested with this pattern; Cloudflare Tunnel has not been tried on team computers to the same degree, so prove it on a pilot computer first. The practical difference comes down to scope and addresses. Tailscale puts the whole computer on your network and, through an exit node, sends its outbound traffic out of your network too. Cloudflare Tunnel exposes one service at a time and leaves the computer's outward-facing addresses exactly as they were.

| If you want | Tailscale with an exit node | Cloudflare Tunnel |
|---|---|---|
| Reach a whole private network | Yes, network-level | No, one published service at a time |
| Keep internet egress on the shared ranges | No, routed traffic leaves from your network | Yes, other services see unchanged addresses |
| Reach a database or SSH | Through the network route | Through a cloudflared access tcp listener started when needed |
| Exercised on team computers | Yes, per the docs | Validate on a pilot first |
| Common failure in the docs | Installed but never authenticated | Connector down inside your network |

## Add your client's endpoints if the team allowlist is strict

Private network reach does not replace the Grok Bot network policy. On Enterprise, Network Controls decides which destinations team computers may contact, using one of four modes that range from allowing everything to Team Allowlist Only. The policy still applies after Team Setup installs your client.

If your team runs Team Allowlist Only, the client's own endpoints must be on the list: coordination servers, relays and gateways for Tailscale, the tunnel hostnames and Cloudflare's endpoints for Cloudflare Tunnel. Take the list from your vendor's documentation, not from a blog post, because vendors change them. Per the docs, a running computer picks up a policy change in about a minute, a sleeping one picks it up when it wakes, and no recreate is needed.

Keep the two layers straight in your head. The network client decides what the computer can get into. The network policy decides what the computer is allowed to talk to. You want both, because reach without a policy is a Bot that can wander, and a policy without reach is a Bot that times out.

## Roll manifest changes out without losing anyone's work

Once the pilot works, getting the manifest onto everyone's computer is mostly waiting, unless you choose not to wait.

| How a computer gets the manifest | When | What the member keeps |
|---|---|---|
| New computer starts | Immediately at start | Nothing to lose |
| Running computer refreshes | Roughly daily | Everything; the script just runs |
| Organization admin selects Recreate | When the replacement is ready | Synced Bots, files and logins; self-installed apps and packages are removed |
| Member resets from the desktop app | Immediately | Synced durable data; recent unsynced work can be lost |
| Image update recreates the computer | Automatically | Files preserved; sign-in sessions may need redoing |

For a team rollout, the daily refresh is usually fine. If you need it sooner, prefer an admin Recreate over asking members to Reset, because Reset rebuilds from the most recent saved snapshot, so work that had not synced yet may be gone. Recreate also removes apps and packages members installed themselves, so warn anyone who has been hand-installing tools before you run it.

After any recreate, expect each member to sign their computer back in to your network client. That is the interactive login doing its job, not a failure.

## Answer the engineer who says one shared auth key is simpler

The objection comes from people who have run fleets before. Pre-authorized keys exist for exactly this: unattended machines joining a network without a human clicking a login link. The manifest is only editable by admins. Put one key in the script, mark it reusable, and every computer joins at start with no support tickets.

The docs reject it plainly, and the reasons go beyond the warning. A key in a manifest is a plain-text credential copied to every team computer. It is a single secret whose exposure on any one computer puts the whole fleet's network access at risk.

It also cuts against something Grok Bot is built around. The security page says Bots act as the signed-in member, can never hold more access than that person, and that each action can be traced to a named member. Interactive sign-in through your identity provider keeps that shape on your network: each computer joins under one member's own sign-in, your identity provider's policies apply to it, and removing that person does not touch anyone else's access. A shared key joins every computer under the same credential, and if any one computer or person with access to it becomes a concern, the fix is rotating the key for everyone.

The objection keeps a fair point about friction. Interactive sign-in means occasional re-authentication after recreates. That friction is the price of per-member identity, and it is small next to rotating a fleet-wide key after an incident.

## Give network reach only to Bots whose boundary stops at reading

Opening a path into your network widens what every one of that member's Bots can reach, because they all share one computer. The safe way to use that reach is to pair it with Bots whose boundary is the one action they never take: changing anything on the other side.

[Latency Investigator](/bots/latency-investigator) is the model case. It works from a stated symptom, narrows a regression with evidence, and writes the case with links, and its boundary is that it never changes an alert, a threshold, a feature flag or any production setting. Internal dashboards are exactly what it needs to read, and nothing it needs to write. [Engineering Agent Manager](/bots/engineering-agent-manager) is another good fit when your source control sits on a private network: it reports what coding agents are doing and proposes moves, and it never merges, approves or pushes to the default branch.

Put the network boundary in the charter too, so a Bot with new reach knows where it ends.

\`\`\`text
PRIVATE NETWORK BOUNDARY (applies to every Bot on this account)

You can reach internal hosts through the company network client.
Read only: dashboards, staging API GET requests, internal docs.
Never send a write to any internal host: no POST, PUT, PATCH or
DELETE, no config change, no feature flag, no deploy, no restart.
Never open a TCP listener to a database unless I asked for that
database in this conversation, and close it when the task ends.
If an internal host is unreachable, report it once with the time
and hostname. Do not retry in a loop and do not try another route.
Never ask me for a network auth key or token in chat. If the
network client needs a login, ask me to take over the computer.
\`\`\`

The reach comes from your network client. The limit comes from the Bot's boundary, your Auto Review rules and the network policy. For the principle behind granting the minimum, [least privilege for bots](/blog/least-privilege-bots) applies to network paths exactly as it applies to accounts.

## Diagnose a Bot that still cannot reach the internal host

Most failures sit in a short list, and the docs name most of them.

| Symptom | Likely cause | Check |
|---|---|---|
| Desktop route on, internal host still times out | The desktop itself cannot reach it, or the connection is not web traffic | Test from the desktop; try a web endpoint first |
| Desktop route toggle is off and locked | An Enterprise admin turned off Allow Local Egress | Ask the admin; routes stop within five minutes of the change |
| Client installed, no access | Nobody authenticated the computer | Check your vendor's admin console, then sign in from the computer's browser |
| Worked yesterday, fails after an image update | The computer was recreated and the client session dropped | Authenticate again |
| Fails only with Team Allowlist Only | The policy blocks the client's endpoints | Add them from your vendor's docs |
| Cloudflare hostname refuses the Bot | Access denied the request, or the connector is down | Check Access logs and tunnel health on your side |
| A delegated coding task cannot reach the host | Delegated Cloud Agents use Cloud Agent network settings, so your Team Setup client never sees them | Configure access for Cloud Agents separately |

The last row surprises people. The private networks page points out that work Grok Bot hands to Cloud Agents runs with the Cloud Agent network settings, so the client you installed with Team Setup plays no part in it. The Cloud Agents documentation has its own Tailscale and Cloudflare Tunnel recipes for that separate surface; the Team Setup pattern on this page does not carry over to it.

## When this page stops applying

Grok Bot is in beta. Five documented facts carry this page, each confirmed as of 23 September 2026: default egress is shared static ranges with no dedicated per-customer addresses; Route egress through this desktop is a per-desktop member setting for web traffic; Allow Local Egress, Team Setup and Network Controls are Enterprise only; routes stop within five minutes when an admin turns local egress off; and setup scripts must not carry credentials.

If Cursor ships a managed network mode, dedicated egress addresses, or a fleet view of script results, large parts of this page change, and the private networks documentation wins. For the connection between member devices and Cursor through a TLS-inspecting gateway such as Zscaler, the proxies documentation is the right place, not this page. For configuring your identity provider so members can sign in to company apps from the Bot's computer, go to the identity and access documentation.

## Frequently Asked Questions

### Can Grok Bot connect to my VPN or private network?

Yes, in two documented ways. Any member can turn on Route egress through this desktop under Settings, Computer in the desktop app, which sends their Bot computer's web traffic through that desktop so Bots reach whatever the desktop can reach. On Cursor Enterprise, admins can also use Team Setup to install a networking client such as Tailscale or Cloudflare Tunnel on every team computer. Grok Bot runs only on Cursor-hosted computers, so there is no on-premises option, and the Enterprise network policy still decides which destinations computers may reach.

### What IP address do websites see when Grok Bot visits them?

By default, one of Cursor's shared static egress addresses, which are shared across Grok Bot customers; dedicated per-customer addresses are not available. With Route egress through this desktop turned on, destinations see your desktop's IP address instead. With Tailscale and an exit node installed through Team Setup, traffic routed through your network arrives from inside it. With Cloudflare Tunnel, only the published private services change path, through Cloudflare's edge, and every other site sees the same addresses as before. Everything not routed through your network still leaves from the shared ranges.

### Is Team Setup available on Cursor Teams?

No. Team Setup is Enterprise only and does not appear on other plans, and the same is true of Network Controls and the Allow Local Egress switch. Self-serve Teams and individual accounts can still use Route egress through this desktop, which the docs describe as a member setting, so a member can let their own Bots reach whatever their desktop can reach. If you expected Team Setup on the Grok Bot page of the dashboard and do not see it, the docs say either you are not on Enterprise or your account team still has to turn Grok Bot on for the organization.

### Can I put a Tailscale auth key in the Team Setup script?

No. The Grok Bot docs say setup scripts are no place for secrets: a manifest is plain text that reaches every team computer, and its scripts run there under the computer's own user. Keep auth keys, tokens and Cloudflare Access service tokens out of them. Instead, have each member sign their computer in from its own browser, where your identity provider's rules still govern the login, or use a vendor mechanism that avoids a long-lived credential in the script. Expect to re-authenticate after a computer is recreated, since the client's session may not survive.
`,
};

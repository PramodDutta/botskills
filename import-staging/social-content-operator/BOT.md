---
name: Social Content Operator
description: Set up a new bot for me, in its own dedicated chat, that operates my social publishing through Delulu Social.
version: 1.0.0
author: delulusocial
license: MIT
category: marketing
integrations: [delulu-social, google-drive]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

Set up a new bot for me, in its own dedicated chat, that operates my social publishing through Delulu Social. Before configuring it, check whether the `manage-social-publishing` skill is available; if not, install it with `npx skills add thegesturs/delulu --skill manage-social-publishing --global --yes`, tell me to start a fresh chat if the current agent cannot load newly installed skills, and continue from this exact prompt. Read the current agent setup guide at https://docs.delulu.social/getting-started/agent-setup/, MCP overview at https://docs.delulu.social/mcp/overview/, MCP tool reference at https://docs.delulu.social/mcp/tools/, publishing guide at https://docs.delulu.social/guides/publishing/, and agent discovery manifest at https://solulu.delulu.social/auth.md so the workflow follows current Delulu behavior rather than guessed commands. Prefer the hosted MCP server at `https://solulu.delulu.social/mcp` when the agent supports remote MCP and browser OAuth; otherwise use the Delulu CLI through the skill. Never ask me to paste access or refresh tokens.

Walk me through authorizing the correct workspace, inspecting setup status, listing existing social accounts before connecting duplicates, completing any required provider consent, and connecting the Google Drive folder where approved source material lives. Then ask which accounts, timezone, cadence, brand voice examples, content pillars, links, exclusions, media rules, and approver to use. Before each run, read the live workspace role, connected accounts, usage, pending reviews, existing failures, and scheduled posts. Each week, use only approved source material to create channel-specific copy and a proposed seven-day calendar; preserve attribution and links, never invent claims or media rights, and never paste identical copy across networks.

Default every new item to an unscheduled draft. Show me the final copy, target accounts, media, privacy, and resolved local schedule before any external action, and schedule or publish only the items I explicitly approve. Use public HTTPS media with MCP only after I approve sharing it; use the CLI for local files. Treat returned post and target states as authoritative: report `pending_review` instead of bypassing it, keep the original post and operation identity while publishing is in progress, and retry only failed targets so successful destinations are never duplicated. Run the first batch from one real approved source as drafts with me watching, incorporate my edits into the operating rules, then save the bot on the agreed weekly schedule.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@delulusocial](https://x.com/delulusocial).
The boundary line and any edits are by botskills.sh, released under the same license.

```
MIT License

Copyright (c) 2026 Inbox Zero Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

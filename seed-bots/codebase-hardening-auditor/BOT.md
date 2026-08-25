---
name: Codebase Hardening Auditor
description: Set up a new bot for me that audits a codebase that shipped fast and now needs hardening.
version: 1.0.0
author: nate-stellar
license: MIT
category: ops
integrations: [github]
runtimes: [grok-bot]
boundary: Works only in the repository; never skips a check or touches production.
tags: [imported, reviewed]
---

Set up a new bot for me that audits a codebase that shipped fast and now needs hardening. Walk me through connecting GitHub, then configure it: given a repository, work through this fixed 20-point checklist in order — duplicate utility functions, secrets committed in config files, functions over 400 lines, components over 200 lines, dead code, silent or empty catch blocks, API calls in the UI missing loading/error states, database queries written directly in route handlers, synchronous I/O in request handlers, list endpoints with no pagination, inconsistent API response shapes, floats used for money instead of integer cents, dates stored as plain strings instead of ISO 8601, external calls with no retry/backoff, stale comments that no longer match the code, unvalidated user input, API routes missing auth checks, missing indexes on frequently queried columns, N+1 queries, and third-party SDKs initialized in more than one place. For each check, search the codebase, list every finding with its file and line, and either apply the fix or propose it clearly — report "none found" rather than skipping a check, never omit one. Finish with a summary table showing fixed / proposed / none-found across all 20 checks, and always ask before making any sweeping change that touches many files. Ask me which repository and branch to run against and whether it may open pull requests directly or must hand me a diff to review first, do a dry run against a repo I point you to, then save it.

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@nate-stellar](https://x.com/nate-stellar).
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

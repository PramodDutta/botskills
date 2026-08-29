import type { BlogPost } from './index';

export const post: BlogPost = {
  title: 'Which Surface Reads SKILL.md, and Why It Is Not This One',
  description:
    'Compare Grok Build and Grok Bot support for SKILL.md, trace ignored frontmatter fields, and learn a source-first test that prevents surface confusion.',
  date: '2026-08-29',
  category: 'Comparison',
  content: `
# Which Surface Reads SKILL.md, and Why It Is Not This One

Tara places a SKILL.md file beside a bot task, runs Grok Bot, and waits for its rules to appear. Nothing in the supplied Grok Bot facts says they will. She has copied a Grok Build capability onto a different surface.

A **SKILL.md file** is a Markdown instruction file used to package reusable guidance for a compatible coding-agent surface. The filename alone does not make every Grok product consume it.

According to the Grok Build section of VERIFIED-FACTS-2026-08-25, Grok Build reads compatible skills and related instruction families. The same verified section says the Grok Bot documentation never mentions SKILL.md, Claude Code, or CLAUDE.md. By the end, you can label a skill test with the correct surface and predict which metadata fields will not apply.

## Put the product surface in every compatibility claim

"Grok reads skills" drops the most important noun. A **compatibility claim** states that one named system accepts or interprets another format. It needs a producer, consumer, format, and direction.

The Grok Build section of VERIFIED-FACTS says Grok is fully compatible with Claude Code with zero configuration in the context of Grok Build's skills, plugins, and marketplaces. It does not transfer that claim to Grok Bot.

| Claim component | Precise value | Weak substitute | Result of weakness |
|---|---|---|---|
| Consumer | Grok Build | Grok | Surface disappears |
| Format | SKILL.md and named families | Skill files | Filename rules blur |
| Direction | Grok Build reads compatible inputs | Compatible both ways | Reverse claim invented |
| Source | Build documentation | Brand association | Evidence scope lost |

Tara repairs her note to say "Grok Build reads SKILL.md under the documented compatibility behavior; Grok Bot is not documented as doing so."

## Attach SKILL.md reading to Grok Build

According to the Grok Build section of VERIFIED-FACTS, Grok Build auto-reads Claude Code marketplaces, plugins, skills, MCPs, agents, hooks, and the CLAUDE.md family. That is a broad compatibility statement for Build.

The same section lists CLAUDE.md, Claude.md, CLAUDE.local.md, and .claude/rules/ as recognized inputs. It also lists the AGENTS.md family, ~/.agents/skills/, and ~/.agents/commands/. These paths show that the behavior is larger than a single filename.

Do not simplify the list into "all agent configuration works." The source names families and also documents ignored fields. Compatibility has edges, which a useful comparison must preserve.

## Leave Grok Bot out of the SKILL.md sentence

The Grok Build section of VERIFIED-FACTS explicitly warns that the Grok Bot docs never mention Claude Code, SKILL.md, or CLAUDE.md. Therefore, this article does not claim Grok Bot reads any of them.

Absence from documentation is not proof that a hidden experiment can never occur. It is enough to reject a positive product claim in an article that must trace every claim. The correct field is "not documented for Grok Bot in the supplied facts."

[What a pasted prompt inherits](/blog/what-a-pasted-prompt-inherits) covers instructions that are actually pasted into an interaction. Keep that mechanism distinct from automatic file discovery. A prompt the operator supplies and a file the surface auto-reads are different input paths.

## Define auto-read as discovery plus application

To **auto-read** a file means the surface discovers it without the user pasting its contents and uses supported instructions from it. Discovery and application should be tested separately. A file can be found while some metadata is ignored.

The Grok Build facts support automatic reading of the named families. They do not say every byte produces behavior. In fact, the same section gives a concrete list of SKILL.md frontmatter fields that Grok accepts but does not apply.

| Test layer | Question | Passing evidence | Common false positive |
|---|---|---|---|
| Discovery | Was the named file found? | Unique body instruction affects output | User also pasted same instruction |
| Body application | Did prose guide behavior? | Controlled A and B runs differ | Task prompt already required result |
| Metadata application | Did field constrain behavior? | Observable supported effect | Parser accepted syntax only |
| Surface scope | Which product ran? | Run record names Grok Build | Tester writes only Grok |

A clean test removes duplicate instruction paths so the file's effect can be observed.

## Inspect the fields Grok Build accepts but ignores

According to the Grok Build section of VERIFIED-FACTS, Grok accepts but does not apply the SKILL.md fields model, effort, license, and compatibility. The same section says allowed-tools grants and restricts nothing.

"Accepts" means the file can contain the field without that fact proving enforcement. "Does not apply" means Tara must not rely on the field to select a model, change effort, enforce licensing behavior, establish compatibility, or constrain tools.

| SKILL.md field | Documented Grok Build behavior | Unsafe assumption | Test note |
|---|---|---|---|
| model | Accepted, not applied | Selects a serving model | Do not use as control |
| effort | Accepted, not applied | Changes reasoning effort | Treat as inert metadata |
| license | Accepted, not applied | Enforces license terms | Handle governance elsewhere |
| compatibility | Accepted, not applied | Proves runtime compatibility | Test actual environment |
| allowed-tools | Grants and restricts nothing | Creates tool permission boundary | Verify capability separately |

This gotcha is more important than simple parsing. A silent no-op can look successful until the missing constraint matters.

## Keep allowed-tools out of your security boundary

The Grok Build section of VERIFIED-FACTS says allowed-tools grants and restricts nothing. Therefore, it cannot serve as a Grok Build tool permission control under the supplied facts.

Tara writes allowed-tools with one read-only tool and assumes other tools are blocked. Her test checks only whether the permitted tool works, so it passes. A meaningful negative test would also attempt a harmless synthetic action through an omitted tool and observe whether the field prevents reach.

[A boundary is not a permission](/blog/a-boundary-is-not-a-permission) is the canonical explanation of the category distinction. One sentence is enough here: metadata that is ignored cannot enforce a capability boundary.

## Preserve compatibility direction instead of reversing it

According to the Grok Build section, Grok Build reads the named Claude Code and agent ecosystems. It does not verify the reverse statement that Claude Code consumes Grok-authored skills.

Compatibility is directional. A PDF reader opening a document does not prove that every PDF tool understands the reader's private annotations. Likewise, consumer A reading producer B's format says nothing automatic about B reading A's extensions.

Tara adds arrows to her matrix: Claude Code-style inputs to Grok Build is documented. Grok-authored output to Claude Code is unresolved from the supplied facts. The arrows prevent a two-way claim from hiding inside the word compatible.

## Walk Tara through a false-positive skill test

Tara creates a skill body that says "Return a three-column table" and a task prompt that also says "Return a three-column table." Grok Build returns the table. She concludes SKILL.md was read, but her test has two possible causes.

She removes the duplicate prompt instruction and adds a harmless marker: the skill body requires the first column heading to be "Evidence." In an A run the file is present; in a B run it is renamed so it is outside the documented filename path. She keeps task input fixed and compares results.

Then she repeats the experiment on Grok Bot. The supplied facts do not promise discovery there, so any observed behavior must be reported as a dated experiment, not generalized into product compatibility. She does not put real credentials or consequential tools in either test.

## Diagnose skill failures by layer

A missing effect can come from the wrong surface, wrong path, duplicated instruction, ignored metadata, or an instruction conflict. Name the layer before rewriting the skill.

| Symptom | Likely layer | Diagnostic check | Repair |
|---|---|---|---|
| Body never changes output | Discovery | Verify exact documented path | Move controlled file |
| Output matches both A and B | Test design | Remove prompt duplicate | Add unique harmless marker |
| allowed-tools does not block | Metadata | Read ignored-field fact | Use verified capability control |
| Model field has no effect | Metadata | Separate acceptance from application | Remove reliance on field |
| Bot result appears inconsistent | Surface | Record Build or Bot explicitly | Stop cross-surface inference |

The table turns "skills do not work" into a testable question. It also prevents a valid Build behavior from being debugged inside Bot.

## Answer the developer who says the brands are close enough

The strongest objection is that Grok Bot and Grok Build belong to the same broader product family, so shared compatibility would be reasonable. Reasonable is not the same as sourced.

The Grok Build section names Build for skills and says Bot documentation never mentions them. That is direct evidence to keep the surfaces separate. Conflation also causes operational harm: Tara may rely on ignored metadata or wait for automatic discovery that has not been documented for her surface.

If future primary documentation adds Bot support, update the comparison with its date and exact scope. Until then, precision beats family resemblance.

## Design a minimal SKILL.md experiment

Use a synthetic folder, one instruction, and one output difference. Write a body rule that is easy to observe and harmless, such as a specific heading. Do not use allowed-tools as the test because the verified facts already say it grants and restricts nothing.

Run A with the correctly named file and B without it. Keep the surface, prompt, input, and environment fixed. Record file path, time, and result. Then test one ignored field separately to demonstrate that parsing does not equal application.

[Bookmark Skill Grader](/bots/bookmark-skill-grader), [Source Verifier](/bots/source-verifier), [Codebase Hardening Auditor](/bots/codebase-hardening-auditor), and [Docs Self Serve Assistant](/bots/docs-self-serve-assistant) offer catalog jobs from which to borrow harmless output shapes. Their listings do not establish file compatibility.

## Keep model and permission claims in their own columns

An ignored model field does not reveal Grok Bot's model. An ignored allowed-tools field does not establish product permissions. These failures belong to different columns in Tara's compatibility matrix.

For the model question, read [why the model behind Grok Bot is not published](/blog/why-the-model-behind-grok-bot-is-unpublished). For permissions, read [Grok Bot permissions explained](/blog/grok-bot-permissions-explained). For precise boundary language, read [how to write a boundary line](/blog/how-to-write-a-boundary-line).

The shared lesson is small: do not ask a configuration field to prove a product capability that its own documentation does not assign to it.

## State what this comparison does not establish

This page does not claim that Grok Bot reads SKILL.md, CLAUDE.md, MCP configuration, or Claude Code plugins. It does not claim reverse compatibility from Grok-authored skills to Claude Code. It does not claim ignored metadata fields are enforcement controls.

It also does not teach how automatic file discovery interacts with every directory layout, precedence rule, or future release. Those details require current primary documentation and controlled tests.

[Screens are not boundaries](/blog/screens-are-not-boundaries) covers shared architecture, and [what an approval actually governs](/blog/what-an-approval-actually-governs) covers proposed actions. Neither should be restated as SKILL.md behavior.

## Build a two-row compatibility matrix now

Create rows for Grok Build and Grok Bot. Add columns for SKILL.md discovery, named instruction families, ignored fields, source sentence, and verification date. In the Build row, record the documented auto-read families and ignored metadata. In the Bot row, write "not documented in supplied Grok Bot facts" rather than guessing.

Add a direction arrow to every compatibility statement. Then design one A and B experiment for Build using a harmless body instruction. Do not treat successful parsing of model, effort, license, compatibility, or allowed-tools as application.

You can now do one concrete thing: review a sentence that says "Grok reads SKILL.md" and rewrite it so the surface, direction, supported fields, and evidence are explicit.

Create a fixture folder for the experiment. A **fixture** is controlled test material kept stable across runs. Put one tiny task file and one SKILL.md body instruction inside the documented Build path. The body instruction should affect presentation only, such as requiring a heading called Evidence. Do not include credentials, network actions, or destructive tools. Save a checksum or exact copy so later runs use identical content.

Design four runs. Run A uses Grok Build with the skill present. Run B uses Grok Build with the file moved outside the tested discovery path. Run C restores the file but removes the unique body rule. Run D repeats A with an ignored model field added. A and B test discovery, A and C test body application, and A and D demonstrate why an accepted field should not be credited with an effect.

Record the consumer on every result row. If the interface title, command, or run record does not make Build versus Bot clear, stop and resolve the surface before interpreting output. A screenshot of a result without its surface cannot support the compatibility claim this exercise is designed to test.

Now test an ignored restriction safely. In a disposable environment, describe two harmless local operations while allowed-tools names only one. The verified Build fact predicts that allowed-tools grants and restricts nothing. The point is not to exercise dangerous capability. It is to observe that a metadata allowlist must not be reported as enforcement merely because the file parses.

Separate instruction conflict from discovery failure. Add a task prompt that deliberately requests a different heading from the skill body. If output follows one instruction, that does not by itself reveal precedence as a general product rule. Report the exact conflict and dated result. Then remove the conflict for the core discovery test. Compatibility tests should minimize variables before they study precedence.

Inspect filename case and location without overgeneralizing. The supplied facts name families such as CLAUDE.md and AGENTS.md paths, but this article does not invent a complete traversal algorithm. Test only documented examples, record exact paths, and label any additional observed discovery as an observation. A successful file in one directory does not prove recursive reading everywhere.

Write the final result as two sentences: "Grok Build is documented to auto-read the named skill and instruction families. The supplied Grok Bot documentation does not mention SKILL.md, so this test does not assign that behavior to Bot." Then append the ignored-field note. Short, scoped reporting prevents the experiment from becoming a brand-wide claim.

If a future release documents Bot support, create a new Bot-specific fixture and rerun the matrix. Do not recycle old Build observations as proof. Compatibility changes should add a dated row, not erase what the older source actually said. That practice keeps tutorials auditable as surfaces evolve independently.

Inspect the SKILL.md frontmatter and body as separate documents in your notes. Frontmatter is structured metadata at the top of the file, while the body carries natural-language instructions. The supplied Build facts identify several metadata fields as accepted but not applied. A successful body test therefore says nothing automatic about model, effort, license, compatibility, or allowed-tools.

Use a no-op control. Add an arbitrary unsupported metadata key to both A and B while keeping the body difference unchanged. If results track the body rather than the key, the test becomes less likely to confuse file parsing with the supported instruction effect. Report only what the controlled difference demonstrates.

Check for contamination from global instruction files. The Grok Build facts name several families beyond the local SKILL.md. A CLAUDE.md or AGENTS.md higher in the test environment could contain the same marker. Inventory named instruction files visible to the fixture and remove duplicate markers before claiming local discovery.

Treat marketplaces, plugins, skills, MCPs, agents, and hooks as distinct compatibility objects even though the supplied facts list them together. A successful skill test does not prove every plugin hook behaves as expected. Give each family its own matrix row and current source if your project depends on it.

Add a failure output to the fixture. If the unique body rule cannot be followed, require a visible phrase such as "fixture instruction unavailable" rather than a guess. This tests whether the body contains a useful failure path. It does not claim the surface will always obey, but it gives the experiment an expected negative observation.

Review documentation language for versions and qualifiers. "Auto-reads" supports discovery, while "compatible" can cover a wider relationship. Do not strengthen either into "fully enforces every field." The documented ignored fields prove why that stronger sentence would be wrong even on Build.

When teaching another developer, ask them to classify five statements as documented, contradicted, or unresolved. Include "Build reads SKILL.md," "Bot reads SKILL.md," "allowed-tools restricts tools," "model selects a model," and "Claude Code reads Grok-authored skills." The supplied facts yield documented, unresolved as a positive claim and therefore not assertable, contradicted, contradicted, and unresolved.

Finish with a repository comment near any relied-on skill: name Grok Build as consumer and list ignored fields that matter to the project. This local note reduces the chance that a teammate treats allowed-tools as enforcement or copies the file into Grok Bot expecting automatic discovery.

Add an evidence column for documentation and another for experiment. Documentation answers what the provider states. An experiment answers what Tara observed in one environment on one date. Agreement strengthens confidence in that scoped behavior, but an observation cannot broaden the documented surface. Disagreement should trigger diagnosis, not a claim that the source is universally wrong.

Test path movement with copies, not the only working file. Keep the original fixture under version control and create disposable variants for A and B. This prevents a failed cleanup from erasing the exact instructions that produced an earlier result. It also lets a reviewer inspect the difference rather than trusting Tara's memory of where the file lived.

Review the body for concealed product assumptions. A skill that says "select the model named above" relies on the ignored model field. A skill that says "use only allowed-tools" relies on a field that grants and restricts nothing. Move necessary behavioral guidance into supported body instructions while recognizing that prose still does not create technical enforcement.

When sharing the fixture, include a README with consumer, expected file path, harmless marker, A and B procedure, and expected interpretation. State that Grok Bot is outside the documented claim. A reusable test without interpretation guidance often becomes folklore after the original author leaves.

Create a contradiction log for future updates. If new documentation names SKILL.md under Grok Bot, record the old source date, new source date, exact added scope, and retest result. Do not silently delete the old distinction. The log teaches readers that compatibility claims are versioned product facts, not permanent properties of a brand name.

Finally, ask what failure would matter. If the skill controls formatting, a missed heading is inconvenient. If someone relies on allowed-tools to block a consequential operation, the ignored field creates a serious false boundary. Prioritize replacing unsupported control assumptions before polishing body behavior. Compatibility testing should follow consequence, not novelty.

Keep reading: [Grok Bot Claude Code skills compatibility](/blog/grok-bot-claude-code-skills-compatibility), [why the model behind Grok Bot is not published](/blog/why-the-model-behind-grok-bot-is-unpublished), and [a boundary is not a permission](/blog/a-boundary-is-not-a-permission).

## Frequently Asked Questions

### Which surface reads SKILL.md according to the verified facts?

Grok Build. The Grok Build section of VERIFIED-FACTS-2026-08-25 documents automatic reading of Claude Code skills and related families. The same section says Grok Bot documentation never mentions SKILL.md, Claude Code, or CLAUDE.md. Therefore, do not rewrite the Build capability as a Grok Bot product claim.

### Does allowed-tools restrict Grok Build tools?

No, according to the supplied Grok Build section. It says allowed-tools grants and restricts nothing. A file may be accepted while that field remains unapplied. Do not use it as a security or permission boundary. Test actual capabilities through independently verified controls, and keep the test synthetic and non-consequential.

### Do the model and effort fields change Grok Build behavior?

The supplied Grok Build facts say model and effort are accepted but not applied. License and compatibility are also accepted but not applied. Successful parsing therefore cannot prove behavioral effect. Remove reliance on these fields, record them as inert for this surface, and check current primary documentation for future changes.

### Can Claude Code consume a skill authored for Grok?

That reverse direction is not verified by the supplied facts. The documented direction is that Grok Build reads named Claude Code and agent inputs. Compatibility must preserve consumer, producer, format, and direction. Test any reverse path separately and report it as a dated observation unless a primary source explicitly documents it.
`,
};

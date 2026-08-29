import { z } from 'zod';

// ---- Taxonomy (mirrors docs/PLAN.md section 4) ----

export const CATEGORIES = [
  { id: 'productivity', name: 'Productivity' },
  { id: 'sales', name: 'Sales' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'ops', name: 'Ops' },
  { id: 'success', name: 'Success' },
  { id: 'personal', name: 'Personal' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'finance', name: 'Finance' },
  { id: 'support', name: 'Support' },
  { id: 'research', name: 'Research' },
  { id: 'writing', name: 'Writing' },
] as const;
export type CategoryId = (typeof CATEGORIES)[number]['id'];
export const CATEGORY_IDS = CATEGORIES.map((c) => c.id);

export const RUNTIMES = [
  { id: 'grok-bot', name: 'Grok Bot', badge: 'GROK BOT' },
  { id: 'rakazo', name: 'Rakazo', badge: 'RAKAZO' },
] as const;
export type RuntimeId = (typeof RUNTIMES)[number]['id'];
export const RUNTIME_IDS = RUNTIMES.map((r) => r.id);

// Open-ended: popular set for filters; any string is allowed in frontmatter.
export const POPULAR_INTEGRATIONS = [
  'gmail', 'slack', 'github', 'google-calendar', 'notion', 'x', 'salesforce',
  'google-drive', 'sheets', 'linear', 'stripe', 'intercom', 'airtable', 'sentry',
] as const;

// ---- BOT.md schema ----

export const botFrontmatterSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(10).max(300),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  author: z.string().min(1).max(100),
  license: z.string().min(1),
  category: z.enum(CATEGORY_IDS as [CategoryId, ...CategoryId[]]),
  integrations: z.array(z.string()).min(1),
  runtimes: z.array(z.enum(RUNTIME_IDS as [RuntimeId, ...RuntimeId[]])).min(1),
  // The hard limit, rendered on every surface. Required by design.
  boundary: z.string().min(8).max(160),
  tags: z.array(z.string()).default([]),
});
export type BotFrontmatter = z.infer<typeof botFrontmatterSchema>;

export interface ParsedBot extends BotFrontmatter {
  slug: string;
  /**
   * The setup prompt ONLY, with any licence and attribution block removed.
   * This is what the copy button hands to the user, so it must contain nothing
   * they would have to delete before pasting it into a bot.
   */
  prompt: string;
  /**
   * The licence and attribution block, kept separate so the page can show it
   * without the copy carrying it. Imported bots reproduce the upstream MIT
   * licence here; bots written here have none.
   */
  attribution?: string;
}

// ---- Regex frontmatter parser ----
// Same contract as the qaskills seed pipeline: NOT a YAML library. Values must
// be single-line; arrays must be inline [a, b, c]. Block lists parse as empty.

function parseInlineArray(raw: string): string[] {
  const m = raw.match(/^\[(.*)\]$/);
  if (!m) return [];
  return m[1].split(',').map((s) => s.trim()).filter(Boolean);
}

export function parseBotMd(slug: string, raw: string): ParsedBot {
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!fm) throw new Error(`${slug}: missing frontmatter block`);
  const [, head, body] = fm;

  const get = (key: string): string | undefined => {
    const m = head.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    return m ? m[1].trim() : undefined;
  };

  const candidate = {
    name: get('name'),
    description: get('description'),
    version: get('version'),
    author: get('author'),
    license: get('license'),
    category: get('category'),
    integrations: parseInlineArray(get('integrations') ?? ''),
    runtimes: parseInlineArray(get('runtimes') ?? ''),
    boundary: get('boundary'),
    tags: parseInlineArray(get('tags') ?? ''),
  };

  const parsed = botFrontmatterSchema.parse(candidate);

  // Imported bots carry the upstream licence in full, which on some listings is
  // longer than the prompt itself. Split it off so a copy stays paste-ready:
  // the notice belongs on the page and in the raw file, not in the user's bot.
  const split = body.search(/^#{2,3}\s*(License and attribution|Licence and attribution|License|Attribution)\s*$/m);
  const prompt = (split === -1 ? body : body.slice(0, split)).trim();
  const attribution = split === -1 ? undefined : body.slice(split).trim();

  return { ...parsed, slug, prompt, attribution };
}

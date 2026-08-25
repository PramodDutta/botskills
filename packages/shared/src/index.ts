import { z } from 'zod';

// ---- Taxonomy (mirrors docs/PLAN.md section 4) ----

export const CATEGORIES = [
  { id: 'productivity', name: 'Productivity' },
  { id: 'sales', name: 'Sales' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'ops', name: 'Ops' },
  { id: 'success', name: 'Success' },
  { id: 'personal', name: 'Personal' },
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
  /** Full markdown body after frontmatter: the paste-ready setup prompt. */
  prompt: string;
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
  return { ...parsed, slug, prompt: body.trim() };
}

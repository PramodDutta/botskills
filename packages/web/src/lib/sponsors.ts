// Sponsor inventory. P0: file-based; P1: sponsors table fed by Polar webhooks.
//
// Three states, and the distinction is the whole point of running ads on a
// directory that sells trust:
//   demo     - FICTIONAL brand, shows how sold inventory looks, tagged "demo"
//   featured - REAL project we rate, linked for free, tagged "free pick"
//   sponsor  - REAL paid booking (none yet), untagged
// Never present a real project as though it bought the slot, and never let the
// "slots taken" counter include anything but paid bookings.
//
// Featured links are ordinary follow links on purpose. rel="sponsored" is for
// paid placement; these are unpaid picks, so the traffic and the link equity
// are real. Demo entries stay nofollow because the brands do not exist.

export type SponsorKind = 'demo' | 'featured' | 'sponsor';

export interface Sponsor {
  id: string;
  name: string;
  line: string;
  cta: string;
  url: string;
  kind: SponsorKind;
  slot?: boolean;
  /** @deprecated read `kind` instead; kept so existing components compile */
  demo: boolean;
}

/**
 * Featured links carry UTM tags so the projects we send traffic to can see it in
 * their own analytics. Without them the visit lands as an unattributed referral
 * and the free traffic is invisible to the person receiving it.
 */
function utm(url: string, id: string): string {
  if (url.startsWith('/')) return url;
  const u = new URL(url);
  u.searchParams.set('utm_source', 'botskills.sh');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', `free-pick-${id}`);
  return u.toString();
}

function featured(id: string, name: string, line: string, cta: string, url: string): Sponsor {
  return { id, name, line, cta, url: utm(url, id), kind: 'featured', demo: false };
}
function demo(id: string, name: string, line: string, cta: string): Sponsor {
  return { id, name, line, cta, url: '/sponsor', kind: 'demo', demo: true };
}
function openSlot(id: string, line: string): Sponsor {
  return { id, name: 'Your tool here', line, cta: 'Book this slot', url: '/sponsor', kind: 'sponsor', slot: true, demo: false };
}

export const RAIL_CAP = 8;
export const MARQUEE_CAP = 8;

export const railSponsors: Sponsor[] = [
  featured('f1', 'QASkills.sh', 'QA skills your coding agent can install in one command.', 'Browse skills', 'https://qaskills.sh'),
  featured('f2', 'Rakazo', 'Open-source, self-hosted runtime for the bots in this directory.', 'View the repo', 'https://github.com/elie222/rakazo'),
  featured('f3', 'botdirectory.ai', 'Where most of this catalogue came from, MIT licensed.', 'Visit', 'https://botdirectory.ai'),
  openSlot('s1', 'A card in this rail, visible the whole scroll.'),
];

export const marqueeSponsors: Sponsor[] = [
  featured('m1', 'QASkills.sh', '', '', 'https://qaskills.sh'),
  featured('m2', 'Rakazo', '', '', 'https://github.com/elie222/rakazo'),
  featured('m3', 'OpenMausBot', '', '', 'https://github.com/milind-soni/OpenMausBot'),
  featured('m4', 'EvalDog', '', '', 'https://evaldog.com'),
  featured('m5', 'botdirectory.ai', '', '', 'https://botdirectory.ai'),
  demo('m6', 'Notewheel', '', ''),
];

export const edgeSponsors: Sponsor[] = [
  featured('e1', 'QASkills.sh', 'Installable QA skills for coding agents.', 'Browse', 'https://qaskills.sh'),
  featured('e2', 'Rakazo', 'Self-host the runtime, own the credentials.', 'Repo', 'https://github.com/elie222/rakazo'),
  featured('e3', 'OpenMausBot', 'Apache-2.0 desktop alternative with portable teams.', 'Repo', 'https://github.com/milind-soni/OpenMausBot'),
  featured('e4', 'EvalDog', 'Evals for the prompts your bots run on.', 'Try it', 'https://evaldog.com'),
  featured('e5', 'botdirectory.ai', 'The original Grok Bot directory.', 'Visit', 'https://botdirectory.ai'),
  openSlot('e6', 'Edge card on every page.'),
];

/** Paid bookings only. A scarcity counter that counts free picks is a lie. */
export function paidCount(list: Sponsor[]): number {
  return list.filter((s) => s.kind === 'sponsor' && !s.slot).length;
}

// Kept as named helpers because the components read them directly. Both count
// paid bookings only, which is why they currently return zero and the site says
// so rather than inventing scarcity.
export const railTaken = () => paidCount(railSponsors);
export const marqueeTaken = () => paidCount(marqueeSponsors);
export const edgeTaken = () => paidCount(edgeSponsors);

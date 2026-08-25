// Sponsor inventory. P0: file-based; P1: sponsors table fed by Polar webhooks.
// Demo entries are FICTIONAL brands that show how sold inventory looks; each
// renders with a small "demo" tag and is replaced when a real sponsor books.
// Never list a real company that has not bought the slot.

export interface Sponsor {
  id: string;
  name: string;
  line: string;
  cta: string;
  url: string;
  demo: boolean;
  slot?: boolean;
}

export const RAIL_CAP = 8;
export const MARQUEE_CAP = 8;

export const railSponsors: Sponsor[] = [
  { id: 'd1', name: 'Mailgrove', line: 'Warm up inboxes before your bot ever sends.', cta: 'Start free', url: '/sponsor', demo: true },
  { id: 'd2', name: 'Quotaboard', line: 'Pipeline dashboards your Lead Scout can write to.', cta: 'See a demo', url: '/sponsor', demo: true },
  { id: 'd3', name: 'Deskhawk', line: 'Ticket triage that plays nicely with bot drafts.', cta: 'Try Deskhawk', url: '/sponsor', demo: true },
  { id: 's1', name: 'Your tool here', line: 'A card in this rail, visible the whole scroll.', cta: 'Book this slot', url: '/sponsor', demo: false, slot: true },
];

export const marqueeSponsors: Sponsor[] = [
  { id: 'm1', name: 'Mailgrove', line: '', cta: '', url: '/sponsor', demo: true },
  { id: 'm2', name: 'Quotaboard', line: '', cta: '', url: '/sponsor', demo: true },
  { id: 'm3', name: 'Deskhawk', line: '', cta: '', url: '/sponsor', demo: true },
  { id: 'm4', name: 'Formlark', line: '', cta: '', url: '/sponsor', demo: true },
  { id: 'm5', name: 'Notewheel', line: '', cta: '', url: '/sponsor', demo: true },
];

export function railTaken(): number {
  return railSponsors.filter((s) => !s.slot && !s.demo).length;
}
export function marqueeTaken(): number {
  return marqueeSponsors.filter((s) => !s.demo).length;
}

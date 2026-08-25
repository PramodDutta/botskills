// Sponsor inventory. P0: file-based placeholders; P1: read from the sponsors
// table fed by Polar webhooks (docs/SYSTEMS.md section 2). Every entry here is
// a designed placeholder until a real sponsor books; never list a company that
// has not bought the slot.

export interface Sponsor {
  id: string;
  name: string;
  line: string;
  cta: string;
  url: string;
  placeholder: boolean;
}

export const RAIL_CAP = 8;
export const MARQUEE_CAP = 8;

export const railSponsors: Sponsor[] = [
  {
    id: 'slot-1',
    name: 'Your tool here',
    line: 'Reach people setting up Grok bots right now.',
    cta: 'Book this slot',
    url: '/sponsor',
    placeholder: true,
  },
  {
    id: 'slot-2',
    name: 'Your tool here',
    line: 'A card in the rail beside the leaderboard, visible the whole scroll.',
    cta: 'Book this slot',
    url: '/sponsor',
    placeholder: true,
  },
];

export const marqueeSponsors: Sponsor[] = [];

export function railOpenCount(): number {
  return RAIL_CAP - railSponsors.filter((s) => !s.placeholder).length;
}
export function marqueeOpenCount(): number {
  return MARQUEE_CAP - marqueeSponsors.filter((s) => !s.placeholder).length;
}

import Link from 'next/link';
import { postList } from './posts';

export const metadata = {
  title: { absolute: `Grok Bot Guides: ${postList.length} Setup, Pricing and Troubleshooting Articles` },
  description: `${postList.length} articles on running Grok Bot and Rakazo setups: pricing and plans, troubleshooting, integrations, charters and boundaries, all checked against the docs.`,
  alternates: { canonical: 'https://botskills.sh/blog' },
};

// Grouping beats a flat list once the corpus is large: it gives every article an
// inbound link from a topical cluster instead of burying older posts at the bottom.
const ORDER = [
  'Guide',
  'Tutorial',
  'Reference',
  'Safety',
  'Comparison',
  'Playbook',
  'Migration',
  'Announcement',
];

function anchor(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export default function BlogPage() {
  const groups = new Map<string, typeof postList>();
  for (const p of postList) {
    const list = groups.get(p.category) ?? [];
    list.push(p);
    groups.set(p.category, list);
  }

  const categories = [...groups.keys()].sort((a, b) => {
    const ai = ORDER.indexOf(a);
    const bi = ORDER.indexOf(b);
    return (ai === -1 ? ORDER.length : ai) - (bi === -1 ? ORDER.length : bi);
  });

  return (
    <main className="wrap detail">
      <h1>Blog</h1>
      <p className="ds">
        {postList.length} articles on running bots that other people can trust.
        Jump to{' '}
        {categories.map((c, i) => (
          <span key={c}>
            {i > 0 ? ', ' : ''}
            <a href={`#${anchor(c)}`}>{c.toLowerCase()}</a>
          </span>
        ))}
        .
      </p>

      {categories.map((category) => (
        <section key={category}>
          <h2 id={anchor(category)}>{category}</h2>
          {groups.get(category)!.map((p) => (
            <p key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="nm">
                {p.title}
              </Link>
              <br />
              <span className="ds">
                {p.date} · {p.description}
              </span>
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}

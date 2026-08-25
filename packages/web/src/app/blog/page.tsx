import Link from 'next/link';
import { postList } from './posts';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <main className="wrap detail">
      <h1>Blog</h1>
      {postList.map((p) => (
        <p key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="nm">{p.title}</Link>
          <br />
          <span className="ds">{p.date} · {p.category} · {p.description}</span>
        </p>
      ))}
    </main>
  );
}

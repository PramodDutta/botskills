import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://botskills.sh'),
  title: { default: 'botskills.sh: Skills for Grok Bot & Rakazo', template: '%s | botskills.sh' },
  description:
    'Paste-ready bot setups for Grok Bot and Rakazo, ranked by verified copies. Every bot declares its integrations and the one thing it will never do without you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrap hrow">
            <Link href="/" className="logo">
              <span className="dot" />
              botskills<span className="tld">.sh</span>
            </Link>
            <nav>
              <Link href="/">Leaderboard</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/agents">API</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="wrap">
            botskills.sh · skills for Grok Bot &amp; Rakazo · <Link href="/agents">built to be read by bots</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

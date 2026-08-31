import type { Metadata } from 'next';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { EdgeRails } from '@/components/edge-rails';
import './globals.css';

// Both are optional so the build succeeds with neither set, which is how every
// external client in this app is wired. Set them in Vercel and redeploy.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_TOKEN = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL('https://botskills.sh'),
  ...(GSC_TOKEN ? { verification: { google: GSC_TOKEN } } : {}),
  title: { default: 'Grok Bot Skills Directory | botskills.sh', template: '%s | botskills.sh' },
  description:
    'The go-to directory for Grok bot skills: paste-ready Grok Bot and Rakazo setups ranked by copies, each declaring the one thing it never does without you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://botskills.sh/#org',
                  name: 'botskills.sh',
                  url: 'https://botskills.sh',
                  logo: 'https://botskills.sh/icon.svg',
                },
                {
                  '@type': 'WebSite',
                  name: 'botskills.sh',
                  url: 'https://botskills.sh',
                  publisher: { '@id': 'https://botskills.sh/#org' },
                },
              ],
            }),
          }}
        />
        <header className="site-header">
          <div className="wrap hrow">
            <Link href="/" className="logo">
              <span className="dot" />
              botskills<span className="tld">.sh</span>
            </Link>
            <nav>
              <Link href="/">Leaderboard</Link>
              <Link href="/grok-bot">Grok Bot</Link>
              <Link href="/rakazo">Rakazo</Link>
              <Link href="/bots">Bots</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/sponsor">Sponsor</Link>
              <Link href="/agents">API</Link>
            </nav>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <ThemeToggle />
              <Link className="cta" href="/agents">+ Add a bot</Link>
            </span>
          </div>
        </header>
        <EdgeRails />
        {children}
        <footer className="site-footer">
          <div className="wrap">
            <div className="cols">
              <div className="col">
                <b>botskills.sh</b>
                <span>Grok bot skills, plus Rakazo</span>
                <span>Independent. Not affiliated with xAI.</span>
                <span>© 2026</span>
              </div>
              <div className="col">
                <b>Browse</b>
                <Link href="/">Leaderboard</Link>
                <Link href="/bots">All bots</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/grok-bot-facts">Fact check</Link>
              </div>
              <div className="col">
                <b>Build</b>
                <Link href="/agents">Add a bot</Link>
                <Link href="/agents">API docs</Link>
                <Link href="/sponsor">Sponsor</Link>
                <Link href="/contact">Contact</Link>
                <a href="https://github.com/PramodDutta/botskills">GitHub</a>
              </div>
              <div className="col">
                <b>API</b>
                <Link href="/api/bots">/api/bots</Link>
                <Link href="/llms.txt">llms.txt</Link>
                <Link href="/sponsor">Sponsor</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

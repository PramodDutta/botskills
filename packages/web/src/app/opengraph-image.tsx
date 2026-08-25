import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'botskills.sh: the Grok Bot skills directory';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b0e12',
          color: '#e8edf2',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', width: 72, height: 72, borderRadius: 16, background: '#171c24', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 14, top: 18, width: 14, height: 14, borderRadius: 4, background: '#f0a63b' }} />
            <div style={{ position: 'absolute', right: 14, top: 18, width: 14, height: 14, borderRadius: 4, background: '#f0a63b' }} />
            <div style={{ position: 'absolute', left: 14, bottom: 14, width: 26, height: 9, borderRadius: 4, background: '#f0a63b' }} />
          </div>
          <div style={{ display: 'flex', fontSize: 54, fontWeight: 700 }}>
            botskills<span style={{ color: '#8b97a3' }}>.sh</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 40, marginTop: 40, color: '#e8edf2' }}>
          The Grok Bot skills directory
        </div>
        <div style={{ display: 'flex', fontSize: 26, marginTop: 18, color: '#8b97a3' }}>
          Paste-ready bot skills, ranked by copies. Every bot declares its boundary.
        </div>
      </div>
    ),
    size,
  );
}

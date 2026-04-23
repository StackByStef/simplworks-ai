import { ImageResponse } from 'next/og';

/**
 * Open Graph / social preview image — 1200×630.
 * Next.js auto-wires og:image, og:image:width, og:image:height,
 * og:image:alt, and twitter:image when this file exists. Do NOT
 * also declare metadata.openGraph.images in layout.js — that
 * creates duplicate tags.
 */

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt =
  'SimplWorks — Custom Websites Built by Hand | Knoxville, Tennessee';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 140,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'baseline',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#ffffff' }}>Simpl</span>
          <span style={{ color: '#e3c571' }}>Works</span>
          <span style={{ color: '#ffffff' }}>.</span>
        </div>
        <div
          style={{
            fontSize: 44,
            color: '#b4b4b4',
            marginTop: 40,
            textAlign: 'center',
          }}
        >
          Custom Websites Built by Hand
        </div>
        <div
          style={{
            fontSize: 22,
            color: '#888888',
            marginTop: 48,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Knoxville, Tennessee
        </div>
      </div>
    ),
    { ...size }
  );
}

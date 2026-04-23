import { ImageResponse } from 'next/og';

/**
 * Apple touch icon — 180×180 for iOS home screen.
 * Next.js auto-generates the <link rel="apple-touch-icon"> tag.
 */

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          color: '#e3c571',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 110,
          fontWeight: 700,
          letterSpacing: '-0.05em',
        }}
      >
        S.
      </div>
    ),
    { ...size }
  );
}

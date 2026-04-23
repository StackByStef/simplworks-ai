import { ImageResponse } from 'next/og';

/**
 * Favicon — generated at build via Next.js ImageResponse.
 * Black background + gold "S." monogram. 32×32 default.
 * Next.js auto-generates the <link rel="icon"> tag in <head>.
 */

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 22,
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

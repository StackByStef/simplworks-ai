import { Plus_Jakarta_Sans, Lato, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-wordmark',
  display: 'swap',
});

const DESCRIPTION =
  'SimplWorks builds custom websites by hand, one at a time. Coded from scratch by Stephanie Belote with SEO, AEO, and GEO built in. Knoxville, TN. Delivered in about a week.';

export const metadata = {
  metadataBase: new URL('https://simplworks.ai'),
  title: 'SimplWorks — Custom Websites Built by Hand | Knoxville, TN',
  description: DESCRIPTION,
  keywords: [
    'custom website design',
    'handbuilt websites',
    'AI-optimized websites',
    'SEO',
    'AEO',
    'GEO',
    'Knoxville web designer',
    'Tennessee web designer',
    'conversion websites',
    'SimplWorks',
    'Stephanie Belote',
    'friction audit',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SimplWorks — Custom Websites Built by Hand',
    description: DESCRIPTION,
    url: '/',
    siteName: 'SimplWorks',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SimplWorks — custom websites built by hand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimplWorks — Custom Websites Built by Hand',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${lato.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2QP0NN6B5X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2QP0NN6B5X');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Silence 404s from browser-default icon-path requests.
  // Chrome + iOS Safari hardcode these fallbacks even when explicit
  // <link rel="icon"> tags are present. Route them to the generated icons.
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/icon' },
      { source: '/apple-touch-icon.png', destination: '/apple-icon' },
      { source: '/apple-touch-icon-precomposed.png', destination: '/apple-icon' },
    ];
  },
};

export default nextConfig;

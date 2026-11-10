import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Itoby Infotech Pvt. Ltd.',
    short_name: 'Itoby Infotech',
    description: 'Premier website development company, custom software engineering & SaaS lab.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#003BA1',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

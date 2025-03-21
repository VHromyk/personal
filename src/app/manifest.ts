import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VH CV',
    short_name: 'VH CV',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/icons/pwa/192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/icons/pwa/512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

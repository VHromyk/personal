if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-4754cb34'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '86e26a3f47c5884b5fb82a99e135a1ef',
        },
        {
          url: '/_next/static/a5XOm0kB7ggpLSNezbI5M/_buildManifest.js',
          revision: '66a650a40453999ca40002ee32e3481e',
        },
        {
          url: '/_next/static/a5XOm0kB7ggpLSNezbI5M/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/130-f60fa47d31b41efd.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/281-23c07b395cec048c.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/596-d89e64ca0fd30dee.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/928-bbc05401ce0c249b.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/app/contacts/page-318eb2e1d3a92e38.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/app/layout-ba92eda7bccb62a9.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/app/not-found-a54e8a4d8447f5cf.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/app/page-6e33dfaecfdb1efa.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/app/projects/page-d57878f8cd98a3f9.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/fd9d1056-d99d35b4dbf96db0.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/framework-8883d1e9be70c3da.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/main-app-b592c8e73d4ab6a7.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/main-f8d94b2ca6f4808a.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/pages/_app-52924524f99094ab.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-952b7e14da055e7d.js',
          revision: 'a5XOm0kB7ggpLSNezbI5M',
        },
        {
          url: '/_next/static/css/94fe8b2f31ec59d6.css',
          revision: '94fe8b2f31ec59d6',
        },
        {
          url: '/_next/static/css/cd871ec759de0a26.css',
          revision: 'cd871ec759de0a26',
        },
        {
          url: '/_next/static/media/c44738e2d67c7de3-s.p.ttf',
          revision: '7b7a625024c0f39cbca2cf9674f51d94',
        },
        {
          url: '/assets/files/Vitalii_Hromyk_Frontend_dev_2025.pdf',
          revision: 'cddab49892dd76415eeaeaed1112fcee',
        },
        {
          url: '/assets/icons/pwa/192.png',
          revision: 'be97e04a33706cf7cba24243530a281d',
        },
        {
          url: '/assets/icons/pwa/512.png',
          revision: '09128455d4acf0063f63689582d5f5f8',
        },
        {
          url: '/assets/images/avatar.jpg',
          revision: 'bee539564516a1c1b666b81b0c6cec05',
        },
        {
          url: '/assets/images/cry.png',
          revision: '14b9fd82ac856e595f58f95935ee5569',
        },
        {
          url: '/assets/images/curve.png',
          revision: 'd944d4052a4612e342983f2e7d0f6144',
        },
        {
          url: '/assets/images/hi.png',
          revision: '812094e8b7b714562ab2ced8dd9f7278',
        },
        {
          url: '/assets/images/openGraph.jpg',
          revision: 'cb746374499c49be69a04e4953607f98',
        },
        {
          url: '/assets/images/projects/deltaLake.jpg',
          revision: '126414f26e7daa7e965b73c2ef172c95',
        },
        {
          url: '/assets/images/projects/dlc.png',
          revision: '059313b6331ecaaaf5db15669985e308',
        },
        {
          url: '/assets/images/projects/duelmasters.jpg',
          revision: 'c50d8bbe5d40eecbfaec2a70c2cdaeec',
        },
        {
          url: '/assets/images/projects/ecr.jpg',
          revision: '643218105bb10534b7f34375f11ec005',
        },
        {
          url: '/assets/images/projects/gitup.png',
          revision: '6826e968dd91292d17668c9eacc4e622',
        },
        {
          url: '/assets/images/projects/llm.jpg',
          revision: '6d59ba0f68550d067e11fdfb02a03fdf',
        },
        {
          url: '/assets/images/projects/solar.png',
          revision: '56971715673c33da9efa39aeb7bec7ef',
        },
        {
          url: '/assets/images/projects/thc.jpg',
          revision: '0c37075f12671aef47b507e1b25ca1ef',
        },
        {
          url: '/assets/images/projects/writesonic.jpg',
          revision: '5508a815e4050e423fbdfdadf6f876df',
        },
        {
          url: '/assets/images/wink.png',
          revision: '8635ffee9cac2538c8fc0e8163bb002a',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})

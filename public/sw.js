const CACHE_NAME = 'nicholasconnelly-box-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/images/IMG_0456.jpeg',
  '/images/IMG_2406.jpeg',
  '/images/IMG_4021.jpeg',
  '/images/IMG_4045.jpeg',
  '/images/IMG_6209.jpeg',
  '/images/20250306_162851_3B28E0.jpeg'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})

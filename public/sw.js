const CACHE_NAME = 'nicholasconnelly-box-v3'
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/images/nicholas-connelly-personal-photo.jpeg',
  '/images/the-nest-run-club-group-photo.jpeg',
  '/images/medical-mission-global-health.jpeg',
  '/images/community-building-health-promotion.jpeg',
  '/images/growing-community-leadership.jpeg',
  '/images/additional-community-service-work.jpeg'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => self.clients.claim())
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

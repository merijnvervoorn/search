const CACHE_NAME = 'merijn-dashboard-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/space-bg.webp',
  '/space-bg.gif',
  // Add your resized image names here
  '/planet-green.webp',
  '/planet-orange.webp',
  '/planet-red.webp',
  '/planet-purple.webp',
  '/satellite-yt.webp',
  '/satellite-netflix.webp',
  '/satellite-github.webp',
  '/satellite-inoreader.webp'
];

// Install: Cache everything
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Fetch: Serve from Cache first, then Network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
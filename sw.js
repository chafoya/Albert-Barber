// AlbertBarber Service Worker — v1.2
const CACHE = 'albertbarber-v1.2';
const ASSETS = [
  '/index.html',
  '/index_barbero.html',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest-admin.json',
  '/manifest-barbero.json'
];

// Instalar: cachear todos los archivos
self.addEventListener('install', e => {
  console.log('SW: Instalando v1.2...');
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activar: borrar caches viejos
self.addEventListener('activate', e => {
  console.log('SW: Activando v1.2...');
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first con fallback a red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});

// Service Worker v1.20
const CACHE_NAME = 'forge-radio-v43'; // Incremented to v36 to force Charles's phone to update

self.addEventListener('install', e => {
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => 
            Promise.all(
                keys
                    .filter(k => k !== CACHE_NAME)
                    .map(k => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);

    // 1. CRITICAL BYPASS: Do not save Live365 or dynamic audio chunks to the phone's cache database
    if (url.hostname.includes('live365.com') || url.pathname.match(/\.(mp3|m3u8|aac|ts)$/)) {
        e.respondWith(fetch(e.request, { cache: 'no-store' }));
        return;
    }

    // 2. KEEP ORIGINAL LOGIC: Continue caching standard website files (HTML, images, CSS)
    e.respondWith(
        fetch(e.request)
            .then(response => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                return response;
            })
            .catch(() => caches.match(e.request))
    );
});

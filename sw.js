// NutriFuel Service Worker - v3.3.0
const CACHE_NAME = 'nutrifuel-v3-3-0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png',
  './icon-167.png',
  './icon-152.png',
  // CDNs (cache para uso offline)
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

// Install — pré-cache de assets essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cacheia em paralelo, ignorando individuais que falhem
        return Promise.allSettled(
          ASSETS.map(url => 
            cache.add(url).catch(err => console.warn('SW: falha ao cachear', url, err))
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate — limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch — estratégia: cache first, fallback network, então atualiza cache
self.addEventListener('fetch', (event) => {
  // Só interfere em GETs
  if (event.request.method !== 'GET') return;
  
  // Ignora requests de outros domínios sem ser do CDN listado
  const url = new URL(event.request.url);
  const isFontsApi = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  const isCdn = url.hostname === 'cdnjs.cloudflare.com';
  const isSameOrigin = url.origin === self.location.origin;
  
  if (!isSameOrigin && !isFontsApi && !isCdn) return;
  
  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Se tem em cache, retorna mas atualiza em background
      if (cached) {
        // Update silencioso
        fetch(event.request).then(fresh => {
          if (fresh && fresh.ok) {
            caches.open(CACHE_NAME).then(c => c.put(event.request, fresh.clone()));
          }
        }).catch(() => {});
        return cached;
      }
      
      // Não está em cache → busca da rede e cacheia
      return fetch(event.request).then((response) => {
        if (!response || !response.ok) return response;
        
        const clone = response.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline e não está em cache: retorna página principal se for navegação
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

// Mensagem do app (skipWaiting)
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

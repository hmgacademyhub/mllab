// ML Lab service worker
// Author: Adewale Samson Adeagbo / HMG Concepts
// Purpose: Free offline-first caching for static deployment. No AI API, no backend.
const CACHE_NAME = 'ml-lab-enterprise-v4-5-0';
const ASSETS = [
  './',
  './index.html',
  './README.md',
  './Deployment.md',
  './package.json',
  './manifest.webmanifest',
  './ABOUT_ADEWALE_HMG.md',
  './CURRICULUM.md',
  './CHANGELOG.md',
  './author.json',
  './icon.svg',
  './DATA_GOVERNANCE.md',
  './SUPPORT.md',
  './SECURITY.md',
  './CODE_OF_CONDUCT.md',
  './CONTRIBUTING.md',
  './FREE_TOOL_STACK.md',
  './NO_AI_API_POLICY.md',
  './FEATURE_CATALOG.md',
  './ENTERPRISE_DEPLOYMENT.md',
  './_headers',
  './sitemap.xml',
  './robots.txt'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});

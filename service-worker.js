self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('kasu').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/kasu.min.css',
        '/manifest.json',
        '/font-awesome/css/font-awesome.min.css',
        '/font-awesome/fonts/fontawesome-webfont.ttf',
        '/font-awesome/fonts/fontawesome-webfont.eot',
        '/font-awesome/fonts/fontawesome-webfont.woff',
        '/font-awesome/fonts/fontawesome-webfont.svg',
        '/font-awesome/fonts/FontAwesome.otf',
        '/scripts/jquery.min.js',
        '/scripts/bootstrap.min.js',
        '/scripts/material.min.js',
        '/scripts/ripples.min.js',
        '/scripts/main.js',
        '/images/banner.jpg',
        '/images/header.jpg',
        '/images/dreams-preview.png',
        '/images/dreams.png',
        '/images/escape-preview.png',
        '/images/golden-preview.png',
        '/images/roundicons-free.png',
        '/images/roundicons.png',
        '/images/startup-framework-preview.png',
        '/images/startup-framework.png',
        '/images/treehouse-preview.png',
        '/images/treehouse.png',
        '/images/about/1.jpg',
        '/images/about/2.jpg',
        '/images/about/3.jpg',
        '/images/about/4.jpg',
        '/images/about/5.jpg',
        '/images/about/6.png',
        '/images/logos/apple-touch-icon-60x60.png',
        '/images/touch/apple-touch-icon.png',
        '/images/touch/kasu144x144.png',
        '/images/touch/kasu152x152.png',
        '/images/touch/kasu192x192.png',
        '/images/touch/kasu72x72.png/',
        '/images/touch/ms-touch-icon-144x144-precomposed.png',
        '/images/team/masb.jpg',
        '/images/team/nelson.jpg',
        '/images/team/3.jpg',
        '/images/team/umar.jpg',
        '/images/team/riwan.jpg.jpg',
        '/images/team/kenneth.jpg',
        '/images/team/Khadija.jpg',
        '/images/team/babalola.jpg.jpg',
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
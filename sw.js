

// On install - caching the application shell and additional paths
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      // Cache the application shell (index.html) and additional paths
      return cache.addAll([
        'index.html',
        '1.html',
        '9alawa.html',
        'daimo.png',
        'doros.html',
        'fileList.json',
        'index-2.html',
        'index.js',
        'LICENSE',
        'list.png',
        'listFiles.js',
        'manifest.json',
        'package-lock.json',
        'package.json',
        'page doros',
        'Page2.html',
        'README.md',
        'school.png',
        'sw.js',
        'test.html',
        'wataniyat folder'
        // Add more paths here as needed
      ]);
    })
  );
});

// On network request
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // If response found, return it; else, fetch again
      return response || fetch(event.request);
    })
  );
});

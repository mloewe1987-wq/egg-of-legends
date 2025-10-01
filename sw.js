self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("egg-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json"
        // hier kannst du später CSS/JS/Icons hinzufügen
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

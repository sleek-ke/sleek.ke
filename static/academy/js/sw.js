const version = "v1",
  index = "/offline.html";
this.addEventListener("install", (e) => {
  this.skipWaiting(),
    e.waitUntil(caches.open(version).then((e) => e.addAll([index])));
}),
  this.addEventListener("fetch", (t) => {
    t.respondWith(
      caches
        .match(t.request)
        .then((e) => e || fetch(t.request))
        .catch(() => caches.match(index))
    );
  });

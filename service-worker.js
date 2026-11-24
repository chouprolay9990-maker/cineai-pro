const CACHE_NAME = "cineai-pro-v2";

const FILES_TO_CACHE = [
"./",
"./index.html",
"./create.html",
"./voice.html",
"./subtitle.html",
"./translate.html",
"./export.html",
"./pro.html",
"./projects.html",
"./studio.html",
"./style.css",
"./script.js",
"./manifest.json",
"./icon.svg"
];

// Install and cache app files
self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(FILES_TO_CACHE);
})
);

self.skipWaiting();
});

// Remove old caches
self.addEventListener("activate", event => {
event.waitUntil(
caches.keys().then(keys => {
return Promise.all(
keys.map(key => {
if (key !== CACHE_NAME) {
return caches.delete(key);
}
})
);
})
);

self.clients.claim();
});

// Network first, then cache
self.addEventListener("fetch", event => {
if (event.request.method !== "GET") return;

event.respondWith(
fetch(event.request)
.then(response => {
if (response && response.status === 200) {
const copy = response.clone();

      caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, copy);
      });
    }

    return response;
  })
  .catch(() => {
    return caches.match(event.request).then(cached => {
      return cached || caches.match("./index.html");
    });
  })

);
});
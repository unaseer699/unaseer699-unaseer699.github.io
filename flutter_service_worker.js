'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9a1e9dcf4c99a0ec62ff872294ddeb89",
"assets/assets/icons/1.png": "6c5fb5c8f505959ed4448f19c5fda6c4",
"assets/assets/icons/2.png": "6be20776f67ac64cbfdd498693e26db4",
"assets/assets/icons/3.png": "f415a0e1d8d1e9e9372f87a54616b9e2",
"assets/assets/icons/4.png": "4a6765b4c07785069d26773d86045125",
"assets/assets/icons/5.png": "95d15c78f5d7738ee709871aa45f2143",
"assets/assets/icons/6.png": "271472cd1a5a112759711e71c13908e2",
"assets/assets/icons/7.png": "66ec6d1d41621ee38b1b00e0787cb127",
"assets/assets/icons/8.png": "6be20776f67ac64cbfdd498693e26db4",
"assets/assets/icons/apple.svg": "3aff263a6faeb1f9c7ba28cf7f934bc3",
"assets/assets/icons/comp.png": "d3b95707cc6922e22fdd090ce592fb33",
"assets/assets/icons/delete.svg": "1a0e6fc33ebef202e467f0e2385b3d02",
"assets/assets/icons/drafts.svg": "debedb78bab0baa0894f51c54ddde44b",
"assets/assets/icons/gmail.svg": "7280241ab9d1a3ad1bb51e687364524d",
"assets/assets/icons/Group15.png": "642e1a11b2e1ccfac1488bd0ca4d1815",
"assets/assets/icons/home.png": "76bfd51e9fcfd25fed685a55cff7c29c",
"assets/assets/icons/home.svg": "c02f5b8d95b05fd8c859904e97e29a8c",
"assets/assets/icons/logo.png": "5d67a050995e8b97b595e74fd53c8722",
"assets/assets/icons/Rectangle%2520335%2520(1).png": "f415a0e1d8d1e9e9372f87a54616b9e2",
"assets/assets/icons/send.svg": "8c0c179fdd6e38abfa3054b8023232c8",
"assets/assets/icons/sent.png": "e04b8d3accfd63e1a94876f56b8b479f",
"assets/assets/icons/sol.svg": "691c94e2320bf21014adab27b365974d",
"assets/assets/icons/Vectorsss.png": "166631e6488f15c2faa00f7038e29b07",
"assets/assets/images/Logo-Wrex%25201.png": "b4b880d63a905baf445d53ebea96e29f",
"assets/assets/images/logoapp.png": "7356b2f2ec79d34c9c5134cb962e887f",
"assets/assets/images/market.png": "52901579e0083fd34a6ab9e5cbe9f6d1",
"assets/assets/images/market1.png": "d90b08b411f686f6cd76a69e699f9f79",
"assets/assets/images/sol.png": "f8e9228faaa2cc8c243169e37632af4d",
"assets/assets/images/Solanart%25201.png": "f8e9228faaa2cc8c243169e37632af4d",
"assets/assets/images/solanartimg.png": "c949ab290062c3eca5dda436de3f3957",
"assets/assets/images/solicon.png": "4d8ffa74bb17d8fc244a58bb5121b185",
"assets/assets/images/swlogo.png": "e61378309649fb6e62f03ab18c4bdf6b",
"assets/assets/images/Vector%2520(8).png": "9d7bd01bb60a7c97eeb9b43a3b93599a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d92720123b5fb47c029db148a8015c05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba00d0f75a95b1d9fd3559a1ac88138e",
"/": "ba00d0f75a95b1d9fd3559a1ac88138e",
"main.dart.js": "7554f3ced25d90a3288161e5ca7639a1",
"manifest.json": "62a852a5b5c215c348055c818b502f8d",
"version.json": "c2d621b82700be290d8f8c203f2e90b2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

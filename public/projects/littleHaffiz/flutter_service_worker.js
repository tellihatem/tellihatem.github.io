'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e8d7b6884984763ebca9b27f36421ad4",
"assets/AssetManifest.bin.json": "207ddea86c4efc09d893814d7344a8eb",
"assets/AssetManifest.json": "2dff3bb2b0c217960c2ab22385031fdd",
"assets/assets/audio/timings.json": "b81b636e88dc8832167ca6cbe336eb80",
"assets/assets/background/background.png": "94d04c7603360b588ee0385bf4956440",
"assets/assets/background/background_dark.png": "89c0deebda85d44c958737017b288470",
"assets/assets/cards/locked.png": "d5fc113a8d3d21c9e1b1ef02bfc2797a",
"assets/assets/cards/star_mid.png": "ee18a2e1d32d2e99a0d613368b78d99e",
"assets/assets/cards/star_mid_success.png": "bc7856375afd788646e73c9701315961",
"assets/assets/cards/star_side.png": "cb7d974c0fddb710b5ee4dd017a98665",
"assets/assets/cards/star_side_success.png": "17baf3f2ae6c59c1113aeea0c3fc95e2",
"assets/assets/cards/unlocked.png": "ffee79591d55978d444846181a3bc524",
"assets/assets/font/warash.ttf": "3ec8f32ff3c9238d9361647d6e93e0eb",
"assets/assets/games/answer_big.png": "78f91e1549ac59c0c4a2be771d5fddfa",
"assets/assets/games/answer_small_small.png": "46e8da4ca743c07bd508eebfd8ea4eb5",
"assets/assets/games/ayah_order.png": "91f7482538a3884b70b996ac1b29c27a",
"assets/assets/games/ayah_order_big.png": "2a28c0ad32f50d8db21b4f27f1e88757",
"assets/assets/games/button_big.png": "8523a844aa4e48581459a944acce58eb",
"assets/assets/games/button_small.png": "ccbe0f18ac0920690f090bb7927f071e",
"assets/assets/games/correct_answer.png": "37c48d63c1b7da30f6e1e90b99f7b908",
"assets/assets/games/correct_answer_big.png": "2c1c86328cd0a7668bfcd6e35e9ddb85",
"assets/assets/games/correct_background.png": "d4526e1a4eae517e6d8a8e70aee70d09",
"assets/assets/games/correct_background_big.png": "2e8a9e7da1ff48c39a5fd7c20a5ad3e8",
"assets/assets/games/correct_small.png": "4e3ba0a315017b2db7e28dc8127c7d48",
"assets/assets/games/loss_result.png": "4a3e096361a2510f783c6843fdf18d0e",
"assets/assets/games/loss_result_big.png": "080a5024681bd0e633d2ac99dd0fb9e7",
"assets/assets/games/memory_game.png": "37af635fa6867885af63a365b4db6098",
"assets/assets/games/memory_game_big.png": "607121e4f564176d598ddedbf2467812",
"assets/assets/games/next.png": "6b9eac35597faca0538017d9953937f6",
"assets/assets/games/next_big.png": "fd3dcdff1c3251895d78ddfd19fa93c4",
"assets/assets/games/question_big.png": "1ca9571324bda0e294b73f5720777609",
"assets/assets/games/question_small_small.png": "a9bdc55c7053040867d8abf87b13ea13",
"assets/assets/games/retry.png": "68f0dc2b709d2cb77179205d2d40e84c",
"assets/assets/games/retry_big.png": "d3b6ccd00641efeab05122c10bb369d9",
"assets/assets/games/win_result.png": "be6f4f2720e4119db52b289637dd7df4",
"assets/assets/games/win_result_big.png": "3fb72be2e3c18f2a131a0b5b656a09db",
"assets/assets/games/wrong_background.png": "1583f6b41633fd20e9201253c6c96914",
"assets/assets/games/wrong_background_big.png": "15a31ad051952a9a89e8d4cb294c470a",
"assets/assets/games/wrong_small.png": "66b1ab67f860d8f4edf538d219841fe0",
"assets/assets/hafiz/score.svg": "2d2c32e03858089cae1dc2c960527072",
"assets/FontManifest.json": "255eb37cb8369f88419624b3f2f09052",
"assets/fonts/MaterialIcons-Regular.otf": "693142ac910b625ab8e149ca55ee3965",
"assets/NOTICES": "381d1620a22df77f33f50ac75aaf4e5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f6ab6a1da283967e0aa926b28be9ba3e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0957d8d4b733d66987b04ffb2814ff2",
"/": "e0957d8d4b733d66987b04ffb2814ff2",
"main.dart.js": "7f51c058f7258a2cee1d6d3affb4c586",
"manifest.json": "4c361a1b7893d3a8d4b055a6369abc7f",
"version.json": "45ce263a834213f27a442dc91cb8e0cf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

importScripts('//workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/0cc577f648a8423a38a2.js",
    "revision": "9aeb4630bd77989763d3a2fd591e4b1d"
  },
  {
    "url": "/1308d788cdcd8c6561d9.js",
    "revision": "84bb2a641f8d7404b8a145dd64e74d97"
  },
  {
    "url": "/2314a5247bd5c488b27a.js",
    "revision": "7ab1bfca83a29b6d3222a43e96f4f525"
  },
  {
    "url": "/302746a5bb68002c9524.js",
    "revision": "5fc498ecce97c68ec035471b16dbe468"
  },
  {
    "url": "/456cbfbf62b381737ee2.js",
    "revision": "d9cdf095e2b2c1c945d161681d542d39"
  },
  {
    "url": "/512fd22457db6c560d53.js",
    "revision": "6c59acc3bcfd4494f09269baad5ace65"
  },
  {
    "url": "/6a522539b6863e9e3711.js",
    "revision": "5589b36c1e0f3573640725ad58b68f07"
  },
  {
    "url": "/7fc262383ce04ee633ad.js",
    "revision": "11236ea6fb7ef4978143df0694ea62c3"
  },
  {
    "url": "/947da8f7c27d7c4b6909.js",
    "revision": "140c1ef16ffe1a4e068bb17a3bf11e70"
  },
  {
    "url": "/9b1cb60d69b6fa19ceb1.js",
    "revision": "b14934cc9c6852f7c65656fda2abc5d6"
  },
  {
    "url": "/b095807db4eb7a8dadc1.js",
    "revision": "4a42ac704c2a39e05deef00ccd102928"
  },
  {
    "url": "/b3327f4c29c5a23fb5d9.js",
    "revision": "9566c031c56e7b0cb9a19b2e1656efd1"
  },
  {
    "url": "/ba4a31e156413073c4c4.js",
    "revision": "ce12eedba31271a267df76c73ec1d6ec"
  },
  {
    "url": "/d9996500fe9d01229328.js",
    "revision": "589952fbd3ad67917bbc740ffca6a415"
  },
  {
    "url": "/db6bbe2b82d200c8791b.js",
    "revision": "bc3c86867ad77817c230893aa30bf1be"
  }
], {
  "cacheId": "sindy-nuxt-web",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('//.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

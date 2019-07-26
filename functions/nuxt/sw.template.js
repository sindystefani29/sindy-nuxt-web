importScripts('//workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([], {
  "cacheId": "sindy-nuxt-web",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('//.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _af1a3270 = () => interopDefault(import('..\\..\\pages\\auth0.vue' /* webpackChunkName: "pages_auth0" */))
const _624a26b5 = () => interopDefault(import('..\\..\\pages\\callback.vue' /* webpackChunkName: "pages_callback" */))
const _597bdee0 = () => interopDefault(import('..\\..\\pages\\logged-in.vue' /* webpackChunkName: "pages_logged-in" */))
const _6009254a = () => interopDefault(import('..\\..\\pages\\login-firebase.vue' /* webpackChunkName: "pages_login-firebase" */))
const _020e894e = () => interopDefault(import('..\\..\\pages\\zomato\\index.vue' /* webpackChunkName: "pages_zomato_index" */))
const _1876cc5e = () => interopDefault(import('..\\..\\pages\\zomato\\result.vue' /* webpackChunkName: "pages_zomato_result" */))
const _23e28312 = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/auth0",
      component: _af1a3270,
      name: "auth0"
    }, {
      path: "/callback",
      component: _624a26b5,
      name: "callback"
    }, {
      path: "/logged-in",
      component: _597bdee0,
      name: "logged-in"
    }, {
      path: "/login-firebase",
      component: _6009254a,
      name: "login-firebase"
    }, {
      path: "/zomato",
      component: _020e894e,
      name: "zomato"
    }, {
      path: "/zomato/result",
      component: _1876cc5e,
      name: "zomato-result"
    }, {
      path: "/",
      component: _23e28312,
      name: "index"
    }],

    fallback: false
  })
}

import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _465b1487 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _71a44aca = () => interopDefault(import('../pages/userlogin.vue' /* webpackChunkName: "pages/userlogin" */))
const _6b5e230f = () => interopDefault(import('../pages/wxamp.vue' /* webpackChunkName: "pages/wxamp" */))
const _1ddc45b3 = () => interopDefault(import('../pages/User/management.vue' /* webpackChunkName: "pages/User/management" */))
const _2f72be2c = () => interopDefault(import('../pages/User/profile/index.vue' /* webpackChunkName: "pages/User/profile/index" */))
const _56954a62 = () => interopDefault(import('../pages/User/publish.vue' /* webpackChunkName: "pages/User/publish" */))
const _5affe804 = () => interopDefault(import('../pages/User/profile/resetPwd.vue' /* webpackChunkName: "pages/User/profile/resetPwd" */))
const _7e8f531a = () => interopDefault(import('../pages/User/profile/userAvatar.vue' /* webpackChunkName: "pages/User/profile/userAvatar" */))
const _e91ff92a = () => interopDefault(import('../pages/User/profile/userEmail.vue' /* webpackChunkName: "pages/User/profile/userEmail" */))
const _65cd1a2f = () => interopDefault(import('../pages/User/profile/userInfo.vue' /* webpackChunkName: "pages/User/profile/userInfo" */))
const _2772a2c8 = () => interopDefault(import('../pages/c/_contentId/index.vue' /* webpackChunkName: "pages/c/_contentId/index" */))
const _35a86b19 = () => interopDefault(import('../pages/email-validate/_uuid/index.vue' /* webpackChunkName: "pages/email-validate/_uuid/index" */))
const _5b5e0dc4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/register",
    component: _465b1487,
    name: "register"
  }, {
    path: "/userlogin",
    component: _71a44aca,
    name: "userlogin"
  }, {
    path: "/wxamp",
    component: _6b5e230f,
    name: "wxamp"
  }, {
    path: "/User/management",
    component: _1ddc45b3,
    name: "User-management"
  }, {
    path: "/User/profile",
    component: _2f72be2c,
    name: "User-profile"
  }, {
    path: "/User/publish",
    component: _56954a62,
    name: "User-publish"
  }, {
    path: "/User/profile/resetPwd",
    component: _5affe804,
    name: "User-profile-resetPwd"
  }, {
    path: "/User/profile/userAvatar",
    component: _7e8f531a,
    name: "User-profile-userAvatar"
  }, {
    path: "/User/profile/userEmail",
    component: _e91ff92a,
    name: "User-profile-userEmail"
  }, {
    path: "/User/profile/userInfo",
    component: _65cd1a2f,
    name: "User-profile-userInfo"
  }, {
    path: "/c/:contentId",
    component: _2772a2c8,
    name: "c-contentId"
  }, {
    path: "/email-validate/:uuid",
    component: _35a86b19,
    name: "email-validate-uuid"
  }, {
    path: "/",
    component: _5b5e0dc4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

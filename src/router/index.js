import Vue from 'vue'
// import socketio from 'socket.io'
// import VueSocketIO from 'vue-socket.io'

// export const SocketInstance = socketio('http://localhost:4113')

import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)
// Vue.use(VueSocketIO, SocketInstance)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}

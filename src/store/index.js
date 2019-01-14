import Vue from 'vue'
import Vuex from 'vuex'

// we first import the module
import appSettings from './appSettings'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // then we reference it
    appSettings
  }
})

// if we want some HMR magic for it, we handle
// the hot update like below. Notice we guard this
// code with "process.env.DEV" -- so this doesn't
// get into our production build (and it shouldn't).
if (process.env.DEV && module.hot) {
  module.hot.accept(['./appSettings'], () => {
    const newAppSettings = require('./appSettings').default
    store.hotUpdate({ modules: { appSettings: newAppSettings } })
  })
}

export default store

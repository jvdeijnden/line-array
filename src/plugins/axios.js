import axios from 'axios'
import {
  Loading

  // optional!, for example below
  // with custom spinner
  // QSpinnerGears
} from 'quasar'
var serverOffline

export default ({ Vue, store }) => {
  // we add it to Vue prototype
  // so we can reference it in Vue files
  // without the need to import axios
  Vue.prototype.$axios = axios

  setInterval(function () {
    axios
      .get(location.protocol + '//' + location.hostname + '/api')
      .catch(function () {
        if (!serverOffline) {
          serverOffline = true
          Loading.show({
            // spinner: QSpinnerGears,
            message: 'Server offline'
            // messageColor: 'blue',
            // spinnerSize: 250, // in pixels
            // spinnerColor: 'white',
            // customClass: 'bg-primary'
          })
        }
      })
      .then(response => {
        if (response !== undefined) {
          store.commit('appSettings/updatePower', response.data.power)
          store.commit('appSettings/updateVolume', response.data.volume)
          store.commit('appSettings/updateEq0', response.data.eq0)
          store.commit('appSettings/updateEq1', response.data.eq1)
          store.commit('appSettings/updateEq2', response.data.eq2)
          store.commit('appSettings/updateEq3', response.data.eq3)
          store.commit('appSettings/updateEq4', response.data.eq4)
          store.commit('appSettings/updateEq5', response.data.eq5)
          store.commit('appSettings/updateEq6', response.data.eq6)
          store.commit('appSettings/updateEq7', response.data.eq7)
          store.commit('appSettings/updateEq8', response.data.eq8)
          store.commit('appSettings/updateAngle', response.data.angle)
          store.commit('appSettings/updateDistance', response.data.distance)

          if (serverOffline) {
            Loading.hide()
            serverOffline = false
          }
        }
      })
  }, 750)
  // Example: this.$axios will reference Axios now so you don't need stuff like vue-axios
}

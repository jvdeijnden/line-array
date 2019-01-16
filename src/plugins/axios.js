import axios from 'axios'
import {
  Loading

  // optional!, for example below
  // with custom spinner
  // QSpinnerGears
} from 'quasar'
// import Equalizer from 'pages/Equalizer.vue'

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
          if (response.data.power !== store.state.appSettings.power) {
            store.commit('appSettings/updatePower', response.data.power)
          }

          if (response.data.volume !== store.state.appSettings.volume) {
            store.commit('appSettings/updateVolume', response.data.volume)
          }

          for (var i = 0; i <= 8; i++) {
            if (response.data['eq' + i] !== store.state.appSettings['eq' + i]) {
              store.commit('appSettings/updateEq' + i, response.data['eq' + i])
            }
          }

          for (var j = 0; j <= 8; j++) {
            if (response.data['speaker' + j] !== store.state.appSettings['speaker' + j]) {
              store.commit('appSettings/updateSpeaker' + j, response.data['speaker' + j])
            }
          }

          if (response.data.angle !== store.state.appSettings.angle) {
            store.commit('appSettings/updateAngle', response.data.angle)
          }

          if (response.data.distance !== store.state.appSettings.distance) {
            store.commit('appSettings/updateDistance', response.data.distance)
          }

          if (serverOffline) {
            Loading.hide()
            serverOffline = false
          }
        }
      })
  }, 750)
  // Example: this.$axios will reference Axios now so you don't need stuff like vue-axios
}

import axios from 'axios'
import { Loading } from 'quasar'

var serverOffline

export async function updateAppSettings ({commit, state}, that) {
  return axios
    .get(location.protocol + '//' + location.hostname + '/api')
    .catch(function (e) {
      if (!serverOffline) {
        serverOffline = true
        Loading.show({
          message: 'Server offline'
        })
      }
    })
    .then(response => {
      if (response !== undefined) {
        if (response.data.mute !== state.mute) {
          commit('updateMute', response.data.mute)
          commit('updateGains')
          that.$root.$emit('updateGainSeries')
        }
        if (response.data.master !== state.master) {
          commit('updateMaster', response.data.master)
          commit('updateMasterKnob', response.data.master)
          commit('updateGains')

          that.$root.$emit('updateGainSeries')
        }

        var equalizerChanged = false

        for (var i = 0; i <= 8; i++) {
          if (response.data['eq' + i] !== state['eq' + i]) {
            commit('updateEq' + i, response.data['eq' + i])
            // var equalizerPayload = {'band': i, 'gain': response.data['eq' + i]}
            // commit('updateEqualizer', equalizerPayload)

            equalizerChanged = true
          }
        }

        if (equalizerChanged) {
          that.$root.$emit('updateEqualizerSeries')
        }

        var speakerChanged = false

        for (var j = 0; j <= 8; j++) {
          if (response.data['speaker' + j] !== state.speakers[j]) {
            commit('updateSpeaker' + j, response.data['speaker' + j])
            // var speakerPayload = {'speaker': j, 'gain': response.data['speaker' + j]}
            // commit('updateSpeakers', speakerPayload)
            speakerChanged = true
          }
        }

        if (speakerChanged) {
          commit('updateGains')
          that.$root.$emit('updateSpeakerSeries')
          that.$root.$emit('updateGainSeries')
        }

        if (response.data.angle !== state.angle) {
          commit('updateAngle', response.data.angle)
        }

        if (response.data.distance !== state.distance) {
          commit('updateDistance', response.data.distance)
        }

        if (response.data.fsa !== state.fsa) {
          commit('updateFsa', response.data.fsa)
        }

        if (serverOffline) {
          Loading.hide()
          serverOffline = false
        }
      }
    })
}

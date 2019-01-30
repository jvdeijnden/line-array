<script>
import GainChart from 'pages/GainChart.vue'
import EqualizerChart from 'pages/EqualizerChart.vue'
import BeamingChart from 'pages/BeamingChart.vue'

export default {
  name: 'Refresh',
  components: {
    Gain,
    Equalizer,
    Beaming
  },
  data () {
    return {}
  },
  methods: {
    refresh () {
      setInterval(function () {
        this.$axios
          .get(location.protocol + '//' + location.hostname + '/api')
          .catch(function () {
            if (!serverOffline) {
              serverOffline = true
              Loading.show({
                message: 'Server offline'
              })
            }
          })
          .then(response => {
            if (response !== undefined) {
              if (response.data.power !== this.$store.state.appSettings.power) {
                this.$store.commit('appSettings/updatePower', response.data.power)
              }

              if (response.data.volume !== this.$store.state.appSettings.volume) {
                this.$store.commit('appSettings/updateVolume', response.data.volume)
              }

              for (var i = 0; i <= 8; i++) {
                if (response.data['eq' + i] !== this.$store.state.appSettings['eq' + i]) {
                  this.$store.commit('appSettings/updateEq' + i, response.data['eq' + i])
                }
              }

              for (var j = 0; j <= 8; j++) {
                if (response.data['speaker' + j] !== this.$store.state.appSettings['speaker' + j]) {
                  this.$store.commit('appSettings/updateSpeaker' + j, response.data['speaker' + j])
                }
              }

              if (response.data.angle !== this.$store.state.appSettings.angle) {
                this.$store.commit('appSettings/updateAngle', response.data.angle)
              }

              if (response.data.distance !== this.$store.state.appSettings.distance) {
                this.$store.commit('appSettings/updateDistance', response.data.distance)
              }

              Equalizer.methods.updateEqChart()
              Beaming.methods.updateBeamingChart()

              if (serverOffline) {
                Loading.hide()
                serverOffline = false
              }
            }
          })
  }, 750)
    }
  }
}
</script>

<style>
</style>

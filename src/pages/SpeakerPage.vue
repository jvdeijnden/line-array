<template>
  <q-page padding class="docs-input row justify-center">
    <speaker-chart></speaker-chart>
    <div id="speakers">
      <q-slider
        v-for="(speaker, index) in speakers"
        :key="index"
        :value="speaker"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speakers = {'speaker': index, 'gain': val} }"
        label
      />
    </div>
  </q-page>
</template>

<script>
import SpeakerChart from 'components/SpeakerChart.vue'

export default {
  name: 'SpeakerPage',
  components: {
    SpeakerChart
  },
  data () {
    return {
      opened: false,
      buttons: [
        {
          'size': '50px',
          'top': '100px'
        },
        {
          'size': '50px',
          'top': '200px'
        }
      ]
    }
  },
  computed: {
    speakers: {
      get () {
        return this.$store.state.appSettings.speakers
      },
      set (payload) {
        this.jsonWrite('speaker' + payload.speaker, payload.gain)

        this.$store.commit('appSettings/updateSpeakers', payload)
        this.$store.commit('appSettings/updateGains')

        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    }
  },
  methods: {
    openModal () {
      this.opened = true
    },
    resetSpeakers () {
      for (var i = 0; i <= 8; i++) {
        this.speakers = {'speaker': i, 'gain': 50}
      }
      this.$q.notify({
        message: 'Speakers reset',
        type: 'info',
        color: 'info',
        icon: 'mdi-undo'
      })
    }
  }
}
</script>

<style scoped>
#speakers {
  width: 60vw;
  height: 60vh;
}
</style>

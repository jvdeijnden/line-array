<template>
  <q-page padding class="docs-input row justify-center">
    <speaker-chart></speaker-chart>
    <div id="speakers">
      <!-- <q-slider
        v-for="(speaker, index) in speakers"
        :key="index"
        :value="speaker"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speakers = {'speaker': index, 'gain': val} }"
        label
      /> -->
      <q-slider
        :value="speaker0"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker0 = val}"
        label
      />
      <q-slider
        :value="speaker1"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker1 = val}"
        label
      />
      <q-slider
        :value="speaker2"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker2 = val}"
        label
      />
      <q-slider
        :value="speaker3"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker3 = val}"
        label
      />
      <q-slider
        :value="speaker4"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker4 = val}"
        label
      />
      <q-slider
        :value="speaker5"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker5 = val}"
        label
      />
      <q-slider
        :value="speaker6"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker6 = val}"
        label
      />
      <q-slider
        :value="speaker7"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker7 = val}"
        label
      />
      <q-slider
        :value="speaker8"
        :min="0"
        :max="100"
        :step="1"
        color="pantone"
        @change="val => { speaker8 = val}"
        label
      />
    </div>
    <q-page-sticky position="bottom-right" :offset="[25, 25]">
      <q-btn round color="pantone" @click="resetSpeakers()" icon="mdi-undo" />
    </q-page-sticky>
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
    // speakers: {
    //   get () {
    //     return this.$store.state.appSettings.speakers
    //   },
    //   set (payload) {
    //     this.jsonWrite('speaker' + payload.speaker, payload.gain)

    //     this.$store.commit('appSettings/updateSpeakers', payload)
    //     this.$store.commit('appSettings/updateGains')

    //     this.$root.$emit('updateSpeakerSeries')
    //     this.$root.$emit('updateGainSeries')
    //   }
    // }
    speaker0: {
      get () {
        return this.$store.state.appSettings.speaker0
      },
      set (val) {
        this.jsonWrite('speaker0', val)
        this.$store.commit('appSettings/updateSpeaker0', val)
        this.$store.commit('updateGains')

        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }

        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker1: {
      get () {
        return this.$store.state.appSettings.speaker1
      },
      set (val) {
        this.jsonWrite('speaker1', val)
        this.$store.commit('appSettings/updateSpeaker1', val)
        this.$store.commit('updateGains')

        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker2: {
      get () {
        return this.$store.state.appSettings.speaker2
      },
      set (val) {
        this.jsonWrite('speaker2', val)
        this.$store.commit('appSettings/updateSpeaker2', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker3: {
      get () {
        return this.$store.state.appSettings.speaker3
      },
      set (val) {
        this.jsonWrite('speaker3', val)
        this.$store.commit('appSettings/updateSpeaker3', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker4: {
      get () {
        return this.$store.state.appSettings.speaker4
      },
      set (val) {
        this.jsonWrite('speaker4', val)
        this.$store.commit('appSettings/updateSpeaker4', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker5: {
      get () {
        return this.$store.state.appSettings.speaker5
      },
      set (val) {
        this.jsonWrite('speaker5', val)
        this.$store.commit('appSettings/updateSpeaker5', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker6: {
      get () {
        return this.$store.state.appSettings.speaker6
      },
      set (val) {
        this.jsonWrite('speaker6', val)
        this.$store.commit('appSettings/updateSpeaker6', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker7: {
      get () {
        return this.$store.state.appSettings.speaker7
      },
      set (val) {
        this.jsonWrite('speaker7', val)
        this.$store.commit('appSettings/updateSpeaker7', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
        this.$root.$emit('updateSpeakerSeries')
        this.$root.$emit('updateGainSeries')
      }
    },
    speaker8: {
      get () {
        return this.$store.state.appSettings.speaker8
      },
      set (val) {
        this.jsonWrite('speaker8', val)
        this.$store.commit('appSettings/updateSpeaker8', val)
        this.$store.commit('updateGains')
        for (var i = 0; i <= 8; i++) {
          this.jsonWrite('gain' + i, this.$store.state.appSettings.gains[i])
        }
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

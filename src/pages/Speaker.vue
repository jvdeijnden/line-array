<template>
<q-page padding class="docs-input row justify-center">
    <div id="speaker-chart">
      <apexchart type=bar height=350 :options="speakerOptions" :series="speakerSeries" />
    </div>
    <div id="speaker">
      <p class="caption">Individual speaker gain control</p>
      <q-slider
        :value="speaker0"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker0 = val; updateSpeakerChart(); this.jsonWrite('speaker0', speaker0) }"
        label
      />
      <q-slider
        :value="speaker1"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker1 = val; updateSpeakerChart(); this.jsonWrite('speaker1', speaker1) }"
        label
      />
      <q-slider
        :value="speaker2"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker2 = val; updateSpeakerChart(); this.jsonWrite('speaker2', speaker2) }"
        label
      />
      <q-slider
        :value="speaker3"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker3 = val; updateSpeakerChart(); this.jsonWrite('speaker3', speaker3) }"
        label
      />
      <q-slider
        :value="speaker4"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker4 = val; updateSpeakerChart(); this.jsonWrite('speaker4', speaker4) }"
        label
      />
      <q-slider
        :value="speaker5"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker5 = val; updateSpeakerChart(); this.jsonWrite('speaker5', speaker5) }"
        label
      />
      <q-slider
        :value="speaker6"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker6 = val; updateSpeakerChart(); this.jsonWrite('speaker6', speaker6) }"
        label
      />
      <q-slider
        :value="speaker7"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker7 = val; updateSpeakerChart(); this.jsonWrite('speaker7', speaker7) }"
        label
      />
      <q-slider
        :value="speaker8"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { speaker8 = val; updateSpeakerChart(); this.jsonWrite('speaker8', speaker8) }"
        label
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Speaker',
  data () {
    return {
      speakerOptions: {
        chart: {
          id: 'speaker-chart',
          events: {
            click: function (event, chartContext, config) {
              console.log(event)
              console.log(chartContext)
              console.log(config)
            }
          }
        },
        xaxis: {
          // min: 0,
          // max: 8,
          type: 'categories',
          // categories () {
          //   var output = []
          //   for (var i = 0; i <= 8; i++) {
          //     output.push('Speaker ' + i)
          //   }
          //   return output
          // }
          categories: [
            'Speaker 0',
            'Speaker 1',
            'Speaker 2',
            'Speaker 3',
            'Speaker 4',
            'Speaker 5',
            'Speaker 6',
            'Speaker 7',
            'Speaker 8'
          ]
        },
        yaxis: {
          min: 0,
          max: 100,
          show: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter (val) {
            return val + '%'
          }
        }
      },
      speakerSeries: [{
        name: 'speaker',
        data: [
          this.$store.state.appSettings.speaker0,
          this.$store.state.appSettings.speaker1,
          this.$store.state.appSettings.speaker2,
          this.$store.state.appSettings.speaker3,
          this.$store.state.appSettings.speaker4,
          this.$store.state.appSettings.speaker5,
          this.$store.state.appSettings.speaker6,
          this.$store.state.appSettings.speaker7,
          this.$store.state.appSettings.speaker8
        ]
      }]
    }
  },
  computed: {
    speaker0: {
      get () {
        return this.$store.state.appSettings.speaker0
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker0', val)
      }
    },
    speaker1: {
      get () {
        return this.$store.state.appSettings.speaker1
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker1', val)
      }
    },
    speaker2: {
      get () {
        return this.$store.state.appSettings.speaker2
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker2', val)
      }
    },
    speaker3: {
      get () {
        return this.$store.state.appSettings.speaker3
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker3', val)
      }
    },
    speaker4: {
      get () {
        return this.$store.state.appSettings.speaker4
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker4', val)
      }
    },
    speaker5: {
      get () {
        return this.$store.state.appSettings.speaker5
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker5', val)
      }
    },
    speaker6: {
      get () {
        return this.$store.state.appSettings.speaker6
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker6', val)
      }
    },
    speaker7: {
      get () {
        return this.$store.state.appSettings.speaker7
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker7', val)
      }
    },
    speaker8: {
      get () {
        return this.$store.state.appSettings.speaker8
      },
      set (val) {
        this.$store.commit('appSettings/updateSpeaker8', val)
      }
    }
  },
  methods: {
    updateSpeakerChart () {
      this.speakerSeries = [{
        data: [
          this.$store.state.appSettings.speaker0,
          this.$store.state.appSettings.speaker1,
          this.$store.state.appSettings.speaker2,
          this.$store.state.appSettings.speaker3,
          this.$store.state.appSettings.speaker4,
          this.$store.state.appSettings.speaker5,
          this.$store.state.appSettings.speaker6,
          this.$store.state.appSettings.speaker7,
          this.$store.state.appSettings.speaker8
        ]
      }]
    }
  }
}
</script>

<style>
</style>

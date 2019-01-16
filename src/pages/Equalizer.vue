<template>
  <q-page padding class="docs-input row justify-center">
    <div id="eq-chart">
      <apexchart type=line height=350 :options="eqOptions" :series="eqSeries" />
    </div>
    <div id="eq">
      <p class="caption">9-band equalizer</p>
      <q-slider
        :value="eq0"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq0 = val; updateEqChart(); this.jsonWrite('eq0', eq0) }"
        label
      />
      <q-slider
        :value="eq1"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq1 = val; updateEqChart(); this.jsonWrite('eq1', eq1) }"
        label
      />
      <q-slider
        :value="eq2"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq2 = val; updateEqChart(); this.jsonWrite('eq2', eq2) }"
        label
      />
      <q-slider
        :value="eq3"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq3 = val; updateEqChart(); this.jsonWrite('eq3', eq3) }"
        label
      />
      <q-slider
        :value="eq4"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq4 = val; updateEqChart(); this.jsonWrite('eq4', eq4) }"
        label
      />
      <q-slider
        :value="eq5"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq5 = val; updateEqChart(); this.jsonWrite('eq5', eq5) }"
        label
      />
      <q-slider
        :value="eq6"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq6 = val; updateEqChart(); this.jsonWrite('eq6', eq6) }"
        label
      />
      <q-slider
        :value="eq7"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq7 = val; updateEqChart(); this.jsonWrite('eq7', eq7) }"
        label
      />
      <q-slider
        :value="eq8"
        :min="0"
        :max="100"
        :step="5"
        color="pantone"
        @change="val => { eq8 = val; updateEqChart(); this.jsonWrite('eq8', eq8) }"
        label
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Equalizer',
  data () {
    return {
      eqOptions: {
        chart: {
          id: 'eq-chart',
          events: {
            click: function (event, chartContext, config) {
              console.log(event)
              console.log(chartContext)
              console.log(config)
            }
          }
        },
        xaxis: {
          min: 0,
          max: 8,
          type: 'numeric',
          categories: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        },
        yaxis: {
          min: 0,
          max: 100,
          opposite: false
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        }
      },
      eqSeries: [{
        name: 'eq',
        data: [
          this.$store.state.appSettings.eq0,
          this.$store.state.appSettings.eq1,
          this.$store.state.appSettings.eq2,
          this.$store.state.appSettings.eq3,
          this.$store.state.appSettings.eq4,
          this.$store.state.appSettings.eq5,
          this.$store.state.appSettings.eq6,
          this.$store.state.appSettings.eq7,
          this.$store.state.appSettings.eq8
        ]
      }]
    }
  },
  computed: {
    eq0: {
      get () {
        return this.$store.state.appSettings.eq0
      },
      set (val) {
        this.$store.commit('appSettings/updateEq0', val)
      }
    },
    eq1: {
      get () {
        return this.$store.state.appSettings.eq1
      },
      set (val) {
        this.$store.commit('appSettings/updateEq1', val)
      }
    },
    eq2: {
      get () {
        return this.$store.state.appSettings.eq2
      },
      set (val) {
        this.$store.commit('appSettings/updateEq2', val)
      }
    },
    eq3: {
      get () {
        return this.$store.state.appSettings.eq3
      },
      set (val) {
        this.$store.commit('appSettings/updateEq3', val)
      }
    },
    eq4: {
      get () {
        return this.$store.state.appSettings.eq4
      },
      set (val) {
        this.$store.commit('appSettings/updateEq4', val)
      }
    },
    eq5: {
      get () {
        return this.$store.state.appSettings.eq5
      },
      set (val) {
        this.$store.commit('appSettings/updateEq5', val)
      }
    },
    eq6: {
      get () {
        return this.$store.state.appSettings.eq6
      },
      set (val) {
        this.$store.commit('appSettings/updateEq6', val)
      }
    },
    eq7: {
      get () {
        return this.$store.state.appSettings.eq7
      },
      set (val) {
        this.$store.commit('appSettings/updateEq7', val)
      }
    },
    eq8: {
      get () {
        return this.$store.state.appSettings.eq8
      },
      set (val) {
        this.$store.commit('appSettings/updateEq8', val)
      }
    }
  },
  methods: {
    updateEqChart () {
      this.eqSeries = [{
        data: [
          this.$store.state.appSettings.eq0,
          this.$store.state.appSettings.eq1,
          this.$store.state.appSettings.eq2,
          this.$store.state.appSettings.eq3,
          this.$store.state.appSettings.eq4,
          this.$store.state.appSettings.eq5,
          this.$store.state.appSettings.eq6,
          this.$store.state.appSettings.eq7,
          this.$store.state.appSettings.eq8
        ]
      }]
    }
  }
}
</script>

<style scoped>

</style>

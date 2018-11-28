<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-apexcharts"></script>
<script>
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

const chart = new Vue({
  el: '#chart',
  components: {
    apexchart: VueApexCharts
  },
  data: {
    series: [{
      name: 'Beam',
      data: [
        [16.4, 5.4]
      ]
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 10
      },
      yaxis: {
        tickAmount: 7
      }
    }
  }
})
</script>

<template>
  <q-page padding class="docs-input row justify-center">
    <div id="beaming">
      <q-slider
        v-model="beamingY"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="jsonWrite()"
      />
      <div id="chart">
        <apexchart type=scatter height=350 :options="chartOptions" :series="series" />
      </div>

      <q-slider
        v-model="beamingX"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="jsonWrite()"
      />
    </div>
  </q-page>
</template>

<script>
import json from '../data.json'

export default {
  name: 'Beaming',
  data () {
    return {
      beamingX: json.beaming.angle,
      beamingY: json.beaming.distance
    }
  },
  methods: {
    jsonWrite () {
      console.log('hello')
      json[this.name] = this.value
    }
  }
}
</script>

<style scoped>

</style>

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
        @input="jsonWrite('distance', beamingY)"
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
        @input="jsonWrite('angle', beamingX)"
      />
    </div>
  </q-page>
</template>

<script>
import json from '../data.json'
import axios from 'axios'

export default {
  name: 'Beaming',
  data () {
    return {
      beamingX: json.beaming.angle,
      beamingY: json.beaming.distance
    }
  },
  methods: {
    jsonWrite (key, value) {
      console.log(location.protocol + location.hostname + '/api?' + key + '=' + value)
      json[key] = value
      axios
        .get(location.protocol + '//' + location.hostname + '/api?' + key + '=' + value)
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>

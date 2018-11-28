<script src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
<script src='https://cdn.jsdelivr.net/npm/apexcharts'></script>
<script src='https://cdn.jsdelivr.net/npm/vue-apexcharts'></script>
<script>
import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

const chart = new Vue({
  el: '#chart',
  components: {
    apexchart: VueApexCharts
  },
  data: {
    series: [
      {
        name: 'Beam',
        data: [[16.4, 5.4]]
      }
    ],
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
});
</script>

<template>
  <q-page padding class='docs-input row justify-center'>
    <div id='beaming'>
      <q-slider
        v-model='beamingY'
        :min='0'
        :max='10'
        :step='1'
        color='pantone'
        @input="jsonWrite('beaming.angle', beamingY)"
      />
      <div id='chart'>
        <apexchart type='scatter' height='350' :options='chartOptions' :series='series'/>
      </div>

      <q-slider
        v-model='beamingX'
        :min='0'
        :max='10'
        :step='1'
        color='pantone'
        @input="jsonWrite('beaming.distance', beamingX)"
      />
    </div>
  </q-page>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
export default {
  el: '#chart',
  components: {
    apexchart: VueApexCharts
  },
  data: {
    series: [
      {
        name: 'Beam',
        data: [[16.4, 5.4]]
      }
    ],
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
  },
  methods: {
    jsonWrite (key, value) {
      json[key] = value
    }
  }
}
</script>

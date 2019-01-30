<template>
  <div id="chart">
    <apexchart type=line height=350 :options="options" :series="series" />
  </div>
</template>

<script>
export default {
  name: 'equalizer-chart',
  data () {
    return {
      options: {
        chart: {
          id: 'chart',
          toolbar: {
            enabled: false,
            tools: {
              download: false,
              reset: false
            }
          },
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
          // type: 'numeric',
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        yaxis: {
          min: 0,
          max: 100
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        }
      },
      series: [{
        name: 'equalizer',
        data: []
      }]
    }
  },
  created () {
    this.$root.$on('updateEqualizerSeries', this.updateEqualizerSeriescb)
    this.$root.$emit('updateEqualizerSeries')
  },
  methods: {
    updateEqualizerSeriescb () {
      this.series = [{
        // data: this.$store.state.appSettings.equalizer
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

<style>
</style>

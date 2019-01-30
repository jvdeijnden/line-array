<template>
  <div id="chart">
    <apexchart type=bar height=350 :options="options" :series="series" />
  </div>
</template>

<script>
export default {
  name: 'beaming-chart',
  data () {
    return {
      options: {
        chart: {
          id: 'chart',
          zoom: {
            enabled: false
          },
          toolbar: {
            enabled: false,
            tools: {
              download: false,
              reset: false
            }
          }
        },
        xaxis: {
          min: 0,
          max: 10,
          type: 'numeric',
          tickAmount: 10
        },
        yaxis: {
          min: -7,
          max: 0,
          opposite: false,
          tickAmount: 7
        },
        stroke: {
          width: [5, 0],
          dashArray: [5, 0],
          colors: ['#A9A9A9'],
          curve: 'straight'
        },
        markers: {
          size: [0, 8],
          colors: ['#FFFFFF', '#008FFB']
        },
        fill: {
          colors: ['#FFFFFF', '#008FFB']
        },
        legend: {
          show: false
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        tooltip: {
          shared: false,
          intersect: true
        }
      },
      series: [{
        name: 'beamline',
        type: 'line',
        data: []
      }, {
        name: 'beampoint',
        type: 'scatter',
        data: []
      }]
    }
  },
  created () {
    this.$root.$on('updateBeamingSeries', this.updateBeamingSeriescb)
    this.$root.$emit('updateBeamingSeries')
  },
  methods: {
    updateBeamingSeriescb () {
      var angle = this.$store.state.appSettings.angle
      var distance = this.$store.state.appSettings.distance
      this.series = [{
        name: 'beamline',
        type: 'line',
        data: [{
          'x': 0,
          'y': 0
        }, {
          'x': distance,
          'y': Math.tan(-angle * Math.PI / 180) * distance
        }]
      }, {
        name: 'beampoint',
        type: 'scatter',
        data: [{
          'x': distance,
          'y': Math.tan(-angle * Math.PI / 180) * distance
        }]
      }]
    }
  }

}
</script>

<style>
</style>

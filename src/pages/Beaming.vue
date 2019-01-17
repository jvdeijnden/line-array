<template>
  <q-page padding class="docs-input row justify-center">
    <!-- <img src="./assets/linearray.png"> -->
    <div id="beaming-chart">
      <apexchart type=line height=350 :options="beamingOptions" :series="beamingSeries" />
    </div>
    <div id="eq">
      <p class="caption">Beaming angle</p>
      <q-slider
        :value="angle"
        :min="0"
        :max="35"
        :step="1"
        color="pantone"
        @change="val => { angle = val; updateBeamingChart(); this.jsonWrite('angle', angle) }"
        label
      />

      <p class="caption">Beaming distance</p>
      <q-slider
        :value="distance"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="val => { distance = val; updateBeamingChart(); this.jsonWrite('distance', distance) }"
        label
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Beaming',
  data () {
    return {
      beamingData: [],
      beamingOptions: {
        chart: {
          id: 'beaming-chart',
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
          colors: ['#A9A9A9']
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
        // fill: {
        //   type: 'gradient',
        //   gradient: {
        //     shade: 'dark',
        //     gradientToColors: ['#D3D3D3'],
        //     inverseColors: false,
        //     shadeIntensity: 1,
        //     type: 'horizontal',
        //     opacityFrom: 1,
        //     opacityTo: 1,
        //     stops: [0, 90, 90, 90]
        //   }
        // }
      },
      beamingSeries: [{
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
  computed: {
    angle: {
      get () {
        return this.$store.state.appSettings.angle
      },
      set (val) {
        this.$store.commit('appSettings/updateAngle', val)
      }
    },
    distance: {
      get () {
        return this.$store.state.appSettings.distance
      },
      set (val) {
        this.$store.commit('appSettings/updateDistance', val)
      }
    }
  },
  methods: {
    updateBeamingChart () {
      // var series = []
      var angle = this.$store.state.appSettings.angle
      var distance = this.$store.state.appSettings.distance

      // for (var i = 0; i <= distance; i++) {
      //   series.push({
      //     'x': distance,
      //     'y': Math.tan(-angle * Math.PI / 180) * i
      //   })
      // }

      this.beamingSeries = [{
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

      // series = []
      angle = 0
      distance = 0
    }
  }
}
</script>

<style scoped>

</style>

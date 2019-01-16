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
        @change="val => { angle = val; this.jsonWrite('angle', angle) }"
        label
      />

      <p class="caption">Beaming distance</p>
      <q-slider
        :value="distance"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="val => { distance = val; this.jsonWrite('distance', distance) }"
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
          id: 'beaming-chart'
        },
        xaxis: {
          min: 0,
          max: 10,
          type: 'numeric',
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        yaxis: {
          min: -7,
          max: 5,
          opposite: true
        },
        stroke: {
          width: 5,
          dashArray: 5
        }
      },
      beamingSeries: [{
        name: 'beam',
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
  }
}
</script>

<style scoped>

</style>

<template>
  <q-page padding class="docs-input row justify-center">
    <div id="beaming-chart">
      <apexchart type=scatter height=350 :options="chartOptions" :series="series" />
    </div>
    <div id="eq">
      <p class="caption">Beaming angle</p>
      <q-slider
        :value="angle"
        :min="0"
        :max="-35"
        :step="1"
        markers=true
        label-always=true
        :label-value="`${json.angle}°`"
        color="pantone"
        @change="val => { angle = val; this.$jsonWrite('angle', angle) }"
      />

      <p class="caption">Beaming distance</p>
      <q-slider
        :value="distance"
        :min="0"
        :max="10"
        :step="1"
        markers=true
        label-always=true
        :label-value="`${distance}m`"
        color="pantone"
        @change="val => { distance = val; this.$jsonWrite('distance', distance) }"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Beaming',
  data () {
    return {
      options: {
        chart: {
          id: 'beaming-chart'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
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

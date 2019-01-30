<template>
  <q-page padding class="docs-input row justify-center">
    <beaming-chart></beaming-chart>
    <div>
      <p class="caption">Full spectrum audio</p>
      <q-toggle
        :value="fsa"
        name="fsa"
        left-label
        color="pantone"
        @change="val => { fsa = val }"
      />
      <p class="caption">Beaming angle</p>
      <q-slider
        :value="angle"
        :min="0"
        :max="35"
        :step="1"
        color="pantone"
        @change="val => { angle = val }"
        label
      />
      <p class="caption">Beaming distance</p>
      <q-slider
        disable=true
        :value="distance"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="val => { distance = val }"
        label
      />
    </div>
  </q-page>
</template>

<script>
import BeamingChart from 'components/BeamingChart.vue'

export default {
  name: 'BeamingPage',
  components: {
    BeamingChart
  },
  computed: {
    angle: {
      get () {
        return this.$store.state.appSettings.angle
      },
      set (val) {
        this.jsonWrite('angle', val)
        this.$store.commit('appSettings/updateAngle', val)
        this.$root.$emit('updateBeamingSeries')
      }
    },
    distance: {
      get () {
        return this.$store.state.appSettings.distance
      },
      set (val) {
        this.jsonWrite('distance', val)
        this.$store.commit('appSettings/updateDistance', val)
        this.$root.$emit('updateBeamingSeries')
      }
    },
    fsa: {
      get () {
        return this.$store.state.appSettings.fsa
      },
      set (val) {
        this.jsonWrite('fsa', val)
        this.$store.commit('appSettings/updateFsa', val)

        // this.$root.$emit('updateBeamingSeries')
      }
    }
  }
}
</script>

<style scoped>

</style>

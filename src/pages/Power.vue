<template>
    <q-page padding class="docs-input row justify-center">
      <div style="width: 500px; max-width: 90vw;">
        <div class="q-py-lg">
          <p class="caption">Power</p>
          <q-toggle
            :value="power"
            name="power"
            left-label
            color="pantone"
            @change="val => { power = val; this.jsonWrite('power', power) }"
          />
        </div>
        <div class="q-py-lg">
          <p class="caption">Volume</p>
          <q-knob
            :value="volume"
            size="50vh"
            style="font-size: 1.5rem"
            color="pantone"
            line-width="5px"
            :min="0"
            :max="100"
            :step="5"
            @change="val => { volume = val; this.jsonWrite('volume', volume) }"
            @drag-value="val => { volumeKnob = val }"
          >
            <q-icon class="on-left" name="volume_up" /> {{ volumeKnob }}
          </q-knob>
        </div>
      </div>
    </q-page>
</template>

<script>
export default {
  name: 'Power',
  data () {
    return {
      volumeKnob: 0
    }
  },
  computed: {
    power: {
      get () {
        return this.$store.state.appSettings.power
      },
      set (val) {
        this.$store.commit('appSettings/updatePower', val)
      }
    },
    volume: {
      get () {
        return this.$store.state.appSettings.volume
      },
      set (val) {
        this.volumeKnob = val
        this.$store.commit('appSettings/updateVolume', val)
      }
    }
  }
}
</script>

<style scoped>

</style>

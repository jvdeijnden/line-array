<template>
    <q-page padding class="cards row items-start">
      <q-card inline class="bigger q-ma-sm">
        <q-card-title>
          System gain
        </q-card-title>
        <q-card-main>
          <gain-chart></gain-chart>
        </q-card-main>
      </q-card>

      <q-card inline class="q-ma-sm">
        <q-card-title>
          Master gain
        </q-card-title>
        <q-card-main>
          <q-knob
            :value="master"
            style="font-size: 1.5rem"
            color="pantone"
            line-width="5px"
            :min="0"
            :max="100"
            :step="1"
            @change="val => { master = val }"
            @drag-value="val => { masterKnob = val }"
          >
            <q-icon
              v-if="mute"
              class="on-left"
              name="mdi-volume-mute" />
            <q-icon
              v-else-if="!mute && masterKnob == 0"
              class="on-left"
              name="mdi-volume-off" />
            <q-icon
              v-else-if="!mute && masterKnob >= 1 && masterKnob <= 33"
              class="on-left"
              name="mdi-volume-low" />
            <q-icon
              v-else-if="!mute && masterKnob >= 34 && masterKnob <= 66"
              class="on-left"
              name="mdi-volume-medium" />
            <q-icon
              v-else
              class="on-left"
              name="mdi-volume-high" />
            <h4 v-show="!mute">
              {{ masterKnob }}
            </h4>
          </q-knob>
        </q-card-main>
      </q-card>

      <q-card inline class="q-ma-sm">
        <q-card-title>
          Mute
        </q-card-title>
        <q-card-main>
          <q-toggle
            :value="mute"
            name="mute"
            left-label
            color="pantone"
            @change="val => { mute = val }"
          />
        </q-card-main>
      </q-card>
    </q-page>
</template>

<script>
import GainChart from 'components/GainChart.vue'

export default {
  name: 'GainPage',
  components: {
    GainChart
  },
  data () {
    return {
    }
  },
  created () {
    this.$root.$emit('updateGainSeries')
  },
  computed: {
    mute: {
      get () {
        return this.$store.state.appSettings.mute
      },
      set (val) {
        this.jsonWrite('mute', val)

        this.$store.commit('appSettings/updateMute', val)
        this.$store.commit('appSettings/updateGains')

        this.$root.$emit('updateGainSeries')
      }
    },
    master: {
      get () {
        return this.$store.state.appSettings.master
      },
      set (val) {
        this.jsonWrite('master', val)

        this.$store.commit('appSettings/updateMaster', val)
        this.$store.commit('appSettings/updateGains')

        this.$root.$emit('updateGainSeries')
      }
    },
    masterKnob: {
      get () {
        return this.$store.state.appSettings.masterKnob
      },
      set (val) {
        this.$store.commit('appSettings/updateMasterKnob', val)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.cards
  .q-card
    width 300px
  .bigger
    width 450px
    max-width 90vw
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
</style>

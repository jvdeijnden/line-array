<template>
  <q-page padding>
    <div class="row">
      <div class="col q-ma-md">
        <equalizer-chart></equalizer-chart>
      </div>
      <div class="col-lg q-ma-md justify-center">
        <p class="caption">9-band equalizer</p>
        <!-- <q-slider
          v-for="(band, index) in equalizer"
          :key="index"
          :value="band"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { equalizer = {'band': index, 'gain': val} }"
          label
        /> -->

        <q-slider
          :value="eq0"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq0 = val }"
          label
        />
        <q-slider
          :value="eq1"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq1 = val }"
          label
        />
        <q-slider
          :value="eq2"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq2 = val }"
          label
        />
        <q-slider
          :value="eq3"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq3 = val }"
          label
        />
        <q-slider
          :value="eq4"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq4 = val }"
          label
        />
        <q-slider
          :value="eq5"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq5 = val }"
          label
        />
        <q-slider
          :value="eq6"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq6 = val }"
          label
        />
        <q-slider
          :value="eq7"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq7 = val }"
          label
        />
        <q-slider
          :value="eq8"
          :min="0"
          :max="100"
          :step="1"
          color="pantone"
          @change="val => { eq8 = val }"
          label
        />
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[25, 25]">
      <q-btn round color="pantone" @click="resetEqualizer()" icon="mdi-undo" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import EqualizerChart from 'components/EqualizerChart.vue'

export default {
  name: 'EqualizerPage',
  components: {
    EqualizerChart
  },
  data () {
    return {
    }
  },
  computed: {
    equalizer: {
      get () {
        return this.$store.state.appSettings.equalizer
      },
      set (payload) {
        this.jsonWrite('eq' + payload.band, payload.gain)

        this.$store.commit('appSettings/updateEqualizer', payload)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq0: {
      get () {
        return this.$store.state.appSettings.eq0
      },
      set (val) {
        this.jsonWrite('eq0', val)

        this.$store.commit('appSettings/updateEq0', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq1: {
      get () {
        return this.$store.state.appSettings.eq1
      },
      set (val) {
        this.jsonWrite('eq1', val)

        this.$store.commit('appSettings/updateEq1', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq2: {
      get () {
        return this.$store.state.appSettings.eq2
      },
      set (val) {
        this.jsonWrite('eq2', val)

        this.$store.commit('appSettings/updateEq2', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq3: {
      get () {
        return this.$store.state.appSettings.eq3
      },
      set (val) {
        this.jsonWrite('eq3', val)

        this.$store.commit('appSettings/updateEq3', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq4: {
      get () {
        return this.$store.state.appSettings.eq4
      },
      set (val) {
        this.jsonWrite('eq4', val)

        this.$store.commit('appSettings/updateEq4', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq5: {
      get () {
        return this.$store.state.appSettings.eq5
      },
      set (val) {
        this.jsonWrite('eq5', val)

        this.$store.commit('appSettings/updateEq5', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq6: {
      get () {
        return this.$store.state.appSettings.eq6
      },
      set (val) {
        this.jsonWrite('eq6', val)

        this.$store.commit('appSettings/updateEq6', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq7: {
      get () {
        return this.$store.state.appSettings.eq7
      },
      set (val) {
        this.jsonWrite('eq7', val)

        this.$store.commit('appSettings/updateEq7', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    },
    eq8: {
      get () {
        return this.$store.state.appSettings.eq8
      },
      set (val) {
        this.jsonWrite('eq8', val)

        this.$store.commit('appSettings/updateEq8', val)

        this.$root.$emit('updateEqualizerSeries')
      }
    }
  },
  methods: {
    resetEqualizer () {
      for (var i = 0; i <= 8; i++) {
        this.equalizer = {'band': i, 'gain': 50}
      }
      this.$q.notify({
        message: 'Equalizer reset',
        type: 'info',
        color: 'info',
        icon: 'mdi-undo'
      })
    }
  }
}
</script>

<style scoped>
#eq {
  width: 60vw;
  /* height: 60vh; */
}
</style>

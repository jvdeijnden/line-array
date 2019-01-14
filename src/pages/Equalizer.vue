<template>
  <q-page padding class="docs-input row justify-center">
    <div id="eq">
      <p class="caption">9-band equalizer</p>
      <q-slider
        :value="eq0"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${eq0}%`"
        color="pantone"
        @change="val => { eq0 = val; this.jsonWrite('eq0', eq0) }"
      />
      <q-slider
        v-model="klaas"
        :value="eq1"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${klaas}%`"
        color="pantone"
        @input="klaas = eq1"
        @change="val => { eq1 = val; this.jsonWrite('eq1', eq1) }"
      />
      <q-slider
        :value="eq2"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${eq2}%`"
        color="pantone"
        @change="val => { eq2 = val; this.jsonWrite('eq2', eq2) }"
      />
      <q-slider
        :value="eq3"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${val}%`"
        color="pantone"
        @change="val => { eq3 = val; this.jsonWrite('eq3', eq3) }"
      />
      <q-slider
        :value="eq4"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${val}%`"
        color="pantone"
        @change="val => { eq4 = val; this.jsonWrite('eq4', eq4) }"
      />
      <q-slider
        :value="eq5"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${val}%`"
        color="pantone"
        @change="val => { eq5 = val; this.jsonWrite('eq5', eq5) }"
      />
      <q-slider
        :value="eq6"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${val}%`"
        color="pantone"
        @change="val => { eq6 = val; this.jsonWrite('eq6', eq6) }"
      />
      <q-slider
        :value="eq7"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${val}%`"
        color="pantone"
        @change="val => { eq7 = val; this.jsonWrite('eq7', eq7) }"
      />
      <q-slider
        :value="eq8"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${val}%`"
        color="pantone"
        @change="val => { eq8 = val; this.jsonWrite('eq8', eq8) }"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Equalizer',
  data () {
    return {
    }
  },
  computed: {
    eq0: {
      get () {
        return this.$store.state.appSettings.eq0
      },
      set (val) {
        this.$store.commit('appSettings/updateEq0', val)
      }
    },
    eq1: {
      get () {
        return this.$store.state.appSettings.eq1
      },
      set (val) {
        this.$store.commit('appSettings/updateEq1', val)
      }
    },
    eq2: {
      get () {
        return this.$store.state.appSettings.eq2
      },
      set (val) {
        this.$store.commit('appSettings/updateEq2', val)
      }
    },
    eq3: {
      get () {
        return this.$store.state.appSettings.eq3
      },
      set (val) {
        this.$store.commit('appSettings/updateEq3', val)
      }
    },
    eq4: {
      get () {
        return this.$store.state.appSettings.eq4
      },
      set (val) {
        this.$store.commit('appSettings/updateEq4', val)
      }
    },
    eq5: {
      get () {
        return this.$store.state.appSettings.eq5
      },
      set (val) {
        this.$store.commit('appSettings/updateEq5', val)
      }
    },
    eq6: {
      get () {
        return this.$store.state.appSettings.eq6
      },
      set (val) {
        this.$store.commit('appSettings/updateEq6', val)
      }
    },
    eq7: {
      get () {
        return this.$store.state.appSettings.eq7
      },
      set (val) {
        this.$store.commit('appSettings/updateEq7', val)
      }
    },
    eq8: {
      get () {
        return this.$store.state.appSettings.eq8
      },
      set (val) {
        this.$store.commit('appSettings/updateEq8', val)
      }
    }
  }
}
</script>

<style scoped>

</style>

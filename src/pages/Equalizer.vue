<template>
  <q-page padding class="docs-input row justify-center">
    <div id="eq">
      <p class="caption">9-band equalizer</p>
      <q-slider
        :value="slider0"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider0}%`"
        color="pantone"
        @change="val => { jsonWrite('eq0', val) }"
      />
      <q-slider
        v-model="slider1"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider1}%`"
        color="pantone"
        @change="jsonWrite('eq1', slider1)"
      />
      <q-slider
        v-model="slider2"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider2}%`"
        color="pantone"
        @change="jsonWrite('eq2', slider2)"
      />
      <q-slider
        v-model="slider3"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider3}%`"
        color="pantone"
        @change="jsonWrite('eq3', slider3)"
      />
      <q-slider
        v-model="slider4"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider4}%`"
        color="pantone"
        @change="jsonWrite('eq4', slider4)"
      />
      <q-slider
        v-model="slider5"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider5}%`"
        color="pantone"
        @change="jsonWrite('eq5', slider5)"
      />
      <q-slider
        v-model="slider6"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider6}%`"
        color="pantone"
        @change="jsonWrite('eq6', slider6)"
      />
      <q-slider
        v-model="slider7"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider7}%`"
        color="pantone"
        @change="jsonWrite('eq7', slider7)"
      />
      <q-slider
        v-model="slider8"
        :min="0"
        :max="100"
        :step="5"
        markers=true
        label-always=true
        :label-value="`${slider8}%`"
        color="pantone"
        @change="jsonWrite('eq8', slider8)"
      />
    </div>
  </q-page>
</template>

<script>
import json from '../data.json'
import axios from 'axios'

export default {
  name: 'Equalizer',
  data () {
    return {
      slider0: json.eq0,
      slider1: json.eq1,
      slider2: json.eq2,
      slider3: json.eq3,
      slider4: json.eq4,
      slider5: json.eq5,
      slider6: json.eq6,
      slider7: json.eq7,
      slider8: json.eq8
    }
  },
  methods: {
    jsonWrite (key, value) {
      console.log(location.protocol + location.hostname + '/api?' + key + '=' + value)
      json[key] = value
      axios
        .get(location.protocol + '//' + location.hostname + '/api?' + key + '=' + value)
        .catch(error => {
          console.log(error)
        })
    }
  }
}

// import { dom } from 'quasar'
// const { cssTransform } = dom

// let props = cssTransform('rotateX(90deg)')

// Vue.component({
//   el: '#eq',
//   props: props
// })

</script>

<style scoped>

</style>

<template>
  <q-page padding class="docs-input row justify-center">
    <div>
      <p class="caption">Equalizer</p>
      <q-slider
        v-model="slider0"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(0, slider0)"
      />
      <q-slider
        v-model="slider1"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(1, slider1)"
      />
      <q-slider
        id="eq"
        v-model="slider2"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(2, slider2)"
      />
      <q-slider
        v-model="slider3"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(3, slider3)"
      />
      <q-slider
        v-model="slider4"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(4, slider4)"
      />
      <q-slider
        v-model="slider5"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(5, slider5)"
      />
      <q-slider
        v-model="slider6"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(6, slider6)"
      />
      <q-slider
        v-model="slider7"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(7, slider7)"
      />
      <q-slider
        v-model="slider8"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @input="jsonWrite(8, slider8)"
      />
    </div>
  </q-page>
</template>

<script>
import json from 'src/statics/data.json'

export default {
  name: 'Equalizer',
  data () {
    return {
      slider0: json.eq['0'],
      slider1: json.eq['1'],
      slider2: json.eq['2'],
      slider3: json.eq['3'],
      slider4: json.eq['4'],
      slider5: json.eq['5'],
      slider6: json.eq['6'],
      slider7: json.eq['7'],
      slider8: json.eq['8']
    }
  },
  methods: {
    jsonWrite (key, value) {
      console.log(json)
      json.eq[key] = value
    }
  }
}
</script>

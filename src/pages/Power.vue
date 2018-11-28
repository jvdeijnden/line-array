<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <div class="q-py-lg">
        <p class="caption">Power</p>
        <q-toggle
          v-model="powerCheck"
          name="power"
          left-label
          color="pantone"
          @input="jsonWrite('power', powerCheck)"
        />
      </div>
      <div class="q-py-lg">
        <p class="caption">Volume</p>
        <q-knob
          v-model="volumeKnob"
          size="50vh"
          style="font-size: 1.5rem"
          color="pantone"
          line-width="5px"
          :min="0"
          :max="100"
          :step="5"
          @input="jsonWrite('volume', volumeKnob)"
        >
          <q-icon class="on-left" name="volume_up"/>
          {{ volumeKnob }}
        </q-knob>
      </div>
    </div>
  </q-page>
</template>

<script>
import json from 'src/statics/data.json'

export default {
  name: 'Power',
  data () {
    console.log(json)
    return {
      powerCheck: json.power,
      volumeKnob: json.volume
    }
  },
  methods: {
    jsonWrite (key, value) {
      json[key] = value
      console.log(json)
    }
  }
}
</script>

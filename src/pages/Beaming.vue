<template>
  <q-page padding class="docs-input row justify-center">
    <div id="beaming">
      <q-slider
        v-model="beamingY"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="jsonWrite()"
      />
      <q-slider
        v-model="beamingX"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="jsonWrite()"
      />
    </div>
  </q-page>
</template>

<script>
import json from '../data.json'

export default {
  name: 'Beaming',
  data () {
    return {
      beamingX: 0,
      beamingY: 0
    }
  },
  methods: {
    jsonWrite () {
      console.log('hello')
      json[this.name] = this.value
    }
  }
}
</script>

<style scoped>

</style>

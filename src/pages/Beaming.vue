<template>
  <q-page padding class="docs-input row justify-center">
    <div id="beaming">
      <q-slider
        v-model="beamingY"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="jsonWrite(beaming['angle'], beamingY)"
      />
      <q-slider
        v-model="beamingX"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="jsonWrite(beaming['distance'], beamingX)"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Beaming',
  data () {
    return {
      beamingX: 0,
      beamingY: 0
    }
  }
}
</script>

<style scoped>

</style>

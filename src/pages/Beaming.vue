<template>
    <div id="beaming">
      <q-slider
        v-model="beamingY"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(beaming['angle'], beamingY)"
      />
      <q-slider
        v-model="beamingX"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(beaming['distance'], beamingX)"
      />
    </div>
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

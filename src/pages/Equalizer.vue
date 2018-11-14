<template>
  <p class="caption">Equalizer</p>
  <div id="eq">
    <q-slider
      v-model="slider0"
      :min="0"
      :max="10"
      :step="1"
      color="pantone"
    />
    <br>
    <q-slider
      v-model="slider1"
      :min="0"
      :max="10"
      :step="1"
      color="pantone"
    />
    <br>
    <q-slider
      v-model="slider2"
      :min="0"
      :max="10"
      :step="1"
      color="pantone"
      @change="writeToJson(slider2)"
    />
  </div>
</template>

<script>
export default {
  name: 'Equalizer'
}
</script>

<style scoped>

</style>

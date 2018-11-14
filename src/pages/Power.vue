<template>
  <q-page-container>
    <q-page padding class="docs-input row justify-center">
      <div style="width: 500px; max-width: 90vw;">
        <p class="caption">Power</p>
        <q-toggle
          v-model="checkPower"
          left-label
          color="pantone"
          @change="writeToJson(checkPower)"
        />
        <p class="caption">Volume</p>
        <q-knob
          v-model="model"
          size="500px"
          style="font-size: 1.5rem"
          color="pantone"
          line-width="5px"
          :min="min"
          :max="max"
          :step="5"
        >
          <q-icon class="on-left" name="volume_up" /> {{ model }}
        </q-knob>

      </div>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: 'Power'
}
</script>

<style scoped>

</style>

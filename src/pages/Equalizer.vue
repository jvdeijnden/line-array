<template>
  <q-page padding class="docs-input row justify-center">
    <div id="eq">
      <p class="caption">Equalizer</p>
      <q-slider
        v-model="slider0"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[0], slider0)"
      />
      <q-slider
        v-model="slider1"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[1], slider1)"
      />
      <q-slider
        v-model="slider2"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[2], slider2)"
      />
      <q-slider
        v-model="slider3"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[3], slider3)"
      />
      <q-slider
        v-model="slider4"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[4], slider4)"
      />
      <q-slider
        v-model="slider5"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[5], slider5)"
      />
      <q-slider
        v-model="slider6"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[6], slider6)"
      />
      <q-slider
        v-model="slider7"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[7], slider7)"
      />
      <q-slider
        v-model="slider2"
        :min="0"
        :max="10"
        :step="1"
        color="pantone"
        @change="writeToJson(eq[2], slider2)"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Equalizer',
  data () {
    return {
      slider0: 0,
      slider1: 0,
      slider2: 0,
      slider3: 0,
      slider4: 0,
      slider5: 0,
      slider6: 0,
      slider7: 0,
      slider8: 0
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

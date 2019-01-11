<script src="/socket.io/socket.io.js"></script>

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
            :min=0
            :max=100
            :step="5"
            @input="jsonWrite('volume', volumeKnob)"
          >
            <q-icon class="on-left" name="volume_up" /> {{ volumeKnob }}
          </q-knob>
        </div>
      </div>
    </q-page>
</template>

<script>
import json from '../data.json'
import axios from 'axios'
// import io from 'socket.io-client'
// import Vue from 'vue'
// import VueSocketIO from 'vue-socket.io'
// const socket = io.connect('http://localhost:8080')

// socket.on('data', function (data) {
//   console.log(data)
// })

export default {
  name: 'Power',
  // sockets: {
  //   connect: function () {
  //     console.log('socket connected')
  //   }
  // },
  data () {
    return {
      powerCheck: json.power,
      volumeKnob: json.volume
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
</script>

<style scoped>

</style>

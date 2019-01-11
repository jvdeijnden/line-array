<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      json: null
    }
  },
  mounted () {
    setInterval(function () {
      axios
        .get(location.protocol + '//' + location.hostname + '/api')
        .catch(error => {
          console.log(error)
        })
        .then(response => {
          console.log(response)
          this.json = response
        })
    }, 5000)
  }
}
</script>

<style>
</style>

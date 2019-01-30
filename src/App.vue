<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
    var that = this
    setInterval(function () {
      that.$store.dispatch('appSettings/updateAppSettings', that)
    }, 750)
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

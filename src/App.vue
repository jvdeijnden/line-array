<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  // preFetch ({ store }) {
  // },
  data () {
    return {
      // json: null
    }
  },
  mounted () {
    // setInterval(function () {
    //   this.$axios
    //     .get(location.protocol + '//' + location.hostname + '/api')
    //     .catch(error => {
    //       console.log(error)
    //     })
    //     .then(response => {
    //       this.json = response.data
    //       this.$store.commit('updatePower', (this.json.power === 'true'))
    //       this.$store.commit('updateVolume', parseInt(this.json.volume))
    //       this.$store.commit('updateEq0', parseInt(this.json.eq0))
    //       this.$store.commit('updateEq1', parseInt(this.json.eq1))
    //       this.$store.commit('updateEq2', parseInt(this.json.eq2))
    //       this.$store.commit('updateEq3', parseInt(this.json.eq3))
    //       this.$store.commit('updateEq4', parseInt(this.json.eq4))
    //       this.$store.commit('updateEq5', parseInt(this.json.eq5))
    //       this.$store.commit('updateEq6', parseInt(this.json.eq6))
    //       this.$store.commit('updateEq7', parseInt(this.json.eq7))
    //       this.$store.commit('updateEq8', parseInt(this.json.eq8))
    //       this.$store.commit('updateAngle', parseInt(this.json.angle))
    //       this.$store.commit('updateDistance', parseInt(this.json.distance))

    //       console.log(this.$store.state.json.power)
    //     })
    // }, 1000)
  }
}
</script>

<style>
</style>

export default ({ Vue, store }) => {
  Vue.prototype.jsonWrite = function (key, value) {
    this.$axios
      .get(location.protocol + '//' + location.hostname + '/api?' + key + '=' + value)
      .catch(error => {
        console.log(error)
      })
  }
}

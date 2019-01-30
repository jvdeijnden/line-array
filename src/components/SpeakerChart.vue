<template>
  <div id="chart">
    <apexchart
      type=bar
      height=350
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
export default {
  name: 'speaker-chart',
  data () {
    return {
      options: {
        chart: {
          id: 'chart',
          toolbar: {
            enabled: false,
            tools: {
              download: false,
              reset: false
            }
          }
        },
        xaxis: {
          type: 'categories',
          categories: [
            'Speaker 1',
            'Speaker 2',
            'Speaker 3',
            'Speaker 4',
            'Speaker 5',
            'Speaker 6',
            'Speaker 7',
            'Speaker 8',
            'Speaker 9'
          ]
        },
        yaxis: {
          min: 0,
          max: 100,
          show: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter (val) {
            return val + '%'
          }
        }
      },
      series: [{
        name: 'speakers',
        data: []
      }]
    }
  },
  created () {
    this.$root.$on('updateSpeakerSeries', this.updateSpeakerSeriescb)
    this.$root.$emit('updateSpeakerSeries')
  },
  methods: {
    updateSpeakerSeriescb () {
      this.series = [{
        // data: this.$store.state.appSettings.speakers
        data: [
          this.$store.state.appSettings.speaker0,
          this.$store.state.appSettings.speaker1,
          this.$store.state.appSettings.speaker2,
          this.$store.state.appSettings.speaker3,
          this.$store.state.appSettings.speaker4,
          this.$store.state.appSettings.speaker5,
          this.$store.state.appSettings.speaker6,
          this.$store.state.appSettings.speaker7,
          this.$store.state.appSettings.speaker8
        ]
      }]
    }
  }
}
</script>

<style scoped>
</style>

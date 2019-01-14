import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'

export default ({ Vue }) => {
  Vue.use(VueApexCharts)
  Vue.component('apexchart', VueApexCharts)

  Vue.prototype.$ApexCharts = ApexCharts
}

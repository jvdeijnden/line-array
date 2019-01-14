<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="pantone"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Line Array
          <div slot="subtitle">Fontys Hogescholen</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item to='power'>
          <q-item-side icon="power_settings_new" />
          <q-item-main label="Power" />
        </q-item>
        <q-item to='equalizer'>
          <q-item-side icon="equalizer" />
          <q-item-main label="Equalizer" />
        </q-item>
        <q-item to='beaming'>
          <q-item-side icon="leak_add" />
          <q-item-main label="Beam forming" />
        </q-item>
        <q-item to='about'>
          <q-item-side icon="info" />
          <q-item-main label="About" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      // json: {
      //   'power': false,
      //   'volume': 0,
      //   'eq0': 50,
      //   'eq1': 50,
      //   'eq2': 50,
      //   'eq3': 50,
      //   'eq4': 50,
      //   'eq5': 50,
      //   'eq6': 50,
      //   'eq7': 50,
      //   'eq8': 50,
      //   'angle': 0,
      //   'distance': 0
      // },
      leftDrawerOpen: this.$q.platform.is.desktop
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
    //       this.power = (this.json.power === 'true')
    //       this.volume = parseInt(this.json.volume)
    //       this.eq0 = parseInt(this.json.eq0)
    //       this.eq1 = parseInt(this.json.eq1)
    //       this.eq2 = parseInt(this.json.eq2)
    //       this.eq3 = parseInt(this.json.eq3)
    //       this.eq4 = parseInt(this.json.eq4)
    //       this.eq5 = parseInt(this.json.eq5)
    //       this.eq6 = parseInt(this.json.eq6)
    //       this.eq7 = parseInt(this.json.eq7)
    //       this.eq8 = parseInt(this.json.eq8)
    //       this.angle = parseInt(this.json.angle)
    //       this.distance = parseInt(this.json.distance)

    //       console.log('app: ' + this.power)
    //     })
    // }, 1000)
  }
}

</script>

<style>
</style>

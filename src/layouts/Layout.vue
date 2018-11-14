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
import { openURL } from 'quasar'
// import json from 'app/src/data.json'

export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}

</script>

<style>
</style>

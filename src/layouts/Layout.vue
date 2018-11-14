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
        <q-item @click.native="openURL('power')">
          <q-item-side icon="code" />
          <q-item-main label="Power" />
        </q-item>
        <q-item @click.native="openURL('equalizer')">
          <q-item-side icon="settings" />
          <q-item-main label="Equalizer" />
        </q-item>
        <q-item @click.native="openURL('beamforming')">
          <q-item-side icon="settings" />
          <q-item-main label="Beam forming" />
        </q-item>
        <q-item @click.native="openURL('about')">
          <q-item-side icon="info" />
          <q-item-main label="About" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <router-view />
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import json from 'app/src/data.json'

export default {
  name: 'Layout',
  data () {
    return {
      checkPower: false,
      model: 0,
      sliderLow: 0,
      sliderMid: 0,
      sliderHigh: 0,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}

function writeToJson (val) {
  console.log(json, val)
}

writeToJson(0)
</script>

<style>
</style>

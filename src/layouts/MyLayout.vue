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
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="Equalizer" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="settings" />
          <q-item-main label="Settings" />
        </q-item>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="info" />
          <q-item-main label="About" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <q-page padding class="docs-input row justify-center">
        <div style="width: 500px; max-width: 90vw;">
        <p class="caption">Power</p>
        <q-toggle
          v-model="checkPower"
          left-label
          color="pantone"
          @change="writeToJson(checkPower)"
        />
        <p class="caption">Volume</p>
        <q-knob
        v-model="model"
        size="500px"
        style="font-size: 1.5rem"
        color="pantone"
        line-width="5px"
        :min="min"
        :max="max"
        :step="5"
      >
        <q-icon class="on-left" name="volume_up" /> {{ model }}
      </q-knob>
        <p class="caption">Equalizer</p>
        <div id="eq">
        <q-slider
          v-model="sliderLow"
          :min="0"
          :max="10"
          :step="2"
          color="pantone"
          />
          <br>
        <q-slider
          v-model="sliderMid"
          :min="0"
          :max="10"
          :step="2"
          color="pantone"
          />
          <br>
        <q-slider
          v-model="sliderHigh"
          :min="0"
          :max="10"
          :step="2"
          color="pantone"
          @change="writeToJson(sliderHigh)"
          />
        </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import json from 'app/src/data.json'

export default {
  name: 'MyLayout',
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

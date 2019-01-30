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
          <q-icon name="mdi-menu" />
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
        <q-item to='gain'>
          <q-item-side icon="mdi-volume-high" />
          <q-item-main label="Gain" />
        </q-item>
        <q-item to='equalizer'>
          <q-item-side icon="mdi-tune" />
          <q-item-main label="Equalizer" />
        </q-item>
        <q-item to='speaker'>
          <q-item-side icon="mdi-speaker" />
          <q-item-main label="Speaker control" />
        </q-item>
        <q-item to='beaming'>
          <q-item-side icon="mdi-current-ac" />
          <q-item-main label="Beam forming" />
        </q-item>
        <q-item to='about'>
          <q-item-side icon="mdi-information" />
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
  name: 'AppLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>

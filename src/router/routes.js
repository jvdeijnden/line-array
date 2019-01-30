import AppLayout from 'layouts/AppLayout.vue'
import GainPage from 'pages/GainPage.vue'
import EqualizerPage from 'pages/EqualizerPage.vue'
import SpeakerPage from 'pages/SpeakerPage.vue'
import BeamingPage from 'pages/BeamingPage.vue'
import AboutPage from 'pages/AboutPage.vue'
import Error404Page from 'pages/Error404Page.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        redirect: 'gain'
      },
      {
        path: 'gain',
        component: GainPage
      },
      {
        path: 'equalizer',
        component: EqualizerPage
      },
      {
        path: 'speaker',
        component: SpeakerPage
      },
      {
        path: 'beaming',
        component: BeamingPage
      },
      {
        path: 'about',
        component: AboutPage
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: Error404Page
  })
}

export default routes

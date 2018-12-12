// import json from data
// console.log(json)
// const data = JSON.parse(json)

const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Power.vue')
      },
      {
        path: 'power',
        component: () => import('pages/Power.vue')
      },
      {
        path: 'equalizer',
        component: () => import('pages/Equalizer.vue')
      },
      {
        path: 'beaming',
        component: () => import('pages/Beaming.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

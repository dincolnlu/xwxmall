const home = require('./home.vue').default

const routes = [
  {
    name: 'home',
    path: '/home',
    meta: {
      title: '平台介绍',
      layout: 'no-sideBar'
    },
    component: home
  }
]
export default routes

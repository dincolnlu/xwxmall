const home = () => import('./home.vue')

const routes = [
  {
    name: 'home',
    path: '/home',
    meta: {
      title: '平台介绍'
    },
    component: home
  }
]
export default routes

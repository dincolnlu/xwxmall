const about = () => import('./about.vue')

const routes = [
  {
    name: 'About',
    path: '/about',
    meta: {
      title: '平台介绍'
    },
    component: about
  }
]
export default routes

const my = () => import('./my.vue')

const routes = [
  {
    name: 'my',
    path: '/about',
    meta: {
      title: '个人中心'
    },
    component: my
  }
]
export default routes

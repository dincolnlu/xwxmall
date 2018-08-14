const service = () => import('./service.vue')

const routes = [
  {
    name: 'service',
    path: '/service',
    meta: {
      title: '个人中心'
    },
    component: service
  }
]
export default routes

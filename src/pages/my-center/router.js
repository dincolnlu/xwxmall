const myCenter = () => import('./my-center.vue')

const routes = [
  {
    name: 'my-center',
    path: '/myCenter',
    meta: {
      title: '个人中心'
    },
    component: myCenter
  }
]
export default routes

const personalCenter = () => import('./personalCenter.vue')

const routes = [
  {
    name: 'personalCenter',
    path: '/personalCenter',
    meta: {
      title: '个人中心'
    },
    component: personalCenter
  }
]
export default routes

const error404 = require('./404.vue')

const routes = [
  {
    name: '404',
    path: '/404',
    meta: {
      title: '404',
      layout: 'no-sideBar'
    },
    component: error404
  }
]
export default routes

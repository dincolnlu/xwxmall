import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const ApiRoutes = (r => {
//   return r.keys().map(key => r(key).default)
// })(require.context('../components', true, /\.js$/))

// console.log(ApiRoutes)
// console.log(...[ApiRoutes])

// const routes = []
// ApiRoutes.forEach(ele => {
//   routes.push(...ele)
// })

const routesURL = (r => {
  const k = []
  r.keys().map(key => k.push(...r(key).default))
  return k
})(require.context('../pages', true, /\.js$/))

// console.log(routes)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: '/shop',
      children: []
    },
    ...routesURL

  ]
})

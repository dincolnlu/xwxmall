// const cart = () => import('./cart.vue')
const cart = require('./cart.vue').default

const routes = [
  {
    name: 'cart',
    path: '/cart',
    meta: {
      title: 'cart'
    },
    component: cart
  }
]
export default routes

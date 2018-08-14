const shop = () => import('./shop.vue')

const routes = [
  {
    name: 'shop',
    path: '/shop',
    meta: {
      title: '商城'
    },
    component: shop
  }
]
export default routes

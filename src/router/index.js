import Vue from 'vue'
import Router from 'vue-router'
import { asyncImport } from './asyncload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: asyncImport('components/home')
    }
  ]
})

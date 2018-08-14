// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/util/rem'
// import 'lib-flexible/flexible'
import FastClick from 'fastclick'
// layouts模板页
import Default from './layouts/default.vue'
import NoSideBar from './layouts/noSideBar.vue'

// 处理移动端click事件300毫秒延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 生成模板错误提示
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.component('default-layout', Default)
Vue.component('no-sideBar-layout', NoSideBar)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

// Vue.component('default-layout', Default)
// Vue.component('no-sideBar-layout', NoSideBar)

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

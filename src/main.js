// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/util/rem'
// import 'lib-flexible/flexible'
import FastClick from 'fastclick'

// 引入svg组件

// 全局注册icon-svg
import '@/icons'

// 全局注册layouts插件
import '@/layouts'

// 导入封装axios插件
import axiosPlugin from './http/baseApi'

// 处理移动端click事件300毫秒延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// 生成模板错误提示
Vue.config.productionTip = false

// 使用封装axios插件
Vue.use(axiosPlugin)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

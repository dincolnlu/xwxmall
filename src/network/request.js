/*
 * @Author: dincoln
 * @Date: 2018-08-07 14:51:32
 * @Last Modified by:   dincoln
 * @Last Modified time: 2018-08-07 14:51:32
 */

import axios from 'axios'
import api from './api'
import qs from 'qs'
// import { Alert } from 'vux'
// import router from '@/router'

const Axios = axios.create({
  baseURL: api.baseURL,
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许cookies
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

Axios.interceptors.request.use(
  config => {
    // 在发送请求前做某件事
    if (
      config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
    ) {
      // 序列号
      config.data = qs.stringify(config.data)
    }
    // 若是有做鉴权token，就给头部带上token
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token
    // }
    return config
  },
  error => {
    alert('error.data')
    return Promise.reject(error.data.error.message)
  }
)
// 返回状态判断（添加响应拦截器）
Axios.interceptors.response.use(
  res => {
    if (res.data && res.data.errno) {
      alert('error2')
      return Promise.reject(res.data.error.message)
    }
    return res
  },
  error => {
    // if (!window.localStorage.getItem('loginUserBaseInfo')) {
    //   router.push({
    //     path: '/login'
    //   })
    // } else {
    //   let lifeTime =
    //     JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime *
    //     1000
    //   // 当前时间的时间戳
    //   let nowTime = new Date().getTime()
    //   console.log(nowTime, lifeTime)
    //   console.log(nowTime > lifeTime)
    //   if (nowTime > lifeTime) {
    //     alert('登录状态信息过期,请重新登录')
    //     router.push({
    //       path: '/login'
    //     })
    //   } else {
    //     // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
    //     if (error.response.status === 403) {
    //       alert('403')
    //     }
    //     if (error.response.status === 500) {
    //       alert('500')
    //     }
    //     if (error.response.status === 502) {
    //       alert('502')
    //     }
    //     if (error.response.status === 404) {
    //       alert('404')
    //     }
    //   }
    // }
    switch (error.response.status) {
      case '403':
        alert('403')
        break
      case '500':
        alert('500')
        break
      case '502':
        alert('403')
        break
      case '404':
        alert('404')
        break
    }
    // 返回 response 里的错误信息
    let errorInfo = error.data.error ? error.data.error.message : error.data
    return Promise.reject(errorInfo)
  }
)

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}

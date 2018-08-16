import qs from 'qs'
import {Axios, showToast} from './baseApi'

class Api {
  // post 请求
  async get (url, data) {
    try {
      let res = await Axios.get(url, { params: data })
      // res = res.data
      console.log(res)
      // return new Promise((resolve) => {
      //   // if (res.code === 0) {
      //   //   resolve(res)
      //   // } else {
      //   //   resolve(res)
      //   // }
      // })
    } catch (err) {
      alert('服务器出错1')
      console.log(err)
      showToast('服务器出错1')
    }
  }
  async post (url, data) {
    try {
      let res = await Axios.post(url, qs.stringify(data))
      // res = res.data
      console.log(res)
      // return new Promise((resolve, reject) => {
      //   // if (res.code === 0) {
      //   //   resolve(res)
      //   // } else {
      //   //   reject(res)
      //   // }
      // })
    } catch (err) {
      // return (e.message)
      alert('服务器出错')
      console.log(err)
      showToast('服务器出错')
    }
  }
}

export default new Api()

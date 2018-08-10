import axios from 'axios'
import config from './config.js'
import qs from 'qs'
import { Toast } from 'vant'
// import router from '@/router' // 路由

/**
 *
 *
 * @param {*} options
 * @returns
 */
const Axios = function (options) {
  return new Promise((resolve, reject) => {
    const _axios = axios.create({
      baseURL: config.baseURL, // 请求地址
      timeout: config.timeout, // 设置超时时间
      responseType: config.responseType, // 返回数据类型
      withCredentials: config.withCredentials, // 是否允许带cookie这些
      headers: config.headers
    }
    )

    // request 拦截器
    _axios.interceptors.request.use(
      config => {
        // Tip: 1
        // vuex 开启全屏的 loading 动画

        // Tip: 2
        // 带上 token , 可以结合 vuex ,localStorage , cookies
        // if (store.getters.token) {
        //     config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        // } else {
        //     // 重定向到登录页面
        // }

        // Tip: 3
        // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (config.method.toLocaleLowerCase() === 'post' || config.method.toLocaleLowerCase() === 'put' || config.method.toLocaleLowerCase() === 'delete') {
          config.data = qs.stringify(config.data)
        }
        return config
      },
      error => {
        // 请求错误时做些事(接口错误、超时等)
        // Tip: 4
        // 关闭loadding
        console.log('request:', error)
        showToast(error)

        //  1.判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          // console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
          showToast('超时')
          // return service.request(originalRequest);//例如再重复请求一次
        }
        //  2.需要重定向到错误页面
        const errorInfo = error.response
        console.log(errorInfo)
        showToast(errorInfo)
        if (errorInfo) {
          // error =errorInfo.data//页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject   // 404 403 500 ... 等
          //   const errorStatus = errorInfo.status
          //   router.push({
          //     path: `/error/${errorStatus}`
          //   })
        }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )

    // response 拦截器
    _axios.interceptors.response.use(
      response => {
        let data
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
          data = response.request.responseText
        } else {
          data = response.data
        }
        // 根据返回的code值来做不同的处理（和后端约定）
        switch (data.code) {
          case '':
            break
          default:
        }
        // 若不是正确的返回code，且已经登录，就抛出错误
        // const err = new Error(data.description)

        // err.data = data
        // err.response = response

        // throw err
        return data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
          }
        }
        console.error(err)
        showToast(err)
        // 此处我使用的是 element UI 的提示组件
        // Message.error(`ERROR: ${err}`);
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    _axios(options)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 *
 *
 * @param {*} message 提示内容
 * @param {string} [type='text'] 提示类型:loading,success,fail,clear
 * @param {string} [mask='false'] 是否显示背景蒙层
 * @param {string} [forbidClick='false'] 是否禁止背景点击
 * @param {string} [loadingType='circular'] 加载图标类型, 可选值为 spinner
 * @param {string} [duration='3000'] 展示时长(ms)，值为 0 时，toast 不会消失
 */

const showToast = (message, type = 'text', mask = 'false', forbidClick = 'false', loadingType = 'circular', duration = '3000') => {
  Toast[type]({
    message, // 内容
    mask, // 蒙层
    forbidClick, // 禁止背景
    loadingType, // 加载图标类型
    duration // 展示时长(ms)
  })
}

export {Axios, showToast}

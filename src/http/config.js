/*
 * @Author: dincoln
 * @Date: 2018-08-17 15:07:25
 * @Last Modified by:   dincoln
 * @Last Modified time: 2018-08-17 15:07:25
 */
const baseUrl = process.env.NODE_ENV === 'development' ? 'https://www.easy-mock.com/mock/596ebd73a1d30433d83722a8' : ''

export default {
//   method: 'post',
  // 基础url前缀
  baseURL: baseUrl,
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}

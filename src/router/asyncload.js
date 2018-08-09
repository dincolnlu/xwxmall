const url = require.context('../components', true, /\.vue$/)
// const asyncImport = (url) => {
//   return () => import(`@/${url}`)
// }
const filename = './about/HelloWorld.vue'
console.log(url(filename))
console.log(url.keys())

var router = {
  path: '',
  name: '',
  component: resolve => require.ensure([], (require) => {
    resolve(require.context('../components', true, /\.vue$/)('./about/HelloWorld.vue')) // ...:写路径地址
  })
}
console.log(router.component)

export default router
/**
 * 简化router文件
 * @param  {[String]} path          定义路由路径
 * @param  {[String]} name          挂在文件路径
 * @param  {[String]} title         页面title
 * @param  {Object} [other={}]    路由其他参数
 * @param  {Array}  [children=[]] 嵌套路由配置
 * @return {Object}               返回router可用obj
 */
// export const path = (path, name, title, other = {}, children = []) => {
//   return Object.assign({
//     path: path,
//     name: name,
//     meta: {
//       title: title
//     },
//     component: asyncImport('components' + name + '.vue'),
//     children: children
//   }, other)
// }

/*
 * @Author: dincoln
 * @Date: 2018-08-15 15:59:52
 * @Last Modified by: dincoln
 * @Last Modified time: 2018-08-17 10:30:11
 */

import Vue from 'vue'
// 引入svg组件
import SvgIcon from '@/components/common/svg-icons'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
// console.log(requireAll(req))

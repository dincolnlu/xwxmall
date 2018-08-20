
import mutations from './mutations'
import actions from './action'
import getters from './getters'

const state = {
  isLoading: false // 加载组件
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

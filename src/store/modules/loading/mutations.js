import { LOADING_PLUS } from './mutation-types.js'

export default {
  // 加载组件
  [LOADING_PLUS] (state, isLoading) {
    state.isLoading = isLoading
  }
}

/*
 * @Author: dincoln
 * @Date: 2018-08-15 16:00:15
 * @Last Modified by: dincoln
 * @Last Modified time: 2018-08-20 10:04:55
 */
<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
// 全局loading

import loading from '@/components/common/loading'
import store from '@/store'
import {mapState} from 'vuex'

// import { mapState } from 'vuex'

const defaultLayout = 'default'

export default {
  store,
  name: 'App',
  components: {
    loading
  },
  computed: {
    layout () {
      return `${this.$route.meta.layout || defaultLayout}-layout`
    },
    ...mapState([
      'isLoading'
    ])
  },
  created () {
    // console.log(this.$route, this.$route.meta.layout)
  },
  updated () {
    // console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style lang='scss'>
@import './style/reset.scss';
</style>

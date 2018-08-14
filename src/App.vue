<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <loading></loading>
  </div>
</template>

<script>
// 全局loading
import loading from '@/components/common/loading'

const defaultLayout = 'default'

export default {
  name: 'App',
  components: {
    loading
  },
  computed: {
    layout () {
      return `${this.$route.meta.layout || defaultLayout}-layout`
    }
  },
  created () {
    console.log(this.$route, this.$route.meta.layout)
  },
  updated () {
    console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style lang='scss'>
 @import url('./style/font-icons.scss');
</style>

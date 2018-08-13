<template>
  <div>
    <van-icon name="success" color="red"/>
    <loading></loading>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import footBar from '@/components/footer/footBar'
import loading from '@/components/common/loading'

import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)

export default {

  components: {
    footBar,
    loading
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

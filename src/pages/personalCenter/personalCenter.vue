<template>
  <div>
      <p @click="getName">{{name}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import api from '../../http/index.js'
Vue.use(api)

export default {
  data () {
    return {
      name: '个人中心'
    }
  },
  methods: {
    getName () {
      console.log(this.$api)
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

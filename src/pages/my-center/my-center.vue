/*
 * @Author: dincoln
 * @Date: 2018-08-17 15:07:14
 * @Last Modified by:   dincoln
 * @Last Modified time: 2018-08-17 15:07:14
 */
<template>
  <div>
      <p @click="getName">{{name}}</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: '个人中心'
    }
  },
  methods: {
    getName () {
      console.log(this.$api.post('/xwx/userInfo'))
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

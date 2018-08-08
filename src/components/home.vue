<template>
  <div>
    <van-button @touchstart.native.stop="show = true">
      弹出默认键盘
    </van-button>

    <van-number-keyboard
      :show="show"
      extra-key="."
      close-button-text="完成"
      @blur="show = false"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import {NumberKeyboard, Toast, Button} from 'vant'

Vue.use(NumberKeyboard).use(Toast).use(Button)

export default {
  data () {
    return {
      show: true
    }
  },

  methods: {
    onInput (value) {
      Toast(value)
    },
    onDelete () {
      Toast('delete')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

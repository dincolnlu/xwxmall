/*
 * @Author: dincoln
 * @Date: 2018-08-17 15:02:11
 * @Last Modified by: dincoln
 * @Last Modified time: 2018-08-17 15:16:49
 */

<template>
<div class="loading_container">
  <svg-icon  class-name="loading" icon-class="loading-bar"></svg-icon>
</div>
</template>

<script>
export default {
  data () {
    return {
      loading: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.loading_container{
  @include center;
  .svg-icon-loading{
    @include wh(30px,30px);
    fill: currentColor;
    overflow: hidden;
    color:$color-primary
  }
}

</style>

/*
 * @Author: dincoln
 * @Date: 2018-08-15 15:59:32
 * @Last Modified by: dincoln
 * @Last Modified time: 2018-08-15 17:45:21
 */
<template>
  <div class="x-footer">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['value']
}
</script>

<style lang="scss">
  @import '../../style/mixin.scss';
  .x-footer{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    @include wh(100%,50px);
    background: $color-maincolor;
    border-top: 1px solid $color-border-regular;
    box-shadow: 0px -1px 3px 0px $color-border-regular;
  }
</style>

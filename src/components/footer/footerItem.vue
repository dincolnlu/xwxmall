/*
 * @Author: dincoln
 * @Date: 2018-08-15 16:00:07
 * @Last Modified by: dincoln
 * @Last Modified time: 2018-08-15 17:42:47
 */
<template>
  <!-- <a class="x-footer-item" >
    <span class="x-footer-item-icon">
      <slot name="icon-normal"></slot>
    </span>
    <span class="x-footer-item-text">
      <slot></slot>
    </span>
  </a>   -->
    <a class="x-footer-item" @click="$parent.$emit('input',id)">
        <span class="x-footer-item-icon" :class="isActive? 'is-active':'is-normal'" ><slot name="icon"></slot></span>
        <span class="x-footer-item-text"><slot></slot></span>
    </a>
</template>

<script>
export default{
  props: ['id'],
  computed: {
    isActive () {
      if (this.$parent.value === this.id) {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../style/mixin.scss';
.x-footer-item{
  flex: 1;
  text-align: center;
  .x-footer-item-icon{
    display: block;
    padding-top: 6px;
  }
  .x-footer-item-text{
    display: block;
    font-size: 8px;
    margin-top: -3px;
    color:$color-text-regular;
  }
  .is-normal{
    color:$color-text-link;
  }
  .is-active{
    color:$color-text-link-hover
  }
}
</style>

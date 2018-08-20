/*
 * @Author: dincoln
 * @Date: 2018-08-15 15:59:57
 * @Last Modified by: dincoln
 * @Last Modified time: 2018-08-20 14:06:00
 */
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
export default{
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return `svg-icon-${this.className}`
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>
<style lang='scss'>
@import '../../style/mixin.scss';
.svg-icon {
  @include wh(1em,1em);
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

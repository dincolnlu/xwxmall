<template>
    <router-link class="x-footer-item" :to="{name:linkTo}" exact>
        <div class="x-footer-item-box">
          <div class="x-footer-item-icon">
            <svg-icon class-name="foot" :icon-class="iconClass"></svg-icon>
            <span class="x-icon-info" v-show="info">{{info}}</span>
            <span class="x-icon-dot" v-show="dot"></span>
          </div>
        </div>
        <span class="x-footer-item-text"><slot></slot></span>
      </router-link>
</template>
<script>
export default {
  name: 'footerItem',
  props: {
    linkTo: [String],
    iconClass: [String],
    dot: Boolean,
    info: [String, Number]
  }

}
</script>
<style lang="scss">
  @import '../../style/mixin.scss';
  .svg-icon-foot {
    @include wh(19px,19px);
    fill: currentColor;
    overflow: hidden;
    color:$color-text-regular
  }
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
    .router-link-active ,.router-link-exact-active{
      .svg-icon-foot{
        color:$color-text-link-hover
      }
    }
  }
  .x-footer-item{
    flex: 1;
    text-align: center;
    .x-footer-item-box{
      padding-top: 8px;
      .x-footer-item-icon{
        position: relative;
        @include wh(19px,19px);
        margin: 0 auto;
      }
    }
    .x-footer-item-text{
      display: block;
      font-size: 8px;
      margin-top: 3px;
      color:$color-text-regular;
    }
    .x-icon-info{
      color: #fff;
      left: 100%;
      top: -.5em;
      font-size: .5em;
      padding: 0 .3em;
      text-align: center;
      min-width: 1.2em;
      line-height: 1.2;
      position: absolute;
      border-radius: .6em;
      box-sizing: border-box;
      background-color: $color-icons-link-active;
      transform: translateX(-50%);
    }
    .x-icon-dot{
      position: absolute;
      @include wh(8px,8px);
      @include absoulute(0,100%,0,-8px);
      border-radius: 100%;
      background-color: $color-icons-link-active;
    }
  }
</style>

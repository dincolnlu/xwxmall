<template>
  <div>
    <div class="x-footer">
      <router-link class="x-footer-item" :to="{name:'shop'}" exact>
        <span class="x-footer-item-icon">
          <svg-icon class-name="foot" icon-class="store"></svg-icon>
        </span>
        <span class="x-footer-item-text">商城</span>
      </router-link>

      <router-link class="x-footer-item" :to="{name:'sort'}">
        <span class="x-footer-item-icon">
          <svg-icon class-name="foot" icon-class="viewGallery"></svg-icon>
        </span>
        <span class="x-footer-item-text">分类</span>
      </router-link>

      <router-link class="x-footer-item" :to="{name:'cart'}">
        <span class="x-footer-item-icon">
          <svg-icon class-name="foot" icon-class="cart"></svg-icon>
        </span>
          <span class="x-footer-item-text">购物车</span>
      </router-link>
      <router-link class="x-footer-item" :to="{name:'personalCenter'}">
        <span class="x-footer-item-icon">
          <svg-icon class-name="foot" icon-class="account"></svg-icon>
         </span>
          <span class="x-footer-item-text">我</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerBar'
}
</script>
<style lang="scss">
  @import '../../style/mixin.scss';
  .svg-icon-foot {
    @include wh(19px,19px);
    fill: currentColor;
    overflow: hidden;
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
}
</style>

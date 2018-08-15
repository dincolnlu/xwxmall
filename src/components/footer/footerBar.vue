<template>
  <div>
    <x-footer-box v-model="select">
      <x-footer-item id='tab1'>
        <svg-icon class-name="foot" slot="icon" icon-class="store"></svg-icon>
        商城
      </x-footer-item>
      <x-footer-item id='tab2'>
        <svg-icon class-name="foot" slot="icon" icon-class="viewGallery"></svg-icon>
        分类
      </x-footer-item>
      <x-footer-item id='tab3'>
        <svg-icon class-name="foot" slot="icon" icon-class="cart"></svg-icon>
        购物车
      </x-footer-item>
      <x-footer-item id='tab4'>
        <svg-icon class-name="foot" slot="icon" icon-class="account"></svg-icon>
        我
      </x-footer-item>
    </x-footer-box>
  </div>
</template>

<script>
import xFooterBox from './footerBox'
import xFooterItem from './footerItem'
export default {
  name: 'footerBar',
  data () {
    return {
      select: 'tab1'
    }
  },
  components: {
    xFooterBox,
    xFooterItem
  }
}
</script>
<style lang="scss">
  @import '../../style/mixin.scss';
  .svg-icon-foot {
    @include wh(19px,19px);
    fill: currentColor;
    overflow: hidden;
  }
</style>

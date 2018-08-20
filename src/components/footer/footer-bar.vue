<template>
  <div>
    <div class="x-footer">
      <footer-item link-to="shop" icon-class="store">商城</footer-item>
      <footer-item link-to="sort" icon-class="viewGallery">分类</footer-item>
      <footer-item link-to="cart" icon-class="cart" info="100">购物车</footer-item>
      <footer-item link-to="my-center" icon-class="account" dot>我</footer-item>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import footerItem from './footer-item'
Vue.component('footer-item', footerItem)
export default {
  name: 'footerBar'
}
</script>

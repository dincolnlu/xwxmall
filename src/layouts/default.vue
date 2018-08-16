<template>
  <div>
    <div class="container">
      <slot/>
    </div>
    <footer-bar />
  </div>
</template>

<script>

import footerBar from '@/components/footer/footerBar'
export default {
  components: {
    footerBar
  }
}
</script>
<style lang="scss">
//@import '../style/mixin.scss';
</style>

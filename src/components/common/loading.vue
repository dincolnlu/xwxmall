<template>
<div class="loading_container">
  <div class="loading-items-box">
    <div class="item item-four"></div>
    <div class="item item-three"></div>
    <div class="item item-two"></div>
    <div class="item item-one"></div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      positionY: 0,
      timer: null
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.positionY++
    }, 600)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/mixin.scss';

  .loading-items-box {
    @include center;
    @include wh(200px);
    .item-one {
      @include center;
      @include wh(50px);
    }
    .item-two {
      @include center;
      @include wh(70px);
      animation-delay: 0.1s;
    }
    .item-three {
      @include center;
      @include wh(90px);
      animation-delay: 0.2s;
    }
    .item-four {
      @include center;
      @include wh(110px);
      animation-delay: 0.3s;
    }

  }

  .item {
    border-radius: 50%;
    position: absolute;
    border-left: 5px solid $blue;
    border-right: 5px solid $blue;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    animation: animate 2s infinite;
  }
  @keyframes animate{
    50% {
      transform: translate(-50%, -50%) rotate(-180deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

</style>

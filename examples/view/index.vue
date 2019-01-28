<template>
  <div class="container">
    <div class="vertical-middle">
      <img :src="require('assets/UIbg.png')" class="bg" alt="" />
      <div class="product-name">
        <h2>Code UI</h2>
        <img
          :src="require('assets/incubating.png')"
          class="incubating"
          alt="logo"
        />
      </div>
      <div class="product-desc">
        <p>一套基于Vue.Js的高可用的UI组件库</p>
        <p>一套写法, 三端统一（PC、移动端、小程序）</p>
      </div>
      <div class="product-btns">
        <router-link to="/guide/install" class="c-button is_round">
          开始使用
        </router-link>
        <a
          href="https://github.com/Code-Street/code-ui-vue"
          target="_blank"
          class="c-button is_round"
        >
          Github
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(
    0deg,
    #72e0cc 0%,
    #30afed 51%,
    #2b87f6 100%
  );
  .vertical-middle {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    padding: 0 50px;
    img.bg {
      position: absolute;
      z-index: -1;
      left: 0;
      top: 5px;
      width: 100%;
    }
    .product-name {
      display: inline-block;
      position: relative;
      .logo {
        width: 80px;
        height: 80px;
        vertical-align: middle;
      }
      h2 {
        display: inline-block;
        font-family: Avenir-Heavy;
        font-size: 46px;
        color: #fff;
        text-align: center;
        word-break: break-word;
        margin: 0;
        vertical-align: middle;
        // margin-left: -13px;
      }
      img.incubating {
        position: absolute;
        right: -97px;
        top: -30px;
        width: 99px;
      }
    }
    .product-desc {
      opacity: 0.6;
      font-family: Avenir-Medium;
      font-size: 24px;
      color: #fff;
      text-align: center;
      margin: 40px auto 0;
      max-width: 730px;
      p {
        margin: 10px 0;
      }
    }
    .product-btns {
      text-align: center;
      margin-top: 40px;
    }
  }
}
</style>

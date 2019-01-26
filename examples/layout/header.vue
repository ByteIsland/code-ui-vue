<template>
  <div class="wrapper-header">
    <div class="wrapper-header-nav">
      <router-link to="/" class="wrapper-header-nav-logo">
        <img :src="require('assets/logo-small.png')" alt="" />
      </router-link>
      <!-- 菜单 -->
      <c-menu
        class="wrapper-header-nav-list"
        mode="horizontal"
        :active-name="activeName"
      >
        <c-menu-item name="guide" to="/guide/introduce">指南</c-menu-item>
        <c-menu-item name="component" to="/components/color">组件</c-menu-item>
      </c-menu>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeName() {
      return this.$router.currentRoute.path.indexOf("/guide") > -1
        ? "guide"
        : "component";
    }
  }
};
</script>

<style lang="scss">
@import "../styles/header.scss";
</style>

<template>
  <div class="menu-list">
    <c-menu :active-name="activeName" v-if="isGuide">
      <c-menu-item name="introduce" to="/guide/introduce">介绍</c-menu-item>
    </c-menu>
    <c-menu :active-name="activeName" v-else style="width: auto">
      <c-menu-group title="基础">
        <c-menu-item name="color" to="/components/color">
          Color <span>色彩</span>
        </c-menu-item>
        <c-menu-item name="font" to="/components/font">
          Font <span>字体</span>
        </c-menu-item>
        <c-menu-item name="button" to="/components/button">
          Button <span>按钮</span>
        </c-menu-item>
        <c-menu-item name="icon" to="/components/icon">
          Icon <span>图标</span>
        </c-menu-item>
      </c-menu-group>
      <c-menu-group title="布局">
        <c-menu-item name="grid" to="/components/grid">
          Grid <span>栅格</span>
        </c-menu-item>
        <c-menu-item name="layout" to="/components/layout">
          Layout <span>布局</span>
        </c-menu-item>
        <c-menu-item name="card" to="/components/card">
          Card <span>卡片</span>
        </c-menu-item>
      </c-menu-group>
      <c-menu-group title="导航">
        <c-menu-item name="menu" to="/components/menu">
          Menu <span>菜单</span>
        </c-menu-item>
        <c-menu-item name="dropdown" to="/components/dropdown">
          Dropdown <span>下拉菜单</span>
        </c-menu-item>
        <c-menu-item name="breadcrumb" to="/components/breadcrumb">
          Breadcrumb <span>面包屑</span>
        </c-menu-item>
        <c-menu-item name="loadingBar" to="/components/loadingBar">
          LoadingBar <span>加载进度条</span>
        </c-menu-item>
      </c-menu-group>
      <c-menu-group title="表单">
        <c-menu-item name="input" to="/components/input">
          Input <span>输入框</span>
        </c-menu-item>
        <c-menu-item name="switch" to="/components/switch">
          Switch <span>开关</span>
        </c-menu-item>
      </c-menu-group>
      <c-menu-group title="视图">
        <c-menu-item name="alert" to="/components/alert">
          Alert <span>警告提示</span>
        </c-menu-item>
        <c-menu-item name="message" to="/components/message">
          Message <span>全局提示</span>
        </c-menu-item>
        <c-menu-item name="notice" to="/components/notice">
          Notice <span>通知提示</span>
        </c-menu-item>
      </c-menu-group>
    </c-menu>
  </div>
</template>

<script>
export default {
  computed: {
    activeName() {
      const router = this.$router;
      return router.currentRoute.name ? router.currentRoute.name : "button";
    },
    isGuide() {
      return this.$router.currentRoute.path.indexOf("/guide") > -1;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/menu.scss";
</style>

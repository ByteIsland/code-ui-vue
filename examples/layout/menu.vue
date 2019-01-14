<template>
  <div class="menu-list">
    <c-menu :active-name="activeName" style="width: auto">
      <c-menu-group title="基础">
        <c-menu-item name="button" to="/components/button">Button 按钮</c-menu-item>
        <c-menu-item name="icon" to="/components/icon">Icon 图标</c-menu-item>
      </c-menu-group>
      <c-menu-group title="布局">
        <c-menu-item name="grid" to="/components/grid">Grid 栅格</c-menu-item>
        <c-menu-item name="layout" to="/components/layout">Layout 布局</c-menu-item>
        <c-menu-item name="card" to="/components/card">Card 卡片</c-menu-item>
      </c-menu-group>
      <c-menu-group title="导航">
        <c-menu-item name="menu" to="/components/menu">Menu 菜单</c-menu-item>
        <c-menu-item name="dropdown" to="/components/dropdown">Dropdown 下拉菜单</c-menu-item>
        <c-menu-item name="breadcrumb" to="/components/breadcrumb">Breadcrumb 面包屑</c-menu-item>
        <c-menu-item name="switch" to="/components/loadingBar">LoadingBar 加载进度条</c-menu-item>
      </c-menu-group>
      <c-menu-group title="表单">
        <c-menu-item name="input" to="/components/input">Input 输入框</c-menu-item>
        <c-menu-item name="switch" to="/components/switch">Switch 开关</c-menu-item>
      </c-menu-group>
      <c-menu-group title="视图">
        <c-menu-item name="alert" to="/components/alert">Alert 警告提示</c-menu-item>
        <c-menu-item name="message" to="/components/message">Message 全局提示</c-menu-item>
        <c-menu-item name="notice" to="/components/notice">Notice 通知提示</c-menu-item>
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
    }
  }
};
</script>

<style scoped></style>

let code = {};

code.BASE = `
<template>
  <c-menu mode="horizontal" theme="light" active-name="3-1">
    <c-menu-item name="1">
      <c-icon name="work-order" />
      内容管理
    </c-menu-item>
    <c-menu-item name="2">
      <c-icon name="users" />
      用户管理
    </c-menu-item>
    <c-menu-sub name="3">
      <template slot="title">
        <c-icon name="charts" />
        统计分析
      </template>
      <c-menu-group title="使用">
        <c-menu-item name="3-1">新增用户</c-menu-item>
        <c-menu-item name="3-2">活跃时段</c-menu-item>
        <c-menu-item name="3-3">时段分析</c-menu-item>
      </c-menu-group>
      <c-menu-group title="流水">
        <c-menu-item name="3-4">交易总额</c-menu-item>
        <c-menu-item name="3-5">交易时段</c-menu-item>
      </c-menu-group>
    </c-menu-sub>
    <c-menu-item name="4">
      <c-icon name="setting" />
      综合设置
    </c-menu-item>
  </c-menu>
</template>
`;

export default code;
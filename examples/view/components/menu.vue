<template>
  <c-article>
    <article>
      <Anchor h1 title="Menu 菜单" />
      <Anchor h2 title="概述" />
      <p class="description">
        为页面提供导航功能的菜单列表, 常用语网页顶部与左侧
      </p>
      <Anchor h2 title="代码示例" />
      <Demo id="BASE">
        <div slot="case">
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
        </div>
        <span slot="title" class="title">顶部导航</span>
        <div slot="desc">
          <p>水平的顶部导航</p>
          <p>通过设置属性<code>theme</code>来切换主题, 可用值<code>dark</code>黑色与<code>light</code>亮色</p>
          <p>该组件提供了<code>on-select</code>事件, 可得到点击菜单的name值</p>
        </div>
        <code-demo lang="html" slot="code">{{ MenuDoc.BASE }}</code-demo>
      </Demo>
    </article>
  </c-article>
</template>

<script>
import MenuDoc from "../../doc/menu";
import CArticle from "../../common/article.vue";
import Anchor from "../../common/anchor.vue";
import Demo from "../../common/demo.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
import CMenuGroup from "../../../src/components/menu-group/src/main";
export default {
  data() {
    return {
      MenuDoc
    };
  },
  components: {
    CMenuGroup,
    CArticle,
    Demo,
    CodeDemo,
    ApiTable,
    Anchor
  }
};
</script>

<style scoped>
</style>

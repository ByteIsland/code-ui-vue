<template>
  <c-article>
    <article>
      <Anchor h1 title="Layout 布局"></Anchor>
      <p class="description">协助进行页面级整体布局</p>
      <Anchor h2 title="组件概述"></Anchor>
      <ul class="c-article-ul">
        <li>
          <code>CLayout</code
          >：布局容器，其下可嵌套<code>CHeader</code>、<code>CMain</code>、<code>CFooter</code>、<code>CSider</code>以及自身<code
            >CLayout</code
          >
        </li>
        <li>
          <code>CHeader</code>: 顶部布局, 自带默认样式, 其下可嵌套任何元素,
          只能放在<code>CLayout</code>中
        </li>
        <li>
          <code>CMain</code>: 内容部分, 自带默认样式, 其下可嵌套任何元素,
          只能放在<code>CLayout</code>中
        </li>
        <li>
          <code>CFooter</code>: 底部布局, 自带默认样式, 其下可嵌套任何元素,
          只能放在<code>CLayout</code>中
        </li>
        <li>
          <code>CSider</code>: 侧边栏, 自带默认样式以及基础功能,
          其下可嵌套任何元素, 只能放在<code>CLayout</code>中
        </li>
      </ul>
      <Anchor h2 title="代码示例"></Anchor>
      <!-- 基本结构 -->
      <Demo id="BASE">
        <div slot="case">
          <c-layout class="layout-single">
            <c-header>Header</c-header>
            <c-main>Content</c-main>
            <c-footer>Footer</c-footer>
          </c-layout>
          <c-layout class="layout-single">
            <c-header>Header</c-header>
            <c-layout>
              <c-sider style="flex:0 0 200px">Sider</c-sider>
              <c-main>Content</c-main>
            </c-layout>
            <c-footer>Footer</c-footer>
          </c-layout>
          <c-layout class="layout-single">
            <c-header>Header</c-header>
            <c-layout>
              <c-main>Content</c-main>
              <c-sider style="flex:0 0 200px">Sider</c-sider>
            </c-layout>
            <c-footer>Footer</c-footer>
          </c-layout>
          <c-layout class="layout-single">
            <c-sider style="flex:0 0 200px; line-height: 248px;">Sider</c-sider>
            <c-layout>
              <c-header>Header</c-header>
              <c-main>Content</c-main>
              <c-footer>Footer</c-footer>
            </c-layout>
          </c-layout>
        </div>
        <span slot="title" class="title">基本结构</span>
        <div slot="desc"><p>经典的页面布局</p></div>
        <code-demo lang="html" slot="code">{{ LayoutDoc.base }}</code-demo>
      </Demo>
      <!-- 上中下布局结构 -->
      <Demo id="SZXBJ">
        <div slot="case">
          <c-layout class="layout">
            <c-header>
              <div class="layout-logo"></div>
              <div class="layout-nav">
                <c-menu mode="horizontal" theme="dark" active-name="1">
                  <c-menu-item name="1">
                    <c-icon name="search" />
                    Item 1
                  </c-menu-item>
                  <c-menu-item name="2">
                    <c-icon name="application" />
                    Item 2
                  </c-menu-item>
                  <c-menu-item name="3">
                    <c-icon name="database" />
                    Item 3
                  </c-menu-item>
                  <c-menu-item name="4">
                    <c-icon name="setting" />
                    Item 4
                  </c-menu-item>
                </c-menu>
              </div>
            </c-header>
            <c-main style="padding: 0 50px;">
              <c-breadcrumb style="margin: 20px 0;">
                <c-breadcrumb-item>Home</c-breadcrumb-item>
                <c-breadcrumb-item>Components</c-breadcrumb-item>
                <c-breadcrumb-item>Layout</c-breadcrumb-item>
              </c-breadcrumb>
              <c-card> <div style="min-height: 200px;">Content</div> </c-card>
            </c-main>
            <c-footer>© 2018 Code UI, Inc.</c-footer>
          </c-layout>
        </div>
        <span class="title" slot="title">『上-中-下』布局</span>
        <div slot="desc">
          <p>最基础的『上-中-下』布局</p>
          <p>
            一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）
          </p>
          <p>
            通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ LayoutDoc.SZXBJ }}</code-demo>
      </Demo>
      <!-- 顶部-侧边布局-通栏 -->
      <Demo id="DBCBBJ">
        <div slot="case">
          <c-layout class="layout">
            <c-header>
              <div class="layout-logo"></div>
              <div class="layout-nav">
                <c-menu mode="horizontal" theme="dark" active-name="1">
                  <c-menu-item name="1">
                    <c-icon name="search" />
                    Item 1
                  </c-menu-item>
                  <c-menu-item name="2">
                    <c-icon name="application" />
                    Item 2
                  </c-menu-item>
                  <c-menu-item name="3">
                    <c-icon name="database" />
                    Item 3
                  </c-menu-item>
                  <c-menu-item name="4">
                    <c-icon name="setting" />
                    Item 4
                  </c-menu-item>
                </c-menu>
              </div>
            </c-header>
            <c-layout>
              <c-sider style="background: white;">
                <c-menu
                  active-name="1-2"
                  theme="light"
                  width="auto"
                  style="height: 100%"
                  :open-names="['1']"
                >
                  <c-menu-sub name="1">
                    <template slot="title">
                      <c-icon name="remind" />
                      内容管理
                    </template>
                    <c-menu-item name="1-1">Option 1</c-menu-item>
                    <c-menu-item name="1-2">Option 2</c-menu-item>
                    <c-menu-item name="1-3">Option 3</c-menu-item>
                  </c-menu-sub>
                  <c-menu-sub name="2">
                    <template slot="title">
                      <c-icon name="remind" />
                      内容管理2
                    </template>
                    <c-menu-item name="2-1">Option 2-1</c-menu-item>
                    <c-menu-item name="2-2">Option 2-2</c-menu-item>
                    <c-menu-item name="2-3">Option 2-3</c-menu-item>
                  </c-menu-sub>
                </c-menu>
              </c-sider>
              <c-main style="padding: 0 25px 25px;">
                <c-breadcrumb style="margin: 20px 0;">
                  <c-breadcrumb-item>Home</c-breadcrumb-item>
                  <c-breadcrumb-item>Components</c-breadcrumb-item>
                  <c-breadcrumb-item>Layout</c-breadcrumb-item>
                </c-breadcrumb>
                <c-card> <div style="min-height: 300px;">Content</div> </c-card>
              </c-main>
            </c-layout>
          </c-layout>
        </div>
        <span class="title" slot="title">顶部-侧边布局-通栏</span>
        <div slot="desc">
          <p>
            与基础的『上-中-下』布局，区别是两边未留边距，左边加入侧边栏，多用于应用型的网站。
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ LayoutDoc.DBCBBJ }}</code-demo>
      </Demo>
      <!--侧边布局带开关-->
      <Demo id="CBLKG">
        <div slot="case">
          <c-layout class="layout">
            <c-sider collapsible :collapsed-width="70" v-model="isCollapsed">
              <c-menu
                active-name="1"
                width="auto"
                theme="dark"
                :collapsed-menu="isCollapsed"
              >
                <c-menu-item name="1">
                  <c-icon name="search" />
                  <span>Options 1</span>
                </c-menu-item>
                <c-menu-item name="2">
                  <c-icon name="setting" />
                  <span>Options 2</span>
                </c-menu-item>
                <c-menu-item name="3">
                  <c-icon name="charts" />
                  <span>Options 3</span>
                </c-menu-item>
              </c-menu>
            </c-sider>
            <c-layout>
              <c-header style="background: #fff;"></c-header>
              <c-main style="padding: 0 25px 25px;">
                <c-breadcrumb style="margin: 20px 0;">
                  <c-breadcrumb-item>Home</c-breadcrumb-item>
                  <c-breadcrumb-item>Components</c-breadcrumb-item>
                  <c-breadcrumb-item>Layout</c-breadcrumb-item>
                </c-breadcrumb>
                <c-card> <div style="min-height: 300px;">Content</div> </c-card>
              </c-main>
            </c-layout>
          </c-layout>
        </div>
        <span class="title" slot="title">侧边布局（带开关模式）</span>
        <div slot="desc">
          <p>侧边两列式布局。页面横向空间有限时，侧边导航可收起。</p>
        </div>
        <code-demo lang="html" slot="code">{{ LayoutDoc.CBLKG }}</code-demo>
      </Demo>
      <Demo id="CBBJZDY">
        <div slot="case">
          <c-layout class="layout">
            <c-sider
              hide-trigger
              collapsible
              :collapsed-width="70"
              v-model="isCollapsed"
              ref="csider"
            >
              <c-menu
                active-name="1"
                width="auto"
                theme="dark"
                :collapsed-menu="isCollapsed"
              >
                <c-menu-item name="1">
                  <c-icon name="search" />
                  <span>Options 1</span>
                </c-menu-item>
                <c-menu-item name="2">
                  <c-icon name="setting" />
                  <span>Options 2</span>
                </c-menu-item>
                <c-menu-item name="3">
                  <c-icon name="charts" />
                  <span>Options 3</span>
                </c-menu-item>
              </c-menu>
            </c-sider>
            <c-layout>
              <c-header style="background: #fff;" gutter="30">
                <c-icon name="menu" :rotate="IconRotate" @click="toggierSider" />
              </c-header>
              <c-main style="padding: 0 25px 25px;">
                <c-breadcrumb style="margin: 20px 0;">
                  <c-breadcrumb-item>Home</c-breadcrumb-item>
                  <c-breadcrumb-item>Components</c-breadcrumb-item>
                  <c-breadcrumb-item>Layout</c-breadcrumb-item>
                </c-breadcrumb>
                <c-card> <div style="min-height: 300px;">Content</div> </c-card>
              </c-main>
            </c-layout>
          </c-layout>
        </div>
        <span class="title" slot="title">侧边布局（自定义开关）</span>
        <div slot="desc">
          <p>
            要使用自定义触发器，可以设置<code>hide-trigger</code>属性来隐藏默认触发器，也可以通过slot替换默认触发器
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ LayoutDoc.CBBJZDY }}</code-demo>
      </Demo>
      <api-table title="API" sub-title="Sider props" :doc="LayoutDoc.siderDoc "></api-table>
      <api-table sub-title="Sider events" :doc="LayoutDoc.siderEventsDoc "></api-table>
      <api-table sub-title="Header & Footer props" :doc="LayoutDoc.hfDoc"></api-table>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article.vue";
import Demo from "../../common/demo.vue";
import Anchor from "../../common/anchor.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
import LayoutDoc from "../../doc/layout.js";
export default {
  data() {
    return {
      LayoutDoc,
      isCollapsed: false
    };
  },
  computed: {
    IconRotate() {
      return this.isCollapsed ? 90 : "";
    }
  },
  methods: {
    toggierSider () {
      this.$refs.csider.toggleCollapse()
    }
  },
  components: {
    CArticle,
    Demo,
    CodeDemo,
    ApiTable,
    Anchor
  }
};
</script>

<style lang="scss">
.layout-single {
  margin-bottom: 48px;
}
#BASE {
  .c-layout-wrapper {
    font-size: 14px;
    color: #fff;
    text-align: center;
    .c-layout-header {
      background: #7cbce9;
    }
    .c-layout-main {
      background: #0f8de9;
      height: 120px;
      line-height: 120px;
    }
    .c-layout-sider {
      background: #3a9fe8;
      line-height: 120px;
    }
    .c-layout-footer {
      color: #fff;
      background: #7cbce9;
    }
  }
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .layout-logo {
    float: left;
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    position: relative;
    top: 16px;
    left: 20px;
  }
  .layout-nav {
    float: right;
  }
}
</style>

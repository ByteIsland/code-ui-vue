<template>
  <c-article>
    <article>
      <Anchor h1 title="Menu 菜单" />
      <Anchor h2 title="概述" />
      <p class="description">
        为页面提供导航功能的菜单列表, 常用语网页顶部与左侧
      </p>
      <Anchor h2 title="代码示例" />
      <!-- 基础使用 -->
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
          <c-menu mode="horizontal" theme="dark" active-name="1" style="margin-top: 20px;">
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
      <!-- 侧栏导航 -->
      <Demo id="CLDH">
        <div slot="case">
          <c-row>
            <c-col :span="8">
              <c-menu theme="dark" active-name="1-3" :open-names="['1']">
                <c-menu-sub name="1">
                  <template slot="title">
                    <c-icon name="setting" />
                    内容管理
                  </template>
                  <c-menu-item name="1-1">文章管理</c-menu-item>
                  <c-menu-item name="1-2">评论管理</c-menu-item>
                  <c-menu-item name="1-3">举报管理</c-menu-item>
                </c-menu-sub>
                <c-menu-sub name="2">
                  <template slot="title">
                    <c-icon name="users" />
                    用户管理
                  </template>
                  <c-menu-item name="2-1">文章管理</c-menu-item>
                  <c-menu-item name="2-2">评论管理</c-menu-item>
                  <c-menu-item name="2-3">举报管理</c-menu-item>
                </c-menu-sub>
                <c-menu-sub name="3">
                  <template slot="title">
                    <c-icon name="charts" />
                    统计分析
                  </template>
                  <c-menu-group title="使用">
                    <c-menu-item name="3-1">新增和启动</c-menu-item>
                    <c-menu-item name="3-2">活跃分析</c-menu-item>
                    <c-menu-item name="3-3">时段分析</c-menu-item>
                  </c-menu-group>
                  <c-menu-group title="留存">
                    <c-menu-item name="3-4">用户留存</c-menu-item>
                    <c-menu-item name="3-5">流失用户</c-menu-item>
                  </c-menu-group>
                </c-menu-sub>
              </c-menu>
            </c-col>
            <c-col :span="8">
              <c-menu :open-names="['1', '2']" active-name="1-2">
                <c-menu-sub name="1">
                  <template slot="title">
                    <c-icon name="setting" />
                    内容管理
                  </template>
                  <c-menu-item name="1-1">文章管理</c-menu-item>
                  <c-menu-item name="1-2">评论管理</c-menu-item>
                  <c-menu-item name="1-3">举报管理</c-menu-item>
                </c-menu-sub>
                <c-menu-sub name="2">
                  <template slot="title">
                    <c-icon name="users" />
                    用户管理
                  </template>
                  <c-menu-item name="2-1">文章管理</c-menu-item>
                  <c-menu-item name="2-2">评论管理</c-menu-item>
                  <c-menu-item name="2-3">举报管理</c-menu-item>
                </c-menu-sub>
                <c-menu-sub name="3">
                  <template slot="title">
                    <c-icon name="charts" />
                    统计分析
                  </template>
                  <c-menu-group title="使用">
                    <c-menu-item name="3-1">新增和启动</c-menu-item>
                    <c-menu-item name="3-2">活跃分析</c-menu-item>
                    <c-menu-item name="3-3">时段分析</c-menu-item>
                  </c-menu-group>
                  <c-menu-group title="留存">
                    <c-menu-item name="3-4">用户留存</c-menu-item>
                    <c-menu-item name="3-5">流失用户</c-menu-item>
                  </c-menu-group>
                </c-menu-sub>
              </c-menu>
            </c-col>
            <!--手风琴-->
            <c-col :span="8">
              <c-menu accordion active-name="1-2" >
                <c-menu-sub name="1">
                  <template slot="title">
                    <c-icon name="setting" />
                    内容管理
                  </template>
                  <c-menu-item name="1-1">文章管理</c-menu-item>
                  <c-menu-item name="1-2">评论管理</c-menu-item>
                  <c-menu-item name="1-3">举报管理</c-menu-item>
                </c-menu-sub>
                <c-menu-sub name="2">
                  <template slot="title">
                    <c-icon name="users" />
                    用户管理
                  </template>
                  <c-menu-item name="2-1">文章管理</c-menu-item>
                  <c-menu-item name="2-2">评论管理</c-menu-item>
                  <c-menu-item name="2-3">举报管理</c-menu-item>
                </c-menu-sub>
                <c-menu-sub name="3">
                  <template slot="title">
                    <c-icon name="charts" />
                    统计分析
                  </template>
                  <c-menu-group title="使用">
                    <c-menu-item name="3-1">新增和启动</c-menu-item>
                    <c-menu-item name="3-2">活跃分析</c-menu-item>
                    <c-menu-item name="3-3">时段分析</c-menu-item>
                  </c-menu-group>
                  <c-menu-group title="留存">
                    <c-menu-item name="3-4">用户留存</c-menu-item>
                    <c-menu-item name="3-5">流失用户</c-menu-item>
                  </c-menu-group>
                </c-menu-sub>
              </c-menu>
            </c-col>
          </c-row>
        </div>
        <span slot="title" class="title">侧栏导航</span>
        <div slot="desc">
          <p>垂直导航菜单，可以内嵌子菜单(不推荐)</p>
          <p>设置<code>active-name</code>可选中指定的菜单, 设置<code>open-name</code>可让指定菜单打开</p>
          <p>设置属性<code>accordion</code>可开启手风琴模式</p>
        </div>
        <code-demo lang="html" slot="code">{{ MenuDoc.CLDH }}</code-demo>
      </Demo>
      <!-- 分组 -->
      <Demo id="FZ">
        <div slot="case">
          <c-menu active-name="1" theme="dark">
            <c-menu-group title="内容管理">
              <c-menu-item name="1"><c-icon name="file" />文章管理</c-menu-item>
              <c-menu-item name="2"><c-icon name="users" />人员管理</c-menu-item>
              <c-menu-item name="3"><c-icon name="charts" />报表管理</c-menu-item>
            </c-menu-group>
            <c-menu-group title="统计分析">
              <c-menu-item name="4"><c-icon name="heart" />文章分析</c-menu-item>
              <c-menu-item name="5"><c-icon name="star" />人员分析</c-menu-item>
            </c-menu-group>
          </c-menu>
        </div>
        <span slot="title" class="title">分组</span>
        <div slot="desc">
          <p>通过组件<code>c-menu-group</code>对菜单进行分组</p>
        </div>
        <code-demo lang="html" slot="code"> {{ MenuDoc.FZ }} </code-demo>
      </Demo>
      <!--API-->
      <api-table title="API" sub-title="CMenu props" :doc="MenuDoc.Doc" />
      <api-table sub-title="CMenu props" :type="3" :doc="MenuDoc.EventsDoc" />
      <api-table sub-title="CMenuGroup props" :doc="MenuDoc.GroupDoc" />
      <api-table sub-title="CMenuGroup slot" :type="2" :doc="MenuDoc.GroupSlotDoc" />
      <api-table sub-title="CMenuItem props" :doc="MenuDoc.ItemDoc" />
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

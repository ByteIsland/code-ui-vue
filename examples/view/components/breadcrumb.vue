<template>
  <c-article>
    <article>
      <anchor h1 title="Breadcrum 面包屑" />
      <p class="description">
        显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。
      </p>
      <anchor h2 title="代码示例" />
      <!-- 基础用法 -->
      <Demo id="BASE">
        <div slot="case">
          <c-breadcrumb>
            <c-breadcrumb-item to="/">Home</c-breadcrumb-item>
            <c-breadcrumb-item to="/components">Components</c-breadcrumb-item>
            <c-breadcrumb-item>Breadcrumb</c-breadcrumb-item>
          </c-breadcrumb>
        </div>
        <span slot="title" class="title">基础用法</span>
        <div slot="desc">
          <p>最基础的用法, 通过设置<code>to</code>来实现跳转</p>
        </div>
        <code-demo lang="html" slot="code">{{ BreadcrumbDoc.BASE }}</code-demo>
      </Demo>
      <!-- 带图标 -->
      <Demo id="BASEICON">
        <div slot="case">
          <c-breadcrumb>
            <c-breadcrumb-item to="/"
              ><c-icon name="function" /> Home</c-breadcrumb-item
            >
            <c-breadcrumb-item to="/components"
              ><c-icon name="plug" /> Components</c-breadcrumb-item
            >
            <c-breadcrumb-item
              ><c-icon name="release" /> Breadcrumb</c-breadcrumb-item
            >
          </c-breadcrumb>
        </div>
        <span slot="title" class="title">带图标</span>
        <div slot="desc"><p>可自定义每项的内容，比如带有一个图标。</p></div>
        <code-demo lang="html" slot="code">{{
          BreadcrumbDoc.BASEICON
        }}</code-demo>
      </Demo>
      <!--自定义分隔符-->
      <Demo id="SEPARATOR">
        <div slot="case">
          <c-breadcrumb separator=" > ">
            <c-breadcrumb-item to="/">Home</c-breadcrumb-item>
            <c-breadcrumb-item to="/components">Components</c-breadcrumb-item>
            <c-breadcrumb-item>Breadcrumb</c-breadcrumb-item>
          </c-breadcrumb>
        </div>
        <span slot="title" class="title">分隔符自定义</span>
        <div slot="desc">
          <p>通过设置<code>separator</code>属性来自定义分隔符</p>
        </div>
        <code-demo lang="html" slot="code">{{
          BreadcrumbDoc.SEPARATOR
        }}</code-demo>
      </Demo>
      <api-table
        title="API"
        sub-title="breadcrumb props"
        :doc="BreadcrumbDoc.breadcrumbDoc"
      ></api-table>
      <api-table
        sub-title="breadcrumbItem props"
        :doc="BreadcrumbDoc.breadcrumbItemDoc"
      ></api-table>
    </article>
  </c-article>
</template>

<script>
import BreadcrumbDoc from "../../doc/breadcrumb.js";
import Demo from "../../common/demo.vue";
import CArticle from "../../common/article.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import Anchor from "../../common/anchor.vue";
export default {
  data() {
    return {
      BreadcrumbDoc
    };
  },
  components: {
    Demo,
    CArticle,
    ApiTable,
    CodeDemo,
    Anchor
  }
};
</script>

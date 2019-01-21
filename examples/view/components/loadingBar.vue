<template>
  <c-article>
    <article>
      <Anchor h1 title="LoadingBar 加载进度条" />
      <Anchor h2 title="概述" />
      <p class="description">
        全局创建一个显示页面加载、异步请求、文件上传等的加载精度条(位于上页面顶部)
      </p>
      <Anchor h2 title="说明" />
      <p>
        <code>LoadingBar</code>
        只会全局创建一个，因此在任何位置调用的<code>$loading</code>方法都会指向这一个组件。主要使用场景是路由切换和异步加载(即Ajax)，
        <code>LoadingBar</code>
        在异步场景中会模拟进度,如需要精确进度则需要在<code>update()</code>方法传入精确的值
      </p>
      <Anchor h3 title="在路由中使用" />
      <code-demo lang="js" :bg="true">{{ LoadingBar.Router }}</code-demo>
      <Anchor h3 title="在Ajax中使用" />
      <code-demo lang="js" :bg="true">{{ LoadingBar.Ajax }}</code-demo>
      <Anchor h2 title="代码示例" />
      <Demo id="JCYF">
        <div slot="case">
          <c-button @click="start">Start</c-button>
          <c-button @click="finish">Finish</c-button>
          <c-button @click="success">Success</c-button>
          <c-button @click="error">Error</c-button>
        </div>
        <span slot="title" class="title">基础用法</span>
        <div slot="desc">
          <p>
            点击<code>Start</code>开始进度,点击<code>Finish</code>或<code>Error</code>结束进度,在调用<code>start()</code>后,
            组件会自动模拟进度,在调用<code>finish()</code>或<code>error()</code>会自动补全进度并且消失
          </p>
        </div>
        <code-demo lang="auto" slot="code">{{ LoadingBar.JCYF }}</code-demo>
      </Demo>
      <api-table title="API" sub-title="LoadingBar instance" :type="3" type-name="函数名" typeofName="参数" :doc="LoadingBar.instanceDoc">
        <p class="description">通过直接调用以下方法来使用组件(全局)：</p>
        <ul>
          <li><code>this.$loading.start()</code></li>
          <li><code>this.$loading.finish()</code></li>
          <li><code>this.$loading.success()</code></li>
          <li><code>this.$loading.error()</code></li>
        </ul>
        <p class="description">函数及参数说明如下</p>
      </api-table>
      <api-table :doc="LoadingBar.propsDoc">
        <p class="description">另外提供了全局配置和全局销毁的方法：</p>
        <ul>
          <li><code>this.$loading.config(options)</code></li>
          <li><code>this.$loading.destroy()</code></li>
        </ul>
        <code-demo lang="js" :bg="true">{{ LoadingBar.Options }}</code-demo>
        <br />
      </api-table>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article.vue";
import Demo from "../../common/demo.vue";
import Anchor from "../../common/anchor.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
import LoadingBar from "../../doc/loadingBar.js";

export default {
  name: "loadingBar",
  data() {
    return {
      LoadingBar
    };
  },
  methods: {
    start() {
      this.$loading.start();
    },
    finish() {
      this.$loading.finish();
    },
    success() {
      this.$loading.success();
    },
    error() {
      this.$loading.error();
    }
  },
  components: {
    CArticle,
    CodeDemo,
    ApiTable,
    Demo,
    Anchor
  }
};
</script>

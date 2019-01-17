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
        <code>LoadingBar</code> 只会全局创建一个，因此在任何位置调用的<code>$loading</code>方法都会指向这一个组件。主要使用场景是路由切换和异步加载(即Ajax)，
        <code>LoadingBar</code>在异步场景中会模拟进度, 如需要精确进度则需要在<code>update()</code>方法传入精确的值
      </p>
      <Anchor h3 title="在路由中使用" />
      <code-demo lang="js" :bg="true">{{ LoadingBar.Router }}</code-demo>
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
  components: {
    CArticle,
    CodeDemo,
    ApiTable,
    Demo,
    Anchor
  }
};
</script>

<template>
  <c-article>
    <article>
      <Anchor h1 title="快速入门" />
      <Anchor h2 title="全局引入 CodeUI" />
      <p class="desc">
        一般在webpack的入口文件<code>app.js</code>(CodeUI入口文件是这个,其他可能是main.js或者其他)中加入以下配置
      </p>
      <code-demo lang="js" :bg="true">{{ StartDoc.QJYR }}</code-demo>
      <Anchor h2 title="按需加载" />
      <p class="desc">
        目前在beta版本不支持按需加载, 请在正式版发布后使用,
        但可借助插件
        <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>可以实现按需加载组件
      </p>
    </article>
  </c-article>
</template>

<script>
import StartDoc from "../../doc/start";
import CArticle from "../../common/article";
import Anchor from "../../common/anchor";
import CodeDemo from "../../common/code";
export default {
  name: "start",
  data() {
    return {
      StartDoc
    };
  },
  components: {
    CArticle,
    Anchor,
    CodeDemo
  }
};
</script>

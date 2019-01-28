<template>
  <c-article>
    <article>
      <Anchor h1 title="安装" />
      <Anchor h2 title="NPM 安装" />
      <p class="desc">
        极度推荐使用 NPM 安装, 享受 NPM 生态圈和工具带来的方便, 更好的配合<code>webpack</code>构建项目
      </p>
      <code-demo lang="sql" :bg="true">{{ InstallDoc.npm }}</code-demo>
      <p class="desc">
        如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请阅读<router-link to="/guide/start">快速上手</router-link>章节.
      </p>
      <Anchor h2 title="CDN 引入" />
      <p class="desc">目前正在寻找合适的CDN代理商, 将尽快加入CDN家族 :) </p>
    </article>
  </c-article>
</template>

<script>
import InstallDoc from "../../doc/install";
import CArticle from "../../common/article";
import Anchor from "../../common/anchor";
import CodeDemo from "../../common/code";
export default {
  name: "install",
  data() {
    return {
      InstallDoc
    };
  },
  components: {
    CArticle,
    Anchor,
    CodeDemo
  }
};
</script>

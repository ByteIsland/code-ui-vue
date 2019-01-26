<template>
  <c-article class="wrapper-content">
    <article>
      <Anchor h1 title="关于CodeUI" />
      <p class="description">
        CodeUI 是一套基于 Vue.js 的开源 UI 组件库,
        立志于用一套写法服务于三端(移动端Mobile以及小程序端WeChat),
        目前仅开发了PC端, 后续其他组件更新会加入
      </p>
      <Anchor h2 title="特性" />
      <ul class="introduce-list">
        <li>结合多个开源UI组件库的优秀特性</li>
        <li>友好的文档</li>
        <li>持续快速的更新</li>
        <li>生态搭建完整性(后续将加入企业级管理系统)</li>
      </ul>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article";
import Anchor from "../../common/anchor";
export default {
  name: "introduce",
  components: {
    Anchor,
    CArticle
  }
};
</script>

<style lang="scss">
.wrapper-content .c-article:after {
  content: " ";
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  left: 5px;
  top: 0;
  background: #ddd;
}
.introduce-list{
  padding-left: 40px;
  list-style-type: disc;
  li {
    list-style-type: disc;
    margin-bottom: 5px;
    font-size: 14px;
  }
}
</style>

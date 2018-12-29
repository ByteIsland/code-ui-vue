<template>
  <c-article>
    <article>
      <h1 class="title">Icon 图标</h1>
      <p class="description">目前codeUI的字体图标来自<a href="https://www.iconfont.cn" target="_blank">iconfont</a>,如需要新增,请在issues提交补充</p>
      <c-anchor title="使用方法" h2 id="USER"></c-anchor>
      <p class="description">使用<code>&lt;c-icon /&gt;</code>组件, 往<code>name</code>中传入指定图标的名称</p>
      <c-alert type="warning" title="注意, 使用Icon组件时不需要添加`code-icon`的前缀" :closable="false"></c-alert>
      <code-demo :bg="true" lang="html" >{{IconDoc.Icon}}</code-demo>
      <p class="description">渲染后</p>
      <code-demo :bg="true" lang="html">{{IconDoc.IconRender}}</code-demo>
      <api-table title="API" sub-title="Icon props" :doc="IconDoc.doc" id="API"></api-table>
      <c-anchor title="所有图标" h2 id="ALLICON"></c-anchor>
      <div class="icons">
        <div class="icons-item" v-for="(item, index) in IconList" :key="index">
          <i class="c-icon" :class="item"></i>
          <p>{{item}}</p>
        </div>
      </div>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article.vue";
import CAnchor from "../../common/anchor.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import IconDoc from "../../doc/icon.js";
import IconList from "../utils/iconName.js";
export default {
  data() {
    return {
      IconDoc,
      IconList
    };
  },
  components: {
    CodeDemo,
    ApiTable,
    CArticle,
    CAnchor
  }
};
</script>

<style lang="scss" scoped>
.api {
  margin: 20px 0;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
  .icons-item {
    display: flex;
    flex-direction: column;
    margin: 6px 6px 6px 0;
    flex: 0 0 143px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 100px;
    color: #5c6b77;
    transition: all 0.2s ease;
    position: relative;
    padding-top: 10px;
    i {
      font-size: 32px;
    }
    p {
      font-size: 14px;
      margin: 5px;
      padding-top: 15px;
    }
  }
}
</style>

<template>
  <c-article>
    <article>
      <Anchor h1 title="Icon 图标"></Anchor>
      <p class="description">
        CodeUI的字体图标从<a href="http://www.iconfont.cn/" target="_blank">iconfont</a>挑选的
      </p>
      <Anchor title="使用方法" h2 id="USER"></Anchor>
      <p class="description">
        使用<code>&lt;c-icon /&gt;</code>组件,
        往<code>name</code>中传入指定图标的名称
      </p>
      <c-alert
        type="warning"
        title="注意, 使用Icon组件时不需要添加`code-icon`的前缀"
        :closable="false"
      ></c-alert>
      <code-demo :bg="true" lang="html">{{ IconDoc.Icon }}</code-demo>
      <p class="description">渲染后</p>
      <code-demo :bg="true" lang="html">{{ IconDoc.IconRender }}</code-demo>
      <api-table
        title="API"
        sub-title="Icon props"
        :doc="IconDoc.doc"
        id="API"
      ></api-table>
      <Anchor title="所有图标" h2 id="ALLICON"></Anchor>
      <div class="icons">
        <div class="icons-item" v-for="(item, index) in webIcon" :key="index">
          <c-icon :name="item.tag" />
          <i class="tag" v-if="index <= 19">New</i>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article.vue";
import Anchor from "../../common/anchor.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import IconDoc from "../../doc/icon.js";
import { webIcon } from "../utils/iconName.js";
export default {
  data() {
    return {
      IconDoc,
      webIcon
    };
  },
  components: {
    CodeDemo,
    ApiTable,
    CArticle,
    Anchor
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
    i.tag {
      font-size: 12px;
      font-style: normal;
      color: #fff;
      background: #f17c67;
      border-radius: 15px;
      padding: 3px 5px;
      position: absolute;
      right: 5px;
      top: 0;
    }
    p {
      font-size: 14px;
      margin: 5px;
      padding-top: 15px;
    }
  }
}
</style>

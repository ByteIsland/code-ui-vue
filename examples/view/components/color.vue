<template>
  <c-article>
    <article>
      <Anchor h1 title="Color 色彩" />
      <Anchor h2 title="概述" />
      <p class="desc">
        CodeUI 筛选了多套开源UI库的主色库以及设计规范,
        推荐使用以下调色板的颜色作为设计和开发规范,
        以便保证页面和组件视觉效果上的统一
      </p>
      <br />
      <Anchor h3 title="主色" />
      <p class="desc">
        CodeUI 使用行业上用的最多的主色调<code>蓝色</code>作为主色调, 其中 Light
        Default 常用于在<code>hover</code>中, Dark Default 用于
        <code>active</code>中
      </p>
      <c-row gutter="18">
        <c-col span="8">
          <c-card style="background: #2196f3">
            <p class="name">Primary</p>
            <p class="desc">#2196f3</p>
          </c-card>
        </c-col>
        <c-col span="8">
          <c-card style="background: #64b5f6">
            <p class="name">Light Primary</p>
            <p class="desc">#2196f3</p>
          </c-card>
        </c-col>
        <c-col span="8">
          <c-card style="background: #1976d2">
            <p class="name">Dark Primary</p>
            <p class="desc">#2196f3</p>
          </c-card>
        </c-col>
      </c-row>
      <br />
      <Anchor h3 title="辅助色" />
      <p class="desc">
        CodeUI 提供了4种辅助色, 常用于提示消息, 比如成功, 警告, 问题, 以及错误
      </p>
      <c-row gutter="18">
        <c-col span="6">
          <c-card style="background: #4caf50">
            <p class="name">Success</p>
            <p class="desc">#4caf50</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #ec8938">
            <p class="name">Warning</p>
            <p class="desc">#ec8938</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #909399">
            <p class="name">Info</p>
            <p class="desc">#909399</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #f17c67">
            <p class="name">Danger</p>
            <p class="desc">#f17c67</p>
          </c-card>
        </c-col>
      </c-row>
      <br />
      <Anchor h3 title="中性色" />
      <p class="desc">
        中性色常用于标题、文本、阴影、禁用等，可以体现出页面的层次结构
      </p>
      <c-row gutter="18">
        <c-col span="6">
          <c-card style="background: #17243f">
            <p class="name">Title 标题</p>
            <p class="desc">#17243f</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #596379">
            <p class="name">Content 正文</p>
            <p class="desc">#596379</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #888e9e">
            <p class="name">Sub Color 辅助/图标</p>
            <p class="desc">#888e9e</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #9e9e9e">
            <p class="name">Divider 分割线</p>
            <p class="desc">#9e9e9e</p>
          </c-card>
        </c-col>
      </c-row>
      <br />
      <c-row gutter="18">
        <c-col span="6">
          <c-card style="background: #d5d8df">
            <p class="name">Disabled 失效</p>
            <p class="desc">#d5d8df</p>
          </c-card>
        </c-col>
      </c-row>
      <br />
      <Anchor h3 title="边框" />
      <p class="desc">CodeUI 提供4种边框颜色, 可用于各种不同场景</p>
      <c-row gutter="18">
        <c-col span="6">
          <c-card style="background: #cfd8dc">
            <p class="name">一级边框</p>
            <p class="desc">#cfd8dc</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #b0bec5">
            <p class="name">二级边框</p>
            <p class="desc">#b0bec5</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #90a4ae">
            <p class="name">三级边框</p>
            <p class="desc">#90a4ae</p>
          </c-card>
        </c-col>
        <c-col span="6">
          <c-card style="background: #90a4ae">
            <p class="name">四级边框</p>
            <p class="desc">#90a4ae</p>
          </c-card>
        </c-col>
      </c-row>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article.vue";
import Anchor from "../../common/anchor.vue";
export default {
  name: "color",
  components: {
    CArticle,
    Anchor
  }
};
</script>

<style lang="scss">
.c-card {
  p.name {
    font-size: 16px;
    color: #fff;
  }
  p.desc {
    font-size: 12px;
    color: #fff;
    opacity: 0.6;
  }
}
</style>

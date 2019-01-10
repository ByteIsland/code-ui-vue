<template>
  <c-article>
    <article>
      <Anchor h1 title="Grid 栅格" />
      <Anchor h2 title="概述" />
      <c-row class="demo-row"> <c-col :span="24" class="demo-col">24：100%</c-col> </c-row>
      <c-row class="demo-row">
        <c-col :span="12" class="demo-col demo-col-light">12：50%</c-col>
        <c-col :span="12" class="demo-col">12：50%</c-col>
      </c-row>
      <c-row class="demo-row ">
        <c-col :span="8" class="demo-col">8：33.33%</c-col>
        <c-col :span="8" class="demo-col demo-col-light">8：33.33%</c-col>
        <c-col :span="8" class="demo-col">8：33.33%</c-col>
      </c-row>
      <c-row class="demo-row">
        <c-col :span="6" class="demo-col">6：25%</c-col>
        <c-col :span="6" class="demo-col demo-col-light">6：25%</c-col>
        <c-col :span="6" class="demo-col">6：25%</c-col>
        <c-col :span="6" class="demo-col demo-col-light">6：25%</c-col>
      </c-row>
      <c-row class="demo-row">
        <c-col :span="16" class="demo-col">18：66.66%</c-col>
        <c-col :span="8" class="demo-col demo-col-light">8：33.33%</c-col>
      </c-row>
      <p class="description">
        <code>codeUI</code>采用主流的24栅格系统, 将区域进行24等分, 可轻松应对大部分的布局要求。 使用栅格系统进行网页布局, 可让页面
        排版美观、舒适。
      </p>
      <p class="description">栅格系统提供了<code>CRow</code>行和<code>CCol</code>列组件, 减少开发复杂度, 使用流程如下</p>
      <ul class="c-article-ul">
        <li>使用<code>CRow</code>在水平方向创建一行</li>
        <li>将一组<code>CCol</code>放置在<code>CRow</code>中</li>
        <li>在每个<code>CCol</code>中键入自己的内容</li>
        <li>通过设置<code>CCol</code>的<code>span</code>参数, 指定<code>CCol</code>的范围,其范围在1-24</li>
        <li>将一组<code>CRow</code>中的<code>CCol</code>总和不得超过24</li>
      </ul>
      <anchor h2 title="代码示例" />
      <!-- 基础用法 -->
      <Demo id="BASE">
        <div slot="case">
          <c-row>
            <c-col :span="12">col-12</c-col>
            <c-col :span="12">col-12</c-col>
          </c-row>
          <c-row>
            <c-col :span="8">col-8</c-col>
            <c-col :span="8">col-8</c-col>
            <c-col :span="8">col-8</c-col>
          </c-row>
          <c-row>
            <c-col :span="6">col-6</c-col>
            <c-col :span="6">col-6</c-col>
            <c-col :span="6">col-6</c-col>
            <c-col :span="6">col-6</c-col>
          </c-row>
        </div>
        <span slot="title" class="title">基础用法</span>
        <div slot="desc">
          <p>水平排列的布局。</p>
          <p><code>CCol</code>必须放在<code>CRow</code>中</p>
        </div>
        <code-demo lang="html" slot="code" >{{ GridDoc.BASE }}</code-demo>
      </Demo>
      <!-- 区块间距 -->
      <Demo id="GUTTER">
        <div slot="case">
          <c-row gutter="18" class="gutter">
            <c-col span="6"><div>col-span-6</div> </c-col>
            <c-col span="6"><div>col-span-6</div> </c-col>
            <c-col span="6"><div>col-span-6</div> </c-col>
            <c-col span="6"><div>col-span-6</div> </c-col>
          </c-row>
        </div>
        <span class="title" slot="title">区块间距</span>
        <div slot="desc">
          <p>通过给 <code>CRow</code> 添加 <code>gutter</code> 属性, 可以给下属的 <code>col</code> 作为栅格间隔。</p>
        </div>
      </Demo>
    </article>
  </c-article>
</template>

<script>
import GridDoc from "../../doc/grid.js";
import Demo from "../../common/demo.vue";
import CArticle from "../../common/article.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import Anchor from "../../common/anchor.vue";
export default {
  data() {
    return {
      GridDoc
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

<style lang="scss">
.demo-row {
  margin-bottom: 5px;
  .demo-col {
    padding: 30px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    background: rgba(0, 153, 229, 0.7);
  }
  .demo-col-light{
    background: rgba(0, 153, 229, 0.5);
  }
}
.example-demo {
  .c-row {
    margin-bottom: 15px;
  }
  .c-col {
    font-size: 12px;
    color: #fff;
    padding: 10px 0;
    text-align: center;
  }
  .c-col:nth-child(2n) {
    background: rgba(0, 153, 229, 0.7);
  }
  .c-col:nth-child(2n + 1) {
    background: rgba(0, 153, 229, 0.5);
  }
}
.gutter{
  .c-col {
    background: none !important;
  }
  .c-col:nth-child(2n) > div {
    color: #fff;
    padding: 10px 0;
    background: rgba(0, 153, 229, 0.7);
  }
  .c-col:nth-child(2n + 1) > div {
    color: #fff;
    padding: 10px 0;
    background: rgba(0, 153, 229, 0.5);
  }
}
</style>

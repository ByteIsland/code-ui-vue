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
          <c-row :gutter="18" class="gutter">
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
        <code-demo lang="html" slot="code" >{{ GridDoc.GUTTER }}</code-demo>
      </Demo>
      <!-- flex布局排序 -->
      <Demo id="FLEXORDER">
        <div slot="case">
          <c-row flex>
            <c-col span="6" order="1">4 | order-1</c-col>
            <c-col span="6" order="3">2 | order-3</c-col>
            <c-col span="6" order="2">3 | order-2</c-col>
            <c-col span="6" order="4">1 | order-4</c-col>
          </c-row>
        </div>
        <span slot="title" class="title">栅格排序(flex布局)</span>
        <div slot="desc">
          <p>通过<code>Flex</code>布局的<code>order</code>属性, 可对区块进行排序</p>
        </div>
        <code-demo lang="html" slot="code" >{{ GridDoc.ORDER }}</code-demo>
      </Demo>
      <!--左&右偏移-->
      <Demo id="PUSHPULL">
        <div slot="case">
          <c-row>
            <c-col push="6" span="18">col-18 | col-pull-6</c-col>
            <c-col pull="18" span="6">col-6 | col-pull-18</c-col>
          </c-row>
        </div>
        <span slot="title" class="title">栅格排序</span>
        <div slot="desc">
          <p>通过设置<code>push</code>和<code>pull</code>属性来改变栅格的排序</p>
        </div>
        <code-demo lang="html" slot="doc"> {{ GridDoc.PUSHPULL }}</code-demo>
      </Demo>
      <!-- 偏移 -->
      <Demo id="OFFSET">
        <div slot="case">
          <c-row>
            <c-col span="8">col-8 </c-col>
            <c-col span="8" offset="8">col-8 | col-offset-8</c-col>
          </c-row>
          <c-row>
            <c-col span="6" offset="6">col-8 | col-offset-8</c-col>
            <c-col span="6" offset="6">col-8 | col-offset-8</c-col>
          </c-row>
          <c-row>
            <c-col span="8" offset="12">col-8 | col-offset-12</c-col>
          </c-row>
        </div>
        <span slot="title" class="title">栅格偏移(左偏移)</span>
        <div slot="desc">
          <p>通过设置<code>offset</code>属性, 可将<code>CCol</code>进行左偏移, 偏移栅格数尽可能与<code>span</code>的值一致, 不得超过24</p>
        </div>
        <code-demo lang="html" slot="doc">{{ GridDoc.OFFSET }}</code-demo>
      </Demo>
      <!-- 布局 -->
      <Demo id="FLEXBJ">
        <div slot="case">
          <p class="description">子元素向左排列</p>
          <c-row flex justify="start" class="code-row-bg">
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
          </c-row>
          <p class="description">子元素向右排列</p>
          <c-row flex justify="end" class="code-row-bg">
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
          </c-row>
          <p class="description">子元素居中排列</p>
          <c-row flex justify="center" class="code-row-bg">
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
          </c-row>
          <p class="description">子元素等宽排列</p>
          <c-row flex justify="space-between" class="code-row-bg">
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
          </c-row>
          <p class="description">子元素分散排列</p>
          <c-row flex justify="space-around" class="code-row-bg">
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
            <c-col span="4"> col-4 </c-col>
          </c-row>
        </div>
        <span slot="title" class="title">Flex布局</span>
        <div slot="desc">
          <p>通过设置<code>justify</code>属性改变子元素的排布方式, 只在<code>flex</code>下有效</p>
        </div>
        <code-demo lang="html" slot="code"> {{ GridDoc.FLEXBJ }} </code-demo>
      </Demo>
      <!-- 对齐 -->
      <Demo id="FLEXDQ">
        <div slot="case">
          <p class="description">顶部对齐</p>
          <c-row flex justify="center" align="top" class="code-row-bg">
            <c-col span="4" style="line-height: 80px;">col-4</c-col>
            <c-col span="4" style="line-height: 40px;">col-4</c-col>
            <c-col span="4" style="line-height: 100px">col-4</c-col>
            <c-col span="4" style="line-height: 60px">col-4</c-col>
          </c-row>
          <p class="description">居中对齐</p>
          <c-row flex justify="center" align="middle" class="code-row-bg">
            <c-col span="4" style="line-height: 80px;">col-4</c-col>
            <c-col span="4" style="line-height: 40px;">col-4</c-col>
            <c-col span="4" style="line-height: 100px">col-4</c-col>
            <c-col span="4" style="line-height: 60px">col-4</c-col>
          </c-row>
          <p class="description">底部对齐</p>
          <c-row flex justify="center" align="bottom" class="code-row-bg">
            <c-col span="4" style="line-height: 80px;">col-4</c-col>
            <c-col span="4" style="line-height: 40px;">col-4</c-col>
            <c-col span="4" style="line-height: 100px">col-4</c-col>
            <c-col span="4" style="line-height: 60px">col-4</c-col>
          </c-row>
        </div>
        <span class="title" slot="title">Flex对齐</span>
        <div slot="desc">
          <p>通过设置<code>align</code>属性改变子元素的对齐位置, 只在<code>flex</code>下有效</p>
        </div>
        <code-demo lang="html" slot="code"> {{ GridDoc.FLEXDQ }} </code-demo>
      </Demo>
      <!--响应式布局-->
      <Demo id="XYSBJ">
        <div slot="case">
          <c-row>
            <c-col :xs="2" :sm="4" :md="6" :lg="8">Col</c-col>
            <c-col :xs="20" :sm="16" :md="12" :lg="8">Col</c-col>
            <c-col :xs="2" :sm="4" :md="6" :lg="8">Col</c-col>
          </c-row>
        </div>
        <span slot="title" class="title">响应式布局</span>
        <div slot="desc">
          <p>参照<code>Bootstrap</code>的响应式设计, 提供四个响应式尺寸<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>
            详情请看API
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ GridDoc.XYSBJ }}</code-demo>
      </Demo>
      <api-table title="API" sub-title="Row props" :doc="GridDoc.CRowDoc"></api-table>
      <api-table sub-title="CCol props" :doc="GridDoc.CColDoc"></api-table>
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
.code-row-bg {
  background: rgba(0,0,0,.1);
}
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

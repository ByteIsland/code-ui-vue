<template>
  <c-article>
    <article>
      <Anchor h1 title="Card 卡片" />
      <Anchor h2 title="概述" />
      <p class="desc">基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用</p>
      <Anchor h2 title="代码示例" />
      <!-- 基础用法-->
      <Demo id="BASE">
        <div slot="case">
          <c-card>
            <p slot="title"><c-icon name="home" /> 基础标题</p>
            <div>这是基础用法</div>
          </c-card>
        </div>
        <span class="title" slot="title">基础用法</span>
        <div slot="desc">
          <p>自定义标题、额外操作和主体内容，可自由控制各个部分, 也可以结合其它组件一起使用</p>
        </div>
        <code-demo lang="html" slot="code">{{ CardDoc.BASE }}</code-demo>
      </Demo>
      <!-- 自定义模式 -->
      <Demo id="CUSTOM">
        <div slot="case">
          <c-card title="自定义标题" icon="search">
            <a href="/" slot="extra">this is extra</a>
            <div>这是基础用法</div>
          </c-card>
        </div>
        <span class="title" slot="title">自定义内容</span>
        <div slot="desc">
          <p>通过传入<code>title</code>对 title 进行标题 title 设置</p>
          <p>通过传入<code>icon</code>对 icon 进行标题 icon 设置</p>
          <p>通过传入<code>slot</code>对 <code>extra</code> 进行标题右侧 extra 设置</p>
        </div>
        <code-demo lang="html" slot="code">{{ CardDoc.CUSTOM }}</code-demo>
      </Demo>
      <!--无边框模式-->
      <Demo id="NOTBORDER">
        <div slot="case" style="background: rgb(238, 238, 238); padding: 20px;">
          <c-card :bordered="false">
            <p slot="title">无边框使用</p>
            <div>Content is Not Bordered. Content is Not Bordered. Content is Not Bordered. </div>
          </c-card>
        </div>
        <span class="title" slot="title">无边框使用</span>
        <div slot="desc">
          <p>通过设置<code>bordered</code>为<code>false</code>来达到无边框, 建议在深色背景下使用</p>
        </div>
        <code-demo lang="html" slot="code">{{ CardDoc.NOTBORDER }}</code-demo>
      </Demo>
      <!--禁用hover模式-->
      <Demo id="DISHover">
        <c-row slot="case" style="background: rgb(238, 238, 238); padding: 20px;">
          <c-col :span="11">
            <c-card>
              <p slot="title">Not Disable hover shadows</p>
              <div>Content is Not Bordered. Content is Not Bordered. Content is Not Bordered. </div>
            </c-card>
          </c-col>
          <c-col :span="11" :offset="2">
            <c-card dis-hover>
              <p slot="title">Disable hover shadows</p>
              <div>Content is Not Bordered. Content is Not Bordered. Content is Not Bordered. </div>
            </c-card>
          </c-col>
        </c-row>
        <span class="title" slot="title">禁止悬停阴影</span>
        <div slot="desc">
          <p>通过设置<code>dis-hover</code>为<code>true</code>来禁用鼠标悬停显示阴影的效果</p>
        </div>
        <code-demo lang="html" slot="code">{{ CardDoc.DISHOVER }}</code-demo>
      </Demo>
      <!-- 阴影模式 -->
      <Demo id="SHADOW">
        <c-row slot="case" style="background: rgb(238, 238, 238); padding: 20px;">
          <c-col :span="11">
            <c-card>
              <p slot="title">Is Not Shadow</p>
              <div>Content Is Not Shadow. Content Is Not Shadow. Content Is Not Shadow. </div>
            </c-card>
          </c-col>
          <c-col :span="11" :offset="2">
            <c-card shadow>
              <p slot="title">Is Shadow</p>
              <div>Content Is Shadow.  Content Is Shadow. Content Is Shadow </div>
            </c-card>
          </c-col>
        </c-row>
        <span class="title" slot="title">卡片阴影</span>
        <div slot="desc">
          <p>通过设置<code>shadow</code>来显示卡片阴影, 使用后<code>bordered</code>以及<code>dis-hover</code>会失效, 建议在灰色背景下使用</p>
        </div>
        <code-demo lang="html" slot="code">{{ CardDoc.DISHOVER }}</code-demo>
      </Demo>
      <!-- 无标题 -->
      <Demo id="CONTENT">
        <div slot="case">
          <c-card style="width: 320px; text-align: center;">
            <div>
              <img :src="require('../../../assets/logo-icon.png')" width="85" height="85" alt="">
              <p>这是一个只有body的Card组件</p>
            </div>
          </c-card>
        </div>
        <span class="title" slot="title">简洁模式</span>
        <div slot="desc">
          <p>只包含内容区域, 没有标题</p>
        </div>
        <code-demo lang="html" slot="code">{{ CardDoc.CONTENT }}</code-demo>
      </Demo>
      <api-table title="API" sub-title="Card Props" :doc="CardDoc.DocProps"></api-table>
      <api-table sub-title="Card Slot" :doc="CardDoc.DocSlot"></api-table>
    </article>
  </c-article>
</template>

<script>
import CardDoc from "../../doc/card.js";
import Demo from "../../common/demo.vue";
import CArticle from "../../common/article.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import Anchor from "../../common/anchor.vue";
export default {
  data() {
    return {
      CardDoc
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
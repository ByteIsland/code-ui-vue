<template>
  <c-article>
    <article>
      <Anchor h1 title="Alert 警告框" />
      <Anchor h2 title="概述" />
      <p class="desc">静态呈现警告框, 可手动关闭</p>
      <Anchor h2 title="代码示例" />
      <!-- 基础用法 -->
      <Demo id="BASE">
        <div slot="case">
          <c-alert type="info">An Info Alert</c-alert>
          <c-alert type="success">An Success Alert</c-alert>
          <c-alert type="warning">An Warning Alert</c-alert>
          <c-alert type="error">An Error Alert</c-alert>
        </div>
        <span slot="title" class="title">基础用法</span>
        <div slot="desc">
          <p>
            基础使用方法,提供了4种样式供你选择<code>success</code>、<code>warning</code>、<code>info</code>、<code>error</code>
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ AlertDoc.BASE }}</code-demo>
      </Demo>
      <!-- 描述 -->
      <Demo id="MSXX">
        <div slot="case">
          <c-alert type="info">
            An Info Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="success">
            An Success Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="warning">
            An Warning Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="error">
            An Error Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
        </div>
        <span slot="title" class="title">带描述信息</span>
        <div slot="desc"><p>自定义<code>slot="desc"</code>描述内容</p></div>
        <code-demo lang="html" slot="code">{{ AlertDoc.MSXX }}</code-demo>
      </Demo>
      <!--带图标-->
      <Demo id="TB">
        <div slot="case">
          <c-alert type="info" show-icon>An Info Alert</c-alert>
          <c-alert type="success" show-icon>An Success Alert</c-alert>
          <c-alert type="warning" show-icon>An Warning Alert</c-alert>
          <c-alert type="error" show-icon>An Error Alert</c-alert>
          <c-alert type="info" show-icon>
            An Info Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="success" show-icon>
            An Success Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="warning" show-icon>
            An Warning Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="error" show-icon>
            An Error Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert type="info" show-icon>
            <c-icon name="warning-light" slot="icon" />
            An Custom icon
            <template slot="desc">
              Custom of Alert. Custom of Alert. Custom of Alert. Custom of Alert.
            </template>
          </c-alert>
        </div>
        <span slot="title" class="title">带图标</span>
        <div slot="desc">
          <p>
            通过设置属性<code>show-icon</code>可让警告框根据
            <code>type</code>
            属性自动添加不同图标,也可以使用<code>slot</code>设置自定义图标
          </p>
        </div>
        <code-demo lang="html" slot="code">{{ AlertDoc.TB }}</code-demo>
      </Demo>
      <!-- 带关闭按钮 -->
      <Demo id="GBAN">
        <div slot="case">
          <c-alert closable type="info">An Info Alert</c-alert>
          <c-alert closable type="success" show-icon>
            An Success Alert
            <template slot="desc">
              Content of Alert. Content of Alert. Content of Alert. Content of Alert.
            </template>
          </c-alert>
          <c-alert closable type="error" close-text="close">
            An Error Alert
          </c-alert>
        </div>
        <span slot="title" class="title">带关闭按钮</span>
        <div slot="desc">
          <p>
            显示关闭按钮,点击可关闭警告框,也可以通过<code>close-text</code>设置关闭按钮的文本
          </p>
        </div>
        <code-demo lang="html" slot="code"> {{ AlertDoc.GBAN }} </code-demo>
      </Demo>
      <api-table title="API" sub-title="Alert Props" :doc="AlertDoc.PropsDoc"></api-table>
      <api-table sub-title="Alert Event" :type="3" :doc="AlertDoc.EventsDoc"></api-table>
      <api-table sub-title="Alert Slot" :type="2" :doc="AlertDoc.SlotDoc"></api-table>
    </article>
  </c-article>
</template>

<script>
import AlertDoc from "../../doc/alert.js";
import Demo from "../../common/demo.vue";
import CArticle from "../../common/article.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import Anchor from "../../common/anchor.vue";
export default {
  data() {
    return {
      AlertDoc
    };
  },
  components: {
    Demo,
    CodeDemo,
    ApiTable,
    CArticle,
    Anchor
  }
};
</script>

<style scoped>

</style>
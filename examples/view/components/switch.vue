<template>
  <c-article>
    <article>
      <Anthor h1 title="Switch 开关" />
      <Anthor h2 title="概述" />
      <p class="desc">一般用于在两种状态间切换</p>
      <Anthor h2 title="代码示例" />
      <!-- 基础用法 -->
      <Demo id="BASE">
        <div slot="case">
          <c-switch v-model="switch1" @on-change="handleChange" />
        </div>
        <span slot="title" class="title">基本使用</span>
        <div slot="desc">
          <p>基础用法, 状态切换时会触发<code>on-change</code>事件</p>
        </div>
        <code-demo lang="html" slot="code"> {{ SwitchDoc.BASE }} </code-demo>
      </Demo>
      <!-- 尺寸 -->
      <Demo id="SIZE">
        <div slot="case">
          <c-switch size="large" />
          <c-switch />
          <c-switch size="small" />
        </div>
        <span slot="title" class="title">尺寸</span>
        <div slot="desc">
          <p>
            通过设置属性<code>size</code>可让选择框变大或者缩小, 可选值<code>large</code>、<code>default</code>(默认)、<code>small</code>
          </p>
        </div>
        <code-demo lang="html" slot="code"> {{ SwitchDoc.SIZE }} </code-demo>
      </Demo>
      <Demo id="WZYTB">
        <div slot="case">
          <c-switch>
            <span slot="open">开</span><span slot="close">关</span>
          </c-switch>
          <c-switch>
            <c-icon slot="open" name="check"></c-icon>
            <c-icon slot="close" name="close"></c-icon>
          </c-switch>
          <br />
          <br />
          <c-switch size="large">
            <span slot="open">打开</span><span slot="close">关闭</span>
          </c-switch>
          <c-switch size="large">
            <span slot="open">ON</span><span slot="close">OFF</span>
          </c-switch>
        </div>
        <span slot="title" class="title">文字 & 图标</span>
        <div slot="desc">
          <p>
            通过设置<code>slot</code>可自定义开关内容,建议如果使用2个汉字以上,将开关尺寸设置为<code>large</code>以获得更好体验
          </p>
        </div>
        <code-demo slot="code" lang="html">{{ SwitchDoc.WZYTB }}</code-demo>
      </Demo>
      <!-- 禁用 -->
      <Demo id="JY">
        <div slot="case">
          <c-switch disabled :value="true" />
          <c-switch disabled :value="false" />
        </div>
        <span slot="title" class="title">禁用状态</span>
        <div slot="desc"><p>设置<code>disabled</code>可让开关不可使用</p></div>
        <code-demo lang="html" slot="code">{{ SwitchDoc.JY }}</code-demo>
      </Demo>
      <api-table title="API" sub-title="Switch Props" :doc="SwitchDoc.PropsDoc" />
      <api-table sub-title="Switch Events" :type="3" :doc="SwitchDoc.EventsDoc" />
      <api-table sub-title="Switch Slot" :type="2" :doc="SwitchDoc.SlotDoc" />
    </article>
  </c-article>
</template>

<script>
import SwitchDoc from "../../doc/switch";
import CArticle from "../../common/article.vue";
import Demo from "../../common/demo.vue";
import Anthor from "../../common/anchor.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
export default {
  data() {
    return {
      switch1: false,
      SwitchDoc
    };
  },
  methods: {
    handleChange(status) {
      this.$message.info("开关状态" + status);
    }
  },
  components: {
    Anthor,
    CArticle,
    Demo,
    CodeDemo,
    ApiTable
  }
};
</script>
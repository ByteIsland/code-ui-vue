<template>
  <c-article>
    <article>
      <Anchor h1 title="Font 字体" />
      <Anchor h2 title="概述" />
      <p class="desc">
        CodeUI对字体进行了统一规范,借鉴了各大UI库的字体选择,从中选择适合CodeUI的子图,力争在不同平台、不同浏览器下能显示出其最好的体验
      </p>
      <Anchor h3 title="字体代码" />
      <code-demo lang="auto" :bg="true">{{ FontDoc.Family }}</code-demo>
      <Anchor h3 title="字体使用规范" />
      <p class="desc">
        CodeUI 目前对字体大小统一为<code>12px</code>,
        也可以根据场景使用<code>14px</code>、<code>16px</code>、<code>18px</code>、
        <code>22px</code>, 推荐使用<code>12px</code>、<code>16px</code>
      </p>
      <Anchor h3 title="字体使用示例" />
      <c-row gutter="18">
        <c-col span="12">
          <api-table font isCN :doc="FontDoc.CNDoc" />
        </c-col>
        <c-col span="12">
          <api-table font :doc="FontDoc.ENDoc" />
        </c-col>
      </c-row>
    </article>
  </c-article>
</template>

<script>
import FontDoc from "../../doc/font";
import CArticle from "../../common/article.vue";
import Anchor from "../../common/anchor.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
export default {
  name: "font",
  data() {
    return {
      FontDoc
    }
  },
  components: {
    CArticle,
    Anchor,
    CodeDemo,
    ApiTable
  }
};
</script>

<style lang="scss">

</style>
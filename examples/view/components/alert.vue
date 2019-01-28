<template>
  <c-article>
    <article>
      <Anchor h1 title="Alert 警告框" />
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
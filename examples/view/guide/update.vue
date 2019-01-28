<template>
  <c-article>
    <article>
      <Anchor h1 title="更新日志" />
      <p class="desc">
        目前处于<code>beta</code>版本, 于正式版本发布后开始更新
      </p>
    </article>
  </c-article>
</template>

<script>
import CArticle from "../../common/article";
import Anchor from "../../common/anchor";
export default {
  name: "update",
  components: {
    CArticle,
    Anchor
  }
};
</script>

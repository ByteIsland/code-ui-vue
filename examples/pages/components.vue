<template>
  <div>
    <div class="wrapper">
      <Head></Head>
      <Article></Article>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Head from "../layout/header";
import Footer from "../layout/footer";
import Article from "../layout/article";
export default {
  components: {
    Head,
    Article,
    Footer
  }
};
</script>

<style lang="scss">
.wrapper {
  background: #eee;
  padding: 1px;
}
</style>

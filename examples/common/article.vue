<template>
  <div class="wrapper">
    <wrap-header />
    <div class="wrapper-container">
      <c-row>
        <c-col :span="4"> <MenuList /> </c-col>
        <c-col :span="17" class="c-article"> <slot></slot> </c-col>
        <c-col :span="3">
          <c-anchor :offsetTop="70" v-if="anchorList.length > 0" ref="Canchor">
            <c-anchor-link
              :href="item.path"
              :title="item.title"
              v-for="(item, index) in anchorList"
              :key="index"
            ></c-anchor-link>
            <c-anchor-link
              href="#API"
              title="API"
              v-if="need_api"
            ></c-anchor-link>
          </c-anchor>
        </c-col>
      </c-row>
    </div>
    <wrap-footer />
  </div>
</template>

<script>
import MenuList from "../layout/menu.vue";
import WrapHeader from "../layout/header.vue";
import WrapFooter from "../layout/footer.vue";
export default {
  data() {
    return {
      anchorList: [],
      need_api: true // 是否开启默认API
    };
  },
  methods: {
    // 获取标签的ID与跳转地址
    updateAnchorList() {
      const examples = this.$slots.default[0].elm.querySelectorAll(".example");

      if (examples.length) {
        for (let i = 0; i < examples.length; i++) {
          const path = `#${examples[i].id}`;
          const title = examples[i].querySelectorAll(
            ".example-title span.title"
          )[0].innerText;
          this.anchorList.push({
            path,
            title
          });
        }
      } else {
        this.need_api = false;
        const anchor = this.$slots.default[0].elm.querySelectorAll(".anchor");
        if (anchor.length) {
          for (let i = 0; i < anchor.length; i++) {
            const anchorH2 = anchor[i].querySelectorAll("h2");
            // 判断长度
            if (anchorH2.length > 0) {
              const path = `#${anchorH2[0].id}`;
              const title = anchorH2[0].innerText;
              this.anchorList.push({
                path,
                title
              });
            }
          }
        }
      }
    }
  },
  mounted() {
    this.updateAnchorList();
  },
  components: {
    MenuList,
    WrapHeader,
    WrapFooter
  }
};
</script>

<style lang="scss">
@import "../styles/article.scss";
.wrapper {
  background: #eee;
  padding: 1px;
}
</style>

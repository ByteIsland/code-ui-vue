<template>
	<c-row class="wrapper-container">
		<c-col :span="4">
			<MenuList></MenuList>
		</c-col>
		<c-col :span="17"  class="c-article">
			<router-view></router-view>
		</c-col>
		<c-col :span="3">
			<c-anchor :offsetTop="70" v-if="anchorList.length > 0" ref="Canchor">
				<c-anchor-link :href="item.path" :title="item.title" v-for="(item, index) in anchorList"  :key="index"></c-anchor-link>
				<c-anchor-link href="#API" title="API"></c-anchor-link>
			</c-anchor>
		</c-col>
	</c-row>
</template>

<script>
import MenuList from "./menu.vue";
export default {
  data() {
    return {
      anchorList: []
    };
  },
  methods: {
    updateAnchorList() {
      const routerName = this.$router.history.current.name;
      return Promise.all([import(`../doc/${routerName}`)])
        .then(res => {
          if (res[0].default.anchor) {
            this.anchorList = res[0].default.anchor;
          } else {
            this.anchorList = [];
          }
        })
        .catch(err => {
          console.log(err);
          this.anchorList = [];
        });
    }
  },
  mounted() {
    this.updateAnchorList();
  },
  components: {
    MenuList
  },
  watch: {
    $route() {
      this.updateAnchorList();
    }
  }
};
</script>

<style lang="scss">
@import "../styles/article.scss";
</style>

<template>
	<c-row class="wrapper-container">
		<c-col :span="4">
			<MenuList></MenuList>
		</c-col>
		<c-col :span="17" class="c-article">
			<router-view></router-view>
		</c-col>
		<c-col :span="3">

		</c-col>
	</c-row>
</template>

<script>
import MenuList from "./menu.vue";
export default {
  components: {
    MenuList
  }
};
</script>

<style lang="scss">
@import "../styles/article.scss";
</style>

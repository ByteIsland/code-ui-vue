<template>
	<div class="wrapper-header">
		<div class="wrapper-header-nav">
			<router-link to="/" class="wrapper-header-nav-logo" >
				<img :src="require('assets/logo-small.png')" alt="">
			</router-link>
			<!-- 菜单 -->
			<c-menu class="wrapper-header-nav-list" mode="horizontal" active-name="component">
				<c-menu-item name="guide" to="/guide/introduce">介绍</c-menu-item>
				<c-menu-item name="component" to="/component/button">组件</c-menu-item>
			</c-menu>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../styles/header.scss";
</style>

<template>
	<div class="menu-list" >
		<c-menu active-name="button" style="width: auto">
			<c-menu-group title="基础" >
				<c-menu-item name="button" to="/components/button">Button 按钮</c-menu-item>
				<c-menu-item name="icon" to="/components/icon">Icon 图标</c-menu-item>
			</c-menu-group>		
			<c-menu-group title="布局" >
				<c-menu-item name="menu" to="/components/menu">Menu 菜单</c-menu-item>
				<c-menu-item name="layout" to="/components/layout">Layout 布局</c-menu-item>
			</c-menu-group>			
		</c-menu>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

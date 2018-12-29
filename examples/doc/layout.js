let code = {};

code.base = `
<template>
	<c-layout class="layout-single">
		<c-header>Header</c-header>
		<c-main>Content</c-main>
		<c-footer>Footer</c-footer>
	</c-layout>
	<c-layout class="layout-single">
		<c-header>Header</c-header>
		<c-layout>
			<c-sider style="flex:0 0 200px">Sider</c-sider>
			<c-main>Content</c-main>
		</c-layout>
		<c-footer>Footer</c-footer>
	</c-layout>
	<c-layout class="layout-single">
		<c-header>Header</c-header>
		<c-layout>
			<c-main>Content</c-main>
			<c-sider style="flex:0 0 200px">Sider</c-sider>
		</c-layout>
		<c-footer>Footer</c-footer>
	</c-layout>
	<c-layout class="layout-single">
		<c-sider style="flex:0 0 200px; line-height: 248px;">Sider</c-sider>
		<c-layout>
			<c-header>Header</c-header>
			<c-main>Content</c-main>
			<c-footer>Footer</c-footer>
		</c-layout>
	</c-layout>
</template>
<script>
	export default {
					
	}
</script>
`;

export default code;

<template>
	<c-article>
		<article>
			<h1 class="title">Layout 布局</h1>
			<p class="author">基础组件, 触发业务逻辑可使用</p>
			<h2 class="show">代码示例</h2>
			<Demo id="BASE">
				<div slot="case">
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
				</div>
				<span slot="title" class="title">基本结构</span>
				<div slot="desc">
					<p>经典的页面布局</p>
				</div>
				<code-demo lang="html" slot="code">{{ LayoutDoc.base }}</code-demo>
			</Demo>
		</article>
	</c-article>
</template>

<script>
import CArticle from "../../common/article.vue";
import Demo from "../../common/demo.vue";
import CodeDemo from "../../common/code.vue";
import ApiTable from "../../common/table.vue";
import LayoutDoc from "../../doc/layout.js";
export default {
  data() {
    return {
      LayoutDoc
    };
  },
  components: {
    CArticle,
    Demo,
    CodeDemo,
    ApiTable
  }
};
</script>

<style scoped lang="scss">
.layout-single {
  margin-bottom: 48px;
}
.c-layout-wrapper {
  font-size: 12px;
  color: #fff;
  text-align: center;
  .c-layout-header {
    background: #7cbce9;
  }
  .c-layout-main {
    background: #0f8de9;
    height: 120px;
    line-height: 120px;
  }
  .c-layout-sider {
    background: #3a9fe8;
    line-height: 120px;
  }
  .c-layout-footer {
    background: #7cbce9;
  }
}
</style>

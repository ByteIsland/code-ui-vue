<template>
	<div>
		<h1>Button 按钮</h1>
		<p>基础组件，触发业务逻辑时使用。</p>
		<div class="anchor">
			<h2>代码实例</h2>
		</div>
		<div class="example">
			<div class="example-demo">
				<div class="example-case">
					<c-button>Default</c-button>
					<c-button type="primary">primary</c-button>
					<c-button disabled>Disabled</c-button>
					<br>
					<br>
					<c-button type="success">Success</c-button>
					<c-button type="info">Info</c-button>
					<c-button type="warning">Warning</c-button>
					<c-button type="danger">Danger</c-button>
				</div>
				<div class="example-title">
					<span>按钮类型</span>
				</div>
				<div class="example-desc">
					<p>按钮类型有：默认按钮、主按钮、禁用按钮以及四种颜色按钮。</p>
					<p>通过设置<em>type</em>为<em>primary</em>、<em>success</em>、<em>info</em>、<em>warning</em>、<em>danger</em>创建不同样式的按钮</p>
				</div>
			</div>
			<div class="example-split"></div>
			<div class="example-code">
				<pre v-highlight>
					<code class="html">
						{{markdownhtml}}
					</code>
				</pre>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      markdownhtml: `
			<template>
				<c-button type="primary">primary</c-button>|
				<c-button disabled>Disabled</c-button>
				<c-button type="success">Success</c-button>
				<c-button type="info">Info</c-button>
				<c-button type="warning">Warning</c-button>
				<c-button type="danger">Danger</c-button>
			</template>`
    };
  }
};
</script>

<style scoped>
</style>

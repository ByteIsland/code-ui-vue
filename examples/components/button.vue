<template>
	<article>
		<h1 class="title">Button 按钮</h1>
		<p class="author">基础组件, 触发业务逻辑可使用</p>
		<h2 class="test">基础展示</h2>
		<Demo>
			<div slot="case">
				<c-button>Defalut</c-button>
				<c-button type="primary">Primary</c-button>
				<c-button disabled>Primary</c-button>
			</div>
			<span slot="title" class="title">按钮类型</span>
			<div slot="desc">
				<p>按钮类型有：默认按钮、主按钮、禁用按钮以及四种颜色按钮。</p>
			</div>
		</Demo>
	</article>
</template>
<script>
import ButtonDoc from "../doc/button.js";
import Demo from "../layout/demo.vue";
export default {
  data() {
    return {
      ButtonDoc
    };
  },
  components: {
    Demo
  }
};
</script>

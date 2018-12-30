<template>
	<c-article>
		<article>
			<Anchor h1 title="Button 按钮"></Anchor>
			<p class="description">基础组件, 触发业务逻辑可使用</p>
			<Anchor h2 title="代码示例"></Anchor>
			<Demo id="BASE">
				<div slot="case">
					<c-button>Defalut</c-button>
					<c-button type="primary">Primary</c-button>
					<c-button disabled>Disabled</c-button>
					<br>
					<br>
					<c-button type="success">Success</c-button>
					<c-button type="info">Info</c-button>
					<c-button type="warning">Warning</c-button>
					<c-button type="error">Error</c-button>
				</div>
				<span slot="title" class="title">按钮类型</span>
				<div slot="desc">
					<p>按钮类型有：默认按钮、主按钮、禁用按钮以及四种颜色按钮。</p>
					<p>通过
					<code>type</code>为
					<code>primary</code>、
					<code>success</code>、
					<code>info</code>、
					<code>warning</code>、
					<code>error</code>
					创建不同颜色的按钮, 默认<code>default</code></p>
				</div>
				<code-demo lang="html" slot="code">{{ ButtonDoc.base }}</code-demo>
			</Demo>
			<Demo id="CIRCLE">
				<div slot="case">
					<c-button type="primary" icon="search">Search</c-button>
					<c-button type="primary" round icon="search">Round</c-button>
					<c-button type="primary" circle>
						<i class="code-icon-search"></i>
					</c-button>
				</div>
				<span slot="title" class="title">图标按钮及按钮形状</span>
				<div slot="desc">
					<p>使用<code>Button</code>组件的<code>icon</code>可实现文字带图标的状态, 在当前<code>icon</code>可不需传入完整名字，只需传入最后的关键词</p>
					<p>通过设置属性<code>round</code>可设置胶囊按钮</p>
					<p>通过设置属性<code>circle</code>用于展示<code>icon</code>,切勿传入文字</p>
				</div>
				<code-demo lang="html" slot="code">{{ ButtonDoc.circle }}</code-demo>
			</Demo>
			<Demo id="GROUP">
				<div slot="case">
					<c-button-group>
						<c-button type="primary">Left</c-button>
						<c-button type="primary">Middle</c-button>
						<c-button type="primary">Right</c-button>
					</c-button-group>
					<br>
					<c-button-group circle>
						<c-button >Left</c-button>
						<c-button >Middle</c-button>
						<c-button >Right</c-button>
					</c-button-group>
				</div>
				<span slot="title" class="title">组合式按钮</span>
				<div slot="desc">
					<p>通过<code>ButtonGroup</code>组件对<code>button</code>组件进行包裹, 可实现按钮组合的效果</p>
					<p>通过设置<code>ButtonGroup</code>的<code>circle</code>可设置按钮组样式为圆角</p>
				</div>
				<code-demo lang="html" slot="code">{{ ButtonDoc.group }}</code-demo>
			</Demo>
			<Demo id="SIZE">
				<div slot="case">
					<c-button type="primary" size="large">Large</c-button>
					<c-button type="primary">Default</c-button>
					<c-button type="primary" size="small">Small</c-button>
				</div>
				<span slot="title" class="title">按钮大小</span>
				<div slot="desc">
					<p>通过设置属性<code>size</code>为<code>large</code>、<code>small</code>可设置组件大小, 默认组件大小是(中)</p>
				</div>
				<code-demo lang="html" slot="code">{{ ButtonDoc.size }}</code-demo>
			</Demo>
			<!-- api -->
			<div id="API">
				<api-table title="API" sub-title="Button props" :doc="ButtonDoc.doc"></api-table>
				<api-table sub-title="ButtonGroup props" :doc="ButtonDoc.groupDoc"></api-table>
			</div>
		</article>
	</c-article>
</template>
<script>
import ButtonDoc from "../../doc/button.js";
import Demo from "../../common/demo.vue";
import CArticle from "../../common/article.vue";
import ApiTable from "../../common/table.vue";
import CodeDemo from "../../common/code.vue";
import Anchor from "../../common/anchor.vue";
export default {
  data() {
    return {
      ButtonDoc
    };
  },
  components: {
    Demo,
    CodeDemo,
    ApiTable,
    CArticle,
    Anchor
  }
};
</script>

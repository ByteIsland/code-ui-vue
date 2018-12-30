<template>
	<span>
		<a 
			v-if="to"
			:href="to"
			:target="target"
			:class="linkClasses"
			@click.exact="handleCheckClick($event, false)"
			@click.ctrl="handleCheckClick($event, true)"
			@click.meta="handleCheckClick($event, true)"
		><slot></slot></a>
		<span v-else :class="linkClasses">
			<slot></slot>
		</span>
		<span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
		<span :class="separatorClasses" v-else>
			<slot name="separator"></slot>
		</span>
	</span>
</template>

<script>
import MixinLink from "@/mixins/link.js";
const prefixClass = "c-breadcrumb-item";
export default {
  name: "CBreadcrumbItem",
  mixins: [MixinLink],
  data() {
    return {
      separator: "",
      showSeparator: false
    };
  },
  computed: {
    linkClasses() {
      return `${prefixClass}-link`;
    },
    separatorClasses() {
      return `${prefixClass}-separator`;
    }
  },
  mounted() {
    this.showSeparator = this.$slots.separator !== undefined;
  }
};
</script>

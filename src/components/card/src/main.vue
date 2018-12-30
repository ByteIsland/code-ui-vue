<template>
	<div :class="classes">
		<div :class="headerClasses" v-if="showHead">
			<slot name="title">
				<p v-if="title">
					<c-icon v-if="icon" :name="icon"></c-icon>
					<span>{{title}}</span>
				</p>
			</slot>
		</div>
		<div :class="bodyClasses"><slot></slot></div>
	</div>
</template>

<script>
const prefixClass = "c-card";
export default {
  name: "CCard",
  props: {
    title: {
      type: String // 标题
    },
    icon: {
      type: String // 图标
    },
    shadow: Boolean, // 开启阴影
    bordered: {
      type: Boolean,
      default: true
    } // 开启边框
  },
  data() {
    return {
      showHead: true
    };
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}-shadow`]: this.shadow,
          [`${prefixClass}-bordered`]: !!this.bordered && !this.shadow
        }
      ];
    },
    headerClasses() {
      return `${prefixClass}-head`;
    },
    bodyClasses() {
      return `${prefixClass}-body`;
    }
  },
  mounted() {
    this.showHead = this.title || this.$slots.title !== undefined;
  }
};
</script>

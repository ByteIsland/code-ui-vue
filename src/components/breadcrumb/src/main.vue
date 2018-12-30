<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
const prefixClass = "c-breadcrumb";
export default {
  name: "CBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    }
  },
  computed: {
    classes() {
      return `${prefixClass}`;
    }
  },
  methods: {
    updateChildBreadcrumbItem() {
      this.$children.forEach((child, idx) => {
        // 只针对CBreadcrumbItem进行修改
        if (child.$options.name === `${this.$options.name}Item`) {
          // 拦截最后一个目标元素不加入
          if (idx + 1 !== this.$children.length) {
            child.separator = this.separator;
          }
        }
      });
    }
  },
  mounted() {
    this.updateChildBreadcrumbItem();
  },
  updated() {
    // 组件更新时
    this.$nextTick(() => {
      this.updateChildBreadcrumbItem();
    });
  },
  watch: {
    separator() {
      this.updateChildBreadcrumbItem();
    }
  }
};
</script>

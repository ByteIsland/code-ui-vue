<template>
	<div class="c-layout-wrapper" :class="{'is-sider':isVertical}">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "CLayout",
  computed: {
    isVertical() {
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(Vnode => {
            const tag = Vnode.componentOptions && Vnode.componentOptions.tag;
            return tag === "c-sider";
          })
        : false;
    }
  }
};
</script>

<template>
	<div class="c-layout-footer" :style="style">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "CFooter",
  props: {
    // 左右边距
    gutter: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    style() {
      let gut = {};
      if (!this.gutter) {
        return "";
      }
      gut.paddingLeft = `${parseInt(this.gutter) / 2}px`;
      gut.paddingRight = gut.paddingLeft;
      return gut;
    }
  }
};
</script>

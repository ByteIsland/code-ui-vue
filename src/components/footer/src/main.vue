<template>
	<div class="c-layout-footer" :style="style">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "CFooter",
  props: {
    height: {
      type: [String, Number],
      default: 64
    },
    gutter: {
      type: [String, Number],
      default: 30
    }
  },
  computed: {
    style() {
      let gut = {};
      gut.height = `${parseInt(this.height)}px`;
      gut.lineHeight = `${parseInt(this.height)}px`;
      gut.paddingLeft = `${parseInt(this.gutter) / 2}px`;
      gut.paddingRight = gut.paddingLeft;
      return gut;
    }
  }
};
</script>

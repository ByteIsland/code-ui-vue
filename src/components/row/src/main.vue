<template>
	<div :class="['c-row', classes]" :style="styles">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "CRow",
  props: {
    gutter: Number, // 分栏
    flex: Boolean,
    justify: {
      type: String,
      default: "start" // start/end/space-around/space-between/center
    },
    align: {
      type: String,
      default: "top" // top/middle/bottom
    }
  },
  computed: {
    classes() {
      return [
        this.justify !== "start" ? `is-justify--${this.justify}` : "",
        this.align !== "top" ? `is-align--${this.align}` : "",
        this.flex ? "c-row--flex" : ""
      ];
    },
    styles() {
      let gut = {};
      if (this.gutter) {
        gut.marginLeft = `-${this.gutter / 2}px`;
        gut.marginRight = gut.marginLeft;
      }
      return gut;
    }
  }
};
</script>

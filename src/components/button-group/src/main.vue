<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
const prefixClass = "c-button-group";
export default {
  name: "CButtonGroup",
  props: {
    circle: Boolean, // 圆形按钮
    vertical: Boolean // 垂直布局
  },
  data() {
    return {
      prefixClass
    };
  },
  computed: {
    classes() {
      return [
        `${this.prefixClass}`,
        [
          {
            "is-circle": !!this.circle,
            "is-vertical": !!this.vertical
          }
        ]
      ];
    }
  }
};
</script>

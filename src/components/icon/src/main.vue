<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
const prefixClass = "c-icon";
export default {
  name: "CIcon",
  props: {
    // 字体名称
    name: {
      type: String,
      default: ""
    },
    // 字体大小
    size: {
      type: [Number, String],
      default: 0
    },
    // 色彩
    color: {
      type: String,
      default: ""
    }
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
        {
          [`code-icon-${this.name}`]: !!this.name
        }
      ];
    },
    styles() {
      let style = {};
      if (this.size) {
        style.fontSize = `${this.size}px`;
      } else if (this.color) {
        style.color = `${this.color}`;
      }
      return style;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

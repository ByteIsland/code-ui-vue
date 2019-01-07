<template>
  <i
    :class="classes"
    :style="styles"
    @click="handleClick"
    aria-hidden="true"
  ></i>
</template>

<script>
import { CheckProps } from "@/utils/assets.js";
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
      validate(value) {
        return CheckProps(value, ["lg", "2x", "3x", "4x", "5x"]);
      },
      default: "lg"
    },
    // 色彩
    color: {
      type: String,
      default: ""
    },
    // 旋转
    rotate: {
      validate(value) {
        return CheckProps(value, [90, 180, 270]);
      },
      default: 0
    },
    // 翻转
    flipped: {
      validate(value) {
        return CheckProps(value, ["horizontal", "vertical"]);
      },
      default: ""
    },
    // 动画
    animated: {
      type: Boolean,
      default: false
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
        `${prefixClass}`,
        {
          [`${prefixClass}-${this.name}`]: !!this.name,
          [`${prefixClass}-${this.size}`]: this.size,
          [`${prefixClass}-rotate-${this.rotate}`]: !!this.rotate,
          [`${prefixClass}-${this.flipped}`]: !!this.flipped,
          "c-rotate-appear": !!this.animated
        }
      ];
    },
    styles() {
      let style = {};
      if (this.color) {
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

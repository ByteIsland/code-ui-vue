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
    // 对齐模式
    fixed: {
      type: Boolean,
      default: false
    },
    // 旋转
    rotate: {
      validate(value) {
        return CheckProps(value, [90, 180, 270]);
      },
      default: ""
    },
    // 翻转
    Flipped: {
      validate(value) {
        return CheckProps(value, ["horizontal", "vertical"]);
      },
      default: ""
    },
    // 动画
    Animated: {
      validate(value) {
        return CheckProps(value, ["pulse", "spin"]);
      },
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
        `${prefixClass}`,
        {
          [`${prefixClass}-${this.name}`]: !!this.name,
          [`${prefixClass}-${this.size}`]: this.size,
          [`${prefixClass}-fw`]: this.fixed,
          [`${prefixClass}-rotate-${this.rotate}`]: !!this.rotate,
          [`${prefixClass}-${this.Flipped}`]: !!this.Flipped,
          [`${prefixClass}-${this.Animated}`]: !!this.Animated
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

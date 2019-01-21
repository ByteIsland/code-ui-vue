<template>
  <transition name="c-loading-fade">
    <div class="c-loading-bar" v-show="visible">
      <div :style="style" :class="Classes"></div>
    </div>
  </transition>
</template>

<script>
const prefixName = "c-loading-bar-inner";
export default {
  props: {
    // 进度条高度
    height: {
      type: Number,
      default: 2
    },
    // 进度条颜色
    color: {
      type: String,
      default: "primary"
    },
    // 错误展示
    failedColor: {
      type: String,
      default: "error"
    }
  },
  data() {
    return {
      visible: false,
      percent: 0, // 进度条宽度
      status: "primary" // 状态
    };
  },
  computed: {
    Classes() {
      return [
        prefixName,
        {
          [`${prefixName}-error`]: this.status === "error",
          [`${prefixName}-success`]: this.status === "success"
        }
      ];
    },
    style() {
      let styles = {};
      styles.width = `${this.percent}%`;
      styles.height = `${this.height}px`;

      if (this.color !== "primary" && this.status === "success") {
        styles.backgroundColor = this.color;
      }

      if (this.failedColor !== "error" && this.status === "error") {
        styles.backgroundColor = this.failedColor;
      }

      return styles;
    }
  }
};
</script>

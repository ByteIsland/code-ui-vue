<template>
  <transition name="c-loading-fade">
    <div class="c-loading-bar" v-show="visible">
      <div :style="style" :class="innserClasses">
      </div>
    </div>
  </transition>
</template>

<script>
const prefixName = "c-loading-bar-inner";
export default {
  data() {
    return {
      visible: false,
      percent: 0, // 进度条宽度
      failedColor: "error",
      color: "primary", // 进度条颜色
      status: "primary", // 状态
      height: 0 // 进度条高度
    };
  },
  computed: {
    innserClasses() {
      return [
        prefixName,
        {
          [`${prefixName}-error`]: this.status === "error",
          [`${prefixName}-success`]: this.status === "success"
        }
      ];
    },
    style() {
      let style = {
        width: `${this.percent}%`,
        height: `${this.height}px`
      };

      return style;
    }
  }
};
</script>

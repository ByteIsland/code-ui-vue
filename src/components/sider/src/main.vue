<template>
  <div :class="classes" :style="styles">
    <div :class="childClasses"><slot></slot></div>
    <slot name="trigger">
      <div
        v-show="showBottomTrigger"
        @click="toggleCollapse"
        :class="triggerClasses"
        :style="{ width: siderWidth + 'px' }"
      >
        <i :class="triggerIconClasses"></i>
      </div>
    </slot>
  </div>
</template>

<script>
const prefixClass = "c-layout-sider";
export default {
  name: "CSider",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 200
    },
    // 隐藏侧边栏
    hideTrigger: {
      type: Boolean,
      default: false
    },
    // 开启侧边栏开关
    collapsible: {
      type: Boolean,
      default: false
    },
    // 定义侧边栏关闭长度
    collapsedWidth: {
      type: [Number, String],
      default: 64
    }
  },
  data() {
    return {
      prefixClass,
      mediaMatched: false,
      reverseArrow: false // 箭头方向
    };
  },
  computed: {
    classes() {
      return [`${prefixClass}`];
    },
    styles() {
      return {
        width: `${this.siderWidth}px`,
        minWidth: `${this.siderWidth}px`,
        maxWidth: `${this.siderWidth}px`,
        flex: `${this.siderWidth}px`
      };
    },
    childClasses() {
      return `${prefixClass}-children`;
    },
    // 显示底部按钮
    showBottomTrigger() {
      return this.collapsible ? !this.mediaMatched && !this.hideTrigger : false;
    },
    // 侧边栏宽度 （收起）
    siderWidth() {
      return this.collapsible
        ? this.value
          ? this.mediaMatched
            ? 0
            : parseInt(this.collapsedWidth)
          : parseInt(this.width)
        : this.width;
    },
    triggerClasses() {
      return [
        `${this.prefixClass}-trigger`,
        this.value ? `${this.prefixClass}-trigger-collapsed` : ""
      ];
    },
    triggerIconClasses() {
      return [
        `code-icon-arrow`,
        `${this.prefixClass}-icon-${this.reverseArrow ? "forward" : "back"}`,
        `${this.prefixClass}-trigger-icon`
      ];
    }
  },
  methods: {
    toggleCollapse() {
      let value = this.collapsible ? !this.value : false;
      this.$emit("input", value); // input会触发v-model
    }
  },
  watch: {
    value(val) {
      this.$emit("on-collapse", val);
    }
  }
};
</script>

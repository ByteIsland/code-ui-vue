<template>
  <div
    :class="prefixClass"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-click-outside="handleOutSide"
  >
    <div
      :class="relClass"
      ref="reference"
      @click="handleClick"
      @contextmenu.prevent="handleRightClick"
    >
      <slot></slot>
    </div>
    <transition name="transition-drop">
      <Drop
        :class="dropDownClass"
        v-show="currentVisible"
        :placement="placement"
        @mouseenter.native="handleMouseEnter"
        @mouseleave.native="handleMouseLeave"
        ref="drop"
      >
        <slot name="list"></slot>
      </Drop>
    </transition>
  </div>
</template>

<script>
import Drop from "@/components/base/select/dropdown.vue";
import { directive as clickOutside } from "v-click-outside-x";
import { CheckProps } from "@/utils/assets";
import { findComponentUpward } from "@/utils/assets";

const prefixClass = "c-dropdown";
export default {
  name: "CDropdown",
  directives: { clickOutside },
  props: {
    /* 触发方式 */
    trigger: {
      validator(value) {
        return CheckProps(value, ["click", "hover", "custom", "RightClick"]);
      },
      default: "hover"
    },
    /* 显示位置 */
    placement: {
      validator(value) {
        return CheckProps(value, [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end"
        ]);
      },
      default: "bottom"
    },
    /* 是否显示 */
    visible: {
      type: Boolean,
      default: false
    },
    /* 脱离Dom节点 加入body */
    transfer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixClass,
      currentVisible: this.visible
    };
  },
  watch: {
    visible(val) {
      this.currentVisible = val;
    },
    currentVisible(val) {
      if (val) {
        this.$refs.drop.create();
      } else {
        this.$refs.drop.destroy();
      }
      this.$emit("on-visible-change", true);
    }
  },
  computed: {
    relClass() {
      return [
        `${prefixClass}-rel`,
        {
          [`${prefixClass}-rel-user-select-none`]: this.trigger === "RightClick" // 禁止用户选中文本
        }
      ];
    },
    /* 默认不触发 */
    dropDownClass() {
      return { [`${prefixClass}-transfer`]: this.transfer };
    }
  },
  methods: {
    // TODO 拦截器 禁止定制规则&不是hover事件进入
    isCustomAndHover() {
      if (this.trigger === "custom") {
        return false;
      }
      return this.trigger === "hover";
    },
    // TODO 拦截器 禁止定制规则&不是Click事件进入
    isCustomAndClick() {
      if (this.trigger === "custom") {
        return false;
      }
      return this.trigger === "click";
    },
    // TODO 拦截器 禁止定制规则&不是RightClick事件进入
    isCustomAndRightClick() {
      if (this.trigger === "custom") {
        return false;
      }
      return this.trigger === "RightClick";
    },
    // 鼠标移入
    handleMouseEnter() {
      if (!this.isCustomAndHover()) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.currentVisible = true;
      }, 200);
    },
    // 鼠标移出
    handleMouseLeave() {
      if (!this.isCustomAndHover()) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.currentVisible = false;
      }, 150);
    },
    // 普通点击
    handleClick() {
      if (!this.isCustomAndClick()) return;
      this.currentVisible = !this.currentVisible;
    },
    // 右键点击
    handleRightClick() {
      if (!this.isCustomAndRightClick()) return;
      this.currentVisible = !this.currentVisible;
    },
    // 点击关闭集合
    handleOutSide(e) {
      this.handleClose();
      this.handleRightClose();
      if (this.currentVisible) this.$emit("on-clickoutside", e);
    },
    // 普通关闭事件
    handleClose() {
      if (!this.isCustomAndClick()) return;
      this.currentVisible = false;
    },
    // 右键点击关闭
    handleRightClose() {
      if (!this.isCustomAndRightClick()) return;
      this.currentVisible = false;
    },
    hasParent() {
      const parent = findComponentUpward(this, "CDropdown");
      if (parent) {
        return parent;
      } else {
        return false;
      }
    }
  },
  mounted() {
    // hover事件点击
    this.$on("on-hover-click", () => {
      const parent = this.hasParent();
      if (parent) {
        this.$nextTick(() => {
          if (this.trigger === "custom") return false;
          this.currentVisible = false;
        });
        parent.$emit("on-hover-click");
      } else {
        this.$nextTick(() => {
          if (this.trigger === "custom") return false;
          this.currentVisible = false;
        });
      }
    });
    // 普通点击事件
    this.$on("on-click", key => {
      const parent = this.hasParent();
      if (parent) parent.$emit("on-click", key);
    });
    // 判断是否有子节点
    this.$on("on-hasChild-click", () => {
      this.$nextTick(() => {
        if (this.trigger === "custom") return false;
        this.currentVisible = true;
        const parent = this.hasParent();
        if (parent) parent.$emit("on-hasChild-click");
      });
    });
  },
  components: {
    Drop
  }
};
</script>

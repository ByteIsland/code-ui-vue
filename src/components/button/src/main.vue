<template>
  <component
    :is="tagName"
    @click="handleClick"
    :disabled="disabled"
    :class="classes"
    v-bind="tagProps"
  >
    <i v-if="icon !== ''" :class="iconName"></i>
    <span v-if="$slots.default"> <slot></slot> </span>
  </component>
</template>

<script>
import { CheckProps } from "@/utils/assets.js";
import mixinLink from "@/mixins/link.js";
const prefixClass = "c-button";
export default {
  name: "CButton",
  mixins: [mixinLink],
  props: {
    // 模式
    type: {
      validator(value) {
        return CheckProps(value, [
          "default",
          "primary",
          "success",
          "error",
          "info",
          "warning"
        ]);
      },
      default: "default"
    },
    // Button类型
    ButtonType: {
      validator(value) {
        return CheckProps(value, ["button", "submit", "reset"]);
      },
      default: "button"
    },
    // 大小
    size: {
      validator(value) {
        return CheckProps(value, ["large", "small", "default"]);
      },
      default: "default"
    },
    // icon
    icon: {
      type: String,
      default: ""
    },
    disabled: Boolean, // 禁用
    round: Boolean, // 胶囊按钮
    circle: Boolean // 圆形按钮 用于icon
  },
  computed: {
    classes() {
      return [
        `${this.prefixClass}`,
        `${this.prefixClass}-${this.type}`,
        {
          [`${this.prefixClass}-${this.size}`]: this.size,
          "is-round": this.round,
          "is-disabled": this.disabled,
          "is-circle": this.circle
        }
      ];
    },
    /* icon name */
    iconName() {
      return `c-icon c-icon-${this.icon}`;
    },
    isTo() {
      return !!this.to;
    },
    /* 设置标签类型 */
    tagName() {
      return this.isTo ? "a" : "button";
    },
    tagProps() {
      if (this.isTo) {
        const { to, target } = this;
        return { href: to, target };
      } else {
        const { ButtonType } = this;
        return { type: ButtonType };
      }
    }
  },
  data() {
    return {
      msg: "Code Button",
      prefixClass
    };
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);

      const openWindow = event.ctrlKey || event.metaKey;

      this.handleCheckClick(event, openWindow);
    }
  }
};
</script>

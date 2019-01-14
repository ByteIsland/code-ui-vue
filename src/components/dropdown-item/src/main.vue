<template>
  <li :class="classes" @click="handleClick"><slot></slot></li>
</template>

<script>
import { findComponentUpward } from "@/utils/assets";
const prefixClass = "c-dropdown-item";
export default {
  name: "CDropdownItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}-disabled`]: this.disabled,
          [`${prefixClass}-divided`]: this.divided
        }
      ];
    }
  },
  methods: {
    handleClick() {
      const parent = findComponentUpward(this, "CDropdown");
      const hasChildren =
        this.$parent && this.$parent.$options.name === "CDropdown";

      if (this.disabled) {
        this.$nextTick(() => {
          parent.currentVisible = true;
        });
      } else if (hasChildren) {
        this.$parent.$emit("on-hasChild-click");
      } else {
        if (parent && parent.$options.name === "CDropdown") {
          parent.$emit("on-hover-click");
        }
      }
      parent.$emit("on-click", this.name);
    }
  }
};
</script>

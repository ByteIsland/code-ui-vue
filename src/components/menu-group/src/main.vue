<template>
  <li :class="[`${prefixClass}-item-group`]">
    <div :class="[`${prefixClass}-item-title`]" :style="titleStyle">{{ title }}</div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import MenuMixin from "@/mixins/menu-mixin.js";

const prefixClass = "c-menu-group";
export default {
  name: "CMenuGroup",
  mixins: [MenuMixin],
  props: {
    title: String
  },
  data() {
    return {
      prefixClass
    };
  },
  computed: {
    titleStyle() {
      return this.hasParentMenuSub && this.mode !== "horizontal"
        ? {
            paddingLeft: 43 + (this.parentMenuSubNum - 1) * 24 + "px"
          }
        : {};
    }
  }
};
</script>

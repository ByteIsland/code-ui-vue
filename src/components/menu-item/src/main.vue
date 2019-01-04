<template>
  <!-- exact => 精确点击, ctrl => 监听win按ctrl键, meta => macos command键 -->
  <a
    v-if="to"
    :href="linkUrl"
    :target="target"
    :class="classes"
    :style="ItemStyle"
    @click.exact="handleClickItem($event, false)"
    @click.ctrl="handleClickItem($event, true)"
    @click.meta="handleClickItem($event, true)"
  >
    <slot></slot>
  </a>
  <li v-else :class="classes" :style="ItemStyle" @click.stop="handleClickItem">
    <slot></slot>
  </li>
</template>

<script>
import mixinLink from "@/mixins/link.js";
import MenuMixin from "@/mixins/menu-mixin.js";
import broadcast from "@/mixins/broadcast.js"; // 广播mixin
import { findComponentUpward } from "@/utils/assets.js";
const prefixClass = "c-menu-item";
export default {
  name: "CMenuItem",
  mixins: [mixinLink, broadcast, MenuMixin],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false // 选中状态
    };
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}--active`]: this.active,
          [`${prefixClass}--selected`]: this.active,
          [`${prefixClass}--disabled`]: this.disabled
        }
      ];
    },
    ItemStyle() {
      return this.hasParentMenuSub && this.mode !== "horizontal"
        ? {
            paddingLeft: 43 + (this.parentMenuSubNum - 1) * 24 + "px"
          }
        : {};
    }
  },
  methods: {
    handleClickItem(event, newWindow = false) {
      if (this.disabled) false;

      if (newWindow || this.target === "_blank") {
        this.handleClick(event, newWindow);
        // 查询单个父节点
        let parentMenu = findComponentUpward(this, "CMenu");
        if (parentMenu) parentMenu.handleEmitSelectEvent(this.name);
      } else {
        let parent = findComponentUpward(this, "CMenuSub");
        // 向父组件传递当前选中标签的名字 => $on 监听
        if (parent) {
          this.dispatch("CMenuSub", "on-menu-item-select", this.name);
        } else {
          this.dispatch("CMenu", "on-menu-item-select", this.name);
        }
      }
      // 判断点击跳转
      this.handleCheckClick(event, newWindow);
    },
    ListenUpdateActive() {
      this.$on("on-update-active-name", name => {
        if (this.name === name) {
          this.active = true;
          this.dispatch("CMenuSub", "on-update-active-name", name); // 通知父组件SubMenu更新操作
        } else {
          this.active = false;
        }
      });
    }
  },
  mounted() {
    this.ListenUpdateActive();
  }
};
</script>

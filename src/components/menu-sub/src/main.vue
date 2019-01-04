<template>
  <li :class="classes">
    <div
      :class="[prefixClass + '-sub-title']"
      ref="reference"
      @click.stop="handleClick"
      :style="titleStyle"
    >
      <slot name="title"></slot>
      <Icon name="arrow-down" :class="[prefixClass + '-sub-title-icon']"></Icon>
    </div>
    <!-- 下拉菜单 -->
    <collapse-transition v-if="mode === 'vertical'">
      <ul :class="[prefixClass]" v-show="opened">
        <slot></slot>
      </ul>
    </collapse-transition>
  </li>
</template>

<script>
import Icon from "@/components/icon/src/main.vue";
import CollapseTransition from "@/components/base/collapse-transition/main.vue";
import MenuMixin from "@/mixins/menu-mixin.js";
import Broadcast from "@/mixins/broadcast.js";
import { findComponentsDownward, findComponentUpward } from "@/utils/assets.js";

const prefixClass = "c-menu";

export default {
  name: "CMenuSub",
  mixins: [MenuMixin, Broadcast],
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
      prefixClass: prefixClass,
      active: false, // 是否选中
      opened: false // 是否打开
    };
  },
  computed: {
    classes() {
      return [
        `${prefixClass}-menusub`,
        {
          [`${prefixClass}-item-active`]: this.active && !this.hasParentSubmenu,
          [`${prefixClass}-opened`]: this.opened,
          [`${prefixClass}-disabled`]: this.disabled,
          [`${prefixClass}-menusub-has-parent-menusub`]: this.hasParentSubmenu,
          [`${prefixClass}-child-item-active`]: this.active
        }
      ];
    },
    // 百叶窗模式
    accordion() {
      return this.menu.accordion;
    },
    titleStyle() {
      return this.hasParentMenuSub && this.mode !== "horizontal"
        ? {
            paddingLeft: 43 + (this.parentMenuSubNum - 1) * 24 + "px"
          }
        : {};
    }
  },
  components: {
    Icon,
    CollapseTransition
  },
  mounted() {
    this.$on("on-menu-item-select", name => {
      if (this.mode === "horizontal") this.opened = false;
      this.dispatch("CMenu", "on-menu-item-select", name);
      return true;
    });
    // 监听是否有需要更改的表头 => 只允许展示一个表头
    this.$on("on-update-active-name", status => {
      if (findComponentUpward(this, "CMenuSub"))
        this.dispatch("CMenuSub", "on-update-active-name", status);
      if (findComponentsDownward(this, "CMenuSub"))
        findComponentsDownward(this, "CMenuSub").forEach(item => {
          item.active = false;
        });
    });
  },
  methods: {
    handleClick() {
      if (this.disabled) return;
      if (this.mode === "horizontal") return;
      const opened = this.opened;
      // 判断是否打开了百叶窗模式
      if (this.accordion) {
        this.$parent.$children.forEach(item => {
          if (item.$options.name === this.$options.name) item.opened = false;
        });
      }
      this.opened = !opened; // 切换模式
      this.menu.updateOpenKeys(this.name);
    }
  },
  watch: {
    mode(val) {
      if (val === "horizontal") {
        // this.$refs.drop.update();
      }
    },
    opened(val) {
      if (this.mode === "vertical") return;
      if (val) {
        console.log(val);
      }
    }
  }
};
</script>

<template>
  <li :class="classes" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div
      :class="[prefixClass + '-title']"
      ref="reference"
      @click.stop="handleClick"
      :style="titleStyle"
    >
      <slot name="title"></slot>
      <Icon name="arrow-down" :class="[prefixClass + '-title-icon']"></Icon>
    </div>
    <!-- 下拉菜单 -->
    <collapse-transition v-if="mode === 'vertical'">
      <ul :class="[prefixClass]" v-show="opened">
        <slot></slot>
      </ul>
    </collapse-transition>
    <transition name="slide-up" v-else>
      <Drop v-show="opened" placement="bottom" ref="drop" :style="dropStyle">
        <ul :class="[prefixClass + '-drop-list']">
          <slot></slot>
        </ul>
      </Drop>
    </transition>
  </li>
</template>

<script>
import Icon from "@/components/icon/src/main.vue";
import CollapseTransition from "@/components/base/collapse-transition/main.vue";
import Drop from "@/components/base/select/dropdown.vue";
import MenuMixin from "@/mixins/menu-mixin.js";
import Broadcast from "@/mixins/broadcast.js";
import {
  findComponentsDownward,
  findComponentUpward,
  getStyle
} from "@/utils/assets.js";

const prefixClass = "c-menu-submenu";

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
      opened: false, // 是否打开
      dropWidth: parseFloat(getStyle(this.$el, "width"))
    };
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}-item-active`]: this.active && !this.hasParentSubmenu,
          [`${prefixClass}-opened`]: this.opened,
          [`${prefixClass}-disabled`]: this.disabled,
          [`${prefixClass}-submenu-has-parent-submenu`]: this.hasParentSubmenu,
          [`${prefixClass}-child-item-active`]: this.active
        }
      ];
    },
    dropStyle() {
      let style = {};
      if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
      return style;
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
    CollapseTransition,
    Drop
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
    },
    // TODO 鼠标划入
    handleMouseEnter() {
      if (this.disabled) return;
      if (this.mode === "vertical") return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.menu.updateOpenKeys(this.name);
        this.opened = true;
      }, 250);
    },
    // TODO 鼠标划出
    handleMouseLeave() {
      if (this.disabled) return;
      if (this.mode === "vertical") return;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.menu.updateOpenKeys(this.name);
        this.opened = false;
      }, 150);
    },
  },
  watch: {
    mode(val) {
      if (val === "horizontal") {
        this.$refs.drop.create();
      }
    },
    opened(val) {
      if (this.mode === "vertical") return;
      if (val) {
        // 更新下拉框样式
        this.dropWidth = parseFloat(getStyle(this.$el, "width"));
        this.$refs.drop.create();
      } else {
        this.$refs.drop.destroy();
      }
    }
  }
};
</script>

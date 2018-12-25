<template>
	<ul :class="classes" :style="styles">
		<slot></slot>
	</ul>
</template>

<script>
import broadcast from "@/mixins/broadcast.js"; // 广播mixin
import { CheckProps, findComponentsDownward } from "@/utils/assets.js";
const prefixClass = "c-menu";
export default {
  name: "CMenu",
  mixins: [broadcast],
  props: {
    // 对齐方式 默认垂直
    mode: {
      validate(value) {
        return CheckProps(value, ["horizontal", "vertical"]);
      },
      default: "vertical"
    },
    // 模式
    theme: {
      validate(value) {
        return CheckProps(value, ["light", "dark", "primary"]);
      },
      default: "light"
    },
    // 需要选中的MenuItem
    activeName: {
      type: [String, Number]
    },
    // 需要打开的subMenu
    openNames: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 手风琴模式
    accordion: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "240px"
    }
  },
  data() {
    return {
      currentActiveName: this.activeName,
      openedNames: [] // 选中
    };
  },
  computed: {
    classes() {
      let theme = this.theme;
      if (this.theme === "primary" && this.mode === "vertical") theme = "light";
      return [
        `${prefixClass}`,
        `${prefixClass}-${theme}`,
        {
          [`${prefixClass}-${this.mode}`]: this.mode
        }
      ];
    },
    styles() {
      return this.mode === "vertical" ? `width: ${this.width}` : "";
    }
  },
  methods: {
    // 更新选中光标位置
    updateActiveName() {
      if (this.currentActiveName === undefined) {
        this.currentActiveName = -1;
      }
      // 父组件委派事件到子组件
      this.broadcast("CMenuSub", "on-update-active-name", false);
      this.broadcast(
        "CMenuItem",
        "on-update-active-name",
        this.currentActiveName
      );
    },
    /* 更新SubMenu的打开状态 */
    updateOpened() {
      const items = findComponentsDownward(this, "CMenuSub");

      if (items.length) {
        items.foeEach(item => {
          if (this.openedNames.indexOf(item.name) > -1) {
            item.opened = true;
          } else {
            item.opened = false;
          }
        });
      }
    },
    /* 监听MenuItem点击状态 */
    ListenMenuIitemSelect() {
      this.$on("on-menu-item-select", name => {
        this.currentActiveName = name;
        this.$emit("on-select", name);
      });
    },
    handleEmitSelectEvent(name) {
      this.$emit("on-select", name);
    }
  },
  mounted() {
    this.updateActiveName();
    this.openedNames = [...this.openNames];
    this.updateOpened();
    this.ListenMenuIitemSelect();
  },
  watch: {
    openNames(names) {
      this.openedNames = names;
    },
    activeName(val) {
      this.currentActiveName = val;
    },
    currentActiveName() {
      this.updateActiveName();
    }
  }
};
</script>

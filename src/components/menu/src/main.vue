<template>
  <ul :class="classes" :style="styles">
    <slot></slot>
  </ul>
</template>

<script>
import broadcast from "@/mixins/broadcast.js"; // 广播mixin
import {
  CheckProps,
  findComponentsDownward,
  findComponentsUpward
} from "@/utils/assets.js";
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
    // 最小菜单
    collapsedMenu: {
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
      openedNames: [] // 选中的MenuSub组
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
          [`${prefixClass}-${this.mode}`]: this.mode,
          "collapsed-menu": this.collapsedMenu
        }
      ];
    },
    styles() {
      return this.mode === "vertical" ? `width: ${this.width}` : "";
    }
  },
  methods: {
    // 更新MenuSub所打开的组
    updateOpenKeys(name) {
      let names = [...this.openedNames];
      let index = names.indexOf(name);

      // 手风琴模式则全部关闭
      if (this.accordion) {
        findComponentsDownward(this, "CMenuSub").forEach(item => {
          item.opened = false;
        });
      }
      // 尚未开启手风琴，只需要打开指定栏目即可
      if (index >= 0) {
        let currentMenuSub = null;
        // 查询当前Menu下指定的CMenuSub对应name值开启
        findComponentsDownward(this, "CMenuSub").forEach(item => {
          if (item.name === name) {
            currentMenuSub = item;
            item.opened = false;
          }
        });
        findComponentsUpward(currentMenuSub, "CMenuSub").forEach(item => {
          item.opened = true;
        });
        findComponentsDownward(currentMenuSub, "CMenuSub").forEach(item => {
          item.opened = false;
        });
      } else {
        if (this.accordion) {
          let currentMenuSub = null;
          findComponentsDownward(this, "CMenuSub").forEach(item => {
            if (item.name === name) {
              currentMenuSub = item;
              item.opened = true;
            }
          });
          findComponentsUpward(currentMenuSub, "CMenuSub").forEach(item => {
            item.opened = true;
          });
        } else {
          findComponentsDownward(this, "CMenuSub").forEach(item => {
            if (item.name === name) item.opened = true;
          });
        }
      }
      let openedNames = findComponentsDownward(this, "CMenuSub")
        .filter(item => item.opened)
        .map(item => item.name);
      this.openedNames = [...openedNames];
      this.$emit("on-open-change", openedNames);
    },
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
    /* 更新MenuSub的打开状态 */
    updateOpened() {
      const items = findComponentsDownward(this, "CMenuSub");
      if (items.length) {
        items.forEach(item => {
          item.opened = this.openedNames.indexOf(item.name) > -1;
        });
      }
    },
    /* 监听MenuItem点击状态 */
    ListenMenuItemSelect() {
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
    this.ListenMenuItemSelect();
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

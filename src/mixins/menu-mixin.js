import { findComponentDownward, findComponentUpward } from "../utils/assets.js";

export default {
  data() {
    return {
      menu: findComponentUpward(this, "CMenu")
    };
  },
  computed: {
    /* 查询是否存在SubMenu */
    hasParentSubmenu() {
      return !!findComponentUpward(this, "CSubMenu");
    },
    // 计算SubMenu的个数
    parentSubMenuNum() {
      return findComponentDownward(this, "CSubMenu").length;
    },
    mode() {
      return this.menu.mode;
    }
  }
};

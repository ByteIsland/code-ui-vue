import { findComponentsUpward, findComponentUpward } from "../utils/assets.js";

export default {
  data() {
    return {
      menu: findComponentUpward(this, "CMenu")
    };
  },
  computed: {
    /* 查询是否存在MenuSub */
    hasParentMenuSub() {
      return !!findComponentUpward(this, "CMenuSub");
    },
    /* 计算MenuSub的个数 */
    parentMenuSubNum() {
      return findComponentsUpward(this, "CMenuSub").length;
    },
    mode() {
      return this.menu.mode;
    }
  }
};

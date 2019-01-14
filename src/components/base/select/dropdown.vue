<template>
  <div :class="prefixClass" :style="styles"><slot></slot></div>
</template>

<script>
import Vue from "vue";
const isServer = Vue.prototype.$isServer;
import { getStyle } from "@/utils/assets";
import { transferIncrease, transferIndex } from "@/utils/transfer-queue";
const Popper = isServer
  ? function() {}
  : require("popper.js/dist/umd/popper.js");
const prefixClass = "c-select-dropdown";

export default {
  name: "Drop",
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    transfer: {
      type: Boolean
    }
  },
  data() {
    return {
      prefixClass,
      popper: null,
      width: "",
      popperStatus: false,
      tIndex: this.handleGetIndex()
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.width) style.minWidth = `${this.width}px`;

      if (this.transfer) style["z-index"] = 1000 + this.zIndex;

      return style;
    }
  },
  methods: {
    /* 初始化 */
    create() {
      if (isServer) return;
      if (this.popper) {
        this.update();
      } else {
        // 避免dom元素无刷新
        this.$nextTick(() => {
          // TODO 必须实例化, 且绑定父元素
          this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
            placement: this.placement, // 出现位置
            modifiers: {
              computeStyle: {
                gpuAcceleration: false // 是否开启CSS 3D 渲染
              },
              preventOverflow: {
                boundariesElement: "window" // 边界修饰符
              }
            },
            onCreate: () => {
              this.resetTransformOrigin();
              this.$nextTick(this.popper.update());
            },
            onUpdate: () => {
              this.resetTransformOrigin();
            }
          });
        });
      }
    },
    /* 更新 */
    update() {
      this.$nextTick(() => {
        this.popper.update();
        this.popperStatus = true;
      });
    },
    /* 销毁 */
    destroy() {
      if (this.popper) {
        setTimeout(() => {
          if (this.popper && !this.popperStatus) {
            this.popper.destroy();
            this.popper = null;
          }
          this.popperStatus = false;
        }, 300);
      }
    },
    // 重置滑出动画
    resetTransformOrigin() {
      // TODO 必须判断是否已实例化控件
      if (!this.popper) return;
      let x_placement = this.popper.popper.getAttribute("x-placement");
      let placementStart = x_placement.split("-")[0];
      let placementEnd = x_placement.split("-")[1];
      let leftOfRight = x_placement === "left" || x_placement === "right";
      if (!leftOfRight) {
        this.popper.popper.style.transformOrigin =
          placementStart === "bottom" ||
          (placementStart !== "top" && placementEnd === "start")
            ? "center top"
            : "center bottom";
      }
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    }
  },
  created() {
    this.$on("on-update-popper", this.create);
    this.$on("on-destroy-popper", this.destroy);
  },
  destroyed() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
};
</script>

<template>
  <div :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
import {
  CheckProps,
  findBrothersComponents,
  findComponentDownward
} from "@/utils/assets.js";
const prefixClass = "c-row";
export default {
  name: "CRow",
  props: {
    gutter: [Number, String], // 分栏
    flex: Boolean, // 是否开启flex布局
    justify: {
      // 水平居中
      validator(value) {
        return CheckProps(value, [
          "start",
          "center",
          "end",
          "space-around",
          "space-between"
        ]);
      },
      default: "start"
    },
    align: {
      // 垂直居中
      validator(value) {
        return CheckProps(value, ["top", "middle", "bottom"]);
      },
      default: "top"
    }
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}-flex`]: !!this.flex,
          [`${prefixClass}-flex-${this.justify}`]: !!this.justify && !!this.flex,
          [`${prefixClass}-flex-${this.align}`]: !!this.align && !!this.flex
        }
      ];
    },
    styles() {
      let gut = {};
      if (this.gutter) {
        gut.marginLeft = `-${this.gutter / 2}px`;
        gut.marginRight = gut.marginLeft;
      }
      return gut;
    }
  },
  methods: {
    updateGutter(val) {
      const Col = findComponentDownward(this, "CCol");
      // 查询当前组价下的CCol兄弟
      const Cols = findBrothersComponents(Col, "CCol", false);
      if (Cols.length) {
        Cols.forEach(child => {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    }
  },
  watch: {
    gutter(val) {
      this.updateGutter(val);
    }
  }
};
</script>

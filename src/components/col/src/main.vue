<template>
  <div :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
import { findComponentUpward } from "@/utils/assets.js";
const prefixClass = "c-col";
export default {
  name: "CCol",
  props: {
    span: [Number, String], // 栅格占据的列数
    order: [Number, String], // 排序
    offset: [Number, String], // 栅格左右偏移
    pull: [Number, String], // 向Right偏移格数
    push: [Number, String], // 向Left偏移格数
    xs: [Number, Object], // <768px
    sm: [Number, Object], // ≥768pxw
    md: [Number, Object], // ≥992px
    lg: [Number, Object] // ≥1200px
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    classes() {
      let classList = [
        `${prefixClass}`,
        {
          [`${prefixClass}-span-${this.span}`]: this.span,
          [`${prefixClass}-order-${this.order}`]: this.order,
          [`${prefixClass}-offset-${this.offset}`]: this.offset,
          [`${prefixClass}-push-${this.push}`]: this.push,
          [`${prefixClass}-pull-${this.pull}`]: this.pull
        }
      ];

      // Todo 响应式处理
      ["xs", "sm", "md", "lg"].forEach(size => {
        if (typeof this[size] === "number") {
          classList.push(`${prefixClass}-${size}-${this[size]}`);
        }
        // Todo 如果传入是{"span": 16} 这类单独处理
        else if (this[size] === "object") {
          let props = this[size];
          Object.key(props).forEach(prop => {
            let propList =
              prop !== "span"
                ? `${prefixClass}-${size}-${prop}-${props[prop]}`
                : `${prefixClass}-span-${prop}-${props[prop]}`;
            classList.push(propList);
          });
        }
      });

      return classList;
    },
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = style.paddingLeft;
      }
      return style;
    }
  },
  methods: {
    updateGutter() {
      const CRow = findComponentUpward(this, "CRow");
      if (CRow) {
        CRow.updateGutter(CRow.gutter);
      }
    }
  },
  mounted() {
    this.updateGutter();
  },
  beforeDestroy() {
    // 组件移除要重新计算
    this.updateGutter();
  }
};
</script>

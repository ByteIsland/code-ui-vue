export default {
  name: "CCol",
  props: {
    span: {
      type: Number,
      default: 24
    }, // 栅格占据的列数
    offset: Number, // 栅格左侧的间隔格数
    pull: Number, // 栅格向右移动格数
    push: Number, // 栅格向左移动格数
    xs: Number, // <768px
    sm: Number, // ≥768pxw
    md: Number, // ≥992px
    lg: Number, // ≥1200px
    xl: Number // ≥1920px
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      // 递归查询
      while (parent && parent.$options._componentTag !== "Row") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let stlye = {};

    if (this.gutter) {
      stlye.paddingLeft = `${this.gutter}px`;
      stlye.paddingRight = stlye.paddingLeft;
    }
    // 偏移量计算
    ["span", "offset", "pull", "push"].forEach(props => {
      if (this[props] || this[props] === 0) {
        classList.push(
          props !== "span"
            ? `c-col--${props}-${this[props]}`
            : `c-col-${this[props]}`
        );
      }
    });
    // 响应式布局
    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`c-col-${size}-${this[size]}`);
      }
    });

    return h(
      "div",
      {
        class: ["c-col", classList],
        stlye
      },
      this.$slots.default
    );
  }
};

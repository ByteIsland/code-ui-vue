<template>
	<div>
		<div ref="point" :class="[{[`${prefixClasses}`]: affix}]" :style="styles">
			<slot></slot>
		</div>
		<div v-show="slot" :style="slotStyle"></div>		
	</div>
</template>

<script>
import { ListenOn, ListenOff } from "../../../lib/utils/dom.js";
const prefixClasses = "c-affix";
export default {
  name: "CAffix",
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: Number
  },
  data() {
    return {
      prefixClasses,
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {}
    };
  },
  computed: {
    offsetType() {
      let type = "top";

      if (this.offsetBottom >= 0) {
        type = "bottom";
      }
      console.log(this.offsetTop, this.offsetBottom);
      return type;
    }
  },
  methods: {
    handleScroll() {
      const affix = this.affix;
      const scrollTop = this.getScroll(window, true);
      const elOffset = this.getOffset(this.$el);
      const windowHeight = window.innerHeight; // 窗口高度
      const elHeight = this.$el.getElementsByTagName("div")[0].offsetHeight; // 获取元素标签高度
      console.log(elOffset.top);
      // 定位到顶部
      if (
        elOffset.top - this.offsetTop < scrollTop &&
        this.offsetType === "top" &&
        !affix
      ) {
        this.affix = true;
        this.slotStyle = {
          width: this.$refs.point.clientWidth + "px",
          height: this.$refs.point.clientHeight + "px"
        };
        this.slot = true;
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
      } else if (
        elOffset.top - this.offsetTop > scrollTop &&
        this.offsetType === "top" &&
        affix
      ) {
        this.slot = false;
        this.slotStyle = {};
        this.affix = false;
        this.styles = null;
      }

      // 定位到底部
      if (
        elOffset.top + this.offsetBottom + elHeight >
          scrollTop + windowHeight &&
        this.offsetType === "bottom" &&
        !affix
      ) {
        this.affix = true;
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
      } else if (
        elOffset.top + this.offsetBottom + elHeight <
          scrollTop + windowHeight &&
        this.offsetType === "bottom" &&
        affix
      ) {
        this.affix = false;
        this.styles = null;
      }
    },
    // 获取滑动位置
    getScroll(target, top) {
      const prop = top ? "pageYOffset" : "pageXOffset"; // 判断滑动位置
      const method = top ? "scrollTop" : "scrollLeft"; // 判断滑动方向
      let ret = target[prop];

      if (typeof ret !== "number") {
        ret = window.document.documentElement[method];
      }

      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect(); // 获取元素大小以及位于窗口的位置
      const scrollTop = this.getScroll(window, true);
      const scrollLeft = this.getScroll(window);

      const docBody = window.document.body; // 获取body元素
      const clientTop = docBody.clientTop || 0;
      const clientLeft = docBody.clientLeft || 0;

      return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
      };
    }
  },
  mounted() {
    ListenOn(window, "scroll", this.handleScroll);
    ListenOn(window, "resize", this.handleScroll);
  },
  beforeDestroy() {
    ListenOff(window, "scroll", this.handleScroll);
    ListenOff(window, "resize", this.handleScroll);
  }
};
</script>

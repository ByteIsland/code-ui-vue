import { CheckProps } from "@/utils/assets.js";

// 公用跳转LINK
export default {
  props: {
    // 跳转地址, 支持传入vue-router对象
    to: {
      type: [Object, String]
    },
    // 在当前页跳转
    replace: {
      type: Boolean,
      default: false
    },
    // 跳转模式
    target: {
      type: String,
      validator(value) {
        return CheckProps(value, ["_blank", "_self", "_parent", "_top"]);
      },
      default: "_self"
    }
  },
  computed: {
    linkUrl() {
      return typeof this.to === "string" ? this.to : null;
    }
  },
  methods: {
    handleClick(newWindow = false) {
      if (newWindow) {
        window.open(this.to);
      } else {
        const isRoute = this.$router;
        if (isRoute) {
          this.replace
            ? this.$router.replace(this.to)
            : this.$router.push(this.to);
        } else {
          window.location.href = this.to;
        }
      }
    },
    handleCheckClick(evnet, newWindow = false) {
      if (this.to) {
        if (this.target === "_blank") {
          return false;
        } else {
          event.preventDefault();
          this.handleClick(newWindow);
        }
      }
    }
  }
};

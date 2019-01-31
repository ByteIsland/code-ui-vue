<template>
  <div :class="wrapClasses" :style="wrapStyles"><Notice></Notice></div>
</template>

<script>
import Notice from "./notice.vue";
import { transferIndex, transferIncrease } from "@/utils/transfer-queue";
const prefixClass = "c-notification";
let seed = 0;
const now = Date().now();

// 生成uuid
function getUuid() {
  return `${prefixClass}_${now}_${seed++}`;
}

export default {
  name: "main",
  props: {
    prefixClass: {
      type: String,
      default: prefixClass
    },
    styles: {
      type: Object,
      default: () => {
        return {
          top: "65px",
          left: "50%"
        };
      }
    },
    content: {
      type: String // 弹出框内容
    },
    className: {
      type: String
    }
  },
  data() {
    return {
      notices: [], // 存放多个弹出框
      tIndex: this.handleGetIndex()
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${this.prefixClass}`,
        {
          [`${this.className}`]: !!this.className
        }
      ];
    },
    wrapStyles() {
      let styles = Object.assign({}, this.styles);
      styles["z-index"] = 1010 + this.tIndex;
      return styles;
    }
  },
  methods: {
    // 往展示列表中插入一个Message & Notice
    add(notice) {

    },
    // 移除一个指定的Message & Notice
    close(name) {
      const notices = this.notices;
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
    // 清空容器
    closeAll() {
      this.notices = [];
    },
    handleGetIndex() {
      transferIncrease();
      return transferIndex;
    }
  },
  components: {
    Notice
  }
};
</script>

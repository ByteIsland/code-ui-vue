<template>
  <transition name="c-notice-fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      class="c-notification"
      :class="[verticalPosition]"
      :style="[verticalStyle]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <i class="c-notification--icon" :class="verticalType" v-if="type"></i>
      <div class="c-notification--body">
        <h1 class="c-notification--title" v-text="title"></h1>
        <div class="c-notification--content">
          <slot>
            <p v-if="!dangerouslyUseHTMLString" v-text="content"></p>
            <p v-else v-html="content"></p>
          </slot>
        </div>
        <i 
          class="c-notification--closeBtn"
          :class="{'code-icon-close': btnText === ''}"
          v-if="showBtn"
          v-text="btnText"
          @click="handleClose"
        ></i>
      </div>
    </div>
  </transition>
</template>

<script>
const TYPE_MAP = {
  success: "code-icon-success",
  error: "code-icon-error",
  warning: "code-icon-warning",
  info: "code-icon-info"
};
export default {
  name: "CNotification",
  data() {
    return {
      type: "", // 当前模式
      title: "这是一个标题",
      content: "",
      showBtn: true, // 是否显示关闭按钮
      btnText: "", // 是否使用按钮文本
      verticalOffset: 0,
      autoClose: 4500, // 关闭时间
      height: 0,
      visible: false, // 开关
      position: "top-right", // 默认位置
      dangerouslyUseHTMLString: false // 开启HTML格式传入
    };
  },
  computed: {
    verticalType() {
      return TYPE_MAP[this.type] ? TYPE_MAP[this.type] : "";
    },
    verticalPosition() {
      return this.position.indexOf("right") > -1 ? "right" : "left";
    },
    verticalProperty() {
      return /^top-/.test(this.position) ? "top" : "bottom";
    },
    verticalStyle() {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`
      };
    }
  },
  mounted() {
    this.createTimer();
  },
  methods: {
    handleClose(e) {
      e.preventDefault();
      this.$emit("close");
    },
    createTimer() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false;
        }, this.autoClose);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    afterEnter() {
      this.height = this.$el.offsetHeight;
    },
    afterLeave() {
      this.$emit("closed");
    }
  },
  beforeDestory() {
    this.clearTimer();
  }
};
</script>

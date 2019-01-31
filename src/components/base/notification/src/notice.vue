<template>
  <transition name="transitionName" @enter="handleEnter" @leave="handleLeave">
    <div :class="classes" :style="styles">
      <template v-if="type === 'notice'"> </template>
      <template v-if="type === 'message'">
        <div :class="[`${baseClass}-content`]" ref="content">
          <div :class="[`${baseClass}-content-text`]" v-html="content"></div>
          <a :class="[`${baseClass}-close`]" @click="close" v-if="closable">
            <c-icon name="close" />
          </a>
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
import CIcon from "@/components/icon";
export default {
  name: "notice",
  props: {
    prefixCls: {
      type: String,
      default: ""
    },
    type: {
      type: String
    },
    // 消失时间
    duration: {
      type: Number,
      default: 1.5
    },
    className: {
      type: String
    },
    transitionName: {
      type: String
    },
    closable: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function
    }
  },
  data() {
    return {
      withDesc: false
    };
  },
  computed: {
    baseClass() {
      return `${this.prefixCls}-notice`;
    },
    classes() {
      return [
        this.baseClass,
        {
          [`${this.className}`]: !!this.className,
          [`${this.baseClass}-closable`]: this.closable,
          [`${this.baseClass}-with-desc`]: this.withDesc
        }
      ];
    },
    styles() {
      return;
    }
  },
  methods: {
    cleanCloseTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    close() {
      this.cleanCloseTimer();
      this.onClose();
      this.$parent.close(this.name); // 通知父组件关闭当前组件
    },
    handleEnter() {},
    handleLeave() {}
  },
  mounted() {
    this.cleanCloseTimer();
  },
  beforeDestroy() {
    this.cleanCloseTimer();
  },
  components: [
      CIcon
  ]
};
</script>

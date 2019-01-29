<template>
  <transition name="fade">
    <div :class="wrapClasses" v-show="visible">
      <div :class="iconClasses" v-if="showIcon">
        <slot name="icon"><c-icon :name="typeIcon"/></slot>
      </div>
      <div class="c-alert-content">
        <span :class="titleClasses"><slot></slot></span>
        <p :class="messageClasses"><slot name="desc"></slot></p>
      </div>
      <template>
        <c-icon
          name="close"
          :class="closeClasses"
          v-if="closable && closeText === ''"
          @click="close"
        />
        <i :class="closeClasses" v-else @click="close">{{ closeText }}</i>
      </template>
    </div>
  </transition>
</template>

<script>
import CIcon from "../../icon";
const TYPE_CLASS_MAP = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info"
};
const prefixClass = "c-alert";
export default {
  name: "CAlert",
  props: {
    type: {
      type: String,
      default: "info"
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String,
      default: ""
    },
    center: Boolean
  },
  data() {
    return {
      prefixClass,
      visible: true,
      hasDesc: false
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixClass}`,
        `${prefixClass}-${this.type}`,
        {
          [`${prefixClass}-with-center`]: this.center,
          [`${prefixClass}-with-desc`]: this.hasDesc,
          [`${prefixClass}-with-icon`]: this.showIcon
        }
      ];
    },
    titleClasses() {
      return [`${prefixClass}-title`];
    },
    messageClasses() {
      return `${prefixClass}-msg`;
    },
    iconClasses() {
      return `${prefixClass}-icon`;
    },
    closeClasses() {
      return [
        `${prefixClass}-closeBtn`,
        {
          "is-custom": this.closeText !== ""
        }
      ];
    },
    typeIcon() {
      return TYPE_CLASS_MAP[this.type];
    }
  },
  methods: {
    close(e) {
      this.visible = false;
      this.$emit("on-close", e);
    }
  },
  mounted() {
    this.hasDesc = this.$slots.desc !== undefined;
  },
  components: {
    CIcon
  }
};
</script>

<style scoped></style>

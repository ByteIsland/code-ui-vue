<template>
  <transition name="c-alert-fade">
    <div
      class="c-alert"
      :class="[typeClass, center ? 'is-center' : '']"
      v-show="visible"
    >
      <i
        class="c-alert--icon c-icon"
        :class="[typeIcon, isBigIcon]"
        v-if="showIcon"
      ></i>
      <div class="c-alert--content">
        <span
          class="c-alert--title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <slot>
          <p class="c-alert-msg" v-if="msg">{{ msg }}</p>
        </slot>
        <i
          class="c-alert-closebtn"
          :class="{
            'is-customed': closeText !== '',
            'code-icon-close': closeText === ''
          }"
          v-if="closable"
          @click="close()"
          >{{ closeText }}</i
        >
      </div>
    </div>
  </transition>
</template>

<script>
const TYPE_CLASS_MAP = {
  success: "c-icon-success",
  error: "c-icon-error",
  warning: "c-icon-warning"
};
export default {
  name: "CAlert",
  props: {
    type: {
      type: String,
      default: "info"
    },
    title: {
      type: String,
      default: ""
    },
    msg: {
      type: String,
      default: ""
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    center: Boolean
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    typeIcon() {
      return TYPE_CLASS_MAP[this.type] || "code-icon-info";
    },
    typeClass() {
      return `c-alert--${this.type}`;
    },
    isBoldTitle() {
      return this.msg || this.$slots.default ? "is-bold" : "";
    },
    isBigIcon() {
      return this.msg || this.$slots.default ? "is-big" : "";
    }
  },
  methods: {
    close() {
      this.visible = false;
      // this.$emit("close");
    }
  }
};
</script>

<style scoped></style>

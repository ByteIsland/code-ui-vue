<template>
  <div :class="classes">
    <div :class="headerClasses" v-if="showHead">
      <slot name="title">
        <p v-if="title">
          <c-icon v-if="icon" :name="icon"></c-icon>
          <span>{{ title }}</span>
        </p>
      </slot>
    </div>
    <div :class="extraClasses" v-if="showExtra">
      <slot name="extra"></slot>
    </div>
    <div :class="bodyClasses"><slot></slot></div>
  </div>
</template>

<script>
import CIcon from "@/components/icon/src/main.vue";
const prefixClass = "c-card";
export default {
  name: "CCard",
  props: {
    title: {
      type: String // 标题
    },
    icon: {
      type: String // 图标
    },
    shadow: Boolean, // 开启阴影
    // 开启边框
    bordered: {
      type: Boolean,
      default: true
    },
    // 禁用hover
    disHover: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showHead: true,
      showExtra: true
    };
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          [`${prefixClass}-shadow`]: this.shadow,
          [`${prefixClass}-dis-hover`]: this.disHover || this.shadow,
          [`${prefixClass}-bordered`]: !!this.bordered && !this.shadow
        }
      ];
    },
    headerClasses() {
      return `${prefixClass}-head`;
    },
    extraClasses () {
      return `${prefixClass}-extra`
    },
    bodyClasses() {
      return `${prefixClass}-body`;
    }
  },
  mounted() {
    this.showHead = this.title || this.$slots.title !== undefined;
    this.showExtra = this.$slots.extra !== undefined;
  },
  components: {
    CIcon
  }
};
</script>
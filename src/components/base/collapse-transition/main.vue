<template>
  <transition
    name="collapse-transition"
    @before-enter="beforeEnter"
    @enter="Enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="Leave"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
// 折叠菜单动画 一般用于Menu中
export default {
  name: "CollapseTransition",
  data() {
    return {};
  },
  methods: {
    /* 进入 */
    beforeEnter(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    Enter(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      el.style.overflow = "hidden";
    },
    afterEnter(el) {
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    },
    /* 移出 */
    beforeLeave(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    Leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
    afterLeave(el) {
      el.style.height = "";
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
      el.style.overflow = el.dataset.oldOverflow;
    }
  }
};
</script>

<style lang="scss">
.collapse-transition-enter-active,
.collapse-transition-leave-active {
  transition: height 0.3s ease-in-out;
}
</style>

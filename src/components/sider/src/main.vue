<template>
  <div class="c-layout-sider"><slot></slot></div>
</template>

<script>
export default {
  name: "CSider",
  props: {
    // 隐藏侧边栏
    hideTrigger: {
      type: Boolean,
      default: false
    },
    // 开启侧边栏开关
    collapsible: {
      type: Boolean,
      default: false
    },
    // 定义侧边栏关闭长度
    collapsedWidth: {
      type: [Number, String],
      default: 64
    }
  }
};
</script>

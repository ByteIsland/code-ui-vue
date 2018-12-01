<template>
  <div>
    <c-button @click="openClick" size="small">测速按钮</c-button>
  </div>
</template>

<script>
import CodeUI from "../../package/index.js";
export default {
  methods: {
    openClick() {
      console.log(CodeUI);
      console.log("点击");
    }
  }
};
</script>

<template>
  <li :class="[`${prefixClass}-item-group`]">
    <div :class="[`${prefixClass}-item-title`]">{{ title }}</div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
const prefixClass = "c-menu-group";
export default {
  name: "CMenuGroup",
  props: {
    title: String
  },
  data() {
    return {
      prefixClass
    };
  },
  computed: {}
};
</script>

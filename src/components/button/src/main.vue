<template>
    <button
      @click="handleClick"
      :disabled="disabled"
      :class="[
        'c-button',
        'c-button--' + type,
        {'is_round': round, 'is_disabled': disabled, 'is_circle': circle},
        buttonSize
      ]"
    >
      <i v-if="icon !== ''" :class="icon"></i>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    type: {
      type: String,
      default: "deafult"
    },
    size: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    buttonSize() {
      return this.size ? "c-button--" + this.size : "";
    }
  },
  data() {
    return {
      msg: "Code Button"
    };
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

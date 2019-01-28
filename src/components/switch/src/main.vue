<template>
  <div :class="wrapClasses" @click.stop="handleToggle">
    <input type="hidden" :name="name" :value="currentValue" />
    <div :class="innerClasses">
      <slot name="open" v-if="trueValue === currentValue"></slot>
      <slot name="close" v-if="falseValue === currentValue"></slot>
    </div>
  </div>
</template>

<script>
const prefixClass = "c-switch";
export default {
  name: "CSwitch",
  props: {
    value: {
      type: [Number, String, Boolean],
      default: false
    },
    trueValue: {
      type: [Number, String, Boolean],
      default: true
    },
    falseValue: {
      type: [Number, String, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    name: String
  },
  data() {
    return {
      prefixClass: prefixClass,
      currentValue: this.value
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${this.prefixClass}-wrapper`,
        {
          [`${this.prefixClass}-checked`]: this.currentValue === this.trueValue,
          [`${this.prefixClass}-${this.size}`]: !!this.size,
          [`${this.prefixClass}-disabled`]: this.disabled
        }
      ];
    },
    innerClasses() {
      return [`${this.prefixClass}-inner`];
    }
  },
  methods: {
    handleToggle() {
      if (this.disabled) return;
      const checked =
        this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
      this.currentValue = checked;
      this.$emit("on-change", checked);
      this.$emit("input", checked); // 让外部v-model也能被更改
    }
  },
  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw "Value 值必须是 TrueValue 或 FalseValue 其中一个";
      }
      this.currentValue = val;
    }
  }
};
</script>

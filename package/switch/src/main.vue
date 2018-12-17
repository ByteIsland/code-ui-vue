<template>
	<div
		:class="wrapClasses"
		@click.stop="handleToggle"
	>
		<input type="hidden" :name="name" :value="currentValue">
		<div :class="ineerClasses">
			<slot name="trueValue" v-if="trueValue === currentValue"></slot>
			<slot name="falseValue" v-if="falseValue === currentValue "></slot>
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
      default: "defalut"
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
    ineerClasses() {
      return [`${this.prefixClass}-inner`, {}];
    }
  },
  methods: {
    handleToggle() {
      if (this.disabled) return;
      const checked =
        this.currentValue === this.trueValue ? this.falseValue : this.trueValue;

      this.currentValue = checked;
      this.$emit("on-change", checked);
    }
  },
  watch: {
    value(val) {
      if (val !== this.trueValue && val !== this.falseValue) {
        throw "Value should be TrueValue or FalseValue";
      }
      this.currentValue = val;
    }
  }
};
</script>

<template>
	<div :class="wrapClasses">
		<template v-if="type !== 'textarea'">
      <!-- disabled -->
			<i 
				class="c-input-icon c-input-icon--clear code-icon-error"
				:class="[`c-input-icon-${this.size}`]"
				v-if="clearable && currentValue"
				@click="handleClear"
			></i>
      <!-- 左Icon -->
      <span class="c-input--with-prefix" v-if="showPrefix" >
        <slot name="prefix">
          <i class="c-icon" :class="prefix"></i>
        </slot>
      </span>
			<input
				:class="inputClasses"
				ref="input"
				:type="type"
				:value="currentValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:name="name"
				:maxlength="maxlength"
				@input="handleInput"
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
			/>
      <!-- 右Icon -->
      <span class="c-input--with-suffix" v-if="showSuffix" >
        <slot name="suffix">
          <i class="c-icon" :class="suffix"></i>
        </slot>
      </span>
      <!-- search -->
      <div 
        :class="[`${prefixCls}--gruop-append`, `${prefixCls}-search`]"
        v-if="search && enterButton"
        @click="handleSearch"
      >
        <i class="c-icon code-icon-search" v-if="enterButton"></i>
      </div>
		</template>
	</div>
</template>

<script>
const prefixCls = "c-input";
export default {
  name: "CInput",
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [Number, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter something..."
    },
    disabled: {
      type: Boolean,
      default: false // 禁用
    },
    prefix: {
      type: String,
      default: "" // 左侧Icon图标
    },
    suffix: {
      type: String,
      default: "" // 右侧Icon
    },
    maxlength: Number, // 最大输入行数
    clearable: Boolean, // 开启清空
    search: Boolean, // 开启搜索
    enterButton: [Boolean, String] // 开启搜索按钮
  },
  data() {
    return {
      prefixCls: prefixCls,
      currentValue: this.value,
      showSuffix: false,
      showPrefix: false
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}--warpper`,
        {
          [`${prefixCls}-group`]: this.search && this.enterButton
        }
      ];
    },
    inputClasses() {
      return [
        `${prefixCls}--defalut`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size, // 判断非空
          [`${prefixCls}--disabled`]: this.disabled,
          [`${prefixCls}--suffix`]: this.showSuffix, // 右侧图标
          [`${prefixCls}--prefix`]: this.showPrefix // 左侧图标
        }
      ];
    }
  },
  methods: {
    // Input框内容变更
    handleInput(event) {
      let value = event.target.value;
      this.$emit("input", value);
      this.setCurrentValue(value);
      this.$emit("on-change", event);
    },
    // Input框输入更变
    handleChange(event) {
      this.$emit("on-input-change", event);
    },
    // 清空输入框的内容
    handleClear(event) {
      this.$emit("input", "");
      this.setCurrentValue("");
      this.$emit("on-change", event);
    },
    handleFocus(event) {
      this.$emit("on-focus", event);
    },
    handleBlur(event) {
      this.$emit("on-blur", event);
    },
    handleSearch() {},
    // 设置值
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted() {
    this.showSuffix = this.suffix !== "" || this.$slots.suffix !== undefined;
    this.showPrefix = this.prefix !== "" || this.$slots.prefix !== undefined;
  }
};
</script>

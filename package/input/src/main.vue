<template>
	<div :class="wrapClasses">
		<template v-if="type !== 'textarea'">
      <!-- clear -->
			<i 
				:class="[
          `${prefixCls}-icon`,
          `${prefixCls}-icon-${this.size}`,
          `${prefixCls}-icon--clear `,
          'code-icon-error'
        ]"
				v-if="clearable && currentValue"
				@click="handleClear"
			></i>
      <!-- search -->
      <i 
        :class="[
          `${prefixCls}-icon`, 
          `${prefixCls}-ios-search`,
          'code-icon-search'
        ]"
        v-else-if="search && enterButton === false"
        @click="handleSearch"
      ></i>
      <!-- 左Icon -->
      <span :class="[`${prefixCls}--with-prefix`]" v-else-if="showPrefix" >
        <slot name="prefix">
          <i class="c-icon" :class="prefix"></i>
        </slot>
      </span>
      <!-- 左边标签 -->
      <div 
        :class="[`${prefixCls}--group-prepend`]"
        v-if="prepend"
      >
        <slot name="prepend"></slot>
      </div>
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
      <span :class="[`${prefixCls}--with-suffix`]" v-if="showSuffix" >
        <slot name="suffix">
          <i class="c-icon" :class="suffix"></i>
        </slot>
      </span>
      <!-- 右边标签 -->
      <div :class="[`${prefixCls}--group-append`]" v-if="append" >
        <slot name="append"></slot>
      </div>
      <!-- search按钮 -->
      <div 
        :class="[`${prefixCls}--group-append`, `${prefixCls}-search`]"
        v-if="search && enterButton"
        @click="handleSearch"
      >
        <i class="c-icon code-icon-search" v-if="enterButton === true"></i>
        <template v-else>{{ enterButton }}</template>
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
    size: String,
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
      prepend: true,
      append: true,
      showSuffix: false,
      showPrefix: false
    };
  },
  computed: {
    wrapClasses() {
      console.log((this.prepend || this.append) && !!this.size);
      return [
        `${prefixCls}-warpper`,
        {
          [`${prefixCls}-group`]:
            this.prepend || this.append || (this.search && this.enterButton),
          [`${prefixCls}-group-${this.size}`]: !!this.size,
          [`${prefixCls}-group--with-append`]:
            this.append || (this.search && this.enterButton),
          [`${prefixCls}-group--with-prepend`]: this.prepend,
          [`${prefixCls}-group--with-${this.size}`]:
            !!this.size &&
            (this.append || this.prepend || (this.search && this.enterButton))
        }
      ];
    },
    inputClasses() {
      return [
        `${prefixCls}`,
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
    // 监听选中
    handleFocus(event) {
      this.$emit("on-focus", event);
    },
    // 监听移除
    handleBlur(event) {
      this.$emit("on-blur", event);
    },
    // 点击搜索
    handleSearch() {
      if (this.disabled) return;
      this.$refs.input.focus();
      this.$emit("on-search", this.currentValue);
    },
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
    this.prepend = this.$slots.prepend !== undefined;
    this.append = this.$slots.append !== undefined;
  }
};
</script>

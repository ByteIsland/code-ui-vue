<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <!-- clear -->
      <c-icon
        name="error"
        :class="[
          `${prefixCls}-icon`,
          `${prefixCls}-icon-${this.size}`,
          `${prefixCls}-icon-clear `
        ]"
        v-if="clearable && currentValue"
        @click="handleClear"
      />
      <!-- icon -->
      <c-icon
        v-else-if="icon"
        :class="[`${prefixCls}-icon`]"
        :name="icon"
        @click="handleIconClick"
      />
      <!-- search -->
      <c-icon
        name="search"
        :class="[`${prefixCls}-icon`, `${prefixCls}-ios-search`]"
        v-else-if="search && enterButton === false"
        @click="handleSearch"
      />
      <!-- 左Icon -->
      <span :class="[`${prefixCls}-with-prefix`]" v-else-if="showPrefix">
        <slot name="prefix"> <i class="c-icon" :class="prefix"></i> </slot>
      </span>
      <!-- 左边标签 -->
      <div :class="[`${prefixCls}-group-prepend`]" v-if="prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :id="elementId"
        :type="type"
        :name="name"
        :class="inputClasses"
        :value="currentValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :spellcheck="spellcheck"
        :autofocus="autofocus"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
        @keypress="handleKeypress"
        @keyup.enter="handleEnter"
        @keyup.exact="handleKeyup"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
      />
      <!-- 右Icon -->
      <span :class="[`${prefixCls}-with-suffix`]" v-if="showSuffix">
        <slot name="suffix"> <i class="c-icon" :class="suffix"></i> </slot>
      </span>
      <!-- 右边标签 -->
      <div :class="[`${prefixCls}-group-append`]" v-if="append">
        <slot name="append"></slot>
      </div>
      <!-- search按钮 -->
      <div
        :class="[`${prefixCls}-group-append`, `${prefixCls}-search`]"
        v-if="search && enterButton"
        @click="handleSearch"
      >
        <i class="c-icon code-icon-search" v-if="enterButton === true"></i>
        <template v-else>{{ enterButton }}</template>
      </div>
    </template>
    <textarea
      v-else
      :id="elementId"
      :class="textareaClasses"
      :style="textareaStyles"
      :name="name"
      :wrap="wrap"
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :rows="rows"
      :readonly="readOnly"
      :maxlength="maxlength"
      ref="textarea"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @keydown="handleKeydown"
      @keypress="handleKeypress"
      @keyup.enter="handleEnter"
      @keyup.exact="handleKeyup"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
    >
    </textarea>
  </div>
</template>

<script>
import CIcon from "@/components/icon/src/main.vue";
import { CheckProps } from "@/utils/assets.js";
const prefixCls = "c-input";
export default {
  name: "CInput",
  props: {
    // 大小
    size: {
      validator(value) {
        return CheckProps(value, ["small", "large", "default"]);
      },
      default: "default"
    },
    // 输入框属性
    type: {
      validator(value) {
        return CheckProps(value, [
          "text",
          "password",
          "url",
          "email",
          "url",
          "textarea"
        ]);
      },
      default: "text"
    },
    name: {
      type: String
    },
    // 图标 c-icon
    icon: {
      type: String
    },
    // 自定义ID
    elementId: {
      type: String
    },
    value: {
      type: [Number, String],
      default: ""
    },
    placeholder: {
      type: String,
      default: "Enter something..."
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 左侧Icon图标
    prefix: {
      type: String,
      default: ""
    },
    // 右侧Icon
    suffix: {
      type: String,
      default: ""
    },
    // 最大输入行数
    maxlength: {
      type: Number
    },
    // 开启清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 开启搜索
    search: {
      type: Boolean,
      default: false
    },
    // 开启搜索按钮
    enterButton: {
      type: [Boolean, String],
      default: false
    },
    // 是否开启拼写检查 => 简易
    spellcheck: {
      type: Boolean,
      default: false
    },
    // 自动补全
    autocomplete: {
      validator(value) {
        return CheckProps(value, ["on", "off"]);
      },
      default: "on"
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 自动选中
    autofocus: {
      type: Boolean,
      default: false
    },
    // Textarea专用
    // 自动宽高
    autosize: {
      type: Boolean,
      default: true
    },
    // 换行模式
    wrap: {
      validator(value) {
        return CheckProps(value, ["hard", "soft"]);
      },
      default: "soft"
    },
    // 可见行数
    rows: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      prefixCls: prefixCls,
      currentValue: this.value,
      prepend: true,
      append: true,
      showSuffix: false,
      showPrefix: false,
      isOnComposition: false, // 是否开启输入法拦截
      textareaStyles: {}
    };
  },
  computed: {
    wrapClasses() {
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
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-suffix`]: this.showSuffix, // 右侧图标
          [`${prefixCls}-prefix`]: this.showPrefix // 左侧图标
        }
      ];
    },
    textareaClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
    }
  },
  methods: {
    // icon点击事件
    handleIconClick(event) {
      this.$emit("on-click", event);
    },
    // Input框内容变更
    handleInput(event) {
      if (this.isOnComposition) return;

      let value = event.target.value;
      this.$emit("input", value); // 修改外部v-model的状态
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
    // 键盘回车
    handleEnter(event) {
      this.$emit("on-enter", event);
      if (this.search) this.$emit("on-search", this.currentValue);
    },
    // 键盘按下
    handleKeydown(event) {
      this.$emit("on-keydown", event);
    },
    // 键盘按下 实时监听
    handleKeypress(event) {
      this.$emit("on-keypress", event);
    },
    // 键盘弹起
    handleKeyup(event) {
      this.$emit("on-keyup", event);
    },
    // 点击搜索
    handleSearch() {
      if (this.disabled) return;
      this.$refs.input.focus();
      this.$emit("on-search", this.currentValue);
    },
    // 监听输入法输入
    handleComposition(event) {
      if (event.type === "compositionstart") {
        this.isOnComposition = true;
      }
      if (event.type === "compositionend") {
        this.isOnComposition = false;
        this.handleInput(event);
      }
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
  },
  components: {
    CIcon
  }
};
</script>

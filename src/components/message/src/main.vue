<template>
	<transition 
		name="c-message-slide"  
		@after-leave="afterLeave" 
		@after-enter="afterEnter"
	>
		<div 
			class="c-message"
			:style="verticalTop"
			v-show="visible"
		>
			<div class="c-message--main" :class="type">
				<i 
					class="c-message--icon"
					:class="verticalType"
				></i>
				<span 
					class="c-message--title" 
					:class="{'is-padding': showClose}"
					v-text="title" 
				></span>
				<i 
					class="c-message--closeBtn code-icon-close"
					v-if="showClose"
					@click.stop="handleClose"
				></i>
			</div>
		</div>
	</transition>
</template>

<script>
const TYPE_MAP = {
  success: "code-icon-success",
  error: "code-icon-error",
  warning: "code-icon-warning",
  info: "code-icon-info"
};
export default {
  name: "CMessage",
  data() {
    return {
      type: "info", // 状态
      visible: false, // 开关
      title: "这是一个提示文本", // 文本
      showClose: false, // 打开关闭窗口
      duration: 3500,
      timer: null,
      verticalOffset: 0,
      height: 0
    };
  },
  computed: {
    verticalType() {
      return TYPE_MAP[this.type] ? TYPE_MAP[this.type] : TYPE_MAP.info;
    },
    verticalTop() {
      return this.verticalOffset ? `top:${this.verticalOffset}px` : "top:30px";
    }
  },
  mounted() {
    this.createTimer();
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    createTimer() {
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.visible = false;
        }, this.duration);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    afterEnter() {
      this.height = this.$el.offsetHeight;
    },
    afterLeave() {
      this.$emit("closed");
    }
  }
};
</script>

<style scoped>
</style>

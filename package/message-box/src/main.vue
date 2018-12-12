<template>
	<transition name="c-message-box-fade">
		<div 
			class="c-message-box--wrapper"
			v-show="visible"
		>
			<div class="c-message-box">
				<!-- 标题头 -->
				<div class="c-message--header">
					<div class="c-message-box--title">
						<p>{{title}}</p>
					</div>
					<i 
						class="c-message-box--closeBtn code-icon-close"
						@click="handleAction('close')"
					></i>
				</div>
				<div class="c-message-box--body">
					<div class="c-message-box--content" v-show="message !== ''">
						<p>{{message}}</p>
					</div>
					<div class="c-message-box--input"></div>
				</div>
				<div class="c-message-box--btns">
					<c-button 
						type="primary" 
						@click.native="handleAction('confrim')" 
						size="small"
					>提交</c-button>
					<c-button 
						type="" 
						@click.native="handleAction('cancel')" 
						size="small"
					>取消</c-button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import CButton from "../../button";
// let typeMap = {
//   success: "success",
//   info: "info",
//   warning: "warning",
//   error: "error"
// };
export default {
  data() {
    return {
      visible: false,
      action: "",
      type: "",
      title: "",
      message: "",
      callback: ""
    };
  },
  methods: {
    // 点击事件
    handleAction(action) {
      this.action = action;
      this.doClose();
    },
    doClose() {
      if (!this.visible) return;
      this.visible = false;
      setTimeout(() => {
        if (this.action) this.callback(this.action); // 返回操作
        this.$emit("closed");
      }, 100);
    }
  },
  watch: {
    visible: val => {
      return val;
    }
  },
  components: {
    CButton
  }
};
</script>

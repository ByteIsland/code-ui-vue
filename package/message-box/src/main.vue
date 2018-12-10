<template>
	<transition name="fade">
		<div class="c-message-box--wrapper">
			<div class="c-message-box">
				<!-- 标题头 -->
				<div class="c-message--header">
					<div class="c-message-box--title">
						<p>提示</p>
					</div>
					<i class="c-message-box--closeBtn code-icon-close"></i>
				</div>
				<div class="c-message-box--body">
					<div class="c-message-box--content" v-show="message !== ''">
						<p>{{message}}</p>
					</div>
					<div class="c-message-box--input"></div>
				</div>
				<div class="c-message-box--btns">
					<c-button type="primary" size="small">提交</c-button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import CButton from "../../button";
export default {
  data() {
    return {
      message: "这是一段消息文本"
    };
  },
  components: {
    CButton
  }
};
</script>

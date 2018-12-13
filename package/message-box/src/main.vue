<template>
		<div class="c-message-box--transition">
			<!-- 遮罩层 -->
			<transition name="c-message-box-fade">
				<div class="c-message-box--mask" @click="handleMask()" v-show="visible"></div>
			</transition>
			<!-- 元素 -->
			<transition name="c-message-box-slide"  @after-leave="afterLeave">
				<div 
					class="c-message-box--wrapper"
					:class="style" 
					v-show="visible" 
					@click="handleWrapClick"
				>
					<div class="c-message-box">
						<!-- 标题头 -->
						<div class="c-message--header">
							<i 
								:class="[verticalType, 'c-message-box--icon']" 
								v-if="iconName"
							></i>
							<div class="c-message-box--title">
								<p>{{title}}</p>
							</div>
							<i 
								class="c-message-box--closeBtn code-icon-close"
								@click="handleAction('close')"
							></i>
						</div>
						<!-- 内容区 -->
						<div class="c-message-box--body">
							<div class="c-message-box--content" v-show="message !== ''">
								<p>{{message}}</p>
							</div>
							<div class="c-message-box--input"></div>
						</div>
						<!-- 按钮区 -->
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
		</div>
</template>

<script>
import CButton from "../../button";
const wrapClass = "c-message-box--wrapper";
const TYPE_MAP = {
  success: "code-icon-success",
  info: "code-icon-info",
  warning: "code-icon-warning",
  error: "code-icon-error"
};
export default {
  name: "CMessageBox",
  data() {
    return {
      visible: false, // 开关
      action: "",
      type: "", // 类型
      iconName: "", // 类型
      title: "", // 标题
      message: "", // 文本描述
      center: false, // 是否垂直居中
      callback: ""
    };
  },
  computed: {
    verticalType() {
      console.log(this.iconName);
      return TYPE_MAP[this.iconName] ? TYPE_MAP[this.iconName] : "";
    },
    style() {
      return [{ "vertical-center": this.center }];
    }
  },
  methods: {
    // 关闭
    close() {
      if (!this.visible) return;
      this.visible = false;
      setTimeout(() => {
        if (this.action) this.callback(this.action); // 返回操作
      }, 100);
    },
    // 点击事件
    handleAction(action) {
      this.action = action;
      this.close();
    },
    // 通过wrap击穿下方的遮罩层
    handleWrapClick(event) {
      let className = event.target.getAttribute("class");
      if (className && className.indexOf(wrapClass) > -1) this.handleMask();
    },
    // 遮罩层点击
    handleMask() {
      this.close();
    },
    afterLeave() {
      this.$emit("closed");
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

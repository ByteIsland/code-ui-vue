<template>
	<c-row class="example" :class="{'example-vertical': isVertical}">
		<c-col class="example-demo" :span="isVertical ? 24 : 12">
			<div class="example-case">
				<slot name="case"></slot>
			</div>
			<div class="example-title">
				<slot name="title"></slot>
			</div>
			<div class="example-desc">
				<slot name="desc"></slot>
			</div>
		</c-col>
		<div class="example-split"></div>
		<c-col class="example-code" :span="isVertical ? 24 : 12" :style="codeHeight">
			<div :style="styles" ref="example_code"><slot name="code"></slot></div>
			<div class="example-code-more" ref="example_btn_more"  @click="showCode = !showCode">
				<i class="code-icon-desc" v-show="!showCode"></i>
				<i class="code-icon-asc"  v-show="showCode"></i>
				<span v-show="!showCode">show code</span>
				<span v-show="showCode">close code</span>
			</div>
		</c-col>
	</c-row>
</template>

<script>
export default {
  data() {
    return {
      isVertical: true,
      demo_height: 0,
      code_height: 0,
      isReady: false,
      showCode: false
    };
  },
  computed: {
    styles() {
      let style = {
        opacity: 1
      };
      if (!this.showCode) {
        style.opacity = 0;
      }
      return style;
    },
    codeHeight() {
      let style = {};
      if (this.isReady) {
        if (this.showCode) {
          style.height = `${this.demo_height}px`;
        } else {
          style.height = `${this.code_height}px`;
        }
      }

      return style;
    }
  },
  mounted() {
    // 避免高度计算出错
    setTimeout(() => {
      this.init();
    }, 200);
  },
  methods: {
    init() {
      this.$nextTick(() => {
        const demo_height = this.$refs.example_code.clientHeight + 20;
        const code_height = this.$refs.example_btn_more.clientHeight;

        this.code_height = code_height;

        if (code_height <= demo_height) {
          this.showCode = false;
        }

        this.demo_height = !this.showCode ? demo_height : 30;
        this.isReady = true;
      });
    }
  }
};
</script>

<style lang="scss">
@import "../styles/demo.scss";
</style>

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
		<c-col class="example-code" :span="isVertical ? 24 : 12">
			<slot name="code"></slot>
		</c-col>
	</c-row>
</template>

<script>
export default {
  data() {
    return {
      isVertical: true
    };
  }
};
</script>

<style lang="scss">
@import "../styles/demo.scss";
</style>

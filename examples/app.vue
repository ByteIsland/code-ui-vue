<template>
	<div class="container">
		<div class="vertical-middle">
			<img src="../assets/UIbg.png" class="bg" alt="">
			<div class="product-name">
				<!-- <img src="../assets/logo-icon.png" class="logo" alt="logo" title="logo"> -->
				<h2>Code UI</h2>
				<img src="../assets/incubating.png" class="incubating" alt="">
			</div>
			<div class="product-desc">
				<p>一套基于Vue.Js的高可用的UI组件库</p>
				<p>一套写法, 三端统一（PC、移动端、小程序）</p>
			</div>
			<div class="product-btns">
				<a href="" class="c-button is_round">开始使用</a>
				<a href="https://github.com/iTobys/code-ui" target="_blank" class="c-button is_round">Github</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
	}
}
</script>

<style lang="scss">
	@import "../src/theme/index.scss";
	.container {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-image: linear-gradient(0deg, #72E0CC 0%, #30AFED 51%, #2B87F6 100%);
		.vertical-middle {
			position:absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			text-align: center;
			width: 100%;
			img.bg {
				position: absolute;
				z-index: -1;
				left: 0;
				top: 5px;
				width: 100%;
			}
			.product-name{
				display: inline-block;
				position: relative;
				.logo {
					width: 80px;
					height: 80px;
					vertical-align: middle;
				}
				h2 {
					display: inline-block;
					font-family: Avenir-Heavy;
					font-size: 46px;
					color: #fff;
					text-align: center;
					word-break: break-word;
					margin: 0;
					vertical-align: middle;
					// margin-left: -13px;
				}
				img.incubating {
					position: absolute;
					right: -97px;
					top: -30px;
					width: 99px;
				}
			}
			.product-desc {
				opacity: 0.6;
				font-family: Avenir-Medium;
				font-size: 24px;
				color: #FFF;
				text-align: center;
				margin: 40px auto 0;
				max-width: 730px;
				p {
					margin: 10px 0;
				}
			}
			.product-btns {
				text-align: center;
    		margin-top: 40px;
			}
		}
	}
</style>
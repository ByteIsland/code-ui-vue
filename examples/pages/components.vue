<template>
	<div class="container">
		<c-header class="c-layout-header">
			<div class="nav">
				<router-link to="/" class="logo">
					<img :src="require('assets/logo-small.png')" alt="">
				</router-link>
				<router-link to="/" class="application">
					<i class="code-icon-application"></i>
				</router-link>
				<div class="nav-list">
					<router-link to="/docs/introduce">介绍</router-link>
					<router-link to="/components/button">组件</router-link>
				</div>
			</div>
		</c-header>
		<!-- 主体内容 -->
		<c-row class="wrapper-container">
			<c-col :span="4" class="menu-list">
				<router-link to="/components/button" class="menu-item">Button 按钮</router-link>
				<router-link to="/components/icon" class="menu-item">Icon 图标</router-link>
			</c-col>
			<c-col :span="17" class="c-article">
				<router-view></router-view>
			</c-col>
			<c-col :span="3">

			</c-col>
		</c-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@/theme/common/variable.scss";
.container {
  background: #f8f8f8;
  .c-layout-header {
    width: 100%;
    background: #fff;
    padding: 0 !important;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  }
}

.nav {
  width: 95%;
  height: 65px;
  margin: 0 auto;
  .logo {
    float: left;
    height: 50px;
    margin-top: 10px;
    img {
      height: 100%;
    }
  }
  .application {
    float: left;
    margin-left: 22px;
    padding-left: 22px;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 24px;
      background: #ebedee;
      position: absolute;
      top: 20px;
      left: 0;
    }
  }
  .nav-list {
    float: right;
    height: inherit;
    a {
      float: left;
      font-size: $font-size-medium;
      padding: 0 20px;
      position: relative;
      transition: all 0.3s linear;
      height: inherit;
      line-height: inherit;
      border-bottom: 2px solid transparent;
      color: #515a6e;
      &.router-link-active,
      &:hover {
        color: $color-default;
        border-bottom-color: $color-default;
      }
    }
  }
}

.wrapper-container {
  background: #fff;
  margin: 30px auto 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.menu-list {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  color: #515a6e;
  font-size: 14px;
  position: relative;
  z-index: 900;
  .menu-item {
    display: block;
    color: #515a6e;
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    &::after {
      content: "";
      display: block;
      width: 1px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      background: #ddd;
    }
    &:hover {
      color: #2d8cf0;
    }
    &.router-link-active {
      color: #2d8cf0;
      background: #f0faff;
    }
    &.router-link-active::after {
      width: 2px;
      background: #2d8cf0;
    }
  }
}

.c-article {
  color: #515a6e;
  padding: 15px 30px;
  h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 12px 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 12px 0;
  }
  p {
    margin: 5px;
    font-size: 14px;
  }
  .anchor {
    margin-top: 20px;
  }
  .example {
    border: 1px solid #eee;
    border-radius: 6px;
    margin-bottom: 20px;
    position: relative;
    transition: all 0.3s ease-in-out;
    .example-demo {
      padding: 20px 0;
      .example-case {
        padding: 0 20px;
      }
      .example-title {
        font-weight: 500;
        margin: 30px 0 10px;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background: #eee;
          position: absolute;
          top: 10px;
          left: 0;
        }
        span {
          display: inline-block;
          background: #fff;
          padding: 0 10px 0 10px;
          position: relative;
          margin-left: 35px;
          font-size: 14px;
        }
      }
      .example-desc {
        padding: 0 20px;
        em {
          display: inline-block;
          background: #f7f7f7;
          font-family: monospace;
          font-style: normal;
          margin: 0 3px;
          padding: 1px 5px;
          border-radius: 3px;
          color: #666;
          border: 1px solid #eee;
        }
      }
    }
    .example-split {
      width: 100%;
      border: 1px dashed #eee;
    }
    .example-code {
      font-family: monospace;
      font-size: 14px;
      padding: 0 20px;
      height: 100%;
      .hljs {
        display: block;
        overflow-x: auto;
        color: #525252;
        padding: 15px;
        .hljs-tag {
          color: #2d8cf0 !important;
          .hljs-name {
            color: #2d8cf0;
          }
        }
        .hljs-attr {
          color: #e96900;
        }
      }
    }
  }
}
</style>

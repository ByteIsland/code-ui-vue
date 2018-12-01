<template>
  <div id="app">
    <h1 class="head-tit">Button组件</h1>
    <!-- 按钮控件 -->
    <div class="button">
      <div class="primary line-main">
        <h2 class="sub-tit">基础按钮</h2>
        <c-button @click="testclick">默认按钮</c-button>
        <c-button type="primary">主要按钮</c-button>
        <c-button type="success">成功按钮</c-button>
        <c-button type="info">信息按钮</c-button>
        <c-button type="warning">警告按钮</c-button>
        <c-button type="danger">危险按钮</c-button>
      </div>
      <div class="round line-main">
        <h2 class="sub-tit">胶囊按钮</h2>
        <c-button round>默认按钮</c-button>
        <c-button type="primary" round>主要按钮</c-button>
        <c-button type="success" round>成功按钮</c-button>
        <c-button type="info" round>信息按钮</c-button>
        <c-button type="warning" round>警告按钮</c-button>
        <c-button type="danger" round>危险按钮</c-button>
      </div>
      <div class="disabled line-main">
        <h2 class="sub-tit">禁用按钮</h2>
        <c-button disabled>默认按钮</c-button>
        <c-button type="primary" disabled>主要按钮</c-button>
        <c-button type="success" disabled>成功按钮</c-button>
        <c-button type="info" disabled>信息按钮</c-button>
        <c-button type="warning" disabled>警告按钮</c-button>
        <c-button type="danger" disabled>危险按钮</c-button>
      </div>
      <div class="circle line-main">
        <h2 class="sub-tit">图标按钮</h2>
        <c-button circle icon="code-icon-search"></c-button>
        <c-button type="primary" circle icon="code-icon-database"></c-button>
        <c-button type="success" circle icon="code-icon-setting"></c-button>
        <c-button type="info" circle icon="code-icon-like-on"></c-button>
        <c-button type="warning" circle icon="code-icon-start-on"></c-button>
        <c-button type="danger" circle icon="code-icon-delete"></c-button>
      </div>
    </div>
    <h1 class="head-tit">字体图标</h1>
    <!-- 字体图标 -->
    <div class="iconfont">
      <ul>
        <li v-for="(item, idx) in icon_name" :key="idx">
          <i :class="item"></i>
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconName from "@/assets/iconName.js";
export default {
  data() {
    return {
      icon_name: IconName
    };
  },
  methods: {
    testclick() {
      console.log("点击事件");
    }
  }
};
</script>


<style lang="scss" scoped>
#app {
  width: 1200px;
  margin: 20px auto;
}
.head-tit {
  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.sub-tit {
  margin: 20px;
}
.button,
.iconfont {
  margin-top: 20px;
}
.iconfont ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #ddd;
  li {
    flex: 0 0 16.6666%;
    height: 120px;
    text-align: center;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    &:nth-child(6n),
    &:last-child {
      border-right: 1px solid #ddd;
    }
    i {
      font-size: 32px;
      margin: 25px 0 10px;
    }
    p {
      font-size: 14px;
      width: 160px;
      margin: 0 auto 10px;
    }
  }
}
</style>

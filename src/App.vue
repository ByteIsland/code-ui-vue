<template>
  <div id="app">
    <h1 class="head-tit">Button组件</h1>
    <!-- 按钮控件 -->
    <div class="button">
      <div class="primary line-main">
        <h2 class="sub-tit">基础按钮</h2>
        <c-button @click="testclick">默认按钮</c-button>
        <c-button @click="messageClick" type="primary">主要按钮</c-button>
        <c-button @click="messageSuccessClick" type="success">成功按钮</c-button>
        <c-button @click="messageInfoClick" type="info">信息按钮</c-button>
        <c-button @click="messageWarningClick" type="warning">警告按钮</c-button>
        <c-button @click="messageDangerClick" type="danger" icon="code-icon-delete">危险按钮</c-button>
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
        <c-button circle icon="code-icon-search" @click="startLoading()"></c-button>
        <c-button type="primary" circle icon="code-icon-database" @click="openMessageBox()"></c-button>
        <c-button type="success" circle icon="code-icon-setting" @click="finishLoading()"></c-button>
        <c-button type="info" circle icon="code-icon-like-on"></c-button>
        <c-button type="warning" circle icon="code-icon-start-on"></c-button>
        <c-button type="danger" circle icon="code-icon-delete" @click="errorLoading()"></c-button>
      </div>
    </div>
    <h1 class="head-tit">警告框</h1>
    <!-- 警告框 -->
    <div class="alert">
      <div class="is-icon">
        <h2 class="sub-tit">基础样式</h2>
        <c-alert type="success" title="这是一个成功警告框" />
        <c-alert type="warning" title="这是一个警告框" />
        <c-alert type="error" title="这是一个危险警告框" />
        <c-alert title="这是一个默认框" />
      </div>
      <div class="none-icon">
        <h2 class="sub-tit">可关闭icon图标</h2>
        <c-alert type="success" :showIcon="false" title="这是一个成功警告框" />
        <c-alert type="warning" :showIcon="false" title="这是一个警告框" />
        <c-alert type="error" :showIcon="false" title="这是一个危险警告框" />
        <c-alert :showIcon="false" title="这是一个默认框" />
      </div>
      <div class="closebtn">
        <h2 class="sub-tit">可修改的关闭按钮</h2>
        <c-alert type="success" :showIcon="false" closeText="知道了" />
        <c-alert type="warning" :showIcon="false" :closable="false" />
        <c-alert type="error" :showIcon="false" closeText="点击关闭" />
      </div>
      <div class="closebtn">
        <h2 class="sub-tit">带二级文本</h2>
        <c-alert type="success" msg="这是一个测试文本" />
        <c-alert type="warning" msg="这是一个测试文本" />
        <c-alert type="error" msg="这是一个测试文本" />
        <c-alert msg="这是一个测试文本" />
      </div>
      <div class="none-icon">
        <h2 class="sub-tit">文本居中</h2>
        <c-alert type="success" center title="这是一个成功警告框" />
      </div>
    </div>
    <h1 class="head-tit">栅格布局</h1>
    <div class="grid">
      <Row>
        <Col :span="24">24：100%</Col>
      </Row>
      <Row>
        <Col :span="12">12：50%</Col>
        <Col :span="12">12：50%</Col>
      </Row>
      <Row>
        <Col :span="8">8：33.3333%</Col>
        <Col :span="8">8：33.3333%</Col>
        <Col :span="8">8：33.3333%</Col>
      </Row>
      <Row>
        <Col :span="6">6：25%</Col>
        <Col :span="6">6：25%</Col>
        <Col :span="6">6：25%</Col>
        <Col :span="6">6：25%</Col>
      </Row>
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
      this.$notice({
        title: "测试标题",
        content: "这是一段描述",
        btnText: "关闭",
        type: "info"
      });
    },
    messageClick() {
      this.$message({
        title: "这是提示信息"
      });
    },
    messageDangerClick() {
      this.$message.error("这是错误信息");
    },
    messageWarningClick() {
      this.$message.warning("这是警告信息");
    },
    messageSuccessClick() {
      this.$message.success("这是正确信息");
    },
    messageInfoClick() {
      this.$message.info("这是消息信息");
    },
    startLoading() {
      this.$loading.start();
    },
    finishLoading() {
      this.$loading.finish();
    },
    errorLoading() {
      this.$loading.error();
      setTimeout(() => {
        this.$loading.destroy();
      }, 2000);
    },
    openMessageBox() {
      this.$alert({
        title: "这是一个提示标题",
        message: "这是一个提示描述",
        iconName: "success",
        center: true,
        callback: action => {
          console.log("这个是callback函数", action);
        }
      });
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
  margin-top: 20px;
}
.sub-tit {
  margin: 20px;
}
.button,
.iconfont,
.alert {
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
.alert .c-alert {
  margin-top: 20px;
}
.grid {
  margin: 10px 0;
  .c-row {
    margin-bottom: 5px;
    background-image: linear-gradient(
      90deg,
      #f5f5f5 4.16666667%,
      transparent 0,
      transparent 8.33333333%,
      #f5f5f5 0,
      #f5f5f5 12.5%,
      transparent 0,
      transparent 16.66666667%,
      #f5f5f5 0,
      #f5f5f5 20.83333333%,
      transparent 0,
      transparent 25%,
      #f5f5f5 0,
      #f5f5f5 29.16666667%,
      transparent 0,
      transparent 33.33333333%,
      #f5f5f5 0,
      #f5f5f5 37.5%,
      transparent 0,
      transparent 41.66666667%,
      #f5f5f5 0,
      #f5f5f5 45.83333333%,
      transparent 0,
      transparent 50%,
      #f5f5f5 0,
      #f5f5f5 54.16666667%,
      transparent 0,
      transparent 58.33333333%,
      #f5f5f5 0,
      #f5f5f5 62.5%,
      transparent 0,
      transparent 66.66666667%,
      #f5f5f5 0,
      #f5f5f5 70.83333333%,
      transparent 0,
      transparent 75%,
      #f5f5f5 0,
      #f5f5f5 79.16666667%,
      transparent 0,
      transparent 83.33333333%,
      #f5f5f5 0,
      #f5f5f5 87.5%,
      transparent 0,
      transparent 91.66666667%,
      #f5f5f5 0,
      #f5f5f5 95.83333333%,
      transparent 0
    );
    .c-col {
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      padding: 30px 0;
      text-align: center;
      &:nth-child(2n + 1) {
        background: rgba(0, 153, 229, 0.5);
      }
      &:nth-child(2n) {
        background: rgba(0, 153, 229, 0.3);
      }
    }
  }
}
</style>

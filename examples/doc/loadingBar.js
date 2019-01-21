let code = {};

code.Router = `
// 部分代码省略
import CodeUI from 'code-ui';

Vue.use(CodeUI)

router.beforeEach((to, from, next) => {
  CodeUI.CLoadingBar.start(); // 页面加载开始
  next();
});

router.afterEach(() => {
  CodeUI.CLoadingBar.finish(); // 页面加载完毕
});

router.onError(() => {
  CodeUI.CLoadingBar.error(); // 页面加载失败
});
`;

code.Ajax = `
<script>
// 以Axios的Ajax为例，部分代码省略
import axios from "axios";
export default {
    methods: {
        getData () {
            this.$loading.start();
            axios.get("/api/getData").then(res => {
                this.$loading.start();
            }).catch(res => {
                this.$loading.error();
            });
        }
    }
}
</script>
`;

code.JCYF = `
<template>
  <div>
    <c-button @click="start">Start</c-button>
    <c-button @click="finish">Finish</c-button>
    <c-button @click="success">Success</c-button>
    <c-button @click="error">Error</c-button>
  </div>
</template>

<script>
export default {
  methods: {
    start() {
      this.$loading.start();
    },
    finish() {
      this.$loading.finish();
    },
    success() {
      this.$loading.success();
    },
    error() {
      this.$loading.error();
    }
  }
}
</script>
`;

code.Options = `
this.$loading.options({
  color: '#409eff', // 用于控制success
  failedColor: '#f17c67',
  height: 3
})
`;

code.instanceDoc = [
  {
    type: "start",
    desc: "开始从 0 显示进度条，并自动加载进度",
    typeof: "无"
  },
  {
    type: "finish",
    desc: "结束进度条, 自动补全剩余进度",
    typeof: "无"
  },
  {
    type: "error",
    desc: "以错误的类型结束进度条，自动补全剩余进度",
    typeof: "无"
  },
  {
    type: "success",
    desc: "以正确的类型结束进度条，自动补全剩余进度",
    typeof: "无"
  }
];

code.propsDoc = [
  {
    type: "color",
    desc: "进度条的颜色，默认为 <code>CodeUI</code> 色调",
    typeof: "String",
    default: "primary"
  },
  {
    type: "failedColor",
    desc: "进度条的颜色，默认为 <code>CodeUI</code> 色调",
    typeof: "String",
    default: "error"
  },
  {
    type: "height",
    desc: "进度条的高度，单位 px",
    typeof: "Number",
    default: "2"
  }
];

export default code;

let code = {};

code.QJYR = `
import Vue from "vue";
import CodeUI from "code-ui-vue"; // 这里使用vue的库
import App from "./app.vue";
import "code-ui-vue/dist/styles/codeui.css"; // 引入样式库

... 以下代码省略

Vue.use(CodeUI);

new Vue({
  el: "#app",
  render: h => h(App)
});

`;

export default code;

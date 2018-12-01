import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CodeUI from "../package/index.js";
import "../lib/theme/index.scss";

Vue.use(CodeUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

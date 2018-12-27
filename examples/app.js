import Vue from "vue";
import VueRouter from "vue-router";
import CodeUI from "../src/index.js";
import App from "./app.vue";
import Routers from "./routers/index.js";
import "highlight.js/styles/googlecode.css"; //样式文件

// 全局注册
Vue.use(VueRouter);
Vue.use(CodeUI);

/* debug */
Vue.config.debug = true;

const router = new VueRouter({
  mode: "history",
  routes: Routers
});

// 全局拦截
router.beforeEach((to, from, next) => {
  router.app.$loading.start();
  next();
});

router.afterEach(() => {
  router.app.$loading.finish(); // 页面加载完毕关闭加载
});

router.onError(() => {
  router.app.$loading.error(); // 页面加载完毕关闭加载
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");

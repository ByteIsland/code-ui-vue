import Vue from "vue";
import VueRouter from "vue-router";
import CodeUI from "../src/index.js";
import App from "./app.vue";
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css"; //样式文件
// 全局配置highlight
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  setTimeout(() => {
    blocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  }, 200);
});
// 全局注册
Vue.use(VueRouter);
Vue.use(CodeUI);

/* debug */
Vue.config.debug = true;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: resolve => require(["./pages/index.vue"], resolve)
    },
    {
      path: "/components",
      name: "components",
      component: resolve => require(["./pages/components.vue"], resolve),
      children: [
        {
          path: "button",
          component: resolve => require(["./components/button.vue"], resolve)
        }
      ]
    }
  ]
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

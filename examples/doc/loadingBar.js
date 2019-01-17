let code = {};

code.Router = `
// 部分代码省略
import CodeUI from 'code-ui';

Vue.use(CodeUI)

router.beforeEach((to, from, next) => {
  // Vue.use后可以在Vue实例中找到$loading方法
  router.app.$loading.start();
  next();
});

router.afterEach(() => {
  router.app.$loading.finish(); // 页面加载完毕关闭加载
});
`;

export default code;
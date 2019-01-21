import Vue from "vue";
import LoadingBar from "./main.vue";

LoadingBar.newInstall = properties => {
  const _props = properties || {};
  /* 重新传入并且实例化组件 */
  const Instance = new Vue({
    data: _props,
    render(h) {
      return h(LoadingBar, {
        props: _props
      });
    }
  });

  const component = Instance.$mount(); // 组件生成
  document.body.appendChild(component.$el); // 传入节点
  const loading_bar = Instance.$children[0]; // 获取到LoadingBar示例 （Install层是Vue实例）

  return {
    component: loading_bar,
    /* 组件更新 */
    update(options) {
      // options => object
      if ("percent" in options) {
        loading_bar.percent = options.percent;
      }
      if (options.status) {
        loading_bar.status = options.status;
      }
      if ("show" in options) {
        loading_bar.visible = options.show;
      }
    },
    /* 销毁组件 */
    destroy() {
      document.body.removeChild(
        document.getElementsByClassName("c-loading-bar")[0]
      );
    }
  };
};

export default LoadingBar;

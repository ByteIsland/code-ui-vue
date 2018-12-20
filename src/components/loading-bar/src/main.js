import Vue from "vue";
import Component from "./main.vue";

const CLoadingBar = Vue.extend(Component);

const cLoadingBar = properties => {
  const props = properties || {};
  // 实例化组件
  const instace = new CLoadingBar({
    data: props
  });

  instace.vm = instace.$mount(); // 组件dom结构生成
  // 挂载到body节点
  document.body.appendChild(instace.vm.$el);
  // 获取节点
  const loading_bar = instace.vm;
  return {
    compoent: loading_bar,
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

export default cLoadingBar;

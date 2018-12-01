import CButton from "./src/main.vue";

/* 注册全局组件 */
CButton.install = function(Vue) {
  Vue.component(CButton.name, CButton);
};

export default CButton;

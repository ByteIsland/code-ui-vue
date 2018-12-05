/* 注册组件 */
import CButton from "./button/index.js";
import CAlert from "./alert/index.js";
/* 全局组件 */
import CNotification from "./notification/index.js";

const components = [CButton, CAlert];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  /* 注册全局组件 */
  Vue.prototype.$notice = CNotification; // 提示框
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CButton,
  CAlert,
  CNotification
};

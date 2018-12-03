import CButton from "./button/index.js";
import CAlert from "./alert/index.js";

const components = [CButton, CAlert];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CButton,
  CAlert
};

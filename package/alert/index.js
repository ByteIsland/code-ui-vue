import CAlert from "./src/main.vue";

CAlert.install = function(Vue) {
  Vue.component(CAlert.name, CAlert);
};

export default CAlert;

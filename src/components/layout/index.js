import CLayout from "./src/main.vue";

CLayout.install = Vue => {
  Vue.component(CLayout.name, CLayout);
};

export default CLayout;

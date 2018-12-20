import CSider from "./src/main.vue";

CSider.install = Vue => {
  Vue.component(CSider.name, CSider);
};

export default CSider;

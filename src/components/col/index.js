import Col from "./src/main.vue";

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;

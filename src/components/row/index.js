import Row from "./src/main.vue";

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

export default Row;

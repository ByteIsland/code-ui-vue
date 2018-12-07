import Col from "./src/main.js";

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;

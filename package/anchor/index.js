import CAnchor from "./src/main.vue";

CAnchor.install = Vue => {
  Vue.component(CAnchor.name, CAnchor);
};

export default CAnchor;

import CAnchorLink from "./src/main.vue";

CAnchorLink.install = Vue => {
  Vue.component(CAnchorLink.name, CAnchorLink);
};

export default CAnchorLink;

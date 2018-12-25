import CMenuItem from "./src/main.vue";

CMenuItem.install = Vue => {
  Vue.component(CMenuItem.name, CMenuItem);
};

export default CMenuItem;

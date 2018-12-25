import CMenu from "./src/main.vue";

CMenu.install = Vue => {
  Vue.component(CMenu.name, CMenu);
};

export default CMenu;

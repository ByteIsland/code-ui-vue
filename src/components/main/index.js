import CMain from "./src/main.vue";

CMain.install = Vue => {
  Vue.component(CMain.name, CMain);
};

export default CMain;

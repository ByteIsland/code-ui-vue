import CIcon from "./src/main.vue";

CIcon.install = Vue => {
  Vue.component(CIcon.name, CIcon);
};

export default CIcon;

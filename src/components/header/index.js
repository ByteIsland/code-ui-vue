import CHeader from "./src/main.vue";

CHeader.install = Vue => {
  Vue.component(CHeader.name, CHeader);
};

export default CHeader;

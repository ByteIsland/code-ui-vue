import CAffix from "./src/main.vue";

CAffix.install = Vue => {
  Vue.component(CAffix.name, CAffix);
};

export default CAffix;

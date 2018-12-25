import CMenuGroup from "./src/main.vue";

CMenuGroup.install = Vue => {
  Vue.compoent(CMenuGroup.name, CMenuGroup);
};

export default CMenuGroup;

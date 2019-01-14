import CDropdownItem from "./src/main.vue";

CDropdownItem.install = Vue => {
  Vue.component(CDropdownItem.name, CDropdownItem);
};

export default CDropdownItem;

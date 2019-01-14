import CDropdownMenu from "./src/main.vue";

CDropdownMenu.install = Vue => {
  Vue.component(CDropdownMenu.name, CDropdownMenu);
};

export default CDropdownMenu;

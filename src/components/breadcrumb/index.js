import CBreadcrumb from "./src/main.vue";

CBreadcrumb.install = Vue => {
  Vue.component(CBreadcrumb.name, CBreadcrumb);
};

export default CBreadcrumb;

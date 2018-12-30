import CBreadcrumbItem from "./src/main.vue";

CBreadcrumbItem.install = Vue => {
  Vue.component(CBreadcrumbItem.name, CBreadcrumbItem);
};

export default CBreadcrumbItem;

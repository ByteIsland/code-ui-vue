import CCard from "./src/main.vue";

CCard.install = Vue => {
  Vue.component(CCard.name, CCard);
};

export default CCard;

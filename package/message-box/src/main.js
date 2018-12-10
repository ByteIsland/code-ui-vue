import Vue from "vue";
import Component from "./main.vue";

const CMessageBoxComponent = Vue.extend(Component);

const CMessage = options => {
  if (Vue.prototype.$isServer) return;
  const instace = new CMessageBoxComponent({
    data: options
  });

  instace.vm = instace.$mount();
  document.body.appendChild(instace.vm.$el);

  return instace;
};

// 警告框
CMessage.alert = options => {
  return CMessage(options);
};
// 确认框
CMessage.confirm = options => {
  return CMessage(options);
};
// 输入框
CMessage.prompt = options => {
  return CMessage(options);
};

export default CMessage;
export { CMessage };

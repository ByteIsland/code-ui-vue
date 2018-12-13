import Vue from "vue";
import Component from "./main.vue";

const CMessageBoxComponent = Vue.extend(Component);

const CMessage = options => {
  if (Vue.prototype.$isServer) return;

  const instance = new CMessageBoxComponent({
    data: options
  });

  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  // 监听是否取消
  instance.vm.$on("closed", () => {
    document.body.removeChild(instance.vm.$el);
    instance.vm.$destroy(); // 组件销毁
  });

  return instance.vm;
};

// 警告框
CMessage.alert = options => {
  options.type = "alert";
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

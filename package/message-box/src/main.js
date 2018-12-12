import Vue from "vue";
import Component from "./main.vue";

const CMessageBoxComponent = Vue.extend(Component);

// 遮罩层元素
const VModal = () => {
  let vmdal = document.createElement("div");
  vmdal.className = "v-modal";
  document.body.appendChild(vmdal);
  // return vmdal;
};

const CMessage = options => {
  if (Vue.prototype.$isServer) return;

  const instance = new CMessageBoxComponent({
    data: options
  });

  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  VModal(); // 添加遮罩层
  instance.vm.visible = true;
  // 监听是否取消
  instance.vm.$on("closed", () => {
    document.body.removeChild(document.getElementsByClassName("v-modal")[0]);
    document.body.removeChild(instance.vm.$el);
  });

  return instance.vm;
};

// 警告框
CMessage.alert = options => {
  options.type = "alert";
  console.log(options);
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

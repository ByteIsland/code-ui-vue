import Vue from "vue";
import Component from "./main.vue";
const MessageConstructor = Vue.extend(Component);

let seed = 1;
const instances = [];

/* 移除DOM节点 */
const removeInstance = instance => {
  if (!instance) return;
  const len = instances.length;
  const index = instances.findIndex(inst => instance.id === inst.id);

  instances.splice(index, 1);

  if (len <= 1) return;
  const removeHeight = instance.vm.height;
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset =
      parseInt(instances[i].verticalOffset) - removeHeight - 16;
  }
};

/* 结构体实例 */
const Message = (options = {}) => {
  if (Vue.prototype.$isServer) return;

  const id = `notification_${seed++}`;

  // 直接传入文本直接跳出
  if (typeof options === "string") {
    return;
  }

  const instance = new MessageConstructor({
    data: options
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;

  /* 记录元素与前面其他的距离值 */
  let verticalOffset = 0;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  instance.verticalOffset = verticalOffset;
  instances.push(instance);

  /* 监听自动关闭 */
  instance.vm.$on("closed", () => {
    removeInstance(instance);
    document.body.removeChild(instance.vm.$el);
    instance.vm.$destroy();
  });

  /* 监听手动关闭 */
  instance.vm.$on("close", () => {
    instance.vm.visible = false;
  });

  return instance.vm;
};

/* 链式操作只支持传入title */
["success", "error", "warning", "info"].forEach(type => {
  Message[type] = options => {
    if (typeof options === "string") {
      options = {
        title: options
      };
      options.type = type; // 修改type值
      // 重新返回实例
      return Message(options);
    }
  };
});

export default Message;

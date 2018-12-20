import Vue from "vue";
import Component from "./main.vue";

const NotificationConstructor = Vue.extend(Component);

const instances = []; // 存放节点
let seed = 1;

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

const notify = options => {
  if (Vue.prototype.$isServer) return;

  // const { autoClose, ...rest } = options;
  const instance = new NotificationConstructor({
    data: options
  });

  const id = `notification_${seed++}`;
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

export default notify;

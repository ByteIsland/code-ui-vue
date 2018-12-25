/*
 * 全局通知
 */

function _broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    // 判断名称是否匹配
    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      // todo 如果 params 是空数组，接收到的会是 undefined 所以需要[]包裹
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: {
    // 子组件 => 父组件
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root; // 如果当前为父组件则注册到Vue实例
      let name = parent.$options.name;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }

      if (parent) {
        // 直接往$emit添加事件
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    // 父组件 => 子组件
    broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};

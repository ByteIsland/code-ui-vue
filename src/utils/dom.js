import Vue from "vue";
const isServer = Vue.prototype.$isServer;
const on = "ON";

// 监听函数
export const ListenOn = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    // 判断不是监听, 则使用事件记录
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent(`${on}-${event}`, handler); // IE addEventListener
      }
    };
  }
})();

// 移除监听函数
export const ListenOff = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    // 判断不是监听, 则使用事件记录
    return function(element, event, handler) {
      if (element && event && handler) {
        element.detachEvent(`${on}-${event}`, handler); // IE removeEventListener
      }
    };
  }
})();

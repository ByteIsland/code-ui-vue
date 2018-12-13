/* 注册组件 */
import Row from "./row/index.js";
import Col from "./col/index.js";
import CButton from "./button/index.js";
import CAlert from "./alert/index.js";

/* 全局组件 */
import CNotification from "./notification/index.js";
import CMessage from "./message/index.js";
import CMessageBox from "./message-box/index.js";
import CLoadingBar from "./loading-bar/index.js";

const components = [CButton, CAlert, Row, Col];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  /* 注册全局组件 */
  Vue.prototype.$notice = CNotification; // 提示框
  Vue.prototype.$message = CMessage; // 消息框
  Vue.prototype.$loading = CLoadingBar; // 加载
  Vue.prototype.$alert = CMessageBox.alert; // 警告框
  Vue.prototype.$confirm = CMessageBox.confirm; // 确认框
  // Vue.prototype.$prompt = CMessageBox.prompt; // 输入框
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CButton,
  CAlert,
  CNotification,
  CMessage,
  CMessageBox,
  Col,
  Row
};

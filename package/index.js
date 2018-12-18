/* 基础组件 */
import CButton from "./button/index.js";
import CAlert from "./alert/index.js";
/* 布局组件 */
import CLayout from "./layout/index.js";
import CMain from "./main/index.js";
import CHeader from "./header/index.js";
import CFooter from "./footer/index.js";
import CSider from "./sider/index.js";
import Row from "./row/index.js";
import Col from "./col/index.js";
/* 导航组件 */
import CAnchor from "./anchor/index.js";
import CAnchorLink from "./anchor-link/index.js";
/* 表单组件 */
import CInput from "./input/index.js";
import CSwitch from "./switch/index.js";
/* 全局组件 */
import CNotification from "./notification/index.js";
import CMessage from "./message/index.js";
import CMessageBox from "./message-box/index.js";
import CLoadingBar from "./loading-bar/index.js";

const components = [
  CButton,
  CAlert,
  CLayout,
  CHeader,
  CMain,
  CFooter,
  CSider,
  Row,
  Col,
  CAnchor,
  CAnchorLink,
  CInput,
  CSwitch
];

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
  CLayout,
  CHeader,
  CMain,
  CFooter,
  CSider,
  CButton,
  CAlert,
  CNotification,
  CMessage,
  CMessageBox,
  Col,
  Row,
  CAnchor,
  CAnchorLink,
  CInput,
  CSwitch
};

/* 基础组件 */
import CButton from "./components/button/index.js";
import CAlert from "./components/alert/index.js";
import CMenu from "./components/menu/index.js";
import CMenuGroup from "./components/menu-group/index.js";
import CMenuItem from "./components/menu-item/index.js";
import CMenuSub from "./components/menu-sub/index.js";
/* 布局组件 */
import CLayout from "./components/layout/index.js";
import CMain from "./components/main/index.js";
import CHeader from "./components/header/index.js";
import CFooter from "./components/footer/index.js";
import CSider from "./components/sider/index.js";
import CRow from "./components/row/index.js";
import CCol from "./components/col/index.js";
/* 导航组件 */
import CAffix from "./components/affix/index.js";
import CAnchor from "./components/anchor/index.js";
import CAnchorLink from "./components/anchor-link/index.js";
/* 表单组件 */
import CInput from "./components/input/index.js";
import CSwitch from "./components/switch/index.js";
/* 全局组件 */
import CNotification from "./components/notification/index.js";
import CMessage from "./components/message/index.js";
import CMessageBox from "./components/message-box/index.js";
import CLoadingBar from "./components/loading-bar/index.js";

const components = [
  CButton,
  CAlert,
  CMenu,
  CMenuGroup,
  CMenuSub,
  CMenuItem,
  CLayout,
  CHeader,
  CMain,
  CFooter,
  CSider,
  CRow,
  CCol,
  CAnchor,
  CAnchorLink,
  CAffix,
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
  ...components
};

import CLoadingBar from "./src/main.js";

let loadingBarInstance;
let color = "primary";
let failedColor = "error";
let height = 2;
let timer;

/* 获取已经实例化的loadingBar节点 */
function getLoadingBarInstance() {
  loadingBarInstance =
    loadingBarInstance ||
    CLoadingBar.newInstall({
      color,
      failedColor,
      height
    });
  return loadingBarInstance;
}

/* 组件更新 */
function update(options) {
  let instace = getLoadingBarInstance();

  instace.update(options);
}

/* 清空定时器 */
function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

/* 隐藏组件 */
function hide() {
  setTimeout(() => {
    update({
      show: false
    });
    setTimeout(() => {
      update({
        percent: 0
      });
    }, 200);
  }, 800);
}

export default {
  // TODO 初始化loadingBar
  start() {
    if (timer) return;

    let percent = 0; // 进度长度
    /* 先初始化结构体 */
    update({
      percent,
      status: "primary",
      show: true
    });

    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 4); // 每次执行添加5%的宽度
      // 进度条零界点
      if (percent > 90) {
        clearTimer();
      }
      // 更新组件
      update({
        percent: percent,
        status: "primary",
        show: true
      });
    }, 300);
  },
  // TODO loadingBar 完成 - 进度
  finish() {
    clearTimer(); // 清空定时器
    update({
      percent: 100,
      status: "finish",
      show: true
    });
    hide(); // 隐藏进度条
  },
  // TODO loadingBar 成功 - 进度
  success() {
    clearTimer(); // 清空定时器
    update({
      percent: 100,
      status: "success",
      show: true
    });
    hide(); // 隐藏进度条
  },
  // TODO loadingBar 错误 - 进度
  error() {
    clearTimer(); // 清空定时器
    update({
      percent: 100,
      status: "error",
      show: true
    });
    hide(); // 隐藏进度条
  },
  // TODO 配置loadingBar属性
  config(options) {
    if (options.color) {
      color = options.color;
    }
    if (options.failedColor) {
      failedColor = options.failedColor;
    }
    if (options.height) {
      height = options.height;
    }
  },
  // TODO 精确LoadingBar计算
  update(percent) {
    clearTimer(); // 清空定时器
    update({
      percent: percent,
      status: "finish",
      show: true
    });
  },
  // TODO 销毁LoadingBar
  destroy() {
    clearTimer();
    let instace = getLoadingBarInstance();
    loadingBarInstance = null;
    instace.destroy(); // 调用组件销毁
  }
};

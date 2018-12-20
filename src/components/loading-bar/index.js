import CLoadingBar from "./src/main.js";

let loadingBarInstance;
let color = "primary";
let failedColor = "error";
let height = 2;
let timer;

/* 获取已经实例化的loadingbar节点 */
function getLoadingBarInstance() {
  loadingBarInstance =
    loadingBarInstance ||
    CLoadingBar({
      color,
      failedColor,
      height
    });

  return loadingBarInstance;
}

/* 组件更新 */
function update(options) {
  let instace = getLoadingBarInstance();

  return instace.update(options);
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
  // 开始调用
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
  // 加载完毕
  finish() {
    clearTimer(); // 清空定时器
    update({
      percent: 100,
      status: "success",
      show: true
    });
    hide(); // 隐藏进度条
  },
  // 加载失败
  error() {
    clearTimer(); // 清空定时器
    update({
      percent: 100,
      status: "error",
      show: true
    });
    hide(); // 隐藏进度条
  },
  // 组件销毁
  destroy() {
    clearTimer();
    let instace = getLoadingBarInstance();
    loadingBarInstance = null;
    instace.destroy(); // 调用组件销毁
  }
};

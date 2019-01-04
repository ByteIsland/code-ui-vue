const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g; // 样式表过滤器
function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(
    _,
    separator,
    letter,
    offset
  ) {
    // toUpperCase 强制转换大写
    return offset ? letter.toUpperCase() : letter;
  });
}

/**
 * 获取指定元素的样式
 * @param el 目标元素
 * @param styleName 样式表名
 */
export const getStyle = (el, styleName) => {
  if (!el || !styleName) return;
  styleName = camelCase(styleName);
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    const computed = document.defaultView.getComputedStyle(el, "");
    return el.style[styleName] || computed ? computed[name] : null;
  } catch (e) {
    return el.style[styleName];
  }
};

/**
 * scrollTop animation 滚动动画
 * @param el 目标元素
 * @param from 开始位置
 * @param to 结束位置
 * @param duration 调用时间
 * @param endCallBack
 */
export const scrollTop = (el, from = 0, to, duration = 500, endCallBack) => {
  // requestAnimationFrame => 补丁
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  }

  const diff = Math.abs(from - to); // 获取偏移量的绝对值
  const step = Math.ceil((diff / duration) * 50); //向上取整

  /* 核心滚动函数 */
  function scroll(start, end, step) {
    // 如果开始位置与结束位置一直，则直接返回
    if (start === end) {
      endCallBack && endCallBack();
      return;
    }
    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    // 持续调用 => 相当于setInterval
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
};

/* 查询父节点 单个 */
export const findComponentUpward = (
  VueContext,
  componentName,
  componentNames
) => {
  if (typeof componentName === "string") {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = VueContext.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
};

/* 查询父节点 多个 */
export const findComponentsUpward = (VueContext, componentName) => {
  let parents = [];
  const parent = VueContext.$parent;
  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
};

/* 查询当前节点下同名的子节点 单个 */
export const findComponentDownward = (VueContext, componentName) => {
  const childrens = VueContext.$children;
  let children = null;

  if (childrens.length) {
    for (let child of childrens) {
      const name = child.$options.name;
      // 查询到同名的节点后返回
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }

  return children;
};

/* 查询当前节点下同名的子节点 多个 */
export const findComponentsDownward = (VueContext, componentName) => {
  return VueContext.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child);
    const foundChilds = findComponentsDownward(child, componentName);
    return components.concat(foundChilds);
  }, []);
};

/* 过滤检查props */
export const CheckProps = (value, checkList = []) => {
  for (let i = 0; i < checkList.length; i++) {
    if (value === checkList[i]) {
      return true;
    }
  }
  return false;
};

export const sharpMatcherRegx = /#([^#]+)$/; // #号拦截器

// Thanks to
// https://github.com/iview/iview

const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const SIZING_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];

let hiddenTextarea;
let computedStyleCache = {};

function calculateNodeStyling(node, useCache = false) {
  const nodeRef =
    node.getAttribute("id") ||
    node.getAttribute("data-vueId") ||
    node.getAttribute("name");

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  const style = window.getComputedStyle(node);

  const boxSizing =
    style.getPropertyValue("box-sizing") ||
    style.getPropertyValue("-moz-box-sizing") ||
    style.getPropertyValue("-webkit-box-sizing");

  const paddingSize =
    parseFloat(style.getPropertyValue("padding-bottom")) +
    parseFloat(style.getPropertyValue("padding-top"));

  const borderSize =
    parseFloat(style.getPropertyValue("border-bottom-width")) +
    parseFloat(style.getPropertyValue("border-top-width"));

  const sizingStyle = SIZING_STYLE.map(
    name => `${name}:${style.getPropertyValue(name)}`
  ).join(";");

  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}

/**
 * 自适应高度 一般用于Textarea
 * @param TextNode 指定元素
 * @param minRows 最少行数
 * @param maxRows 最大行数
 */

export default function calcTextareaHeight(
  TextNode,
  minRows = null,
  maxRows = null,
  useCache = false
) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }

  if (TextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", TextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }

  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(TextNode, useCache);

  hiddenTextarea.setAttribute(
    "style",
    `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`
  );
  hiddenTextarea.value = TextNode.value || TextNode.placeholder || "";

  let minHeight = Number.MIN_SAFE_INTEGER; // 获取最小的安全数 只处理整数
  let maxHeight = Number.MAX_SAFE_INTEGER; // 获取最大的安全数
  let height = hiddenTextarea.scrollHeight;
  let overflowY;

  if (boxSizing === "border-box") {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    // remove padding, since height = content
    height = height - paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }

  if (!maxRows) {
    overflowY = "hidden";
  }

  return {
    height: `${height}px`,
    minHeight: `${minHeight}px`,
    maxHeight: `${maxHeight}px`,
    overflowY
  };
}

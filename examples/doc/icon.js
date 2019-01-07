let code = {};

code.Icon = `<c-icon name="search" />`;
code.IconRender = `<i class="c-icon c-icon-search"></i>`;

code.doc = [
  {
    type: "name",
    desc: `图标名称, 在使用<code>c-icon</code>组件中, 只需要传入图标名, 无需额外传入<code>"c-icon-"</code>前缀名`,
    typeof: "String",
    default: "-"
  },
  {
    type: "size",
    desc: `图标大小, 可传入<code>2x</code>、<code>3x</code>、<code>4x</code>、<code>5x</code>以及<code>lg</code>, 默认使用<code>lg</code>`,
    typeof: "String",
    default: "lg"
  },
  {
    type: "rotate",
    desc: `图标旋转, 可以让图标进行不同位置的旋转, 可传入<code>90</code>、<code>180</code>、<code>270</code>`,
    typeof: "String",
    default: "-"
  },
  {
    type: "flipped",
    desc: `图标翻转, 可以让图标进行水平翻转, 支持传入<code>horizontal</code>、<code>vertical</code>`,
    typeof: "String",
    default: "-"
  },
  {
    type: "animated",
    desc: `图标动画, 目前只支持旋转动画, 一般用于<code>loading</code>、<code>setting</code>等圆形组件`,
    typeof: "Boolean",
    default: "false"
  }
];

code.anchor = [
  {
    title: "示例代码",
    path: "#BASE"
  }
];

export default code;

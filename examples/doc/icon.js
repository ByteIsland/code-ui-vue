let code = {};

code.Icon = `<c-icon name="search" />`;
code.IconRender = `<i class="c-icon c-icon-search"></i>`;

code.doc = [
  {
    type: "name",
    desc: "图标名称",
    typeof: "String",
    default: "-"
  },
  {
    type: "size",
    desc: "图标大小",
    typeof: "String, Number",
    default: "-"
  },
  {
    type: "color",
    desc: "图标颜色",
    typeof: "String",
    default: "-"
  }
];

code.anchor = [
  {
    title: "示例代码",
    path: "#BASE"
  }
];

export default code;

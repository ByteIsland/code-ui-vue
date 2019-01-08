let code = {};

code.BASE = `
<template>
  <c-breadcrumb>
    <c-breadcrumb-item to="/">Home</c-breadcrumb-item>
    <c-breadcrumb-item to="/components">Components</c-breadcrumb-item>
    <c-breadcrumb-item>Breadcrumb</c-breadcrumb-item>
  </c-breadcrumb>
</template>
`;

code.BASEICON = `
<template>
  <c-breadcrumb>
    <c-breadcrumb-item to="/"><c-icon name="function" /> Home</c-breadcrumb-item>
    <c-breadcrumb-item to="/components"><c-icon name="plug" /> Components</c-breadcrumb-item>
    <c-breadcrumb-item><c-icon name="release" /> Breadcrumb</c-breadcrumb-item>
  </c-breadcrumb>
</template>
`;

code.SEPARATOR = `
<template>
  <c-breadcrumb separator=" > ">
    <c-breadcrumb-item to="/">Home</c-breadcrumb-item>
    <c-breadcrumb-item to="/components">Components</c-breadcrumb-item>
    <c-breadcrumb-item>Breadcrumb</c-breadcrumb-item>
  </c-breadcrumb>
</template>
`;

code.breadcrumbDoc = [
  {
    type: "separator",
    desc: `自定义分隔符`,
    typeof: "String",
    default: "/"
  }
];

code.breadcrumbItemDoc = [
  {
    type: "to",
    desc: `链接，不传则没有链接，支持 <code>vue-router</code> 对象`,
    typeof: "String | Object",
    default: "-"
  },
  {
    type: "replace",
    desc: `路由跳转时，开启 replace 将不会向 history 添加新记录`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "target",
    desc: `与<code>a</code>标签的<code>target</code>属性一致`,
    typeof: "String",
    default: "/"
  }
];

export default code;
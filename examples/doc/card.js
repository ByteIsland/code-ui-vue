let code = {};

code.BASE = `
<tempalte>
  <div slot="case">
    <c-card>
      <p slot="title">基础标题</p>
      <div>这是基础用法</div>
    </c-card>
  </div>
</tempalte>
`;

code.CUSTOM = `
<template>
  <c-card title="自定义标题" icon="search">
    <a href="/" slot="extra">this is extra</a>
    <div>这是基础用法</div>
  </c-card>
</template>
`

code.NOTBORDER = `
<tempalte>
  <c-card :bordered="false">
    <p slot="title">Not Bordered</p>
    <div>Content is Not Bordered. Content is Not Bordered. Content is Not Bordered. </div>
  </c-card>
</tempalte>
`;

code.DISHOVER = `
<template>
  <c-row slot="case" style="background: rgb(238, 238, 238); padding: 20px;">
    <c-col :span="11">
      <c-card>
        <p slot="title">Not Disable hover shadows</p>
        <div>Content is Not Bordered. Content is Not Bordered. Content is Not Bordered. </div>
      </c-card>
    </c-col>
    <c-col :span="11" :offset="2">
      <c-card dis-hover>
        <p slot="title">Disable hover shadows</p>
        <div>Content is Not Bordered. Content is Not Bordered. Content is Not Bordered. </div>
      </c-card>
    </c-col>
  </c-row>
</template>
`;

code.CONTENT = `
<template>
  <c-card style="width: 320px; text-align: center;">
    <div>
      <img :src="require('../../../assets/logo-icon.png')" width="85" height="85" alt="">
      <p>这是一个只有body的Card组件</p>
    </div>
  </c-card>
</template>
`;

code.DocProps = [
  {
    type: "bordered",
    desc: "是否显示边框, 建议在深色背景下使用",
    typeof: "Boolean",
    default: "true"
  },
  {
    type: "dis-hover",
    desc: "禁用鼠标悬停显示阴影效果",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "shadow",
    desc: `卡片阴影, 建议在深色背景使用, 如果开启则<code>bordered</code>以及<code>dis-hover</code>失效`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "title",
    desc: "自定义标题",
    typeof: "String",
    default: "-"
  },
  {
    type: "icon",
    desc: `自定义图标, 用法与<code>CIcon</code>中的<code>name</code>一致`,
    typeof: "String",
    default: "-"
  },
  {
    type: "bordered",
    desc: "是否显示边框, 建议在深色背景下使用",
    typeof: "Boolean",
    default: "true"
  },
];

code.DocSlot = [
  {
    type: "title",
    desc: "自定义卡片标题",
    typeof: "-",
    default: "-"
  },
  {
    type: "extra",
    desc: "额外显示的内容, 位置默认在右上角",
    typeof: "-",
    default: "-"
  },
  {
    type: "无",
    desc: "卡片主体(Body)设置",
    typeof: "-",
    default: "-"
  }
];

export default code;

let code = {};

code.BASE = `
<template>
  <c-row>
    <c-col :span="12">col-12</c-col>
    <c-col :span="12">col-12</c-col>
  </c-row>
  <c-row>
    <c-col :span="8">col-8</c-col>
    <c-col :span="8">col-8</c-col>
    <c-col :span="8">col-8</c-col>
  </c-row>
  <c-row>
    <c-col :span="6">col-6</c-col>
    <c-col :span="6">col-6</c-col>
    <c-col :span="6">col-6</c-col>
    <c-col :span="6">col-6</c-col>
  </c-row>
</template>
`;

code.GUTTER = `
<template>
  <c-row gutter="18" class="gutter">
    <c-col span="6"><div>col-span-6</div> </c-col>
    <c-col span="6"><div>col-span-6</div> </c-col>
    <c-col span="6"><div>col-span-6</div> </c-col>
    <c-col span="6"><div>col-span-6</div> </c-col>
  </c-row>
</template>
`;

code.ORDER = `
<template>
  <c-row flex>
    <c-col span="6" order="1">4 | order-1</c-col>
    <c-col span="6" order="3">2 | order-3</c-col>
    <c-col span="6" order="2">3 | order-2</c-col>
    <c-col span="6" order="4">1 | order-4</c-col>
  </c-row>
</template>
`;

code.PUSHPULL = `
<template>
  <c-row>
    <c-col push="6" span="18">col-18 | col-pull-6</c-col>
    <c-col pull="18" span="6">col-6 | col-pull-18</c-col>
  </c-row>
</template>
`;

code.OFFSET = `
<template>
  <c-row>
    <c-col span="8">col-8 </c-col>
    <c-col span="8" offset="8">col-8 | col-offset-8</c-col>
  </c-row>
  <c-row>
    <c-col span="6" offset="6">col-8 | col-offset-8</c-col>
    <c-col span="6" offset="6">col-8 | col-offset-8</c-col>
  </c-row>
  <c-row>
    <c-col span="8" offset="12">col-8 | col-offset-12</c-col>
  </c-row>
</template>
`;

code.FLEXBJ = `
<template>
  <p class="description">子元素向左排列</p>
  <c-row flex justify="start" class="code-row-bg">
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
  </c-row>
  <p class="description">子元素向右排列</p>
  <c-row flex justify="end" class="code-row-bg">
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
  </c-row>
  <p class="description">子元素居中排列</p>
  <c-row flex justify="center" class="code-row-bg">
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
  </c-row>
  <p class="description">子元素等宽排列</p>
  <c-row flex justify="space-between" class="code-row-bg">
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
  </c-row>
  <p class="description">子元素分散排列</p>
  <c-row flex justify="space-around" class="code-row-bg">
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
    <c-col span="4"> col-4 </c-col>
  </c-row>
</template>
`;

code.FLEXDQ = `
<template>
  <p class="description">顶部对齐</p>
  <c-row flex justify="center" align="top" class="code-row-bg">
    <c-col span="4" style="line-height: 80px;">col-4</c-col>
    <c-col span="4" style="line-height: 40px;">col-4</c-col>
    <c-col span="4" style="line-height: 100px">col-4</c-col>
    <c-col span="4" style="line-height: 60px">col-4</c-col>
  </c-row>
  <p class="description">居中对齐</p>
  <c-row flex justify="center" align="middle" class="code-row-bg">
    <c-col span="4" style="line-height: 80px;">col-4</c-col>
    <c-col span="4" style="line-height: 40px;">col-4</c-col>
    <c-col span="4" style="line-height: 100px">col-4</c-col>
    <c-col span="4" style="line-height: 60px">col-4</c-col>
  </c-row>
  <p class="description">底部对齐</p>
  <c-row flex justify="center" align="bottom" class="code-row-bg">
    <c-col span="4" style="line-height: 80px;">col-4</c-col>
    <c-col span="4" style="line-height: 40px;">col-4</c-col>
    <c-col span="4" style="line-height: 100px">col-4</c-col>
    <c-col span="4" style="line-height: 60px">col-4</c-col>
  </c-row>
</template>
`;

code.XYSBJ = `
<template>
  <c-row>
    <c-col :xs="2" :sm="4" :md="6" :lg="8">Col</c-col>
    <c-col :xs="20" :sm="16" :md="12" :lg="8">Col</c-col>
    <c-col :xs="2" :sm="4" :md="6" :lg="8">Col</c-col>
  </c-row>
</template>
`;

code.CRowDoc = [
  {
    type: "gutter",
    desc: `栅格间距，单位<code>px</code>，左右平分`,
    typeof: "String | Number",
    default: "0"
  },
  {
    type: "flex",
    desc: `布局模式, 在<code>CRow</code>直接传入即可开启`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "justify",
    desc: `flex布局的水平排列方式, 可选值<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code>`,
    typeof: "String",
    default: "-"
  },
  {
    type: "align",
    desc:
      "flex布局的垂直居中方式, 可选值<code>top</code>、<code>bottom</code>、<code>middle</code>",
    typeof: "String",
    default: "-"
  }
];

code.CColDoc = [
  {
    type: "span",
    desc: `栅格的占位格数，可选值为<code>0~24</code>的整数`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "order",
    desc: `栅格顺序, 在<code>flex</code>模式下有效`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "offset",
    desc: "栅格左侧的间隔格数, 间隔内不可以有栅格",
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "push",
    desc: "栅格向右移动格数",
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "pull",
    desc: "栅格向左移动格数",
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "xs",
    desc: `<code><768px</code> 响应式栅格`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "sm",
    desc: `<code>≥768px</code> 响应式栅格`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "md",
    desc: `<code>≥992px</code> 响应式栅格`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "lg",
    desc: `<code>≥1200px</code> 响应式栅格`,
    typeof: "String | Number",
    default: "-"
  }
];

export default code;

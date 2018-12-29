let code = {};

code.base = `
<template>
    <c-button>Defalut</c-button>
    <c-button type="primary">Primary</c-button>
    <c-button disabled>Disabled</c-button>
    <br>
    <c-button type="success">Success</c-button>
    <c-button type="info">Info</c-button>
    <c-button type="warning">Warning</c-button>
    <c-button type="danger">Danger</c-button>
</template>
<script>
    export default {
            
    }
</script>
`;

code.circle = `
<template>
    <c-button type="primary" icon="search">Search</c-button>
    <c-button type="primary" round>Round</c-button>
    <c-button type="primary" circle>
        <i class="code-icon-search"></i>
    </c-button>
</template>
<script>
    export default {
            
    }
</script>
`;

code.size = `
<template>
    <c-button type="primary" size="large">Large</c-button>
    <c-button type="primary">Default</c-button>
    <c-button type="primary" size="small">Small</c-button>
</template>
<script>
    export default {
            
    }
</script>
`;

code.group = `
<template>
  <c-button-group>
    <c-button type="primary">Left</c-button>
    <c-button type="primary">Middle</c-button>
    <c-button type="primary">Right</c-button>
  </c-button-group>
  <br>
  <c-button-group circle>
    <c-button >Left</c-button>
    <c-button >Middle</c-button>
    <c-button >Right</c-button>
  </c-button-group>
</template>
<script>
    export default {
            
    }
</script>
`;

code.doc = [
  {
    type: "type",
    desc:
      "按钮类型, 可设置<code>type</code>为<code>primary</code>、<code>success</code>、<code>info</code>、<code>warning</code>、<code>error</code>或不设置",
    typeof: "String",
    default: "default"
  },
  {
    type: "HtmlType",
    desc:
      "Button属性, 可设置<code>ButtonType</code>为<code>button</code>、<code>submit</code>、<code>reset</code>或不设置",
    typeof: "String",
    default: "button"
  },
  {
    type: "size",
    desc:
      "按钮大小, 可设置<code>size</code>为<code>large</code>、<code>small</code>或不设置",
    typeof: "String",
    default: "default"
  },
  {
    type: "circle",
    desc: "圆形按钮, 可设置<code>circle</code>",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "round",
    desc: "胶囊按钮, 可设置<code>round</code>",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "icon",
    desc:
      "按钮图标, 在<code>icon</code>添加icon图标的名字, 前缀<code>code-icon</code>无需填写",
    typeof: "String",
    default: "-"
  },
  {
    type: "disabled",
    desc: "禁用按钮, 可设置<code>disabled</code>",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "to",
    desc: "跳转的连接, 支持vue-router, 设置后按钮将变成<code>a</code>",
    typeof: "String",
    default: "-"
  },
  {
    type: "replace",
    desc: "路由跳转时，开启replace将不会往<code>mode='history'</code>添加解析",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "target",
    desc: "相当于<code>a</code>标签的target",
    typeof: "String",
    default: "_self"
  }
];

code.groupDoc = [
  {
    type: "circle",
    desc: "按钮组合形状, 设置后两边会有圆角",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "vertical",
    desc: "按钮组合排序, 设置后按钮会垂直布局",
    typeof: "Boolean",
    default: "false"
  }
];

export default code;

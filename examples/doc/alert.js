let code = {};

code.BASE = `
<template>
  <c-alert type="info">An Info Alert</c-alert>
  <c-alert type="success">An Success Alert</c-alert>
  <c-alert type="warning">An Warning Alert</c-alert>
  <c-alert type="error">An Error Alert</c-alert>
</template>
`;

code.MSXX = `
<template>
  <c-alert type="info">
    An Info Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="success">
    An Success Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="warning">
    An Warning Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="error">
    An Error Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
</template>
`;

code.TB = `
<template>
  <c-alert type="info" show-icon>An Info Alert</c-alert>
  <c-alert type="success" show-icon>An Success Alert</c-alert>
  <c-alert type="warning" show-icon>An Warning Alert</c-alert>
  <c-alert type="error" show-icon>An Error Alert</c-alert>
  <c-alert type="info" show-icon>
    An Info Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="success" show-icon>
    An Success Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="warning" show-icon>
    An Warning Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="error" show-icon>
    An Error Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert type="info" show-icon>
    <c-icon name="warning-light" slot="icon" />
    An Custom icon
    <template slot="desc">
      Custom of Alert. Custom of Alert. Custom of Alert. Custom of Alert.
    </template>
  </c-alert>
</template>
`;

code.GBAN = `
<template>
  <c-alert closable type="info">An Info Alert</c-alert>
  <c-alert closable type="success" show-icon>
    An Success Alert
    <template slot="desc">
      Content of Alert. Content of Alert. Content of Alert. Content of Alert.
    </template>
  </c-alert>
  <c-alert closable type="error" close-text="close">
    An Error Alert
  </c-alert>
</template>
`;

code.PropsDoc = [
  {
    type: "type",
    desc: `警告框样式, 可选值<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>`,
    typeof: "String",
    default: "info"
  },
  {
    type: "closable",
    desc: `是否可关闭`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "close-text",
    desc: "关闭按钮显示文本",
    typeof: "String",
    default: "-"
  },
  {
    type: "show-icon",
    desc: "是否显示图标",
    typeof: "Boolean",
    default: "false"
  }
];

code.EventsDoc = [
  {
    type: "on-close",
    desc: "关闭警告框时触发",
    typeof: "event"
  }
];

code.SlotDoc = [
  {
    type: "-",
    desc: "警告框提示标题"
  },
  {
    type: "desc",
    desc: "警告框提示内容"
  },
  {
    type: "icon",
    desc: "警告框自定义图标"
  }
];

export default code;

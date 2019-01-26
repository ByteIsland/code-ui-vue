let code = {};

code.JCYF = `
<template>
  <c-input v-model="value" placeholder="Enter something..." style="width: 230px" />
</template>

<script>
export default {
  data() {
    return {
      value: ""
    }
  }
}
</script>
`;

code.SIZE = `
<template>
  <c-input v-model="value1" placeholder="Large size..." size="large" />
  <c-input v-model="value2" placeholder="default size..." />
  <c-input v-model="value3" placeholder="small something..." size="small" />
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
    }
  }
}
</script>
`;

code.CLEAN = `
<template>
  <c-input v-model="value4" placeholder="Enter something..." clearable style="width: 230px" />
</template>

<script>
export default {
  data() {
    return {
      value4: "",
    }
  }
}
</script>
`;

code.DICON = `
<template>
  <c-input v-model="value5" icon="search" placeholder="Enter something..." style="width: 230px"  />
</template>

<script>
export default {
  data() {
    return {
      value5: ""
    }
  }
}
</script>
`;

code.ZYTB = `
<template>
<div>
<div>
  <span>属性方式</span>
  <c-input prefix="users" placeholder="请输入用户名" style="width: 180px; margin-right: 5px;" />
  <c-input suffix="search" placeholder="请输入搜索内容" style="width: 180px;" />
</div>
  <div style="margin-top: 6px">
    <span style="margin-right: 2px">slot方式</span>
    <c-input placeholder="请输入用户名" style="width: 180px; margin-right: 5px">
      <c-icon name="users" slot="prefix" />
    </c-input>
    <c-input placeholder="请输入搜索内容" style="width: 180px;">
      <c-icon name="search" slot="suffix" />
    </c-input>
  </div>
</div>
</template>
`;

code.SEARCH = `
<template>
  <c-input search placeholder="Search Something..." />
  <c-input search search-button placeholder="Search Something..." />
  <c-input search search-button="搜索" placeholder="Search Something..." />
</template>
`

code.ZHXZJ = `
<template>
  <c-input v-model="value6">
    <span slot="prepend">https://</span>
    <span slot="append">.com</span>
  </c-input>
</template>

<script >
export default {
  data() {
    return {
      value6: ""
    }
  }
}
</script>
`;

code.WBKMS = `
<template>
  <c-input type="textarea" v-model="value7" />
  <c-input type="textarea" :rows="4" v-model="value8" />
</template>

<script>
export default {
  data() {
    return {
      value7: "",
      value8: ""
    }
  }
}
</script>
`;

code.AUTOSIZE = `
<template>
  <c-input type="textarea" autosize v-model="value9" :rows="1" />
  <c-input type="textarea" :autosize="{minRow: 2, maxRow: 10}" v-model="value10" />
</template>

<script>
export default {
  data() {
    return {
      value9: "",
      value10: ""
    }
  }
}
</script>
`;

code.JY = `
<template>
  <c-input type="textarea" disabled />
  <c-input type="textarea" disabled :rows="4" />
</template>
`

code.PropsDoc = [
  {
    type: "name",
    desc: `输入框名称`,
    typeof: "String",
    default: "-"
  },
  {
    type: "size",
    desc: `输入框大小, 可选值<code>small</code>、<code>default</code>和<code>large</code>`,
    typeof: "String",
    default: "default"
  },
  {
    type: "type",
    desc: `输入框类型, 可传入<code>text</code>、<code>password</code>、<code>email</code>、<code>url</code>和<code>textarea</code>`,
    typeof: "String",
    default: "text"
  },
  {
    type: "value",
    desc: `绑定的值, 可使用<code>v-model</code>双向绑定`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "placeholder",
    desc: `占位文本, 与原生属性<code>placeholder</code>一致`,
    typeof: "String",
    default: "-"
  },
  {
    type: "clearable",
    desc: `是否显示清空按钮`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "disabled",
    desc: `设置输入框为禁用`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "readonly",
    desc: `设置输入框为只读`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "maxlength",
    desc: `最大输入长度`,
    typeof: "Number",
    default: "-"
  },
  {
    type: "icon",
    desc: `输入框尾部图标 注意在<code>textarea</code>类型无法使用`,
    typeof: "String",
    default: "-"
  },
  {
    type: "search",
    desc: `是否显示为搜索型输入框`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "search-button",
    desc: `仅在<code>search</code>下才有效果, 是否有确认按钮, 可设置文字按钮`,
    typeof: "Boolean | String",
    default: "false"
  },
  {
    type: "autofocus",
    desc: "自动获取焦点",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "autocomplete",
    desc: `原生属性, 是否使用自动完成, 可选值为<code>on</code>和<code>off</code>`,
    typeof: "String",
    default: "off"
  },
  {
    type: "spellcheck",
    desc: `原生 <code>spellcheck</code> 属性, 是否开启简易的拼写检查`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "element-id",
    desc: `自定义输入框Id`,
    typeof: "String",
    default: "-"
  },
];

code.TextAreaPropsDoc = [
  {
    type: "rows",
    desc: "多行文本框默认行数",
    typeof: "Number",
    default: "2"
  },
  {
    type: "autosize",
    desc: `自适应内容高度, 可传入对象, 如<code>{minRow: 2, maxRow: 10}</code>`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "wrap",
    desc: `原生的 <code>wrap</code> 属性, 可传入值<code>hard</code>与<code>sort</code>`,
    typeof: "String",
    default: "sort"
  }
];

code.MethodsDoc = [
  {
    type: "on-change",
    desc: "数据改变时触发",
    typeof: "event"
  },
  {
    type: "on-enter",
    desc: "按下回车键时触发",
    typeof: "-"
  },
  {
    type: "on-click",
    desc: `设置 <code>icon</code> 属性后, 点击图标时触发`,
    typeof: "-"
  },
  {
    type: "on-focus",
    desc: "输入框聚焦时触发",
    typeof: "-"
  },
  {
    type: "on-blur",
    desc: "输入框失去焦点触发",
    typeof: "-"
  },
  {
    type: "on-keyup",
    desc: "键盘弹起时触发",
    typeof: "event"
  },
  {
    type: "on-keydown",
    desc: "键盘按下时触发",
    typeof: "event"
  },
  {
    type: "on-keypress",
    desc: "键盘按下时触发(有输入的情况)",
    typeof: "event"
  },
  {
    type: "on-search",
    desc: `开启<code>search</code>时可用, 点击搜索或按下回车键时触发`,
    typeof: "value"
  }
];

code.SlotDoc = [
  {
    type: "prepend",
    desc: `前置内容, 只在<code>text</code>类型下有效`,
  },
  {
    type: "append",
    desc: `后置内容, 只在<code>text</code>类型下有效`,
  },
  {
    type: "prefix",
    desc: "输入框头部图标"
  },
  {
    type: "suffix",
    desc: "输入框尾部图标"
  }
];

export default code;

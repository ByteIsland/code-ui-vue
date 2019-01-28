let code = {};

code.BASE = `
<template>
  <c-switch v-model="switch1" @on-change="handleChange" />
</template>

<script>
export default {
  data() {
    return {
      switch1: false
    }
  }
  methods: {
    handleChange(status) {
      this.$message.info("开关状态" + status);
    }
  }
}
</script>
`;

code.SIZE = `
<template>
  <c-switch size="large" />
  <c-switch />
  <c-switch size="small" />
</template>
`;

code.WZYTB = `
<template>
  <c-switch>
    <span slot="open">开</span><span slot="close">关</span>
  </c-switch>
  <c-switch>
    <c-icon slot="open" name="check"></c-icon>
    <c-icon slot="close" name="close"></c-icon>
  </c-switch>
  <br />
  <br />
  <c-switch size="large">
    <span slot="open">打开</span><span slot="close">关闭</span>
  </c-switch>
  <c-switch size="large">
    <span slot="open">ON</span><span slot="close">OFF</span>
  </c-switch>
</template>
`;

code.JY = `
<template>
  <c-switch disabled :value="true" />
  <c-switch disabled :value="false" />
</template>
`;

code.PropsDoc = [
  {
    type: "value",
    desc: `指定当前是否选中, 可以使用v-model双向绑定数据`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "size",
    desc: `开关尺寸, 可选值为<code>small</code>、<code>default</code>、<code>large</code>。建议如果超过2个汉字请使用<code>large</code>`,
    typeof: "String",
    default: "default"
  },
  {
    type: "disabled",
    desc: "禁用开关",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "true-value",
    desc: "选中的值, 在使用1 和 0 来判断选中时很有用",
    typeof: "String, Number, Boolean",
    default: "true"
  },
  {
    type: "false-value",
    desc: "为选中的值, 在使用1 和 0 来判断选中时很有用",
    typeof: "String, Number, Boolean",
    default: "false"
  }
];

code.EventsDoc = [
  {
    type: "on-change",
    desc: "开关变化时触发，返回当前的状态",
    typeof: "true | false"
  }
];

code.SlotDoc = [
  {
    type: "open",
    desc: "自定义开关打开时的内容"
  },
  {
    type: "close",
    desc: "自定义开关关闭时的内容"
  }
];

export default code;

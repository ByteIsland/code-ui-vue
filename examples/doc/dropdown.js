let code = {};

code.BASE = `
<template>
  <c-dropdown>
    <a href="javascript:void(0)">
      下拉菜单
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
    </c-dropdown>
  <c-dropdown style="margin-left: 20px">
    <c-button type="primary">
      下拉菜单
      <c-icon name="arrow-down" />
    </c-button>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
  </c-dropdown>
</template>
`;

code.CFFS = `
<template>
  <c-dropdown>
    <a href="javascript:void(0)">
      hover 触发
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
    </c-dropdown>
    <c-dropdown style="margin-left: 20px" trigger="click">
    <a href="javascript:void(0)">
      click 触发
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
    </c-dropdown>
    <c-dropdown style="margin-left: 20px" trigger="custom" :visible="visible">
    <a href="javascript:void(0)" @click="handleOpen">
      自定义触发
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
    </c-dropdown>
    <c-dropdown style="margin-left: 20px" trigger="RightClick">
    <a href="javascript:void(0)">
      右键触发
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
  </c-dropdown>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleOpen () {
      this.visible = !this.visible
    }
  }
}
</script>
`;

code.DQFS = `
<template>
  <c-dropdown placement="bottom-start">
    <a href="javascript:void(0)">
      菜单(左)
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
    </c-dropdown>
    <c-dropdown style="margin-left: 20px">
    <a href="javascript:void(0)">
      菜单(中)
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
    </c-dropdown>
    <c-dropdown style="margin-left: 20px" placement="bottom-end">
    <a href="javascript:void(0)" >
      菜单(右)
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdownItem divided>口袋妖怪</c-dropdownItem>
    </c-dropdown-menu>
  </c-dropdown>
</template>
`;

code.QTSY = `
<template>
  <c-dropdown placement="bottom-start">
    <a href="javascript:void(0)">
      Switch游戏
      <c-icon name="arrow-down" />
    </a>
    <c-dropdown-menu slot="list">
      <c-dropdownItem>荒野之息</c-dropdownItem>
      <c-dropdownItem>马里奥赛车</c-dropdownItem>
      <c-dropdownItem disabled>NBA2K19</c-dropdownItem>
      <c-dropdownItem>上古卷轴</c-dropdownItem>
      <c-dropdown placement="right-start">
        <c-dropdownItem>
          口袋妖怪
          <c-icon name="arrow" />
        </c-dropdownItem>
        <c-dropdown-menu slot="list">
          <c-dropdownItem>伊布版</c-dropdownItem>
          <c-dropdownItem>皮卡丘版</c-dropdownItem>
        </c-dropdown-menu>
      </c-dropdown>
    </c-dropdown-menu>
  </c-dropdown>
</template>
`;

code.PropsDoc = [
  {
    type: "trigger",
    desc: `触发方式，可选值为<code>hover</code>(悬停)、<code>click</code>(点击)、<code>RightClick</code>(右击)、<code>custom</code>(自定义), 使用<code>custom</code>时, 需要配合<code>visible</code>一同使用P`,
    typeof: "String",
    default: "hover"
  },
  {
    type: "trigger",
    desc: `手动控制下拉框的显示, 在<code>trigger = custom</code>时使用`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "placement",
    desc: `下拉菜单出现的位置, 可选值为<code>top-start</code>、<code>top</code>、<code>top-end</code>、<code>bottom-start</code>、<code>bottom</code>、<code>bottom-end</code>、<code>left-start</code>、<code>left</code>、<code>left-end</code>、<code>right-start</code>、<code>right</code>、<code>right-end</code>`,
    typeof: "Boolean",
    default: "false"
  }
];

code.EventsDoc = [
  {
    type: "on-click",
    desc: "点击菜单项时触发",
    typeof: `<code>CDropdownItem</code>的<code>name</code>值`,
  },
  {
    type: "on-visible-change",
    desc: "菜单显示状态改变时调用",
    typeof: "visible  "
  },
  {
    type: "on-clickoutside",
    desc: "点击外部关闭下拉菜单时触发",
    typeof: "event"
  }
];

code.SlotDoc = [
  {
    type: "list",
    desc: `列表内容, 一般交给<code>CDropdownMenu</code>承担`,
  }
];

code.ItemPropsDoc = [
  {
    type: "name",
    desc: "用于标识这一项",
    typeof: "String",
    default: "-"
  },
  {
    type: "disabled",
    desc: "禁用该项",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "divided",
    desc: "显示分割线",
    typeof: "Boolean",
    default: "false"
  }
];

export default code;

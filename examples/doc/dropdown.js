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
`

code.PropsDoc = [
  {
    type: "",
    desc: "",
    typeof: "",
    default: ""
  }
];

code.EventsDoc = [
  {
    type: "",
    desc: "",
    typeof: "",
    default: ""
  }
];

code.SlotDoc = [
  {
    type: "",
    desc: "",
    typeof: "",
    default: ""
  }
];

code.ItemPropsDoc = [
  {
    type: "",
    desc: "",
    typeof: "",
    default: ""
  }
];

export default code;

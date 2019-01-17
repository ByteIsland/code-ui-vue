let code = {};

code.BASE = `
<template>
  <c-menu mode="horizontal" theme="light" active-name="1">
    <c-menu-item name="1">
      <c-icon name="work-order" />
      内容管理
    </c-menu-item>
    <c-menu-item name="2">
      <c-icon name="users" />
      用户管理
    </c-menu-item>
    <c-menu-sub name="3">
      <template slot="title">
        <c-icon name="charts" />
        统计分析
      </template>
      <c-menu-group title="使用">
        <c-menu-item name="3-1">新增用户</c-menu-item>
        <c-menu-item name="3-2">活跃时段</c-menu-item>
        <c-menu-item name="3-3">时段分析</c-menu-item>
      </c-menu-group>
      <c-menu-group title="流水">
        <c-menu-item name="3-4">交易总额</c-menu-item>
        <c-menu-item name="3-5">交易时段</c-menu-item>
      </c-menu-group>
    </c-menu-sub>
    <c-menu-item name="4">
      <c-icon name="setting" />
      综合设置
    </c-menu-item>
  </c-menu>
  <c-menu mode="horizontal" theme="dark" active-name="1" style="margin-top: 20px;">
    <c-menu-item name="1">
      <c-icon name="work-order" />
      内容管理
    </c-menu-item>
    <c-menu-item name="2">
      <c-icon name="users" />
      用户管理
    </c-menu-item>
    <c-menu-sub name="3">
      <template slot="title">
        <c-icon name="charts" />
        统计分析
      </template>
      <c-menu-group title="使用">
        <c-menu-item name="3-1">新增用户</c-menu-item>
        <c-menu-item name="3-2">活跃时段</c-menu-item>
        <c-menu-item name="3-3">时段分析</c-menu-item>
      </c-menu-group>
      <c-menu-group title="流水">
        <c-menu-item name="3-4">交易总额</c-menu-item>
        <c-menu-item name="3-5">交易时段</c-menu-item>
      </c-menu-group>
    </c-menu-sub>
    <c-menu-item name="4">
      <c-icon name="setting" />
      综合设置
    </c-menu-item>
  </c-menu>
</template>
`;

code.CLDH = `
<template>
  <c-row>
    <c-col :span="8">
      <c-menu theme="dark" active-name="1-3" :open-names="['1']">
        <c-menu-sub name="1">
          <template slot="title">
            <c-icon name="setting" />
            内容管理
          </template>
          <c-menu-item name="1-1">文章管理</c-menu-item>
          <c-menu-item name="1-2">评论管理</c-menu-item>
          <c-menu-item name="1-3">举报管理</c-menu-item>
        </c-menu-sub>
        <c-menu-sub name="2">
          <template slot="title">
            <c-icon name="users" />
            用户管理
          </template>
          <c-menu-item name="2-1">文章管理</c-menu-item>
          <c-menu-item name="2-2">评论管理</c-menu-item>
          <c-menu-item name="2-3">举报管理</c-menu-item>
        </c-menu-sub>
        <c-menu-sub name="3">
          <template slot="title">
            <c-icon name="charts" />
            统计分析
          </template>
          <c-menu-group title="使用">
            <c-menu-item name="3-1">新增和启动</c-menu-item>
            <c-menu-item name="3-2">活跃分析</c-menu-item>
            <c-menu-item name="3-3">时段分析</c-menu-item>
          </c-menu-group>
          <c-menu-group title="留存">
            <c-menu-item name="3-4">用户留存</c-menu-item>
            <c-menu-item name="3-5">流失用户</c-menu-item>
          </c-menu-group>
        </c-menu-sub>
      </c-menu>
    </c-col>
    <c-col :span="8">
      <c-menu :open-names="['1', '2']" active-name="1-2">
        <c-menu-sub name="1">
          <template slot="title">
            <c-icon name="setting" />
            内容管理
          </template>
          <c-menu-item name="1-1">文章管理</c-menu-item>
          <c-menu-item name="1-2">评论管理</c-menu-item>
          <c-menu-item name="1-3">举报管理</c-menu-item>
        </c-menu-sub>
        <c-menu-sub name="2">
          <template slot="title">
            <c-icon name="users" />
            用户管理
          </template>
          <c-menu-item name="2-1">文章管理</c-menu-item>
          <c-menu-item name="2-2">评论管理</c-menu-item>
          <c-menu-item name="2-3">举报管理</c-menu-item>
        </c-menu-sub>
        <c-menu-sub name="3">
          <template slot="title">
            <c-icon name="charts" />
            统计分析
          </template>
          <c-menu-group title="使用">
            <c-menu-item name="3-1">新增和启动</c-menu-item>
            <c-menu-item name="3-2">活跃分析</c-menu-item>
            <c-menu-item name="3-3">时段分析</c-menu-item>
          </c-menu-group>
          <c-menu-group title="留存">
            <c-menu-item name="3-4">用户留存</c-menu-item>
            <c-menu-item name="3-5">流失用户</c-menu-item>
          </c-menu-group>
        </c-menu-sub>
      </c-menu>
    </c-col>
    <!--手风琴-->
    <c-col :span="8">
      <c-menu accordion active-name="1-2" >
        <c-menu-sub name="1">
          <template slot="title">
            <c-icon name="setting" />
            内容管理
          </template>
          <c-menu-item name="1-1">文章管理</c-menu-item>
          <c-menu-item name="1-2">评论管理</c-menu-item>
          <c-menu-item name="1-3">举报管理</c-menu-item>
        </c-menu-sub>
        <c-menu-sub name="2">
          <template slot="title">
            <c-icon name="users" />
            用户管理
          </template>
          <c-menu-item name="2-1">文章管理</c-menu-item>
          <c-menu-item name="2-2">评论管理</c-menu-item>
          <c-menu-item name="2-3">举报管理</c-menu-item>
        </c-menu-sub>
        <c-menu-sub name="3">
          <template slot="title">
            <c-icon name="charts" />
            统计分析
          </template>
          <c-menu-group title="使用">
            <c-menu-item name="3-1">新增和启动</c-menu-item>
            <c-menu-item name="3-2">活跃分析</c-menu-item>
            <c-menu-item name="3-3">时段分析</c-menu-item>
          </c-menu-group>
          <c-menu-group title="留存">
            <c-menu-item name="3-4">用户留存</c-menu-item>
            <c-menu-item name="3-5">流失用户</c-menu-item>
          </c-menu-group>
        </c-menu-sub>
      </c-menu>
    </c-col>
  </c-row>
</template>
`;

code.FZ = `
<template>
  <c-menu active-name="1" theme="dark">
    <c-menu-group title="内容管理">
      <c-menu-item name="1"><c-icon name="file" />文章管理</c-menu-item>
      <c-menu-item name="2"><c-icon name="users" />人员管理</c-menu-item>
      <c-menu-item name="3"><c-icon name="charts" />报表管理</c-menu-item>
    </c-menu-group>
    <c-menu-group title="统计分析">
      <c-menu-item name="4"><c-icon name="heart" />文章分析</c-menu-item>
      <c-menu-item name="5"><c-icon name="start" />人员分析</c-menu-item>
    </c-menu-group>
  </c-menu>
</template>
`;

code.Doc = [
  {
    type: "mode",
    desc: `菜单类型, 可选值<code>horizontal</code>(水平) 和 <code>vertical</code>(垂直)`,
    typeof: "String",
    default: "vertical"
  },
  {
    type: "theme",
    desc: `主题色, 可选值<code>light</code>、<code>dark</code>`,
    typeof: "String",
    default: "light"
  },
  {
    type: "active-name",
    desc: `激活菜单的<code>name</code>`,
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "open-names",
    desc: `	展开的 <code>CMenuSub</code> 的 <code>name</code>值`,
    typeof: "Array",
    default: "[]"
  },
  {
    type: "accordion",
    desc: "是否开启手风琴模式，开启后每次至多展开一个子菜单",
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "width",
    desc: `导航菜单的宽度，只在 <code>mode="vertical"</code> 时有效, 如果使用<code>CCol</code>, 请使用auto`,
    typeof: "String",
    default: "240px"
  }
];

code.EventsDoc = [
  {
    type: "on-select",
    desc: `选择菜单<code>CMenuItem</code>时触发`,
    typeof: "name"
  },
  {
    type: "on-open-change",
    desc: `当 <code>展开/收起 </code> 时子菜单时触发`,
    typeof: `当前展开的 <code>CMenuSub</code> 的 name 值数组`
  }
];

code.GroupDoc = [
  {
    type: "title",
    desc: "分组的标题",
    typeof: "String",
    default: "-"
  }
];

code.GroupSlotDoc = [
  {
    type: "title",
    desc: "子菜单标题",
  }
];

code.ItemDoc = [
  {
    type: "name",
    desc: "菜单的唯一标识, 必填",
    typeof: "String | Number",
    default: "-"
  },
  {
    type: "to",
    desc: `跳转的连接, 支持传入 <code>vue-router</code> 对象`,
    typeof: "String | Object",
    default: "-"
  },
  {
    type: "replace",
    desc: `路由跳转时，开启 <code>replace</code> 将不会向 <code>history</code> 添加新记录`,
    typeof: "Boolean",
    default: "false"
  },
  {
    type: "target",
    desc: `与 <code>a</code> 标签的 <code>target</code>属性一致`,
    typeof: "String",
    default: "_self"
  }
];

export default code;
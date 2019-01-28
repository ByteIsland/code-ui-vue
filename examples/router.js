export default [
  {
    path: "/",
    name: "home",
    component: resolve => require(["./view/index.vue"], resolve)
  },
  {
    path: "/guide",
    redirect: "/guide/introduce"
  },
  {
    path: "/guide/introduce",
    name: "introduce",
    component: resolve => require(["./view/guide/introduce.vue"], resolve)
  },
  {
    path: "/guide/install",
    name: "install",
    component: resolve => require(["./view/guide/install.vue"], resolve)
  },
  {
    path: "/guide/start",
    name: "start",
    component: resolve => require(["./view/guide/start.vue"], resolve)
  },
  {
    path: "/guide/update",
    name: "update",
    component: resolve => require(["./view/guide/update.vue"], resolve)
  },
  {
    path: "/components",
    redirect: "/components/button"
  },
  {
    path: "/components/color",
    name: "color",
    component: resolve => require(["./view/components/color.vue"], resolve)
  },
  {
    path: "/components/font",
    name: "font",
    component: resolve => require(["./view/components/font.vue"], resolve)
  },
  {
    path: "/components/button",
    name: "button",
    component: resolve => require(["./view/components/button.vue"], resolve)
  },
  {
    path: "/components/icon",
    name: "icon",
    component: resolve => require(["./view/components/icon.vue"], resolve)
  },
  {
    path: "/components/grid",
    name: "grid",
    component: resolve => require(["./view/components/grid.vue"], resolve)
  },
  {
    path: "/components/layout",
    name: "layout",
    component: resolve => require(["./view/components/layout.vue"], resolve)
  },
  {
    path: "/components/card",
    name: "card",
    component: resolve => require(["./view/components/card.vue"], resolve)
  },
  {
    path: "/components/menu",
    name: "menu",
    component: resolve => require(["./view/components/menu.vue"], resolve)
  },
  {
    path: "/components/dropdown",
    name: "dropdown",
    component: resolve => require(["./view/components/dropdown.vue"], resolve)
  },
  {
    path: "/components/breadcrumb",
    name: "breadcrumb",
    component: resolve => require(["./view/components/breadcrumb.vue"], resolve)
  },
  {
    path: "/components/loadingBar",
    name: "loadingBar",
    component: resolve => require(["./view/components/loadingBar.vue"], resolve)
  },
  {
    path: "/components/input",
    name: "input",
    component: resolve => require(["./view/components/input.vue"], resolve)
  },
  {
    path: "/components/switch",
    name: "switch",
    component: resolve => require(["./view/components/switch.vue"], resolve)
  },
  {
    path: "/components/alert",
    name: "alert",
    component: resolve => require(["./view/components/alert.vue"], resolve)
  },
  {
    path: "/components/message",
    name: "message",
    component: resolve => require(["./view/components/message.vue"], resolve)
  },
  {
    path: "/components/notice",
    name: "notice",
    component: resolve => require(["./view/components/notice.vue"], resolve)
  }
];

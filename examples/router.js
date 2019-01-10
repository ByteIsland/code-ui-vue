export default [
  {
    path: "/",
    name: "home",
    component: resolve => require(["./view/index.vue"], resolve)
  },
  {
    path: "/components",
    redirect: "/components/button"
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
    path: "/components/breadcrumb",
    name: "breadcrumb",
    component: resolve => require(["./view/components/breadcrumb.vue"], resolve)
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
  }
];

export default [
  {
    path: "/",
    name: "home",
    component: resolve => require(["../pages/index.vue"], resolve)
  },
  {
    path: "/components",
    name: "components",
    component: resolve => require(["../pages/components.vue"], resolve),
    children: [
      {
        path: "button",
        component: resolve => require(["../components/button.vue"], resolve)
      },
      {
        path: "icon",
        component: resolve => require(["../components/icon.vue"], resolve)
      },
      {
        path: "layout",
        component: resolve => require(["../components/layout.vue"], resolve)
      },
      {
        path: "menu",
        component: resolve => require(["../components/menu.vue"], resolve)
      }
    ]
  },
  {
    path: "/guide",
    name: "guide",
    component: resolve => require(["../pages/guide.vue"], resolve)
  }
];

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
        name: "button",
        component: resolve => require(["../components/button.vue"], resolve)
      },
      {
        path: "icon",
        name: "icon",
        component: resolve => require(["../components/icon.vue"], resolve)
      },
      {
        path: "layout",
        name: "layout",
        component: resolve => require(["../components/layout.vue"], resolve)
      },
      {
        path: "menu",
        name: "menu",
        component: resolve => require(["../components/menu.vue"], resolve)
      },
      {
        path: "input",
        name: "input",
        component: resolve => require(["../components/input.vue"], resolve)
      },
      {
        path: "switch",
        name: "switch",
        component: resolve => require(["../components/switch.vue"], resolve)
      }
    ]
  },
  {
    path: "/guide",
    name: "guide",
    component: resolve => require(["../pages/guide.vue"], resolve)
  }
];

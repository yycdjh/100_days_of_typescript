// 对外暴露配置路由
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "", //菜单标题
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Day1/index.vue"),
        name: "home",
        meta: {
          title: "首页", //菜单标题
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404", //菜单标题
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意路由", //菜单标题
      hidden: true,
    },
  },
];

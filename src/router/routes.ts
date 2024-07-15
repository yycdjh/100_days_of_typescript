// 对外暴露配置路由
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {},
    redirect: "/day1",
    children: [
      {
        path: "/day1",
        component: () => import("@/views/Day1/index.vue"),
        name: "day1",
        meta: {},
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {},
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

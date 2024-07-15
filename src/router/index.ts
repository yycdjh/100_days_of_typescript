import { createRouter, createWebHistory } from "vue-router";
import { constantRoutes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

export default router;

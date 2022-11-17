import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

type PageRoute = {
  path: string;
  name: string;
  component: () => Promise<Component>;
};

const createPageRoutes = (pageLength: number = 25) => {
  const pageRoutes: PageRoute[] = [];
  for (let i = 0; i < pageLength; i++) {
    pageRoutes.push({
      name: `Day-${i}`,
      path: `/day-${i}`,
      component: () => import(`../views/Day${i}View.vue`),
    });
  }
  return pageRoutes;
};
const pageRoutes = createPageRoutes();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ...pageRoutes,
  ],
});

export default router;

import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

type PageRoute = {
  path: string;
  name: string;
  component: () => Promise<Component>;
};

const createPageroutes = (pageLength: number = 25) => {
  const pageroutes: PageRoute[] = [];
  for (let i = 0; i < pageLength; i++) {
    pageroutes.push({
      name: `Day-${i}`,
      path: `/day-${i}`,
      component: () => import(`../views/Day${i}View.vue`),
    });
  }
  return pageroutes;
};
const pageroutes = createPageroutes();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ...pageroutes,
  ],
});
console.log(pageroutes);

export default router;

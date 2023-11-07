import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/PortfolioPage.vue";
import ProjectDetail from "../pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectDetail,
    },
  ],
});

export { router };

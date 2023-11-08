import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import Portfolio from "../pages/PortfolioPage.vue";
import ProjectDetail from "../pages/ProjectDetailPage.vue";
import PortfolioByType from "../pages/PortfolioByTypePage.vue";

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
      path: "/project/:slug",
      name: "project",
      component: ProjectDetail,
    },
    {
      path: "/project/type/:type_id",
      name: "portfolio-by-type",
      component: PortfolioByType,
    },
  ],
});

export { router };

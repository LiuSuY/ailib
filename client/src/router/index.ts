import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/online",
      name: "online",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/OnlineView.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("../views/DetailView/index.vue"),
    },
    {
      path: "/transaction",
      name: "transaction",
      component: () => import("../views/Transaction.vue"),
    },
    {
      path: "/imageinfo",
      name: "imageinfo",
      component: () => import("../views/ImageinfoView/index.vue"),
    },
    {
      path: "/uploadmodel",
      name: "uploadmodel",
      component: () => import("../views/Uploadmodel/index.vue"),
    },
  ],
});

export default router;

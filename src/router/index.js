import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/add-contact/:id?",
      name: "AddContact",
      component: () => import("../views/AddContact.vue"),
    },
  ],
});

export default router;

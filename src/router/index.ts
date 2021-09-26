import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import AlbumList from "../views/AlbumList.vue";
import About from "../views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AlbumList",
    component: AlbumList,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

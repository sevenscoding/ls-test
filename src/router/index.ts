import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CategoryView from '@/views/CategoryView.vue';
import { ROUTES_PATH, ROUTES_NAME } from '@/constant/routes/routes';

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES_PATH.CATEGORY,
    name: ROUTES_NAME.CATEGORY,
    component: CategoryView,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: CategoryView,
  },
  {
    path: '/',
    redirect: ROUTES_PATH.CATEGORY,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

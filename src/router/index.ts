import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CategoriesView from '@/views/CategoryView.vue';
import { ROUTES_PATH, ROUTES_NAME } from '@/constant/routes/routes';

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES_PATH.CATEGORY,
    name: ROUTES_NAME.CATEGORY,
    component: () => import(/* webpackChunkName: "category" */ '../views/CategoryView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: CategoriesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

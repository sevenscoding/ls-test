import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CategoriesView from '@/views/CategoriesView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Categories',
    component: CategoriesView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
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

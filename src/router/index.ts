import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { ROUTES_PATH, ROUTES_NAME } from '@/constant/routes/routes';

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTES_PATH.CATEGORY,
    name: ROUTES_NAME.CATEGORY,
    component: () => import('@/views/CategoryView.vue'),
  },
  {
    path: ROUTES_PATH.PRODUCTS,
    name: ROUTES_NAME.PRODUCTS,
    component: () => import('@/views/ProductsView.vue'),
  },
  {
    path: ROUTES_PATH.PRODUCT,
    name: ROUTES_NAME.PRODUCT,
    component: () => import('@/views/ProductView.vue'),
  },
  {
    path: ROUTES_PATH.CART,
    name: ROUTES_NAME.CART,
    component: () => import('@/views/CartView.vue'),
  },
  {
    path: ROUTES_PATH.SUCCESS,
    name: ROUTES_NAME.SUCCESS,
    component: () => import('@/views/SuccessView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/CategoryView.vue'),
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

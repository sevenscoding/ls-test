import { createRouter, createWebHistory } from 'vue-router';
import CategoryView from '@/views/CategoryView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';
import SuccessView from '@/views/SuccessView.vue';
import { ROUTES_PATH, ROUTES_NAME } from '@/constant/routes/routes';
const routes = [
    {
        path: ROUTES_PATH.CATEGORY,
        name: ROUTES_NAME.CATEGORY,
        component: CategoryView,
    },
    {
        path: ROUTES_PATH.PRODUCTS,
        name: ROUTES_NAME.PRODUCTS,
        component: ProductsView,
    },
    {
        path: ROUTES_PATH.PRODUCT,
        name: ROUTES_NAME.PRODUCT,
        component: ProductView,
    },
    {
        path: ROUTES_PATH.CART,
        name: ROUTES_NAME.CART,
        component: CartView,
    },
    {
        path: ROUTES_PATH.SUCCESS,
        name: ROUTES_NAME.SUCCESS,
        component: SuccessView,
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
//# sourceMappingURL=index.js.map
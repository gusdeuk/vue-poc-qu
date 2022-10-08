import { createRouter, createWebHistory } from 'vue-router';

// -----------------------------------------------------------------
// normal import for non async nav components
// -----------------------------------------------------------------
import PlanetsPage from '../views/PlanetsPage/PlanetsPage.vue';

const routes = [
    {
        path: '/',
        name: 'Planets',
        component: PlanetsPage
    },
    {
        path: '/starships',
        name: 'Starships',
        // -----------------------------------------------------------------
        // route level code-splitting > ASYNC comp
        // >>>>> generates a separate chunk (NNNN.[hash].js) for this route (using webpackChunkName)
        // >>>>> lazy-loaded when the route is visited.
        // -----------------------------------------------------------------
        component: () => {
            return import(
                /* webpackChunkName: "page-starships" */ '../views/StarshipsPage/StarshipsPage.vue'
            );
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => {
            return import(
                /* webpackChunkName: "page-contact" */ '../views/ContactPage/ContactPage.vue'
            );
        }
    },
    {
        path: '/shop',
        name: 'Shop',
        component: () => {
            return import(/* webpackChunkName: "page-shop" */ '../views/ShopPage/ShopPage.vue');
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

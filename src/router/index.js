import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Index.vue'),
        },
        {
            path: '/services',
            name: 'Services',
            component: () => import('../views/Services.vue'),
        },
        {
            path: '/aboutUs',
            name: 'AboutUs',
            component: () => import('../views/AboutUs.vue'),
        },
        {
            path: '/contactUs',
            name: 'ContactUs',
            component: () => import('../views/ContactUs.vue'),
        },
    ],
});

export default router;
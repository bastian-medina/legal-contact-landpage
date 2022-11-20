import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../App.vue'),
        },
        {
            path: '/helloWorld',
            name: 'helloWorld',
            component: () => import('../views/HelloWorld.vue'),
        },
    ],
});

export default router;
import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from ".././components/HelloWorld.vue";

const routes = [
    {
        path: "/",
        component: HelloWorld,
        meta: { title: "Поиск кино" },
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Поиск кино";
    next();
});

export default router;

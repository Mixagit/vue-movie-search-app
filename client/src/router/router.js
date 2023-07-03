import { createRouter, createWebHashHistory } from "vue-router";

import Main from ".././pages/Main.vue";
import MovieCard from ".././components/MovieCard.vue";

const routes = [
    {
        path: "/",
        component: Main,
        meta: { title: "Movie search" },
    },
    {
        path: "/movies/:id",
        component: MovieCard,
        meta: { title: "Movie by id" },
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Movie search";
    next();
});

export default router;

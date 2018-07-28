import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default function () {
    const router = new VueRouter({
        history: true,
        routes: [
            {path: '/index', component: () => import('../components/index.vue')},
            {path: '/about', component: () => import('../components/about.vue')},
            {path: '*', redirect: '/index'}
        ]
    })
    return router
}
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default function () {
    const router = new VueRouter({
        mode:'history',
        routes: [
            {path: '/index', component: () => import('@/pages/index/index.vue')},
            {path: '/about', component: () => import('../components/about.vue')},
            {path: '/top', component: () => import('../components/top.vue')},
            {path: '*', redirect: '/index'}
        ]
    })
    return router
}
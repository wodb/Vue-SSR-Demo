import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default function () {
    const router = new VueRouter({
        mode:'history',
        scrollBehavior (to, from, savedPosition) {
            return { x: 0, y: 0 }
        },
        routes: [
            {path: '/index/:id?', component: () => import('@/pages/index/index.vue')},
            {path: '/books', component: () => import('@/pages/books/index.vue')},
            {path: '/about', component: () => import('@/components/about.vue')},
            {path: '/top', component: () => import('@/components/top.vue')},
            {path: '*', redirect: '/index'}
        ]
    })
    return router
}
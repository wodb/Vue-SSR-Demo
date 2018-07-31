import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const CreateListView = (id) => () => import('@/pages/index/CreateListView').then(m => m.default(id))

export default () => {
    const router = new VueRouter({
        mode: 'history',
        scrollBehavior(to, from, savedPosition) {
            return { x: 0, y: 0 }
        },
        routes: [
            {
                path: '/index',
                component: () => import('@/pages/index/index.vue'),
                children: [
                    { path: '', component: CreateListView('top') },
                    { path: 'frontend', component: CreateListView('frontend') },
                    { path: 'Andriod', component: CreateListView('Andriod') },
                    { path: 'backend', component: CreateListView('backend') },
                    { path: 'ai', component: CreateListView('ai') },
                    { path: 'IOS', component: CreateListView('IOS') },
                    { path: 'freebie', component: CreateListView('freebie') },
                    { path: 'article', component: CreateListView('article') },
                    { path: 'devops', component: CreateListView('devops') },
                    { path: '*', redirect: '/index' }
                ]
            },
            { path: '/books', component: () => import('@/pages/books/index.vue') },
            { path: '/about', component: () => import('@/components/about.vue') },
            { path: '*', redirect: '/index' }
        ]
    })
    return router
}
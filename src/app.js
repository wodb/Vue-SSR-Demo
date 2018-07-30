/*这是一个工厂函数导出app的实例*/
import Vue from 'vue'
import ElementUI from 'element-ui'
import createRouter from './router/index'
import App from './App.vue'
import createStore from './store/index'
import { sync } from 'vuex-router-sync'

Vue.use(ElementUI, { size: 'small'})

export function createApp() {

    const router = createRouter()
    const store = createStore()

    sync(store,router)
    const app = new Vue({
        router,
        store,
        render: (h) => h(App)
    })
    return {app, router, store}
}
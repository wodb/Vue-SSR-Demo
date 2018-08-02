/*这是一个工厂函数导出app的实例*/
import Vue from 'vue'
import ElementUI from 'element-ui'
import createRouter from './router/index'
import App from './App.vue'
import createStore from './store/index'
import { sync } from 'vuex-router-sync'
import * as filters from '@/util/filters'
import titleMixin from './util/title-mixin'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/style.stylus'

Object.keys(filters).forEach((key) => {
    Vue.filter(key,filters[key])
})

Vue.mixin(titleMixin)

Vue.use(ElementUI, { size: 'small' })


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
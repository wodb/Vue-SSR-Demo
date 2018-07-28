/*这是一个工厂函数导出app的实例*/

import Vue from "vue";
import createRouter from "./router/index";
import App from "./App.vue";

export function createApp() {
    const router = createRouter()
    const app = new Vue({
        router,
        render: (h) => h(App)
    })
    return {app, router}
}
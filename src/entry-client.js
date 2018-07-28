import Vue from 'vue'
import {createApp} from './app'

const {app, router, store} = createApp()


if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}



router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        console.log(`entry-client`,to,from)

        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)

        // 我们只关心非预渲染的组件
        // 所以我们对比它们，找出两个匹配列表的差异组件
        // ?????????????????
        let diffed = false
        const activated = matched.filter((c, i) => {
            console.log(diffed || (diffed = (prevMatched[i] !== c)));
            return diffed || (diffed = (prevMatched[i] !== c))
        })

        if (!activated.length) {
            return next()
        }
        console.log(activated);
        // 这里如果有加载指示器(loading indicator)，就触发

        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({store, route: to})
            }
        })).then(() => {

            // 停止加载指示器(loading indicator)

            next()
        }).catch(next)
    })
    // 挂载vue实例
    app.$mount('#app')
})

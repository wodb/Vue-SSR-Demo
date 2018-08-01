import {createApp} from './app'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

const {app, router, store} = createApp()

NProgress.configure({ easing: 'ease', speed: 500 })

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        // start progress
        NProgress.inc()

        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)

        // 我们只关心非预渲染的组件
        // 所以我们对比它们，找出两个匹配列表的差异组件
        // ????????????????? 共用父级自己不同
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })

        if (!activated.length) {
            return next()
        }
        // 这里如果有加载指示器(loading indicator)，就触发

        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({store, route: to})
            }
        })).then(() => {
            // 停止加载指示器(loading indicator)
            NProgress.done()
            next()
        }).catch(next)
    })
    // 挂载vue实例
    app.$mount('#app')
})

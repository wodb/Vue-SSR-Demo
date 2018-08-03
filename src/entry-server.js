import {createApp} from './app'
import requrest from '@/util/request'

export default (context) => {

    return new Promise((resolve,reject) => {
        const {app,router,store} = createApp()

        router.push(context.url)

        router.onReady(() => {
            const matcheds = router.getMatchedComponents()

            if (!matcheds.length) return reject({s:404})

            console.log(`entry-server len`,matcheds.length)

            // set cookie
            requrest.createApi({cookie:context.cookie})

            Promise.all(matcheds.map(Component => {
                if (Component.asyncData) {
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    })
                }
            }))
                .then(() =>{
                    // 在所有预取钩子(preFetch hook) resolve 后，
                    // 我们的 store 现在已经填充入渲染应用程序所需的状态。
                    // 当我们将状态附加到上下文，
                    // 并且 `template` 选项用于 renderer 时，
                    // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
                    context.state = store.state

                    resolve(app)
                })
                .catch(err => {
                    return reject({s:500,m:err.message})
                })
        },reject)
    })
}
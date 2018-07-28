import {createApp} from './app'

export default (context) => {

    return new Promise((resolve,reject) => {
        const {app,router} = createApp()

        router.push(context)

        router.onReady(() => {
            const matcheds = router.getMatchedComponents()
            if (!matcheds.length) return reject({code:404})
            // 匹配到路径返回app
            resolve(app)
        },reject)
    })
}
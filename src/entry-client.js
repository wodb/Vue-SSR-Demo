import {createApp} from  './app'

const { app, router } = createApp()

router.onReady(() => {
  // 挂载vue实例
  app.$mount('#app')
})

import axios from 'axios'
import {Message} from 'element-ui'

const service = axios.create({
    baseURL:CONFIG.baseURL,
    timeout: 10000
})

service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(`for debug request`,error)
    return Promise.reject(error)
})

service.interceptors.response.use(response => {

    let {status,message} = response.data

    if (status !== 'success') {
        Message({
            message: message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(response.data)
    }

    return response
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error)
})

export default service

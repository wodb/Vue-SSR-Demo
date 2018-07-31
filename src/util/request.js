import axios from 'axios'

const service = axios.create({
    baseURL:'http://test.mac.com',
    timeout: 10000
})

service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(`for debug request`,error)
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

export default service

import axios from 'axios'

export default {
	api:null, // 当做API方法
	config:{
		cookie:''
	}, // 这里存放cookie和一些配置
	setCookie(cookie) {
		this.config.cookie = cookie
	},
	createApi(config) {
		this.config = config

		const service = axios.create({
			baseURL:'http://test.mac.com',
			timeout:10000,
			headers:{
				// token:this.config.cookie
			}
		})

		service.interceptors.request.use(config => {

			console.log(`request.js config`,this.config)
		    return config
		}, error => {
		    console.log(`for debug request`,error)
		    return Promise.reject(error)
		})

		service.interceptors.response.use(response => {
			if (response.data.s != 1) {
				return Promise.reject(response.data.m)
			}
		    return response.data
		}, error => {
		    return Promise.reject(error)
		})
		
		this.api = service
	}
}
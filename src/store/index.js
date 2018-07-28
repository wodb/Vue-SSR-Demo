import Vuex from 'vuex'
import Vue from 'vue'
import Mock from 'mockjs'

Vue.use(Vuex)

const state = {
    indexList:[],
    aboutList:[],
    top:[]
}

const mutations = {
    setList:(state,payload) => {
        state.indexList = payload
    },
    setAbout(state,payload) {
        state.aboutList = payload
    },
    setTop(state,payload) {
        state.top = payload
    }
}

const getters = {

}

const actions = {
    getList(context,payload) {
        return new Promise((resolve,reject) => {
            setTimeout(function () {
                const mockData = Mock.mock({
                    "array|1-10": [
                        {
                            "name|+1": Mock.Random.cparagraph(1,10),
                            "id|+1": Mock.Random.integer(0, 100)
                        }
                    ]
                })
                context.commit('setList',mockData.array)
                resolve()
            },1500)
        })
    },
    getAbout(context,payload) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const mockData = Mock.mock({
                    "array|1-15": [
                        {
                            "name|+1": Mock.Random.cparagraph(),
                            "id|+1": Mock.Random.integer(0, 100)
                        }
                    ]
                })
                context.commit('setAbout',mockData.array)
                resolve()
            },1000)
        })
    },
    getTop(context,payload) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const mockData = Mock.mock({
                    "array|1-20": [
                        {
                            "name|+1": Mock.Random.cparagraph(),
                            "id|+1": Mock.Random.integer(0, 100)
                        }
                    ]
                })
                context.commit('setTop',mockData.array)
                resolve()
            },500)
        })
    }
}

export default () => {
    return new Vuex.Store({
        state,
        mutations,
        getters,
        actions
    })
}
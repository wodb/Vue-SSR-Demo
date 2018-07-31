import {fetchIndexTags,fetchIndexListByType} from '@/api/index'

const app = {
    state: {
        activeType:null, // 当前类型
        indexTags: [],   // 当前页面的属性
        indexList: {
            top:[], // 推荐页面
            frontend:[], // 前端页面
            Andriod:[] // 安卓页面
        },   // 当前页面的列表
    },
    mutations: {
        SET_ACTIVE_TYPE(state,{type}) {
            state.activeType = type
        },
        SET_INDEX_TAGS(state, payload) {
            state.indexTags = payload
        },
        SET_INDEX_LIST(state, {type,data}) {
            state.indexList[type] = state.indexList[type].concat(data)
        }
    },
    actions: {
        FETCH_ACTIVE_TYPE(context,{type}) {
            context.commit('SET_ACTIVE_TYPE',{
                type
            })
        },
        ENSURE_ACTIVE_ITEMS({commit,dispatch,getters}) {
            return dispatch('FETCH_INDEX_TAGS')
                .then(res => {
                    dispatch('FETCH_ACTIVE_TYPE',{type:res[0].attr})
                })
        },
        FETCH_INDEX_TAGS(context) {
            return fetchIndexTags()
                .then(res => {
                    context.commit('SET_INDEX_TAGS', res)
                    return res
                })
        },
        FETCH_INDEX__LIST_BY_TYPE({commit},{type}) {
            return fetchIndexListByType(type)
                .then(res => {
                    commit('SET_INDEX_LIST', { type, data: res.d})
                })
        }
    }
}

export default app
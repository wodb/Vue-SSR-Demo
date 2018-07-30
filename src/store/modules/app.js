const app = {
    state:{
        indexTags:[],   // 当前页面的属性
        indexList:[],   // 当前页面的列表
    },
    mutations:{
        setIndexTags(state,payload) {
            state.indexTags = payload
        },
        setIndexList(state,payload) {
            state.indexList = payload
        }
    },
    actions:{
        getIndexTags(context,payload) {
            return new Promise((resolve,reject) => {
                setTimeout(function () {
                    const data = [{id:0,text:'推荐'},{id:1,text:'前端'},{id:2,text:'Andriod'},{id:3,text:'后端'},{id:4,text:'人工智能'},{id:5,text:'IOS'},{id:6,text:'工具资源'},{id:7,text:'阅读'},{id:8,text:'运维'}]
                    context.commit('setIndexTags',data)
                    resolve(data)
                },200)
            })
        },
        getIndexList({commit},payload) {

        }
    }
}

export default app
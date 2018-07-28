const app = {
    state:{
        indexList:[],
    },
    mutations:{
        setIndexList:function(state,payload) {
            state.indexList = payload
        }
    },
    actions:{
        getIndexList({commit}) {

        }
    }
}

export default app
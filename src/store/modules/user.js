const user = {
    state:{
        userInfo:null
    },
    mutations:{
        setUser:(state,userInfo) => {
            state.userInfo = userInfo
        },
    },
    actions:{
        getUser({commit,state}) {

        },
    }
}

export default user
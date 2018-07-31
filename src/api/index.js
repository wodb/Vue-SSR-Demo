import request from '@/util/request'
const data = [
    {id: 0, text: '推荐',attr:''},
    {id: 1, text: '前端',attr:'/frontend'},
    {id: 2, text: 'Andriod',attr:'/Andriod'},
    {id: 3, text: '后端',attr:'/backend'},
    {id: 4, text: '人工智能',attr:'/ai'},
    {id: 5, text: 'IOS',attr:'/IOS'},
    {id: 6, text: '工具资源',attr:'/freebie'},
    {id: 7, text: '阅读',attr:'/article'},
    {id: 8, text: '运维',attr:'/devops'}]

const delay = (resfun,timer) => setTimeout(() => resfun(),timer)

// 首页tag
export const fetchIndexTags = () => new Promise((resolve,reject) => delay(() => resolve(data),200))

// 首页list
export const fetchIndexListByType = (type) => request.get('/v1/get_recommended_entry',{
    params:{
        suid:'nvfBZaZ2jjZyffaZqJAN',
        ab:'welcome_3',
        src:'web'
    }
})

import request from '@/util/request'

const data = [
    { id: 0, text: '推荐', attr: '' },
    { id: 1, text: '前端', attr: '/frontend' },
    { id: 2, text: 'Andriod', attr: '/Andriod' },
    { id: 3, text: '后端', attr: '/backend' },
    { id: 4, text: '人工智能', attr: '/ai' },
    { id: 5, text: 'IOS', attr: '/IOS' },
    { id: 6, text: '工具资源', attr: '/freebie' },
    { id: 7, text: '阅读', attr: '/article' },
    { id: 8, text: '运维', attr: '/devops' }]

const delay = (resfun, timer) => setTimeout(() => resfun(), timer)

// 首页tag
export const fetchIndexTags = () => new Promise((resolve, reject) => delay(() => resolve(data), 200))

// 首页list
export const fetchEntriesByType = (type) => {
    let category = ''
    switch (type) {
        case 'frontend':
            category = '5562b415e4b00c57d9b94ac8'
            break
        case 'Andriod':
            category = '5562b410e4b00c57d9b94a92'
            break
        case 'backend':
            category = '5562b419e4b00c57d9b94ae2'
            break
        case 'ai':
            category = '57be7c18128fe1005fa902de'
            break
        case 'IOS':
            category = '5562b405e4b00c57d9b94a41'
            break
        case 'freebie':
            category = '5562b422e4b00c57d9b94b53'
            break
        case 'article':
            category = '5562b428e4b00c57d9b94b9d'
            break
        case 'devops':
            category = '5b34a478e1382338991dd3c1'
    }
    let params = {
        category: category,
        ab: 'welcome_3',
        before: Math.random(),
        src: 'web'
    }
    
    return request.api.get('/timeline/get_entry_by_rank', {
        params
    }).then(res => res.d.entrylist)
}

export const fetchRecommendByType = (type) => {
    let params = {
        suid: 'nvfBZaZ2jjZyffaZqJAN',
        ab: 'welcome_3',
        src: 'web'
    }
    return request.api.get('/recommender/get_recommended_entry', {
        params
    }).then(res => res.d)
}
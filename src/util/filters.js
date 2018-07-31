export const formatter = (v) => {
    let timeDistance = (new Date().getTime() - new Date(v).getTime()) / 1000
    if ((timeDistance / 60) < 1) {
        return `1分钟前`
    } else if ((timeDistance / 60) < 60) {
        return `${Math.floor((timeDistance / 60))}分钟前`
    } else if ((timeDistance / 60 / 60) < 24) {
        return `${Math.floor((timeDistance / 60 / 60))}小时前`
    } else if ((timeDistance / 60 / 60 / 24) < 30) {
        return `${Math.floor((timeDistance / 60 / 60 / 24))}天前`
    } else if ((timeDistance / 60 / 60 / 24 / 30) < 12) {
        return `${Math.floor((timeDistance / 60 / 60 / 24 / 30))}月前`
    } else {
        return `${Math.floor((timeDistance / 60 / 60 / 24 / 30 / 12))}年前`
    }
}
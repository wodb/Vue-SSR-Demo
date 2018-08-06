/**
 * 防抖动
 * @param  {Function} fn    [description]
 * @param  {[type]}   delay [description]
 * @return {[type]}         [description]
 */
export function debounce(fn, delay) {
    let timer = null
    return function() {
        let context = this
        let args = arguments

        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}
/**
 * 节流阀
 * @param  {[type]} func    [description]
 * @param  {[type]} wait    [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
export function throttle(func, wait, options) {
    let context, args, result
    let timeout = null
    let previous = 0
    if (!options) options = {}
    let later = function() {
        previous = options.leading === false ? 0 : new Date().getTime()
        timeout = null
        result = func.apply(context, args)
        if (!timeout) context = args = null
    }
    return function() {
        let now = new Date().getTime()
        if (!previous && options.leading === false) previous = now
        let remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            result = func.apply(context, args)
            if (!timeout) context = args = null
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
        return result
    }
}

/**
 * 设置cookie
 * document.cookie = "cookieName=mader; expires=Fri, 31 Dec 2017 15:59:59 GMT; path=/mydir; domain=cnblogs.com; max-age=3600; secure=true";
 * cookieName=mader ：name=value，cookie的名称和值
 * expires=Fri, 31 Dec 2017 15:59:59 GMT： expires，cookie过期的日期，如果没有定义，cookie会在对话结束时过期。日期格式为 new Date().toUTCString()
 * path=/mydir: path=path (例如 '/', '/mydir') 如果没有定义，默认为当前文档位置的路径。
 * domain=cnblogs.com： 指定域(例如 'example.com'， '.example.com' (包括所有子域名), 'subdomain.example.com') 如果没有定义，默认为当前文档位置的路径的域名部分。
 * max-age=3600： 文档被查看后cookie过期时间，单位为秒
 * secure=true： cookie只会被https传输 ，即加密的https链接传输
 */
export function setCookie(name, value, day) {
    if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        let expires = day * 24 * 60 * 60 * 1000
        let date = new Date(+new Date() + expires)
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString() + ';path=/'
    } else {
        document.cookie = name + "=" + escape(value)
    }
}
/**
 * 获取cookie
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export function getCookie(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2])
    } else {
        return ''
    }
}
/**
 * 删除cookie
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export function removeCookie(name) {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let cval = getCookie(name)
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
}

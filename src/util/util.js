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
 * @param  {[type]} func  [description]
 * @param  {[type]} delay [description]
 * @return {[type]}       [description]
 */
export function throttle(func, delay) {
    let timer = null
    let startTime = Date.parse(new Date())

    return function() {
        let curTime = Date.parse(new Date())
        let remaining = delay - (curTime - startTime)
        let context = this
        let args = arguments

        clearTimeout(timer)
        if (remaining <= 0) {
            func.apply(context, args)
            startTime = Date.parse(new Date())
        } else {
            timer = setTimeout(func, remaining)
        }
    }
}

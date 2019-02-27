/**
 * 函数防抖
 * @param {Function} fn 函数
 * @param {Number} delay 延时
 */
export default function debounce (fn, delay) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

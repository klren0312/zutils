/**
 * 函数防抖
 * @param {Function} fn 函数
 * @param {Number} delay 延时
 */
function debounce (fn, delay) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
module.exports = debounce
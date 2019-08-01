/**
 * @desc 函数防抖
 * 保证函数在规定ms内不被触发, 只执行一次
 * 
 * @param {Function} fn 执行的函数
 * @param {Number} delay 延迟 ms
 * 
 * @return {Function} 新的防抖函数
 */
function debounce (fn: any, delay: number): Function {
  let timer: number = null
  return function (): void {
    timer && clearTimeout(timer)
    // 需要使用window, 不然会判断为node的
    timer = window.setTimeout(function () {
      fn.apply(this, arguments)
    }.bind(this), delay)
  }
}

export default debounce

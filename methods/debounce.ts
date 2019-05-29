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

/**
 * @desc 函数节流
 * 规定时间内多次执行函数, 只会执行一次
 * 
 * @param {Function} callback 执行函数
 * @param {Number} delay 延迟 ms
 * 
 * @return {Function} 新的节流函数
 */
function throttle (callback: any, delay: number): Function {
  let baseTime: number = 0
  return function (): void {
    const currentTime: number = Date.now()
    if (baseTime + delay < currentTime) {
      callback.apply(this, arguments)
      baseTime = currentTime
    }
  }
}

export default throttle

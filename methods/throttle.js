/**
 * 函数节流
 * @param {Function} fn 函数
 * @param {Number} delay 延时
 */
function throttle (fn, delay) {
  var baseTime = 0
  return function () {
    var currentTime = Date.now()
    if (baseTime + delay <= currentTime) {
      baseTime = currentTime
      fn.apply(this, arguments)
    }
  }
}
export default throttle

/**
 * 函数节流
 * @param {Function} fn 函数
 * @param {Number} delay 延时
 * @param {Object} context 上下文
 */
// function throttle (fn, delay = 100, context = this) {
//   let timeout = null
//   let fnArgs = null

//   return (...args) => {
//     if (!timeout) {
//       fnArgs = args
//       timeout = setTimeout(() => {
//         fn.apply(context, fnArgs)
//         timeout = null
//       }, delay)
//     }
//   }
// }

/**
 * desperated
 */
// export function dethrottle (fn, delay) {
//   let start = 0
//   return function () {
//     let args = [],
//         len = arguments.length
//     while( len-- ) args[ len ] = arguments[ len ]
//     let current = Date.now()
//     if(start + delay <= current) {
//       start = current
//       fn.apply(this, args)
//     }
//   }
// }

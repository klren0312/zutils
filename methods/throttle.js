/**
 * 函数节流
 * @param {Function} fn 函数
 * @param {Number} delay 延时
 */
function throttle(callback, offset) {
  var baseTime = 0
  return function () {
    var currentTime = Date.now()
    if (baseTime + offset <= currentTime) {
      baseTime = currentTime
      callback.apply(this, arguments)
    }
  }
}

module.exports = throttle

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

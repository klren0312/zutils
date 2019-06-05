/**
 * 睡眠函数
 * @param {Number} s 秒
 */
function sleep (s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, s * 1000)
  })
}
export default sleep
